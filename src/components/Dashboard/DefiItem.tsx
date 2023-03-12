import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, IconButton } from '@mui/material';
import ProtocolItem from './ProtocolItem';

export default function DefiItem(props: { title: string, icon: any, data: any, filter: string, type: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotal = () => {
    let sum = 0;
    if (props.data === undefined) return;
    for (let key of Object.keys(props.data)) {
      let data = props.data[key]
      for (let index of Object.keys(data)) {
        const detail = data[index]
        if (props.filter === "1d") {
          sum += parseFloat(detail.total_value_day);
        } else if (props.filter === "7d") {
          sum += parseFloat(detail.total_value_week);
        } else {
          sum += parseFloat(detail.total_value);
        }
      }
    }
    setTotalPrice(sum);
  }
  useEffect(() => {
    getTotal();
  }, [props.filter])
  return (
    <div className="defi-item">
      <div className="defi-item-titlebar" onClick={() => setOpen(!open)}>
        <div className="titlebar-name">
          {props.icon}
          <h3>{props.title}</h3>
        </div>
        <div className="titlebar-control">
          <span className="titlebar-total">$&nbsp;{totalPrice.toFixed(2)}</span>
          <div className="titlebar-action">
            <IconButton onClick={() => setOpen(!open)}>
              {open ?
                <KeyboardArrowUpIcon />
                :
                <KeyboardArrowDownIcon />
              }
            </IconButton>
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div className="defi-item-content">
          {Object.keys(props.data).map((item, key) => (
            <ProtocolItem type={props.type} title={item} data={Object.values(props.data)[key]} key={key} filter={props.filter} />
          ))}
        </div>
      </Collapse>
    </div>
  )
}
import { useEffect, useState } from "react"
import { Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ProtocolItem(props: { title: string, data: any, filter: string, type: string }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const getTotal = () => {
    let sum = 0;
    props.data.map((item: any) => {
      if (props.filter === "1d") {
        sum += parseFloat(item.total_value_day);
      } else if (props.filter === "7d") {
        sum += parseFloat(item.total_value_week);
      } else {
        sum += parseFloat(item.total_value);
      }
    })
    setTotalPrice(sum)
  }
  useEffect(() => {
    getTotal();
  }, [props.filter])
  return (
    <div className="protocol-item">
      <div className="protocol-titlebar" onClick={() => setOpen(!open)}>
        <div className="protocal-title">
          <img
            src={`./img/${props.title}.png`}
            alt=""
          />
          <h4>{props.title}</h4>
        </div>
        <div className="protocol-action">
          <span className="protocol-item-total">$&nbsp;{totalPrice.toFixed(2)}</span>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ?
              <KeyboardArrowUpIcon />
              :
              <KeyboardArrowDownIcon />
            }
          </IconButton>
        </div>
      </div>
      <Collapse in={open}>
        <div className="protocol-content">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Token</TableCell>
                {/* <TableCell align="center">
                  {props.type === "lending" && "Lend"}
                </TableCell>
                <TableCell align="center">
                  {props.type === "borrowing" && "Borrow"}
                </TableCell>
                <TableCell align="center">
                  {props.type === "staking" && "Stake"}
                </TableCell> */}
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((item: any, key: number) => (
                <TableRow key={key}>
                  <TableCell align="center"><span className="mini-table-cell">{item.a_token + " " + item.b_token}</span></TableCell>
                  {/* <TableCell align="center"><span className="mini-table-cell">
                    {props.type === "lending" &&
                      <>
                        {props.filter === "now" && parseFloat(item.lend).toFixed(4)}
                        {props.filter === "1d" && parseFloat(item.lend_day).toFixed(4)}
                        {props.filter === "7d" && parseFloat(item.lend_week).toFixed(4)}
                      </>
                    }
                  </span></TableCell>
                  <TableCell align="center"><span className="mini-table-cell">
                    {props.type === "borrowing" &&
                      <>
                        {props.filter === "now" && parseFloat(item.borrow).toFixed(4)}
                        {props.filter === "1d" && parseFloat(item.borrow_day).toFixed(4)}
                        {props.filter === "7d" && parseFloat(item.borrow_week).toFixed(4)}
                      </>
                    }
                  </span></TableCell>
                  <TableCell align="center"><span className="mini-table-cell">
                    {props.type === "staking" &&
                      <>
                        {props.filter === "now" && parseFloat(item.stake).toFixed(4)}
                        {props.filter === "1d" && parseFloat(item.stake_day).toFixed(4)}
                        {props.filter === "7d" && parseFloat(item.stake_week).toFixed(4)}
                      </>
                    }
                  </span></TableCell> */}
                  <TableCell align="center"><span className="mini-table-cell">
                    {props.filter === "now" && parseFloat(item.total_value).toFixed(4)}
                    {props.filter === "1d" && parseFloat(item.total_value_day).toFixed(4)}
                    {props.filter === "7d" && parseFloat(item.total_value_week).toFixed(4)}
                  </span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Collapse>
    </div>
  )
}
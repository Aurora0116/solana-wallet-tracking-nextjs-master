import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DefiItem from "./DefiItem";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BalanceIcon from '@mui/icons-material/Balance';
import CasinoIcon from '@mui/icons-material/Casino';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DefiSkeleton from './DefiSkeleton';
import { DEFI_API_URL } from "config";
interface Props {
  drawerWidth: number;
  searchAddress: string;
}

interface DefiData {
  liquidity: any;
  farming: any;
  lending: any;
  borrowing: any;
  staking: any;
}
export const DefiContent = (props: Props) => {
  const [dateFilter, setDateFilter] = useState("now");
  const [loading, setLoading] = useState(false);
  const [defiData, setDefiData] = useState<DefiData>();
  const getData = async () => {
    setLoading(true);
    try {
      await fetch(DEFI_API_URL)
        .then(resp =>
          resp.json()
        ).then((json) => {
          console.log(json)
          setDefiData(json)
        })
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main-content">
      <Container>
        <div className="title-bar">
          <h1></h1>
          <ButtonGroup variant="outlined">
            <Button variant={dateFilter === "now" ? "contained" : "outlined"} onClick={() => setDateFilter("now")}><span className="text-bold">Now</span></Button>
            <Button variant={dateFilter === "1d" ? "contained" : "outlined"} onClick={() => setDateFilter("1d")}><span className="text-bold">24H</span></Button>
            <Button variant={dateFilter === "7d" ? "contained" : "outlined"} onClick={() => setDateFilter("7d")}><span className="text-bold">1W</span></Button>
          </ButtonGroup>
        </div>
        {loading ?
          <DefiSkeleton />
          :
          defiData &&
          <div className="defi-content">
            <DefiItem title="LP Tokens" type="lp-tokens" icon={<ConfirmationNumberIcon />} data={defiData?.liquidity} filter={dateFilter} />
            <DefiItem title="Farms" type="farms" icon={<AgricultureIcon />} data={defiData?.farming} filter={dateFilter} />
            <DefiItem title="Lending" type="lending" icon={<BalanceIcon />} data={defiData?.lending} filter={dateFilter} />
            <DefiItem title="Borrowing" type="borrowing" icon={<NoteAltIcon />} data={defiData?.borrowing} filter={dateFilter} />
            <DefiItem title="Staking" type="staking" icon={<CasinoIcon />} data={defiData?.staking} filter={dateFilter} />
          </div>
        }
      </Container>
    </div>
  );
};

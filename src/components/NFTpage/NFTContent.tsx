import {
  Container,
  Button,
  ButtonGroup,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NFTThumbnail from "./NFTThumbnail";
import NFTTableSkeleton from "./NFTTableSkeleton";
import { NFT_API_URL } from "config";
import OrderSelect from "components/OrderSelect";
import PaginationFilter from "components/PaginationFilter";
import PerPage from "components/PerPage";

interface Props {
  drawerWidth: number;
  searchAddress: string;
}

interface CollectionData {
  listings1d: string;
  buys1d: string;
  buys_volume1d: string;
  sales1d: string;
  sales_volume1d: string;
  listings7d: string;
  buys7d: string;
  buys_volume7d: string;
  sales7d: string;
  sales_volume7d: string;
  nft: {
    image_uri: string
    collection: string
    symbol: string
  };
}

export const NFTContent = (props: Props) => {
  const router = useRouter();
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateFilter, setDateFilter] = useState("7d");
  const [orderFilter, setOrderFilter] = useState("?order_by=sales_volume1d&order_direction=desc");
  const [perPage, setPerPage] = useState("100");
  const [paginationNum, setPaginationNum] = useState("1");
  const [isQuery, setIsQuery] = useState(false);
  const [queryString, setQueryString] = useState("");

  const getNFTs = async () => {
    setLoading(true);
    let nfts: any = [];
    let filterNft: any = [];
    const apiUrl = `${NFT_API_URL}${orderFilter}&limit=${perPage}&offset=${paginationNum}`;
    const pageRouter = `nfts/${orderFilter}&limit=${perPage}&offset=${paginationNum}`;
    router.push(pageRouter, undefined, { shallow: true });
    if (queryString.length === 0) {
      await fetch(apiUrl)
        .then(resp =>
          resp.json()
        ).catch((e) => {
          console.log(e);
        }).then((json) => {
          nfts = json?.data.stats
        })
      if (nfts !== undefined) {
        if (nfts.length !== 0) {
          for (let item of nfts) {
            if (item.nft.collection !== "unknown") {
              filterNft.push(item)
            }
          }
          setNfts(filterNft);
        }
      }
    }
    setLoading(false);
  }

  const getUrlPath = () => {
    const query = router.query;
    const orderByString = query.order_by ? `?order_by=${query.order_by}` : "";
    const orderDirectionString = query.order_direction ? `&order_direction=${query.order_direction}` : "";
    const limitString = query.limit ? `&limit=${query.limit}` : "";
    const offsetString = query.offset ? `&offset=${query.offset}` : "";
    if (Object.keys(query).length !== 0) {
      setQueryString(`${NFT_API_URL}${orderByString}${orderDirectionString}${limitString}${offsetString}`);
    }
    else {
      setQueryString("")
    }
  }
  // useEffect(() => {
  //   getUrlPath();
  // }, [router.query])

  useEffect(() => {
    getNFTs();
  }, [orderFilter, dateFilter, perPage, paginationNum])
  return (
    <div className="main-content">
      <Container>
        <div className="title-bar">
          <h1>Collections</h1>
          <div className="filter-action">
            <PerPage
              perPage={perPage}
              setPerPage={(value: any) => setPerPage(value)}
            />
            <OrderSelect
              orderFilter={orderFilter}
              dateFilter={dateFilter}
              setOrderFilter={(value: any) => setOrderFilter(value)}
            />
            <ButtonGroup variant="outlined" disabled={loading}>
              <Button variant={dateFilter === "1d" ? "contained" : "outlined"} onClick={() => setDateFilter("1d")}><span className="text-bold">24H</span></Button>
              <Button variant={dateFilter === "7d" ? "contained" : "outlined"} onClick={() => setDateFilter("7d")}><span className="text-bold">1W</span></Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="nft-table">
          {parseInt(perPage) > 20 &&
            <PaginationFilter
              perPage={perPage}
              setPaginationNum={(value: any) => setPaginationNum(value)}
              loading={loading}
              paginationNum={paginationNum}
            />
          }
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <span className="text-bold table-head">No</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Collection</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Symbol</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Linsting</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Buys</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Buys volume</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Sales</span>
                </TableCell>
                <TableCell align="center">
                  <span className="text-bold table-head">Sales volume</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ?
                <>
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                  <NFTTableSkeleton />
                </>
                :
                <>
                  {nfts && nfts?.length !== 0 && nfts.map((row: CollectionData, key) => (
                    row.nft.image_uri !== "unknown" &&
                    <TableRow key={key}>
                      <TableCell align="center">
                        <span className="">{key + 1}</span>
                      </TableCell>
                      <TableCell align="center">
                        <NFTThumbnail
                          image={row.nft.image_uri}
                          collection={row.nft.collection}
                          symbol={row.nft.symbol}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {row.nft.symbol}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {dateFilter === "1d" && row.listings1d}
                          {dateFilter === "7d" && row.listings7d}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {dateFilter === "1d" && row.buys1d}
                          {dateFilter === "7d" && row.buys7d}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {dateFilter === "1d" && parseFloat(row.buys_volume1d).toFixed(2)}
                          {dateFilter === "7d" && parseFloat(row.buys_volume7d).toFixed(2)}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {dateFilter === "1d" && row.sales1d}
                          {dateFilter === "7d" && row.sales7d}
                        </span>
                      </TableCell>
                      <TableCell align="center">
                        <span className="text-bold table-body-cell">
                          {dateFilter === "1d" && parseFloat(row.sales_volume1d).toFixed(2)}
                          {dateFilter === "7d" && parseFloat(row.sales_volume7d).toFixed(2)}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </>}
            </TableBody>
          </Table>
          <PaginationFilter
            perPage={perPage}
            setPaginationNum={(value: any) => setPaginationNum(value)}
            loading={loading}
            paginationNum={paginationNum}
          />
        </div>
      </Container>
    </div>
  );
};

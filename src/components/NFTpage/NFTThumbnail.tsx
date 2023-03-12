import { Skeleton } from "@mui/material";

export default function NFTThumbnail(props: { image: string, collection: string, symbol: string }) {
  return (
    <div className="nft-thumnail">
      {props.image ?
        <>
          <img
            src={props.image}
            alt=""
          />
          <span className="text-bold table-body-cell text-align-left">
            {props.collection}
          </span>
        </> :
        <>
          <Skeleton variant="rectangular" animation="wave" width={40} height={40} style={{ backgroundColor: "#ffffff1f", borderRadius: 2, marginRight: 10 }} />
          <Skeleton variant="rectangular" animation="wave" width={40} height={15} style={{ backgroundColor: "#ffffff1f", borderRadius: 2, marginLeft: 10 }} />
          <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", borderRadius: 2, marginLeft: 10 }} />
        </>
      }
    </div>
  )
}
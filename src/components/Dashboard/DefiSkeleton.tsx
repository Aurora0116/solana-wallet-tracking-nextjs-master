import { Skeleton } from "@mui/material";

export default function DefiSkeleton() {
  return (
    <>
      <div className="defi-item">
        <div className="defi-item-titlebar" style={{ pointerEvents: "none" }}>
          <div className="titlebar-name">
            <Skeleton variant="rectangular" animation="wave" width={28} height={20} style={{ backgroundColor: "#ffffff1f", marginRight: 10, borderRadius: 2 }} />
            <Skeleton variant="rectangular" animation="wave" width={105} height={22} style={{ backgroundColor: "#ffffff1f", margin: "8px 0px", borderRadius: 2 }} />
          </div>
          <div className="titlebar-control">
            <span className="titlebar-total">
              <Skeleton variant="rectangular" animation="wave" width={130} height={22} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
            </span>
          </div>
        </div>
      </div>
      <div className="defi-item">
        <div className="defi-item-titlebar" style={{ pointerEvents: "none" }}>
          <div className="titlebar-name">
            <Skeleton variant="rectangular" animation="wave" width={28} height={20} style={{ backgroundColor: "#ffffff1f", marginRight: 10, borderRadius: 2 }} />
            <Skeleton variant="rectangular" animation="wave" width={105} height={22} style={{ backgroundColor: "#ffffff1f", margin: "8px 0px", borderRadius: 2 }} />
          </div>
          <div className="titlebar-control">
            <span className="titlebar-total">
              <Skeleton variant="rectangular" animation="wave" width={130} height={22} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
            </span>
          </div>
        </div>
      </div>
      <div className="defi-item">
        <div className="defi-item-titlebar" style={{ pointerEvents: "none" }}>
          <div className="titlebar-name">
            <Skeleton variant="rectangular" animation="wave" width={28} height={20} style={{ backgroundColor: "#ffffff1f", marginRight: 10, borderRadius: 2 }} />
            <Skeleton variant="rectangular" animation="wave" width={105} height={22} style={{ backgroundColor: "#ffffff1f", margin: "8px 0px", borderRadius: 2 }} />
          </div>
          <div className="titlebar-control">
            <span className="titlebar-total">
              <Skeleton variant="rectangular" animation="wave" width={130} height={22} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
            </span>
          </div>
        </div>
      </div>
      <div className="defi-item">
        <div className="defi-item-titlebar" style={{ pointerEvents: "none" }}>
          <div className="titlebar-name">
            <Skeleton variant="rectangular" animation="wave" width={28} height={20} style={{ backgroundColor: "#ffffff1f", marginRight: 10, borderRadius: 2 }} />
            <Skeleton variant="rectangular" animation="wave" width={105} height={22} style={{ backgroundColor: "#ffffff1f", margin: "8px 0px", borderRadius: 2 }} />
          </div>
          <div className="titlebar-control">
            <span className="titlebar-total">
              <Skeleton variant="rectangular" animation="wave" width={130} height={22} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
            </span>
          </div>
        </div>
      </div>
      <div className="defi-item">
        <div className="defi-item-titlebar" style={{ pointerEvents: "none" }}>
          <div className="titlebar-name">
            <Skeleton variant="rectangular" animation="wave" width={28} height={20} style={{ backgroundColor: "#ffffff1f", marginRight: 10, borderRadius: 2 }} />
            <Skeleton variant="rectangular" animation="wave" width={105} height={22} style={{ backgroundColor: "#ffffff1f", margin: "8px 0px", borderRadius: 2 }} />
          </div>
          <div className="titlebar-control">
            <span className="titlebar-total">
              <Skeleton variant="rectangular" animation="wave" width={130} height={22} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
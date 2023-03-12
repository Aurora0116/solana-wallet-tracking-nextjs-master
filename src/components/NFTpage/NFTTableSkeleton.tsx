import { Skeleton, TableCell, TableRow } from "@mui/material";

export default function NFTTableSkeleton() {
    return (
        <>
            <TableRow>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={20} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <div className="nft-thumnail">
                        <Skeleton variant="rectangular" animation="wave" width={40} height={40} style={{ backgroundColor: "#ffffff1f", borderRadius: 2 }} />
                        <Skeleton variant="rectangular" animation="wave" width={40} height={15} style={{ backgroundColor: "#ffffff1f", borderRadius: 2, marginLeft: 10 }} />
                        <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", borderRadius: 2, marginLeft: 10 }} />
                    </div>
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
                <TableCell align="center">
                    <Skeleton variant="rectangular" animation="wave" width={60} height={15} style={{ backgroundColor: "#ffffff1f", marginLeft: "auto", marginRight: "auto", borderRadius: 2 }} />
                </TableCell>
            </TableRow>
        </>
    )
}
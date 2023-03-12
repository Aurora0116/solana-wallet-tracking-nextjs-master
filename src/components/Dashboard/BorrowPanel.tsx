import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import styles from "./MainPanel.module.css";
import { LogoImg, ParsedWalletAction } from "../../config";

interface Props {
    borrowData: ParsedWalletAction[]
}
export const BorrowPanel = (props: Props) => {
    const [dense, setDense] = React.useState(false);
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {/* <Typography>Accordion 2</Typography> */}
                <div className={styles.panelSubTitle}>
                    <div>
                        <VolunteerActivismIcon className={styles.titleicon} />
                        <span>Borrowing</span>
                    </div>
                    <h3 style={{ margin: 0 }}>
                        {props.borrowData.length == 0
                            ? "$0.00"
                            : "$" + '0.00'}
                    </h3>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Paper
                    className="sweet-loading"
                >
                    <TableContainer>
                        <Table
                            sx={{ maxWidth: "100%" }}
                            aria-labelledby="tableTitle"
                            size={dense ? "small" : "medium"}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox"></TableCell>
                                    <TableCell
                                        align={"left"}
                                        padding={"none"}
                                    >
                                        Protocol
                                        <TableSortLabel></TableSortLabel>
                                    </TableCell>
                                    <TableCell
                                        align={"left"}
                                        padding={"normal"}
                                    >
                                        Asset
                                        <TableSortLabel></TableSortLabel>
                                    </TableCell>
                                    <TableCell
                                        align={"left"}
                                        padding={"normal"}
                                    >
                                        Balance
                                        <TableSortLabel></TableSortLabel>
                                    </TableCell>
                                    <TableCell
                                        align={"left"}
                                        padding={"normal"}
                                    >
                                        Time
                                        <TableSortLabel></TableSortLabel>
                                    </TableCell>
                                    <TableCell
                                        align={"right"}
                                        padding={"none"}
                                    >
                                        Value
                                        <TableSortLabel></TableSortLabel>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.borrowData.length > 0 &&
                                    props.borrowData.map((action: ParsedWalletAction, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={
                                                    action.sig
                                                }
                                            >
                                                <TableCell padding="checkbox"></TableCell>
                                                <TableCell
                                                    align={"left"}
                                                    padding={"none"}
                                                >
                                                    <div
                                                        style={{ display: "inline-flex", height: "100%", alignItems: 'center' }}
                                                    >
                                                        <Avatar alt={action.protocol} src={LogoImg[action.protocol]} sx={{ width: 24, height: 24 }} />
                                                        <div
                                                            style={{ display: "inline-block" }}
                                                        >
                                                            <p>
                                                                {(action.protocol).toUpperCase()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell
                                                    align={"left"}
                                                    padding={"normal"}
                                                >
                                                    {action.acts[0].a_token}
                                                </TableCell>
                                                <TableCell
                                                    align={"left"}
                                                    padding={"normal"}
                                                >
                                                    <div>
                                                        <span style={{ color: action.acts[0].borrow > 0 ? '#4be74b' : 'red' }}>{(action.acts[0].borrow).toPrecision(5)}</span>
                                                        <span>{' ' + action.acts[0].a_token}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell
                                                    align={"left"}
                                                    padding={"normal"}
                                                >
                                                    {action.time}
                                                </TableCell>
                                                <TableCell
                                                    align={"right"}
                                                    padding={"normal"}
                                                >
                                                    <div>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );

                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </AccordionDetails>
        </Accordion>
    );
};

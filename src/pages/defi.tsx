import React from "react";
import { DefiContent } from "../components/Dashboard/DefiContent";

const drawerWidth = 240;

export default function Defi(props: { searchAddress: string }) {
    return (
        <DefiContent
            drawerWidth={drawerWidth}
            searchAddress={props.searchAddress}
        />
    );
};

import React from "react";
import { NFTContent } from "components/NFTpage/NFTContent";

const drawerWidth = 240;

export default function Defi(props: { searchAddress: string }) {
    return (
        <NFTContent
            drawerWidth={drawerWidth}
            searchAddress={props.searchAddress}
        />
    );
};

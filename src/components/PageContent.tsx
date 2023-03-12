interface Props {
    drawerWidth: number;
    children: React.PropsWithChildren<{}>;
}

export default function PageContent(props: Props) {
    return (
        <div
            style={{
                width: `calc(100% - ${props.drawerWidth}px)`,
                margin: "auto",
                transform: "translateX(240px)"
            }}
        >
            {props.children}
        </div>
    )
}
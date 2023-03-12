import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 180,
        },
    },
};

const options = [
    {
        title: `Listing ⬇`,
        orderBy: `listings`,
        orderDirection: `desc`
    },
    {
        title: `Listing ⬆`,
        orderBy: `listings`,
        orderDirection: `asc`
    },
    {
        title: `Buys ⬇`,
        orderBy: `buys`,
        orderDirection: `desc`
    },
    {
        title: `Buys ⬆`,
        orderBy: `buys`,
        orderDirection: `asc`
    },
    {
        title: `Buys volume ⬇`,
        orderBy: `buys_volume`,
        orderDirection: `desc`
    },
    {
        title: `Buys volume ⬆`,
        orderBy: `buys_volume`,
        orderDirection: `asc`
    },
    {
        title: `Sales ⬇`,
        orderBy: `sales`,
        orderDirection: `desc`
    },
    {
        title: `Sales ⬆`,
        orderBy: `sales`,
        orderDirection: `asc`
    },
    {
        title: `Sales volume ⬇`,
        orderBy: `sales_volume`,
        orderDirection: `desc`
    },
    {
        title: `Sales volume ⬆`,
        orderBy: `sales_volume`,
        orderDirection: `asc`
    }
];

export default function OrderSelect(props: { orderFilter: string, dateFilter: string, setOrderFilter: Function }) {
    const [option, setOption] = useState<string>("");

    const handleChange = (event: SelectChangeEvent<typeof option>) => {
        const {
            target: { value },
        } = event;
        // Default Order string
        // ?order_by=sales_volume7d&order_direction=desc
        const targetItem = options.find(item => item.title.includes(value));
        const orderString = `?order_by=${targetItem?.orderBy}${props.dateFilter}&order_direction=${targetItem?.orderDirection}`;
        props.setOrderFilter(orderString);
        setOption(value);
    };

    return (
        <div className="select-group">
            <span className="select-title">Sort by:</span>
            <FormControl sx={{ m: 1, width: 180 }}>
                <Select
                    displayEmpty
                    value={option}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return "Sales volume ⬇";
                        }
                        return selected;
                    }}
                    MenuProps={MenuProps}
                >
                    {options.map((option, key) => (
                        <MenuItem key={key} value={option.title}>
                            {option.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

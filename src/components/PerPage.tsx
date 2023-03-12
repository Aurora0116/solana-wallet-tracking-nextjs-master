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
            width: 80,
        },
    },
};

const options = [
    "10",
    "20",
    "50",
    "100"
];

export default function PerPage(props: { perPage: string, setPerPage: Function }) {
    const [option, setOption] = useState<string>("");

    const handleChange = (event: SelectChangeEvent<typeof option>) => {
        const {
            target: { value },
        } = event;
        props.setPerPage(value);
        setOption(value);
    };

    return (
        <div className="select-group">
            <span className="select-title">Per page:</span>
            <FormControl sx={{ m: 1, width: 80 }}>
                <Select
                    displayEmpty
                    value={option}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return props.perPage;
                        }
                        return selected;
                    }}
                    MenuProps={MenuProps}
                >
                    {options.map((option, key) => (
                        <MenuItem key={key} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

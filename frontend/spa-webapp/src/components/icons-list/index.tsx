
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface IconProps {
    iconList: string[];
    onSelect: (selectedIcon: string | null) => void;
}

const IconList: React.FC<IconProps> = ({ iconList, onSelect }) => {
    return (
        <Autocomplete
            options={iconList}
            freeSolo
            autoSelect
            clearOnBlur
            renderInput={(params) => <TextField {...params} label="Search Icons" />}
            renderOption={(props, option) => (
                <li {...props}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="material-symbols-rounded" style={{ marginRight: 8 }}>
                            {option}
                        </span>
                        {option}
                    </div>
                </li>
            )}
            onChange={(_, newValue) => onSelect(newValue)}
        />
    );
};

export default IconList;

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({ optionToSelect, options }) {

  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const selectMenuItems = options.map((option) => 
    <MenuItem value={option}>{option}</MenuItem>
  );

  return (
    <Box sx={{ minWidth: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{fontSize: 14 }}>{optionToSelect}</InputLabel>
        <Select
          labelId="select-field-label"
          id="select-field"
          value={option}
          label={optionToSelect}
          onChange={handleChange}
        >
         {selectMenuItems}
        </Select>
      </FormControl>
    </Box>
  );
}
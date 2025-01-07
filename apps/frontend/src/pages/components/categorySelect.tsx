import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const CategorySelect = ({label, value, options, sx, onChange}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  sx?: Record<string, unknown>;
  onChange: (value: string) => void;
}) => (
  <FormControl fullWidth size="small" sx={sx}>
    <InputLabel>{label}</InputLabel>
    <Select value={value} label={label} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
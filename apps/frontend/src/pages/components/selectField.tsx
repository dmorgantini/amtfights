import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const SelectField = ({label, value, options, sx, onChange, readOnly}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  sx?: Record<string, unknown>;
  onChange: (value: string) => void;
  readOnly: boolean;
}) => (
  <FormControl fullWidth size="small" sx={sx}>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
import {TextField} from "@mui/material";

export const TextFieldInput = ({label, value, multiline, rows, sx, onChange}: {
  label: string;
  value: string;
  multiline?: boolean;
  rows?: number;
  sx?: Record<string, unknown>;
  onChange: (value: string) => void;
}) => (
  <TextField
    label={label}
    value={value}
    multiline={multiline}
    rows={rows}
    variant="outlined"
    size="small"
    fullWidth
    sx={sx}
    onChange={(e) => onChange(e.target.value)}
  />
);
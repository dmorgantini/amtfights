import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {DatePicker, TimePicker} from '@mui/x-date-pickers';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router-dom";
import IconPopover from "../components/IconPopover.tsx";

export default function HostATournamentPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    description: "",
    kingdom: "",
    park: "",
    date: null,
    registrationCutoff: null,
    strictCutoff: false,
    format: "",
  });

  const handleChange = (field: string, value: unknown) => {
    setFormState({...formState, [field]: value});
  };
  const navigate = useNavigate();

  return (
    <Box sx={{width: "100%", maxWidth: 600, mx: "auto", gap: 2}}>
      <Stack direction="row" alignItems="center" sx={{marginBottom: 2}}>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon/>}
          onClick={() => navigate(-1)}
        >
        </Button>
        <Typography variant="h4">Host A Tournament</Typography>
      </Stack>
      <TextField
        label="Tournament Name"
        variant="outlined"
        size="small"
        fullWidth
        value={formState.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <TextField
        label="Tournament Description"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        rows={3}
        value={formState.description}
        onChange={(e) => handleChange("description", e.target.value)}
        sx={{mt: 2}}
      />
      <FormControl fullWidth size="small" sx={{mt: 2}}>
        <InputLabel id="kingdom-label">Kingdom</InputLabel>
        <Select
          labelId="kingdom-label"
          value={formState.kingdom}
          onChange={(e) => handleChange("kingdom", e.target.value)}
          label="Kingdom"
        >
          <MenuItem value="Dragonspine">Dragonspine</MenuItem>
          <MenuItem value="Emerald Hills">Emerald Hills</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth size="small" sx={{mt: 2}}>
        <InputLabel id="park-label">Park</InputLabel>
        <Select
          labelId="park-label"
          value={formState.park}
          onChange={(e) => handleChange("park", e.target.value)}
          label="Park"
        >
          <MenuItem value="Park 1">Park 1</MenuItem>
          <MenuItem value="Park 2">Park 2</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{display: "flex", flexDirection: "column", gap: 2, mt: 2}}>
          <DatePicker
            label="Tournament Date"
            value={formState.date}
            onChange={(newValue) =>
              handleChange("date", dayjs(newValue) || null)
            }
            slotProps={{textField: {size: "small", fullWidth: true}}}
          />
          <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            <TimePicker
              label="Cutoff Time"
              value={formState.registrationCutoff}
              slotProps={{textField: {size: "small"}}}
            />
            <FormControlLabel
              label="Strict Cutoff"
              sx={{whiteSpace: "nowrap"}}
              control={
                <Checkbox
                  checked={formState.strictCutoff}
                  onChange={(e) =>
                    handleChange("strictCutoff", e.target.checked)
                  }
                />
              }
            />
            <IconPopover icon={<HelpOutlineIcon sx={{fontSize: '16px', ml:-4}}/>}
                         typography={<Typography sx={{padding: 1}}>If Strict Cutoff is checked, the app will close
                           registration when the cutoff time passes</Typography>}/>
          </Box>
        </Box>
      </LocalizationProvider>
      <FormControl fullWidth size="small" sx={{mt: 2}}>
        <InputLabel id="format-label">Format</InputLabel>

        <Select
          labelId="format-label"
          value={formState.format}
          onChange={(e) => handleChange("format", e.target.value)}
          label="Format"
        >
          <MenuItem value="Single Elimination">Single Elimination</MenuItem>
          <MenuItem value="Double Elimination">Double Elimination</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
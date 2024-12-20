import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControlLabel
} from "@mui/material";
import {DatePicker, TimePicker} from '@mui/x-date-pickers';

export default function TournamentPage() {
  const formState = {
    title: "Sample Tournament",
    description: "This is a description of a sample tournament.",
    kingdom: "kingdom1",
    park: "park1",
    date: new Date(),
    registrationCutoff: new Date(),
    strictCutoff: true,
    format: "singleElimination",
  };

  return (
    <Box sx={{width: "100%", maxWidth: 600, mx: "auto", mt: 4}}>
      <Typography variant="h4" gutterBottom>
        Tournament Details
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formState.title}
        InputProps={{readOnly: true}}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={formState.description}
        InputProps={{readOnly: true}}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Kingdom</InputLabel>
        <Select value={formState.kingdom} inputProps={{readOnly: true}}>
          <MenuItem value="kingdom1">Kingdom 1</MenuItem>
          <MenuItem value="kingdom2">Kingdom 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Park</InputLabel>
        <Select value={formState.park} inputProps={{readOnly: true}}>
          <MenuItem value="park1">Park 1</MenuItem>
          <MenuItem value="park2">Park 2</MenuItem>
        </Select>
      </FormControl>
      <DatePicker
        label="Date"
        value={formState.date}
        readOnly
        slotProps={{textField: {fullWidth: true, margin: "normal"}}}
      />
      <TimePicker
        label="Registration Cutoff"
        value={formState.registrationCutoff}
        readOnly
        slotProps={{textField: {fullWidth: true, margin: "normal"}}}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.strictCutoff}
            readOnly
          />
        }
        label="Strict Registration Cutoff"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Format</InputLabel>
        <Select value={formState.format} inputProps={{readOnly: true}}>
          <MenuItem value="singleElimination">Single Elimination</MenuItem>
          <MenuItem value="doubleElimination">Double Elimination</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
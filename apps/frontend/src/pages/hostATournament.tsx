import React from "react";
import {Box, Button, Typography,} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router-dom";
import FormatFields from "./components/FormatFields.tsx";
import {TextFieldInput} from "./components/textFieldInput.tsx";
import {CategorySelect} from "./components/categorySelect.tsx";
import {DateAndTimePicker} from "./dateAndTimePicker.tsx";

const FormControls = () => (
  <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{mt: 2}}>
    <Button variant="outlined">Cancel</Button>
    <Button variant="contained" color="primary">Submit</Button>
  </Stack>
);

export default function HostATournamentPage() {
  const [formState, setFormState] = React.useState({
    formatSpecificFields: {}, // Added to manage format-specific fields
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
    if (field === "format") {
      setFormState({
        ...formState,
        formatSpecificFields: {},
        format: value as string,
      });
    } else {
      setFormState({...formState, [field]: value});
    }
  };
  const handleFormatFieldChange = (field: string, value: unknown) => {
    setFormState({
      ...formState,
      formatSpecificFields: {
        ...formState.formatSpecificFields,
        [field]: value,
      },
    });
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
      <TextFieldInput
        label="Tournament Name"
        value={formState.name}
        onChange={(value) => handleChange("name", value)}
      />
      <TextFieldInput
        label="Tournament Description"
        multiline
        rows={3}
        value={formState.description}
        onChange={(value) => handleChange("description", value)}
        sx={{mt: 2}}
      />

      <CategorySelect
        label="Kingdom"
        value={formState.kingdom}
        options={[
          {value: "Dragonspine", label: "Dragonspine"},
          {value: "Emerald Hills", label: "Emerald Hills"},
        ]}
        onChange={(value) => handleChange("kingdom", value)}
        sx={{mt: 2}}
      />
      <CategorySelect
        label="Park"
        value={formState.park}
        options={[
          {value: "Park 1", label: "Park 1"},
          {value: "Park 2", label: "Park 2"},
        ]}
        onChange={(value) => handleChange("park", value)}
        sx={{mt: 2}}
      />
      <DateAndTimePicker
        dateLabel="Tournament Date"
        dateValue={formState.date}
        onDateChange={(value) => handleChange("date", value)}
        timeLabel="Registration Cutoff"
        timeValue={formState.registrationCutoff}
        onTimeChange={(value) => handleChange("registrationCutoff", value)}
        strictCutoff={formState.strictCutoff}
        onStrictCutoffChange={(value) => handleChange("strictCutoff", value)}
      />
      <CategorySelect
        label="Format"
        value={formState.format}
        options={[
          {value: "texasTwoStepFormat", label: "Texas Two-Step"},
          {value: "doubleEliminationFormat", label: "Double Elimination"},
        ]}
        onChange={(value) => handleChange("format", value)}
        sx={{mt: 2}}
      />
      <FormatFields format={formState.format} values={formState.formatSpecificFields}
                    onChange={handleFormatFieldChange}/>
      <FormControls/>
    </Box>
  );
}

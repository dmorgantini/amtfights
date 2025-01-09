import React from "react";
import {Box, Button, Typography,} from "@mui/material";
import Stack from "@mui/material/Stack";
import FormatFields from "./components/FormatFields.tsx";
import {TextFieldInput} from "./components/textFieldInput.tsx";
import {CategorySelect} from "./components/categorySelect.tsx";
import {DateAndTimePicker} from "./dateAndTimePicker.tsx";

import Tooltip from "@mui/material/Tooltip";

interface FormControlsProps {
  isSubmitDisabled: boolean;
  tooltipMessage: string;
}

const FormControls = ({isSubmitDisabled, tooltipMessage}: FormControlsProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleTouchStart = () => setShowTooltip(true);
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{mt: 2}}>
      <Button variant="outlined">Cancel</Button>
      <Tooltip
        title={tooltipMessage}
        arrow
        disableInteractive
        open={showTooltip}
        slotProps={{popper: {disablePortal: true}}}
      >
        <span
          onTouchStart={handleTouchStart}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            variant="outlined"
            color="primary"
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default function HostATournamentPage() {
  const [formState, setFormState] = React.useState({
    formatSpecificFields: {}, // Added to manage format-specific fields
    formatSpecificFieldsComplete: false,
    name: "",
    description: "",
    kingdom: "",
    park: "",
    date: null,
    registrationCutoff: null,
    strictCutoff: false,
    format: "",
  });

  const handleChange = (field: string, value: unknown) => setFormState({...formState, [field]: value});

  const formatFieldsValuesUpdated = (isComplete: boolean, formatSpecificFields: Record<string, string>) => setFormState({
    ...formState,
    formatSpecificFieldsComplete: isComplete,
    formatSpecificFields: formatSpecificFields
  })

  const isSubmitDisabled = !formState.name || !formState.description ||
    !formState.kingdom || !formState.park || !formState.date ||
    !formState.registrationCutoff || !formState.format || !formState.formatSpecificFieldsComplete;

  const tooltipMessage = isSubmitDisabled
    ? "Please fill out all fields to enable the Submit button."
    : "";

  return (
    <Box sx={{width: "100%", maxWidth: 600, mx: "auto", gap: 2}}>
      <Typography variant="h4">Host A Tournament</Typography>
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
      <FormatFields format={formState.format} formatFieldsValuesUpdated={formatFieldsValuesUpdated}/>
      <FormControls
        isSubmitDisabled={isSubmitDisabled}
        tooltipMessage={tooltipMessage}
      />
    </Box>
  );
}

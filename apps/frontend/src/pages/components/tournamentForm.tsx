import React from "react";
import {Box, Typography} from "@mui/material";
import {TextFieldInput} from "./textFieldInput.tsx";
import {SelectField} from "./selectField.tsx";
import {DateAndTimePicker} from "./dateAndTimePicker.tsx";
import FormatFields from "./FormatFields.tsx";
import CategorySelector from "./categorySelector.tsx";
import {FormControls} from "./formControls.tsx";

export function TournamentForm({readOnly}: { readOnly: boolean }) {
  const [formState, setFormState] = React.useState({
    formatSpecificFields: {},
    formatSpecificFieldsComplete: false,
    name: "",
    description: "",
    kingdom: "",
    park: "",
    date: null,
    registrationCutoff: null,
    strictCutoff: false,
    format: "",
    categories: [],
  });

  const handleChange = (field: string, value: unknown) => setFormState({...formState, [field]: value});

  const formatFieldsValuesUpdated = (isComplete: boolean, formatSpecificFields: Record<string, string>) => setFormState({
    ...formState,
    formatSpecificFieldsComplete: isComplete,
    formatSpecificFields: formatSpecificFields
  });

  const isSubmitDisabled = !formState.name || !formState.description ||
    !formState.kingdom || !formState.park || !formState.date ||
    !formState.registrationCutoff || !formState.format || !formState.formatSpecificFieldsComplete ||
    !formState.categories.length;

  const tooltipMessage = isSubmitDisabled
    ? "Please fill out all fields to enable the Submit button."
    : "";

  return (
    <Box sx={{width: "100%", maxWidth: 600, mx: "auto", gap: 2, paddingBottom: 4}}>

      <Typography variant="h4" align="center" sx={{paddingTop: 4, paddingBottom: 4}}>Host A Tournament</Typography>
      <TextFieldInput
        label="Tournament Name"
        value={formState.name}
        onChange={(value) => handleChange("name", value)}
        readOnly={readOnly}
      />
      <TextFieldInput
        label="Tournament Description"
        multiline
        rows={3}
        value={formState.description}
        onChange={(value) => handleChange("description", value)}
        sx={{mt: 2}}
        readOnly={readOnly}
      />

      <SelectField
        label="Kingdom"
        value={formState.kingdom}
        options={[
          {value: "Dragonspine", label: "Dragonspine"},
          {value: "Emerald Hills", label: "Emerald Hills"},
        ]}
        onChange={(value) => handleChange("kingdom", value)}
        sx={{mt: 2}}
        readOnly={readOnly}
      />
      <SelectField
        label="Park"
        value={formState.park}
        options={[
          {value: "Park 1", label: "Park 1"},
          {value: "Park 2", label: "Park 2"},
        ]}
        onChange={(value) => handleChange("park", value)}
        sx={{mt: 2}}
        readOnly={readOnly}
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
        readOnly={readOnly}
      />
      <SelectField
        label="Format"
        value={formState.format}
        options={[
          {value: "texasTwoStepFormat", label: "Texas Two-Step"},
          {value: "doubleEliminationFormat", label: "Double Elimination"},
        ]}
        onChange={(value) => handleChange("format", value)}
        sx={{mt: 2}}
        readOnly={readOnly}
      />
      <FormatFields format={formState.format} formatFieldsValuesUpdated={formatFieldsValuesUpdated}
                    readOnly={readOnly}/>
      <CategorySelector onCategoriesChange={(categories) => handleChange("categories", categories)}
                        readOnly={readOnly}/>
      <FormControls
        isSubmitDisabled={isSubmitDisabled}
        tooltipMessage={tooltipMessage}
        readOnly={readOnly}
      />
    </Box>
  );
}
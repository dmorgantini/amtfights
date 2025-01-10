import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

// Props for FormatFields
interface FormatFieldsProps {
  format: string; // Format configuration object
  formatFieldsValuesUpdated: (isComplete: boolean, values: Record<string, string>) => void; // Notifies parent if all fields are complete and includes values
}

type FormatFieldConfig = {
  field: string;
  label: string;
  type: "dropdown"; // You can expand this if there are more types
  options: string[];
};

type Formats = {
  [formatName: string]: FormatFieldConfig[];
};

const formats: Formats = {
  texasTwoStepFormat: [
    {field: "finalFights", label: "Fights in Finals", type: "dropdown", options: ["1", "3", "5", "7", "First to 10"]},
    {
      field: "bracketFights",
      label: "Fights in Brackets",
      type: "dropdown",
      options: ["1", "3", "5", "7", "First to 10"]
    },
    {field: "pitLength", label: "Pit Length", type: "dropdown", options: ["5 mins", "10 mins", "15 mins", "20 mins"]},
    {
      field: "numberOfPits",
      label: "Number of Pits",
      type: "dropdown",
      options: ["1 per 10 fighters", "1 per 15 fighters", "1 per 20 fighters"]
    },
  ],
  doubleEliminationFormat: [
    {field: "losersBracket", label: "Losers' Bracket", type: "dropdown", options: ["Yes", "No"]},
    {field: "matchLength", label: "Match Length", type: "dropdown", options: ["5 mins", "10 mins", "15 mins"]},
  ]
}

const FormatFields: React.FC<FormatFieldsProps> = ({format, formatFieldsValuesUpdated}) => {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const formatConfig = formats[format];

  React.useEffect(() => {
    if (!formatConfig) {
      formatFieldsValuesUpdated(false, {});
      return;
    }
    const isComplete = formatConfig.every((field) => values[field.field] !== undefined && values[field.field] !== "");
    formatFieldsValuesUpdated(isComplete, values);
  }, [values, formatConfig, formatFieldsValuesUpdated]);

  if (!format) return null;
  return (
    <>
      {formatConfig.map((field) => {
        if (field.type === "dropdown") {
          return (
            <FormControl fullWidth size="small" sx={{mt: 2}} key={field.field}>
              <InputLabel id={`${field.field}-label`}>{field.label}</InputLabel>
              <Select
                labelId={`${field.field}-label`}
                value={values[field.field] || ""}
                onChange={(e) => setValues((prev) => ({...prev, [field.field]: e.target.value}))}
                label={field.label}
              >
                {field.options.map((option) => (
                  <MenuItem value={option} key={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }
        return null; // Can handle other field types in the future
      })}
    </>
  );
};

export default FormatFields;

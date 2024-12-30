import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


// Props for FormatFields
interface FormatFieldsProps {
  format: string; // Format configuration object
  values: Record<string, string>; // Current values for the fields
  onChange: (field: string, value: string) => void; // Change handler
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
    {field: "finalFights", label: "Final Fights", type: "dropdown", options: ["1", "3", "5", "7", "First to 10"]},
    {field: "bracketFights", label: "Bracket Fights", type: "dropdown", options: ["1", "3", "5", "7", "First to 10"]},
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

const FormatFields: React.FC<FormatFieldsProps> = ({format, values, onChange}) => {
  if (!format) {
    return null;
  }
  const formatConfig = formats[format];

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
                onChange={(e) => onChange(field.field, e.target.value)}
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
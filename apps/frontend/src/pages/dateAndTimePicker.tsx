import React from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import IconPopover from "../components/IconPopover.tsx";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import dayjs from "dayjs";

interface DateAndTimePickerProps {
  dateLabel: string;
  dateValue: dayjs.Dayjs | null;
  onDateChange: (value: dayjs.Dayjs | null) => void;
  timeLabel?: string;
  timeValue: dayjs.Dayjs | null;
  onTimeChange: (value: dayjs.Dayjs | null) => void;
  strictCutoff: boolean;
  onStrictCutoffChange: (value: boolean) => void;
}

export const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
                                                                      dateLabel,
                                                                      dateValue,
                                                                      onDateChange,
                                                                      timeLabel = "Cutoff Time",
                                                                      timeValue,
                                                                      onTimeChange,
                                                                      strictCutoff,
                                                                      onStrictCutoffChange,
                                                                    }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{display: "flex", flexDirection: "column", gap: 2, mt: 2}}>
      <DatePicker
        label={dateLabel}
        value={dateValue}
        onChange={onDateChange}
        slotProps={{textField: {size: "small", fullWidth: true}}}
      />
      <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
        <TimePicker
          label={timeLabel}
          value={timeValue}
          onChange={onTimeChange}
          slotProps={{textField: {size: "small"}}}
        />
        <FormControlLabel
          label="Strict Cutoff"
          sx={{whiteSpace: "nowrap"}}
          control={
            <Checkbox
              checked={strictCutoff}
              onChange={(e) => onStrictCutoffChange(e.target.checked)}
            />
          }
        />
        <IconPopover
          icon={<HelpOutlineIcon sx={{fontSize: '16px', ml: -4}}/>}
          typography={
            <Typography sx={{padding: 1}}>
              If Strict Cutoff is checked, the app will close registration
              when the cutoff time passes
            </Typography>
          }
        />
      </Box>
    </Box>
  </LocalizationProvider>
);
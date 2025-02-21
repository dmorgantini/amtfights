import React from "react";
import Stack from "@mui/material/Stack";
import {Button} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const FormControls = ({isSubmitDisabled, tooltipMessage, readOnly, handleFormSubmit}: {
  isSubmitDisabled: boolean;
  tooltipMessage: string;
  readOnly: boolean;
  handleFormSubmit?: () => void;
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleTouchStart = () => setShowTooltip(true);
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    (readOnly || <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{mt: 2}}>
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
              onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </span>
        </Tooltip>
    </Stack>)
  );
};
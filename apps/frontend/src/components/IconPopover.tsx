import React from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';

interface StatusPopoverProps {
  typography: React.ReactNode; // The message to display in the Popover
  icon: React.ReactNode; // Any JSX, such as an MUI Icon component
}

const IconPopover: React.FC<StatusPopoverProps> = ({typography, icon}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return (
    <Box
      sx={{display: 'inline-flex', alignItems: 'center', marginLeft: 1}}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {icon} {/* Render the provided icon */}
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {typography}
      </Popover>
    </Box>
  );
};

export default IconPopover;
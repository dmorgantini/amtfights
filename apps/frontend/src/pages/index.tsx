import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{px: 4, py: 6}}>
        {/* First Line - Title */}
        <Typography
          variant="h3"
          component="h1"
          sx={{fontWeight: 'bold', mb: 5}}
        >
          The Giant
        </Typography>

        {/* Second Line - Subtitle */}
        <Typography variant="h5" component="p" sx={{mb: 6}}>
          AmtFights Rating 350
        </Typography>

        {/* Two Buttons with the Same Width */}
        <Stack spacing={5} sx={{mb: 6}}>
          <Button variant="outlined" size="large" fullWidth onClick={() => navigate("/tournaments")}>
            Tournament
          </Button>
          <Button variant="outlined" size="large" fullWidth>
            Duel
          </Button>
        </Stack>

        {/* Horizontal Divider */}
        <Divider sx={{width: '100%', mb: 4, borderBottomWidth: 3 }}/>

        {/* Text Below Divider */}
        <Typography variant="h6" sx={{mb: 5, textAlign: 'center'}}>
          Find a tournament or Duel
        </Typography>

        {/* Side-by-Side Buttons */}
        <Stack direction="row" spacing={5} justifyContent="center">
          <Button variant="outlined" size="large" fullWidth sx={{fontSize: '0.875rem', whiteSpace: 'nowrap'}}>
            Scan QR
          </Button>
          <Button variant="outlined" size="large" fullWidth sx={{fontSize: '0.875rem'}}>
            Search
          </Button>
        </Stack>
    </Box>
  );
}

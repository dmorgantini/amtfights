import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function DashboardPage() {
  return <>
    {/* First Line - Title */}
    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
      The Giant
    </Typography>

    {/* Second Line - Subtitle */}
    <Typography variant="subtitle1" component="p" sx={{ mt: 1 }}>
      AmtFights Rating 350
    </Typography>

    {/* Two Buttons with the Same Width */}
    <Stack spacing={2} sx={{ mt: 3 }}>
      <Button variant="outlined" fullWidth>
        Tournament
      </Button>
      <Button variant="outlined" fullWidth>
        Duel
      </Button>
    </Stack>

    {/* Horizontal Divider */}
    <Divider sx={{ width: '100%' }} />

    {/* Text Below Divider */}
    <Typography variant="body1" sx={{ mb: 2 }}>
      Find a tournament or Duel
    </Typography>

    {/* Side-by-Side Buttons */}
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" color="primary">
        Scan QR
      </Button>
      <Button variant="contained" color="secondary">
        Search
      </Button>
    </Stack>
  </>;
}

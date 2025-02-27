import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconPopover from "../components/IconPopover.tsx";

const ongoingTournamentsRows = [
  {id: 1, name: 'Autumn Championship', hasPassed: true},
  {id: 2, name: 'Winter Series', hasPassed: true},
  {id: 3, name: 'Spring League', hasPassed: false},
  {id: 4, name: 'Summer Tournament', hasPassed: false},
  {id: 5, name: 'Fall Qualifiers', hasPassed: true},
  {id: 6, name: 'Winter Championship', hasPassed: false},
  {id: 7, name: 'Regional Series', hasPassed: false},
  {id: 8, name: 'City Cup', hasPassed: false},
  {id: 9, name: 'National Open', hasPassed: true},
  {id: 10, name: 'Continental Cup', hasPassed: true},
  {id: 11, name: 'World Series', hasPassed: false},
  {id: 12, name: 'Elite Challenge', hasPassed: false},
  {id: 13, name: 'Masters Invitational', hasPassed: false},
  {id: 14, name: 'Grand Slam', hasPassed: false},
  {id: 15, name: 'Championship League', hasPassed: true},
];

const plannedTournamentsRows = [
  {id: 1, name: 'Spring Invitational', date: '2024-03-15'},
  {id: 2, name: 'Summer Cup', date: '2024-06-10'},
];

export default function TournamentsPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{padding: 2}}>
      <Stack direction="row" alignItems="center" sx={{marginBottom: 2}}>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon/>}
          onClick={() => navigate(-1)}
        >
        </Button>
        <Typography variant="h4">Tournaments</Typography>
      </Stack>
      <Box sx={{height: 300, marginBottom: 3}}>
        <Typography variant="h6" gutterBottom>
          Ongoing Tournaments
        </Typography>
        <Box sx={{height: 250, overflowY: 'auto', border: '1px solid #ccc', position: 'relative'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <tbody>
            {ongoingTournamentsRows.map((row) => (
              <React.Fragment>
                <tr key={row.id}>
                  <td style={{border: '1px solid #ccc', padding: '8px', display: 'flex', alignItems: 'center'}}>
                    {row.name}
                    {row.hasPassed && (
                      <IconPopover icon={<ErrorOutlineIcon sx={{color: '#ff726f', fontSize: '16px'}}/>}
                                   typography={<Typography sx={{padding: 1, color: 'red'}}>Registration
                                     Closed</Typography>}/>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
            </tbody>
          </table>
        </Box>
      </Box>

      <Box sx={{height: 300, marginBottom: 3}}>
        <Typography variant="h6" gutterBottom>
          Planned Tournaments
        </Typography>
        <Box sx={{height: 250, overflowY: 'auto', border: '1px solid #ccc'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <tbody>
            {plannedTournamentsRows.map((row) => (
              <tr key={row.id}>
                <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.name}</td>
                <td style={{border: '1px solid #ccc', padding: '8px'}}>{row.date}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Box>
      </Box>
      <Stack alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/host')}
        >
          Host a tournament
        </Button>
      </Stack>
    </Box>
  );
}

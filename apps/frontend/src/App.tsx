import Container from '@mui/material/Container';
import {Outlet} from "react-router-dom";

export default function App() {
  return (
    <Container maxWidth="sm">
        <Outlet />
    </Container>
  );
}


import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import DashboardPage from './pages';
import TournamentsPage from './pages/tournaments.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layouts/dashboard.tsx";
import {CssBaseline} from "@mui/material";
import AppTheme from "./theme/AppTheme.tsx";

const router = createBrowserRouter([{
  Component: App, children: [{
    path: '/', Component: Layout, children: [
      {
        path: '',
        Component: DashboardPage,
      },
      {
        path: 'tournaments',
        Component: TournamentsPage,
      },
    ],
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme>
      <RouterProvider router={router}/>
      <CssBaseline/>
    </AppTheme>
  </StrictMode>,
)

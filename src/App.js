import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ButtonAppBar from './appBar';
import FixedBottomNavigation from './bottomNav';
import ActiveLastBreadcrumb from './breadcrumbs';
// import PaginationOutlined from './pagination';
import BasicTabs from './tabs';
import CustomizedSteppers from './progress';
import "./index.css";
import "./App.css";
// import Login from "./login";
// import darkTheme from './darkTheme'
// import lightTheme from './lightTheme'

const dark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const light = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <ButtonAppBar />
        {/* <Login /> */}
        <ActiveLastBreadcrumb />
        <CustomizedSteppers />
        <BasicTabs />
        {/* <PaginationOutlined /> */}
        <FixedBottomNavigation />
      </ThemeProvider>
    </React.Fragment>
  );
}


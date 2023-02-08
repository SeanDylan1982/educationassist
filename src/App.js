import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from './appBar';
import FixedBottomNavigation from './bottomNav';
import ActiveLastBreadcrumb from './breadcrumbs';
import PaginationOutlined from './pagination';
import BasicTabs from './tabs';
import CustomizedSteppers from './progress';
import "./index.css";
import "./App.css";
import Login from "./login";

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <Login />
      <ActiveLastBreadcrumb />
      <CustomizedSteppers />
      <BasicTabs />
      <PaginationOutlined />
      <FixedBottomNavigation />
    </React.Fragment>
  );
}
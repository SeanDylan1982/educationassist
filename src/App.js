import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ImageMasonry from './masonry';
import ButtonAppBar from './appBar';
import FixedBottomNavigation from './bottomNav';
import ActiveLastBreadcrumb from './breadcrumbs';
import PaginationOutlined from './pagination';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <ImageMasonry />
      <ActiveLastBreadcrumb />
      <PaginationOutlined />
      <FixedBottomNavigation />
    </React.Fragment>
  );
}
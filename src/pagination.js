import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <Stack spacing={2} sx={{ position: 'fixed', bottom: 70, left: "37.5%", right: "37.5%" }}>
      {/* <Pagination count={10} variant="outlined" /> */}
      <Pagination count={10} variant="outlined" color="primary" />
      {/* <Pagination count={10} variant="outlined" color="secondary" /> */}
      {/* <Pagination count={10} variant="outlined" disabled /> */}
    </Stack>
  );
}
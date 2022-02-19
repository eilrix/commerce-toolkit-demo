import { Box } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Header } from './Header';
import { Login } from './Login';

export function Layout(props: { children: React.ReactNode }) {
  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      px: 2,
      ' *': {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      }
    }}>
      <Header />
      <Login />
      <ToastContainer />
      {props.children}
    </Box>
  );
}
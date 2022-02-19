import React from 'react';
import { CImage, CGallery } from '@cromwell/core-frontend';
import { Layout } from '../components/Layout';
import { Box } from '@mui/material';

export default function index() {
  return (
    <Layout>
      <CGallery id="home_gallery" />
      <Box display="flex" justifyContent="space-between">
        <CImage id="home_banner_1" link={{ href: "/category/1" }}
          style={{ minHeight: '100px', minWidth: '100px' }} />
        <CImage id="home_banner_2" />
        <CImage id="home_banner_3" />
      </Box>
    </Layout>
  );
}
import { TCromwellPage } from '@cromwell/core';
import { CContainer, CText } from '@cromwell/core-frontend';
import { MuiCartList, MuiCheckout } from '@cromwell/toolkit-commerce';
import React from 'react';
import { Box } from '@mui/material';

import { Layout } from '../components/Layout';

const Checkout: TCromwellPage = (props) => {
  return (
    <Layout>
      <CContainer id="checkout_page" style={{ margin: '20px 0' }}>
        <CText id="page_title" element="h1" style={{ margin: '20px 0' }}>Checkout</CText>
        <CContainer id="checkout_main" style={{ display: 'flex' }}>
          <Box sx={{
            width: {
              xs: '100%',
              md: '50%'
            },
            marginRight: '30px',
          }}>
            <MuiCheckout />
          </Box>
          <Box sx={{
            width: {
              xs: '100%',
              md: '50%'
            }
          }}>
            <MuiCartList />
          </Box>
        </CContainer>
      </CContainer>
    </Layout>
  )
}

export default Checkout;

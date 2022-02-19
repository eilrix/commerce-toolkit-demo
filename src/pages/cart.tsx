import { TCromwellPage } from '@cromwell/core';
import { CContainer, CText } from '@cromwell/core-frontend';
import { MuiCartList } from '@cromwell/toolkit-commerce';
import React from 'react';
import { Button } from '@mui/material';

import { Layout } from '../components/Layout';

const Cart: TCromwellPage = (props) => {
  return (
    <Layout>
      <CContainer id="cart_page" style={{ margin: '20px 0' }}>
        <CText id="cart_text" element="h1" style={{ margin: '20px 0' }}>Cart</CText>
        <CContainer id="cart_list">
          <MuiCartList />
        </CContainer>
        <CContainer id="checkout_btn" style={{ margin: '20px 0' }}>
          <Button variant="contained" onClick={() => props.cmsProps.router?.push('/checkout')}>
            <CText id="checkout_btn_text" element="span">Checkout</CText>
          </Button>
        </CContainer>
      </CContainer>
    </Layout>
  )
}

export default Cart;

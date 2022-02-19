import { TCromwellPage } from '@cromwell/core';
import { CContainer, CText, useUserInfo } from '@cromwell/core-frontend';
import { MuiAccountInfo, MuiAccountOrders } from '@cromwell/toolkit-commerce';
import { Button } from '@mui/material';
import React from 'react';

import { Layout } from '../components/Layout';
import { loginHandler } from '../components/Login';

const Account: TCromwellPage = () => {
  const userInfo = useUserInfo();

  const handleSignInOpen = () => {
    loginHandler.open?.()
  }

  const handleSignUpOpen = () => {
    loginHandler.open?.('sign-up')
  }

  return (
    <Layout>
      <CContainer id="account_root">
        {userInfo && (
          <>
            <CContainer style={{ marginBottom: '40px', padding: '15px', maxWidth: '600px' }}
              id="account_contact">
              <CText id="contact_text" element="h2" >Contact information</CText>
              <MuiAccountInfo />
            </CContainer>

            <CContainer id="account_orders">
              <CText id="orders_text" element="h2">Order history</CText>
              <MuiAccountOrders />
            </CContainer>
          </>
        )}
        {!userInfo && (
          <CContainer style={{ padding: '20px 15px' }} id="account_login">
            <CText id="account_login_text" element="h2">Log in</CText>
            <CContainer id="account_login_btns">
              <Button variant="outlined"
                color="primary"
                size="small"
                onClick={handleSignInOpen}
              >Sign in</Button>
              <Button variant="outlined"
                color="primary"
                size="small"
                onClick={handleSignUpOpen}
              >Sign up</Button>
            </CContainer>
          </CContainer>
        )}
      </CContainer>
    </Layout>
  );
}

export default Account;

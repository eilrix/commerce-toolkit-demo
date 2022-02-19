import React, { useState } from 'react';
import { SignIn, SignInProps, SignUp, useAuthClient } from '@cromwell/core-frontend';
import { Modal, Box, Tabs, Tab, TextField, Button, Paper } from '@mui/material';
import { muiNotifier } from '@cromwell/toolkit-commerce';

export const loginHandler: {
  open?: (tab?: 'sign-in' | 'sign-up') => void;
  close?: () => void;
} = {};

export function Login() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sign-in' | 'sign-up'>('sign-in');

  loginHandler.open = (tab = 'sign-in') => {
    setOpen(true);
    setActiveTab(tab)
  };
  loginHandler.close = () => setOpen(false);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    if (newValue === 1) setActiveTab('sign-up');
    if (newValue === 0) setActiveTab('sign-in');
  };

  const signInElements: SignInProps['elements'] = {
    TextField: (props) => <TextField fullWidth
      variant="standard"
      size="small"
      {...props}
    />,
    Button: (props: any) => <Button
      color="primary"
      variant="contained"
      {...props} />
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100%', width: '100%',
        '*': {
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        }
      }} onClick={() => setOpen(false)}>
        <Paper sx={{
          maxWidth: '400px', width: '400px', p: 2
        }} onClick={(e) => e.stopPropagation()}>
          <Tabs
            value={activeTab === 'sign-up' ? 1 : 0}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
            sx={{ mb: 2 }}
          >
            <Tab
              label="Sign in" />
            <Tab
              label="Sign up" />
          </Tabs>
          {activeTab === 'sign-in' && (
            <SignIn
              elements={signInElements}
              onSignInSuccess={() => setOpen(false)}
              onSignInError={(result) => muiNotifier.error(result.message)}
              onForgotPasswordFailure={(result) => muiNotifier.error(result.message)}
              onResetPasswordFailure={(result) => muiNotifier.error(result.message)}
              onForgotPasswordEmailSent={() => muiNotifier.success('We sent you an email')}
              onResetPasswordSuccess={() => muiNotifier.success('Password changed')}
            />
          )}
          {activeTab === 'sign-up' && (
            <SignUp
              elements={signInElements}
              onSignUpSuccess={() => setActiveTab('sign-in')}
              onSignUpError={(result) => muiNotifier.error(result.message)}
            />
          )}
        </Paper>
      </Box>
    </Modal>
  )
}

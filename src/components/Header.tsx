import { getCmsSettings } from '@cromwell/core';
import { CContainer, CPlugin, Link, registerPluginSSR, useCart, useUserInfo } from '@cromwell/core-frontend';
import { MuiCurrencySwitch, MuiProductSearch } from '@cromwell/toolkit-commerce';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { loginHandler } from './Login';

registerPluginSSR('@cromwell/plugin-main-menu', '*');

export function Header() {
  const cmsSettings = getCmsSettings();
  const cart = useCart();
  
  const router = useRouter();
  const user = useUserInfo();

  return (
    <CContainer id="header_root">
      <CContainer global id="header_top" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
      }}>
        <CContainer id="header_top_left" style={{ display: 'flex', alignItems: 'center' }}>
          <CContainer id="header_currency_switch">
            <MuiCurrencySwitch />
          </CContainer>
          <CContainer id="header_wishlist">
            <IconButton onClick={() => router.push('/wishlist')}>
              <FavoriteIcon />
            </IconButton>
          </CContainer>
        </CContainer>
        <CContainer id="header_account">
          {user ? <Link href="/account">{user.fullName}</Link> :
            <a style={{ cursor: 'pointer' }} onClick={() => loginHandler.open?.()}>Sign in</a>}
        </CContainer>
      </CContainer>
      <CContainer global id="header_main" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 0',
      }}>
        <CContainer id="header_logo">
          <Link href="/">
            <img src={cmsSettings?.logo} style={{ maxHeight: '70px' }} />
          </Link>
        </CContainer>
        <CContainer id="header_search" style={{ width: '300px' }}>
          <MuiProductSearch />
        </CContainer>
        <CContainer id="header_cart">
          <IconButton onClick={() => router.push('/cart')}>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCart style={{ color: '#111' }} />
            </Badge>
          </IconButton>
        </CContainer>
      </CContainer>
      <CPlugin
        id="header_main_menu"
        pluginName="@cromwell/plugin-main-menu"
        style={{
          borderBottom: '1px solid #ddd',
        }}
      />
    </CContainer>
  );
}

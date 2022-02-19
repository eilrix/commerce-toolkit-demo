import { TCromwellPage } from '@cromwell/core';
import { CContainer, CText } from '@cromwell/core-frontend';
import { MuiWishlist } from '@cromwell/toolkit-commerce';
import React from 'react';

import { Layout } from '../components/Layout';

const Wishlist: TCromwellPage = () => {
  return (
    <Layout>
      <CContainer id="wishlist_page" style={{ margin: '20px 0' }}>
        <CText id="wishlist_text" element="h1" style={{ margin: '20px 0' }}>Wishlist</CText>
        <CContainer id="wishlist_list">
          <MuiWishlist />
        </CContainer>
      </CContainer>
    </Layout>
  )
}

export default Wishlist;

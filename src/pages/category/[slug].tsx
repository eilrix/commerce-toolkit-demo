import { CContainer, EntityHead } from '@cromwell/core-frontend';
import { TCromwellPage } from '@cromwell/core';
import { CategoryFilter, MuiCategoryList, MuiCategorySort } from '@cromwell/toolkit-commerce';
import React from 'react';

import { Layout } from '../../components/Layout';

const Category: TCromwellPage = (props) => {
  const categoryData = MuiCategoryList.useData();
  const { category } = categoryData ?? {};

  return (
    <Layout>
      <EntityHead entity={category} useFallback />
      <CContainer id="category_root" style={{ display: 'flex' }}>
        <CContainer id="category_sidebar">
          <CategoryFilter />
        </CContainer>
        <CContainer id="category_main" style={{ paddingLeft: '20px', paddingTop: '15px' }}>
          <CContainer id="category_header" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>{category?.name}</h1>
            <MuiCategorySort />
          </CContainer>
          <CContainer id="category_list">
            <MuiCategoryList cardProps={{
              onOpenWishlist: () => props.cmsProps.router?.push('/wishlist')
            }} />
          </CContainer>
          <CContainer id="category_description">
            {category?.description && (
              <div dangerouslySetInnerHTML={{ __html: category?.description }}></div>
            )}
          </CContainer>
        </CContainer>
      </CContainer>
    </Layout>
  );
}

export default Category;


export const getStaticProps = CategoryFilter.withGetProps(MuiCategoryList.withGetProps());

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
import { TCromwellPage, TGetStaticProps, TProduct } from '@cromwell/core';
import { CContainer, getCStore, getGraphQLClient } from '@cromwell/core-frontend';
import { ProductGallery, MuiBreadcrumbs, MuiProductActions, MuiProductAttributes, MuiProductReviews } from '@cromwell/toolkit-commerce';
import React from 'react';

import { Layout } from '../../components/Layout';

type ProductProps = {
  product: TProduct | null;
}

const Product: TCromwellPage<ProductProps> = (props) => {
  const { product } = props;
  const store = getCStore();

  return (
    <Layout>
      <CContainer id="product_breadcrumbs" style={{ margin: '20px 0' }}>
        <MuiBreadcrumbs />
      </CContainer>
      <CContainer id="product_container" style={{ display: 'flex' }}>
        <CContainer id="product_gallery" style={{ width: '60%', paddingRight: '15px' }}>
          {product && (
            <ProductGallery product={product} />
          )}
        </CContainer>
        <CContainer id="product_caption" style={{ width: '40%' }}>
          <CContainer id="product_title">
            <h1>{product?.name}</h1>
          </CContainer>
          <CContainer id="product_price" style={{ display: 'flex', margin: '20px 0' }}>
            {product?.oldPrice && (
              <p style={{ textDecoration: 'line-through', fontSize: '24px', marginRight: '10px', opacity: 0.5 }}
              >{store.getPriceWithCurrency(product?.oldPrice)}</p>
            )}
            <p style={{ fontSize: '24px', fontWeight: 600 }}>{store.getPriceWithCurrency(product?.price)}</p>
          </CContainer>
          <CContainer id="product_attributes" style={{ marginBottom: '40px' }}>
            {product && (
              <MuiProductAttributes product={product} />
            )}
          </CContainer>
          <CContainer id="product_actions">
            {product && (
              <MuiProductActions product={product}
                onCartOpen={() => props.cmsProps.router?.push('/cart')}
                onWishlistOpen={() => props.cmsProps.router?.push('/wishlist')}
              />
            )}
          </CContainer>
        </CContainer>
      </CContainer>
      <CContainer id="product_description" style={{ marginBottom: '80px' }}>
        {product?.description && (
          <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
        )}
      </CContainer>
      <CContainer id="product_reviews" style={{ maxWidth: '640px' }}>
        {product && (
          <MuiProductReviews productId={product?.id} />
        )}
      </CContainer>
    </Layout>
  )
}

export default Product;

const getProps: TGetStaticProps<ProductProps> = async (context) => {
  const slug = context.params?.slug;
  const client = getGraphQLClient();

  const product = (typeof slug === 'string' &&
    await client.getProductBySlug(slug).catch(error => console.error(error))) || null;

  return {
    props: {
      product,
    }
  }
}

export const getStaticProps = MuiBreadcrumbs.withGetProps(getProps);

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
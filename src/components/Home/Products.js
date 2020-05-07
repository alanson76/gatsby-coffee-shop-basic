import React from 'react';
import Product from './Product';
import Title from '../Globals/Title';
import {StaticQuery, graphql} from 'gatsby';

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid
            }
          }
          image {
            fixed(width: 50, height: 50) {
              src
            }
          }
        }
      }
    }
  }
`;

const Products = (props) => {
  return (
    <StaticQuery
      query={getProducts}
      render={(data) => {
        return (
          <section className='py-5'>
            <div className='container'>
              <Title title='Our Products' />
              <div className='row'>
                {data.products.edges.map(({node: product}) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      onUpdateCart={props.onUpdateCart}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Products;

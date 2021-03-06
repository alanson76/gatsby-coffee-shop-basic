import React, {useState} from 'react';
import {graphql} from 'gatsby';

import SEO from '../components/seo';

//my components
import Layout from '../components/layout';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';
import Menu from '../components/Home/Menu';
import Products from '../components/Home/Products';
import Contact from '../components/Home/Contact';

const IndexPage = ({data}) => {
  const [anyNew, setAnyNew] = useState('');

  const onUpdateCart = () => {
    setAnyNew('New');
  };

  return (
    <Layout anyNew={anyNew}>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        styleClass='default-background'
        title="regular joe's"
      />
      <Info />
      <Menu items={data.menu} />
      <Products onUpdateCart={onUpdateCart} />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

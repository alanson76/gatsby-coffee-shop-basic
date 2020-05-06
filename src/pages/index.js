import React from 'react';
import {graphql} from 'gatsby';

import SEO from '../components/seo';

//my components
import Layout from '../components/layout';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass='default-background'
      title="regular joe's"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;

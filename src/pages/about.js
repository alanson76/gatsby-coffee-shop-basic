import React from 'react';
import {graphql} from 'gatsby';

import SEO from '../components/seo';

//my components
import Layout from '../components/layout';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';

const AboutPage = ({data}) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass='about-background'
      title='About Us'
    />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;

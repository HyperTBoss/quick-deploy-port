import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Divider from "../components/components-ui/Divider"
import GlobalThemeStyles from '../components/components-ui/GlobalThemeStyles'
import Post from "../templates/post"
import { graphql } from 'gatsby'
import styled from "styled-components"
import otterGIF from '/src/images/cring.gif'

const Section = styled.section`
  display: grid;
  grid-template-columns: [MainContent]1fr [MainImage] 1fr ;
  gap: 1rem;
  margin-top: 3em;
  > div{
    grid-row: 1 / 3;
  }
`;
function IndexPage({data}) {
  //Create a loop that does a grahpQL refrence and loops through the data to make  multiple cards.

  return (
    <>
      <GlobalThemeStyles/>
        <Seo title="Home"/>
        <Section>
          <div style = {{gridColumn: "MainContent"}}>
            <h1 style = {{color:  `${props => props.theme.colors.text.textColourPrimary}`}}>Front End - Web Developer </h1>
            <p>Welcome to my site, that is 100% unfinshed.</p>
            <p>Now, await awhile until this is completed. Also, something odd is happening with this current build...</p>
          </div>
          <div style = {{gridColumn: "MainImage"}}>
            <img src={otterGIF} alt="Otter dancing with a fish" style={{width: "500px"}}/>
          </div>
        </Section>
        <Divider></Divider>
        <Post></Post>
        <Divider></Divider>
        <p>
          <Link to="/cv/">CV</Link> <br />
          <Link to="/services/">Services</Link> <br />
          <Link to="/about/">About</Link> <br />
        </p>
    </>
  )
}

export default IndexPage
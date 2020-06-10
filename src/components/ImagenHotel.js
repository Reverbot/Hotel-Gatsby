import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
  height:  700px; 
`

const TextImagen = styled.div`
  background-image: linear-gradient( to top, rgba(34, 49,63, .75), rgba(34, 49,63, .75));
  color: #fff;
  height:  100%;
  display: flex;
  flex-direction : column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px){
      font-size: 5.8rem;
    }

    p{
      font-size: 2rem;
      @media (min-width: 992px){
      font-size: 2.6rem;
    }
    }
  }
`


const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "8.jpg"}){
        sharp: childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_withWebp
          }
        }  
        }
        
      }
    `)
     
    return ( 
        <ImageBackground
          Tag="section"
          fluid={image.sharp.fluid}
          fadeIn="soft"
        >  
        <TextImagen>
            <h1>Hotel Gastby</h1>
            <p>El mejor Hotel para Vacacionar</p>
        </TextImagen>
        </ImageBackground>
     );
}
 
export default ImagenHotel;
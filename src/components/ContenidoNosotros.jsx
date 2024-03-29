import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'
import styled from '@emotion/styled'

const Titulo = styled.h2`
    text-align: center;
    font-size: 4rem;
    margin-top: 4rem;
`
const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    
    p{
        line-height: 2;
    }
`

const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}) {
          nodes {
            titulo
            contenido
            imagen {
              fluid(maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)

    const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0]
    
    return ( 
        <>
            <Titulo>{titulo}</Titulo>

            <Contenido>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </Contenido>
        </>
     );
}
 
export default ContenidoNosotros;
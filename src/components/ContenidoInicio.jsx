import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'


const Titulo = styled.h2`
    text-align: center;
    font-size: 4rem;
    margin-top: 4rem;
`
const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }

    p{
        line-height: 2;
    }
`

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
          nodes {
            titulo
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)
    const {titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

    return ( 
        <>   
            <Titulo>{titulo}</Titulo>

            <TextoInicio>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} alt=""/>
            </TextoInicio>
        </>
        
     );
}
 
export default ContenidoInicio;

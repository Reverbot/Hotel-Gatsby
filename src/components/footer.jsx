import React from 'react';
import { css } from '@emotion/core'
import Nav from './nav'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;

    h1{
        margin: 0;
    }
`

const Footer = () => {

    const year = new Date().getFullYear

    return ( 
        <>
        <footer
            css={css`
                background-color: rgba(44,62,80);  
                margin-top: 5rem;  
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem;
                    
                    @media (min-width: 768px){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                `}
            >
                <EnlaceHome to="/"><h1>Gatsby Hotel</h1></EnlaceHome>
                <Nav />
            </div>
        </footer>
        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33,44,55);
                margin: 0;
                padding: 1rem;
            `}
        >
            Hotel Gatsby todos los derechos reservados {year} &copy; 
        </p>
        </>
     );
}
 
export default Footer;
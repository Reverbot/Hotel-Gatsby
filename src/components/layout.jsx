import React from 'react';
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'
import {Global, css} from '@emotion/core'
import UseSeo from '../hooks/useSeo'
 
const Layout = (props) => {
    const seo = UseSeo()
    const { fallbackSeo:{description, title}} = seo
    
    return ( 
        <>
        <Global 
            styles={
                css`
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *,*:before,*:after{
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: "PT Sans", sans-serif;
                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', sans-serif;
                        
                    }
                    h3{
                        font-family: "PT Sans", sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;   
                    }
                `
            }
        />
        <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            <title>{title}</title>
            <meta name="description" content={description} /> 
        </Helmet>


        <Header />
        {props.children}
        <Footer />
        </>
     );
}
 
export default Layout;
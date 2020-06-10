import {graphql, useStaticQuery} from 'gatsby'

const UseSeo = () => {

    const data = useStaticQuery(graphql`
        
    query {
        datoCmsSite {
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              description
              title
            }
          }
        }
      }
      
    `)
     return data.datoCmsSite.globalSeo;
    
}
 
export default UseSeo;
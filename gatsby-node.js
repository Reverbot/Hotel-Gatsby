exports.createPages = async ({actions, graphql, reporter}) =>{
    const resultado = await graphql(`
    query MyQuery {
        allDatoCmsHabitacion {
          nodes {
            slug
          }
        }
      }      
    `)

    if(resultado.errors){
        reporter.panic('no hubo resultados', resultado.errors)
    }

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context:{
                slug: habitacion.slug
            }
        })
    });

} 
import React from 'react';

import Img from "gatsby-image"

import gridStyle from './grid-layout.module.scss';

const Grid = ({imgs}) => {    
    return (
    <div className={gridStyle.gridContainer} >
    {        
    imgs.map((image, idx) => (
                <figure 
                    key={idx} 
                    tabIndex="0"
                    className={gridStyle.frame}
                >
                <p className={gridStyle.overlay}>
                This is bababa Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestiae labore rerum pariatur mollitia fuga unde similique expedita, enim possimus dolor odio in voluptas adipisci! Animi temporibus nesciunt corporis itaque fugit enim modi deserunt voluptate labore eos ullam in dolores blanditiis, illo porro facilis maiores sit consequuntur dignissimos, eveniet id incidunt! Laudantium repellat quod eligendi id similique quis saepe reprehenderit.
                </p>
                    <Img 
                        fluid={image.node.childImageSharp.fluid}
                        className={gridStyle.gatsbyImage}
                    />
                </figure>)
            )
        }
    </div>)
    };

export default Grid;
import React from 'react';

import Img from "gatsby-image"

import gridStyle from './grid-layout.module.scss';

import data from "../../projects/data.json";

const defaultTitle = "Upcoming app!"
const defaultDesc = `This will be my next application.`;

const Grid = ({imgs}) => {    
    console.log('imgs', imgs);
    console.log('data', data);
    return (
    <div className={gridStyle.gridContainer} >
    {        
    imgs.map((image, idx) => (
                <figure 
                    key={idx} 
                    tabIndex="0"
                    className={gridStyle.frame}
                >
                <div className={gridStyle.overlay}>
                    <h2 className={gridStyle.title}>{(data[image.node.name] && data[image.node.name].title) || defaultTitle}</h2>
                    <p className={gridStyle.description}>{(data[image.node.name] && data[image.node.name].desc) || defaultDesc}</p>
                </div>
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
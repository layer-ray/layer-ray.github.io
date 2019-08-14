import React from 'react';

import Img from "gatsby-image"

import gridStyle from './grid-layout.module.scss';

import data from "../../projects/data.json";

const defaultTitle = "Upcoming app!"
const defaultDesc = `This will be my next application.`;

const Grid = ({imgs}) => {    

    // detect if device is touch. Credits to Riccardo Andreatta [CODEPEN]
    function is_touch_device() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function(query) {
            return window.matchMedia(query).matches;
        }
    
        if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
            return true;
        }
    
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }

    return (
    <div className={gridStyle.gridContainer} >
                const frameStyle = [gridStyle.frame, is_touch_device() ? gridStyle.touch : gridStyle.notTouch].join(" ");
                return (<figure 
                    key={idx} 
                    tabIndex="0"
                            className={frameStyle}
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
                        })
            }
        </div>
            )
        }
    </div>)
    };

export default Grid;
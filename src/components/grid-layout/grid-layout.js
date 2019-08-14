import React, {useState, useEffect} from 'react';
import {FaGithub} from 'react-icons/fa';
import {DiHeroku} from 'react-icons/di';
import Img from "gatsby-image"

import gridStyle from './grid-layout.module.scss';

import data from "../../projects/data.json";

const defaultTitle = "Upcoming app!";
const defaultDesc = "This will be my next application.";
const defaultLink = "layer-ray.github.io/link-do-not-exists";

const Grid = ({imgs}) => {

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // detect if device is touch. Credits to Riccardo Andreatta [CODEPEN]
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            var mq = function(query) {
                return window && window.matchMedia(query).matches;
            }

            if (window && (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch))) {
                return true;
            }

            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            setIsTouch( mq(query) );
    }, []);

    return (
        <div className={gridStyle.gridContainer} >
            {imgs.map((image, idx) => {
                const prj = data[image.node.name] || {};
                const frameStyle = [gridStyle.frame, isTouch ? gridStyle.touch : gridStyle.notTouch].join(" ");
                return (<figure 
                            key={idx} 
                            tabIndex="0"
                            className={frameStyle}
                        >
                            <div className={gridStyle.overlay}>
                                <h2 className={gridStyle.title}>{prj.title || defaultTitle}</h2>
                                <p className={gridStyle.description}>
                                    {prj.desc || defaultDesc}
                                </p>
                                <footer className={gridStyle.overlayFooter}>
                                    <a
                                        href={prj.repo || defaultLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={gridStyle.btn}
                                    >
                                        <FaGithub />
                                        <span> Repo </span>
                                    </a>
                                    <a 
                                        href={prj.live || defaultLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={gridStyle.btn}
                                    >
                                        <DiHeroku />
                                        <span> Live </span>
                                    </a>
                                </footer>
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
};

export default Grid;
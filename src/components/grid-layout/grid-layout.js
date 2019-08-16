import React, {useState, useEffect} from 'react';

import {IconContext} from 'react-icons';
import {DiHeroku, DiMongodb, 
        DiCodepen} from 'react-icons/di';
import {FaGithub, FaHtml5, 
        FaReact, FaSass, 
        FaNodeJs, FaCss3Alt,
        FaJs} from 'react-icons/fa';
import {ReduxIconSvg, WebpackIconSvg, 
        D3IconSvg} from '../svg-icons';

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
                                <p className={gridStyle.linkWrapper}>
                                    <a
                                        href={(prj.repo && prj.repo.url) || defaultLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={gridStyle.btn}
                                    >
                                        {(() => {
                                            switch(prj.repo && prj.repo.host){
                                            case "github":
                                                return <FaGithub />
                                            case "codepen":
                                                return <DiCodepen />
                                            default:
                                                return;
                                        }})()}
                                        <span> Repo </span>
                                    </a>
                                    <a 
                                        href={(prj.live && prj.live.url) || defaultLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={gridStyle.btn}
                                    >
                                        {(() => {
                                            switch(prj.live && prj.live.host){
                                            case "heroku":
                                                return <DiHeroku />
                                            case "codepen":
                                                return <DiCodepen />
                                            default:
                                                return;
                                        }})()}
                                        <span> Live </span>
                                    </a>
                                </p>
                                <footer className={gridStyle.overlayFooter} >
                                    {prj.tech && prj.tech.map(tech => {
                                        switch(tech){
                                            case "html5":
                                                return <IconContext.Provider value={{size: "2em", color: "#f14a29"}} >
                                                            <FaHtml5 />
                                                        </IconContext.Provider>;
                                            case "vanilla_js":
                                                return <IconContext.Provider value={{size: "2em", color: "#f5e342"}} >
                                                            <FaJs />
                                                        </IconContext.Provider>;
                                            case "vanilla_css":
                                                return <IconContext.Provider value={{size: "2em", color: "#2062af"}} >
                                                            <FaCss3Alt />
                                                        </IconContext.Provider>;
                                            case "sass":
                                                return <IconContext.Provider value={{size: "2em", color: "#cf649a"}} >
                                                            <FaSass />
                                                        </IconContext.Provider>;
                                            case "react":
                                                return <IconContext.Provider value={{size: "2em", color: "#61dafb"}} >
                                                            <FaReact />
                                                        </IconContext.Provider>;
                                            case "node":
                                                return <IconContext.Provider value={{size: "2em", color: "#8cc84b"}} >
                                                            <FaNodeJs />
                                                        </IconContext.Provider>;
                                            case "mongo":
                                                return <IconContext.Provider value={{size: "2em", color: "#61dafb"}} >
                                                                <DiMongodb />
                                                            </IconContext.Provider>;
                                            case "redux":
                                                return <ReduxIconSvg />
                                            case "webpack":
                                                return <WebpackIconSvg />
                                            case "d3":
                                                return <D3IconSvg />
                                            default:
                                                return <div>?</div>
                                        };
                                    })}
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

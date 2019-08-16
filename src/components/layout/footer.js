import React from 'react';

import {FaFreeCodeCamp, FaCodepen, FaFacebookSquare} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import footerStyles from './footer.module.scss';

const SocialIcon = ({link, className, children}) => (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          <IconContext.Provider value={{
              size: "2em",
			        className,
              style: {
                verticalAlign: "middle"
              }}}
          >
            <div>
              {children}
            </div>                  
          </IconContext.Provider>
        </li>
      </a>
)

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <h2 className="hidden">Footer - social icons</h2>
            <ul className={footerStyles.navlist}>
              <SocialIcon 
              link="https://www.freecodecamp.org" 
              className={[footerStyles.fccIcon, footerStyles.icon].join(' ')}
              > 
                <FaFreeCodeCamp />
              </SocialIcon>
              <SocialIcon 
                link="https://www.codepen.io"   		
                className={[footerStyles.codepenIcon, footerStyles.icon].join(' ')}
              >
                <FaCodepen />
              </SocialIcon>
              <SocialIcon 
                link="https://www.facebook.com" 
                className={[footerStyles.fbIcon, footerStyles.icon].join(' ')}
              >
                <FaFacebookSquare />
              </SocialIcon>
            </ul>
             Layer © {new Date().getFullYear()}
        </footer>
    );    
};

export default Footer;
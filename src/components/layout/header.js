import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyle from './header.module.scss';



const Header = ({ siteTitle }) => (
	<header className={headerStyle.header}>
		<div className={headerStyle.title}>
			<h2 className="hidden">Header</h2>
			<h2>
					LAYER
			</h2>
			<p>Web developer</p>
		</div>		
		<nav className={headerStyle.navBar}>
			<h2 className="hidden">Navigation elements</h2>
			<li>
				<Link to="/about" activeClassName={headerStyle.active} >
					About
				</Link>
			</li>
			<li>
				<Link to="/" activeClassName={headerStyle.active}>
					Home
				</Link>
			</li>
		</nav>
	</header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

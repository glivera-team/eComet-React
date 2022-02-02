import React from 'react';

const Header = () => {
  return (
		<header className="header">
 			<div className="header_in">
				<div className="header_top">
					<div className="header_top_title">Do you need more traffic to your AfterSell Store ?</div><a className="btn_base mob_size_mod" href="#s">CHECK OUT AFTERS</a>
				</div>
				<div className="header_bottom"><a className="header_logo_w" href="#s"><img className="header_logo" src="i/Logo.png" alt="Logo"/></a>
					<div className="menu_trigger menuTrigger"><span className="menu_trigger_decor"></span></div>
					<div className="header_menu">
						<nav className="header_nav">
 							<ul className="header_nav_list">
								<li className="header_nav_item"><a className="header_nav_link" href="#s">Product</a></li>
								<li className="header_nav_item"><a className="header_nav_link" href="#s">Case Study</a></li>
								<li className="header_nav_item"><a className="header_nav_link" href="#s">Blog</a></li>
							</ul>
						</nav>
						<div className="btn_wrap center_mod"><a className="btn_v2" href="#s">BOOST SHOPIFY SALES 15%</a></div>
					</div>
				</div>
			</div>
		</header>     
	)
}

export default Header;
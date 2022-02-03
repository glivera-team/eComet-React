import React from 'react';
// import FooterList from './FooterList';
// import FooterLogoImg from 'i/logo.png';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer_in">
			  <div className="footer_top"><a className="footer_logo_w" href="#"><img className="footer_logo" src='' alt="Logo" /></a>
				  <div className="footer_row">
					  <div className="footer_content">
						  <div className="footer_descr">
							  <p>eComet is the eCommerce app that turns your post purchase experience into a revenue generating machine.</p>
						  </div><a className="footer_link" href="#"><span>Book Now</span>
						  <svg className="icon icon-arrow_right ">
							  <use xlinkHref="i/sprite/sprite.svg#arrow_right" />
						  </svg></a>
					  </div>
					  <div className="footer_cols">
						  <div className="footer_col">
							  <div className="footer_col_title"><span>Company</span>
								  <svg className="icon icon-arrow_down ">
									  <use xlinkHref="i/sprite/sprite.svg#arrow_down" />
								  </svg>
							  </div>
							  <ul className="footer_col_list">
								  <li className="footer_col_li"><a className="footer_col_link" href="#">About</a></li>
								  <li className="footer_col_li"><a className="footer_col_link" href="#">Careers</a></li>
								  <li className="footer_col_li"><a className="footer_col_link" href="#">Blog</a></li>
							  </ul>
						  </div>
						  <div className="footer_col">
							  <div className="footer_col_title"><span>Integrations</span>
								  <svg className="icon icon-arrow_down ">
									  <use xlinkHref="i/sprite/sprite.svg#arrow_down" />
								  </svg>
							  </div>
							  <ul className="footer_col_list">
								  <li className="footer_col_li"><a className="footer_col_link" href="#">Shopify Plus</a></li>
								  <li className="footer_col_li"><a className="footer_col_link" href="#">Shopify</a></li>
							  </ul>
						  </div>
						  <div className="footer_col">
							  <div className="footer_col_title"><span>Pricing</span>
								  <svg className="icon icon-arrow_down ">
									  <use xlinkHref="i/sprite/sprite.svg#arrow_down" />
								  </svg>
							  </div>
							  <ul className="footer_col_list">
								  <li className="footer_col_li"><a className="footer_col_link" href="#">Pricing</a></li>
							  </ul>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="footer_bottom">
				  <div className="footer_copy">© eComet 2021 - All rights reserved.</div>
				  <ul className="footer_policy">
					  <li className="footer_policy_item"><a className="footer_policy_link" href="#">Privacy Policy</a></li>
					  <li className="footer_policy_item"><a className="footer_policy_link" href="#">Terms of Service</a></li>
				  </ul>
			  </div>
			</div>
		</footer>
	)
}

export default Footer;
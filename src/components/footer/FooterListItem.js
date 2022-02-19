import React from 'react';

const FooterListItem = ({ title }) => {
    return (
        <a className="footer_col_link" href="#">{ title }</a>
    );
};

export default FooterListItem;
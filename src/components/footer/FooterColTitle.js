import React from 'react';
import spriteIcon from '../../i/sprite/sprite.svg';

const FooterColTitle = ({ title }) => {
    return (
        <div className="footer_col_title"><span>{ title }</span>
            <svg className="icon icon-arrow_down ">
                <use xlinkHref="i/sprite/sprite.svg#arrow_down" />
            </svg>
        </div>
    );
};

export default FooterColTitle;
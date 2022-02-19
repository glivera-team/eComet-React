import React from 'react';
import FooterListItem from './FooterListItem'

const FooterList = ({ title }) => {

    const listItem = title.map((item) => {

        const {id, ...itemProps} = item;
        return (
            <li className="footer_col_li" key={id}>
                <FooterListItem { ...itemProps }/>
            </li>
        );
    });

    return (
        <ul className="footer_col_list">
            { listItem }
        </ul>
    );
}

export default FooterList;
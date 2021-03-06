import React from 'react';
import s from './ListItem.module.scss';
import StarRating from '../StarRating/StarRating';

function ListItem({ heading, subHeading, logoName, logo, rating, btnClick }) {
    return (
        <div className={s.listitem}>
            {
                logoName &&
                <div onClick={btnClick} className={s.left}>
                    {/* {logo && <img src={logo} alt={logoName} />} */}
                    {logo}
                    <div>{logoName}</div>
                </div>
            }
            <div className={s.middle}>
                <div className={s.heading}>{heading}</div>
                <div className={s.subHeading}>{subHeading}</div>
            </div>
            <div className={s.right}>
                <StarRating rating={rating} />
            </div>
        </div>
    );
}

export default ListItem;
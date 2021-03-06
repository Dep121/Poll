import React from 'react';
import s from './StarRating.module.scss';
import { ReactComponent as Star } from '../../assets/svg/star.svg';

function StarRating({ rating }) {
    return (
        <>
            {
                Array.apply(null, { length: parseInt(rating) }).map((_, i) => {
                    return <Star key={i} />
                })
            }
            {/* {
                Array.apply(null, { length: 5 - parseInt(rating) }).map((_, i) => {
                    return <Star key={i} />
                })
            } */}
            {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
        </>
    );
}

export default StarRating;
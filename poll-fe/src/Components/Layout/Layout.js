import React from 'react';
import Header from '../Header/Header';
import './Layout.scss';

function Layout({children}){
    return(
        <div className={'layout'}>
            <Header />
            <div className={'child'}>
                {children}
            </div>
        </div>
    )
}

export default Layout;
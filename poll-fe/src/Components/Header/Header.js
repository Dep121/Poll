import React, { useEffect, useState } from 'react';
import './Header.scss';
import Button from "../Button/Button";

function Header() {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);

    async function getUserInfo() {
        let res = await fetch('/users/1');
        let result = await res.json();
        const {name, email} = result[0];

        setUserName(name);
        setEmail(email);
    }

    useEffect(()=>{
        getUserInfo();
    },[])

    return (
        <header className={'header'} >
            <a className={'left'} href={'http://localhost:3000/'} title={'Rapid Poll'}></a>
            <div className={'mid'}>
                create Poll
            </div>
            <div className={'right'}>
                {
                    userName
                        ? <div className={'user-details'}>
                            <div>Welcome {userName} </div>
                            <div>email: {email} </div>
                        </div>
                        : <>
                            <Button onClick={() => { }}>login</Button>
                            <Button filled onClick={() => { }}>signUp</Button>
                        </>
                }
            </div>
        </header>
    )
}

export default Header;
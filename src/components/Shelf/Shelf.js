import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cookies } from '../../index.js';
import { logout } from '../../actions/account.js';
import calliope from '../../images/calliope.gif';

const Shelf = () => {
    const session = useSelector((state) => state.session);
    const dispatch = useDispatch();

    const renderDirect = () => {
        if (!session.username) {
            return <Redirect to="/" />
        }
    }

    const doLogout = () => {
        if (session.username) {
            dispatch(logout())
            .then((response) => {
                cookies.remove('ID');
                cookies.remove('Username');
            });
        }
    }

    return (
        <div>
            {renderDirect()}
            <h1>Shelf</h1>
            <hr></hr>
            <p>You are logged in as {session.username}</p>
            <img src={calliope} alt="calliope" /><br></br>
            <button type="button" id="logoutButton" onClick={doLogout}>Logout</button><br></br>
        </div>
    );
}

export default Shelf;
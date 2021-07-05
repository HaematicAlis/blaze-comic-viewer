import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../actions/account.js';

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
            dispatch(logout());
        }
    }

    return (
        <div>
            {renderDirect()}
            <h1>Shelf</h1>
            <hr></hr>
            <p>You are logged in as {session.username}</p>
            <button type="button" id="logoutButton" onClick={doLogout}>Logout</button><br></br>
        </div>
    );
}

export default Shelf;
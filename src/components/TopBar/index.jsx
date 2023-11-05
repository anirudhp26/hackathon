import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../redux';
export default function TopBar() {
    const dispatch = useDispatch();
    return (
        <div className="top-bar">
            <span class="material-icons menu" id="menu-topbar">
                menu
            </span>
            <div className="search">
                <input type='text' placeholder='Search...' />
            </div>
            <div className="accessories">
                <span class="material-icons">
                    notifications
                </span>
                <span class="material-icons">
                    email
                </span>
                <span class="material-icons topbar-profile">
                    account_circle
                </span>
                <button onClick={() => {dispatch(setLogout())}} style={{ backgroundColor: 'red' }}>Logout</button>
            </div>
        </div>
            );
}
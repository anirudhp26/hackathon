import React from 'react';

export default function AdminDashboard() {
    return (
        <>
        <div className="data">
                    <div className="data-sales">
                        <div className="sale">
                            <p style={{ fontSize: '35px', padding: '0.5rem 0 0 1rem' }}>Sale</p>
                            <p style={{ color: 'blue', fontWeight: '700', padding: '1rem 1rem 0 0', fontSize: '25px' }}>$613.200</p>
                        </div>
                        <div className="layer2-root">
                            <div className="layer2">
                                <div className="layer2-data">
                                    <p>Customers</p>
                                    <p>44.725</p>
                                    <p style={{ color: 'red' }}>-12.4% &darr;</p>
                                </div>
                                <div className="layer2-logo">
                                    <span class="material-icons" style={{ color: 'blue', fontSize: '30px', border: '1px solid blue', borderRadius: '10px', padding: '3px', backgroundColor: 'lightblue' }}>
                                        connect_without_contact
                                    </span>
                                </div>
                            </div>
                            <div className="layer2">
                                <div className="layer2-data">
                                    <p>Orders</p>
                                    <p>385</p>
                                    <p style={{ color: 'blue' }}>17.2% &uarr;</p>
                                </div>
                                <div className="layer2-logo">
                                    <span class="material-icons" style={{ color: 'blue', fontSize: '30px', border: '1px solid blue', borderRadius: '10px', padding: '3px', backgroundColor: 'lightblue' }}>
                                        shopping_cart
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="data-traffic">
                        <p style={{ fontSize: '30px', padding: '0.5rem 0 0 1rem' }}>Traffic</p>
                        <p></p>
                    </div>
                </div>
                <div className="users">
                    <div className="user-root">
                        <div>
                            <p style={{ fontSize: '35px' }}>Users</p>
                            <p style={{ color: 'grey' }}>1,232,150 registered users</p>
                        </div>
                        <button><span class="material-icons" style={{ paddingRight: '5px' }}>
                            person_add
                        </span>Add new user</button>

                    </div>
                    <div className="user-tabs">
                        <div className="div-1"><p>Users</p></div>
                        <div className="div-2"><p>Conversion Rate</p></div>
                        <div className="div-3"><p>Sessions</p></div>
                    </div>
                </div>
        </>
    )
}
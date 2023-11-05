import React from "react";
import '../../global.css';
import Sidebar from '../../components/Sidebar';
import { useSelector } from 'react-redux';
import AdminDashboard from '../AdminDash';
import EmployeeDashboard from '../EmployeeDash';
import TopBar from '../../components/TopBar';
export default function Body() {
    const user = useSelector(state => state.user);
    return (<>
        <Sidebar />
        <div className="left-area" id='left-area'>
            <TopBar />
            <h1>Dashboard</h1>
            <p className="left-head">Home&nbsp;&nbsp;/&nbsp;&nbsp;<a href="/" style={{ color: 'grey', textDecoration: 'none' }}>Dashboard</a></p>
            {!user.isAdmin ? 
            <>
                <AdminDashboard />
            </> 
            : 
            <>
                <EmployeeDashboard />
            </>
            }
        </div>
    </>
    )
}
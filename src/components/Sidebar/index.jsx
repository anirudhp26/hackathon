import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

  return (
    <nav id="sidebar" className="snavbar">
            <div className="sidebar-title">
                <span class="material-icons">
                    speed
                </span>
                <p style={{ color: 'white' }}>Dashboard</p>
            </div>
            {user.isAdmin 
            ? 
            <>
            <div className="plugins">
                <ul>
                    <li className="list-items-root"><span class="material-icons">
                        calendar_month
                    </span>Items Stats</li>
                    <li className="list-items-root" onClick={() => {navigate('/listItems')}}><span class="material-icons">
                        pie_chart
                    </span>List Inventory</li>
                    <li className="list-items-root" onClick={() => {navigate('/addItem')}}><span class="material-icons">
                        analytics
                    </span>Add Items</li>
                    <li className="list-items-root"><span class="material-icons">
                        settings
                    </span>Employee Stats</li>
                    <li className="list-items-root" onClick={() => {navigate('/listRequests')}}><span class="material-icons">
                        settings
                    </span>Requests</li>                
                    <li className="list-items-root"><span class="material-icons">
                        settings
                    </span>Requests History</li>                
                </ul>
            </div>
            </> 
            : 
            <>
            <div className="plugins">
                <ul>
                    <li className="list-items-root" onClick={() => {navigate('/orderItems')}}><span class="material-icons">
                        pie_chart
                    </span>Order Items</li>           
                    <li className="list-items-root"><span class="material-icons">
                        calendar_month
                    </span>Request History</li>
                </ul>
            </div>
            </>
            }
            
        </nav>
  )
}

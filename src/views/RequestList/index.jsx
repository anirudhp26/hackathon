
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";

const RequestList = () => {
    const [requests, setRequests] = useState([]);

    const token = useSelector(state => state.token);
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}request/getAllRequests`, {token: token}, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            console.log(res.data);
            setRequests(res.data.requests);
        }).catch((err) => {
            console.log(err);
        });
    }, [token]);

    const handleApproveReq = async (request) => {
        // Handle approve request logic here
        // axios.post(`${process.env.REACT_APP_API}request/approveRequest`, { name: selectedItem, quantity: quantity, sender: user._id }).then((response) => {
        //     console.log(response.data);
        // })
        const response = await axios.post(`${process.env.REACT_APP_API}request/updateRequest`, { id: request._id, name: request.name, quantity: request.quantity, sender: request.sender, isApproved: true }, { headers: { Authorization: `Bearer ${token}` } });
        console.log(response.data);
    }

    return (
        <>
            <Sidebar />
            <div className="left-area">
                <TopBar />
                <div className="inventorylist">
                    <h1>Inventory List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Approved?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{!item.isApproved ? <p onClick={() => {handleApproveReq(item)}} style={{ color: 'red' }}>Approve</p> : <p style={{ color: 'green' }}>Approved</p>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default RequestList;

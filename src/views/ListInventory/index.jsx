
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
// import "./index.css";
const ListInventory = () => {
    const [inventoryData, setInventoryData] = useState([]);

    const token = useSelector(state => state.token);
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}item/getItems`, {token: token}, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            console.log(res.data);
            setInventoryData(res.data.items);
        }).catch((err) => {
            console.log(err);
        });
    }, [token]);

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
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ListInventory;

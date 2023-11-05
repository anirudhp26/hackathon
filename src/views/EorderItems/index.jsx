import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import './index.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function EorderItems() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const token = useSelector(state => state.token);
    const [quantity, setQuantity] = useState(1);
    const user = useSelector(state => state.user);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}item/getItems`, {token: token}, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            console.log(res.data);
            setItems(res.data.items);
        }).catch((err) => {
            console.log(err);
        });
    }, [token]);

    const handleItemChange = (event) => {
        setSelectedItem(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handlePlaceOrder = () => {
        // Handle place order logic here
        axios.post(`${process.env.REACT_APP_API}request/createRequest`, { name: selectedItem, quantity: quantity, sender: user._id }).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <>
            <Sidebar />
            <div className="left-area">
                <TopBar />
                <div className="eorder-table">
                    <form>
                        <div className="form-group">
                            <label htmlFor="itemSelect">Select Item:</label>
                            <select className="form-control" id="itemSelect" value={selectedItem} onChange={handleItemChange}>
                                <option value="">Select an item</option>
                                {items.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantitySelect">Quantity:</label>
                            <input type="number" className="form-control" id="quantitySelect" value={quantity} onChange={handleQuantityChange} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handlePlaceOrder}>Place Order</button>
                    </form>
                </div>
            </div>
        </>
    )
}
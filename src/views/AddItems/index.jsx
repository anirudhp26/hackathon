import React from 'react';
import './index.css';
import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
export default function AddProduct() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const token = useSelector(state => state.token);
    const navigate = useNavigate();
    const addItem = () => {
        axios.post(`${process.env.REACT_APP_API}item/createItem`, { name: name, quantity: quantity }, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            console.log(res.data);
            navigate('/listitems');
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <SideBar />
            <div className="left-area">
                <TopBar />
                <div class="container">
                    <h2>Add Product</h2>
                    <div id="product-form">
                        <label for="name">Product Name</label>
                        <input type="text" className="additeminput" id="name" name="name" required onChange={(e) => {setName(e.target.value)}} />

                        <label for="price">Quantity</label>
                        <input type="number" id="price" name="price" className="additeminput" required onChange={(e) => {setQuantity(e.target.value)}} />

                        <button onClick={() => {addItem()}}>Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}
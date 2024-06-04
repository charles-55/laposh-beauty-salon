import { AdminSideBar } from "../components";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

import '../assets/css/admin.css';

export const AdminPage = () => {
    // New Product States
    const [productType, setProductType] = useState("wigs");
    const [newProdName, setNewProdName] = useState("");
    const [newProdDesc, setNewProdDesc] = useState("");
    const [newProdTexture, setNewProdTexture] = useState("");
    const [newProdAmount, setNewProdAmount] = useState(0);

    const getProductGroup = (groupName) => {
        return collection(db, groupName);
    };

    const addProduct = async () => {
        try {
            await addDoc(getProductGroup(productType), {
                name: newProdName,
                description: newProdDesc,
                texture: newProdTexture,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="admin-page">
            <AdminSideBar />
            <div className="admin-content">
                <div id="settings" className="admin-section">
                    <h1>Settings</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                </div>

                <div id="users" className="admin-section">
                    <h1>Users</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                </div>

                <div id="inventory" className="admin-section">
                    <h1>Inventory</h1>
                    <div className="inventory-ctrl">
                        <button>Add</button>
                        <button>Update</button>
                        <button>Remove</button>
                    </div>
                    
                    <div>
                        <input type="text" placeholder="Product name..." onChange={(e) => setNewProdName(e.target.value)} />
                        <input type="text" placeholder="Product desc..." onChange={(e) => setNewProdDesc(e.target.value)} />
                        <input type="text" placeholder="Product texture..." onChange={(e) => setNewProdTexture(e.target.value)} />
                        <input type="number" placeholder="Product amount..." onChange={(e) => setNewProdAmount(Number(e.target.value))} />
                        <button className="btn btn-outline-success mt-3" onClick={addProduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
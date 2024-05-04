import { AdminSideBar } from "../components";

import '../assets/css/admin.css';

export const AdminPage = () => {

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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odio non nulla rerum optio soluta harum dolores sunt, minus aperiam quae a veritatis cumque delectus accusantium vitae sint ut! Sunt!</p>
                </div>
            </div>
        </div>
    );
};
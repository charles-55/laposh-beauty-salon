import { useEffect, useState } from 'react';
import { sidebarData } from './AdminSideBarData';
import { List } from 'react-bootstrap-icons';

export const AdminSideBar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [showSideBar, setShowSideBar] = useState(true);

    const handleScroll = () => {
        const sections = document.querySelectorAll('.admin-section');

        let currentSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <=175 && rect.bottom > 0) {
                currentSection = section.id;
            }
        });

        setActiveItem(currentSection);
    };

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);

        const toggleSideBar = document.querySelector('.toggle-sidebar');
        toggleSideBar.style.textAlign = !showSideBar ? "left" : "center";
        toggleSideBar.style.paddingLeft = !showSideBar ? "15px" : "0px";

        const adminSideBar = document.querySelector('.admin-sidebar');
        adminSideBar.style.width = !showSideBar ? "200px" : "60px";

        const adminContent = document.querySelector('.admin-content');
        adminContent.style.marginLeft = !showSideBar ? "200px" : "60px";
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="admin-sidebar">
            <p className='toggle-sidebar' style={{ fontSize: '35px' }} onClick={toggleSideBar}><List /></p>

            {
                showSideBar &&
                <ul className='admin-sidebar-list'>
                    {sidebarData.map((val, key) => {
                        return (
                            <li className={activeItem === val.link.slice(1) ? 'active' : ''} key={key} onClick={() => window.location.href = val.link}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            }

            {
                !showSideBar &&
                <ul id='minimized' className='admin-sidebar-list'>
                    {sidebarData.map((val, key) => {
                        return (
                            <li className={activeItem === val.link.slice(1) ? 'active' : ''} key={key} onClick={() => window.location.href = val.link}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};
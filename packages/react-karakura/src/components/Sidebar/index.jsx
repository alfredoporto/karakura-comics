
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./styles.css";


const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const { pathname } = useLocation();
    let navigate = useNavigate();

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <img width='80px' height='80px' src="./Images/Karakura-2.gif" onClick={menuIconClick} />
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <ArrowRightOutlinedIcon />
                            ) : (
                                <ArrowLeftOutlinedIcon />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={pathname === '/products' ? true : false} icon={<HomeOutlinedIcon />} onClick={() => navigate("/products", { replace: true })}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<LocalMallIcon />} active={pathname === '/shopping' ? true : false} onClick={() => navigate("/shopping", { replace: true })}>Carrito</MenuItem>
                            <MenuItem icon={<FavoriteOutlinedIcon />} >Favoritos</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<ExitToAppOutlinedIcon />} onClick={() => navigate("/", { replace: true })}>Salir</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;
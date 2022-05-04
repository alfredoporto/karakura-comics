import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Login from '../../components/Login';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { useState } from "react";

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box><img width='180px' height='180px' src="./Images/Karakura.gif" /></Box>
                <Box display={'flex'} justifyContent={'flex-end'} style={{ marginTop: '-45px' }}>
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon style={{ color: 'white', fontSize: '30px' }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        onClick={async () => {
                            setShowLogin(!showLogin);
                        }}
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle style={{ color: 'white', fontSize: '30px' }} />
                    </IconButton>
                </Box>
            </Box>
            <Box className="main">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="./Images/Login/1.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/2.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/3.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/4.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/5.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/6.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/7.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/8.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/9.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/10.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/11.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/12.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/13.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./Images/Login/14.jpeg" />
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Login open={showLogin}/>
        </>
    );
}
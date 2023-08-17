import { Routes as RoutesDom, Route } from 'react-router-dom';
import React, { useState } from "react";

//Pages
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import MenuMobile from '../assets/Components/MenuMobile/MenuMobile'
import Home from '../Pages/Home/Home';

function Routes() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <RoutesDom>
                <Route element={<Home />} path="/" />
                {/* <Route element={<About />} path="/about" /> */}
            </RoutesDom>
            <Footer />
        </>
    );
};

export default Routes;
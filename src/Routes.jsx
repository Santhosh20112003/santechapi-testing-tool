import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

function RoutesDm() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:url/:token" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesDm;
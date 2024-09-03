import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HomeComponent} from "./app/page/home/HomeComponent";
import {ProductComponent} from "./app/page/product/ProductComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicRoute} from "./app/core/PublicRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PublicRoute/>}>
                    <Route path={'/'} element={<HomeComponent/>}/>
                    <Route path={'/product'} element={<ProductComponent/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

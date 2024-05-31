import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from './page/Search.jsx';
import Film from './page/Film.jsx';
import MainLayout from './layouts/MainLayouts.jsx';
import FilmDetailPage from './page/FilmDetailPage.jsx';


const Router = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout />}>

                <Route element={<Film />} path="/" />
                <Route element={<Search />} path="/search" />
                <Route element={<FilmDetailPage />} path="/films/:id"  /> 

         </Route>       
            {/* <Route element={<PageNotFound />} path="*" /> */}
        </Routes>
    </BrowserRouter>
);

export default Router;
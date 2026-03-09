import React from 'react';
import Banner from './Banner';
import {  useLoaderData } from 'react-router';
import PopularGames from './PopularGames';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    const datas = useLoaderData();

    document.title = "GameHub - homepage";

    return (
        <div>
            <Banner datas={datas}></Banner>
            <PopularGames></PopularGames>
            <NewsLetter></NewsLetter>

            {/* <Banner datas = {datas}></Banner> */}
        </div>
    );
};

export default Home;
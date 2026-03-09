import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';

const Home = () => {
    // const datas = useLoaderData();

    document.title = "GameHub - homepage";

    return (
        <div>
            <PopularGames></PopularGames>

            {/* <Banner datas = {datas}></Banner> */}
        </div>
    );
};

export default Home;
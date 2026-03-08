import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import PopularGames from './PopularGames';

const Home = () => {
    // const datas = useLoaderData();

    return (
        <div>
            <h1 className='text-center'>this is the home page</h1>
            <PopularGames></PopularGames>

            {/* <Banner datas = {datas}></Banner> */}
        </div>
    );
};

export default Home;
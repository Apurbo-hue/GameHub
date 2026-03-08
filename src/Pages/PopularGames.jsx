import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from '../Components/GameCard';

const PopularGames = () => {
    const datas = useLoaderData();
    // console.log(datas)
    const sortedData = datas.sort((a, b) => b.ratings - a.ratings).slice(0,3)
    // console.log(sortedData)
    return (
        <div className='my-6'>
            <h1 className='font-bold text-center my-6'>Top 3 popular Games</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    justify-center gap-4 overflow-hidden'>

            {sortedData.map((game) => <GameCard game={game}></GameCard>)}
            </div>
        </div>
    );
};

export default PopularGames;
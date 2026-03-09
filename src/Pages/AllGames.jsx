import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from './../Components/GameCard'

const AllGames = () => {
    document.title="GameHub - All games"
    const games = useLoaderData();
    // console.log(games)
    return (
        <div className='my-6'>
            <h1 className='text-center font-bold text-3xl'>All Games ({games.length })</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-6'>
                  {games.map((game)=><GameCard key={game.id} game={game}></GameCard>)}
            </div>
           
        </div>
    );
};

export default AllGames;
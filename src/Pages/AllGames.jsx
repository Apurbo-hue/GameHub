import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from './../Components/GameCard'

const AllGames = () => {
    const games = useLoaderData();
    // console.log(games)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center my-6'>
            {games.map((game)=><GameCard key={game.id} game={game}></GameCard>)}
        </div>
    );
};

export default AllGames;
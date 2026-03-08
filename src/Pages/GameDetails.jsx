import React, { useEffect, useState } from 'react';
import { useLoaderData,useParams } from 'react-router';

const GameDetails = () => {

     const games = useLoaderData();

    const { id } = useParams();
    const [gameFound, setGameFound] = useState("")

    const { title, coverPhoto, category, downloadLink, description, ratings, developer } = gameFound;


    useEffect(() => {
        const gamesFound = games.find((game) => game.id === id)
        setGameFound(gamesFound)
    }, [games, id])

    // console.log(id, games, gameFound)
    return (
        <div className="min-h-screen bg-base-200">
            {/* 1. HERO SECTION: Full-width background header */}
            <div
                className="hero h-[400px] relative overflow-hidden"
                style={{ backgroundImage: `url(${coverPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="hero-overlay bg-opacity-80 bg-base-300 backdrop-blur-sm"></div>
                <div className="hero-content text-center lg:text-left flex-col lg:flex-row gap-10">
                    {/* Main Visual Image */}
                    <img
                        src={coverPhoto}
                        className="max-w-sm rounded-lg shadow-2xl border-4 border-base-100 hidden md:block"
                        alt={title}
                    />
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                            <span className="badge badge-primary font-bold">{category}</span>
                            <span className="badge badge-secondary font-bold">⭐ {ratings}</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-2">{title}</h1>
                        <p className="text-xl opacity-80 mb-6 font-semibold uppercase tracking-widest text-primary">
                            Developed by {developer}
                        </p>
                        <a href={downloadLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg px-10">
                            Download Now
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. STATS SECTION: Quick info bar */}
            <div className="container mx-auto -mt-10 relative z-10 px-4">
                <div className="stats shadow bg-base-100 w-full grid grid-cols-1 md:grid-cols-3">
                    <div className="stat place-items-center">
                        <div className="stat-title uppercase text-xs font-bold">Category</div>
                        <div className="stat-value text-primary text-2xl">{category}</div>
                    </div>
                    <div className="stat place-items-center border-x border-base-300">
                        <div className="stat-title uppercase text-xs font-bold">Rating</div>
                        <div className="stat-value text-secondary text-2xl">{ratings} / 5.0</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title uppercase text-xs font-bold">Platform</div>
                        <div className="stat-value text-2xl">Windows </div>
                    </div>
                </div>
            </div>

            {/* 3. CONTENT SECTION: Description & Details */}
            <div className="container mx-auto py-12 px-4">
                <div className="">

                    {/* About the Game */}
                    <div className="l">
                        <div className="card bg-base-100 shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-4 border-b pb-2 border-base-300">About {title}</h3>
                            <p className="text-lg leading-relaxed text-base-content/80">
                                {description}
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default GameDetails;
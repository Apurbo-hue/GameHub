import React from 'react';
import { Link } from 'react-router';

const GameCard = ({ game }) => {
    // console.log(game)

    const { id,title, coverPhoto, category, downloadLink, description, ratings, developer } = game;
    return (

        <Link to={`/allGames/${id}`}>

            <div className="card card-compact w-full max-w-115 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 group overflow-hidden">
                {/* Official Game Header Image */}
                <figure>
                    <img
                        src={coverPhoto}
                        alt={title}
                        className="w-full aspect-460/215 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </figure>

                <div className="card-body p-4 bg-linear-to-b from-base-100 to-base-200">
                    {/* Badges Section Under Image */}
                    <div className="flex gap-2 mb-2">
                        <div className="badge badge-secondary badge-sm font-bold gap-1 shadow-sm">
                            ⭐ {ratings}
                        </div>
                        <div className="badge badge-outline badge-sm uppercase text-[10px] font-bold tracking-wider opacity-80">
                            {category}
                        </div>
                    </div>

                    {/* Title and Developer */}
                    <div className="space-y-1">
                        <h2 className="card-title text-lg leading-tight group-hover:text-primary transition-colors">
                            {title}
                        </h2>
                        <p className="text-[11px] font-semibold opacity-60 uppercase tracking-widest">
                            Developer: {developer}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-base-content/70 line-clamp-2 mt-2 leading-relaxed">
                        {description}
                    </p>

                    {/* Action Button */}
                    <div className="card-actions justify-end mt-4">
                        <a
                            href={downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm w-full md:w-auto px-6 group"
                        >
                            Get Game
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
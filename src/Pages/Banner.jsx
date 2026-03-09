import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = ({ datas }) => {

    return (
        <div className='relative overflow-hidden w-full '>
            <h1 className='text-5xl text-center font-bold my-8'>Game Hub Games</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {/* Mapping starts here */}
                {datas.map((game) => (
                    <SwiperSlide key={game.id}>
                        <Link to={`/allGames/${game.id}`}>
                            <div className="relative group overflow-hidden rounded-xl">
                                <img
                                    src={game.coverPhoto}
                                    alt={game.title}
                                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay for Game Title */}
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-white text-2xl font-bold">{game.title}</h3>
                                    <p className="text-gray-300">{game.developer}</p>
                                </div>
                            </div></Link>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Banner;
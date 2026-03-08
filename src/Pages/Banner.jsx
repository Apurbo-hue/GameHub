import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Banner = ({ datas }) => {

    return (
        <div className='relative overflow-hidden w-full '>

            <div className='flex items-center'>

                {
                    datas.map(data =>
                    (
                        <motion.img
                            drag
                            src={data.coverPhoto}
                            initial={{ x: "-100%" }}
                            animation={{ x: 0 }}
                            exit={{ x: "100%" }}
                          transition={{ duration: 0.6 }}>

                        </motion.img>

                    )
                    )
                }

            </div>

        </div>
    );
};

export default Banner;
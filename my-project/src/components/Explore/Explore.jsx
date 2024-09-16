import React from 'react'
import {motion} from "framer-motion"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import { SlideUp} from '../../utility/animation';



const ExploreData =[
    {
        id: 1,
        title: "Nearoyfjordan",
        place: "Norway",
        url:"#",
        image: img1 ,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Antelop Canyon",
        place: "United States",
        url:"#",
        image: img2,
        delay: 0.4,
    },

    {
        id: 3,
        title: "Lakes",
        place: "Austria",
        url:"#",
        image: img3,
        delay: 0.6,
    },
]

const Explore = () => {
  return (
    <>
      <section className="container" id="explore">
        {/* {header section} */}
        <motion.div
           initial ={{opacity:0}}
           animate ={{opacity:1}}
           transition={{duration: 2, delay: 0.2}}
           className='text-center md:max-w-[650px] mx-auto space-y-4'>
            <h1 className='text-3xl'>  Explore the World</h1>
            <p>We look to provide the most authentic contentt from
                athletes, adventuren, explorers travellers autound
                the world. Our long them mission is to educate inspire 
                and enuble all peoples to experience & protect wildeness.
             </p> 
        </motion.div>
        {/* {cards section} */}
        <div
            className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center'>
            {ExploreData.map((data) => (
                <motion.div
                  variants={SlideUp(data.delay)}
                  initial = "hidden"
                  animate="visible"
                  key={data.id}
                  className='relative'>
                    <img src={data.image} alt='' className='w-[380px] h-[550px] object-cover'/>
                    <div className='absolute w-full bottom-0 inset-0 bg-brandDark/15'>
                        <div className='h-full space-y-1 py-6 flex flex-col justify-end items-center'>
                            <h1 className='text-2xl font-semibold'>{data.title}</h1>
                            <p className='uppercase'>{data.place}</p>
                        </div>
                    </div>    
                </motion.div>
            ))}
        </div>

        {/* {Button section} */}
        <button className='block mx-auto mt-6 text-brandBlue uppercase font-bold'>
            See more 
        </button>
      </section>
    </>
  )
}

export default Explore
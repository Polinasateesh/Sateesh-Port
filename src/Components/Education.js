import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  const details = [
    {
      type: "Bachelor Of Technology In Electronic & Communication",
      time: "March-2021",
      place: "Hyderabad,India",
      info: "CGPA:6.33"
    }, {
      type: "Board of Higher Secondary Certificate ",
      time: "March-2016",
      place: "Kothagudem,India",
      info: "CGPA:6.7"
    }, {
      type: "Board Of Secondary School Certificate",
      time: "March-2014",
      place: "Cherla,India",
      info: "CGPA:6.7"
    }
  ]

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {details.map((eachDetail,index)=>(
            <li
              ref={ref}
              className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
              key={index}
            >
              <LiIcon reference={ref} />

              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                  {eachDetail.type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                  {eachDetail.time} | {eachDetail.place}
                </span>
                <p className="w-full font-medium md:text-sm">{eachDetail.info}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

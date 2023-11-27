import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'center start'],
    });
    const details = [
      {
        companyName:'NavTech Electronics',
        type: "Full Time",
        role: "Frontend Developer",
        place: "Hyderabad,India",
        Date: "Sept-2022"
      }, {
        companyName:'NxtWave Technologies',
        type: "Internship",
        role: "FullStack Web Developer",
        place: "Hyderabad,India",
        Date: "Feb-2022"
      },
    ]
  
    return (
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
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
                  <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">Company : {eachDetail.companyName}</h3>
                  <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                   Date of Joining : {eachDetail.Date}   </span>
                  <p className="w-full font-medium md:text-sm">Role : {eachDetail.role}</p>
                  <p className="w-full font-medium md:text-sm">Employeement Type : {eachDetail.type}</p>
                  <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                   place :  {eachDetail.place} </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Experience

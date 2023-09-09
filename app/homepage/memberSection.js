"use client"

import React, { useEffect, useRef } from 'react';
import MembersCard from '../components/membersCard';
import {members_one , members_two} from "@/app/lib/memberDetails";
import { motion, useInView, useAnimation } from 'framer-motion';
import Heading from '../components/Heading';

const Members = () => {
    //to use when in view.    
    // const ref = useRef(null);
    // const isInView = useInView(ref, {once:true});

    // const mainControl = useAnimation();

    // useEffect(() => {
    //     if (isInView) {
    //         mainControl.start("show");
    //     } else {
    //         console.log('not in view');
    //     }
    // },[isInView])


    //click on View All
    const handleAll = () => {
        console.log('View All clicked!');
    }

    return (
        <div className=' max-w-screen'>
            
            <Heading background="members" main="Members" />

            <div className='pt-4 px-6 mt-[150px] flex flex-col w-full gap-[50px] justify-center items-center'>
                <div className='flex flex-wrap gap-20 justify-center '>
                    {members_one.map((member, index) => (
                        <MembersCard key={`member-${index}`} index={1} member={member} />
                    ))}
                </div>
                <div className='flex flex-wrap gap-20 justify-center '>
                    {members_two.map((member, index) => (
                        <MembersCard key={`member-${index}`} index={2} member={member} />
                    ))}
                </div>
                <div>
                    <motion.button
                        onClick={handleAll}
                        className='w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-2 transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0'>
                        View All
                    </motion.button>
                </div>
            </div>
            
        </div>
    )
}

export default Members;
// #142e8a
// #1341EC
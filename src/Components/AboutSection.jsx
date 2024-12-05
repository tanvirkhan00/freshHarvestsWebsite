import React from 'react';

// Image 
import Image from "../assets/about.png"



const AboutSection = () => {
    return (
        <>

            <section>
                <div className="container mt-[112px] pl-[92px] pr-[133px]">
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='w-[650px]'>
                            <img className='w-[686px] h-[574px]' src={Image} alt="" />
                        </div>
                        <div className='basis-[40%] flex flex-col gap-[16px]'>
                            <h3 className='text-[20px] font-medium text-green-600 bg-green-500 bg-opacity-15 rounded-[8px] px-[12px] py-[4px] max-w-fit'>About us</h3>
                            <h2 className='font-medium text-[48px] '>About Fresh Harvest</h2>
                            <p className='text-[14px] '>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                            <button className='border-2 border-[#FF6A1A] rounded-[8px] py-[16px] px-[32px] text-[#FF6A1A] text-[18px] font-semibold max-w-fit mt-[32px]'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutSection;
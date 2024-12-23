import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/Carousel.jsx';
import MultipleItemCarousel from '../carousel/MultipleItemCarousel.jsx';

export default function Home() {
    return (
        <div className="mx-auto bg-[#e5f4e6]">
            <div className='px-1'>
                <Carousel/>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl p-4'>Hero products</h1>
                <MultipleItemCarousel/>
            </div>

            <div className='mt-5'>
                <h1 className='text-2xl p-4'>Shop By Category</h1>
                <li className='flex flex-row gap-44 justify-center pb-5 pt-2'>
                    <ul><img className='w-40 h-36 border-black rounded-full text-center font-extrabold hover:blur-sm' src="/category_1.jpg" alt="" /></ul>
                    <ul><img className='w-40 h-36 border-black rounded-full hover:blur-sm' src="/category_2.jpg" alt="" /></ul>
                    <ul><img className='w-40 h-36 border-black rounded-full hover:blur-sm' src="/category_3.jpg" alt="" /></ul>
                    <ul><img className='w-40 h-36 border-black rounded-full hover:blur-sm' src="/category_4.jpg" alt="" /></ul>
                </li>
            </div>

            <div className='bg-yellow-200 w-full mt-2'>
                <h1 className='text-center text-lg font-medium p-5'>
                    <span className='font-extrabold text-lg text-green-800'>Herbal | Rewards   </span> 
                    Extra Savings, Free Order & More
                </h1>
            </div>
        
        </div>
    );
}

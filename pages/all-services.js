import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "Painting",
        id: 3,
        Image: "/painting/p7.jpeg",
        link : "/painting-services"
    },
    {
        title: "Decking services",
        id: 1,
        Image: "/painting/pd1.jpeg",
         link : "/decking-services"
    },
    {
        title: "Bathroom Remodeling",
        id: 2,
        Image: "/painting/bathroom.jpg",
         link : "/bathroom-remodeling"
    },
   
  
    {
        title: "Kitchen Remodeling",
        id: 5,
        Image: "/painting/k11.jpg",
         link : "/"
    }
  
];

function ServicesList() {
    return (
        <div className='mt-5 px-[2rem] md:px-[6rem]'>
            <h2 className='font-bold text-[22px]'>All Services </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div  key={business.id} className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[260px] md:h-[350px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-1 px-1 ring-1 ring-white/10">
                                    <Link
                                        href={business.link}
                                        className="text-center mx-auto"
                                    >
                                        Learn More
                                    </Link>
                                    <svg
                                        fill="none"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.75 8.75L14.25 12L10.75 15.25"
                                            stroke="orange"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>
                        </div>
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div  key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[3rem] md:px-[6rem]'>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'>Home Remodels and Bathroom Remodels</h3>
                <p className='text-[17px] leading-7'> A total renovation of your home is a big step. But if well done, it can mean incredible satisfaction for the homeowner and a huge jump in value for the house. This often involves adding several new rooms. A whole house renovation can even extend into the existing space to reconfigure rooms and improve storage and accessibility. It can give your old house a new look and feel that is consistent and reflective of your personal style

                    <br /><br />These are the two rooms that can increase the value of your house the most when you renovate. And &apos;s face it, you spend a lot of time in them, so why not make them more organized, efficient and attractive?
                    <br />
                    <br />
                    For example, you can expand the footprint of your bathroom to add a vanity with two sinks, or open up a wall between the kitchen and dining room for a more modern “Great Room” feel. The options for kitchen renovations and bathroom makeovers are almost endless. That&apos;s why it&apos;s best to work with a professional remodeler who can listen to your needs, offer options based on your budget, and give you the results that meet the highest standards in the industry.
                </p>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7'>Create a Home Office</h3>
                <p className='text-[17px]'>Whether you work from home, run a business, or just need a dedicated space to pay bills, a home office can be a great productivity booster. Our remodeling contractors can help you convert an unused room or even create a new room by adding or removing walls.

                    Add a Utility Room or Mudroom
                </p>


            </div>


        </div>
    );
}

export default ServicesList;
import Image from "next/image";
import Link from "next/link";
import Base from "@layouts/Baseof";
import NewForm from "../layouts/components/Form";
import KitchenRemodeling from "../public/images/kitt1.png";
import Header from "@layouts/partials/Header";
import KitchenRImage from "../public/images/kitchen5.jpg"
import backgroundImage from "../public/images/kitt1.png"
import Footer from "@layouts/partials/Footer";
import Head from "next/head";
import Navbar from "@layouts/components/Navbar";

export default function CounterTopPage() {

    return (
        <div className="relative h-screen bg-white">
             <Head>
        <title>Modern Kitchen - Counter Top refacing</title>
        <meta
          name="description"
          content="We are the best at Countetop foa all your kitchen needs"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" type="image/svg" sizes="32x32" href="/assets/v2.svg" />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        
                <Navbar/>
            <div>
                <div className="relative h-[100vh] md:h-[80vh] w-full ">
                    <Image quality={100} src={KitchenRemodeling} className="brightness-50 md:h-[80vh] h-full w-full object-cover" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8"
                    >


                        <div className="px-[2rem] pt-[16rem] md:mt-[8rem]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-[7rem] md:pl-[3rem] md:h-[680px]">
                                <div>
                                    <h1 className="text-2xl md:text-5xl pt-[1rem] md:pt-[3rem] leading-9 text-slate-100 font-extrabold">
                                        GET 15% OFF FOR YOUR
                                    </h1>
                                    <p className="text-xl md:text-3xl pt-3 py-6  text-slate-200 font-bold">
                                        KITCHEN  COUNTERTOP
                                    </p>
                                    <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem]  md:ml-[-4rem]">
                                        <button className="bg-orange-500 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                            </span>
                                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-600 py-4 px-1 ring-1 ring-white/10">
                                                <Link
                                                    href=""
                                                    className="text-center mx-auto"
                                                >
                                                    FREE IN-HOME ESTIMATE
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
                                <div>
                                    <div className="container mx-auto md:h-[500px]">
                                        <NewForm />
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>












            {/*  section 2 */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem] px-[2rem] md:px-[6rem] mt-[10rem]">

                <div>
                    <h3 className="">
                    Beautiful New Countertops To Make Your Kitchen Standout
                    </h3>
                    <p className="text-[16px] leading-8 md:text-[17px] pt-6">
                    One of the best ways to revitalize your kitchen is the installation of a beautiful new countertop.
<br/>
Countertops have a large impact on the practical function and design element of your kitchen. A well-chosen countertop makes your kitchen more useful and easier to maintain while also going a long way in defining a  aesthetic.
<br/><br/>
Quartz and granite are highly sought after as they are more durable, less susceptible to scratching, and are available in many different colors and styles.
                    </p>


                    <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem] ml-[-1rem] md:ml-[-4rem]">
                        <button className="bg-green-500 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-600 py-4 px-1 ring-1 ring-white/10">
                                <Link
                                    href=""
                                    className="text-center mx-auto"
                                >
                                    FREE IN-HOME ESTIMATE
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


                <div className="relative h-full md:h-[60vh] w-full">
                    <Image src={KitchenRImage} alt="kitchen-remodeling-picture" />
                </div>

            </div>




            {/* third section */}

            <div className="my-3  md:px-[6rem] mt-7 md:mt-[5rem]">
                <h3 className="text-center">Quartz Countertop Options</h3>
                <ul className="text-center pt-8">
                    <li>DURAQUARTZ COUNTERTOPS</li>
                    <li>QUARTZITE COUNTERTOPS</li>
                    <li>CAMBRIA QUARTZ COUNTERTOPS</li>
                  
                </ul>


                <div className="flex flex-row gap-3 md:gap-[4rem]  md:px-[6rem] mt-[4rem]">

                    <div className="relative h-full w-full md:h-[60vh] w-full pl-2">
                        <Image src={KitchenRImage} alt="kitchen-remodeling-picture" />
                    </div>



                    <div className="w-full">
                        <h3 className="text-[19px] font-bold">For All Your Kitchen Countertop Needs </h3>
                        <p className="text-[16px] leading-8 md:text-[17px] pt-6">Our team of skilled professionals is dedicated to delivering the highest quality craftsmanship and exceptional customer service.
<br/>
With a wide range of materials and styles to choose from, we can help you find the perfect countertop that suits your taste and lifestyle. Whether you prefer the timeless elegance of granite or the sleek look of quartz, we have options that will exceed your expectations.
<br/><br/>
Trust us to handle every step of the process, from initial design consultation to final installation, ensuring a seamless and stress-free experience.</p>
                        
                        <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem] ml-[-1rem] md:ml-[-4rem]">
                        <button className="bg-green-500 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-600 py-4 px-1 ring-1 ring-white/10">
                                <Link
                                    href=""
                                    className="text-center mx-auto"
                                >
                                    FREE IN-HOME ESTIMATE
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
                </div>

            </div>









            {/*fonth Section*/}


            <div className="relative mt-9 py-[3rem] md:mt-[15rem] w-full bg-black flex flex-col justify-center items-center py-5 md:px-[6rem] px-[2rem]">

                <div>
                    <h3 className="text-center text-white text-[18px] md:text-[24px] ">Designing The Perfect Layout</h3>
                    <p className="text-[16px] text-white leading-8 md:text-[19x] pt-6 md:px-[4rem]">
                        Whether you&apos;re dreaming of a spacious open-concept kitchen or a compact
                        and efficient design, finding the right layout is essential to creating a
                        space that suits your needs and enhances your daily life.
                        <br />
                        Our team of design experts is here to help you navigate the
                        countless options and find the ideal layout for your kitchen. With their expertise and creativity, they will work closely with you to
                        understand your preferences and requirements, .
                        <strong> ensuring that every detail is tailored to your unique vision</strong> .
                    </p>
                    <div className="flex flex-col justify-center items-center mt-6 px-4 md:px-[4rem]  mx-auto">
                        <button className="bg-green-500 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-600 py-4 px-1 ring-1 ring-white/10">
                                <Link
                                    href=""
                                    className="text-center mx-auto"
                                >
                                    FREE IN-HOME ESTIMATE
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
            </div>
{/*  Onother section*/}
<div className="px-[2rem] md:px-[6rem] py-[4rem]">
<h3 className="text-center ">Benefits of Refacing Kitchen Cabinets</h3>
                <p className="text-[16px] leading-8 md:text-[17px] py-8 md:px-[4rem] px-[2rem]">
                Cabinet refacing is indeed a wonderful choice for homeowners who are considering a full kitchen renovation but wish to avoid the stress that comes with it. If you&apos;re fond of your kitchen&apos;s current layout or wish to retain your countertops, cabinet refacing provides a fantastic opportunity to refresh your cabinets without the time or   <strong>financial commitment required for a bespoke kitchen remodel.</strong> .
                </p>
            <h3 className="text-center py-5">Benefits of Refacing Kitchen Cabinets</h3>
                <p className="text-[16px] leading-8 md:text-[17px] pt-6 md:px-[4rem] px-[2rem]">
                At Modern Kitchen, we offer more than just a swift custom cabinet
                 installation to residents. Our commitment is to deliver reliable, high-quality service that homeowners can depend on for many years. This involves taking the time to walk you through all available options, explaining the pros and cons of each, and assisting you in selecting the design and custom kitchen cabinetry that suits you best.  <strong>Modern Kitchen is proud to present our exclusive 10-Year Platinum Warranty, the finest in the industry.</strong> .
                </p>

</div>
           
            <Footer />

        </div>
    )
}

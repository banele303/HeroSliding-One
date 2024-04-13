import Image from "next/image";
import Link from "next/link";
import config from "@config/config.json";
import NewForm from "../layouts/components/Form";
import KitchenRemodeling from "../public/images/kitchen-hero3.jpg";
import Header from "@layouts/partials/Header";
import KitchenRImage from "../public/images/kitchen-hero2.jpg"
import backgroundImage from "../public/images/kitt1.png"
import Footer from "@layouts/partials/Footer";
import Base from "@layouts/Baseof";
import Head from "next/head";
import Navbar from "@layouts/components/Navbar";


export default function CabinetRefacingPage({ frontmatter }) {
   
    const { title } = config.site;
  
    return (
       
        <div className="relative h-screen bg-white">
                 <Head>
        <title>Modern Kitchen - Cabinets</title>
        <meta
          name="description"
          content="We are the best at Cabinets for all your kitchen needs"
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
                <div className="relative h-[100vh] md:h-[70vh] w-full ">
                    <Image quality={100} src={KitchenRemodeling} className="brightness-50 md:h-[70vh] h-full w-full object-cover" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8"
                    >


                        <div className="px-[2rem] pt-[17rem]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-[7rem] md:pl-[3rem] md:h-[680px]">
                                <div>
                                    <h1 className="text-2xl md:text-5xl pt-[1rem] md:pt-[3rem] leading-9 text-slate-100 font-extrabold">
                                        GET 15% OFF FOR YOUR
                                    </h1>
                                    <p className="text-xl md:text-3xl pt-3 py-6  text-slate-300 font-bold">
                                        KITCHEN  REFACING & REPLACING
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
                        Let Our Kitchen Refacing Experts Transform Your Kitchen
                    </h3>
                    <p className="text-[16px] leading-8 md:text-[17px] pt-6">
                        Since 1987 we have specialized in kitchen remodeling using only the highest quality products and services to give you the overall best value.
                        <br />
                        We have been Voted the #1 Best Kitchen Remodeling Company, not just because of our high-quality workmanship, but also because we LOVE what we do and it shows in every remodeling project we complete.
                        <br /><br />
                        We have established ourselves as the go-to source for everything to complete your kitchen remodeling project - everything from custom cabinetry to electrical, plumbing, drywall, appliances, and flooring.
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
                <h3 className="text-center"> Kitchen Cabinet Refacing Service</h3>
                <p className="text-[16px] leading-8 md:text-[17px] pt-6 md:px-[4rem] px-[2rem]">
                    We pride ourselves with quality in all types of cabinets

                    We give our clients a wide range of choices when it comes to designs

                    We welcome and encourage personalized designs from our clients, <strong> bring your dream kitchen to life</strong> .
                </p>
                <h3 className="text-center">Don&apos;t Need To Renovate</h3>
                <p className="text-[16px] leading-8 md:text-[17px] pt-6 md:px-[4rem] px-[2rem]">
                    Cabinet refacing is a cost-effective method to refresh your kitchen cabinets without the need for a full-scale remodel. It involves the simple process of replacing old doors and drawer fronts with new ones, chosen from a broad range of designs, materials, and colors. Additionally, new panels, hinges, and specially crafted moldings are added. <strong>The transformation that cabinet refacing can bring to a room is truly remarkable!</strong> .
                </p>
                <h3 className="text-center px-[2rem] pt-4">Is Cabinet Refacing Service Right for You?</h3>
                <p className="text-[16px] leading-8 md:text-[17px] pt-6 md:px-[4rem] px-[2rem]">
                Cabinet Refacing is a great option for some homeowners who think they want a complete kitchen remodel in Southern California, but don&apos;t want a lot of the headache associated with the process. If you like the layout of your kitchen or want to keep your countertops, cabinet refacing is an excellent way to update your kitchen without having to spend the time or money it takes to do a custom kitchen remodel.

If you prefer a maintenance-free appearance, synthetic doors like laminate are ideal. Laminate is a non-porous, durable material. These doors come in solid colors, including white, almond, and cream—ideal choices for homeowners who desire the ever-popular white kitchen.  <strong>laminate is by far one of the easiest materials to keep clean.</strong> .
                </p>


                <div className="flex flex-row gap-3 md:gap-[4rem]  md:px-[6rem] mt-[4rem]">

                    <div className="relative h-full w-full md:h-[60vh] w-full pl-2">
                        <Image src={KitchenRImage} alt="kitchen-remodeling-picture" />
                    </div>



                    <div className="w-full">
                        <ul className="list-none px-4 text-blue-500 text-[16px] font-semibold">
                            <li>
                                - New kitchen countertops
                            </li>
                            <li> - Under cabinet LED lighting or exposed lighting
                            </li>
                            <li> - Unique backsplashes
                            </li>
                            <li> - Sinks & Faucets
                            </li>
                            <li> - Sinks & Faucets
                                Range Hoods
                            </li>
                            <li> - Kitchen cabinet accessories
                            </li>
                            <li> - Cabinet modifications</li>
                        </ul>
                        
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

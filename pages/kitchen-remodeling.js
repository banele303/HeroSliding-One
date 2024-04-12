import Image from "next/image";
import Link from "next/link";
import NewForm from "../layouts/components/Form";
import KitchenRemodeling from "../public/images/remodeling-hero.jpg";
import Header from "@layouts/partials/Header";
import KitchenRImage from "../public/images/kit3.png"
import backgroundImage from "../public/images/kitt1.png"
import Footer from "@layouts/partials/Footer";
export default function KitchenRemodelingPage() {

    return (
        <div className="relative h-screen">
            <div className="pb-6">
                <Header /></div>
            <div>
                <div className="relative h-[100vh] md:h-[70vh] w-full ">
                    <Image quality={100} src={KitchenRemodeling} className="brightness-10 md:h-[60vh] h-full w-full object-cover" />
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8"
                    >


                        <div className="px-[2rem] pt-[4rem]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 md:pt-[7rem] md:pl-[3rem] md:h-[680px]">
                                <div>
                                    <h1 className="text-2xl md:text-4xl pt-[1rem] md:pt-[3rem] leading-9 text-blue-600 font-extrabold">
                                        GET 15 % OFF For YOUR
                                    </h1>
                                    <p className="text-xl md:text-3xl pt-3 py-6  text-slate-900 font-bold">
                                        KITCHEN REMODELING | REFACING & REPLACING
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
                                                    REQUEST SERVICE
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
                        Let Our Kitchen Remodeling Experts Transform Your Kitchen
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
                <h3 className="text-center">Kitchen Remodeling Services</h3>
                <p className="text-[16px] leading-8 md:text-[17px] pt-6 md:px-[4rem] px-[2rem]">
                    When remodeling your kitchen, the options are endless. Are you
                    looking to completely renovate your space with brand new cabinets,
                    countertops, and appliances? OR do you want to do a quick refresh and
                    update your current cabinetry and repaint your walls? Whether you want
                    to change your space with all new materials or simply revive what you already have,
                    we offer design solutions to <strong> bring your dream kitchen to life</strong> .
                </p>


                <div className="flex flex-row gap-3 md:gap-[4rem]  md:px-[6rem] mt-[4rem]">

                    <div className="relative h-full w-full md:h-[60vh] w-full pl-2">
                        <Image src={KitchenRImage} alt="kitchen-remodeling-picture" />
                    </div>



                    <div className="w-1/3">
                        <ul className="list-none px-4 text-blue-500 text-[16px] font-semibold">
                            <li>
                                Cabinets
                            </li>
                            <li>Islands
                                Countertops
                            </li>
                            <li>Backsplashes
                                Tile
                            </li>
                            <li>Lighting
                            </li>
                            <li>Sinks & Faucets
                                Range Hoods
                            </li>
                            <li>Flooring
                            </li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                </div>

            </div>









            {/*fonth Section*/}


            <div className="relative mt-9 py-[3rem] md:mt-[15rem] w-full bg-black flex flex-col justify-center items-center py-5 md:px-[6rem] px-[2rem]">

                <div>
                    <h3 className="text-center text-white text-[18px] md:text-[24px] ">Designing The Perfect Layout</h3>
                    <p className="text-[16px] text-white leading-8 md:text-[19x] pt-6 md:px-[4rem]">
                        Whether you're dreaming of a spacious open-concept kitchen or a compact
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




<Footer/>

        </div>
    )
}

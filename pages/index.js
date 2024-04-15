import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import Footer from "@layouts/partials/Footer";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import HomeHero from "@layouts/components/home-hero";
import Navbar from "@layouts/components/Navbar";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <div>
      {/* Banner */}
<Navbar/>
      <HomeHero />


      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel md:mt-[6rem] ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={400} height={300} className="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"
                    }`}
                >
                  <h2 className="font-bold text-[22px] leading-[40px]">{service?.title}</h2>
                  <p className="mt-4 leading-8 text-[16px] mb-2">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <div className="w-full px-[2rem] md:px-[6rem] flex flex-col items-center">
        <h3 className="text-[19px] font-bold">For All Your Kitchen Countertop Needs </h3>
        <p className="text-[16px] leading-8 md:text-[17px] pt-6 ">Our team of skilled professionals is dedicated to delivering the highest quality craftsmanship and exceptional customer service.
          <br />
          With a wide range of materials and styles to choose from, we can help you find the perfect countertop that suits your taste and lifestyle. Whether you prefer the timeless elegance of granite or the sleek look of quartz, we have options that will exceed your expectations.
          <br /><br />
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
      <div className="px-[2rem] md:px-[6rem] py-[4rem]">
        <h3 className="text-center ">Benefits of Refacing Kitchen Cabinets</h3>
        <p className="text-[16px] leading-8 md:text-[17px] py-8 ">
          Cabinet refacing is indeed a wonderful choice for homeowners who are considering a full kitchen renovation but wish to avoid the stress that comes with it. If you&apos;re fond of your kitchen&apos;s current layout or wish to retain your countertops, cabinet refacing provides a fantastic opportunity to refresh your cabinets without the time or   <strong>financial commitment required for a bespoke kitchen remodel.</strong> .
        </p>
        <h3 className="text-center py-5">Benefits of Refacing Kitchen Cabinets</h3>
        <p className="text-[16px] leading-8 md:text-[17px] pt-6 ">
          At Modern Kitchen, we offer more than just a swift custom cabinet
          installation to residents. Our commitment is to deliver reliable, high-quality service that homeowners can depend on for many years. This involves taking the time to walk you through all available options, explaining the pros and cons of each, and assisting you in selecting the design and custom kitchen cabinetry that suits you best.  <strong>Modern Kitchen is proud to present our exclusive 10-Year Platinum Warranty, the finest in the industry.</strong> .
        </p>

      </div>

      {/* Cta */}
      <Cta cta={call_to_action} />
    </div>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;

import Image from "next/image";
import Link from "next/link";



export default function AboutUS() {
  const phoneNumber = '+27 83 300 0705';

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-[3rem] px-[2rem] md:px-[6rem] mt-[-14rem] md:mt-2">
         
        <section>
          { /* Owner Info */}

          <h3 className="text-[18px] font-bold py-4 md:text-[23px]">Transparency, Quality & Reliable Services!</h3>
          <p className="text-[16px] md:text-[17px] leading-8">We want to be the best home remodeling company in the
             industry. We are known for our quality craft and exceptional 
             customer service. We always put the customer first and work hard to ensure they are happy with the results. We want to help people achieve their dreams of a beautiful home that perfectly reflects their personality and style. We are committed to excellence in everything we do 
            and will continue raising the bar in the home remodeling industry</p>
          </section>
        <section>

          
          { /* Owner Image */}
          </section>
    </div>
  )
}
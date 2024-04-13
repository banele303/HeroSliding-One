"use client"
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
export default function NewForm() {




    return (
        <form className='bg-black md:mt-[-2rem] py-[2rem] px-5 w-full md:max-w-[300px] rounded-md' >
            <h3 className='text-white text-[18px] md:text-[18px] text-center'>GET 15% OFF YOUR</h3>
            <h3 className='text-blue-600 text-[16px] py-3  md:text-[15px]'>KITCHEN REFACING & REPLACING!</h3>

            <label className="input mt-3  flex items-center gap-2">
                <input type="text" id="Name" className="grow border-none" name="firstName" placeholder="Full Name"
                />

            </label>
            <label className="input my-6 input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>


                <input type="tel" className="grow border-none" name="number" placeholder="Phone Number" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" className="grow border-none" name="email" placeholder="Email" />
                <ValidationError
                    prefix="Email"
                    field="email"

                />
            </label>
            <textarea
                className='input h-[6rem] my-5 w-full input-bordered border-none flex items-center gap-2'
                id="message"
                rows={3}
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"

            />
            <button type="submit"

                className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            ><Link href="/thanks">  Submit</Link>

            </button>

        </form>
    );
}
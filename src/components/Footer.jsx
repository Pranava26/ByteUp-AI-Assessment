import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='bg-gray-50'>
            <div className="flex flex-col gap-12 lg:flex-row lg:justify-evenly p-16 border-b-2 border-black">
                <div>
                    <Link className="font-semibold text-2xl" href='/' >InsightHub</Link>
                    <p className="italic text-sm">Empowering Knowledge and Connections</p>
                    <div className='text-sm mt-2'>
                        <p>6-5-1, Bangalore, Karnataka, 60004</p>
                        <p>Mail: insightshub.in@gmail.com</p>
                        <p>Phone: 1122334455</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-xl">Quick Links</h1>
                    <div className="flex flex-col gap-3 mt-2">
                        <Link className="hover:text-gray-700 hover:underline text-sm" href='/services'>Services</Link>
                        <Link className="hover:text-gray-700 hover:underline text-sm" href='/about'>About</Link>
                        <Link className="hover:text-gray-700 hover:underline text-sm" href='/contact-us'>Contact Us</Link>
                        <Link className="hover:text-gray-700 hover:underline text-sm" href='api-data'>API Data</Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-xl">Follow Us</h1>
                    <div className="flex gap-6 items-center mt-4">
                        <Link href='#' className='bg-gray-100 border p-2 rounded-full' ><Facebook /></Link>
                        <Link href='#' className='bg-gray-100 border p-2 rounded-full' ><Linkedin /></Link>
                        <Link href='#' className='bg-gray-100 border p-2 rounded-full' ><Twitter /></Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center my-1'>© 2024 InsightHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

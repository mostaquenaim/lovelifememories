import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiTwotoneHeart } from 'react-icons/ai';
import Link from 'next/link';
import SocialLinks from '../Socials/SocialLinks';
import SocialLinks2 from '../Socials/SocialLinks2';
import Image from 'next/image';
import { FaMapLocation } from 'react-icons/fa6';

const Footer = () => {
    const phoneNumber = '+8801720087583';
    const email = "lovelifememoriesbd@gmail.com"
    const LoveLifeFooter = <>
        <Image
            width={150}
            height={50}
            src="/LLM-White-logo.png"
            alt=""
            // className="h-14"
        />
        {/* <p className='text-lg'>LoveLife Memories Ltd.</p> */}
        <p className='text-lg italic font-bold'>Make Your Memories Last Forever</p>
        <p className=''>Mastering Candid, Glamorous & Photojournalistic Moments.</p>
    </>
    return (
        <footer className="
        footer p-10 bg-neutral 
          text-base-100 flex flex-col 
        lg:flex-row justify-between items-center lg:items-start lg:h-64">
            {/* lovelife  */}
            <div className='lg:hidden flex flex-col 
            items-center text-center justify-center'>
                {LoveLifeFooter}
            </div>
            {/* contact  */}
            <div className='flex flex-col items-center lg:items-start'>
                    <header className="footer-title text-base-100 text-lg">
                        Contact
                    </header>
                    <div className="flex gap-3">
                        <FaMapLocation />
                        2nd Floor, 2-G/8, Maa House, Golden Street ,<br />
                        Ring Road, Shyamoli, Dhaka-1207,
                        <br />Dhaka, Bangladesh
                    </div>
                    <Link href={`tel:${phoneNumber}`} className="flex gap-3">
                        <BsTelephone></BsTelephone>
                        {phoneNumber}
                    </Link>
                    <Link href={`mailto:${email}`} className="flex gap-3">
                        <AiOutlineMail></AiOutlineMail>
                        {email}
                    </Link>
                </div>
            {/* lovelife middle  */}
            <div className='hidden absolute lg:flex flex-col 
            items-center text-center justify-center mx-auto right-1/3 m-0 p-0'>
                {LoveLifeFooter}
                <div className='hidden lg:block text-center text-sm bg-neutral text-white text-opacity-60'>
                    <p>COPYRIGHT © 2023 LOVELIFE MEMORIES LTD.</p>
                    <p className=''>Made by <Link href='https://www.facebook.com/sammtech.co' target='_blank' rel="noreferrer">SammTech</Link> with <AiTwotoneHeart className='inline-block'></AiTwotoneHeart></p>
                </div>
            </div>
            {/* social medias  */}
            <div className='flex flex-col items-center'>
                <header className="footer-title text-base-100 text-lg">Our Socials</header>
                <div className="grid grid-flow-col gap-4">
                    <SocialLinks></SocialLinks>
                    <SocialLinks2></SocialLinks2>
                </div>
            </div>
            <div className='lg:hidden text-center text-sm opacity-60 mb-12'>
                <p>COPYRIGHT © 2023 LOVELIFE MEMORIES LTD.</p>
                <p className='w-full text-center'>Made by <a href='https://www.facebook.com/sammtech.co' target='_blank' rel="noreferrer">SammTech</a> with <AiTwotoneHeart className='inline-block'></AiTwotoneHeart></p>
            </div>
        </footer>
    );
};

export default Footer;
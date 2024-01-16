'use client'
import SocialLinks from "../Socials/SocialLinks";
import { GoSponsorTiers } from "react-icons/go";
import { useContext, useState } from "react";
import CustomDrawer from "./CustomDrawer";
import Link from "next/link";
import Spinner from "../Spinner/Spinner";
import { ProjectContext } from "@/app/context/Provider";
import Image from "next/image";

const NavBarComp = () => {

    const [loading, setLoading] = useState(false)

    const liClass = "text-black bg-white hover:bg-primary border-red-100 border-2"
    const parentLiClass = 'text-black bg-white rounded-lg relative group'
    const ulClass = 'ml-4 absolute z-50 top-3 lg:top-7 left-0 mt-2 hidden hover:block group-hover:block'

    const navLinks = <>
        <li><Link className={liClass} href='/'>Home</Link></li>
        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                About
            </button>
            <ul className={ulClass}>
                <li>
                    <Link className={liClass} href='/About/why-us'>
                        Why Us
                    </Link>
                </li>
                <li>
                    <Link className={liClass} href='/About/achievements'>
                        Achievements
                    </Link>
                </li>
                <li>
                    <Link className={liClass} href='/About/sister-concerns'>
                        Sister Concerns
                    </Link>
                </li>
            </ul>
        </li>

        <li><Link className={liClass} href='/packages'>Packages</Link></li>
        <li><Link className={liClass} href='/portfolio'>Portfolio</Link></li>

        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                Team
            </button>
            <ul className={ulClass}>
                {/* <li className="">
                    <Link className={liClass} href='/team/our-crew'>
                        Our Crew
                    </Link>
                </li> */}
                <li>
                    <Link className={liClass} href='/team/join-our-team'>
                        Join Our Team
                    </Link>
                </li>
                <li>
                    <Link className={liClass} href='/team/board-of-directors'>
                        Board of Directors (BOD)
                    </Link>
                </li>
            </ul>
        </li>

        <li><Link className='lg:hidden text-black bg-white hover:bg-primary' href='/join-as-investor'>Join as Investor</Link></li>
    </>
    const image = "/LLM-White-logo.png"


    return (
        <>
            <div className="text-center bg-neutral fixed w-full z-50">
                <div className="absolute top-0 left-0 m-5 gap-1 flex text-white  text-sm">
                    <Link href='/collaborate-as-a-partner' className="opacity-80 hover:opacity-90 text-xs">Collaborate as a Partner</Link> <span className="opacity-50">|</span>
                    <Link href='/referral-marketing' className="opacity-80 hover:opacity-90 text-xs">Referral Marketing</Link> <span className="opacity-50">|</span>
                    <Link href='/franchise' className="opacity-80 hover:opacity-90 text-xs">Franchise Available</Link>
                </div>
                <div className="mx-auto">
                    <Link className="hidden lg:inline-block bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl" href={'/'}>
                        <Image
                            width={200}
                            height={200}
                            src={image}
                            alt="logo"
                            className="h-16 mx-auto" />
                    </Link>

                </div>
                <div className="navbar bg-neutral fixed">
                    <div className="navbar-start">
                        {
                            loading ?
                                <Spinner></Spinner>
                                :
                                <CustomDrawer></CustomDrawer>
                        }
                        <div className="hidden group text-3xl lg:flex gap-3">
                        </div>
                    </div>
                    <div className="navbar-center ">
                        <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                        <Link className=" md:inline-block lg:hidden btn bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl" href={'/'}>
                            <Image
                                width={120}
                                height={120}
                                src={image}
                                alt="logo"
                                className="" />
                        </Link>
                    </div>
                    <div className="navbar-end md:text-3xl gap-3">
                        <SocialLinks />
                    </div>
                </div>
                <Link href='/join-as-investor' className="hidden absolute btn rounded-lg top-0 right-0 m-3 bg-neutral text-white border-white hover:bg-base-100 hover:text-black z-50 lg:flex gap-3">
                    <GoSponsorTiers className="text-lg"></GoSponsorTiers>
                    Join as an Investor
                </Link>
            </div>
        </>
    );
};

export default NavBarComp;
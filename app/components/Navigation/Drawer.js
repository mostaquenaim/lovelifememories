import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Drawer = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const liClass = "text-black bg-white hover:bg-primary border-red-100 border-2"
    const parentLiClass = 'text-black bg-white rounded-lg relative group'
    const ulClass = 'ml-4 absolute z-50 top-3 lg:top-7 left-0 mt-2 hidden hover:block group-hover:block'

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleLinkClick = () => {
        // Close the drawer when any link is clicked
        setDrawerOpen(false);
    };

    const links = <>
        <li><NavLink className={liClass} href='/'>Home</NavLink></li>
        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                About
            </button>
            <ul className={ulClass} onClick={handleLinkClick}>
                <li >
                    <NavLink className={liClass} href='/about/why-us'>
                        Why Us
                    </NavLink>
                </li>
                <li onClick={handleLinkClick}>
                    <NavLink className={liClass} href='/about/achievements'>
                        Achievements
                    </NavLink>
                </li>
                <li onClick={handleLinkClick}>
                    <NavLink className={liClass} href='/about/sister-concerns'>
                        Sister Concerns
                    </NavLink>
                </li>
            </ul>
        </li>

        <li><NavLink className={liClass} href='/packages'>Packages</NavLink></li>
        <li><NavLink className={liClass} href='/portfolio'>Portfolio</NavLink></li>

        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                Team
            </button>
            <ul className={ulClass} onClick={handleLinkClick}>
                {/* <li className="">
                    <NavLink className={liClass} href='/team/our-crew'>
                        Our Crew
                    </NavLink>
                </li> */}
                <li>
                    <NavLink className={liClass} href='/team/join-our-team'>
                        Join Our Team
                    </NavLink>
                </li>
                <li>
                    <NavLink className={liClass} href='/team/board-of-directors'>
                        Board of Directors (BOD)
                    </NavLink>
                </li>
            </ul>
        </li>

        <li onClick={handleLinkClick}><NavLink className='lg:hidden text-black bg-white hover:bg-primary' href='/join-as-investor'>Join as Investor</NavLink></li>
    </>

    return (
         <div>
            <div className={`drawer z-50 lg:hidden ${drawerOpen ? 'open' : ''}`}>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={toggleDrawer} />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="drawer-button text-white">
                        <AiOutlineMenu className='text-3xl'/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={handleLinkClick}></label>
                    <ul className={`menu p-4 w-80 min-h-full bg-base-200 text-base-content`} >
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
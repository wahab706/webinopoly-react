import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal.client';
import logo from '../../assets/logo.png';
import { RiFacebookBoxFill, RiTwitterFill, RiBehanceFill, RiPinterestFill, RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { MdArrowDropDown } from "react-icons/md"


export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    function desktopMenu() {
        return (
            <nav className="flex">
                <ul className="flex relative desktop-navbar md:mt-3 md:-mr-12 md:gap-4 lg:gap-4 xl:gap-6">
                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > home </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm ">
                        <Link to="/" >
                            <span className="flex group"> web services  <RiArrowDropDownLine size={20} />
                                <div className="absolute hidden group-hover:block rounded-b mt-5 bg-blue p-5 pr-10">
                                    <ul className="flex flex-col gap-2">
                                        <li>shopify experts </li>
                                        <li>bigcommerece</li>
                                        <li>web design</li>
                                        <li>ecommerece</li>
                                        <li>mobile apps</li>
                                        <li>animation</li>
                                        <li>seo</li>
                                    </ul>
                                </div>
                            </span>
                        </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > portfolio </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > case study </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > blog </Link>
                    </li>

                    <li className="md:text-xs  xl:text-sm">
                        <Link to="/" > contact us  </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    function mobileMenu() {
        return (
            <nav className="flex w-full mt-5 ">
                <ul className="flex flex-col relative mobile-navbar w-full" onClick={() => setToggle(false)}>
                    <li className="text-sm sm:text-base">
                        <Link to="/" >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                home
                            </span>
                        </Link>
                    </li>

                    <li className="">
                        <div className="flex flex-col gap-1">
                            <Link to="/" >
                                <span className='flex text-sm sm:text-base'>
                                    <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                    web services  <RiArrowDropDownLine size={20} />
                                </span>
                            </Link>
                            <div className="nav-sub-heading pl-6 mt-2">
                                <ul className="flex flex-col gap-1 text-sm">
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                shopify experts
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                bigcommerece
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                web design
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                ecommerece
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                mobile apps
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                animation
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={16} />
                                                seo
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>

                    <li className="text-sm sm:text-base">
                        <Link to="/" >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                portfolio
                            </span>
                        </Link>
                    </li>

                    <li className="text-sm sm:text-base">
                        <Link to="/" >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                case study
                            </span>
                        </Link>
                    </li>

                    <li className="text-sm sm:text-base">
                        <Link to="/" >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                blog
                            </span>
                        </Link>
                    </li>

                    <li className="text-sm sm:text-base">
                        <Link to="/" >
                            <span className='flex gap-1'> <MdArrowDropDown className='mobile-dropdwon-icon' size={18} />
                                contact us
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    function desktopIcons() {
        return (
            <div className="flex gap-0 header-icons" >
                <Link to="/" >
                    <RiFacebookBoxFill size={22} />
                </Link>

                <Link to="/" >
                    <RiTwitterFill size={22} />
                </Link>

                <Link to="/" >
                    <RiBehanceFill size={22} />
                </Link>

                <Link to="/" >
                    <RiPinterestFill size={22} />
                </Link>
            </div>
        );
    }

    function tabletIcons() {
        return (
            <div className="flex gap-0 header-icons" >
                <Link to="/" >
                    <RiFacebookBoxFill />
                </Link>

                <Link to="/" >
                    <RiTwitterFill />
                </Link>

                <Link to="/" >
                    <RiBehanceFill />
                </Link>

                <Link to="/" >
                    <RiPinterestFill />
                </Link>
            </div>
        );
    }


    return (
        <>

            {/* ---------------------------Desktop header------------------ */}

            <header
                role="banner"
                className="hidden md:flex flex-row justify-between items-center w-full
                z-40 top-0 leading-none gap-4 antialiased transition bg-blue fixed 
                md:flex-col
                md:py-5 md:pl-14 md:pr-40
                lg:py-7 lg:pb-5 lg:pl-12 lg:pr-28 
                xl:pl-24 xl:pr-40 
                "
            >
                <div className='forkit '>
                    <span onClick={() => setModalShow(true)}>
                        Request a Quote
                    </span>
                </div>
                <div className='flex justify-between items-center w-full'>

                    <div className="flex gap-12 md:w-48 lg:w-44 xl:w-48">
                        <Link className="font-bold" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className='sm:hidden lg:block'>
                        {desktopMenu()}
                    </div>

                    <div className="flex flex-col lg:-mt-6 sm:hidden md:block">
                        <div className='flex md-screen-hidden'>
                            {desktopIcons()}
                        </div>
                        <div className='md:flex lg:hidden'>
                            {tabletIcons()}
                        </div>
                        <div className="mt-2">
                            <p className="text-white md:text-xs xl:text-sm font-medium" >
                                CALL - (713) 805-5888
                            </p>
                        </div>

                    </div>
                </div>

                <div className='sm:hidden md:block lg:hidden'>
                    {desktopMenu()}
                </div>

            </header>




            {/* ---------------------------Mobile header------------------ */}

            <header
                role="banner"
                className='md:hidden flex w-full z-40 top-0 leading-none gap-4 antialiased transition bg-blue fixed
                py-5
                '
            >
                {toggle ? "" :
                    <div className='forkit '>
                        <span onClick={() => setModalShow(true)}>
                            Request a Quote
                        </span>
                    </div>}
                <div>
                    <button className='mini:left-6 xs:left-14 top-8 absolute '
                        onClick={() => setToggle(true)} >
                        <FaBars size={24} color={'white'} />
                    </button>

                    {toggle &&
                        <div className='absolute top-0 left-0 bg-blue w-full h-screen px-6 py-7 sm:px-10'>
                            <div className='flex justify-center'>
                                <button onClick={() => setToggle(false)}
                                    className='absolute top-0 left-0 px-6 pt-9 sm:px-14'>
                                    <ImCross size={20} color={'white'} />
                                </button>

                                <div className="flex w-40 sm:w-44">
                                    <Link className="font-semibold" to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            {mobileMenu()}
                        </div>
                    }
                </div>

                <div className='flex justify-center items-center w-full'>
                    <Link className="font-bold" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

            </header>

            {
                modalShow && 
                <Modal setModalShow={setModalShow} />
            }
        </>
    )
}


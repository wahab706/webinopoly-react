
import trustpilot from '../../assets/brand logos/trustpilot.png'
import google from '../../assets/brand logos/google.png'
import box1 from '../../assets/grid box/box1.webp'
import box2 from '../../assets/grid box/box2.webp'
import box3 from '../../assets/grid box/box3.webp'
import box4 from '../../assets/grid box/box4.webp'
import box5 from '../../assets/grid box/box5.webp'
import box6 from '../../assets/grid box/box6.webp'
import box7 from '../../assets/grid box/box7.webp'
import box8 from '../../assets/grid box/box8.webp'
import box9 from '../../assets/grid box/box9.webp'

export default function Reviews({ setModalShow }) {
    return (
        <>
            <section className=" flex flex-col justify-center mt-0 lg:pb-5">
                <h2 className="uppercase tracking-wider font-semibold font-MontSerif text-light-black text-center">
                    our reviews
                </h2>

                <section className="grid grid-flow-row mx-auto 
                mini:grid-cols-1 xs:grid-cols-2 md:gap-4 mini:gap-y-10 mt-10">

                    <a href="https://www.trustpilot.com/review/webinopoly.com " className='justify-between'>
                        <img src={trustpilot} alt="logo" className='w-auto h-18 mx-auto' />
                        <h2 className="mt-5 uppercase tracking-wider font-semibold font-MontSerif text-lighter-black text-center">
                            100+ 5-STAR TESTIMONIALS
                        </h2>
                    </a>

                    <a href=" https://www.google.com/search?q=webinopoly+review&oq=webinopoly+review&aqs=chrome..69i57j0j69i60l3.5495j0j1&sourceid=chrome&ie=UTF-8#lrd=0x8640ec9266c7f16d:0x1e1380633ccaf7e3,1,," className='justify-between'>
                        <img src={google} alt="logo" className='w-auto h-18 mx-auto' />
                        <h2 className="mt-5 uppercase tracking-wider font-semibold font-MontSerif text-lighter-black text-center">
                            180+ 5-STAR REVIEWS
                        </h2>
                    </a>

                </section>

            </section>

            <section className="grid reviews-main lg:py-5 px-8 md:px-10 lg:px-12 xl:px-16 mt-10 ">

                <section className="grid-box grid items-start grid-flow-row w-full grid-boxes
              xs-grid-col-1 sm:grid-cols-2 lg:grid-cols-3
                sm:gap-4 md:gap-6 lg:gap-8">

                    <section>
                        <a href=" https://www.puravidabracelets.com/" className="grid justify-center">
                            <img src={box1} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                PURAVIDA BRACELETS
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href=" https://shoppalomaandco.com/" className="grid justify-center">
                            <img src={box2} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                PALOMA AND CO
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href=" https://www.ghostlifestyle.com/" className="grid justify-center">
                            <img src={box3} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                GHOST LIFESTYLE
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href="https://www.polyandbark.com/ " className="grid justify-center">
                            <img src={box4} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                POLYANDBARK
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href=" https://www.fashionnova.com/" className="grid justify-center">
                            <img src={box5} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                FASHIONNOVA
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href="https://alphaleteathletics.com/ " className="grid justify-center">
                            <img src={box6} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                ALPHALETEATHLETICS
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href="https://buffy.co/ " className="grid justify-center">
                            <img src={box7} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                BUFFY
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href=" https://happyboxstore.com/" className="grid justify-center">
                            <img src={box8} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                HAPPY BOX STORE
                            </button>
                        </a>
                    </section>

                    <section>
                        <a href="https://oliversapparel.com/ " className="grid justify-center">
                            <img src={box9} alt="logo" />
                            <button className="mini:text-lg md:text-lg lg:text-xl">
                                OLIVERSAPPAREL
                            </button>
                        </a>
                    </section>
                </section>
                <button className="text-white text-sm bg-parrot uppercase justify-center w-56 mt-24 
                mx-auto rounded-md px-6 py-4 hover:text-black hover:delay-200 hover:ease-in-out"
                    onClick={() => setModalShow(true)}>
                    Request a free quote
                </button>
            </section>

        </>
    )
}


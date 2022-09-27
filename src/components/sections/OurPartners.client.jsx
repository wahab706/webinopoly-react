import partner1 from '../../assets/partner logos/partner1.png'
import partner2 from '../../assets/partner logos/partner2.png'
import partner3 from '../../assets/partner logos/partner3.png'
import partner4 from '../../assets/partner logos/partner4.png'
import partner5 from '../../assets/partner logos/partner5.png'
import partner6 from '../../assets/partner logos/partner6.png'
import partner7 from '../../assets/partner logos/partner7.png'
import partner8 from '../../assets/partner logos/partner8.png'
import partner9 from '../../assets/partner logos/partner9.png'
import partner10 from '../../assets/partner logos/partner10.png'

export default function KeyFeatures() {
    return (
        <>
            <section className="partners-section px-6 md:px-10 lg:px-14 py-10">
                <h1 className="capitalize text-3xl font-semibold text-center 
                text-semi-black">
                    Our Partners
                </h1>

                <p className='mt-4 text-base sm:text-lg md:text-xl font-medium text-center 
                text-light-black'>
                    We Partner with industry leaders to help our clients achieve massive success
                </p>

                <section className='partners-grid grid mx-auto mt-6 sm:mt-10 md:mt-14
                grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-12 '>

                    <div className="my-auto">
                        <img src={partner1} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner2} alt="logo" className='w-auto h-auto mx-auto ' />
                    </div>

                    <div className="my-auto">
                        <img src={partner3} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner4} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner5} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner6} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner7} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                    <div className="my-auto">
                        <img src={partner8} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>


                    <div className="my-auto">
                        <img src={partner9} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>


                    <div className="my-auto">
                        <img src={partner10} alt="logo" className='w-auto h-auto mx-auto' />
                    </div>

                </section>
            </section>


        </>
    )
}


import icon5 from '../../assets/icons/icon5.png'
import icon6 from '../../assets/icons/icon6.png'
import icon7 from '../../assets/icons/icon7.png'
import icon8 from '../../assets/icons/icon8.png'
import icon9 from '../../assets/icons/icon9.png'
import icon10 from '../../assets/icons/icon10.png'
import icon11 from '../../assets/icons/icon11.png'
import icon12 from '../../assets/icons/icon12.png'

export default function KeyFeatures() {
    return (
        <>
            <section className="features-section bg-half-white sm:px-6 md:px-8 lg:px-16 pt-18 pb-24">
                <h1 className="capitalize tracking-wider text-3xl font-semibold text-center 
                text-half-black-light">
                    Key Features Of Shopify Store
                </h1>

                <section className='features-grid grid grid-flow-row mx-auto 
                grid-cols-3 md:grid-cols-4 sm:gap-2 md:gap-3 lg:gap-4 sm:gap-y-10 mt-10 key-icons'>

                    <div className='p-4'>
                        <img src={icon5} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Unlimited Design Changes
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon6} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Wholesale/Retail Pricing
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon7} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Security
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon8} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Email Newsletter
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon9} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Ecommerce Analytics
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon10} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Live Chat
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon11} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Shopping Cart
                        </h2>
                    </div>

                    <div className='p-4'>
                        <img src={icon12} alt="logo" className='w-auto sm:h-16 md:h-18 mx-auto' />
                        <h2 className="sm:mt-8 md:mt-10 sm:text-lg md:text-xl font-medium">
                            Product Reviews
                        </h2>
                    </div>

                </section>
            </section>


        </>
    )
}



import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'

export default function IconsGrid() {
    return (
        <>
            <section className='grid grid-flow-row my-12 mx-auto 
         grid-cols-2 md:grid-cols-4 sm:gap-y-10 iconsGrid'>
                <a href=" https://webinopoly.com/pages/shopify-experts?__cf_chl_tk=aPSRf9m6CzPlxKcDju0vMzld1LEUNE7JC3Z0rKl8EyY-1664288070-0-gaNycGzNDdE#"
                    className=' py-5 hover:bg-lighter-pink'>
                    <img src={icon1} alt="logo" />
                    <h2 className="mt-6 capitalize text-lg font-medium font-MontSerif text-semi-black text-center">
                        Handcrafted Designs
                    </h2>
                </a>
                <a href="https://webinopoly.com/pages/shopify-experts?__cf_chl_tk=aPSRf9m6CzPlxKcDju0vMzld1LEUNE7JC3Z0rKl8EyY-1664288070-0-gaNycGzNDdE# "
                    className=' py-5 hover:bg-lighter-pink'>
                    <img src={icon2} alt="logo" />
                    <h2 className="mt-6 capitalize text-lg font-medium font-MontSerif text-semi-black text-center">
                        Quicker Turn Around
                    </h2>
                </a>
                <a href=" https://webinopoly.com/pages/shopify-experts?__cf_chl_tk=aPSRf9m6CzPlxKcDju0vMzld1LEUNE7JC3Z0rKl8EyY-1664288070-0-gaNycGzNDdE#"
                    className=' py-5 hover:bg-lighter-pink'>
                    <img src={icon3} alt="logo" />
                    <h2 className="mt-6 capitalize text-lg font-medium font-MontSerif text-semi-black text-center">
                        Faster Load Time
                    </h2>
                </a>
                <a href=" https://webinopoly.com/pages/shopify-experts?__cf_chl_tk=aPSRf9m6CzPlxKcDju0vMzld1LEUNE7JC3Z0rKl8EyY-1664288070-0-gaNycGzNDdE#"
                    className=' py-5 hover:bg-lighter-pink'>
                    <img src={icon4} alt="logo" />
                    <h2 className="mt-6 capitalize text-lg font-medium font-MontSerif text-semi-black text-center">
                        Responsive Designs
                    </h2>
                </a>

            </section>
        </>
    )
}


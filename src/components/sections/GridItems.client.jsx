import grid1 from '../../assets/grid items/grid1.webp'
import grid2 from '../../assets/grid items/grid2.webp'
import grid3 from '../../assets/grid items/grid3.webp'
import grid4 from '../../assets/grid items/grid4.webp'
import grid5 from '../../assets/grid items/grid5.webp'
import grid6 from '../../assets/grid items/grid6.webp'
import grid7 from '../../assets/grid items/grid7.webp'
import grid8 from '../../assets/grid items/grid8.webp'
import grid9 from '../../assets/grid items/grid9.webp'
import grid10 from '../../assets/grid items/grid10.webp'
import grid11 from '../../assets/grid items/grid11.webp'
import grid12 from '../../assets/grid items/grid12.webp'
import grid13 from '../../assets/grid items/grid13.webp'
import grid14 from '../../assets/grid items/grid14.webp'

export default function GridItems() {
    return (
        <>
            <section className="my-14">

                {/* ------------------Section Grid1 starts here----------------- */}

                <h1 className="gridItems-heading uppercase tracking-wider sm:text-3xl lg:text-4xl font-semibold 
                text-center text-semi-black mt-18 px-12">
                    #1 SHOPIFY EXPERTS, DESIGNERS & DEVELOPERS
                </h1>
                {/* grid grid-flow-row */}
                <section className=" gap-y-6 px-6 mt-8 gridItems1">

                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-1 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Shopify Store Set Up
                            </h1>
                            <p className="tracking-wider">
                                Shopify setups aim to produce a versatile and painless way to get up and running on the Shopify
                                ecommerce web site platform as quickly and inexpensively as possible. Webinopoly's engineers are
                                certified Shopify experts and are capable of setting up your store quickly & effectively.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7 p-5">
                            <img src={grid1} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-2 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Shopify Store Design & Development
                            </h1>
                            <p className="tracking-wider">
                                We can custom design your Shopify store to match your vision and brand. Webinopoly's Certified Shopify
                                Designers will handcraft and custom design mockups that fits your needs. We offer unlimited design
                                changes for free on our custom design packages. Our designers & engineers are committed to delivering
                                high quality, innovative and cost effective web development solutions.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7 p-5">
                            <img src={grid2} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-3 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Shopify Theme Development & Optimization
                            </h1>
                            <p className="tracking-wider">
                                We have the expertise and our work is driven by data and user experience research which allows us to enhance
                                the user experience and benefit all parties involved. We lay emphasis on enhancing the browsing experience
                                through ease of navigation, secured payment options, removing issues like website crashes, timeout and payment
                                declination.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7 p-5">
                            <img src={grid3} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-4 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Shopify App Development
                            </h1>
                            <p className="tracking-wider">
                                What is Shopify App Development? It is the development of an application used to connect your Shopify store
                                to an outside resource or process to accomplish a desired task. Sometimes creating an App is the only way to
                                achieve a desired goal or functionality. By developing a custom Shopify App, you can increase the functionality
                                of your Shopify store, connect to 3rd party systems like ERP or CRM systems, and much more. Custom Shopify App
                                Development can also be used to create automated features, or to integrate functions that may not yet be available
                                on Shopify. No matter how complex a problem may appear, many times a custom App is the perfect solution.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7 p-5">
                            <img src={grid4} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-5 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Website Migrations To Shopify
                            </h1>
                            <p className="tracking-wider">
                                Webinopoly's Developers are experts in migrating your website from any platform to Shopify, last year
                                alone we migrated over 100+ websites to Shopify & Shopify Plus. There are numerous reasons as to why
                                many businesses wish to migrate to Shopify since it has more to offer than a regular ecommerce platform
                                and is also packed with plenty of in-built features.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7 p-5">
                            <img src={grid5} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-6 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Third Party API Development
                            </h1>
                            <p className="tracking-wider">
                                We understand how to design and build robust, secure, and highly performing APIs, whether it’s a
                                client-facing API gateway, or MBaaS (Mobile-Backend-as-a-Service) interfaces for mobile applications,
                                we are experienced in helping our clients to develop APIs that are usable (and reusable) across a range
                                of different use cases. Our Shopify Expert Developers have great experience in building scalable APIs
                                for all kinds of businesses.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7 p-5">
                            <img src={grid6} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-7 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl">
                                Shopify SEO And Internet Marketing
                            </h1>
                            <p className="tracking-wider">
                                We specialize in Digital Commerce marketing and advanced ecommerce Analytics for ecommerce and Conversion
                                Rate Optimization services. Our search engine and conversion optimization is backed by a solid methodology,
                                built upon industry best practices, which help ensure you get more sales.
                            </p>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7 p-5">
                            <img src={grid7} alt="workType" />
                        </div>
                    </div>

                </section>







                {/* ------------------Section Grid2 starts here----------------- */}

                <h1 className="gridItems-heading uppercase tracking-wider sm:text-3xl lg:text-4xl font-semibold 
                text-center text-semi-black mt-20 px-12">
                    OUR SHOPIFY CUSTOM DESIGN PROCESS
                </h1>

                <section className=" gap-y-6 px-6 mt-10 gridItems2">

                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-1 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl">
                                Shopify Store Set Up
                            </h1>
                            <ul>
                                <li>We will custom design (handcraft) every single page on the website</li>
                                <li>You get UNLIMITED design changes for free</li>
                                <li>The design will be responsive & SEO Friendly</li>
                                <li>We will convert the design into a theme and allow you to control almost everything from the backend of Shopify</li>
                                <li>The new theme will be owned by you and you have the full rights for it</li>
                                <li>Setting up up sells, cross sells, email capture & call to actions</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7">
                            <img src={grid8} alt="workType" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-2 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl">
                                Data Migration
                            </h1>
                            <ul>
                                <li>We will migrate your products from your current platform to Shopify</li>
                                <li>Old customer data or order data will not migrate</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7">
                            <img src={grid9} alt="workType" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-3 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl">
                                Shopify Configurations
                            </h1>
                            <ul>
                                <li>Flat Rate Shipping, price based or weight based Shipping</li>
                                <li>Payment Gateway</li>
                                <li>Sales Tax</li>
                                <li>Define Shipping Origin Address</li>
                                <li>Define Box Type</li>
                                <li>Confirmation Emails</li>
                                <li>Setup Custom Domain Name</li>
                                <li>Setup Product Categories</li>
                                <li>Add Facebook Pixel</li>
                                <li>Add Google Analytics Code</li>
                                <li>Multi Currency / Language Set up</li>
                                <li>Multi Locations Set up</li>
                                <li>Installing and configuring Instagram, Wishlist, Mail-chimp & any app you require</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7">
                            <img src={grid10} alt="workType" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-4 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl" >
                                On Site SEO
                            </h1>
                            <ul>
                                <li>Define product title & description tags</li>
                                <li>Ensure home page has proper text to help with search engine optimization</li>
                                <li>submit site to all search engines</li>
                            </ul>

                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7">
                            <img src={grid11} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-5 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl">
                                Testing
                            </h1>
                            <ul>
                                <li>Run test transactions</li>
                                <li>Test Shipping Rates</li>
                                <li>Test Sales Tax Rates</li>
                                <li>Test Mobile Responsive</li>
                                <li>Test Navigation scheme</li>
                                <li>Test Browser compatibility</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7">
                            <img src={grid12} alt="workType" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-center">
                        <div className="grid-details grid-6 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl">
                                Training
                            </h1>
                            <ul>
                                <li>How to add/edit/delete products</li>
                                <li>How to manage & process an order</li>
                                <li>Go Live</li>
                                <li>Update DNS to point domain to Shopify Server</li>
                                <li>Test live sales transaction</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pl-7">
                            <img src={grid13} alt="workType" />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                        <div className="grid-details grid-7 justify-start my-auto basis-full md:basis-1/2">
                            <h1 className="tracking-wider text-2xl md:text-3xl lg:text-4xl" >
                                Support
                            </h1>
                            <ul>
                                <li>30 Days free support from the day we go live</li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-1/2 justify-center pr-7">
                            <img src={grid14} alt="workType" />
                        </div>
                    </div>

                </section>

            </section>
        </>
    )
}



import img1 from '../../assets/work types/img1.webp'
import img2 from '../../assets/work types/img2.webp'
import img3 from '../../assets/work types/img3.webp'
import img4 from '../../assets/work types/img4.webp'
import img5 from '../../assets/work types/img5.webp'

function WebTypeDesigns({ setModalShow }) {
    return (
        <section className="bg-half-white-light pt-20 px-4 md:px-6 lg:px-28 xl:px-32 webType-section">
            <section>
                <h1 className="webType-header capitalize text-3xl font-semibold text-center text-semi-black">
                    What Are The Types Of Web Designs?
                </h1>
                <p className="mt-4 text-sm md:text-base">
                    The purpose of different types of web design is to make the best use of the existing technologies
                    to create eye-catching websites, serving the very purpose of their conception.
                </p>
                <p className="mt-8 text-sm md:text-base">
                    Two of the different styles of web design available today are static and dynamic web design.
                    Today I will show you some creative web designs which are popular nowadays that you should know.
                    It's time to break any old habits and try out different types of web desing:
                </p>
            </section>
            <section className="mt-12 flex flex-col webtype-grids  bg-white">
                <div className=" flex flex-col md:flex-row w-full justify-center">
                    <div className="basis-full md:basis-1/2 my-2 p-0 md:p-3 lg:p-0">
                        <img src={img1} alt="workType" width='100%' height='auto' />
                    </div>
                    <div className=" basis-full md:basis-1/2 p-5 md:p-3 lg:p-8">
                        <h1 className="tracking-wide uppercase text-xl md:text-2xl font-semibold text-half-black mb-3 lg:mb-6">
                            1. ILLUSTRATIVE WEB DESIGN
                        </h1>
                        <p>
                            The illustration is an incredibly versatile tool that can find many different uses in
                            design. And when it comes to web design we can find an extremely wide variety of
                            implementations.
                        </p>
                        <p>
                            Illustrations and cartoon drawings can really bring web design to life. Drawing is a
                            creative activity by definition, and incorporating it into a website’s design is one of
                            the most creative methods of presenting information on the web. In 2016, illustration
                            has become a vital part of a web appearance by its enticing and fun little elements like
                            icons. Plus, the site will be more personal for users and connect users better.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                    <div className="basis-full md:basis-1/2 my-2 p-0 md:p-3 lg:p-0">
                        <img src={img2} alt="workType" width='100%' height='auto' />
                    </div>
                    <div className="basis-full md:basis-1/2 p-5 md:p-3 lg:p-8">
                        <h1 className="tracking-wide uppercase text-xl md:text-2xl font-semibold text-half-black mb-3 lg:mb-6">
                            2. MINIMALIST WEB DESIGN
                        </h1>
                        <p>
                            The purpose of minimalism is to expose the essence of a design by eliminating all
                            non-essential forms, features, and concepts. In web design, minimalism erases potential
                            distractions and strips away elements into their most basic forms.
                        </p>
                        <p>
                            It’s a style that continues to be trendy, being a reaction to the chaos and overflow of
                            information that’s inherent to the Internet. And if your portfolio’s sole purpose is to
                            showcase the best work you’ve ever created, the biggest favor you can do for yourself is
                            to simply get out of the way.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full justify-center">
                    <div className="basis-full md:basis-1/2 my-2 p-0 md:p-3 lg:p-0">
                        <img src={img3} alt="workType" width='100%' height='auto' />
                    </div>
                    <div className="basis-full md:basis-1/2 p-5 md:p-3 lg:p-8">
                        <h1 className="tracking-wide uppercase text-xl md:text-2xl font-semibold text-half-black mb-3 lg:mb-6">
                            3. TYPOGRAPHY WEB DESIGN
                        </h1>
                        <p>
                            First impressions are lasting impressions. Whether you realize it or not, your typography
                            helps to create an experience for users before they’ve even read a word or clicked a
                            button. Typography has the potential to go beyond merely telling a story — it shows the
                            user who is behind the website and what they’re about. The treatment of type creates an
                            atmosphere and elicits a response much the same way as tone of voice does.
                        </p>
                        <p>
                            As one of the core design principles, typography can really make or break a website design.
                            Despite recent advances in web type technology, we’re still fairly limited when it comes
                            to creative typography layouts, meaning image replacement techniques are still common,
                            but these days we have a massive choice when it comes to selecting fonts for our designs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse w-full justify-center">
                    <div className="basis-full md:basis-1/2 my-2 p-0 md:p-3 lg:p-0">
                        <img src={img4} alt="workType" width='100%' height='auto' />
                    </div>
                    <div className="basis-full md:basis-1/2 p-5 md:p-3 lg:p-8">
                        <h1 className="tracking-wide uppercase text-xl md:text-2xl font-semibold text-half-black mb-3 lg:mb-6">
                            4. SINGLE PAGE WEB DESIGN
                        </h1>
                        <p>
                            Single page web designs certainly aren’t a new trend. Its continuance suggests that
                            it’s more practical and effective than most. Like all trends, single page sites have
                            their advantages and shortcomings, but in a world where thousands of new websites are
                            created daily, a single page web design may be the best way to cater to the
                            ever-shortening human attention span.
                        </p>
                        <p>
                            It should be noted that the single page web design isn’t perfect for every purpose.
                            Having a refined purpose for your design, your content to fit a single page, and
                            creating an interesting layout are some of the most important focal points to make
                            your single page design meet its full potential.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row w-full justify-center">
                    <div className="basis-full md:basis-1/2 my-2 p-0 md:p-3 lg:p-0">
                        <img src={img5} alt="workType" width='100%' height='auto' />
                    </div>
                    <div className="basis-full md:basis-1/2 p-5 md:p-3 lg:p-8">
                        <h1 className="tracking-wide uppercase text-xl md:text-2xl font-semibold text-half-black mb-3 lg:mb-6">
                            5. FLAT WEB DESIGN
                        </h1>
                        <p>
                            Flat design is a minimalistic design approach that emphasizes usability. It features
                            clean, open space, crisp edges, bright colors, and two-dimensional/flat illustrations.
                        </p>
                        <p>
                            Microsoft was one of the first to apply this design style to its interface. Instead of
                            converting a real-life object, such as a calendar, into a tiny realistic illustration,
                            advocates of flat design identify apps with simple, icon-like images. Rather than
                            bringing aspects of real-life to an interface, this illustrates a clear separation
                            between technology and tactile objects.
                        </p>
                    </div>
                </div>

                <button className="tracking-wider text-white text-xs sm:text-sm font-semibold bg-parrot uppercase justify-center 
                w-44 sm:w-52 my-12 mx-auto rounded-md px-5 py-4 hover:bg-blue hover:delay-100 hover:ease-in-out"
                    onClick={() => setModalShow(true)} >
                    Request a quote
                </button>
            </section>
        </section>
    )
}

export default WebTypeDesigns

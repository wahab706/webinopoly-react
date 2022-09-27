function ContactForm({ toggle }) {

    const styles = {
        smallInput: 'h-9 sm:h-12 md:h-16 px-4 md:px-6 text-sm sm:text-base md:text-lg',
        largeInput: 'h-24 px-4 md:px-6 text-sm sm:text-base md:text-lg',
    };

    return (
        <>
            <section className={toggle ? 'bg-dark-blue contactForm-section mt-2 sm:px-14 py-10 sm:py-12 md:py-16 w-full' :
                'bg-lighter-pink contactForm-section mt-4 sm:px-14 py-10 sm:py-12 md:py-16 w-full'}>
                {toggle ?
                    <>
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl ">
                            Let's discuss your project
                        </h2>

                        <p className="text-white text-sm sm:text-base my-7">
                            Tell us a bit more about what you are working on, and let's connect.
                        </p>
                    </> :
                    <>
                        <h2 className="text-half-black-light text-2xl sm:text-3xl md:text-4xl ">
                            Start Your Website Today
                        </h2>

                        <p className="text-half-black-light text-sm sm:text-base my-4">
                            Talk To A Shopify Expert Today For Free (713) 805-5888
                        </p>
                    </>
                }

                <div className="justify-center formSection mt-4">
                    <form method="post" action="/contact#ContactForm" className="w-full">
                        <div className="FormSmall gap-5 max-w-2xl mx-auto">
                            <input type="text"
                                placeholder="First name*"
                                required
                                className={styles.smallInput}

                            />
                            <input type="text"
                                placeholder="Last name*"
                                required
                                className={styles.smallInput}

                            />
                        </div>
                        {
                            toggle ?
                                <div className="FormSmall gap-5 mt-5 md:mt-6 max-w-2xl mx-auto">
                                    <input type="email"
                                        placeholder="Email*"
                                        required
                                        className={styles.smallInput}
                                    />
                                    <input type="tel"
                                        placeholder="Phone number*"
                                        required
                                        className={styles.smallInput}
                                    />
                                </div>
                                :
                                <>
                                    <div className="FormLarge  mt-5 md:mt-6 max-w-2xl mx-auto">
                                        <input type="email"
                                            placeholder="Email*"
                                            required
                                            className={styles.smallInput}
                                        />
                                    </div>
                                    <div className="FormLarge  mt-5 md:mt-6 max-w-2xl mx-auto">
                                        <input type="tel"
                                            placeholder="Phone number*"
                                            required
                                            className={styles.smallInput}
                                        />
                                    </div>
                                </>
                        }

                        <div className="FormLarge mt-5 md:mt-6 max-w-2xl mx-auto">
                            <input type="text"
                                placeholder="Description"
                                required
                                className={styles.largeInput}
                            />
                        </div>
                        <div className="flex mt-6 w-full">
                            {
                                toggle ?
                                    <button className="bg-light-parrot text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 max-w-2xl mx-auto">
                                        get my free website checkup
                                    </button>
                                    :
                                    <button className="bg-light-parrot text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 max-w-2xl mx-auto">
                                        request a free quote today
                                    </button>
                            }

                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ContactForm
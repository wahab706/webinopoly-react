import { ImCross } from "react-icons/im"

function Modal({ setModalShow }) {
    const styles = {
        smallInput: 'h-10 sm:h-11 md:h-12 px-4 md:px-6 text-sm sm:text-base md:text-lg',
        largeInput: 'h-24 px-4 md:px-6 text-sm sm:text-base md:text-lg',
    };

    return (
        <>
            <div className='fixed z-40 bg-black-modal  w-full h-full modal-anim'>
                <button className='absolute z-50 right-5 md:right-10 top-7' onClick={() => setModalShow(false)} >
                    <ImCross size={24} className='bg-white rounded-full p-1' />
                </button>
                <section className='contactForm-section modal-form sm:px-14 py-10 pt-18 sm:pt-14'>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-1">
                        Let's discuss your project
                    </h2>

                    <p className="text-white text-sm md:text-base mb-4">
                        Tell us a bit more about what you are working on, and let's connect.
                    </p>

                    <div className="justify-center formSection ">
                        <form method="post" action="/contact#ContactForm" className="w-full">
                            <div className="FormLarge max-w-xl mx-auto">
                                <input type="text"
                                    placeholder="First name*"
                                    required
                                    className={styles.smallInput}
                                />
                            </div>

                            <div className="FormLarge mt-3 max-w-xl mx-auto">
                                <input type="text"
                                    placeholder="Last name*"
                                    required
                                    className={styles.smallInput}

                                />
                            </div>

                            <div className="FormLarge mt-3 max-w-xl mx-auto">
                                <input type="email"
                                    placeholder="Your Email*"
                                    required
                                    className={styles.smallInput}
                                />
                            </div>

                            <div className="FormLarge mt-3 max-w-xl mx-auto">
                                <input type="tel"
                                    placeholder="Phone number*"
                                    required
                                    className={styles.smallInput}
                                />
                            </div>


                            <div className="FormLarge mt-3 max-w-xl mx-auto">
                                <input type="text"
                                    placeholder="Description"
                                    required
                                    className={styles.largeInput}
                                />
                            </div>
                            <div className="flex mt-4 w-full">
                                <button className="bg-pink hover:bg-light-parrot text-sm sm:text-base md:text-lg py-3 sm:py-4 px-6 max-w-xl mx-auto">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Modal

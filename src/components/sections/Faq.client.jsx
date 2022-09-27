import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi';

function Faq() {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };


    return (
        <section className='pt-14 px-1 sm:px-4 md:px-6 lg:px-8 xl:px-18 2xl:px-32 mx-auto faq-section'>
            <h1 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold sm:font-semibold text-center ">
                frequently asked questions
            </h1>
            <section className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10 p-4 mt-4 sm:mt-5 md:mt-8'>
                {Data.map((item, index) => {
                    return (
                        <div className='relative  accordation' key={index}>
                            <div className={`bg-half-white flex cursor-pointer p-3 sm:p-4
                              ${clicked === index ? 'rounded-tl-3xl rounded-tr-3xl' : 'rounded-3xl'}  `}
                                onClick={() => toggle(index)}>
                                <span className='mt-1'>
                                    {clicked === index ? <FiMinus size={22} /> : <FiPlus size={22} />}
                                </span>
                                <h2>
                                    {item.question}
                                </h2>
                            </div>

                            {clicked === index ? (
                                <div className={`bg-half-white rounded-bl-3xl p-3 sm:p-4  rounded-br-3xl flex items-center 
                                    transition ease-in-out delay-300  duration-300`}>
                                    <p>{item.answer}</p>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </section>
        </section >
    )
}

export default Faq




const Data = [
    {
        question: 'Can you tell me more about Shopify?',
        answer: 'Shopify is an eCommerce platform that allows anyone to create an online store of any size from the ground up. Currently, there are over a million entrepreneurs all over the world who use the platform. Because it has no restrictions on location, it is available in over 175 countries but is most popular in China, the United States, France, Russia, and Australia.'
    },
    {
        question: 'What is the difference between Shopify & Shopify plus?',
        answer: 'Shopify and Shopify Plus offer similar features in terms of essential E-Commerce functionality and analytics. The main differentiator between Shopify and Shopify Plus is that Shopify Plus provides more advanced capabilities, superior customer service, and flexibility over the underlying code. These additional features make Shopify Plus better suited to expanding or scaling businesses, while Shopify is great for smaller businesses.'
    },
    {
        question: 'Can I migrate my online store to Shopify?',
        answer: 'Yes, you may migrate your eCommerce store from another platform to Shopify. You can do it yourself, with the assistance of third-party apps, or with the help of your trusted Shopify experts, such as our team here at Webinopoly.'
    },
    {
        question: 'What are the requirements for creating a Shopify store?',
        answer: 'To begin, You’ll need a store name, brand identity, a logo, and a few products. To begin receiving payments, you should have a business address and a bank account. You’ll also have to set up taxes, shipping, and payment options and secure business permits in your area.'
    },
    {
        question: 'How long does it take to build a Shopify store?',
        answer: 'Depending on how much you already know about the business you’re launching, setting up a store on Shopify will take anywhere from 30 to 60 minutes. However, if you want to build a business from scratch or personalize any features and capabilities, it might take anywhere from ten to fifteen days.'
    },
    {
        question: 'What makes Shopify superior to other e-commerce platforms?',
        answer: 'Shopify is the most adaptable, feature-rich, and comprehensive eCommerce platform available. It comes with everything you need to run a successful online business and the ability to personalize your design and add more features.'
    },
    {
        question: 'What is included in your Shopify e-commerce development service?',
        answer: 'Webinopoly’s scope of our e-commerce development service extends well beyond just website and mobile app design. We can also work on your social media, content, SEO, and more while optimizing everything to work seamlessly with your Shopify store.'
    },
    {
        question: 'Do you provide multiple payment gateway integration support?',
        answer: 'The answer is yes; Webinopoly does provide multiple payment gateway integration support.'
    },
    {
        question: 'Would you be able to create a custom Shopify theme for me?',
        answer: 'Yes, our team here at Webinopoly is very capable of developing a customized theme for you that is tailored to meet your specifications. Our company has a lot of highly experienced Shopify developers and website designers working with us, including our CEO. This allows us to give our customers the best possible results while abiding by their brand guidelines and objectives.'
    },
    {
        question: 'How much does it cost to develop a Shopify website with Marketing?',
        answer: 'The budget is entirely up to you and your specific needs. These costs can start anywhere between $50 and $100 per day. If you choose to work with Webinopoly, you will also have to pay agency fees.'
    },
    {
        question: 'Do you build SEO-optimized Shopify websites and stores?',
        answer: 'es, we do develop Shopify websites and stores that are optimized for search engines like Google.'
    },
    {
        question: 'Is it possible for me to work with you during my regular business hours?',
        answer: 'We’re happy to accommodate your schedule since we want our customers to have the flexibility to work when it’s convenient for them.'
    },
    {
        question: 'How do you maintain quality control throughout the Shopify development process?',
        answer: 'As part of our quality control efforts, we thoroughly inspect the store, the products, and the overall theme. This entails running multiple tests and mockups to ensure that every detail is flawless. We also provide frequent updates and approvals during the project to keep you informed of what is happening and how things are developing.'
    },
    {
        question: 'How is your payment term structured? What payment methods do you accept?',
        answer: 'Before anything else, we’ll provide you with a cost estimate of the entire project. Once this is approved by the client, we collect thirty percent of the total cost in advance before starting any project. There are also no additional fees above the total amount agreed upon unless you will require tasks outside of the scope.'
    },
    {
        question: 'How can I keep track of my project? How is reporting conducted?',
        answer: 'Depending on the project’s duration, we can provide our clients with daily, weekly, or monthly updates. Additionally, you will have access to your project manager at all times and endless support throughout the project.'
    },
    {
        question: 'What is the typical budget when developing an online store with Shopify?',
        answer: 'To build a custom Shopify store and theme, you can expect to pay anywhere from $500 to $2,000. This is the typical rate for small to medium-sized agencies when designing your entire Shopify store. For bigger agencies, you might have to spend around $5000 to $20,000 for a custom-designed Shopify website. U+000A While rates vary, you will get what you pay, and since your website acts as a virtual storefront for your company, we don’t advise skimping on this one.'
    }
];
import brand1 from '../../assets/brand logos/brand1.png'
import brand2 from '../../assets/brand logos/brand2.png'
import brand3 from '../../assets/brand logos/brand3.png'
import brand4 from '../../assets/brand logos/brand4.png'
import brand5 from '../../assets/brand logos/brand5.png'
import brand6 from '../../assets/brand logos/brand6.png'
import brand7 from '../../assets/brand logos/brand7.png'
import brand8 from '../../assets/brand logos/brand8.png'
import Slider from "react-slick";

function BrandsSlider() {
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="flex flex-col justify-center my-6 lg:py-5 
          px-18 md:px-24 lg:px-32 xl:px-44 2xl:px-64 mini-slider xs-slider ">
                <h2 className="uppercase tracking-wider font-semibold font-MontSerif text-light-black text-center">
                    we worked these top brands
                </h2>

                <div className="mt-12 border-b-2 pb-8 border-slate ">
                    <Slider {...settings}>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand7} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand8} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand6} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand1} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand2} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand3} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand4} alt="brand logo" />
                            </div>
                        </li>
                        <li >
                            <div className="slider-img-div">
                                <img src={brand5} alt="brand logo" />
                            </div>
                        </li>


                    </Slider>
                </div>
            </section>
        </>
    );
}

export default BrandsSlider
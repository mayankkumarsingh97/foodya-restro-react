import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Slider from "react-slick";
import chef2 from "../acc/chef-2.png"
import chef from "../acc/chef.png"
import chef3 from "../acc/che3.png"
// import SampleNextArrow from "./SampleNextArrow";
// import SamplePrevArrow from "./SamplePrevArrow";
function OurChefs() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        // fade:true,
        autoplaySpeed:5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,

    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center ourChefs_h1">Our Chefs</h1>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card border-0 ">
                                <div className="card-body">
                                    <div className="row justify-content-end">
                                        <div className="col-md-6 position-relative">
                                        <div className="chef_desc">
                                                <p className="lead">
                                                    Here at the FoodYa family, we have tried to give the 'homely' touch to our Indian menu,
                                                    so people can enjoy and relish our food with a homely and an authentic Indian vibe.
                                                    The pure desi ghee tadka in dal, the typical ghar wali chai, the pind-style chole-bhature,
                                                    we use authentic
                                                    Indian masalas and spices and recipes to ensure that the taste is really of India!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="chef_img">
                                                <img src={chef2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid main_chef">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="row justify-content-end">
                                        <div className="col-md-6">
                                            <div className="chef_desc">
                                                <p className="lead">
                                                    Here at the FoodYa family, we have tried to give the 'homely' touch to our Indian menu,
                                                    so people can enjoy and relish our food with a homely and an authentic Indian vibe.
                                                    The pure desi ghee tadka in dal, the typical ghar wali chai, the pind-style chole-bhature,
                                                    we use authentic
                                                    Indian masalas and spices and recipes to ensure that the taste is really of India!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="chef_img">
                                                <img src={chef} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid main_chef">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="row justify-content-end">
                                        <div className="col-md-6">
                                            <div className="chef_desc">
                                                <p className="lead">
                                                Being a chef is a very challenging task and the biggest challenge is to make people happy with our food. 
                                                To achieve that, I ensure that when we prepare a dish, we are not just making food, we are spreading happiness, 
                                                and the taste must reflect it. My passion for cooking is what I try to bring to the table. I hope that we continue to 
                                                spread happiness through our food for our Foodya Family.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="chef_img">
                                                <img src={chef3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </>
    )
}

export default OurChefs
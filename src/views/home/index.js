// ** Styles
import "@styles/react/libs/charts/apex-charts.scss"
import { Assets } from "@src/assets/images"
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Form, Input, Label, Row } from "reactstrap"
import "./home.scss"
import { ArrowRight, Cast, CheckCircle, DollarSign, Edit, ExternalLink, Grid, Headphones, Heart, HelpCircle, Info, Link, Mail, MapPin, MessageCircle, Phone, Settings } from "react-feather"
import SwiperMultiSlides from "@src/views/home/SwiperMultiSlides"
import { useRTL } from "@hooks/useRTL"
import "@styles/react/libs/swiper/swiper.scss"

const Home = () => {
  const [isRtl] = useRTL()
  const divStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Assets.banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "85vh", // Set the height as per your design
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div className="home_page">

      {/* HOME BANNER PAGE  */}
    <div className="container-fluid " style={divStyle}>
      <Row className={"pt-5"}>
        <h1 className={"text-center text-white"}>Dream Discover</h1>
        <h2 className={"text-center text-white"}> Discovering Your Perfect Destinations</h2>
      </Row>
      <Card className="custom-card">
        <h2 className={"text-center form_head mt-1"}>Search Destination</h2>
        <CardBody>
          <Form className="form" onSubmit={e => e.preventDefault()}>
            <Row>
              <Col sm="12" className="mb-2">
                <Label className="form-label" for="input-name">
                  Input location
                </Label>
                <Input placeholder="Colombo" id="input-name" />
              </Col>
              <Col sm="12" className="mb-2">
                <Label className="form-label" for="input-name2">
                  Select Ratings
                </Label>
                <Input placeholder="5" id="input-name2" />
              </Col>
              <Col className="d-grid" sm="12">
                <Button className="btn_sch" color="info">Search</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>

      {/* INTRODUCTION PAGE  */}
    <div className={"container-fluid bg-white"}>
      <Row className={" pt-5 pb-2 introduction_page"}>
        <Col md={5} sm={12} lg={5}>
          {/*<img src={Assets.travelLogo} alt={"travel logo"} style={{ width: "37vw" }} />*/}
          <h2 className={"text-start"}><span className="script">Welcome To Sri Lanka!</span><br />
            Welcome to the Land of Serendipity !</h2>
        </Col>
        <Col md={7} sm={12} lg={7} className={"mt-2"}>
          <p className={"paragraph-wrap p-5 "}>
            <br />Sri Lanka is an island of Serendipity, a land of chance encounters and adventures,
            the home of innumerable treasures. An island deeply rooted in nature, history,
            heritage and values. It offers a myriad of experiences to truly immerse in authentic
            culture and unspoiled nature, a genuine excitement to the senses, a tug at one’s emotions.
            <br /><br />Sri Lanka is one of the leading romantic destinations in the whole world.
            The land of serendipity brings spiritual tranquility and a chance to
            rediscover oneself. The beauty of this tiny island is simply breath-taking.
            Known for its enchanting ancient ruins, endless soft-sanded beaches, imposing
            mountains, colourful festivals, tempting water sports, dense wild-life,
            diverse ethnical groups and off the top hospitality from the local residents,
            Sri Lanka is bound to make you come back again. <br /><br /> Sri Lanka Travel and Tourism
            brings all of this for you right under your fingertips so that you can discover
            the serene island for yourself. - Sri Lanka Travel and Tourism 2023- Best time
            to visit Sri Lanka
          </p>
        </Col>
      </Row>
    </div>

      {/* MAIN CATEGORY PAGE  */}
    <div className={" main_category"}>
      <h1 className={"p-4 text-center main_sub_header"}>Explore Our Travel Stories</h1>
      <SwiperMultiSlides isRtl={isRtl} />
    </div>

      {/* TRAVEL THINGS PAGE  */}
    <div className={"container-fluid about_sriLanka bg-white "}>
      <Row>
        <h1 className={"pt-4 pb-4 text-center main_sub_header"}>Things to do in Sri Lanka</h1>
        <Col md={5} className={""}>
          <img src={Assets.travel_grid} alt={"travel_grid"} />
        </Col>
        <Col md={7}>
          <h1 className={"text-center pb-2"} style={{fontWeight:'600'}}>Whats are these ?</h1>
          <p className={"about_desc"}>
            Embark on an enriching journey across the diverse landscapes of Sri Lanka. From thrilling adventures
            and encounters with exotic wildlife to serene moments in nature, our curated list of things to do ensures
            a memorable experience. Explore ancient wonders, partake in water sports along stunning coastlines,
            and immerse yourself in the vibrant festivities. Whether you seek adventure, cultural exploration,
            or simply wish to relax amidst breathtaking scenery, Sri Lanka offers a myriad of activities to suit
            every traveler's taste. Discover, explore, and create lasting memories in the pearl of the Indian Ocean.
            <br /><br />
            We want to share Sri Lanka's extraordinarily diverse and authentic story with the rest of the world.
            We want to help you discover the many thousands of different ways in which you can fall in love with
            our home & plan the perfect trip local experts, local perspective and all the best tips on where to
            eat, what to do, who to meet, how to get there and where to make your next favourite memory.
            <br /><br />
            Sri Lanka is a meeting place of friendly faces who share their homes and trade a space for spiritual
            healing a land for learning from the old and the new a hub of commercial activity a spot for tranquility.
            Sri Lanka casts a spell unlike anywhere else. It draws people in, not with artificial attractions and
            grand gestures, but by spellbinding soul and sincerity.
          </p>
        </Col>
      </Row>
    </div>

      {/* MAP LOCATION PAGE  */}
    <div className={"container-fluid map_page bg-white "}>
      <Row>
        <Col md={5} className={"map_heading d-flex justify-content-center align-items-center"}>
          <h2 className={"text-start"}><span className="script">Destination Guide!</span><br />
            Top Location in Sri Lanka</h2>
        </Col>
        <Col md={7}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1H1ADd1djKllgjsCH1zUtYLqyS8JTDK4&z=7&ehbc=00FFFFFF"
            width="100%"
            height="550px"
          ></iframe>
        </Col>
      </Row>
    </div>

      {/* FOOTER AND CONTACT PAGE  */}
    <div className={"full_footer"}>
      <div id="social_media" className="container-fluid">
        <div className="container text-center">
          <p> FIND US ON SOCIAL MEDIA</p>
          <div className="social_icons">
            <a href="#"><img src={Assets.facebook} /></a>
            <a href="#"><img src={Assets.instagram} /></a>
            <a href="#"><img src={Assets.twitter} /></a>
            <a href="#"><img src={Assets.whatsapp} /></a>
            <a href="#"><img src={Assets.linkedin} /></a>
            <a href="#"><img src={Assets.snapchat} /></a>
          </div>
        </div>
      </div>

      <div className={""}>
        <section id="footer">
          {/* <img className="footer_img" src={Assets.wave2} alt={"wave 2 image"} />*/}
          <div className="container">
            <div className="row">
              <div className="col-md-3 footer-box">
                <p><b>
                  <Info size={20} /> DREAM DISCOVER
                </b></p>
                <p>
                  <small>DreamDiscover is an intuitive and personalised travel app that is carefully
                    tailored to traverse your dreams and create excursions that are in line with your own
                    tastes.</small>
                </p>
                <Button color="success" className={"d-block btn-sm"}>
                  <ArrowRight size={14} className="align-middle ms-sm-25 me-1"></ArrowRight>
                  <span className="align-middle d-sm-inline-block d-none">  Free Sign Up</span>
                </Button>

                <Button color="primary" className={"d-block mt-2 ps-2 btn-sm"}>
                  <ArrowRight size={14} className="align-middle ms-sm-25 me-1"></ArrowRight>
                  <span className="align-middle d-sm-inline-block d-none"> Contact Us .</span>
                </Button>
              </div>
              <div className="col-md-3 footer-box">
                <p className={"mb-2"}><b><ExternalLink size={20} /> QUICK LINKS </b></p>
                <p><a className="text-reset" href="#"> <Grid size={17} /> Home</a></p>
                <p><a className="text-reset" href="#"> <CheckCircle size={17} /> Services</a></p>
                <p><a className="text-reset" href="#"> <MessageCircle size={17} /> About</a></p>
                <p><a className="text-reset" href="#"> <Cast size={17} /> Blog</a></p>
              </div>

              <div className="col-md-3 footer-box">
                <p className={"mb-2"}><b><Link size={20} /> USE FULL LINKS</b></p>
                <p><a className="text-reset" href="#"> <Heart size={17} /> Events</a></p>
                <p><a className="text-reset" href="#"><DollarSign size={17} /> Pricing</a></p>
                <p><a className="text-reset" href="#"> <Settings size={17} /> Settings</a></p>
                <p><a className="text-reset" href="#"><HelpCircle size={17} /> Help</a></p>
              </div>

              <div className="col-md-3 footer-box">
                <p className={"mb-2"}><Edit size={22} /><b> CONTACT US</b></p>
                <p><MapPin size={17} /> Dream Discover, Colombo</p>
                <p><Phone size={17} /> (+94)-123456789</p>
                <p><Headphones size={17} /> + 01 234 567 89</p>
                <p><Mail size={17} /> abcd@gmail.com</p>
              </div>
            </div>
            <hr />
            <p className="copyRight">
              <small> CopyRight © 2024 All Right Reserved . <br /> ~ Website Developed by
              Ishara Maduranga. ~ </small>
            </p>
          </div>
        </section>
      </div>
    </div>

  </div>
  )
}

export default Home

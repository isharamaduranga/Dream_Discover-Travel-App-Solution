// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react"

// ** Reactstrap Imports
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"
import { Assets } from "@src/assets/images"
import { ArrowRightCircle } from "react-feather";

const params = {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,
  slideToClickedSlide: true,
  pagination: {
    clickable: true
  }
}

const SwiperMultiSlides = () => {
  return (
    <div className={""}>
      <Swiper {...params}>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.adventure} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Adventure</CardTitle>
              <CardText>
                Embark on thrilling escapades and adrenaline-pumping experiences. From rugged terrains to exciting
                outdoor challenges, our adventure is tailored for those seeking the extraordinary.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top src={Assets.wild_life} className={"img-fluid"} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Wild Life</CardTitle>
              <CardText>
                Immerse yourself in the wonders of Sri Lanka's biodiversity. Encounter exotic wildlife, explore lush
                sanctuaries, and witness nature's creatures in their natural habitats.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.water_sport} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Water Sport</CardTitle>
              <CardText>
                Dive into the vibrant world beneath the waves or ride the surf along stunning coastlines.
                Our water sports category beckons water enthusiasts with a variety of aquatic experiences.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.nature} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Nature</CardTitle>
              <CardText>
                Discover the serenity of Sri Lanka's natural beauty. From breathtaking landscapes to tranquil gardens,
                our nature category invites you to unwind in the midst of picturesque surroundings.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.camping} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Camping</CardTitle>
              <CardText>
                Pitch your tent under the starry skies and connect with nature on a deeper level.
                Our camping category offers scenic spots and a chance to experience the great outdoors activities.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.ancient} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Ancient</CardTitle>
              <CardText>
                Step back in time as you explore the rich historical and cultural heritage of Sri Lanka.
                The ancient category guides you through temples, ruins, and monuments steeped in history.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImg top className={"img-fluid"} src={Assets.festive} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Festive</CardTitle>
              <CardText>
                Celebrate the vibrant spirit of Sri Lanka through its festivals. Join the festivities,
                witness traditional ceremonies, and experience the cultural richness of the island.
              </CardText>
              <Button color="relief-info">
                <span className={'fs-5'}>Find Out More</span> <ArrowRightCircle className={'ms-2'} size={20} />
              </Button>
            </CardBody>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default SwiperMultiSlides

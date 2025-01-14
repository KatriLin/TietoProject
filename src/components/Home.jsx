import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import star from "../img/star.webp";
import clouds from "../img/clouds.webp";
import ball from "../img/rain.png";
import frontpage from "../img/frontpage.jpg";
import frontBackgroud from "../img/giu-vicente-unsplash.jpg";
import frontBackgroud2 from "../img/christin-hume-unsplash.jpg";
import frontBackgroud3 from "../img/marvin-meyer-unsplash.jpg";
import "swiper/css";
import { useRef } from "react";

const slidesContent = [
  {
    id: 1,
    header: "Asiakaslähtöinen ohjelmistokehittäjä",
    text: "Olen Katri Lindvall, juniori-ohjelmistokehittäjä ja etsin parhaillaan kokoaikaista työtä ohjelmistokehityksen parista. Osaamiseni painottuu erityisesti frontend-kehitykseen, mutta haluaisin tulevaisuudessa laajentaa osaamistani myös Full Stack -rooliin.",
    backgroundImage: frontpage,
    item3BackgroundImage: star,
    link: "/about",
  },
  {
    id: 2,
    header: "Miksi teille?",
    text: "Hain teille töihin, koska yrityksenne tarjoaa monia mielenkiintoisia mahdollisuuksia kehittyä ja laajentaa ammattitaitoani. Käytössänne olevat teknologiat ovat myös sellaisia, joiden osaamista haluaisin syventää. Lisäksi arvostan yrityksenne avointa ja välittävää kulttuuria.",
    backgroundImage: frontBackgroud,
    item3BackgroundImage: clouds,
    link: "/about",
  },
  {
    id: 3,
    header: "Mitä olen tehnyt aikaisemmin?",
    text: "Aikaisemmassa työssäni Stealth Black Oy:ssä työskentelin ohjelmistokehittäjänä muutaman vuoden, rakentaen datankeräysohjelmia Pythonilla ja Seleniumilla. Frontend-kehityksessä käytin Reactia yrityksen tuotteiden ja verkkosivujen kehittämisessä, ja tietokantana käytössäni oli PostgreSQL. Lisäksi tuotin opetusaineistoja koneoppimismalleille. Ennen tätä työskentelin RND Worksillä, jossa kehitimme tiimissä asiakkaalle mobiilisovelluksen React Nativea käyttäen.",
    backgroundImage: frontBackgroud2,
    item3BackgroundImage: ball,
    link: "/workexperience",
  },
  {
    id: 4,
    header: "Mitä voin tarjota?",
    text: "Minulla on monipuolista työkokemusta ohjelmistokehittäjänä sekä muissa rooleissa eri toimialoilta, mikä on vahvistanut ongelmanratkaisutaitojani ja sopeutumiskykyäni. Erityisesti frontend-kehityksessä olen tarkka yksityiskohdista ja nautin visuaalisen ilmeen rakentamisesta. Koen, että voin tuoda tiimille lisäarvoa positiivisella asenteellani ja asiakaspalvelutaidoillani. Kansainvälinen kokemukseni opiskelun ja työn kautta on kehittänyt vuorovaikutustaitojani eri kulttuurien kanssa, ja puhun sujuvasti suomea, englantia ja italiaa. Luonteeltani olen oma-aloitteinen, joustava ja sosiaalinen.",
    backgroundImage: frontBackgroud3,
    item3BackgroundImage: star,
    link: "/workexperience",
  },
];
const Home = () => {
  const swiperRef = useRef(null)

  const handleMouseEnter = () => {
    if(swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop()
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start()
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={swiperRef}
      >
        {slidesContent.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slider-container"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div className="slider1 item1">
                <h1>{slide.header}</h1>
              </div>
              <div className="text item2">
                <p className="slide-text">{slide.text}</p>
                <Link className="navlinks" to={slide.link}>
                  <div className="morelink">Lue lisää</div>
                </Link>
              </div>

              <div
                className="item3"
                style={{
                  backgroundImage: `url(${slide.item3BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="home-section"></div>
    </>
  );
};

export default Home;

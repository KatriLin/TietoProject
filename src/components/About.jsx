import aboutBackgroudTieto from "../img/tietoevryback.jpg";
import kuva from '../img/kuva.png'
import computer from '../img/frontpage.jpg'
import katri from '../img/katri.jpeg'
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="background-about"  style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${aboutBackgroudTieto})`,
        }}
      >
        <div className="about-container">
          <p className="about-text">
            Olen visuaalinen ohjelmistokehittäjä, joka on aina oppimassa uutta.
          </p>
          <p className="about-text-2">
            Osaamiseni painottuu erityisesti Frontendiin, mutta olen jatkuvasti
            kasvattamassa osaamistani enemmän Full Stack -rooliin.
          </p>
        </div>
      </div>
      <div className="about-boxes-container">
        <h2 className="about-heading-secondary">Tietoa minusta</h2>
        <div className="about-me-box">
          <div className="image-container-about1"  style={{
          backgroundImage: `url(${kuva})`,
        }}
      ></div>
          <div className="description">
            <h3>Aina oppimassa uutta</h3>
            <p className="description-text">
              Olen junior-ohjelmistokehittäjä, jonka osaaminen painottuu
              erityisesti Frontendiin, mutta haluaisin kasvattaa osaamistani
              Full Stack -rooliin. Olen aina kiinnostunut oppimaan uutta ja
              kehittämään itseäni. Teknologia-ala tarjoaa tähän erinomaiset
              puitteet. Tällä hetkellä opiskelen backendin rakentamista Node.js
              ja syvennän React.js-tietouttani, mikä mahdollistaa monipuolisten
              verkkosovellusten kehittämisen.
            </p>
          </div>
        </div>

        <div className="about-me-box">
          <div className="image-container-about2" style={{
          backgroundImage: `url(${computer})`,
        }}
      ></div>
          <div className="description">
            <h3>Positiivinen ja visuaalinen</h3>
            <p className="description-text">
              Uskon, että kaikille asioille löytyy aina ratkaisu. Haasteiden
              edessä pysyn positiivisena ja etsin keinoja edetä. Nautin
              tuotteiden visuaalisen puolen toteuttamisesta ja koen tämän
              tärkeäksi loppukäyttäjän näkökulmasta.
            </p>
          </div>
        </div>

        <div className="about-me-box">
          <div className="image-container-about3" style={{
          backgroundImage: `url(${katri})`,
        }}
      ></div>
          <div className="description">
            <h3>Sosiaalinen ja yhteystyökykyinen</h3>
            <p className="description-text">
              Kuuntelen asiakkaiden tarpeita, ja otan heidän palautteen huomioon
              ja pyrit kehittämään ratkaisuja, jotka todella palvelevat
              asiakkaan tarpeitaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

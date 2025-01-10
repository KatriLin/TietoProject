import cagliari from "../img/cagliari.jpeg";
import bc from "../img/bc.png";
import canterbury from "../img/canterbury.png";
import backgroundImageEdu from "../img/desola-lanre-ologun-unsplash.jpg";
const Education = () => {
  return (
    <div className="edu-wrapper">
      <div
        className="background-education"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImageEdu})`,
        }}
      >
        <div className="about-container">
          <p className="about-text">Opinnot</p>
          <p className="about-text-2">
            Osaamiseni painottuu erityisesti Frontendiin, mutta olen jatkuvasti
            kasvattamassa osaamistani enemmän Full Stack -rooliin.
          </p>
        </div>
      </div>

      <div className="eduboxes-container">
        <h2 className="edu-heading">Koulutus</h2>

        <div className="study-box">
          <div className="image-container-bc">
            <img alt="bclogo" src={bc} className="styled-image-bc" />
          </div>
          <div className="description-wrapper-edu">
            <h2>Full Stack Web Developer</h2>
            <p className="description-text-edu">
              Olen suorittanut aikuisille suunnatun intensiivisen
              koodauskoulutuksen ja suoritin tieto- ja viestintätekniikan
              perustutkinnon Datanomi. Koulutuksessa opiskelin keskeisiä
              web-teknologioita, kuten HTML, CSS ja JavaScript, sekä React.js,
              Node.js ja NoSQL-tietokantoja. Tämä koulutus on antanut minulle
              hyvän pohjan ohjelmistokehityksessä, ja olen innokas soveltamaan
              oppimiani taitoja käytännön projekteissa.
            </p>
          </div>
        </div>

        <div className="study-box">
          <div className="image-container-cagliari">
            <img
              alt="cagliarilogo"
              src={cagliari}
              className="styled-image-cagliari"
            />
          </div>
          <div className="description-wrapper-edu">
            <h2 className="edu-description-heading">
              Valtiotieteiden kandidaatti
            </h2>
            <p className="description-text-edu">
              Olen suorittanut valtiotieteiden ja kansainvälisten suhteiden
              koulutusohjelman, jossa pääaineeni oli yhteiskuntatieteet. Tämä
              koulutus on syventänyt ymmärrystäni poliittisista ja sosiaalisista
              kysymyksistä sekä kansainvälisistä suhteista. Koko
              koulutusohjelman kävin italiaksi.
            </p>
          </div>
        </div>

        <div className="study-box">
          <div className="image-container-canterbury">
            <img
              alt="canterburylogo"
              src={canterbury}
              className="styled-image-canterbury"
            />
          </div>
          <div className="description-wrapper-edu">
            <h2 className="edu-description-heading">
              Valtiotieteiden opintoja
            </h2>
            <p className="description-text-edu">
              Opiskelin valtiotieteiden ja oikeustieteiden ensimmäisen vuoden
              opinnot, jotka tarjosivat syvällisen pohjan poliittiselle
              ajattelulle, oikeusjärjestelmille ja kansainvälisille suhteille.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;

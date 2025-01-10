import backgroundImageWork from "../img/google-deepmind-unsplash.jpg";
import backgroungWorkItem1 from "../img/markus-spiske-unsplash.jpg";
import backgroungWorkItem4 from "../img/kaitlyn-baker-unsplash.jpg";
import backgroungWorkItem5 from "../img/chris-ried-unsplash.jpg";

const WorkExperience = () => {
  return (
    <div className="work-wrapper">
      <div
        className="background-work"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImageWork})`,
        }}
      >
        <p className="work-heading">Työkokemus ohjelmistokehityksestä</p>
      </div>
      <div className="work-container">
        <div
          className="work-item work-item1"
          style={{ backgroundImage: `url(${backgroungWorkItem1})` }}
        >
          {" "}
        </div>
        <div className="work-item work-item2">
          <h3 className="work-secondary-heading">Junior Software Developer</h3>
          <p className="work-text">
            Työskentelin Zeframilla muutaman vuoden ohjelmistokehittäjänä, jossa
            rakensin erityisesti ohjelmia datan keruuta varten käyttäen Pythonia
            ja Seleniumia. Reactia hyödynsin muissa projekteissa, kuten
            yrityksemme tuotteen ja verkkosivujen kehittämisessä. Tietokantoina
            käytin PostgreSQL:ää, ja lisäksi tuotin opetusaineistoja
            koneoppimismalleille.
          </p>
          <div className="worklinks">
            <a
              href="https://zefram.com/fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lisää yrityksestä
            </a>
          </div>
        </div>
        <div className="work-item work-item3">
          <h3 className="work-secondary-heading">Junior Software Developer</h3>
          <p className="work-text">
            RND Worksillä työskennellessäni kehitimme tiimin kanssa
            mobiilisovellusta asiakkaallemme iOS- ja Android-laitteille käyttäen
            React Nativea.
          </p>
          <div className="worklinks">
            {" "}
            <a
              href="https://rnd.works/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lisää yrityksestä
            </a>
          </div>
        </div>
        <div
          className="work-item work-item4"
          style={{ backgroundImage: `url(${backgroungWorkItem4})` }}
        ></div>
        <div
          className="work-item work-item5"
          style={{ backgroundImage: `url(${backgroungWorkItem5})` }}
        ></div>
        <div className="work-item work-item6">
          <h3 className="work-secondary-heading">Junior Software Developer Trainee</h3>
          <p className="work-text">
            Ohjelmoin tarjoilijoiden tilausjärjestelmän hyödyntäen JavaScriptiä,
            PostgreSQL:ää ja Javaa.
          </p>
          <div className="worklinks">
            {" "}
            <a
              href="https://www.zucchetti.it/it/cms/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lisää yrityksestä
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

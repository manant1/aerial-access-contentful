// GOED STUK

import React, { useState } from 'react';

import ArrowstartSVG from '../../../assets/stap-1-new-balk_tranparant.svg';
import ArrowrestSVG from '../../../assets/stap-2-new-balk_tranparant.svg';

import imgsystem from '../../../images/Systems_Industrie_367x440px.jpg';
import imgsystem2 from '../../../images/Systems_Industrie_367x440px2.jpg';

const tabs = [
  {
    title: 'Advies & verkoop',
    desktopTitle: (props) => (
      <div
        className={`load-current-bar--long-title firstBarDiv ${props.className}`}
      >
        <ArrowstartSVG className='loading-bar firstBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--firstTitle'>
            Advies& <br />
            verkoop
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        {/* show this block as default, and it is replaced when clicked on a different svg/link */}
        <h1>ADVIES EN VERKOOP</h1>
        <p className='advies-service-content'>
          Of het een nieuwbouw project is of een offshore installatie we zullen
          op basis van een aantal factoren een gedegen en onderbouwd advies
          geven welke Rope Access rail systemen of ankerpunten het beste van
          toepassing zijn.
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Risk Assesment</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
        <p className='advies-service-content'>
          Aerial Access heeft een uniek assortiment van permanente access
          mogelijkheden. We vertegenwoordigen meerdere merken uit binnen en
          buitenland. Aerial Access staat dus neutraal in de markt en zullen dus
          merk onafhankelijk adviseren. Als er een eisen pakket is opgemaakt
          gaan we de verschillende opties voor jullie intekenen en een prijs
          berekening geven.
        </p>
      </div>
    ),
  },
  {
    title: 'Montage',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar secondBar' id='testSVG' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--secondTitle' id='testtitle'>
            Montage
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>MONTAGE</h1>
        <p className='advies-service-content'>
          Of het een nieuwbouw project is of een offshore installatie we zullen
          op basis van een aantal factoren een gedegen en onderbouwd advies
          geven welke Rope Access rail systemen of ankerpunten het beste van
          toepassing zijn.
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Risk Assesment</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
        <p className='advies-service-content'>
          {' '}
          Aerial Access heeft een uniek assortiment van permanente access
          mogelijkheden. We vertegenwoordigen meerdere merken uit binnen en
          buitenland. Aerial Access staat dus neutraal in de markt en zullen dus
          merk onafhankelijk adviseren. Als er een eisen pakket is opgemaakt
          gaan we de verschillende opties voor jullie intekenen en een prijs
          berekening geven.
        </p>
      </div>
    ),
  },
  {
    title: 'service & onderhoud',
    desktopTitle: (props) => (
      <div className={`load-current-bar--long-title ${props.className}`}>
        <ArrowrestSVG className='loading-bar thirdBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--thirdTitle'>
            Service & <br />
            onderhoud
          </span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>SERVICE EN ONDERHOUD</h1>
        <p className='advies-service-content'>
          Of het een nieuwbouw project is of een offshore installatie we zullen
          op basis van een aantal factoren een gedegen en onderbouwd advies
          geven welke Rope Access rail systemen of ankerpunten het beste van
          toepassing zijn.
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Risk Assesment</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
        <p className='advies-service-content'>
          Aerial Access heeft een uniek assortiment van permanente access
          mogelijkheden. We vertegenwoordigen meerdere merken uit binnen en
          buitenland. Aerial Access staat dus neutraal in de markt en zullen dus
          merk onafhankelijk adviseren. Als er een eisen pakket is opgemaakt
          gaan we de verschillende opties voor jullie intekenen en een prijs
          berekening geven.
        </p>
      </div>
    ),
  },
  {
    title: 'training',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar fourthBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--fourthTitle'>Training</span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>TRAINING</h1>
        <p className='advies-service-content'>
          Of het een nieuwbouw project is of een offshore installatie we zullen
          op basis van een aantal factoren een gedegen en onderbouwd advies
          geven welke Rope Access rail systemen of ankerpunten het beste van
          toepassing zijn.
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Risk Assesment</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
        <p className='advies-service-content'>
          Aerial Access heeft een uniek assortiment van permanente access
          mogelijkheden. We vertegenwoordigen meerdere merken uit binnen en
          buitenland. Aerial Access staat dus neutraal in de markt en zullen dus
          merk onafhankelijk adviseren. Als er een eisen pakket is opgemaakt
          gaan we de verschillende opties voor jullie intekenen en een prijs
          berekening geven.
        </p>
      </div>
    ),
  },
  {
    title: 'project',
    desktopTitle: (props) => (
      <div className={`${props.className}`}>
        <ArrowrestSVG className='loading-bar fifthBar' />
        <a className='link-loading-bar' onClick={props.onClick}>
          <span className='load-current-bar--fifthTitle'>Projects</span>
        </a>
      </div>
    ),
    content: () => (
      <div className='advies-service-main'>
        {/* The h1 is temporarly, when clicking the svg(desktop)/a(mobile) the corresponding text/block should appear */}
        <h1>PROJECTS</h1>
        <p className='advies-service-content'>
          Of het een nieuwbouw project is of een offshore installatie we zullen
          op basis van een aantal factoren een gedegen en onderbouwd advies
          geven welke Rope Access rail systemen of ankerpunten het beste van
          toepassing zijn.
        </p>
        <ul className='advies-service-content list'>
          <li>{'> '}Deskundig</li>
          <li>{'> '}Risk Assesment</li>
          <li>{'> '}Kosten besparend</li>
          <li>{'> '}Volledig gecertificeerd</li>
        </ul>
        <p className='advies-service-content'>
          Aerial Access heeft een uniek assortiment van permanente access
          mogelijkheden. We vertegenwoordigen meerdere merken uit binnen en
          buitenland. Aerial Access staat dus neutraal in de markt en zullen dus
          merk onafhankelijk adviseren. Als er een eisen pakket is opgemaakt
          gaan we de verschillende opties voor jullie intekenen en een prijs
          berekening geven.
        </p>
      </div>
    ),
  },
];

const MainPageAdvies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className='main-page-systems industrie'>
      <div className='container'>
        <div className='content-block-systems advies'>
          <div id='mobile' className='mobile-menu mobile'>
            {/* These are the buttons that should be linked with the corresponding text (mobile)  */}
            {/* Only repalce the block when cliked */}

            {tabs.map(({ title }, index) => (
              <a
                key={`tabsNavi${index}`}
                className='link-loading-bar-mobile'
                onClick={() => setActiveTab(index)}
                href={`#block${index}`}
              >
                <span>{title}</span>
              </a>
            ))}
          </div>

          <div className='load-current-bar mobile-hide'>
            {/* These are the buttons that should be linked with the corresponding text (desktop) */}

            {tabs.map(({ desktopTitle: Title }, index) => (
              <Title
                key={`tabsNaviDesktop${index}`}
                onClick={() => setActiveTab(index)}
                className={activeTab === index ? 'active' : ''}
              />
            ))}
          </div>

          <p className='light'>
            Omdat het een innovatief product is waarbij veel winst is te halen
            is op verschillende vlakken starten we meestal met een haalbaarheid
            onderzoek en een RI&E Risico Inventarisatie & Evaluatie.
          </p>

          {tabs.map(
            ({ content: Content }, index) =>
              activeTab === index && (
                <div key={`tabsContent${index}`} id={`block${index}`}>
                  <Content />
                </div>
              )
          )}
        </div>
        <div className='content-block-systems-2'>
          <img src={imgsystem} alt='' />
          <img src={imgsystem2} alt='' />
          <div className='content-block-systems__buttons'>
            <a href=''>producten</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageAdvies;

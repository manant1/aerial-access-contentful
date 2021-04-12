import React from 'react';

const IntroOptionTrainingen = () => {
  const hangleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <section className='intro-option trainingen'>
      <div className='intro-option--container container'>
        <div className='intro-option--text'>
          <p>
            Elk vakgebied heeft zijn specifieke taken en werkzaamheden, waar
            onze trainingen op aan zullen sluiten. Onze instructeurs zijn
            operationeel ervaren en gekwalificeerd volgens internationaal
            erkende organisaties. De trainingen en materialen voldoen aan de
            hoogste en meest “up-to-date” standaard, richtlijnen en wetgeving.
            <br />
            <br />
            De trainingen zijn realistisch en van hoge kwaliteit. <br />
            Ze zijn voorzien van oplossingen die getest zijn in het veld!
          </p>
        </div>
        <div className='intro-option--links emergency'>
          <h2>Technical Rope Rescue trainingen</h2>
          <a
            className='introOption'
            onClick={() => hangleClick('trainingBlock_1')}
          >
            ITRA direct entry level 3
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('trainingBlock_2')}
          >
            ITRA/EUSR
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('trainingBlock_3')}
          >
            Technical Rope Rescue Team leader
          </a>
          <a
            className='introOption'
            onClick={() => hangleClick('trainingBlock_4')}
          >
            Rope Rescue Medic + ITLS
          </a>
          <a className='introOption'>Advanced Confined Space Rescue</a>
          <br />
          <h2>Technical Rope Rescue trainingen</h2>
          <a className='introOption'>Scenario training reddingsteams</a>
          <a className='introOption'>Rope Rescue Medic trainingsdag</a>
          <a className='introOption'>AHD en Highline workshop België</a>
        </div>
      </div>
    </section>
  );
};

export default IntroOptionTrainingen;

import React from 'react';
import SVGWhiteEmergency from '../../images/logo-diensten_training_wit.svg';

const TrainingenBanner = () => {
  return (
    <section className='banner-page trainingen'>
      <div className='banner-page--container container banner-trainingen'>
        <img className='banner-page--img trainingen' src={SVGWhiteEmergency} alt='' />
        <h1>
        De opleidingen die wij verzorgen zijn op maat en voor <br />
        alle hulpdiensten, industriële bedrijven en een ieder <br />
        die veilig wil werken op hoogte.
        </h1>
      </div>
    </section>
  );
};

export default TrainingenBanner;

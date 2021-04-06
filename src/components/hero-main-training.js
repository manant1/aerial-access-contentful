import React from 'react';
import LogoMobileHeroTraining from '../assets/logo-diensten_training.svg';

const HeroMainTraining = () => {
  return (
    <div className='hero-element'>
      <article>
        <div className='hero-element-titel'>
          
          <LogoMobileHeroTraining className="desktop-hero-logo" fill="#0D71B9"/>

    
          <LogoMobileHeroTraining className="mobile-hero-logo mobile" fill="#0D71B9"/>
         <span className="mobile-hero-button training"><span>></span></span>
        </div>

        <div className='hero-element-text'>
          <p>
          De opleidingen die wij verzorgen zijn op maat en voor alle hulpdiensten, industriële bedrijven en een ieder die veilig wil werken op hoogte.  De trainingen zijn realistisch en  van hoge kwaliteit. Ze zijn voorzien van oplossingen die getest zijn in  het veld!                            </p>
        </div>
      </article>
      <div className='hero-element-image training'>
        <a href='/trainingen/' className='hero-element-image__link'>
          trainingen
        </a>
      </div>
    </div>
  );
};

export default HeroMainTraining;
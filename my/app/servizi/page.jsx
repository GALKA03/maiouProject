"use client"
import React from 'react';
import Loading from './loading';
import s from "../styles/layout/servizi.module.scss"
import { Suspense } from 'react'
import ScrollUpBtn from '../components/ScrollUp';

const Servizi = () => {

const handleTouchStart = (event) => {
    event.currentTarget.classList.toggle('hover');
  };

  return (
      
   <div className={s.wrapper}>
  <h1 className={s.title}>Ci occupiamo anche di:</h1>
      <div className={s.cols}>
       
         <Suspense fallback={<Loading/>}> 
			<div className={s.col} onTouchStart={handleTouchStart}>
          <div className={s.container}>
					<div className={s.front} style={{ backgroundImage: `url(/servize/serv5.jpg)` }}>
						<div className={s.inner}>
							<p>Coibentazioni skid</p>
              <span>1</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
						  <p>La coibentazione con moduli Skid è una pratica comune nell'industria petrolifera e petrolchimica per isolare impianti a diverse temperature. Gli skid offrono un'alternativa efficiente alla costruzione tradizionale, spedendo e installando separatamente le parti del sistema. Vengono utilizzati materiali come la lana di roccia, la lana di vetro e la fibroceramica per questa lavorazione.</p>
						</div>
					</div>
				</div>
        </div>
      </Suspense>
			<div className={s.col} onTouchStart={handleTouchStart}>
				<div className={s.container}>
					<div className={s.front} style={{ backgroundImage: `url(/servize/serv3.jpg)`}}>
						<div className={s.inner}>
							<p>Coibentazione criogenica</p>
              <span>2</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
							<p>
La coibentazione criogenica utilizza materiali ad alte prestazioni per assorbire forze meccaniche, ridurre la conduttività termica e prevenire la formazione di condensa e ghiaccio. È impiegata in serbatoi di gas liquefatto, tubazioni e componenti per fluidi di processo ad alta temperatura.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.col} onTouchStart={handleTouchStart}>
				<div className={s.container}>
					<div className={s.front} style={{ backgroundImage: `url(/servize/serv3.jpg)` }}>
						<div className={s.inner}>
							<p>Coibentazioni fonoassorbente</p>
              <span>3</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
							<p>L'isolamento fonoassorbente utilizza materiali specifici per interrompere la trasmissione di vibrazioni sonore tra due ambienti. Pannelli sandwich, lastre di piombo o materiali come Trocellen Aplomb vengono impiegati per isolare acusticamente pavimenti, pareti, tubazioni di scarico e sistemi di ventilazione.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.col} onTouchStart={handleTouchStart}>
				<div className={s.container}>
					<div className={s.front} style={{ backgroundImage: `url(/servize/serv5.jpg)` }}>
						<div className={s.inner}>
							<p>Coibentazioni a freddo</p>
              <span>4</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
							<p>L'isolamento con moduli Skid è ampiamente adottato nell'industria petrolifera e petrolchimica per isolare impianti a diverse temperature. Gli skid offrono un'alternativa efficiente alla costruzione tradizionale, poiché le parti del sistema vengono prefabbricate e spedite per un'installazione rapida. Materiali come la lana di roccia, la lana di vetro e la fibroceramica vengono utilizzati per questa tipologia di isolamento.
</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.col} onTouchStart={handleTouchStart}>
				<div className={s.container}>
					<div className={s.front}style={{ backgroundImage: `url(/servize/serv5.jpg)` }}>
						<div className={s.inner}>
							<p>Coibentazioni con poliuretano</p>
              <span>5</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
							<p>Il poliuretano è un isolante versatile utilizzato nell'industria e nell'edilizia. È iniettato nei preformati di alluminio per isolare serbatoi e impianti di refrigerazione. Offre eccellente resistenza termica e acustica, riducendo dispersioni di calore e rumore. Migliora l'efficienza energetica e il comfort degli ambienti industriali e domestici.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.col} onTouchStart={handleTouchStart}>
				<div className={s.container}>
					<div className={s.front} style={{ backgroundImage: `url(/servize/serv3.jpg)` }}>
						<div className={s.inner}>
							<p>Coibentazioni a caldo</p>
              <span>6</span>
						</div>
					</div>
					<div className={s.back}>
						<div className={s.inner}>
							<p>L'isolamento termico a caldo si basa sull'uso di materiali termicamente isolanti per impedire lo scambio di calore tra parti con diverse condizioni ambientali. È un processo comune su serbatoi, centrali termiche, condensatori, caldaie, turbine, tubazioni, gruppo valvole e pompe. L'obiettivo principale è evitare dispersioni di calore e migliorare l'efficienza energetica delle apparecchiature.</p>
						</div>
					</div>
				</div>
			</div>
	
		  </div>
		  <ScrollUpBtn />
      </div>
    
  );
};

export default Servizi;

// style={{ backgroundImage: 'url(https://unsplash.it/500/500/)' }}
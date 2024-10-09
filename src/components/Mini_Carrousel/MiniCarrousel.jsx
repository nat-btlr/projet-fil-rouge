import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from '../Images/pexels.jpg';
import './minicarrousel.css';

const Carrousel2 = () => (
  <section className="pt-5 pb-5" id="smc">
    <div className="container">
      <h2>Nouveautés</h2>
      <div className="row">
        <div className="col-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="card">
                      <img className="img-fluid" alt="Placeholder" src={Image} />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card">
                      <img className="img-fluid" alt="Placeholder" src={Image} />
                    </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card">
                        <img className="img-fluid" alt="Placeholder" src={Image} />
                      </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card">
                      <img className="img-fluid" alt="Placeholder" src={Image} />
                    </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card">
                        <img className="img-fluid" alt="Placeholder" src={Image} />
                      </div>
                  </div>
                  <div className="col-md-2">
                      <div className="card">
                        <img className="img-fluid" alt="Placeholder" src={Image} />
                      </div>
                  </div>
                </div>
              </div>
              {/* Ajouter ici d'autres éléments de carrousel si nécessaire */}
            </div>
            {/* Boutons de contrôle du carrousel avec FontAwesome SVG */}
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <FontAwesomeIcon icon={faChevronLeft} className="carousel-control-icon" />
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <FontAwesomeIcon icon={faChevronRight} className="carousel-control-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Carrousel2;

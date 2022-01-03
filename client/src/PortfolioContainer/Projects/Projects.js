import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import Shape from '../../../src/assets/Testimonial/shape-bg.png';




export default function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

          const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

        return (
            <div>
                <ScreenHeading
                title= {'Projects'}
                subHeading= {'Check out some of my previous projects!'}
                />
                <section className="project-section" id={props.id || ""}>
                    <div className="container">
                        <div className="row">
                            <OwlCarousel className="owl-carousel" id="projects-carousel" {...options}>
                            <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                        Technologies Used: HTML, CSS, Javascript, Node JS,
                        Bootstrap, REST API.
                      <i className="fa fa-quote-right" />
                    </p>
                    
                  </div>
                  <div className="proj-info">
                    
                    <a href="https://boiling-fortress-84877.herokuapp.com/"><h5>Note Taker</h5></a>
                    <p>A simple note taking application deployed on heroku.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Technologies Used: HTML, CSS, Javascript, Node JS,
                        Bootstrap, Open Weather Map API.
                      <i className="fa fa-quote-right" />
                    </p>
                    
                  </div>
                  <div className="proj-info">
                    
                    <a href="https://alexgroat.github.io/weather-dashboard/"><h5>Weather Dashboard</h5></a>
                    <p>The dashboard displays current and future conditions, and this city is added to the search history.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                        Technologies Used: Figlet, MySQL, Inquirer, Console Table, Node JS.
                      <i className="fa fa-quote-right" />
                    </p>
                    
                  </div>
                  <div className="proj-info">
                    
                    <a href="https://github.com/AlexGroat/Employee-tracker"><h5>Node JS Employee Tracker</h5></a>
                    <p>This application manages a workplace where employees, departments and roles can be tracked.</p>
                  </div>
                </div>
              </div>

              
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                        Technologies Used: Figlet, MySQL, Inquirer, Console Table, Node JS.
                      <i className="fa fa-quote-right" />
                    </p>
                    
                  </div>
                  <div className="proj-info">
                    
                    <a href="https://alexgroat.github.io/password-generator/"><h5>Password Generator</h5></a>
                    <p>This applicaton is a front end app that has a specific job of generating a password using multiple options for criteria that make up the password. </p>
                  </div>
                </div>
              </div>

              
              <div className="col-lg-12">
                <div className="proj-item">
                  <div className="proj-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                        Technologies Used: Express, MySQL, REST API, Database Models, Node JS.
                      <i className="fa fa-quote-right" />
                    </p>
                    
                  </div>
                  <div className="proj-info">
                    
                    <a href="https://github.com/AlexGroat/Ecommerce-backend"><h5>E Commerce Back End</h5></a>
                    <p>This application is a back end for an e-commerce site. By modifying starter code and using express and sequelize to interact with the MYSQL database. .</p>
                  </div>
                </div>
              </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                <div className="footer-image">
        <img src={Shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
    
        


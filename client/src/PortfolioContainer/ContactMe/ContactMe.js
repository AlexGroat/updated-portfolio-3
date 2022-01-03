import React from 'react';
import Typical from "react-typical";
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';





export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen != props.id)
        return
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading 
            subHeading= {"Want to get in contact with me?"}
            title= {"Contact Me"}
            />
            <div className='central-form'>
                <div className='col'>

                <h2 className='title'>
                
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get In Touch 📧",
                    3000,
                    
                  ]}
                />
              </h2>

              <a href="https://github.com/AlexGroat">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/alex-groat-0a382513b/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              
                </div>
            </div>

        </div>
    )
}
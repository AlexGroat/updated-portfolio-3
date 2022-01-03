import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen != props.id)
        return
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'Get to know about me and my projects!'}/>
            </div>


        </div>
    )
}
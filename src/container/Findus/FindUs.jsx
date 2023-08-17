import React from 'react';
import {FiMapPin} from 'react-icons/fi';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"><FiMapPin />&nbsp;118 S. CLAIRBORNE ROAD OLATHE, KS 66062</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Hours of Operations</p>
        <p className="p__opensans">Mon : We are closed</p>
        <p className="p__opensans">Tues - Sun: 11:00am - 9:30pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}><a href="https://www.google.com/maps/dir/Rajmahal+Indian/118+S+Clairborne+Rd+Olathe,+KS+66062/@38.8807392,-94.7874938,17.72z/data=!4m13!4m12!1m5!1m1!1s0x87c0be226214709b:0x1f0001b5e00aa49f!2m2!1d-94.7871319!2d38.8815946!1m5!1m1!1s0x87c0be22e4e7718d:0x674d2776ea8a9b80!2m2!1d-94.7873643!2d38.8809102?entry=ttu" target="_blank" rel="noopener noreferrer"> Visit Us</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
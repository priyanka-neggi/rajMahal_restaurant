import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Founder's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">He started his career as a chef in Bombay, India, and the sky was the limit for him.  Hailing from Uttarakhand India.</p>
        </div>
        <p className="p__opensans"> Try our dishes, and taste the freshness of our ingredients prepared by our experienced staff.  </p>
      </div>

      <div className="app__chef-sign">
        <p>Rajender Rana&nbsp;& &nbsp;bijender Rana</p>
        <p className="p__opensans">Owner & Founder</p>
       {/*  <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
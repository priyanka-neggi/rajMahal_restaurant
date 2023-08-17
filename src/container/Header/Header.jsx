import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Festival Of Flavors" />
      <h1 className="app__header-h1">Taste of India!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We offer a variety of North Indian Style food. Rajmahal serves food made from some of the freshest ingredients. Extraordinary Indian cuisine elegantly served. Rajmahal strives to bring out the best of India through culinary artistry with Indian spices. India has given the world some of the most loved spices, and we at The Rajmahal bring it right to your plate. 💜
      <span className="p__opensans wrap" style={{ margin: '0.2rem 0', display: 'flex', color: '#FDD36A', fontWeight: '600' }}>
      We offer a buffet option for lunchtime!🍴🍖 ☄️. &nbsp; Brace yourself for the ultimate feast  </span>
      </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
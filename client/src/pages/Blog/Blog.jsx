import React from 'react';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import hookah from '../../assets/hookah.png';
import beverage from '../../assets/beverages.png';
import etp from '../../assets/18.png';
import Minilogo from '../../components/Minilogo/Minilogo';
import './Blog.css';
const Blog = () => {
  return (
    <div className="blog">
      <MenuHeader text={"Our Philisophy"}/>
      <Minilogo/>
      <div className="content-blog">
        <h2 className="blog-header-left">Why we?</h2>
        <div className="blog-left">
          <div className="blog-text-left">
            <p>We try to give people happiness. It manifests itself in different ways: in the warm attitude of the team, in the aesthetic pleasure of the author's interiors, in the menu filled with taste and emotions. We see this as our true mission. Allow yourself to forget about the problems and enjoy the time spent with us in the institution.</p>
          </div>
        </div>
      </div>
      <Minilogo/>
      <div className="content-blog">
        <h2 className="blog-header-right">Updates and news</h2>
        <div className="blog-right">
          <div className="blog-text-right">
            <p>Soon, hookahs with various types of tobacco will appear on our menu, ranging from light to heavy.</p>
            <p>At the beginning of school time, discount cards will be valid on weekends for high school students and university and college students.</p>
          </div>
        </div>
      </div>
      <div className="blog-add-info">
        <div className="blog-image">
          <img src={hookah} alt="" />
        </div>
        <div className="blog-info-container">
          <div className="blog-info-image">
            <img src={etp} alt="" />
          </div>
          <div className="blog-info-text">
            <p>! We kindly ask you to have with you one of the documents confirming your age of majority, for example, a driver's license or passport !</p>
          </div>
          <div className="blog-info-image">
            <img src={etp} alt="" />
          </div>
        </div>
        <div className="blog-image">
          <img src={beverage} alt="" />
        </div>
      </div>
      <Minilogo/>
      <div className="content-blog">
        <h2 className="blog-header-center">Policy and rules of our institution</h2>
        <div className="blog-center">
          <div className="blog-text-center">
            <p>In our institution, when opening, strict rules appeared that we must comply with: <br/>1) Use only those goods and packages that are environmentally neutral and recyclable.<br/>2)Environmentally friendly workplace, regular cleaning throughout the working day<br/>3) When hiring a mandatory safety course.<br/>4) Openness of the working staff not only for praise but also for criticism.<br/>5) The overall goal is to make your evening unforgettable!</p>
          </div>
        </div>
      </div>
      <div className="blog-footer-text">
        <p>For your comments, questions or criticism, we have created an email and an Instagram account to get closer to you and understand what our audience wants. You can find all the necessary links in the "About Us" tab</p>
      </div>
    </div>
  );
};

export default Blog;

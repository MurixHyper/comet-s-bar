import React from 'react';
import { FaInstagram, FaTripadvisor, FaFacebook, FaTwitter } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-media"/>
      </a>

      <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer">
        <FaTripadvisor className="social-media"/>
      </a>

      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="social-media"/>
      </a>

      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-media"/>
      </a>
    </div>
  );
};

export default SocialMedia;

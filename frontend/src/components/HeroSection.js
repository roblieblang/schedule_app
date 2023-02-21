import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>This is the Welcome Page</h1>
      <p>Sign up today!</p>
      <div className='hero-btns'>
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default HeroSection;
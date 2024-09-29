import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
import About from '../src/about';

export default function Layout() {
 return (
 <>
 <div class="header">
        <div class="logo">
          <span>Patrick.DEV</span>
        </div>
        <nav class="nav-con" id="navbar">
          <ul class="nav">
          <Link to="/"><li><a href="#">Home</a></li></Link>
          <Link to="/about"><li><a href="#">About Me</a></li></Link>
          <Link to="/project"><li><a href="#">Projects</a></li></Link>
          <Link to="/contact"><li><a href="#">Contact</a></li></Link>

         
          </ul>
        </nav>
      </div>
 
 </>
 
 );
}

import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
export default function Layout() {
 return (
 <>
 <h1>My Portfolio</h1>
 <nav>
    < img src={football1}alt="football" className="football"/>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 
 
 </>
 
 );
}
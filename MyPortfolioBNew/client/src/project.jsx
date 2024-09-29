import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <div class="second-section">
          <div class="projects-title"><h2>PROJECTS</h2></div>
          <div class="projects">
            <div class="project-section-1">
              <div class="project-1 project">
                <div class="project-1-1 project">
                  <span><a href="#">CALCULATOR</a></span>
                </div>
              </div>
              <div class="project-2 project">
                <div class="project-1-2 project">
                  <span><a href="#">TO-DO APP</a></span>
                </div>
                <div class="project-1-3 project">
                  <span><a href="#">TRAIL HUNTER</a></span>
                </div>
              </div>
              <div class="project-3 project">
                <div class="project-1-4 project">
                  <span><a href="#">ECOMMERCE LANDING PAGE</a></span>
                </div>
              </div>
            </div>
            <div class="project-section-2">
              <div class="project-2-5 project">
                <span><a href="#">SNAKE GAME</a></span>
              </div>
              <div class="project-2-6 project">
                <span><a href="#">SPOTIFY COLLECTIONS</a></span>
              </div>
            </div>
          </div>
        </div>
    

     </>
    }
    
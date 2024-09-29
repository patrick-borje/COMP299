import BBG from '../src/assets/BBG.jfif';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <div class="first-section" id="welcome-section">
          <div class="image">
            <img
              src="../src/assets/car.jpeg"
              alt="first section image"
              class="welcome-image"
            />
          </div>
          <div class="welcome-con">
            <div class="welcome">
              <h1>This is Patrick</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
    

     </>
     }
    
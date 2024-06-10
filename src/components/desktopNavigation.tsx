import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

export function DesktopNavigation() {
  return (
    <>
      <div className='h-100 p-4' style={{width: 300, backgroundColor: '#9db4c0', paddingTop: '25px'}}>
        <Row className='mb-5'>
            <img src="/fotoIljas.png" alt="" width={250} style={{borderRadius: '50%'}}/>
        </Row>
        <ul style={{listStyleType: 'none'}}>
          <a href="/#home">
            <li className='mt-2 navItem'>
              Home
            </li>
          </a>
          <a href="/#aboutMe">
            <li className='mt-2 navItem'>
              About me
            </li>
          </a>
          <a href="/#resume">
            <li className='mt-2 navItem'>
              Resume
            </li>
          </a>
          <a href="/#portfolio">
            <li className='mt-2 navItem'>
              Portfolio
            </li>
          </a>
          <a href="/#internship">
            <li className='mt-2 navItem'>
              Internship
            </li>
          </a>
          <a href="/#contact">
            <li className='mt-2 navItem'>
              Contact
            </li>
          </a>
        </ul>
        
        <a href="/cv.pdf" download>
            <div className='p-1' style={{marginLeft: '10px', backgroundColor: '#5c6b73', width: '230px', borderRadius: '10px'}}><span className='text-white ps-1 fw-bolder'>Download Resume</span></div>
        </a>
        </div>
    </>
  );
}
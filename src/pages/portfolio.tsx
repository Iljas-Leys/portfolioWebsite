import { Button, Col, Row } from "react-bootstrap";

export function Portfolio(){
    return (
        <div className='h-100' style={{backgroundColor: '#e0fbfc'}}>
            <div style={{backgroundColor: '#e0fbfc', height: '10px'}}/>
            <div className='bg-white p-4-lg p-3 ps-5-lg pb-5 m-3-lg m-2'>
                <Row lg={2} xs={1}>
                    <Col lg='auto'>
                        <img src="portfolio.png" alt="" width="100%"/>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <span style={{color: '#5c6b73', fontSize: '36px'}}>Portfolio website</span><br />
                            <span className="customBold ms-2">Project date:</span> June 2024
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3" lg={2} xs={1}>
                    <Col>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Assignment</span><br />
                        <p>
                            At the <span style={{color: '#5c6b73'}}>end of my internship</span>, my school assigned me the task of <span style={{color: '#5c6b73'}}>creating a portfolio website to showcase my work and experiences</span>.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Approach</span><br />
                        <p>
                            To tackle this assignment, I chose to use <span style={{color: '#5c6b73'}}>React</span> for building the website due to its <span style={{color: '#5c6b73'}}>component-based architecture and flexibility</span>. For <span style={{color: '#5c6b73'}}>hosting</span>, I selected <span style={{color: '#5c6b73'}}>Combell, a static web server provider</span>, which allowed me to deploy and manage my site efficiently. I aimed to build the entire website <span style={{color: '#5c6b73'}}>from scratch without relying on any pre-made templates</span>, ensuring that it would be <span style={{color: '#5c6b73'}}>fully custom and easily customizable</span>.
                        </p>
                    </Col>
                    <Col>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Final result</span><br />
                        <p>
                            The <span style={{color: '#5c6b73'}}>final product was a fully custom and customizable portfolio website</span>, the one you are <span style={{color: '#5c6b73'}}>using right now</span>. By avoiding templates, I created a unique and personalized site that accurately reflected my skills and experiences. The website is <span style={{color: '#5c6b73'}}>responsive, visually appealing, and showcased my projects and accomplishments effectively</span>.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>What I learned</span><br />
                        <p>
                            This project <span style={{color: '#5c6b73'}}>enhanced my proficiency with React, deepening my understanding of its capabilities and best practices</span>. Additionally, I gained valuable experience in <span style={{color: '#5c6b73'}}>deploying and hosting a React project on a static web server provider</span>.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://github.com/Iljas-Leys/" target='_blank'>
                            <Button variant='secondary'>View source code on github</Button>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
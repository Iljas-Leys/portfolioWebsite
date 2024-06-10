import { Button, Card, Col, Row } from "react-bootstrap";
import { HorizontalLine } from "../components/horizontalLine";
import { Bar } from "../components/bar";
import { VerticalCircleLine } from "../components/verticalCircleLine";
import { VerticalLine } from "../components/verticalLine";
import { LinkedinSvg } from "../svg/linkedin";
import { GithubSvg } from "../svg/github";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Main(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='h-100' style={{backgroundColor: '#e0fbfc'}}>
                <a id="home">
                    <div style={{height: '648px', backgroundImage: 'url("greenField.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        {/* <div style={{paddingLeft: '300px', paddingTop: '150px'}}>
                        <div className="p-3" style={{backgroundColor: "rgba(157, 180, 192, 0.7)", width: "650px", borderRadius: "20px"}}>
                            <h1><span style={{fontSize: '72px', color: "#FFFFFF"}}>Portfolio Iljas Leys</span></h1>
                            <span style={{fontSize: '24px', paddingLeft: '30px', color: '#FFFFFF'}}>Frontend Development, Backend Development, .NET, ...</span>
                        </div>
                        </div> */}
                        <div className="titleSpacer"/>
                        <div className="titleContainer py-2">
                            <h1 className="text-center">
                                <span className="titleText">Portfolio Iljas Leys</span>
                            </h1>
                            <span className="d-block text-center titleSubText">
                                Frontend Development, Backend Development, .NET, ...
                            </span>
                        </div>
                    </div>
                </a>
                <div className='bg-white p-4 ps-5 pb-5'>
                    <a id="aboutMe"><h2 style={{color: '#5c6b73'}}>About me</h2></a>
                    <HorizontalLine />
                    <Row>
                        <Col lg={"auto"}>
                            <img src="/fotoIljasBody.png" alt="" style={{borderRadius: '40px', width: '100%'}} />
                        </Col>
                        <Col className="mt-3 mt-lg-0">
                            <Row className='px-5-lg px-1-xs pb-3' lg={2} xs={1}>
                                <Col><span className='customBold'>Birthday: </span>15 october 2001</Col>
                                <Col><span className='customBold'>Languages: </span>Dutch, English, basics of French</Col>
                            </Row>
                            <Row className='px-5-lg px-1-xs' lg={2} xs={1}>
                                <Col><span className='customBold'>E-mail: </span><a href="mailto:iljas.leys@hotmail.com" style={{textDecoration: 'underline'}}>iljas.leys@hotmail.com</a></Col>
                                <Col><span className='customBold'>Driver's License: </span>Type B</Col>
                            </Row>
                            <Row className='px-5-lg px-1-xs pt-5'>
                            <p>
                                Since I was little, I have <span className='customBold'>always had an interest in IT</span>. The feeling of finding a solution to a problem has always been amazing to me, and I love that with just a laptop, you have limitless possibilities in IT.
                            </p>

                            <p>
                            <span className='customBold'>In high school, I studied IT</span> at 'De sport- en handelsschool' in Turnhout, graduating in 2019. In 2023, I began my <span className='customBold'>graduate degree in programming</span> at Thomas More College in Geel. As part of my studies, I completed an <span className='customBold'>internship at Van Genechten</span>. There, I <span className='customBold'>gained insights into how a business operates</span> and how I can <span className='customBold'>grow while pursuing a career in IT</span>. I developed a variety of hard and soft skills, such as teamwork and the importance of documentation.
                            </p>

                            <p>
                                I am very excited to <span className='customBold'>continue learning about IT</span>, not only in programming but also in other domains of IT. The magical feeling of understanding and  learning something new always stay with me.
                            </p>

                            <p>
                                In my free time, I enjoy <span className='customBold'>playing the trombone</span> as a member of the Brass Band of Kasterlee. It's a wonderful way to unwind and connect with a group of friendly, like-minded people while making music.
                            </p>
                                <a target="_blank" href="https://www.linkedin.com/in/iljas-leys-626557305" style={{width: '50px'}}><LinkedinSvg /></a>
                                <a target="_blank" href="https://github.com/Iljas-Leys/" style={{margin: '0px 30px', width: '50px'}}><GithubSvg /></a>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='mt-5 bg-white p-4 ps-5 pb-5'>
                        <h2 style={{color: '#5c6b73'}}>Skills</h2>
                        <HorizontalLine />
                        <Row lg={2} xs={1} className='px-5-lg pb-3'>
                        <Col className='mb-3'>
                            <b>Documenting:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={95}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>React:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={90}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Javascript / Typescript:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={90}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Working in a team:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={90}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>C#:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={90}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>HTML:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={85}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Bootstrap:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={85}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>SQL:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={80}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>UML:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={75}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Angular:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={75}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Node.js:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={70}/>
                        </Col>
                        <Col className='mb-3'>
                            <b>Linux:</b><br />
                            <Bar width={windowSize.width > 768 ? 560 : 270} value={70}/>
                        </Col>
                        </Row>
                        <div className='text-center'>
                        <p>
                            <span><b>Learning</b></span><br />
                            I am always excited to learn new things
                        </p>
                        <p>
                            <span><b>Creativity</b></span><br />
                            I consistently think outside the box to develop innovative solutions and ideas.
                        </p>
                        <p>
                            <span><b>Critical Thinking</b></span><br />
                            I analyze situations carefully to make informed decisions and solve problems effectively.
                        </p>
                        <p>
                            <span><b>Adaptability</b></span><br />
                            I easily adjust to new challenges and environments, embracing change with a positive attitude.
                        </p>
                        </div>
                </div>
                <div className='mt-5 bg-white p-4 ps-5-lg pb-5'>
                    <a id="resume"><h2 style={{color: '#5c6b73'}}>Resume</h2></a>
                    <HorizontalLine />
                    <div className='px-4'>
                    <h4><span className='customBold'>Education</span></h4>
                    <Row className='ps-3-lg pt-2' lg={3} xs={1}>
                        <Col>
                        <VerticalLine height={120}>
                            Sport- en handelsschool <br />
                            <b>
                            DIPLOMA <br />
                            SECONDARY EDUCATION <br />
                            IT <br />
                            2013-2019 <br />
                            </b>
                        </VerticalLine>
                        </Col>
                        <Col>
                        <VerticalLine height={90}>
                            Thomas More Geel <br />
                            <b>
                            GRADUATE DEGREE <br />
                            CODING <br />
                            2022-2024 <br />
                            </b>
                        </VerticalLine>
                        </Col>
                    </Row>
                    </div>
                    <div className='px-4 mt-5-lg mt-2'>
                    <h4><span className='customBold'>Work experience</span></h4>
                    <div className='ps-3-lg pt-2'>
                        <VerticalCircleLine height={windowSize.width > 768 ? 110 : 180}>
                            <b>
                            <span style={{fontSize: '22px'}}>Van Genechten | Feb 2024</span><br />
                            <ul className='mt-2'>
                                <li>Internship graduate degree</li>
                                <li>Front end with React</li>
                                <li>Managing a component library</li>
                            </ul>
                            </b>
                        </VerticalCircleLine>
                        <VerticalCircleLine height={windowSize.width > 768 ? 110 : 240}>
                            <b>
                            <span style={{fontSize: '22px'}}>Chameleon computers | June 2019</span><br />
                            <ul>
                                <li>Internship secundary education</li>
                                <li>Reparation computers (software/hardware)</li>
                                <li>On site repairs in bussinesses</li>
                            </ul>
                            </b>
                        </VerticalCircleLine>
                        <VerticalCircleLine height={windowSize.width > 768 ? 55 : 80}>
                            <b>
                            <span style={{fontSize: '22px'}}>Spar Lichtaart | 2022</span><br />
                            <ul>
                                <li>Permanent position</li>
                                <li>All-round supermarket employee</li>
                            </ul>
                            </b>
                        </VerticalCircleLine>
                    </div>
                    </div>
                <a href="/cv.pdf" download>
                    <div className='p-1 mt-3 ms-3' style={{marginLeft: '10px', backgroundColor: '#5c6b73', width: '230px', borderRadius: '10px'}}><span className='text-white ps-1 fw-bolder'>Download Resume</span></div>
                </a>
                </div>
                <div className='mt-5 bg-white p-4 ps-5 pb-5'>
                    <a id="portfolio"><h2 style={{color: '#5c6b73'}}>Portfolio</h2></a>
                    <HorizontalLine />
                    <Row lg={3}>
                    <Col className='mb-4'>
                        <Card className='p-3'>
                            <Card.Img variant="top" src="hotel.png" />
                            <Card.Body>
                                <Card.Title>
                                    Project Kempenbloei
                                </Card.Title>
                                <Card.Text>
                                    This is a school project for requirements analysis and UML related to the imaginary hotel company called "Kempenbloei." The purpose of this assignment is to enhance our skills in communicating with a client, UML, and requirements analysis.
                                </Card.Text>
                                <Link to="/kempenbloei"><Button variant='secondary'>Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-3'>
                            <Card.Img variant="top" src="portfolio.png" />
                            <Card.Body>
                                <Card.Title>
                                    Portfolio site
                                </Card.Title>
                                <Card.Text>
                                    This page has been crafted entirely by hand, without the use of templates, thanks to the power of React.
                                </Card.Text>
                                <Link to="/portfolio"><Button variant='secondary'>Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-3'>
                            <Card.Img variant="top" src="ai.png" />
                            <Card.Body>
                                <Card.Title>
                                    AI image generation
                                </Card.Title>
                                <Card.Text>
                                    I love using AI to create unique, innovative photos. I always try to stay up-to-date with the latest technological advancements and continually explore new ways to blend creativity with coding.
                                </Card.Text>
                                <Link to="/ai"><Button variant='secondary'>Learn more</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </div>
                <div className='mt-5 bg-white p-4 ps-5 pb-5'>
                    <a id="internship"><h2 style={{color: '#5c6b73'}}>Internship - Front end developer</h2></a>
                    <HorizontalLine />
                    <Row xs={1} lg={2}>
                        <Col>
                            <img src="vanGenechten.bmp" alt="" className="ms-3-lg mt-5-lg mb-3 mb-0-lg" style={{ width: '100%'}} />
                        </Col>
                        <Col>
                        <p><span className='customBold'>Van Genechten Packaging</span> is a leading company in <span className='customBold'>packaging solutions</span>, producing items ranging from small tea boxes to large diaper boxes and fresh product trays. My <span className='customBold'>internship</span> took place at their main location in <span className='customBold'>Turnhout</span>, which houses both <span className='customBold'>production facilities</span> and <span className='customBold'>offices</span> for <span className='customBold'>customer communication</span>, <span className='customBold'>packaging design</span>, and <span className='customBold'>IT</span>. The company has multiple locations across <span className='customBold'>Europe</span> and employs over <span className='customBold'>1700 people</span>.</p>
                        <p>My primary task was <span className='customBold'>front-end development</span> for <span className='customBold'>web applications</span>, replacing older systems. This involved using a <span className='customBold'>component library</span>, <span className='customBold'>adapting existing components</span>, and <span className='customBold'>creating new ones</span> to meet project needs. I wrote extensive <span className='customBold'>documentation</span> to aid future users of the <span className='customBold'>library</span> and added <span className='customBold'>tests</span> to ensure <span className='customBold'>components</span> functioned correctly. I also facilitated the transition from the tool <span className='customBold'>Bit</span> to <span className='customBold'>Ladle</span> for <span className='customBold'>faster development</span> and implemented a <span className='customBold'>live editor</span> for <span className='customBold'>component documentation</span>.</p>
                        <p>I enhanced my skills in <span className='customBold'>React</span>, <span className='customBold'>JavaScript</span>, and <span className='customBold'>TypeScript</span>, and learned the importance of <span className='customBold'>documentation</span>. I also improved my ability to create <span className='customBold'>mockups</span>, understanding their role in planning <span className='customBold'>application design</span> and <span className='customBold'>functionality</span>. The experience taught me to work more efficiently and highlighted areas for <span className='customBold'>personal growth</span>.</p>
                        <a href="/EindrapportStage.pdf" download>
                            <Button variant='secondary'>Download internship final report (Dutch)</Button>
                        </a>
                        </Col>
                    </Row>
                </div>
                <div className='mt-5 bg-white p-4 ps-5 pb-5'>
                    <a id="contact"><h2 style={{color: '#5c6b73'}}>Contact</h2></a>
                    <HorizontalLine />
                    <Row>
                        <Col lg='auto' xs='auto'>
                            <Card className='p-3'>
                                <h4>Location:</h4>
                                <p>Kasterlee - Belgium</p>
                                <h4>Email:</h4>
                                <p><a href="mailto:iljas.leys@hotmail.com" style={{textDecoration: 'underline'}}>iljas.leys@hotmail.com</a></p>
                                <h4>Phone:</h4>
                                <p>+32 468 23 06 67</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39965.11338568752!2d4.9057763915622745!3d51.24081745378484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14cad0e56319d%3A0xc983838f2dcf7c06!2s2460%20Kasterlee!5e0!3m2!1snl!2sbe!4v1717730657282!5m2!1snl!2sbe" width={windowSize.width > 768 ? 600 : 240} height={windowSize.width > 768 ? 450 : 240} style={{border: 0}} allowFullScreen={true} loading="lazy"></iframe>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
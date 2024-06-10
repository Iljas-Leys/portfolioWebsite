import { Button, Col, Row } from "react-bootstrap";

export function Kempenbloei(){
    return (
        <div className='h-100' style={{backgroundColor: '#e0fbfc'}}>
            <div style={{backgroundColor: '#e0fbfc', height: '10px'}}/>
            <div className='bg-white p-4-lg p-3 ps-5-lg pb-5 m-3-lg m-2'>
                <Row lg={2} xs={1}>
                    <Col lg='auto'>
                        <img src="hotel.png" alt="" width="100%"/>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <span style={{color: '#5c6b73', fontSize: '36px'}}>Project Kempenbloei</span><br />
                            <span className="customBold ms-2">Project date:</span> 2nd semester of 2nd year
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3" lg={2} xs={1}>
                    <Col>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Assignment</span><br />
                        <p>
                            The assignment for Project Kempenbloei involved <span className='customBold'>analyzing requirements</span> and <span className='customBold'>creating UML diagrams</span> for an imaginary hotel company named "Kempenbloei." The main goal was to modernize and automate the hotel's current system, <span className='customBold'>enhancing our skills in customer communication, UML, and requirement analysis</span>. Additionally, we <span className='customBold'>created sketches</span> to visualize what a final application would look like.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Approach</span><br />
                        <p>
                            We began by <span className='customBold'>gathering background information through analyzing the provided details</span> and asking the teacher, who acted as the end user, relevant questions. This allowed us to <span className='customBold'>thoroughly analyze the functional requirements</span> and <span className='customBold'>create use case and class diagrams using UML</span>.
                        </p>
                    </Col>
                    <Col>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Final result</span><br />
                        <p>
                            The final deliverable was a <span className='customBold'>comprehensive analysis report detailing all functional requirements, use case descriptions, class diagrams, and sketches</span>.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>My input</span><br />
                        <p>
                            My team member and I collaborated on all aspects of the project, working together to achieve the final result.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>What I learned</span><br />
                        <p>
                            Through Project Kempenbloei, I <span className='customBold'>gained valuable insights</span> into <span className='customBold'>requirement analysis and UML diagram creation</span>, enhancing my system design skills. The project <span className='customBold'>improved my ability to communicate with clients, accurately document their needs, and develop detailed use case descriptions</span>. I became <span className='customBold'>proficient in creating class diagrams, visualizing system components, and making application sketches</span>. Collaboration with my team member strengthened, leading to efficient task division and a supportive working environment. The iterative review process highlighted the importance of continuous improvement and feedback. Overall, this project significantly reinforced essential skills for real-world system analysis and design.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/Analyserapport.pdf" download>
                            <Button variant='secondary'>Download final report (Dutch)</Button>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
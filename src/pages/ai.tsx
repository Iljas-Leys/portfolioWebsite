import { Col, Row } from "react-bootstrap";

export function Ai(){
    return (
        <div className='h-100' style={{backgroundColor: '#e0fbfc'}}>
            <div style={{backgroundColor: '#e0fbfc', height: '10px'}}/>
            <div className='bg-white p-4-lg p-3 ps-5-lg pb-5 m-3-lg m-2'>
                <Row lg={2} xs={1}>
                    <Col lg='auto'>
                        <img src="ai.png" alt="" width="100%"/>
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
                            While this isn't connected to a specific assignment, I <span className='customBold'>integrate AI-generated images across various projects and personal endeavors</span>. By leveraging cutting-edge <span className='customBold'>AI tools</span>, I <span className='customBold'>enhance the visual appeal and engagement</span> of my work, making it stand out in a crowded digital landscape.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Approach</span><br />
                        <p>
                            To create these compelling images, I use <span className='customBold'>Stable Diffusion</span>, a powerful AI tool renowned for its ability to generate high-quality visuals. As a frontend, I utilize <span className='customBold'>Automatic1111</span> with all kinds of plugins, a versatile and user-friendly interface that streamlines the process, making it efficient and straightforward to produce stunning images.
                        </p>
                    </Col>
                    <Col>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>Final result</span><br />
                        <p>
                            The final result is a collection of <span className='customBold'>easily created, visually striking pictures that are free from copyright restrictions</span>. These images not only <span className='customBold'>save time and resources</span> but also provide the <span className='customBold'>flexibility to be used in a wide array of contexts</span>, from web design and marketing materials to social media posts and personal art projects.
                        </p>
                        <span style={{color: '#5c6b73', fontSize: '28px'}}>What I learned</span><br />
                        <p>
                            Through this process, I've learned the immense <span className='customBold'>potential of AI in creative endeavors</span>. It has broadened my skill set, allowing me to merge <span className='customBold'>technical proficiency</span> with <span className='customBold'>artistic expression</span> seamlessly. This experience has reinforced the value of staying at the forefront of technology to deliver innovative and impactful results.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
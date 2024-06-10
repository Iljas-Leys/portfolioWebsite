import { ReactNode } from "react"
import { Col, Row } from "react-bootstrap";

interface VerticalCircelLineProps {
    children?: ReactNode;
    height: number;
}

export function VerticalCircleLine({height, children}: VerticalCircelLineProps){
    return(
        <Row lg={2}>
            <Col lg='auto' xs='auto'>
                <div style={{position: 'relative', width: '30px', height: height + 20}}>
                    <div style={{width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#5c6b73', position: 'absolute', top: '0px', left: '0px'}}></div>
                    <div style={{width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFFFFF', position: 'absolute', top: '5px', left: '5px'}}></div>
                    <div style={{width: '6px', height: height, backgroundColor: '#5c6b73', position: 'absolute', top: '25px', left: '12px'}}></div>
                </div>
            </Col>
            <Col>
                <div>{children}</div>
            </Col>
        </Row>
    )
}

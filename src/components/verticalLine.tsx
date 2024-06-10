import { ReactNode } from "react"
import { Col, Row } from "react-bootstrap";

interface VerticalCircelLineProps {
    children?: ReactNode;
    height: number;
}

export function VerticalLine({height, children}: VerticalCircelLineProps){
    return(
        <Row>
            <Col lg={2} xs={2} className="pb-4 pb-0-lg">
                <div style={{position: 'relative', height: height + 10}}>
                    <div style={{width: '6px', height: height, backgroundColor: '#5c6b73', position: 'absolute', top: '5px'}}></div>
                </div>
            </Col>
            <Col>
                <div>{children}</div>
            </Col>
        </Row>
    )
}

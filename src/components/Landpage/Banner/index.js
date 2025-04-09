import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
 
import CardSelect from 'components/Landpage/Card/Select'

import { 
    BannerImage,
    BannerOut,
    BannerContent,
    PhoneImageContainer,
    PhoneImage
} from "./styled"; 

export default function Banner(){
    return ( 
        <> 
            <BannerImage id="home">
                <BannerOut />
                <BannerContent>
                    <Container fluid>
                        <Row className="flex-md-row-reverse">
                            <Col lg={{ size: 6, offset: 0 }} md={{ size: 8, offset: 0 }} className="d-flex align-items-center justify-content-center justify-content-md-start"> 
                                <CardSelect /> 
                            </Col>
                            <Col lg={6} className="position-relative d-flex align-items-center justify-content-center">
                                <PhoneImageContainer className="position-relative left-side">
                                    <PhoneImage />
                                </PhoneImageContainer>
                            </Col>
                        </Row>
                    </Container>
                </BannerContent>
            </BannerImage>
        </>
    );
}
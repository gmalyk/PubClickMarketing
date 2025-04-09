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
                        <Row>
                            <Col lg={{ size: 6, offset: 1 }} md={{ size: 8, offset: 1 }}> 
                                <CardSelect /> 
                            </Col>
                            <Col lg={5}>
                                {/* Phone image will be displayed via absolute positioning */}
                            </Col>
                        </Row>
                    </Container>
                    <PhoneImageContainer>
                        <PhoneImage />
                    </PhoneImageContainer>
                </BannerContent>
            </BannerImage>
        </>
    );
}
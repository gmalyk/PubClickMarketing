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
                        {/* Desktop layout - only visible on md and up */}
                        <Row className="flex-md-row-reverse d-none d-md-flex">
                            <Col lg={{ size: 6, offset: 0 }} md={{ size: 8, offset: 0 }} className="d-flex align-items-center justify-content-center justify-content-md-start"> 
                                <CardSelect /> 
                            </Col>
                            <Col lg={6} className="position-relative d-flex align-items-center justify-content-center">
                                <PhoneImageContainer className="position-relative left-side">
                                    <PhoneImage />
                                </PhoneImageContainer>
                            </Col>
                        </Row>
                        
                        {/* Mobile layout - only visible on smaller than md */}
                        <Row className="d-md-none">
                            <Col xs={12}>
                                <CardBannerContent />
                            </Col>
                        </Row>
                    </Container>
                </BannerContent>
            </BannerImage>
        </>
    );
}

// Mobile-specific component for banner content
const CardBannerContent = () => {
    return (
        <>
            {/* Title and text first */}
            <div className="mb-4">
                <CardSelect showButtonOnMobile={false} />
            </div>
            
            {/* Phone image in the middle */}
            <div className="text-center mb-4">
                <PhoneImageContainer className="position-relative" style={{ height: 'auto', maxHeight: 'none' }}>
                    <PhoneImage style={{ height: 'auto', maxHeight: '350px' }} />
                </PhoneImageContainer>
            </div>
            
            {/* Button at the bottom */}
            <div className="text-center">
                <CardSelect showOnlyButtonOnMobile={true} />
            </div>
        </>
    );
}
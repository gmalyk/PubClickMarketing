import React from "react"; 

import { Row, Col, Container } from 'reactstrap';  

import Item from './Item'

import {
    MoreInfosContainer,
    MoreInfosDecoration,
    MoreInfosTitle,
    MoreInfosText
} from './styled'

import AdsClickIcon from '@mui/icons-material/AdsClick';
import GoogleIcon from '@mui/icons-material/Google';
import GroupIcon from '@mui/icons-material/Group';
import useI18n from "hooks/useI18n";

export default function MoreInfos(){ 

    const { t } = useI18n()
    
    const moreInfos = [
        { title: t("homemoreinfos_title1"), text: t("homemoreinfos_text1"),  icon: <AdsClickIcon color="black" sx={{width: 48, height: 48}} /> },
        { title: t("homemoreinfos_title2"), text: t("homemoreinfos_text2"),   icon: <GroupIcon color="black" sx={{width: 48, height: 48}} /> },
        { title: t("homemoreinfos_title3"), text: t("homemoreinfos_text3"),   icon: <GoogleIcon color="black" sx={{width: 48, height: 48}} /> },
        { title: t("homemoreinfos_title4"), text: t("homemoreinfos_text4"),   icon: <img src="/icons/graphic-design.svg" alt="Graphic Design" style={{width: 48, height: 48}} /> },
        { title: t("homemoreinfos_title5"), text: t("homemoreinfos_text5"),   icon: <img src="/icons/people.svg" alt="People" style={{width: 48, height: 48}} /> },
        { title: t("homemoreinfos_title6"), text: t("homemoreinfos_text6"),   icon: <img src="/icons/social-media.svg" alt="Social Media" style={{width: 48, height: 48}} /> },
    ]

    // Create pairs of items for two-column layout
    const createItemRows = (items) => {
        const rows = [];
        for (let i = 0; i < items.length; i += 2) {
            rows.push(
                <Row key={i} className="mb-4 mb-md-5">
                    <Col md={6} className="mb-4 mb-md-0">
                        <Item variant={i} {...items[i]} secondary={false} />
                    </Col>
                    {i + 1 < items.length && (
                        <Col md={6} className="mb-4 mb-md-0">
                            <Item variant={i + 1} {...items[i + 1]} secondary={false} />
                        </Col>
                    )}
                </Row>
            );
        }
        return rows;
    };

    // On mobile view, display each item in its own row
    const createMobileItems = (items) => {
        return items.map((item, index) => (
            <Row key={index} className="d-md-none mb-4">
                <Col xs={12}>
                    <Item variant={index} {...item} secondary={false} />
                </Col>
            </Row>
        ));
    };

    return ( 
        <> 
            <MoreInfosContainer id="services" style={{backgroundImage: "url('/images/orangeBackground.jpg')"}}> 
                <Container>
                    <Row>
                        <Col> 
                            <MoreInfosTitle>
                                Services tailored to your needs
                            </MoreInfosTitle>
                            <MoreInfosText>
                                We offer various services to advertise you on the internet. Thanks to innovative technology, we can publish your site and reference it on hundreds of platforms.
                            </MoreInfosText> 
                        </Col>
                    </Row>
                    
                    {/* Desktop view - two columns */}
                    <div className="d-none d-md-block">
                        {createItemRows(moreInfos)}
                    </div>
                    
                    {/* Mobile view - single column */}
                    <div className="d-md-none">
                        {createMobileItems(moreInfos)}
                    </div>
                </Container>
            </MoreInfosContainer>
        </>
    );
}
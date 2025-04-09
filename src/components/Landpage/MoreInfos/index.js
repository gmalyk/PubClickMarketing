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
                <Row key={i} className="mb-4">
                    <Col md={6}>
                        <Item variant={i} {...items[i]} secondary={false} />
                    </Col>
                    {i + 1 < items.length && (
                        <Col md={6}>
                            <Item variant={i + 1} {...items[i + 1]} secondary={false} />
                        </Col>
                    )}
                </Row>
            );
        }
        return rows;
    };

    return ( 
        <> 
            <MoreInfosContainer id="services"> 
                {/* <MoreInfosDecoration /> */}
                <Container>
                    <Row>
                        <Col> 
                            <MoreInfosTitle>
                                { t("homemoreinfos_title") }
                            </MoreInfosTitle>
                            <MoreInfosText>
                                { t("homemoreinfos_text") }
                            </MoreInfosText> 
                        </Col>
                    </Row>
                    {createItemRows(moreInfos)}
                </Container>
            </MoreInfosContainer>
        </>
    );
}
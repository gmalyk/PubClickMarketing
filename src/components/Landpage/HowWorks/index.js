import React, { useState } from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
 
import ToggleTab from 'components/Landpage/Toggle/Tab'
import HowWorksItem from './Item'

import {
    HowWorksContainer,
    HowWorksDecoration,
    HowWorksTitleContent,
    HowWorksTitle,
    HowWorksText
} from './styled'

import LockIcon from '@mui/icons-material/Lock';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useI18n from "hooks/useI18n";

export default function HowWorks(){

    const [activeTab, setActive] = useState(0)

    const { t } = useI18n()
 
    const optionsSchedule = [
        {
            icon: <ThumbUpOffAltIcon color="white" sx={{width: 32, height: 32}} />,
            subtitle: t("homehowworks_title1"),
            text: t("homehowworks_text1")
        },
        {
            icon: <LocalShippingIcon color="white" sx={{width: 32, height: 32}} />,
            subtitle: t("homehowworks_title2"),
            text: t("homehowworks_text2")
        },
        {
            icon: <LockIcon color="white" sx={{width: 32, height: 32}} />,
            subtitle: t("homehowworks_title3"),
            text: t("homehowworks_text3")
        }
    ]

    return ( 
        <> 
            <HowWorksContainer id="solution">
                {/* <HowWorksDecoration /> */}
                <Container>
                    <Row>
                        <Col>
                            <HowWorksTitleContent>
                                <HowWorksTitle>{ t("homehowworks_title") }</HowWorksTitle>
                                <HowWorksText>{ t("homehowworks_text") }</HowWorksText>
                            </HowWorksTitleContent>
                            {/* <ToggleTab options={tabOptions} active={activeTab} onClick={setActive} />  */}
                        </Col>
                    </Row>
                    <Row>
                        {
                            activeTab === 0 ? 
                                optionsSchedule.map((item, key) => 
                                    <Col key={key} md={{ size:4 }}>
                                        <HowWorksItem { ...item }  variant={key} />
                                    </Col>
                                )
                            : null
                        }  
                    </Row>
                </Container>
            </HowWorksContainer>
        </>
    );
}
import React from "react"; 
 
import Banner from "components/Landpage/Banner";
import HowWorks from 'components/Landpage/HowWorks'
import MoreInfos from 'components/Landpage/MoreInfos'
import CommomCases from 'components/Landpage/CommomCases'
import KnowMore from 'components/Landpage/KnowMore'
import LittleMore from 'components/Landpage/LittleMore' 

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import { PageContent } from "./styled";
import useI18n from "hooks/useI18n";

export default function Policy(){ 

    const { t } = useI18n()
 
    return ( 
        <ContainerLandpage>    
            
            <Container>
                <Row>
                    <Col>
                        <PageContent>

                            <p>
                                <b>{ t("policy_title") } </b>
                                { t("policy_text1") }
                            </p>
                            <p>
                                <b>{ t("policy_text2") } </b>
                                { t("policy_text3") }
                            </p>
                            <p>
                                <b>{ t("policy_text4") } </b>
                                { t("policy_text5") }
                            </p>
                            <p>
                                <b>{ t("policy_text6") } </b>
                                { t("policy_text7") }
                            </p>
                            <p>
                                { t("policy_text8") }
                            </p>
                            <p>
                                { t("policy_text9") }
                            </p>
                            <p>
                                { t("policy_text10") }
                            </p>
                            <p>
                                { t("policy_text11") }
                            </p>
                            <p>
                                { t("policy_text12") }
                            </p>
                            <p>
                                { t("policy_text13") }
                            </p>
                            <p>
                                { t("policy_text14") }
                            </p>
                            <p>
                                { t("policy_text15") }
                            </p>
                            <p>
                                { t("policy_text16") }
                            </p>

                        </PageContent>
                    </Col>
                </Row>
            </Container>
         
        </ContainerLandpage>
    );
}
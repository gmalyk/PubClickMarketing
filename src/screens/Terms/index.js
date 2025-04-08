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

export default function Terms(){ 

    const { t } = useI18n()
 
    return ( 
        <ContainerLandpage> 
            <Container>
                <Row>
                    <Col>
                        <PageContent>

                                <h1>{ t("terms_title") }</h1>

                                <p>
                                { t("terms_text1") }
                                </p>
                                <p>
                                { t("terms_text2") }
                                </p>
                                <p>
                                { t("terms_text3") }
                                </p>
                                <b>{ t("terms_text4") }</b>
                                <p>
                                { t("terms_text5") }
                                </p>
                                <p>
                                { t("terms_text6") }
                                </p>
                                <p>
                                { t("terms_text7") }
                                </p>

                                <b>{ t("terms_text8") }</b>
                                <p>
                                { t("terms_text9") }
                                </p>
                                <p>
                                { t("terms_text10") }
                                </p>
                                <p>
                                { t("terms_text11") }
                                </p>

                                <b>{ t("terms_text12") }</b>
                                <p>
                                { t("terms_text13") }
                                </p>
                                <p>
                                { t("terms_text14") }
                                </p>
                                <p>
                                { t("terms_text15") }
                                </p>

                                <b>{ t("terms_text16") }</b>
                                { t("terms_text17") }

                                <p>
                                { t("terms_text18") }
                                </p>
                                <p>
                                { t("terms_text19") }
                                </p>
                                <p>
                                { t("terms_text20") }
                                </p>
                                <p>
                                { t("terms_text21") }
                                </p>
                                <b>{ t("terms_text22") }</b>
                                <p>
                                { t("terms_text23") }
                                </p>
                                <p>
                                { t("terms_text24") }
                                </p>
                                <p>
                                { t("terms_text25") }
                                </p>
                                <p>
                                    { t("terms_text26") }
                                </p>
                                
                                <b>{ t("terms_text27") }</b>
                                <p>
                                { t("terms_text28") }
                                </p>

                                <b>{ t("terms_text29") }</b>
                                <p>
                                    Publisher of the site
                                    Wall Street Web
                                    Chemin J.-Ph.-de-Sauvage 37
                                    CH-1219 Chatelaine
                                    Switzerland
                                    Commercial Register of the Canton of Geneva: CH-660.1.047.015-8
                                    Company identification number: CHE-155.503.825
                                </p>
                                <b> { t("terms_text30") } </b>

                                <p>
                                    Jacky Cally
                                    Wall Street Web
                                    support@wallstreetweb.net
                                    +41 78 752 86 56
                                    Host
                                    Exoscale
                                </p>


                                <p>
                                    Boulevard de Grancy 19A
                                    1006 – Lausanne
                                    Switzerland
                                    www.exoscale.com
                                </p>

                        </PageContent>
                    </Col>
                </Row>
            </Container>

        </ContainerLandpage>
    );
}
import React from "react"; 
 
import Banner from "components/Landpage/Banner";
import HowWorks from 'components/Landpage/HowWorks'
import MoreInfos from 'components/Landpage/MoreInfos'
import CommomCases from 'components/Landpage/CommomCases'
import KnowMore from 'components/Landpage/KnowMore'
import LittleMore from 'components/Landpage/LittleMore' 

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import { IconContent, PageContent, Text, Title } from "./styled";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useI18n from "hooks/useI18n";

export default function Success(){ 
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { t } = useI18n()
 
    return ( 
        <ContainerLandpage>    
            
            <Container>
                <Row>
                    <Col>
                        <PageContent>
                            <IconContent>
                                <CheckCircleOutlineIcon color="stell" sx={{ height: 80, width: 80 }} />
                            </IconContent>
                            <Title centred>{ t("purchase_successfuly_title") }</Title>
                            <Text>{ t("purchase_successfuly_text") }</Text>
                            <Text>
                                <Button color="secondary" onClick={() => navigate("")}>{ t("purchase_successfuly_action") }</Button>
                            </Text>
                        </PageContent>
                    </Col>
                </Row>
            </Container>
         
        </ContainerLandpage>
    );
}
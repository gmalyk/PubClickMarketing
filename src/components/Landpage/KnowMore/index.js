import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 

import Item from './Item'

import {
    MoreTitle,
    MoreText,
    KnowContent
} from './styled' 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useI18n from "hooks/useI18n";

export default function KnowMore(){ 

    const { t } = useI18n()
    
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);
    const doctors = [
        {
            color:'bronze',
            title: t("homeknowmore_title1"),
            price: '89,90',
            details: [
                { text: t("homeknowmore_text1_1") },
                { text: t("homeknowmore_text1_2") },
                { text: t("homeknowmore_text1_3") },
                { text: t("homeknowmore_text1_4") },
            ],
            label: t("homeknowmore_action"),
            action: () => navigate("buy?amount=89,90")
        },
        {
            color:'silver',
            title: t("homeknowmore_title2"),
            price: '199,90',
            details: [
                { text: t("homeknowmore_text2_1") },
                { text: t("homeknowmore_text2_2") },
                { text: t("homeknowmore_text2_3") },
                { text: t("homeknowmore_text2_4"), bold:true },
            ],
            label: t("homeknowmore_action"),
            action: () => navigate("buy?amount=199,90")
        },
        {
            color:'gold',
            title: t("homeknowmore_title3"),
            price: '399,90',
            details: [
                { text: t("homeknowmore_text3_1") },
                { text: t("homeknowmore_text3_2"), bold:true },
                { text: t("homeknowmore_text3_3"), bold:true },
                { text: t("homeknowmore_text3_4"), bold:true },
            ],
            label: t("homeknowmore_action"),
            action: () => navigate("buy?amount=399,90")
        } 
    ]

    const options = [
        {
            color:'stell',
            title: t("homeknowmore_options_title"),
            subtitle: t("homeknowmore_options_text"),
            details: [  ],
            label: t("homeknowmore_options_action"),
            action: () => navigate("buy?amount=59,90")
        }
    ]

    
 
    return ( 
        <> 
            <KnowContent id="packs">
                <Container>
                    <Row>
                        <Col>
                            <MoreTitle>{ t("homeknowmore_title") }</MoreTitle>
                            <MoreText>{ t("homeknowmore_text") }</MoreText>
                        </Col>
                    </Row> 
                    <Row>
                        {
                            doctors.map((item, key) => 
                                <Col key={key} md={{ size:4 }}> 
                                    <Item {...item} />
                                </Col>
                            )
                        }
                    </Row>  
                    <Row>
                        <Col md={{ size:3 }} />
                        {
                            options.map((item, key) => 
                                <Col key={key} md={{ size:6 }}> 
                                    <Item {...item} />
                                </Col>
                            )
                        }
                    </Row>  
                </Container> 
            </KnowContent>
        </>
    );
}
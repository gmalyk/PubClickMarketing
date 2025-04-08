import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';

import {
    FooterContainer,
    FooterLogo,
    FooterTitle,
    FooterText,
    FooterLink,
    FooterLinkImage,
    FooterSection,
    FooterPhoneContent,
    FooterPhoneIcon,
    FooterCopyright,
    FooterMailIcon,
    FooterContent,
    FooterPhoneContainer,
    FooterCopy,
    FooterActionsContent
} from './styled' 

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from "components/Form/Button";
import useI18n from "hooks/useI18n";

export default function Footer(){ 
 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { t } = useI18n()

    return ( 
        <> 
            <FooterContainer id="contact">
                <FooterContent>
                    <Container>
                                {/* <FooterLogo /> */}
                                <FooterTitle>{ t("footer_title") }</FooterTitle>
                                <FooterText dangerouslySetInnerHTML={{ __html:t("footer_text") }} />
                                
                                
                                <FooterPhoneContainer>
                                    <FooterPhoneContent>
                                        <PhoneIphoneIcon color="white" sx={{ width: 50, height: 80 }} />
                                        <FooterLink>+41 78 777 99 99</FooterLink>
                                    </FooterPhoneContent> 
                                    <FooterPhoneContent>
                                        <MailOutlineIcon color="white" sx={{ width: 50, height: 80 }} />
                                        <FooterLink>support@pubclickmarketing.com</FooterLink>
                                    </FooterPhoneContent> 
                                </FooterPhoneContainer>
                                
                                <FooterCopy>
                                    © PubClickMarketing { new Date().getFullYear() }
                                </FooterCopy>

                                <FooterActionsContent>
                                    <a href="terms"> { t("footer_link1") } </a>
                                        /   
                                    <a href="policy"> { t("footer_link2") } </a>
                                </FooterActionsContent>
                                
                    </Container>
                </FooterContent>
            </FooterContainer>
        </>
    );
}
import React, { useState } from "react"; 

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

// Import modal components
import TermsModal from 'components/Modals/Terms';
import PolicyModal from 'components/Modals/Policy';

export default function Footer(){ 
 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);
    const { t } = useI18n();
    
    // State for modals
    const [termsModalOpen, setTermsModalOpen] = useState(false);
    const [policyModalOpen, setPolicyModalOpen] = useState(false);
    
    // Toggle functions for modals
    const toggleTermsModal = () => setTermsModalOpen(!termsModalOpen);
    const togglePolicyModal = () => setPolicyModalOpen(!policyModalOpen);

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
                                        <FooterLink>0798246788</FooterLink>
                                    </FooterPhoneContent> 
                                    <FooterPhoneContent>
                                        <MailOutlineIcon color="white" sx={{ width: 50, height: 80 }} />
                                        <FooterLink>contact@publick-marketing.com</FooterLink>
                                    </FooterPhoneContent> 
                                </FooterPhoneContainer>
                                
                                <FooterCopy>
                                    © PubClickMarketing { new Date().getFullYear() }
                                </FooterCopy>

                                <FooterActionsContent>
                                    <a href="#" onClick={(e) => { e.preventDefault(); toggleTermsModal(); }}> 
                                        { t("footer_link1") } 
                                    </a>
                                    /   
                                    <a href="#" onClick={(e) => { e.preventDefault(); togglePolicyModal(); }}> 
                                        { t("footer_link2") } 
                                    </a>
                                </FooterActionsContent>
                                
                    </Container>
                </FooterContent>
            </FooterContainer>
            
            {/* Modals */}
            <TermsModal isOpen={termsModalOpen} toggle={toggleTermsModal} />
            <PolicyModal isOpen={policyModalOpen} toggle={togglePolicyModal} />
        </>
    );
}
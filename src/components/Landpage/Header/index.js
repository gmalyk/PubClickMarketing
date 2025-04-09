import React, { useState } from 'react'

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';
 
import { 
    HeaderContainer,
    RowCenter,
    RowEnd,
    AppLogo,
    HeaderLeftMenu,
    HeaderMenuItem,
    HeaderMobile,
    MenuIcon,
    HeaderMobileMenu,
    HeaderMobileItem,
    HeaderText
} from './styled';

import { 
    Touch,
    ButtonWhite
} from 'ui/styled';
import Button from 'components/Form/Button';
import { scrollToSection } from 'utils';
import useI18n from 'hooks/useI18n';

export default function Header({ home }){
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const history = useHistory();

    const navigate = to => history.push(`/${ to }`);

    const { t } = useI18n()

    const logoAction = () => {
        if(!home){
            navigate('') ; 
        } else {
            scrollToSection('home')
        }
    }

    const options = {
        left:[
            // { title:'Inicio', active:true, action:() => navigate('') },
            // { title:'Sobre', action:() => navigate('about') }
        ],
        right: !home ? [
            { title:t("header_link1"), action:() => navigate('') },
        ] :
        [ 
            { title:t("header_link1"), action:() => scrollToSection('home') },
            { title:t("header_link2"), action:() => scrollToSection('solution') },
            { title:t("header_link3"), action:() => scrollToSection('services') },
            { title:t("header_link4"), action:() => scrollToSection('packs') },
            { title:t("header_link5"), action:() => scrollToSection('contact') },
        ]
    }
    
    return (
        <>
            <HeaderContainer>
                <Container >
                    <Row>
                        <Col md={{ size:7 }}> 
                            <RowCenter>
                                <img 
                                    src="/images/Logo.png" 
                                    alt="PubClick Marketing Logo" 
                                    style={{ height: '55px', cursor: 'pointer', marginRight: '20px' }}
                                    onClick={logoAction}
                                />
                                <HeaderLeftMenu>
                                    {
                                        options?.left?.map((item, key) => item.button ? 
                                            <Button key={key} nospace outline={item.outline} onClick={item.action}>{ item.title }</Button> 
                                                :
                                            <HeaderMenuItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                        )
                                    } 
                                </HeaderLeftMenu>
                                <HeaderMobile>
                                    <Touch className="touch" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                        <MenuIcon />
                                    </Touch>
                                    {
                                        mobileMenuOpen ? 
                                            <HeaderMobileMenu>
                                                {
                                                    [...options?.left, ...options?.right]?.map((item, key) => item.button ? 
                                                        <HeaderMobileItem key={key} centred> 
                                                            <Button nospace outline={item.outline} nomargin onClick={item.action}>{ item.title }</Button> 
                                                        </HeaderMobileItem>
                                                            :
                                                        <HeaderMobileItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMobileItem>
                                                    )
                                                }  
                                            </HeaderMobileMenu>
                                        : null
                                    }
                                </HeaderMobile>
                            </RowCenter> 
                        </Col>
                        <Col md={{ size:5 }}>
                            <RowEnd>
                                {
                                    options?.right?.map((item, key) => item.button ? 
                                        <Button key={key} nospace outline={item.outline} onClick={item.action}>{ item.title }</Button> 
                                            :
                                        <HeaderMenuItem key={key} className={item.active ? "active" : ""} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                    )
                                } 
                            </RowEnd>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
        </>
    )
}
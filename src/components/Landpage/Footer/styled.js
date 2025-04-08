import styled from 'styled-components' 

export const FooterContainer = styled.div.attrs({ 
})`          
    background: ${ props => props.theme.palette.primary.main } url(/images/banner3.jpg) no-repeat bottom +20% center / cover; 
`;

export const FooterContent = styled.div.attrs({ 
})`          
    background: ${ props => props.theme.palette.colors.shadowness }; 
    padding: 60px 0 18px;
`;
    
export const FooterLogo = styled.img.attrs({ 
    src:'/logo1024.png'
})`          
    width: 184px;
    margin-bottom: 24px;
`;
   
export const FooterTitle = styled.div.attrs({  
})`          
    font-size: 32px;
    font-weight: 600;
    color: ${ props => props.theme.palette.colors.white };
    margin-bottom: 10px;
    text-align: center;
`;

   
export const FooterText = styled.div.attrs({  
})`          
    font-size: 20px;
    color: ${ props => props.theme.palette.colors.white };
    text-align: center;
`;
   
export const FooterLink = styled.div.attrs({  
})`          
    font-size: 20px;
    color: ${ props => props.theme.palette.colors.white };
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const FooterLinkImage = styled.img.attrs({  
})`          
    height: 22px;
    width: 22px;
    margin-right: 16px;
`;
   
export const FooterSection = styled.div.attrs({  
})`           
    margin-top: 64px;
`;
    
export const FooterPhoneContent = styled.div.attrs({  
})`           
    display: flex;
    flex-direction: column;
    margin-top: 4px;
    align-items: center;
`;
    
export const FooterPhoneIcon = styled.img.attrs({  
    src:'/icons/phone.svg'
})`           
    width: 24px;
    margin-right: 20px;
`;
    
export const FooterMailIcon = styled.img.attrs({  
    src:'/icons/mail.svg'
})`           
    width: 24px;
    margin-right: 20px;
`;
   
export const FooterCopyright = styled.div.attrs({  
})`          
    font-size: 20px;
    font-weight: 300;
    color: ${ props => props.theme.palette.colors.white };
    margin: 60px 0 0;
    text-align: center;
`;
   
export const FooterPhoneContainer = styled.div.attrs({  
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    gap: 32px;
    @media(max-width: 767px){
        flex-wrap: wrap;
    }
`;
   
export const FooterCopy = styled.div.attrs({  
})`          
    border-top: .5px solid ${ props => props.theme.palette.colors.whiteness };
    color: ${ props => props.theme.palette.colors.white };
    text-align:center;
    padding: 18px 0 0 ;
`;
   
export const FooterActionsContent = styled.div.attrs({  
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ props => props.theme.palette.colors.white }; 
    padding: 32px 0 0;
    gap: 6px;
    a{
        color: ${ props => props.theme.palette.colors.white }; 
    }
`;
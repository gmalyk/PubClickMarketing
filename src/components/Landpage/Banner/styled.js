import styled from 'styled-components' 

export const BannerImage = styled.div.attrs({ 
})`           
    margin-top: 73px;
    position: relative;
    min-height: calc(100vh - 73px);
    width: 100%;
    background: white;
    overflow: hidden;
`; 

export const BannerOut = styled.div.attrs({ 
})`            
    display: none;
`; 

export const BannerContent = styled.div.attrs({ 
})`           
    min-height: calc(100vh - 73px);
    width: 100%; 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`; 

export const BannerCard = styled.div.attrs({ 
})`           
`;

export const PhoneImageContainer = styled.div.attrs({
})`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    pointer-events: none;
    
    @media (max-width: 991px) {
        opacity: 0.3;
        right: -100px;
    }
    
    @media (max-width: 767px) {
        display: none;
    }
`;

export const PhoneImage = styled.img.attrs({
    src: '/images/iphone.png',
    alt: 'PubClick Marketing Mobile App'
})`
    height: 100%;
    max-height: 700px;
    object-fit: contain;
`; 
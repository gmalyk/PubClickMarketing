import styled from 'styled-components' 

export const BannerImage = styled.div.attrs({ 
})`           
    margin-top: 73px;
    position: relative;
    min-height: calc(100vh - 73px);
    width: 100%;
    background: url('/images/orangeBackground.jpg') no-repeat center center;
    background-size: cover;
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
    position: relative;
    height: 75vh;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    
    &.left-side {
        left: auto;
        right: auto;
    }
    
    @media (max-width: 991px) {
        height: 60vh;
        max-height: 500px;
    }
    
    @media (max-width: 767px) {
        height: 50vh;
        max-height: 400px;
    }
`;

export const PhoneImage = styled.img.attrs({
    src: '/images/iphone.png',
    alt: 'PubClick Marketing Mobile App'
})`
    height: 100%;
    max-height: 600px;
    object-fit: contain;
    
    @media (max-width: 991px) {
        max-height: 500px;
    }
    
    @media (max-width: 767px) {
        max-height: 400px;
    }
`; 
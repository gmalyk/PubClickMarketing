import styled from 'styled-components' 

export const MoreInfosItemContent = styled.div.attrs({ 
})`    
    margin: 0 auto;
    padding: 25px;
    border-radius: 8px; 
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: flex-start;
    width: 95%;
    height: 100%;
    
    @media (max-width: 767px) {
        flex-direction: column;
        text-align: center;
        padding: 20px 15px;
        margin-bottom: 0;
        width: 100%;
    }
`;
 
export const MoreInfosImage = styled.div.attrs({ 
})`    
    height: 127px;
    border-radius: 23px 23px 0 0; 
    background: rgba(255,255,255,.1) url(${props => props.image}) no-repeat center center / cover;
`;
 
export const MoreInfosItemSection = styled.div.attrs({
})`
    flex: 1;
    margin-left: 20px;
    
    @media (max-width: 767px) {
        margin-left: 0;
        margin-top: 15px;
        width: 100%;
    }
`;
 
export const MoreInfosItemText = styled.div.attrs({ 
})`    
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin: 0 0 10px;
    
    ${
        p => p.text ? `
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #666;
            margin: 0;
            line-height: 1.5;
            
            @media (max-width: 767px) {
                text-align: center;
            }
        ` : ``
    }
`;
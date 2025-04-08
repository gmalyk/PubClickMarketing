import styled from 'styled-components' 
 
 
export const KnowItem = styled.div.attrs({ 
})`           
    display: flex;
    background: ${ props => props.theme.palette.colors.white };
    margin-top: 30px;
    // border-radius: 5px;
    // box-shadow: 0px 2px 6px ${ props => props.theme.palette.colors.shadow };
    border: .5px solid ${ props => props.theme.palette.colors?.[props?.color||'black']  };
`; 
 
export const KnowItemImage = styled.div.attrs({ 
})`   
    height: 205px;
    width: 200px;
    min-width: 80px;
    // border-bottom-right-radius: 43px; 
    overflow: hidden;        
    ${ props => props.image ? `background: ${ props.theme.palette.colors.lightshadow } url(${ props.image }) center center / cover;` : `` }
`; 
 
export const KnowItemContent = styled.div.attrs({ 
})`
    width: 100%;
`; 
 
export const KnowItemContentTitle = styled.div.attrs({ 
})`   
    background: ${ props => props.theme.palette.colors?.[props?.color||'black'] };
    color: white;
    font-size: 24px;
    font-weight: 600;   
    width: 100%;
    padding: 12px;
    text-align: center;
`; 
export const KnowItemContentText = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 16px; 
    text-align: center;
    b {
        font-size: 32px; 
    }
    small {
        font-size: 10px; 
    }
`; 
export const KnowItemContentRate = styled.div.attrs({ 
})`
    margin: 6px 0;
`; 
export const KnowItemContentRateText = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.grey };
    font-size: 18px; 

    display: flex;
    align-items: center;
    gap: 8px;

    ${
        p => p.bold ? `
            font-weight: bold;
        ` : ``
    }
    
    &:before{
        content: "•";
        font-size: 32px;
        color: ${ props => props.theme.palette.colors?.[props?.color||'black'] };
    }
`; 
export const KnowItemContentRateIcon = styled.img.attrs(props => ({ 
    src: `/icons/star-${ props.rated ? `on` : `off` }.svg`
}))`   
    margin-right: 8px ;
`; 
export const KnowItemContentDescription = styled.div.attrs({ 
})`   
    color: ${ props => props.theme.palette.colors.lightgrey };
    font-size: 14px;
    text-transform: uppercase;
`; 
export const KnowItemContentAvailable = styled.div.attrs({ 
})`   
    margin-top: 40px;
    color: ${ props => props.theme.palette.secondary.main };
    font-size: 14px;
`; 


export const KnowItemActions = styled.div.attrs({ 
})`   
    padding: 4px 12px 18px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const KnowItemBody = styled.div.attrs({ 
})`   
    padding: 18px; 
`; 
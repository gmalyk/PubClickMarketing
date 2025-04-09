import styled from 'styled-components' 

export const Content = styled.div.attrs({ 
})`          
    overflow:hidden;
`;
 

export const PageContent = styled.div.attrs({ 
})`          
    padding: 105px 0 60px;
    font-size: 16px;
    line-height: 1.5;
    max-width: 800px;
    margin: 0 auto;
    color: #333;
    
    h1 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
        color: #000;
    }
    
    .subtitle {
        text-align: center;
        margin-bottom: 30px;
        font-size: 18px;
        color: #555;
    }
    
    h2 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 15px;
        color: #000;
    }
    
    .policy-section {
        margin-bottom: 30px;
        padding-bottom: 20px;
        
        &:not(:last-child) {
            border-bottom: 1px solid #eee;
        }
    }
    
    p {
        margin-bottom: 15px;
    }
    
    ul {
        padding-left: 20px;
        margin-bottom: 15px;
        margin-top: 15px;
        
        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 15px;
            list-style-type: none;
            
            &:before {
                content: "•";
                position: absolute;
                left: 0;
                color: #555;
            }
        }
    }
    
    strong {
        font-weight: 600;
        display: inline-block;
        margin-bottom: 5px;
    }
    
    a {
        color: #0066cc;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
    
    .company-details {
        margin-top: 40px;
        
        p {
            margin-bottom: 20px;
        }
    }
`;
 
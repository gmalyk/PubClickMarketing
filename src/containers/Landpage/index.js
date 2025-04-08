import React, { useEffect } from "react";  

import Header from 'components/Landpage/Header'
import Footer from 'components/Landpage/Footer' 

import { 
    Content
} from "./styled"; 
import { ThemedComponent } from "ui/theme";

export default function ContainerLandpage({ children, home }){ 
    useEffect(() => { window.scrollTo(0,0) ;},[])
    return ( 
        <ThemedComponent>
            <Content>
                <Header home={home} />
                    { children }
                { !home ? null : <Footer /> }
            </Content>
        </ThemedComponent>
    );
}
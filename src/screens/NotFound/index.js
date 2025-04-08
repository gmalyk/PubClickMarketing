import React from "react";  

import {  
    ContentBody,
    ContentAnimation
} from "./styled";

import { 
    Animation
} from "ui/styled";

import ContainerLandpage from "containers/Landpage";

export default function NotFound(){ 
 
    return ( 
        <ContainerLandpage> 
            <ContentBody>
                <ContentAnimation>
                    {/* <Animation animationData={require('assets/lotties/404.json')}  /> */}
                    Page not found
                </ContentAnimation>
            </ContentBody>  
        </ContainerLandpage>
    );
}
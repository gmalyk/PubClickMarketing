import React from "react"; 

import {
    MoreInfosItemContent,
    MoreInfosImage,
    MoreInfosItemText,
    MoreInfosItemSection
} from './styled' 

export default function MoreInfosItem(props){ 

    return ( 
        <> 
            <MoreInfosItemContent secondary={props.secondary}>
                <div className="icon-container">
                    { props.icon }
                </div>
                <MoreInfosItemSection>
                    <MoreInfosItemText>
                        { props.title }
                    </MoreInfosItemText>
                    <MoreInfosItemText text>
                        { props.text }
                    </MoreInfosItemText>
                </MoreInfosItemSection>
            </MoreInfosItemContent> 
        </>
    );
}
import React from "react";  
import { 
    HowWorkStep,
    HowWorkStepNumber,
    HowWorkStepTitle,
    HowWorkStepLine,
    HowWorkStepText,
    IcnContent,
    IconIco
} from "./styled"; 

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function HowWorksItem(props){ 
    return ( 
        <> 
            <HowWorkStep>
                {/* <HowWorkStepNumber variant={props.variant}>{props.number}</HowWorkStepNumber> */}

                    <IcnContent>
                        <IconIco>
                            { props.icon }
                        </IconIco>
                    </IcnContent>
                

                <HowWorkStepTitle>{props.subtitle}</HowWorkStepTitle>
                {/* <HowWorkStepLine /> */}
                <HowWorkStepText dangerouslySetInnerHTML={{ __html:props.text }} />
            </HowWorkStep> 
        </>
    );
}
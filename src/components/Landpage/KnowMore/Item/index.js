import React from "react"; 

import {
    KnowItem,
    KnowItemImage,
    KnowItemContent,

    KnowItemContentTitle,
    KnowItemContentText,
    KnowItemContentRate,
    KnowItemContentRateText,

    KnowItemBody,
    KnowItemActions

} from './styled'
import Button from "components/Form/Button";

export default function KnowMoreItem(props){ 
 
    return ( 
        <> 
            <KnowItem color={props.color}>
                {/* <KnowItemImage image={ props.image } /> */}
                <KnowItemContent>
                    <KnowItemContentTitle color={props.color}>{ props.title }</KnowItemContentTitle>
                    <KnowItemBody>
                        { props.price ? <KnowItemContentText><b>{ props.price }</b> <small>CHF</small> / month </KnowItemContentText> : null }
                        { props.subtitle ? <KnowItemContentText>{ props.subtitle }</KnowItemContentText> : null }
                        <KnowItemContentRate>
                            {
                                props.details?.map((m, k) => 
                                    <KnowItemContentRateText color={props.color} key={k} bold={m?.bold}>{ m.text }</KnowItemContentRateText>
                                )
                            }
                        </KnowItemContentRate>
                    </KnowItemBody>
                    <KnowItemActions>
                        <div>
                            <Button onClick={props.action} color={props.color}>{ props.label }</Button>
                        </div>
                    </KnowItemActions>
                </KnowItemContent>
            </KnowItem> 
        </>
    );
}
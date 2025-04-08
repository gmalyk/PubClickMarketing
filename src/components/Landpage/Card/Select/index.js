import React from "react";  
 
import { 
    CardBanner,
    CardBannerTitle,
    CardBannerText, 
    CardBannerDecoration
} from "./styled";

import Button from "components/Form/Button";
import { scrollToSection } from "utils";
import useI18n from "hooks/useI18n";

export default function CardSelect(){ 

    const { t } = useI18n()

    return ( 
        <> 
            <CardBanner>
                <CardBannerTitle>Pub<b>Click</b> Marketing</CardBannerTitle>
                <CardBannerDecoration />
                <CardBannerText>{ t("homebanner_title") }</CardBannerText> 
                <div>
                    <Button color="secondary" onClick={() => scrollToSection('solution')}>
                        { t("homebanner_action") }
                    </Button>
                </div>
            </CardBanner> 
        </> 
    );
}
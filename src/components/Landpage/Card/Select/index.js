import React from "react";  
 
import { 
    CardBanner,
    CardBannerTitle,
    CardBannerText, 
    CardBannerDecoration,
    CardBannerLogo,
    CardButtonWrapper
} from "./styled";

import Button from "components/Form/Button";
import { scrollToSection } from "utils";
import useI18n from "hooks/useI18n";

export default function CardSelect(){ 

    const { t } = useI18n()

    return ( 
        <> 
            <CardBanner>
                <CardBannerTitle>
                    A complete and strategic solution for independent professionals
                </CardBannerTitle>
                <CardBannerText>
                PubClick Marketing has been supporting independent professionals for several years in developing their online presence. Thanks to our expertise in branding, digital advertising, and conversion strategy, we turn their visibility into concrete, measurable results.
                </CardBannerText>
                <CardButtonWrapper>
                    <Button color="secondary" onClick={() => scrollToSection('solution')}>
                        { t("homebanner_action") }
                    </Button>
                </CardButtonWrapper>
            </CardBanner> 
        </> 
    );
}
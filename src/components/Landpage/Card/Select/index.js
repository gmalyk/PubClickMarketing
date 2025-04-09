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
                <CardBannerLogo />
                <CardBannerTitle>
                    A complete and strategic solution for independent professionals
                </CardBannerTitle>
                <CardBannerText>
                    PubClick Marketing accompagne depuis plusieurs années les indépendants dans le développement de leur présence en ligne. Grâce à notre expertise en branding, publicité digitale et stratégie de conversion, nous transformons leur visibilité en résultats concrets et mesurables.
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
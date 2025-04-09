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
                <CardButtonWrapper>
                    <Button color="secondary" onClick={() => scrollToSection('solution')}>
                        { t("homebanner_action") }
                    </Button>
                </CardButtonWrapper>
            </CardBanner> 
        </> 
    );
}
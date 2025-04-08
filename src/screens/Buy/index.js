import React, { useEffect, useMemo, useRef, useState } from "react"; 
 
import Banner from "components/Landpage/Banner";
import HowWorks from 'components/Landpage/HowWorks'
import MoreInfos from 'components/Landpage/MoreInfos'
import CommomCases from 'components/Landpage/CommomCases'
import KnowMore from 'components/Landpage/KnowMore'
import LittleMore from 'components/Landpage/LittleMore' 

import ContainerLandpage from "containers/Landpage";
import { Col, Container, Row } from "reactstrap";
import { BodyActions, BodyForm, BodyTerms, BodyTermsLink, HeaderContent, HeaderImage, HeaderInfos, HeaderInfosText, HeaderInfosTitle, PageContent } from "./styled";
import Button from "components/Form/Button";
import Core from "components/Form/Core";
import Check from "components/Form/Check";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Create } from "services/core";
import { toast } from "react-toastify";
import { exposeStrapiError } from "utils";
import useI18n from "hooks/useI18n";

export default function Buy(){ 

    const history = useHistory();
    const urlParams = new URLSearchParams(window.location.search);

    const navigate = to => history.push(`/${ to }`);

    const { t } = useI18n()

    const formRef = useRef()
    const [ accepted, setAccepted ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const [register, setRegister] = useState({})

    const formItems = useMemo(() => [
        {
            ref: 'firstname',
            placeholder: t("buy_form_firstname"),
            required: true,
            half: true,
            onBlur: () => updateRegister()
        },
        {
            ref: 'lastname',
            placeholder: t("buy_form_lastname"),
            required: true,
            half: true,
            onBlur: () => updateRegister()
        }, 
        {
            ref: 'email',
            placeholder: t("buy_form_email"),
            required: true,
            half: true,
            onBlur: () => updateRegister()
        }, 
        {
            ref: 'phone',
            placeholder: t("buy_form_phone"),
            half: true,
            onBlur: () => updateRegister()
        }, 
        {
            ref: 'company',
            placeholder: t("buy_form_company"),
            full: true,
            onBlur: () => updateRegister()
        }, 
        {
            ref: 'url',
            placeholder: t("buy_form_url"),
            full: true,
            onBlur: () => updateRegister()
        }, 
        {
            type: 'money',
            ref: 'amount',
            placeholder: t("buy_form_amount"),
            disabled: true,
            required: true,
            full: true,
            onBlur: () => updateRegister()
        }
    ], [])

    const updateRegister = () => {
        const form = formRef?.current?.getForm(true)
        setRegister({ ...register, ...form })
    }

    const save = async () => {

        if(!accepted){
            toast.error( t("buy_form_validation") );
            return;
        }

        const form = formRef?.current?.getForm()
        if(!form || loading) return ;
        setLoading(true)
        const payload = {
            ...form
        }

        const amount = parseFloat(`${payload?.amount}`?.replace(",", "."))
        
        const result = await Create("stripe", {
            ...payload,
            name: "Dexsire Premium",
            amount: amount,
            price: parseInt(amount * 100)
        })
        
        setLoading(false)
        if(result && !exposeStrapiError(result) && result?.url){
            window.location.href = result?.url
        }

    }

    useEffect(() => {
        setRegister({ amount: urlParams.get('amount') })
    }, [ ])

    return ( 
        <ContainerLandpage>    
            
            <Container>
                <HeaderContent>
                    <HeaderImage />
                    <HeaderInfos>
                        <HeaderInfosTitle>{ t("buy_form_title") }</HeaderInfosTitle>
                        <HeaderInfosText>
                            <p>{ t("buy_form_text1") }</p>
                            <p>{ t("buy_form_text2") }</p>
                        </HeaderInfosText>
                    </HeaderInfos>
                </HeaderContent>
                <BodyForm>
                    <Core ref={formRef} formItems={formItems} register={register} />

                    <BodyTerms>
                        <Check label={`${ t("buy_terms_label") } `} checked={accepted} onChange={() => setAccepted(!accepted)} />
                        <BodyTermsLink onClick={() => navigate("policy")}>{ t("buy_terms_text") }</BodyTermsLink> *
                    </BodyTerms>
                    <BodyActions>
                        <Button loading={loading} color={"secondary"} onClick={save}>{ t("buy_action") }</Button>
                    </BodyActions>
                </BodyForm>
            </Container>
         
        </ContainerLandpage>
    );
}
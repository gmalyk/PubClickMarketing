import React from 'react';
import Modal from 'components/Modal';
import useI18n from 'hooks/useI18n';

const PolicyModal = ({ isOpen, toggle }) => {
  const { t } = useI18n();

  return (
    <Modal 
      isOpen={isOpen} 
      toggle={toggle} 
      title={t('policy_title')}
    >
      <div className="modal-content-wrapper">
        <p className="subtitle">pubclick-marketing.com</p>
        
        <div className="policy-section">
          <h2>{t('preamble') || "Preamble"}</h2>
          <p>{t('policy_text1')}</p>
          <p>{t('policy_text2')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text3')}</h2>
          <p>{t('policy_text4')}</p>
          <p>{t('policy_text5')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text6')}</h2>
          <p>{t('policy_text7')}</p>
          <p>{t('policy_text8')}</p>
          <p>{t('policy_text9')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text10')}</h2>
          <p>{t('policy_text11')}</p>
          <p>{t('payments_can_be_made') || "Payments can be made by:"}</p>
          <ul>
            <li>{t('payment_method_card') || "Credit card via a secure solution (SSL)"}</li>
            <li>{t('payment_method_twint') || "TWINT"}</li>
            <li>{t('payment_method_postfinance') || "PostFinance (if available)"}</li>
            <li>{t('payment_method_bank') || "Bank transfer"}</li>
          </ul>
          <p>{t('policy_text13')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text14')}</h2>
          <p>{t('policy_text15')}</p>
          <p>{t('policy_text16')}</p>
          <p>{t('policy_text17')}</p>
          <p>{t('policy_text18')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text19')}</h2>
          <p>{t('policy_text20')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text21')}</h2>
          <p>{t('contract_termination') || "The contract may be terminated by either party:"}</p>
          <ul>
            <li>{t('termination_recurring') || "At any time, for recurring services, with 7 days' notice before the next monthly due date."}</li>
            <li>{t('termination_breach') || "By PubClick Marketing, without notice, in case of non-compliance with these Terms and Conditions or abusive, fraudulent behavior or behavior contrary to the company's image."}</li>
          </ul>
          <p>{t('policy_text23')}</p>
        </div>

        <div className="policy-section">
          <h2>{t('policy_text24')}</h2>
          <p>{t('policy_text25')}</p>
          <p>{t('policy_text26')}</p>
          <p>{t('policy_text27')}</p>
        </div>

        <div className="policy-section company-details">
          <h2>{t('company_details')}</h2>
          <p>
            <strong>{t('site_publisher')}</strong><br />
            Luxeo Sàrl<br />
            Route des deux villages 57C<br />
            1806 St-Légier<br />
            Suisse<br />
            IDE : CHE-254.629.393<br />
            Contact@pubclick-marketing.com
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PolicyModal; 
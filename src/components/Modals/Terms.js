import React from 'react';
import Modal from 'components/Modal';
import useI18n from 'hooks/useI18n';

const TermsModal = ({ isOpen, toggle }) => {
  const { t } = useI18n();

  return (
    <Modal 
      isOpen={isOpen} 
      toggle={toggle} 
      title={t('terms_title')}
    >
      <div className="modal-content-wrapper">
        <p className="subtitle">pubclick-marketing.com</p>
        
        <div className="terms-section">
          <h2>1. {t('terms_text4')}</h2>
          <p>{t('terms_text1')}</p>
          <p>{t('terms_text2')}</p>
          <p>{t('terms_text3')}</p>
        </div>

        <div className="terms-section">
          <h2>2. {t('terms_text4')}</h2>
          <p>{t('terms_text5')}</p>
          
          <p>{t('terms_text6')}</p>
          <ul>
            <li>{t('terms_text7')}</li>
          </ul>
          
          <p>{t('terms_text8')}</p>
        </div>

        <div className="terms-section">
          <h2>3. {t('terms_text9')}</h2>
          <p>{t('terms_text10')}</p>
          
          <p>{t('terms_text11')}</p>
          <ul>
            <li>{t('defamatory_text') || "defamatory, discriminatory, abusive or pornographic content;"}</li>
            <li>{t('illegal_content_text') || "publication of illegal content or content not aligned with the platform's professional objectives."}</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. {t('terms_text12')}</h2>
          <p>{t('terms_text13')}</p>
          <p>{t('terms_text14')}</p>
          <p>{t('terms_text15')}</p>
        </div>

        <div className="terms-section">
          <h2>5. {t('terms_text16')}</h2>
          <p>{t('terms_text17')}</p>
          <p>{t('terms_text18')}</p>
        </div>

        <div className="terms-section">
          <h2>6. {t('terms_text19')}</h2>
          <p>{t('terms_text20')}</p>
          <p>{t('terms_text21')}</p>
          <p>{t('terms_text22')}</p>
          <p>{t('terms_text23')}</p>
        </div>

        <div className="terms-section">
          <h2>7. {t('terms_text24')}</h2>
          <p>{t('terms_text25')}</p>
          <p>{t('terms_text26')}</p>
        </div>

        <div className="terms-section">
          <h2>8. {t('terms_text27')}</h2>
          <p>{t('terms_text28')}</p>
          <p>{t('terms_text29')}</p>
        </div>

        <div className="terms-section legal-notice">
          <h2>{t('legal_notice') || "Legal Notice"}</h2>
          <p>
            <strong>{t('site_publisher') || "Publisher of the site"}</strong><br />
            Luxeo Sàrl<br />
            Route des deux villages 57C<br />
            1806 St-Légier<br />
            Suisse<br />
            IDE : CHE-254.629.393<br />
            Contact@pubclick-marketing.com
          </p>
          <p>
            <strong>{t('hosting_provider') || "Hosting provider"}</strong><br />
            Infomaniak Network SA<br />
            Rue Eugène-Marziano 25,<br />
            1227 Les Acacias – Genève, Suisse<br />
            <a href="https://www.infomaniak.com" target="_blank" rel="noopener noreferrer">www.infomaniak.com</a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal; 
import { useTranslation } from 'react-i18next';
import err from '../assets/ErrorImg.svg';

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className="h-100" id="err404">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">{t('logo')}</a>
          </div>
        </nav>
        <div className="text-center">
          <img
            className="img-fluid h-25"
            src={err}
            alt="Page not found"
          />
          <h1 className="h4 text-muted">
            {t('404.error')}
          </h1>
          <p className="text-muted">
            {t('404.message')}
            <a href="/">{t('404.main')}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
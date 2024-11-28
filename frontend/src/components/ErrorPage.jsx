import err from '../assets/ErrorImg.svg';
const ErrorPage = () => {
  return (
    <div className="h-100" id="err404">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">{'Hexlet Chat'}</a>
          </div>
        </nav>
        <div className="text-center">
          <img
            className="img-fluid h-25"
            style={{ minHeight: '30vh', minWidth: '50vh' }}
            src={err}
            alt="Page not found"
          />
          <h1 className="h4 text-muted">
            {'Страница не найдена'}
          </h1>
          <p className="text-muted">
            {'Но вы можете перейти '}
            <a href="/">{'на главную страницу'}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
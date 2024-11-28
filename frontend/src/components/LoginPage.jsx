import { useFormik } from 'formik';
import {
  Form, Button, FloatingLabel, Card,
} from 'react-bootstrap';
import logo from '../assets/avatar.jpg';
import routes from '../routes.js';

const PageLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
  });
  return (
    <div className="h-100" id="login">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href={routes.pages.loginPage()}>{'Hexlet Chat'}</a>
          </div>
        </nav>
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-content-center h-100">
            <div className="col-12 col-md-8 col-xxl-6">
              <Card className="shadow-sm">
                <Card.Body className="row p-5">
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <Card.Img
                      className="rounded-circle"
                      style={{ maxHeight: '28vh', maxWidth: '28vh' }}
                      src={logo}
                      alt="Войти"
                    />
                  </div>
                  <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-md-0">
                    <h1 className="text-center mb-4">{'Войти'}</h1>
                    <Form.Group>
                      <FloatingLabel
                        controlId="username"
                        label={'Ваш ник'}
                        className="mb-3"
                      >
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          autoComplete="username"
                          placeholder={'Ваш ник'}
                          type="username"
                          name="username"
                          required
                          autoFocus
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                      <FloatingLabel className="mb-4" controlId="password" label={'Пароль'}>
                        <Form.Control
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          autoComplete="current-password"
                          placeholder={'Пароль'}
                          type="password"
                          name="password"
                          required
                        />
                        <Form.Control.Feedback tooltip type="invalid">
                          <small>{'Неверные имя пользователя или пароль'}</small>
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Button
                      className="w-100 mb-3"
                      variant="outline-primary"
                      type="submit"
                    >
                      {'Войти'}
                    </Button>
                  </Form>
                </Card.Body>
                <Card.Footer className="p-4">
                  <div className="text-center">
                    <span>{'Нет аккаунта? '}</span>
                    <a href="/signup">{'Регистрация'}</a>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
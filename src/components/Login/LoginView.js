import React from 'react'
import { Link } from 'react-router-dom'

function LoginView(props) {
  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');

  return (
    <div className="container mb-5">
      {/* <!-- Login Form Card Starts --> */}
      <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width: "25rem"}}>
        <div className="card-body">
          <h4 className={`card-title ${rtl}`}>{t('login.title')}</h4>
          {/* <!-- Login Form Start --> */}
          <form className="needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
            <div className="form-group">
              <label htmlFor="userEmail" className={`${rtl}`}>{t('login.lbl_email')}</label>
              <input type="email" name="email" className={`form-control ${rtl}`} placeholder="abc@abc.com" id="userEmail"
                aria-describedby="emailHelp" value={props.email} onChange={props.handleChange} required />
              <small id="emailHelp" className={`form-text text-muted ${rtl}`}><i className="fas text-primary fa-info"></i> {t('login.email_info')}</small>
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.email_error')}
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword" className={`${rtl}`}>{t('login.lbl_password')}</label>
              <input type="password" className={`form-control ${rtl}`} placeholder="******" name="password" id="userPassword"
                aria-describedby="passwordHelp" value={props.password} onChange={props.handleChange} required minLength="6" />
              <small id="passwordHelp" className={`"form-text text-muted ${rtl}`}><i className="fas text-primary fa-info"></i> {t('login.password_info')}</small>
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.password_error')}
            </div>
            </div>
            <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('login.btn_signin')}</button>
          </form>
          {/* <!-- Login Form Ends --> */}

          {/* <!-- OR Seperator --> */}
          <hr className="hr-text" data-content={t('login.seperator_text')} />

          {/* <!-- Create account button --> */}
          <Link to="/register" className={`btn btn-dark btn-sm w-100 mt-2 ${rtl}`}>{t('login.btn_register_text')}</Link>
          <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-google"></i> {t('login.btn_login_google')}
        </a>
          <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-facebook-square"></i> {t('login.btn_login_facebook')}
        </a>
        </div>
      </div>
      {/* <!-- Login Form Card Ends --> */}
    </div>
  )
}

export default LoginView

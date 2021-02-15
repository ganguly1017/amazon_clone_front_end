import React from 'react'
import { Link } from 'react-router-dom'

function RegisterView(props) {
  const { t, i18n } = props;
  const rtl = ( i18n.languages[0] == 'pk' ? 'text-right' : '');


  return (
    <div className="container mb-5">
      {/* <!-- Register Form Card Starts --> */}
      <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width: "25rem"}}>
        <div className="card-body">
          <h4 className={`card-title rtl`}>{t('register.title')}</h4>
          {/* <!-- Register Form Start --> */}
          <form className="needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
            <div className="form-group">
              <label htmlFor="userName" className={`${rtl}`}>{t('register.lbl_name')}</label>
              <input type="text" name="name" className={`form-control ${rtl}`} placeholder="Ganguly Tech" id="userName" value={props.name} onChange={props.handleChange} required />
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.username_error')}
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="userEmail" className={`${rtl}`}>{t('register.lbl_email')}</label>
              <input type="email" name="email" className={`form-control ${rtl}`} placeholder="abc@abc.com" id="userEmail"
                aria-describedby="emailHelp" value={props.email} onChange={props.handleChange} required />
              <small id="emailHelp" className={`form-text text-muted ${rtl}`}><i className="fas text-primary fa-info"></i> {t('register.email_info')}</small>
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i>{t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.email_error')}
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword" className={`${rtl}`}>{t('register.lbl_pass1')}</label>
              <input type="password" className={`form-control ${rtl}`} placeholder="******" name="password1" id="userPassword"
                aria-describedby="passwordHelp" value={props.password1} onChange={props.handleChange} required minLength="6" />
              <small id="passwordHelp" className={`form-text text-muted ${rtl}`}><i className="fas text-primary fa-info"></i> {t('register.password_info')}</small>
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.password_error')}
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword2" className={`${rtl}`}>{t('register.lbl_pass2')}</label>
              <input type="password" className={`form-control ${rtl}`} placeholder="******" name="password2" id="userPassword2"
                aria-describedby="passwordHelp2" value={props.password2} onChange={props.handleChange} required minLength="6" />
              <small id="passwordHelp2" className="form-text text-muted"><i className="fas text-primary fa-info"></i> {t('register.password2_info')}</small>
              <div className={`valid-feedback ${rtl}`}>
                <i className="far text-success fa-thumbs-up"></i> {t('validation.ok')}
            </div>
              <div className={`invalid-feedback ${rtl}`}>
                <i className="fas text-danger fa-exclamation-triangle"></i> {t('validation.pass2_error')}
            </div>
            </div>
            <button type="submit" className={`btn btn-warning w-100 shadow btn-sm rounded ${rtl}`}>{t('register.btn_register')}</button>
          </form>
          {/* <!-- Register Form Ends --> */}

          {/* <!-- OR Seperator --> */}
          <hr className="hr-text" data-content={t('register.seperator_text')} />

          {/* <!-- Create account button --> */}
          <p className="text-center">{t('register.have_account_text')} <Link to="/login">{t('register.btn_signin_text')} <i className="fas fa-caret-right"></i></Link></p>
          <a href="#" className={`btn btn-outline-success btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-google"></i> {t('register.btn_login_google')}
        </a>
          <a href="#" className={`btn btn-outline-primary btn-sm w-100 mt-2 ${rtl}`}>
            <i className="fab fa-facebook-square"></i> {t('register.btn_login_facebook')}
        </a>
        </div>
      </div>
      {/* <!-- Register Form Card Ends --> */}
    </div>
  )
}

export default RegisterView

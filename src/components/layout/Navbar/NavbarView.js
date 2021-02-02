import React from 'react'

function NavbarView(props) {
  const { t, rtl } = props;
  return (
    <React.Fragment>
      {/* <!-- Navbar Starts --> */}
      <nav id="pageTop" className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <!-- Drawer Start --> */}
        <button className="btn btn-outline-light" data-toggle="drawer" data-target="#amazonDrawer">
          <i className="fas fa-sliders-h"></i>
        </button>

        <div className="drawer drawer-left slide" tabIndex="-1" role="dialog" aria-labelledby="drawer-demo-title"
          aria-hidden="true" id="amazonDrawer">
          <div className="drawer-content drawer-content-scrollable" role="document">
            <div className="drawer-header bg-dark text-white">
              <h4 className={`drawer-title mx-auto ${rtl}`} id="drawer-demo-title">
                <i className="fas fa-user-circle"></i>
              {t('navbar.sidebar_title')}
          </h4>
            </div>
            <div className="drawer-body">
              <h6 className={`text-muted text-uppercase ${rtl}`}>{t('navbar.sidebar_help_title')}</h6>
              <a href="your_account.html" className={`btn btn-outline-success my-2 btn-sm ${rtl}`}>{t('navbar.btn_account_title')}</a>
              <a href="login.html" className={`btn btn-warning my-2 btn-sm ${rtl}`}>{t('navbar.btn_signin_title')}</a>
            </div>
            <div className="drawer-footer">
              <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="drawer" aria-label="Close">
                <i className="fas fa-2x fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Drawer Ends --> */}

        <a className="navbar-brand pl-2" href="navbar.html">
          <img src="assets/img/amazon_logo_white.png" height="30" width="100" alt="amazon logo white" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Search Bar Starts --> */}
          <form className="form-inline px-lg-5" noValidate method="get">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" name="btnCategory" type="button"
                    id="btnCategoryDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    All
              </button>
                  <div className="dropdown-menu" aria-labelledby="btnCategoryDropdownMenu">
                    <a className="dropdown-item" href="#">All</a>
                    <a className="dropdown-item" href="#">Smartphone</a>
                    <a className="dropdown-item" href="#">Kitchen Hardware</a>
                    <a className="dropdown-item" href="#">Prime Deals</a>
                    <a className="dropdown-item" href="#">Book</a>
                  </div>
                </div>
              </div>
              <input type="text" className={`form-control ${rtl}`} size="50" name="query" id="query" />
              <input type="text" name="category" id="category" value="book" hidden />
              <div className="input-group-append">
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          {/* <!-- Search Bar Ends --> */}
          <ul className="navbar-nav">
            {/* <!-- Preffered Language Starts --> */}
            <li className="nav-item dropdown px-2">
              <a className="nav-link" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-2x fa-language"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                <form className="p-3">
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="englishLang" value="en"
                      onClick={props.handleChangeLang} checked={ props.prefLang == "en" ? true : false } />
                    <label className="custom-control-label" htmlFor="englishLang">
                      <img src="assets/img/flag/english.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="hindiLang" value="in" 
                    onClick={props.handleChangeLang} checked={ props.prefLang == "in" ? true : false } />
                    <label className="custom-control-label" htmlFor="hindiLang">
                      <img src="assets/img/flag/hindi.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio mb-2">
                    <input className="custom-control-input" type="radio" name="prefLang" id="urduLang" value="pk" 
                    onClick={props.handleChangeLang} checked={ props.prefLang == "pk" ? true : false } />
                    <label className="custom-control-label" htmlFor="urduLang">
                      <img src="assets/img/flag/urdu.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="custom-control custom-radio">
                    <input className="custom-control-input" type="radio" name="prefLang" id="banglaLang" value="bd" 
                    onClick={props.handleChangeLang}  checked={ props.prefLang == "bd" ? true : false } />
                    <label className="custom-control-label" htmlFor="banglaLang">
                      <img src="assets/img/flag/bangla.svg" alt="uk flag" width="50" height="30" />
                    </label>
                  </div>
                  <div className="dropdown-divider"></div>
                </form>
              </div>
            </li>
            {/* <!-- Preffered Language Ends -->
        <!-- User Account Starts --> */}
            <li className="nav-item dropdown px-2">
              <a className="nav-link" href="login.html" id="userAccount" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-2x fa-user-circle"></i>
              </a>
              <div className="dropdown-menu px-3" aria-labelledby="userAccount">
                <div className="d-flex flex-column justify-content-center">
                  <a href="login.html" className={`btn btn-warning w-75 btn-sm font-weight-bold ${rtl}`}>{t('navbar.menu_signin_btn_title')}</a>
                  <small>{t('navbar.menu_signin_sub_title')}? <a href="register.html">{t('navbar.menu_signing_register_text')}</a></small>
                </div>
              </div>
            </li>
            {/* <!-- User Account Ends -->
        <!-- Shopping Cart Starts --> */}
            <li className="nav-item px-2">
              <a className="nav-link" href="#" aria-disabled="true">
                <i className="fas fa-2x text-light fa-shopping-cart"></i>
                <span className="badge badge-warning badge-pill">0</span>
              </a>
            </li>
            {/* <!-- Shopping Cart Starts --> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Navbar Ends --> */}

    </React.Fragment>
  );
}

export default NavbarView;

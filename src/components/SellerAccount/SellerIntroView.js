import React from 'react'

function SellerIntroView() {
  return (
  <div className="container-fluid mb-5" >
    {/* <!-- Seller Account Intro Starts --> */}
    <div className="row">
      <div className="col-md-12 p-5 text-white text-center" style={{backgroundColor: '#008577'}}>
        <h1>"Since last 6 years my friends wealth increased by 3000%, thanks to selling of BSNL, LIC, AIR India & etc on Amazon."</h1>
        <p>Narendra Modi, <em>PMO India</em> (Amazon Seller)</p>
        <a href="your_seller_account.html" className="btn btn-warning rounded-pill">Start selling</a>
        <p>It only takes 15 minutes to setup your account</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 pl-5 pr-5 pt-3 pb-2">
        <h2>Why sell on Amazon?</h2>
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_01.svg" className="mb-2" height="100" alt="" />
        <h3>E-Commerce: Your next big sales channel</h3>
        <div>Start selling on Amazon - without building a website. Register now to start selling on Amazon.in.</div>
      </div>
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_02.svg" className="mb-2" height="100" alt="" />
        <h3>Reach crores of customers</h3>
        <div>Sell to crores of engaged customer visiting Amazon.in on desktop and through our mobile app.</div>
      </div>
      <div className="col-md-4 p-5">
        <img src="assets/img/seller_account/img_03.svg" className="mb-2" height="100" alt="" />
        <h3>Receive timely payments</h3>
        <div >Amazon ensures your payments for your delivered orders are deposited directly in your bank account every 7 days.</div>
      </div>
    </div>
  </div>
  )
}

export default SellerIntroView

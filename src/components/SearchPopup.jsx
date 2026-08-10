import React from 'react'

function SearchPopup(){
  return (
        <section className="topbar01">
            <div className="container largeContainer">
                <div className="row">
                    <div className="col-md-9">
                        <p><i className="bpro-mail-2"></i><a href="#">Mail: info@gmail.com</a></p>
                        <p><i className="bpro-phone-ringing"></i><a href="tel:+1245698909">Phone: + 124 569 89 09</a></p>
                    </div>
                    <div className="col-md-3">
                        <div className="topsocial">
                            <a href="javascript:void(0);"><i className="twi-facebook-square"></i></a>
                            <a href="javascript:void(0);"><i className="twi-pinterest"></i></a>
                            <a href="javascript:void(0);"><i className="twi-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default SearchPopup;
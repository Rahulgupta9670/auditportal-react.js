import React from 'react'

const Footer = () => {
  return (
    <footer className="footer ms-4">
      <div className="container-flui">
        <div className="row">
          <div className="col-md-6 footer_t">
            © CPM India <a href="#" />
          </div>
          <div className="col-md-6">
            <div className="text-md-end footer-links d-none d-sm-block">
              <a className='footer_h'>About Us</a>
              <a className='footer_h'>Help</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer ;
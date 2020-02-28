import React from "react"
import './style.css'

const bannerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}` 
})

const linkStyle = (linkColor) => ({
  color: `${linkColor}`
})

export class Footer extends React.Component {
  render() {
    const {bgColor__limio_color, linkColor__limio_color, logo, termsLink, privacyLink, cookieLink, contentPosition} = this.props

    return (
      <div className="FooterOuter" style={bannerStyle(bgColor__limio_color)}>
        <div className="FooterWrapper">
          <div className={`FooterContent ${contentPosition.selected.id}`}>
            <img src={logo} className="FooterLogo" alt="" />
            <a className="FooterLink" style={linkStyle(linkColor__limio_color)} href={termsLink}><p>Terms &amp; Conditions</p></a>
            <a className="FooterLink" style={linkStyle(linkColor__limio_color)} href={privacyLink}><p>Privacy Policy</p></a>
            <a className="FooterLink" style={linkStyle(linkColor__limio_color)} href={cookieLink}><p>Cookies Policy</p></a>
          </div>
        </div>
      </div>
    )
  }

  static defaultProps = {
    bgColor__limio_color: '#ECECEC',
    linkColor__limio_color: '#1C1C1C',
    logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
    termsLink: "https://www.limio.com/terms",
    privacyLink: "https://www.limio.com/privacy",
    cookieLink: "https://www.limio.com/cookies",
    contentPosition: {
      options: [
        {label: "left", id: "left"},
        {label: "right", id: "right"},
        {label: "center", id: "center"}
      ],
      selected: {label: "center", id: "center"}
    }
  };

}

export default Footer

// CSS : A intégrer dans style.scss //// ATTENTION AUX NOMINATIONS DES CAPSULES ////

// .FooterOuter {
//   align-items: center;
//   color: #8855FF;
//   display: flex;
//   justify-content: center;
//   padding: 1em 2em 2em 2em;
//   overflow: hidden;
// }

// .FooterOuter .FooterWrapper {
//   position: relative;
//   width: 100%;
// }

// .FooterOuter .FooterWrapper .FooterContent.left {
//   text-align: left;
// }

// .FooterOuter .FooterWrapper .FooterContent.center {
//   text-align: center;
// }

// .FooterOuter .FooterWrapper .FooterContent.right {
//   text-align: right;
// }

// .FooterOuter .FooterWrapper .FooterContent .FooterLogo {
//   width: 10em;
// }

// .FooterOuter .FooterWrapper .FooterContent .FooterLink {
//   display: block;
//   text-decoration: none;
// }

// @media (max-width: 599px) {
//   .FooterOuter {
//     font-size: 90%;
//   }
// }
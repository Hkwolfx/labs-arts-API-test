import React from "react"
import "./index.css"

// COMPOSANT QUI REND UN LOGO CLIQUABLE QUI REDIRECT VERS LA DESTINATION SOUHAITE //

const headerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}`
})


export class Header extends React.Component {
  render() {
    const {bgColor__limio_color, logo} = this.props

    return (
      <div className="header" style={headerStyle(bgColor__limio_color)}>
          {/*DEFINIR ICI LA DIRECTION DANS LA BALISE  */}
        <a href="/">
          <img className="logo" src={logo} alt=""/>
        </a>
      </div>
    )
  }

  static defaultProps = {
    bgColor__limio_color: '#ffffff',
    // CHANGER LE LOGO ICI //
    logo: 'https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png'
  }
}

export default Header

// CSS : A intégrer dans le Style.scss //// ATTENTION A LA NOMINATION DES CAPSULES ////

// .header {
//     align-items: center;
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     padding: 0em 1em;
//     width: 100%;
//   }
  
//   .header .logo {
//     width: 8em;
//   }
  
//   @media (min-width: 768px) {
//     .header {
//       flex-direction: row;
//       padding: 0em 2em;
//     }
//   }
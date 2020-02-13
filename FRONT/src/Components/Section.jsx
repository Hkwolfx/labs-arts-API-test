import React from "react";
import './index.css';

// COMPOSANT POUR FABRIQUER UNE SECTION ( Avec Imag/Txt/Others ) //

const bannerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}`
})

const wrapperStyle = (wrapperBgColor, contentPadding, reverse) => ({
  backgroundColor: `${wrapperBgColor}`,
  flexDirection: !reverse ? 'row' : 'row-reverse',
  margin: `${contentPadding} auto`
})

const headerStyle = (headerColor) => ({
  color: `${headerColor}`
})

const textStyle = (textColor) => ({
  color: `${textColor}`
})

export class Section extends React.Component {
  sanitizeString(string) {
    return !string || string.includes('</script>') || string.includes('onload=') || string.includes('onerror=')
      ? ''
      : string
  }

  render() {
    const {bgColor__limio_color, wrapperBgColor__limio_color, contentPadding, image, header, headerColor__limio_color, text__limio_richtext, textColor__limio_color, reverse} = this.props

    return (
      <div className="Section" style={bannerStyle(bgColor__limio_color)}>
        <div className="SectionWrapper" style={wrapperStyle(wrapperBgColor__limio_color, contentPadding, reverse)}>
          <div className="ImageContainer">
            <img src={image} className="Image" alt=''/>
          </div>
          <div className="TextContainer">
            <h2 className="Header" style={headerStyle(headerColor__limio_color)}>{header}</h2>
            <div className="Text" style={textStyle(textColor__limio_color)} dangerouslySetInnerHTML={{__html: this.sanitizeString(text__limio_richtext)}} />
          </div>
        </div>
      </div>
    )
  }

  static defaultProps = {
    bgColor__limio_color: '#ECECEC',
    wrapperBgColor__limio_color: '#FFFFFF',
    contentPadding: '2em',
    image: "https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    header: "Lorem ipsum dolor sit amet.",
    headerColor__limio_color: "#444444",
    text__limio_richtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    textColor__limio_color: "#444444",
    reverse: false
  };

}

export default Section

// CSS : A intégrer dans le Style.scss //

// .Section {
//     align-items: center;
//     color: #8855FF;
//     display: flex;
//     justify-content: center;
//     overflow: hidden;
//     width: 100%;
//   }
  
//   .Section .SectionWrapper {
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     max-width: 1100px;
//     overflow: hidden;
//   }
  
//   .Section .SectionWrapper .ImageContainer {
//     margin: 3rem;
//     position: relative;
//     width: 40%;
//   }
  
//   .Section .SectionWrapper .ImageContainer .Image {
//     width: 100%;
//   }
  
//   .Section .SectionWrapper .TextContainer {
//     margin: 3rem;
//     width: 60%;
//   }
  
//   .Section .SectionWrapper .TextContainer .Header {
//     margin: 0 0 1rem 0;
//   }
  
//   .Section .SectionWrapper .TextContainer .Text {
//     margin: 0;
//   }
  
//   @media (max-width: 599px) {
//     .Section {
//       font-size: 90%;
//     }
  
//     .Section .SectionWrapper {
//       flex-wrap: wrap;
//     }
  
//     .Section .SectionWrapper .ImageContainer {
//       margin: 3rem 3rem 1.5rem 3rem;
//       width: 100%;
//     }
  
//     .Section .SectionWrapper .TextContainer {
//       margin: 1.5rem 3rem 3rem 3rem;
//       width: 100%;
//     }
//   }

  //
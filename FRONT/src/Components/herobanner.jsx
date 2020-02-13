import React from "react";
import './index.css';

// HERO BANNER POUR LANDING PAGE //

const bannerStyle = (bannerImg) => ({
  backgroundImage: `url(${bannerImg})`
})

const overlayStyle = (overlayOpacity) => ({
  background: `rgba(0, 0, 0, ${overlayOpacity})`
})

const headlineStyle = (color, fontSize) => ({ 
  color,
  fontSize
})

const sublineStyle = (color, fontSize) => ({
  color,
  fontSize
})

export class HeroBanner extends React.Component {
  render() {
    const {
      heroImage,
      headline,
      headlineColor__limio_color,
      headlineFontSize,
      subline,
      sublineColor__limio_color,
      sublineFontSize,
      textPosition,
      overlayOpacity
    } = this.props

    return (
      <div className="HeroBanner" style={bannerStyle(heroImage)}>
        <div className="HeroOverlay" style={overlayStyle(overlayOpacity)}></div>
        <div className={`HeroWrapper ${textPosition.selected.id === "Center" ? " isCenter" : ""}`}>
          <div className={`${textPosition.selected.id}Text`}>
            <h1 style={headlineStyle(headlineColor__limio_color, headlineFontSize)}>{headline}</h1>
            <h2 style={sublineStyle(sublineColor__limio_color, sublineFontSize)}>{subline}</h2>
          </div>
        </div>
      </div>
    )
  }
// CHANGEZ ICI LA HEROIMAGE & TEXT & OTHERS //
  static defaultProps = {
    heroImage: "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    headline: "Configure your headline",
    headlineColor__limio_color: "#FFFFFF",
    headlineFontSize: '2.5em',
    subline: "Subline goes here",
    sublineColor__limio_color: "#FFFFFF",
    sublineFontSize: '2em',
    textPosition: {
      options: [
        {label: "TopLeft", id: "TopLeft"},
        {label: "Left", id: "Left"},
        {label: "BottomLeft", id: "BottomLeft"},
        {label: "TopRight", id: "TopRight"},
        {label: "Right", id: "Right"},
        {label: "BottomRight", id: "BottomRight"},
        {label: "TopCenter", id: "TopCenter"},
        {label: "Center", id: "Center"},
        {label: "BottomCenter", id: "BottomCenter"},
      ],
      selected: {label: "Center", id: "Center"}
    },
    overlayOpacity: "0.2"
  };

}

export default HeroBanner

// CSS : A intégrer dans le Style.scss // 

// .HeroBanner {
//     align-items: center;
//     background-position: center center;
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     overflow: hidden;
//     position: relative;
//     width: 100%;
//   }
  
//   .HeroBanner .HeroOverlay {
//     height: 100%;
//     position: absolute;
//     width: 100%;
//   }
  
//   .HeroBanner .HeroWrapper {
//     height: 75%;
//     position: relative;
//     width: 75%;
//   }
  
//   .HeroBanner .HeroWrapper.isCenter {
//     height: unset;
//   }
  
//   .HeroBanner .HeroWrapper .TopCenterText {
//     padding: 10em 0 30em 0;
//     text-align: center;
//   }
  
//   .HeroBanner .HeroWrapper .CenterText {
//     padding: 20em 0em;
//     text-align: center;
//   }
  
//   .HeroBanner .HeroWrapper .BottomCenterText {
//     padding: 30em 0 10em 0;
//     text-align: center;
//   }
  
//   .HeroBanner .HeroWrapper .TopLeftText {
//     padding: 10em 0 30em 0;
//     text-align: left;
//   }
  
//   .HeroBanner .HeroWrapper .LeftText {
//     padding: 20em 0;
//     text-align: left;
//   }
  
//   .HeroBanner .HeroWrapper .BottomLeftText {
//     padding: 30em 0 10em 0;
//     text-align: left;
//   }
  
//   .HeroBanner .HeroWrapper .TopRightText {
//     padding: 10em 0 30em 0;
//     text-align: right;
//   }
  
//   .HeroBanner .HeroWrapper .RightText {
//     padding: 20em 0;
//     text-align: right;
//   }
  
//   .HeroBanner .HeroWrapper .BottomRightText {
//     padding: 30em 0 10em 0;
//     text-align: right;
//   }
  
//   @media (max-width: 599px) {
//     .HeroBanner {
//       font-size: 90%;
//     }
  
//     .HeroBanner .HeroWrapper .TopCenterText {
//       padding: 7em 0 21em 0;
//     }
    
//     .HeroBanner .HeroWrapper .CenterText {
//       padding: 14em 0em;
//     }
    
//     .HeroBanner .HeroWrapper .BottomCenterText {
//       padding: 21em 0 7em 0;
//     }
    
//     .HeroBanner .HeroWrapper .TopLeftText {
//       padding: 7em 0 21em 0;
//     }
    
//     .HeroBanner .HeroWrapper .LeftText {
//       padding: 14em 0;
//     }
    
//     .HeroBanner .HeroWrapper .BottomLeftText {
//       padding: 21em 0 7em 0;
//     }
    
//     .HeroBanner .HeroWrapper .TopRightText {
//       padding: 7em 0 21em 0;
//     }
    
//     .HeroBanner .HeroWrapper .RightText {
//       padding: 14em 0;
//     }
    
//     .HeroBanner .HeroWrapper .BottomRightText {
//       padding: 21em 0 7em 0;
//     }
//   }
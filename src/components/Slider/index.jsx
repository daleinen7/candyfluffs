import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slider(props) {
  return(
    <StaticQuery
      query={graphql`
        query Banner {
          allDatoCmsBanner {
            nodes {
              banner {
                title
                fluid {
                  src
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="slider">
          <AliceCarousel
            autoPlay autoPlayInterval="3000"
            width="90vw"
            disableButtonsControls
            items={data.allDatoCmsBanner.nodes.map((node, idx) => {
              return (
                <img src={node.banner[0].fluid.src} alt={node.banner[0].title} className="sliderimg" key={idx}/>
              )
            })}
          />
        </div>
      )}
    />
  )
}
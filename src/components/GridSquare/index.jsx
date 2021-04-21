import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

// const StyledDiv = styled.div`
//   .gatsby-image-wrapper {
//     width: 100%;
//     height: 100%;
//   }
  
//   position: relative;
//   height: 400px;
//   width: 400px;
//   border: 2px solid  var(--highlight);
//   box-sizing: border-box;
//   border-radius: 2px;
//   .overlay {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     height: 100%;
//     width: 100%;
//     opacity: 0;
//     transition: 0.5s ease;
//     background-color: var(--highlight);
//   }
//   &:hover .overlay {
//     opacity: 0.75;
//   }
//   .text {
//     color: purple;
//     font-size: 1.5em;
//     position: absolute;
//     text-align: center;
//   }
// `;

export default function GridSquare(props) {
  return (
  <div className="product-item">
    <div className="product-square">
      <Link to={`../../products/${props.slug}`}>
          <Img
            objectFit="cover"
            fluid={props.image.fluid}
            alt={props.title}
            />
            <div className="overlay text">
              <h2>{props.title}</h2>
              <h3>${props.price}</h3>
            </div>
        </Link>
      </div>
    </div>
  )
}
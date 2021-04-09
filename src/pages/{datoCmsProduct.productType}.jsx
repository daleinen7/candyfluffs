import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from 'styled-components';
import GridSquare from '../components/GridSquare';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import '../styles/global.css'; 

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  position: absolute;
  z-index: 1; 
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function Product({ data }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  let fandomList = []
  data.allDatoCmsProduct.edges.forEach(({node}) => {
    if (!fandomList.includes(node.fandoms.replace(/\s/g, '-').toLowerCase())) {
      fandomList.push(node.fandoms.replace(/\s/g, '-').toLowerCase())
    }
  })

	return(
    // don't forget to dynamically set product type 
    <Layout heading={"Sort by product type"}>


        {/* <ul>
          {fandomList.map(fandom => {
            return <li><Link to={`${fandom}`}>{fandom}</Link></li>
          })}
        </ul> */}
      <div className="fandom-dropdown">
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption || "Fandoms"}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {fandomList.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    <Link to={`${option}`}>{option}</Link>
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </div>

      <div className="product-grid">
        {data.allDatoCmsProduct.edges.map(({node}) => (
          <GridSquare 
            title={node.title} 
            price={node.price}
            image={node.image[0]}
            slug={node.slug}
            key={node.id} 
          />
        ))}
        
      </div>
    </Layout>
  )
};

export const query = graphql`
  query AllProductTypes($productType:String!) {
  allDatoCmsProduct(filter: {productType: {eq: $productType}}) {
    edges {
      node {
        id
        title
        price
        fandoms
        slug
        image {
          fluid(maxWidth: 200) {
            src
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}
`;
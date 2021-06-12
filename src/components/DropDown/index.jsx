import React, {useState} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const DropDownContainer = styled("div")`
  width: 300px;
  margin: 0 auto;
  position: absolute;
  z-index: 1; 
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #000;
  background: #fff8f5;
  text-align: center; 
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 3.5rem;
  margin: 0;
  text-align:center;
  background: #fff8f5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  filter:drop-shadow(5px 5px 5px #999);


  a {
    color: #000;
    text-decoration: none; 
  }

  a:hover {
    border-bottom: 3px solid #F58F89; 
  }


`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function DropDown(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return(
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Fandoms ▾ " } 
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.fandomList.map((option, idx) => (
              <ListItem onClick={onOptionClicked(option)} key={idx}>
                <Link to={`${option}`}>{option}</Link>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
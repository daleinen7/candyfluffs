import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  line-height:4rem;

  align-items: center;
  width: 100%;
  @media(max-width: 1100px) {
    width: 90%;
  
  }

  @media(max-width: 830px) {
    margin-bottom: 80px;
    p{
      line-height: 1.5rem;
    }
  }

  #contactH2 {
    color: #000000;
    font-size: 2rem;
    margin-bottom: 10px; 
  }

  form {
   
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;

    @media(max-width: 680px) {
      align-items: center;
      flex-direction: column;
      width:content-fit;
    }
  }


  
  small {
    text-align: center; 
  }


`;

export default function ContactForm() {

  return(
    <StyledDiv>
      <h2 id="contactH2">Candy Fluffs Updates!</h2>
      <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
<div id="mc_embed_signup">
<form action="https://candyfluffs.us16.list-manage.com/subscribe/post?u=f0ccd4aae40398b03156934fd&amp;id=1e5c516db8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	  <input style={{  marginRight: "1rem", padding: "12px 20px", height: "50px", width: "300px", boxSizing: "border-box", backgroundColor: "#c4c4c4", color: "#000", border: "0px", verticalAlign:" center"}} type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="EMAIL" required/>
   
    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_f0ccd4aae40398b03156934fd_1e5c516db8" tabindex="-1" value=""/></div>
    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
    </div>
</form>
</div>
<small>We never share any information with 3rd parties.</small>
    </StyledDiv>
  )
  // return(
  //   <StyledDiv>
  //     <h2 id="contactH2">Candy Fluffs Updates!</h2>
  //     <p>Sign up to get updates about new products and when I’ll be at anime conventions!</p>
  //     <form action="/success" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" >
  //       <label htmlFor="firstName">First Name</label>
  //       <input type="text" name="firstName" placeholder="First Name"/>
  //       <label htmlFor="lastName">Last Name</label>
  //       <input type="text" name="lastName" placeholder="Last Name"/>
  //       <label htmlFor="email">Email</label>
  //       <input type="text" name="email" placeholder="E-mail address"/>
  //       <input type="hidden" name="bot-field" />
  //       <input type="hidden" name="form-name" placeholder="contact" />
  //       <input className="submitButton" type="submit" value="SIGN UP"/>
  //     </form>
  //     <small>We never share any information with 3rd parties.</small>
  //   </StyledDiv>
  // )
}
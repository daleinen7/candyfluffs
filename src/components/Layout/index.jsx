import React from 'react';
import { Helmet } from "react-helmet"
import Header from '../Header';
import NavMenu from '../NavMenu';
import Footer from '../Footer';

export default function Layout(props) {
  return(
    <div className="container">
      <Helmet htmlAttributes={{lang: 'en',}}>
        <meta charSet="utf-8" />
        <title>Candy Fluffs</title>
        <meta name="description" content="Shop all of Candyfluffs and 2Heros art and merchandise" />
        <link rel="canonical" href="https://candyfluffs.com" />
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"></link>
      </Helmet>
      <Header heading={props.heading} />
      <NavMenu/>
      <main>
          {props.children}
      </main>
      <Footer />   
  </div>
  )
}
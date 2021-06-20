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
        <link rel="canonical" href="https://candyfluffs.com" />
        
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
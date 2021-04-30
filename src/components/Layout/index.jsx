import React from 'react';
import Header from '../Header';
import NavMenu from '../NavMenu';
import Footer from '../Footer';

export default function Layout(props) {
  return(
    <div className="container">
      <Header heading={props.heading} />
      <NavMenu/>
      <main>
          {props.children}
      </main>
      <Footer />   
  </div>
  )
}
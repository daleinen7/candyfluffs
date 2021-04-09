import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return(
    <div className="grid-container">
      <Header heading={props.heading} />
        <main>
            {props.children}
        </main>
        <Footer />   
  </div>
  )
}
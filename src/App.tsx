import logo from './logo.svg';
import './App.css';
import NavbarScroller from './nav';
import React, { Component } from 'react';
import 'reset-css'

const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Developement", to: "/dev" },
    { name: "Graphic Design", to: "/design" },
    { name: "Contact", to: "/contact" },
  ]
}

export default class App extends Component {
  // the 'public' is a typescript feature. 
  public render() {

	// Descructured object for cleaner code :-)
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
      </div>
    );
  }
}
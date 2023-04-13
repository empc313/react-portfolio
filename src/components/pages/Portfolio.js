import React from 'react';
import {Link} from 'react-router-dom'

export default function Portfolio(){
    return ( 
    <section> 
      <h1>Portfolio</h1>
      <div className="p-3">
        <Link src='URL' href ="https://github.com/empc313/weather-page">Weather App</Link></div>         
      <div className="p-3">
        <Link  src='URL' href ="https://github.com/reverofsuturb/CloudMinnow">Fluffy Website</Link></div>
      <div className="p-3">
        <Link src="URL" href ="https://jamesgeneser.github.io/book-search/">Book Search Website</Link></div>
    </section>
      ); 
}
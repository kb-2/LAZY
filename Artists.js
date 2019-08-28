import {Suspense , lazy} from 'react';
import React from 'react';
import './App.css';
import artists from "./store";

const Performers = lazy(() => import('./performers'))

export default function Artists(){
  function handleclck(){
  console.log('sdsd')
  return(
    <Suspense fallback={<h1>Loading.....</h1>}>
      <Performers />
      </Suspense>
  )
}
    return (
      <>
      <h1>MTV Base Headline Artists 2019</h1>
      {artists.map(artist =>(
        <div id="card-body" key={artist.id}>
        <div className="card" onClick={handleclck}>
          <h2>{artist.name}</h2>
          <p>genre: {artist.genre}</p>
          <p>Albums released: {artist.albums}</p>
        </div>
        
        </div>
      ))}
      <Suspense fallback={<h1>Loading.....</h1>}>
      <Performers />
      </Suspense>
     </>
    );
  }


import './App.css';
import randomColor from 'randomcolor'; // import the script
import React, { useState } from 'react';
import FirstButton from './FirstButton';

// const color = randomColor()

function App() {
  const [hex, setHex] = useState('#78d3d2');
  const randomizedHex = function (tone) {
    const color = randomColor({ hue: tone });
    setHex(color);
  };

  // const randomColor2 = "#" + Math.floor(Math.random() *16777215).toString(16);

  return (
    <div
      className="App"
      style={{
        backgroundColor: hex,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 2,
        placeItems: 'center',
      }}
    >
      <h1 className="h1App">
        {hex}

        <span className="color" />

        <FirstButton
          color="pink"
          change={randomizedHex}
          styling={{ backgroundColor: '#c13f2e' }}
        />

        <FirstButton
          color="yellow"
          change={randomizedHex}
          styling={{ backgroundColor: '#f7ce18' }}
        />

        <FirstButton
          color="green"
          change={randomizedHex}
          styling={{ backgroundColor: '#bae0bb' }}
        />

        <FirstButton
          color="blue"
          change={randomizedHex}
          styling={{ backgroundColor: '#78d3d2' }}
        />

        <FirstButton
          color="pink"
          change={randomizedHex}
          styling={{ backgroundColor: '#f799c2' }}
        />

        <FirstButton
          color="purple"
          change={randomizedHex}
          styling={{ backgroundColor: '#9449bc' }}
        />

        <FirstButton
          color="orange"
          change={randomizedHex}
          styling={{ backgroundColor: '#e88d43' }}
        />

        <span className="color" />

        <button
          onClick={randomizedHex}
          style={{ borderRadius: '14px', padding: '4px' }}
        >
          Randomize
        </button>
      </h1>
    </div>
  );
}

export default App;

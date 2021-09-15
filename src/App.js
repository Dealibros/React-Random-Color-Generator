/* eslint-disable @upleveled/upleveled/no-unnecessary-interpolations */
import './App.css';
import randomColor from 'randomcolor'; // import the script
import React, { useState } from 'react';
import FirstButton from './FirstButton';

// const color = randomColor()

function App() {
  const [hex, setHex] = useState('#78d3d2');
  const randomizedHex = function (tono) {
    const color = randomColor({ hue: tono });
    setHex(color);
  };

  // const randomColor2 = "#" + Math.floor(Math.random() *16777215).toString(16);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
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
          handler={randomizedHex}
          estilo={{ backgroundColor: '#c13f2e' }}
        />

        <FirstButton
          color="yellow"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#f7ce18' }}
        />

        <FirstButton
          color="green"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#bae0bb' }}
        />

        <FirstButton
          color="blue"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#78d3d2' }}
        />

        <FirstButton
          color="pink"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#f799c2' }}
        />

        <FirstButton
          color="purple"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#9449bc' }}
        />

        <FirstButton
          color="orange"
          handler={randomizedHex}
          estilo={{ backgroundColor: '#e88d43' }}
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

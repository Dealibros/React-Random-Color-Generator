import './App.css';
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
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

        <span className="color"></span>

        <FirstButton
          color={'pink'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#c13f2e' }}
        />

        <FirstButton
          color={'yellow'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#f7ce18' }}
        />

        <FirstButton
          color={'green'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#bae0bb' }}
        />

        <FirstButton
          color={'blue'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#78d3d2' }}
        />

        <FirstButton
          color={'pink'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#f799c2' }}
        />

        <FirstButton
          color={'purple'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#9449bc' }}
        />

        <FirstButton
          color={'orange'}
          handler={randomizedHex}
          estilo={{ backgroundColor: '#e88d43' }}
        />

        <span className="color"></span>

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

//Form for later use to continue with the stretch points
// <form>
//   <input style={{ borderRadius: '14px', width: '75px' }} type="text" />
// </form>
// ---------------------------------------------------------------------------------------

//   function CounterHooks(){
//     const [count, setCount]=useState(0)

// ReactDOM.render(<App />, document.getElementById("root"));
// const hash31 = '#'.repeat(31);
// const hash5 = '#'.repeat(5);
// const space21 = ' '.repeat(21);
// const space7 = ' '.repeat(7);

// console.log(
//   chalk.hex(randomColor({ hue: process.argv[2], luminosity: process.argv[3] }))(
//     `${hash31}\n${hash31}\n${hash31}\n${hash5}${space21}${hash5}\n${hash5}${space7}${randomColor()}${space7}${hash5}\n${hash5}${space21}${hash5}\n${hash31}\n${hash31}\n${hash31}`,
//   ),
// );

// function App() {
//   return <Greeting name="Nathan" age={27} occupation="Software Developer" />;
// }

// function Greeting(props) {
//   return (
//     <p>
//       Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
//       Pleased to meet you!
//     </p>
//   );
// }

// <form>
//           <input
//             style={{ borderRadius: '14px', margin: '5px', width: '75px' }}
//             type="text"
//           />
//         </form>
//         <form>
//           <input
//             style={{ borderRadius: '14px', margin: '6px', width: '75px' }}
//             type="text"
//           />
//         </form>
export default App;

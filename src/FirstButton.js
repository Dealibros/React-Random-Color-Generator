import './App.css';

// import randomColor from 'randomcolor'; // import the script

function FirstButton(props) {
  console.log(props);
  return (
    <button
      className="button"
      style={{ ...props.estilo }}
      onClick={() => {
        props.handler(props.color);
      }}
    >
      o
    </button>
  );
}

export default FirstButton;

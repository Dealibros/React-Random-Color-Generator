// import randomColor from 'randomcolor'; // import the script

function FirstButton(props) {
  console.log(props);
  return (
    <button
      className="button"
      style={{ ...props.styling }}
      onClick={() => {
        props.change(props.color);
      }}
    >
      o
    </button>
  );
}

export default FirstButton;

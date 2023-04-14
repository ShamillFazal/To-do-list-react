import "./index.css";

function List(props) {
  return (
    <ul>
      {props.listState.map((listitem, index) => (
        <li key={index}>{listitem}</li>
      ))}
    </ul>
  );
}

export default List;

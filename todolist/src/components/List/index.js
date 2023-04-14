import "./index.css";
import ListItem from "../List-Item"

function List(props) {
  return (
    <ul listitem = {props.listState}>
{props.listState.map((listitem, index) => (
  <ListItem key={index} listitem={listitem} />
))}

    </ul>
  );
}

export default List;

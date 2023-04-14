import "./index.css";
import ListItem from "../List-Item"

function List(props) {
  function deleteItem(item) {
    const newListState = props.listState.filter((listitem) => listitem != item);
    props.setListState(newListState);
  }
  return (
    <ul>
    {props.listState.map((listitem, index) => (
    <ListItem key={index} listitem={listitem} deleteItem={deleteItem} />
))}

    </ul>
  );
}

export default List;

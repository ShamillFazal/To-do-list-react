import "./index.css";

function ListItem (props){
  function handleDelete(){
    props.deleteItem(props.listitem);
  }

    return (<li>
    {props.listitem}
    <button className="deletebutton" onClick={handleDelete}>Delete</button>
    </li>
    );
}


export default ListItem;
import Item from "./Item"

const List = ({tasks}) => {
  
  return (
    <ul>
      {tasks.map(item => <Item key={item.id} {...item}/>)}
    </ul>
  )
}

export default List;
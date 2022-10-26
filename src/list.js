import Props from "./Props";

function List() {
    const x1 = [
        {id:"1", name:"Ramiro"},
        {id:"2", name:"Emilio"},
        {id:"3", name:"Tomas"}
    ]
    
    
    return (
        <div className="list">
        <ul>
        {x1.map((t1) => <li key ={t1.id}>{t1.name} </li>)}
        
        </ul>

            <Props lista={x1} />

        </div>
      );
}

export default List;
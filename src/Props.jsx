
function Props({lista}) {
    return(
        <div className="Props">
        
        <ul>
        {lista.map((t1) => <li key ={t1.id}>{t1.name} </li>)}
        
        </ul>
        
        </div>
    );


}

export default Props;
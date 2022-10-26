
function Props({lista, otroparametro}) {
    return(
        <div className="Props">
        
        <ul>
        {lista.map((t1) => <li key ={t1.id}>{t1.name} </li>)}
        
        </ul>
        <p>{otroparametro}</p>
        </div>
    );


}

export default Props;
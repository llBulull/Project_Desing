import {useState, useEffect} from 'react';

function Hooks1() {
  let x1 = "Ramiro Martínez";

const [batmansname, setName] = useState('BRUNO DIAZ');
const [count, setCount] = useState(0);

useEffect(() => {
  setTimeout(() => {
  setCount((count) => count+1);},1000);

if (count == 5){
setName("PAL BOTE")
}

});



  console.log(x1);

  const changename = function(){
    x1 = "Zarate";
    console.log(x1);
  }
    return (
    <div>
    <p>*****</p>
    <p>{batmansname}</p>
    <p>{x1}</p>
    {/*<p>{count}</p>*/}
    <button onClick={()=> setName("BRUCE WAYNE")}>UseStateHook</button>    
    </div>
  );
}

export default Hooks1;
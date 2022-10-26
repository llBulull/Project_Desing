function Functions2(){
 
    function holaMundo(){
        console.log("HELLO WORLD!!!");
    }

    function mostrarNombre(name){
        console.log(name);
    }
    
  const x1 = function(){
console.log('THIS IS AN ANONYMOUS FUNCTION');
    }

    const arrowFunction = () => {
        console.log("THIS IS AN ARROW FUNCTION");
    }


    const parameterFunction = (p1) => {
        console.log(p1);
    }

    const x2 = (p1, e) => {
        console.log(p1);
        console.log(e);
    }

    return(
    <div>
    <button onClick={holaMundo()}>CLICK ME</button>
    <button onClick={mostrarNombre("RAMIRO")}>CLICK ME</button>
    <button onClick={(x1)}>ANONYMOUS FUNCTION</button>

<p></p>

    <button onClick={(x1)}>ANONYMOUS FUNCTION</button>
    <button onClick={() => parameterFunction("HELLO PEOPLE MY LAST NAME IS MARTINEZ")}>Parameter</button>
    <button onClick={(e) => x2("HELLO PEOPLE MY LAST NAME IS MARTINEZ", e)}>Parameter2</button>
    </div>

    

    );
}
export default Functions2;
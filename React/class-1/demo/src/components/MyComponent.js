// first letter of component name should be capital.
// name of function should match the file name.
function MyComponent(){
    let n= 20
    let name = "manohar"
    // js code should be written here.
    return(
        //write html code here
        <h1>Hi , I'm {name} {sayHi(n)}</h1>
    )
}

//named export

export const sayHi =(n) =>{
    return "Hi" + n;
}
export const sayBye = (n) =>{
    return "Bye" + n;
}

//type of exports - default and named.

//default
export default MyComponent


import {useState} from 'react'


function Child() {
    let[name,setName] = useState("Virat")   //# defining the variable using useState hook (creating state)
    let[flag,setFlag] = useState(true)

    const changeName = () => {
        if(name === "Virat"){
            setName("Rohit")
            setFlag(false)
        }else{
            setName("Virat")
            setFlag(true)
        }
    }
    return (
    <>
        <h4>Child Component</h4>
        <h1><span style={{backgroundColor:'pink',padding:'15px',borderRadius:'15px',border:'none',cursor:'pointer'}}>Name is : <span style={flag? {color:'red'} : {color:'blue'}}>{name}</span></span></h1><br/>

        <button style={{backgroundColor:'black',color:'white', padding:'15px',borderRadius:'10px',border:'none',fontWeight:'bold',cursor:'pointer'}} onClick={changeName}>Change The Name</button>

        {(10 > 20) ? <h1>10 is bigger</h1>:<h1>10 is smaller</h1> }

        {true && <h1>Tushar Good AfterNoon</h1>}
    </>
    )
}

export default Child;
import React, { useState, useEffect } from "react";
import axios from "axios";


function UserList() {


const [listOfUSer , setlistOfUSer ] = useState( []);

const[theme,setTheme] = useState('nuit')

const setThemed =() =>{
        (theme =='nuit')? setTheme('jour') : setTheme('nuit') ;
    }

useEffect(()=>{

    const fetchData = async() =>{

     const result = await axios.get('https://jsonplaceholder.typicode.com/users');
     setlistOfUSer(result.data);
    };
    fetchData();
},[])




 return (
   <div style={{backgroundColor: (theme =='jour') ? 'white' :'black' }} > 

   <button onClick={setThemed} 
           style={{fontSize:'30px' , borderRadius:'15px' ,
                   backgroundColor:(theme =='jour') ? 'black' :'white' ,
                   color:(theme=='jour')?'white' : 'black'
                   ,margin:'15px'}}  >{theme}</button>


<h1 style={{color:'white',textAlign:'center' , fontSize:'90px' , color: (theme =='jour') ? 'black' :'white'}}>List of Users</h1>

   <ul style={{marginTop:'4%',display:'flex' , flexDirection:'column',alignItems:'center'  ,paddingTop:'30px',paddingBottom:'30px' }}>




    <li style={{ width:'100%',display:'flex' , justifyContent:'space-around' , color: (theme =='jour') ? 'red' :'yellow' ,fontSize:'50px',marginBottom:'25px' }} > 

     <div style={{width:'200px'}}>User</div>
     <div style={{width:'150px'}}>username</div>
     <div style={{width:'150px'}}>email </div>
     <div style={{width:'200px'}}>phone</div>
    </li>




    {listOfUSer.map(user => (

    <li key={user.id}  style={{ width:'100%',display:'flex' , justifyContent:'space-around' , color: (theme =='jour') ? 'black' :'white' ,marginBottom:'15px'}}>


     <div style={{width:'200px'}}>
     {user.name}
     </div>

     <div style={{width:'150px'}}>
     {user.username}
     </div>
     <div style={{width:'150px'}}>
     {user.email}
     </div>
     <div style={{width:'200px'}}>
     {user.phone}
     </div>
   </li>))}

   </ul>




   </div>
 );
}
export default UserList;
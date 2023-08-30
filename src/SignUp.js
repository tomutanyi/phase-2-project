import { useState } from "react";

const SignUp = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[first_name,setFirst_Name]=useState('')
    const[last_name,setLast_Name]=useState('')

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    function handleFirstName(e){
        setFirst_Name(e.target.value)
    }

    function handleLastName(e){
        setLast_Name(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()

        let newObj={
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "password": password
        }
      
        fetch("http://ecommerce.muersolutions.com/api/v1/user/signup",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))

        // console.log(password);
        // console.log(email);
        // console.log(first_name);
        // console.log(last_name);
        e.target.reset()
    }

   return(
    <div>
        <form onSubmit={handleSubmit} >
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" onChange={handleFirstName}/>
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" onChange={handleLastName}/>
            <label>Email:</label>
            <input type="email" required placeholder="enter your email" requiredvalue={email} onChange={handleEmail} />
            <label>Password:</label>
            <input type="password" onChange={handlePassword} required value={password} placeholder="enter your password" />
            <button>Sign Up</button>
        </form>
    </div>
   )

}
 
export default SignUp;
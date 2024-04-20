import { useState } from "react"
import Header from "../../complementos/header"
import axios from 'axios'
import "./style.css"


const Login = () => {

    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")


    const req = async ()=> {
      try{
        const response = await axios({
          method: "post",
          url: "https://caiohalbert.bsite.net/api/user/login",
          headers: {"Content-Type": "application/json"},
          data: {
            "email": email,
            "password": psw
          }
        })
        console.log(response);
      }catch(err){
        console.log(err)
      }
    }
    return(

        <main>
            <Header/>
            <section className="GeralLogin">
                <section className="SectLogin">
                    <div className="CunjuntoLogin">
                        <h1>LOGIN</h1>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" placeholder="email"/>
                        <input onChange={(e) => setPsw(e.target.value)} type="password" name="" id="password" placeholder="senha"/>
                        <button onClick={req}>Enviar</button>
                    </div>
                </section>
            </section>
        </main>

    )
}

export default Login
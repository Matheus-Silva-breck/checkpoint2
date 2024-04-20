import Header from "../../complementos/header"
import axios from 'axios'
import { useState } from "react"
import './styles.css'

const Cadastro = () => {

    const [Uname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [psw, setPsw] = useState("")


      const req = async ()=> {
      try{
        const response = await axios({
          method: "post",
          url: "https://caiohalbert.bsite.net/api/user/newUser",
          headers: {"Content-Type": "application/json"},
          data: {
            "username": Uname,
            "email": email,
            "passwordHash": psw,
            "accessLevel": ""
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
                <section className="Geral">
                    <section className="Sect">
                        <div className="Conjunto">
                            <h1>CADASTRO</h1>
                            <input onChange={(e) => setName(e.target.value)} type="text" name="" id="username" placeholder="Username" />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" placeholder="email"/>
                            <input onChange={(e) => setPsw(e.target.value)} type="password" name="" id="password" placeholder="senha"/>
                            <button onClick={req}>Enviar</button>
                        </div>
                    </section>
                </section>
        </main>
    )
}

export default Cadastro
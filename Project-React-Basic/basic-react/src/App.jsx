import Comentario from "./components/Comentarios";
import './App.css'
import { Component } from "react";

class App extends Component{
state = {
  comentarios:[
    {
      nome:"Marcio",
      email:"m.c.s@msn.com",
      data:new Date(2023,5,24),
      msg:"Ola tudo bem?"

    },
    {
      nome:"Adilma",
      email:"adilmacruzs@msn.com",
      data:new Date(2023,5,25),
      msg:"Tudo meu amor!!!"

    }
  ]
}
  addComentario = () => {

    const novoComentario = {
      nome:"John",
      email:"johnes@msn.com",
      data:new Date(),
      msg:"Pai e Mãe!!!"
    }

    //const list = this.state.comentarios
    //list.push(novoComentario)
    //this.setState({comentarios:list})
    
    this.setState({comentarios:[...this.state.comentarios, novoComentario]})
  }

  render(){

    return(
      <div className="App">
        <div>
          <h1>Meu Projeto!</h1>
          {this.state.comentarios.map((comentario, indice) => 
          <Comentario
              key={indice}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}>
              {comentario.msg}
          </Comentario>)}
          <button onClick={this.addComentario}>Comentar</button>
        </div>
      </div>
    )
  }
  
}

export default App;
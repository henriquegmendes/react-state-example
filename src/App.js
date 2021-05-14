import React from 'react';
import './App.css';

import UsersList from './components/UsersList/UsersList';
import Header from './components/Header/Header';

const users = [
  {
    name: 'Vital',
    age: 22,
  },
  {
    name: 'Mayara',
    age: 19,
  },
  {
    name: 'Anderson',
    age: 23,
  },
  {
    name: 'Amarilis',
    age: 17,
  }
];

const App = () => {
  const [counter, setCounter] = React.useState(10); // counter é o valor inicial e o setCounter é a função que atualiza o counter
  const [showContent, setShowContent] = React.useState(true); // hook que usamos para ter state dentro de funções!!
  const [usersList, setUsersList] = React.useState([]);

  React.useEffect(() => {
    // chamando o useEffect passando somente esta callback, ele vai fazer o papel de um componentDidMount E componentDidUpdate (AO MESMO TEMPO!!!)

    console.log("CHAMOU O USE EFFECT DE MONTAGEM E ATUALIZAÇAO DO APP!!!")
  });
  
  React.useEffect(() => {
    // chamando o useEffect passando um array vazio como segundo argumento, ele vai fazer o papel SOMENTE de um componentDidMount
    console.log("CHAMOU O USE EFFECT SOMENTE DE MONTAGEM DO APP!!!")
  }, []); // esse geralmente é o que mais utilizamos no dia a dia

  React.useEffect(() => {
    // chamando o useEffect passando somente a callback e um array com uma dependencia, ele vai fazer o papel de um componentDidMount E vai chamar como um componentDidUpdate SOMENTE SE a dependencia "counter" for atualizada

    // setShowContent(false);

    console.log("CHAMOU O USE EFFECT DE MONTAGEM E ATUALIZAÇAO SOMENTE DA VARIAVEL COUNTER DO APP!!!")
  }, [counter]); // estou passando o counter como DEPENDENCIA deste hook

  return (
    <div className="App">
      {showContent ? (
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => setCounter(counter + 1)}>Clique para aumentar o contador em 1!</button>

          {usersList.length > 0 ? <UsersList users={usersList} /> : <h2>Carregando Usuários....</h2>}
          
        </div>
      ) : <Header>Tudo Escondido!!! ;-)</Header>}
      {/* Conditional RENDERING  */}

      
      <button onClick={() => setShowContent(!showContent)}>{showContent ? 'Esconder' : 'Mostrar'} Todo o conteúdo desta página!!!!</button>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("COMPONENTE APP ESTA SENDO CONSTRUIDO!!!!");

//     this.state = {
//       counter: 1,
//       showContent: true,
//       userName: '',
//     };
//   }

//   updateCounter = () => {
//     console.log('Cliquei no updateCounter');

//     this.setState({ counter: this.state.counter + 1 });
//   }

//   updateShowContent = () => {
//     console.log('Cliquei no updateShowContent');

//     this.setState({ showContent: !this.state.showContent });
//   }

//   loadUserName = () => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Fulano de Tal");
//       }, 5000);
//     });
//   };

//   render() {
//     console.log("COMPONENTE APP ESTA RENDERIZANDO!!!!");

//     return (
//       <div className="App">
//         <h1>Bem vindo ao APP!!!!!</h1>

//         {this.state.userName.length > 0 ? <p>{this.state.userName}</p> : <p>Carregando usuario.....</p>}

//         {/* {this.state.showContent ? (
//           <div>
//             <h1>Counter: {this.state.counter}</h1>
//             <button onClick={this.updateCounter}>Clique para aumentar o contador em 1!</button>
//           </div>
//         ) : <Header>Tudo Escondido!!! ;-)</Header>}

        
//         <button onClick={this.updateShowContent}>{this.state.showContent ? 'Esconder' : 'Mostrar'} Todo o conteúdo desta página!!!!</button> */}
//       </div>
//     );
//   }

//   componentDidMount() {
//     console.log("COMPONENTE APP MONTOU!!!!! CARREGANDO NOME DO USUARIO... AGUARDE!!");
//     this.loadUserName()
//       .then(name => {
//         this.setState({ userName: name });
//       });
//   }

//   componentDidUpdate() {
//     console.log("COMPONENTE APP ATUALIZOU!!!!!");
//   }

// }

export default App;

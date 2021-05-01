import React from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = React.useState(1); // counter é o valor inicial e o setCounter é a função que atualiza o counter
  const [showContent, setShowContent] = React.useState(true);

  console.log('CARREGANDO O COMPONENTE!!!!!!!', counter);

  return (
    <div className="App">
      {showContent ? (
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => setCounter(counter + 1)}>Clique para aumentar o contador em 1!</button>
        </div>
      ) : <h1>Tudo Escondido!!! ;-)</h1>}

      
      <button onClick={() => setShowContent(!showContent)}>{showContent ? 'Esconder' : 'Mostrar'} Todo o conteúdo desta página!!!!</button>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     counter: 1,
//     showContent: true,
//   }

//   updateCounter = () => {
//     console.log('CLiquei no updateCounter');

//     this.setState({ counter: this.state.counter + 1 });
//   }

//   updateShowContent = () => {
//     console.log('CLiquei no updateShowContent');

//     this.setState({ showContent: !this.state.showContent });
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.showContent ? (
//           <div>
//             <h1>Counter: {this.state.counter}</h1>
//             <button onClick={this.updateCounter}>Clique para aumentar o contador em 1!</button>
//           </div>
//         ) : <h1>Tudo Escondido!!! ;-)</h1>}

        
//         <button onClick={this.updateShowContent}>{this.state.showContent ? 'Esconder' : 'Mostrar'} Todo o conteúdo desta página!!!!</button>
//       </div>
//     );
//   }
// }

export default App;

import React from 'react';

const Header = props => {
  React.useEffect(() => {
    console.log("USE EFFECT DO HEADER CHAMADO!!!")


    return () => {
      console.log("CHAMANDO O 'componentWillUnmount DO HEADER...'")
    } // o useEffect GUARDA essa callback para invocar no momento em que o componente vai DESMONTAR!!!

  }); // useEffect de montagem e atualização

  return (
    <h1>{props.children}</h1>
  );
}

// class Header extends React.Component {
//   constructor() {
//     super();
//     console.log("COMPONENTE HEADER ESTA SENDO CONSTRUIDO!!!!");
//   }

//   render() {
//     console.log("COMPONENTE HEADER ESTA RENDERIZANDO!!!!");

//     return (
//       <h1>{this.props.children}</h1>
//     );
//   }

//   componentDidMount() {
//     console.log("COMPONENTE HEADER TERMINOU DE MONTAR!!!!");
//   }

//   componentDidUpdate() {
//     console.log("COMPONENTE HEADER ATUALIZOU!!!!!");
//   }

//   componentWillUnmount() {
//     console.log("COMPONENTE HEADER ESTA DESMONTANDO!!!!!");
//   }
// }

export default Header;

import React from 'react';

const UsersList = (props) => {
  console.log('PROPSSSSSSS!!!! ', props);

  const displayUsers = (usersList) => {
    return usersList.map((user, index) => {
      return (
        <li key={`user-${index + 1}`}>
          <span>Nome: {user.name}</span>
          <span> ------ </span>
          <span>Idade: {user.age} anos</span>
        </li>
      );
    });
  }

  return (
    <ul>
      {displayUsers(props.users)}
    </ul>
  );
};

export default UsersList;


// array de objetos (users) ----------> array de "HTMLs" ouuuuuuuuuu um array de JSX
// Array.forEach() ----------> undefined (FOR EACH SOMENTE FAZ UM LOOP NO ARRAY)

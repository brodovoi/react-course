import { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserInfo = () => {
  const { user } = useContext(UserContext);
  return <h1>{user}</h1>;
};

export default UserInfo;

// import { useContext } from 'react';
// import UserContext from '../context/UserContext';

// const UserInfo = () => {
//   const user = useContext(UserContext);

//   return <h1>{user}</h1>;
// };

// export default UserInfo;

// import UserContext from '../context/UserContext';

// const UserInfo = () => {
//   return (
//     <UserContext.Consumer>
//       {/* <div>{user}</div> */}
//       {(value) => <h1>{value}</h1>}
//     </UserContext.Consumer>
//   );
// };

// export default UserInfo;

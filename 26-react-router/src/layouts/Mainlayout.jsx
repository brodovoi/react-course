import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const Mainlayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Mainlayout;

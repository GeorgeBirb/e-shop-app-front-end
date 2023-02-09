import { Link } from 'react-router-dom'
import UserService from "../services/UserService";
import '../App.css'
import { useEffect, useState } from 'react';

function Navbar() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(UserService.getUsername());
  }, []);

  useEffect(() => {
    console.log('userName', userName);
  }, [userName]);

  return (

    <div className="nav-bar-container-light">
      <div className='alignLeft'>
        <h2>Welcome,</h2>
        <h2>{userName}!!</h2>
      </div>
      <div>
        <ul className="middle-items">
          <li className="list-item">
            <Link to="/shop" className="link-light">
              |Shops|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/shopCategory" className="link-light">
              |Shop Categories|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/product" className="link-light">
              |Product|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/productCategory" className="link-light">
              |Product Categories|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/role" className="link-light">
              |Roles|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/admin" className="link-light">
              |Admins|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/review" className="link-light">
              |Reviews|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/payment" className="link-light">
              |Payment|
            </Link>
          </li>
          <li className="list-item">
            <Link to="/paymentCategory" className="link-light">
              |Payment Categories|
            </Link>
          </li>
        </ul>
      </div>
      <div className='alignRight'>
        <button className="buttonLogout" onClick={() => UserService.doLogout()}>
          <h2>Logout</h2>
        </button>
      </div>
    </div>
  );
}

export default Navbar
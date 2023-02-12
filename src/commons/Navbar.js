import { useNavigate } from 'react-router-dom'
import UserService from "../services/UserService";
import '../App.css'
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Menu from '@mui/icons-material/Menu';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const options = [
    {
      value: "/shop",
      label: "Shops"
    },
    {
      value: "/shopCategory",
      label: "Shop Categories"
    },
    {
      value: "/product",
      label: "Product"
    },
    {
      value: "/productCategory",
      label: "Product Categories"
    },
    {
      value: "/role",
      label: "Roles"
    },
    {
      value: "/admin",
      label: "Admins"
    },
    {
      value: "/cart",
      label: "Carts"
    },
    {
      value: "/cartProduct",
      label: "Cart & Products"
    },
    {
      value: "/review",
      label: "Reviews"
    },
    {
      value: "/payment",
      label: "Payments"
    },
    {
      value: "/paymentCategory",
      label: "Payment Categories"
    }
  ];

  useEffect(() => {
    setUserName(UserService.getUsername());
  }, []);

  useEffect(() => {
    console.log('userName', userName);
  }, [userName]);

  const handleChange = (selectedOption) => {
    navigate(selectedOption.value);
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      UserService.doLogout();
    }
  };
  
  return (

    <div className="nav-bar-container-light">
      <div className='alignLeft'>
        <h2>Welcome,</h2>
        <h2>{userName}!!</h2>
      </div>

      <div className='alignRight'>
        <Button
          variant="contained"
          title="Logout"
          style={{ backgroundColor: 'black' }}
          startIcon={<ExitToApp />}
          onClick={handleLogout}        />
        <div>
          <Select
            placeholder={<Menu />}
            options={options}
            onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Navbar
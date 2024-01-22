// import {useNavigate} from 'react-router-dom';

export default function LogoutButton({ setUser }) {
  // const navigate = useNavigate();
  function clearUser() {
    setUser();
  };

  return (
    <div className="logoutButton">
      <button onClick={clearUser}>Log Out</button>
    </div>
  );
};
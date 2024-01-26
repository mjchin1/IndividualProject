import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();


  return (
    <div className="logoutPage">
      <h1 className="logoutMessage">You have been logged out.</h1>
      <h1 className="logoutMessage">Thank you, please come again!</h1>
      <button className="logoutPageButton" onClick={() => {
        navigate("/places");
      }}>Back to Homepage</button>
    </div>
  );
};
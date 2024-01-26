import {Link} from 'react-router-dom';

export default function Navigations({user}) {
    return (
        <nav>
          
            <Link to = '/places'>Home</Link>
            {!user.user_id? <Link to = '/register'>Register</Link>: null} 
            {!user.user_id? <Link to = '/login'>Log In</Link> : null}
            {user.user_id? <Link to = '/new-place'>Submit a Location</Link> :null}
            {user.user_id? <Link to = {`/users/${user.user_id}/favorites`}>Favorites</Link>: null}
            {user.user_id? <Link to = {`/account`}>Account</Link> : null}
        </nav>
    );
};
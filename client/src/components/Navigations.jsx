import {Link} from 'react-router-dom';

export default function Navigations({user}) {
    return (
        <nav>
            <Link to = '/register'>Register</Link>
            {/* <Link to = "/login">Log In</Link> */}
            <Link to = '/places'>All Places</Link>
            <Link to = '/login'>Log In</Link>
            <Link to = '/new-place'>Submit a Beautiful Place</Link>
            <Link to = {`/users/${user.user_id}/favorites`}>Favorites</Link>
            <Link to = {`/account`}>Account</Link>
            {/* {token ? <Link to = '/account'>My Account</Link> : null}
            {token ? <Link to='/books/reservations'>My Reservations</Link> : null} */}
        </nav>
    );
};
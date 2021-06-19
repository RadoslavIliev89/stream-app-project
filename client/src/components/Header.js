import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/">Stream</Link>
            <div className="right menu">
                <Link to="/">Stream List</Link>
                <GoogleAuth />
            </div>
        </div>
    );
}
export default Header;
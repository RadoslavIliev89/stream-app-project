import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/">Stream</Link>
            <div className="right menu">
                <Link to="/">Stream List</Link>
            </div>
        </div>
    );
}
export default Header;
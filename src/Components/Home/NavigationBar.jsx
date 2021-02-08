import { Avatar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import '../../Styles/NavigationBar.css';

export const NavigationBar = () => {
  const auth_status = localStorage.getItem('token') ? true : false;
  const profile_pic = localStorage.getItem('profile') || '';
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    history.push('/');

    window.location.reload(false);
  };
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="Router__link">
          <h1 className="nav-left-companyName">UXfactory Blogs</h1>
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-right-auth">
          {auth_status ? (
            <h5 className="nav-right-link" onClick={Logout}>
              Logout
            </h5>
          ) : (
            <Link to="/user-auth" className="Router__link">
              <h5 className="nav-right-link">SignUp / Login</h5>
            </Link>
          )}
        </div>
        <Link to="/blogs" className="Router__link">
          <h5 className="nav-right-link">View Blogs</h5>
        </Link>
        {auth_status ? (
          <div className="nav-right-blog">
            <Link to="/write-blog" className="Router__link">
              <h5 className="nav-right-link">Write Blog</h5>
            </Link>
          </div>
        ) : null}
        <div className="nav-right-user">
          {auth_status ? (
            <Avatar src={profile_pic} alt="User Profile Image" className="nav-right-link profilePicture-icon" />
          ) : (
            <Avatar src="" alt="User Profile Image" className="nav-right-link profilePicture-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

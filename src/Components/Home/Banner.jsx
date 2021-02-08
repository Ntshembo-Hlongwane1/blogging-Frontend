import { useHistory } from 'react-router-dom';
import '../../Styles/Banner.css';

export const Banner = () => {
  const token = localStorage.getItem('token');
  const history = useHistory();
  const RedirectUser = () => {
    if (token) {
      return history.push('/write-blog');
    }

    alert('SignUp Or SignIn to start blogging');
    history.push('/user-auth');
  };

  return (
    <div className="banner">
      <div className="banner-text">
        <div className="banner-text-top">
          <h3 className="banner-text-heading">
            <span className="banner-text-headingprefix">UX</span>
            <span className="banner-text-headingsuffix">factory Blogs</span>
          </h3>
          <p className="banner-text-subheading">Get to know what's happening</p>
        </div>
        <div className="banner-text-bottom">
          <button onClick={RedirectUser} className="btn btn-start-blogging">
            Start Blogging
          </button>
        </div>
      </div>
    </div>
  );
};

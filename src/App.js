import { Home } from './Components/Home/Home';
import { Auth } from './Components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './Components/Home/NavigationBar';
import { WriteBlog } from './Components/WriteBlog';
import { Posts } from './Components/Posts';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/blogs" exact={true}>
          <NavigationBar />
          <Posts />
        </Route>
        <Route path="/write-blog" exact={true}>
          <NavigationBar />
          <WriteBlog />
        </Route>
        <Route path="/user-auth">
          <NavigationBar />
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import React, { Fragment } from 'react';
import PlantsContainer from './containers/PlantsContainer';
// import UsersContainer from './containers/UsersContainer';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './components/users/Login'
// import Nav from './components/nav'
// import NotFound from './components/notFound'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <UsersContainer />
//         <PlantsContainer />
//       </div>
//     );
//   }
// };

// export default App

const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <Fragment>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/plants" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/plants" component={PlantsContainer} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Fragment>
  )
}

export default withRouter(App) //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected


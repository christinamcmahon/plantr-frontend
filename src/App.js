import React, { Fragment } from 'react';
import PlantsContainer from './containers/PlantsContainer';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './components/users/Login'
import Signup from './components/users/Signup'
import Header from './containers/Header'
// import NotFound from './components/notFound'
import { Grid } from '@material-ui/core'

const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <Fragment>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/plants" />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/plants" component={PlantsContainer} />
            </Switch>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default withRouter(App) //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './context/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './components/Loading'

const Post = React.lazy(() => import('./components/Post'))
const Posts = React.lazy(() => import('./components/Posts'))
const User = React.lazy(() => import('./components/User'))

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route
                    exact
                    path='/' 
                    render={() => <Posts type='top' />}
                  />
                  <Route
                    path='/new' 
                    render={() => <Posts type='new' />}
                  />
                  <Route path='/post' render={(props) => <Post {...props} />} />
                  <Route path='/user' render={(props) => <User {...props} />} />
                  <Route render={() => <h1>404</h1> } />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
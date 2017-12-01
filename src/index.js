import {
  HashRouter,
  Link,
  Route
} from 'react-router-dom'

import './index.scss'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listComponent: null
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route path="/" component={getComponent(() => import(/* webpackChunkName: "study" */'./views/main'))} />
        </div>
      </HashRouter>
    )
  }

}

const getComponent = (cb) => (
  class AsyncGetJs extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        Component: null
      }
    }
    componentDidMount() {
      cb().then(component => {
        this.setState({
          Component: component
        })
      }).catch(err => {
        if(err)console.error(err)
      })
    }
    render() {
      const { Component } = this.state
      return Component ? <Component /> : null
    }
  }
)


const container = document.getElementById('app')

ReactDOM.render(<MainPage />, container)
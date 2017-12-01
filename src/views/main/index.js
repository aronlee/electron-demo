import path from 'path'
import './main.scss'

import Header from './components/header'

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aa: 111
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { aa } = this.state;
    return (
      <div>
        <Header/>
      </div>
    )
  }
}
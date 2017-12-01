import './header.scss'
import logo from './img/music-logo.svg'

export default class Header extends React.Component {
  
  render(){
    return (
      <header className="header clearfix">
        <div className="logo pull-left">
          <img src={logo} alt=""/>
          <p className="title">我的云音乐</p>
        </div>
        <div className="forward-return pull-left">
          <div className="control return" disabled>
            <i className="iconfont icon-return"></i>
          </div>
          <div className="control forward">
            <i className="iconfont icon-enter"></i>
          </div>
        </div>
        <div className="header-input-wrap pull-left">
          <input className="ipt" type="text" placeholder="搜索歌曲，歌词，歌手，用户"/>
          <i className="iconfont icon-search"></i>
        </div>
      </header>
    )
  }

}
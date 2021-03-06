import React, {Component} from 'react'
class LoginHeader extends Component {
  // 点击关闭登录页面
  closeLogin = () => {
    document.getElementsByClassName('phone')[0].style.border = ''
    document.getElementById('phoneImg').style.display = 'none'
    const btnLogin = document.getElementById('login')
    btnLogin.style.display = 'none'
    document.getElementsByClassName('phone')[0].style.border = ''
    document.getElementsByClassName('phone')[0].value = ''
    document.getElementById('phoneImg').style.display = 'none'
    document.getElementById('login_yard_input').value = ''
    document.getElementById('login_yard_input').style.border = ''
    document.getElementById('codeImg').style.display = 'none'
  }
  render () {
    return (
      <div>
        <div id='login_logo'>
          <img src={require('../assets/images/avatar.jpg')} alt='' width={32} height={32} />
          <div>欢迎回到 ZUO</div>
          <a href='#' id='closeLogin' onClick={this.closeLogin}><img src={require('../assets/images/false.png')} alt='' height={30} width={30} /></a>
        </div>
      </div>
    )
  }
}
export default LoginHeader

import React from 'react'
import './Keyboard.css'
import layouts from './layout/layouts'
import KeyUI from './Key-UI'

const keys = new Set()

class KeyboardUI extends React.Component {
  static putKey(key) {
    keys.add(key)
  }
  
  constructor() {
    super()
    KeyUI.autoCalcWidth(document.body.clientWidth)
  }
  
  componentDidMount() {
    window.onresize = () => {
      KeyUI.autoCalcWidth(document.body.clientWidth)
      keys.forEach(key => {
        key.updateSize()
      })
    }
  }
  
  render() {
    return [
      <h1>React-Keyboard-UI</h1>,
      <h4>一个支持添加标记的键盘组件样式</h4>,
      <p><a href="https://github.com/BlueSky-07/React-Keyboard-UI">Github: BlueSky-07/React-Keyboard-UI</a></p>,
      <hr/>,
      <h1>Qwerty</h1>,
      layouts.english.qwerty,
      layouts.shuang.qwerty.daniu,
      layouts.shuang.qwerty.guobiao,
      layouts.shuang.qwerty.jiandao3,
      layouts.shuang.qwerty.jiandao6,
      layouts.shuang.qwerty.pinyinjiajia,
      layouts.shuang.qwerty.sougou,
      layouts.shuang.qwerty.weiruan,
      layouts.shuang.qwerty.xiaoguan,
      layouts.shuang.qwerty.xiaohe,
      layouts.shuang.qwerty.xiaolang,
      layouts.shuang.qwerty.zhinengabc,
      layouts.shuang.qwerty.ziguang,
      layouts.shuang.qwerty.ziranma,
      <hr/>,
      <h1>Dvorak</h1>,
      layouts.english.dvorak,
      layouts.shuang.dvorak.daniu,
      layouts.shuang.dvorak.guobiao,
      layouts.shuang.dvorak.jiandao3,
      layouts.shuang.dvorak.jiandao6,
      layouts.shuang.dvorak.pinyinjiajia,
      layouts.shuang.dvorak.sougou,
      layouts.shuang.dvorak.weiruan,
      layouts.shuang.dvorak.xiaoguan,
      layouts.shuang.dvorak.xiaohe,
      layouts.shuang.dvorak.xiaolang,
      layouts.shuang.dvorak.zhinengabc,
      layouts.shuang.dvorak.ziguang,
      layouts.shuang.dvorak.ziranma
    ]
  }
}

export default KeyboardUI
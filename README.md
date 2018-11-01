React-Keyboard-UI：一个支持添加标记的键盘组件样式
===

[https://api.ihint.me/keyboard](https://api.ihint.me/keyboard)

#### 兼容性

经过测试，可以正常显示样式的浏览器：

PC 端：

- Chrome 70.0.3538.77（正式版本） （64 位）

- Firefox Quantum 63.0.1 （64 位）

- Microsoft Edge  42.17134.1.0 Microsoft EdgeHTML 17.17134

iOS 端：

- Safari （iOS 12.1）

*注意：不兼容所有版本的 IE*

#### 添加其他键盘布局或样式

1. 在 `model/keyset/` 中定义一组按键的属性集合，并在 `model/keyset/keysets.js` 中添加该集合

2. 在 `view/layout/` 中定义一个键盘样式，并在 `view/layout/layouts.js` 中添加该键盘布局
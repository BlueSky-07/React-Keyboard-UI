import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const weiruan =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-weiruan-dvorak">
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.TildeAndBackquote}/>
        <KeyUI setKey={keysets.english.qwerty.ExclamationMarkAndDigitOne}/>
        <KeyUI setKey={keysets.english.qwerty.AtSignAndDigitTwo}/>
        <KeyUI setKey={keysets.english.qwerty.NumberSignAndDigitThree}/>
        <KeyUI setKey={keysets.english.qwerty.DollarSignAndDigitFour}/>
        <KeyUI setKey={keysets.english.qwerty.PercentAndDigitFive}/>
        <KeyUI setKey={keysets.english.qwerty.CaretAndDigitSix}/>
        <KeyUI setKey={keysets.english.qwerty.AmpersandAndDigitSeven}/>
        <KeyUI setKey={keysets.english.qwerty.AsteriskAndDigitEight}/>
        <KeyUI setKey={keysets.english.qwerty.OpenRoundBracketAndDigitNine}/>
        <KeyUI setKey={keysets.english.qwerty.CloseRoundBracketAndDigitZero}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.Backspace} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.Tab} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.shuang.weiruan.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.weiruan.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.weiruan.Semicolon} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.weiruan.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.weiruan.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default weiruan
import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const ziguang =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-ziguang-dvorak">
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
        <KeyUI setKey={keysets.shuang.ziguang.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziguang.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziguang.Semicolon} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziguang.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziguang.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default ziguang
import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const jiandao6 =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-jiandao6-dvorak">
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
        <KeyUI setKey={keysets.shuang.jiandao6.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.jiandao6.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.jiandao6.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao6.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.jiandao6.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default jiandao6
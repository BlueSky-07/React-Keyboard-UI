import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const jiandao3 =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-jiandao3-dvorak">
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
        <KeyUI setKey={keysets.shuang.jiandao3.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.jiandao3.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.jiandao3.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.jiandao3.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.jiandao3.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default jiandao3
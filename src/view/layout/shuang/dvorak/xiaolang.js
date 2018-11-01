import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const xiaolang =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-xiaolang-dvorak">
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
        <KeyUI setKey={keysets.shuang.xiaolang.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaolang.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.xiaolang.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaolang.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaolang.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default xiaolang
import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const zhinengabc =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-zhinengabc-dvorak">
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
        <KeyUI setKey={keysets.shuang.zhinengabc.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.zhinengabc.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default zhinengabc
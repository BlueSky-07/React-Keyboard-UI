import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const daniu =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-daniu-dvorak">
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
        <KeyUI setKey={keysets.shuang.daniu.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.daniu.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.daniu.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.daniu.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.daniu.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default daniu
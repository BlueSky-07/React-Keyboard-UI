import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const ziranma =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-ziranma">
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
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.Backspace} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.Tab} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziranma.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziranma.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziranma.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.ziranma.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.ziranma.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default ziranma
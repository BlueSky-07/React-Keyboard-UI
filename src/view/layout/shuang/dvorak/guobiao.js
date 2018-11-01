import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const guobiao =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-guobiao-dvorak">
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
        <KeyUI setKey={keysets.shuang.guobiao.P} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.F} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.guobiao.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.U} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.H} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.S} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.shuang.guobiao.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.J} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.M} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.guobiao.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.guobiao.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default guobiao
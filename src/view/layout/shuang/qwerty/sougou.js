import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const sougou =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-sougou">
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
        <KeyUI setKey={keysets.shuang.sougou.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.sougou.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.L} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.Semicolon} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.sougou.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.sougou.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.sougou.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default sougou
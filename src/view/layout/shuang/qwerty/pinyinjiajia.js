import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const pinyinjiajia =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-pinyinjiajia">
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
        <KeyUI setKey={keysets.shuang.pinyinjiajia.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.pinyinjiajia.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default pinyinjiajia
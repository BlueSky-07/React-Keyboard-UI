import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const xiaohe =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-xiaohe">
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
        <KeyUI setKey={keysets.shuang.xiaohe.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaohe.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaohe.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaohe.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaohe.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default xiaohe
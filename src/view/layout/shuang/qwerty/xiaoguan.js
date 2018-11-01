import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const xiaoguan =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-xiaoguan">
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
        <KeyUI setKey={keysets.shuang.xiaoguan.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.xiaoguan.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default xiaoguan
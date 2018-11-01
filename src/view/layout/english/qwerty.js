import KeyUI from '../../Key-UI'
import keysets from '../../../model/keyset/keysets'
import React from 'react'

/**
 * Reference:
 *
 * https://en.wikipedia.org/wiki/File:KB_United_States.svg
 */

const qwerty =
    <div className={'Keyboard'} key="english-qwerty">
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
        <KeyUI setKey={keysets.english.qwerty.Q}/>
        <KeyUI setKey={keysets.english.qwerty.W}/>
        <KeyUI setKey={keysets.english.qwerty.E}/>
        <KeyUI setKey={keysets.english.qwerty.R}/>
        <KeyUI setKey={keysets.english.qwerty.T}/>
        <KeyUI setKey={keysets.english.qwerty.Y}/>
        <KeyUI setKey={keysets.english.qwerty.U}/>
        <KeyUI setKey={keysets.english.qwerty.I}/>
        <KeyUI setKey={keysets.english.qwerty.O}/>
        <KeyUI setKey={keysets.english.qwerty.P}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.A}/>
        <KeyUI setKey={keysets.english.qwerty.S}/>
        <KeyUI setKey={keysets.english.qwerty.D}/>
        <KeyUI setKey={keysets.english.qwerty.F} className={'underline-mark'}/>
        <KeyUI setKey={keysets.english.qwerty.G}/>
        <KeyUI setKey={keysets.english.qwerty.H}/>
        <KeyUI setKey={keysets.english.qwerty.J} className={'underline-mark'}/>
        <KeyUI setKey={keysets.english.qwerty.K}/>
        <KeyUI setKey={keysets.english.qwerty.L}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.Z}/>
        <KeyUI setKey={keysets.english.qwerty.X}/>
        <KeyUI setKey={keysets.english.qwerty.C}/>
        <KeyUI setKey={keysets.english.qwerty.V}/>
        <KeyUI setKey={keysets.english.qwerty.B}/>
        <KeyUI setKey={keysets.english.qwerty.N}/>
        <KeyUI setKey={keysets.english.qwerty.M}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.SpaceBar} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default qwerty
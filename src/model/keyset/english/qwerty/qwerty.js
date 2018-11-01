import a from './letter/lowercase-a'
import A from './letter/uppercase-a'
import b from './letter/lowercase-b'
import B from './letter/uppercase-b'
import c from './letter/lowercase-c'
import C from './letter/uppercase-c'
import d from './letter/lowercase-d'
import D from './letter/uppercase-d'
import e from './letter/lowercase-e'
import E from './letter/uppercase-e'
import f from './letter/lowercase-f'
import F from './letter/uppercase-f'
import g from './letter/lowercase-g'
import G from './letter/uppercase-g'
import h from './letter/lowercase-h'
import H from './letter/uppercase-h'
import i from './letter/lowercase-i'
import I from './letter/uppercase-i'
import j from './letter/lowercase-j'
import J from './letter/uppercase-j'
import k from './letter/lowercase-k'
import K from './letter/uppercase-k'
import l from './letter/lowercase-l'
import L from './letter/uppercase-l'
import m from './letter/lowercase-m'
import M from './letter/uppercase-m'
import n from './letter/lowercase-n'
import N from './letter/uppercase-n'
import o from './letter/lowercase-o'
import O from './letter/uppercase-o'
import p from './letter/lowercase-p'
import P from './letter/uppercase-p'
import q from './letter/lowercase-q'
import Q from './letter/uppercase-q'
import r from './letter/lowercase-r'
import R from './letter/uppercase-r'
import s from './letter/lowercase-s'
import S from './letter/uppercase-s'
import t from './letter/lowercase-t'
import T from './letter/uppercase-t'
import u from './letter/lowercase-u'
import U from './letter/uppercase-u'
import v from './letter/lowercase-v'
import V from './letter/uppercase-v'
import w from './letter/lowercase-w'
import W from './letter/uppercase-w'
import x from './letter/lowercase-x'
import X from './letter/uppercase-x'
import y from './letter/lowercase-y'
import Y from './letter/uppercase-y'
import z from './letter/lowercase-z'
import Z from './letter/uppercase-z'

import Backspace from './function/backspace'
import Tab from './function/tab'
import CapsLock from './function/capslock'
import Enter from './function/enter'
import ShiftLeft from './function/shift-left'
import ShiftRight from './function/shift-right'
import CtrlLeft from './function/ctrl-left'
import WinLeft from './function/win-left'
import AltLeft from './function/alt-left'
import SpaceBar from './function/spacebar'
import AltRight from './function/alt-right'
import WinRight from './function/win-right'
import Menu from './function/menu'
import CtrlRight from './function/ctrl-right'

import TildeAndBackquote from './combination/combination-tilde-backquote'
import Tilde from './combination/single-tilde'
import Backquote from './combination/single-backquote'
import ExclamationMarkAndDigitOne from './combination/combination-exclamation-mark-digit-one'
import ExclamationMark from './combination/single-exclamation-mark'
import DigitOne from './combination/single-digit-one'
import AtSignAndDigitTwo from './combination/combination-at-sign-digit-two'
import AtSign from './combination/single-at-sign'
import DigitTwo from './combination/single-digit-two'
import NumberSignAndDigitThree from './combination/combination-number-sign-digit-three'
import NumberSign from './combination/single-number-sign'
import DigitThree from './combination/single-digit-three'
import DollarSignAndDigitFour from './combination/combination-dollar-sign-digit-four'
import DollarSign from './combination/single-dollar-sign'
import DigitFour from './combination/single-digit-four'
import PercentAndDigitFive from './combination/combination-percent-digit-five'
import Percent from './combination/single-percent'
import DigitFive from './combination/single-digit-five'
import CaretAndDigitSix from './combination/combination-caret-digit-six'
import Caret from './combination/single-caret'
import DigitSix from './combination/single-digit-six'
import AmpersandAndDigitSeven from './combination/combination-ampersand-digit-seven'
import Ampersand from './combination/single-ampersand'
import DigitSeven from './combination/single-digit-seven'
import AsteriskAndDigitEight from './combination/combination-asterisk-digit-eight'
import Asterisk from './combination/single-asterisk'
import DigitEight from './combination/single-digit-eight'
import OpenRoundBracketAndDigitNine from './combination/combination-open-round-bracket-digit-nine'
import OpenRoundBracket from './combination/single-open-round-bracket'
import DigitNine from './combination/single-digit-nine'
import CloseRoundBracketAndDigitZero from './combination/combination-close-round-bracket-digit-zero'
import CloseRoundBracket from './combination/single-close-round-bracket'
import DigitZero from './combination/single-digit-zero'
import UnderstrikeAndMinus from './combination/combination-understrike-minus'
import Understrike from './combination/single-understrike'
import Minus from './combination/single-minus'
import PlusAndEqualsSign from './combination/combination-plus-equals-sign'
import Plus from './combination/single-plus'
import EqualsSign from './combination/single-equals-sign'
import OpenCurlyBracketAndOpenSquareBracket from './combination/combination-open-curly-bracket-open-square-bracket'
import OpenCurlyBracket from './combination/single-open-curly-bracket'
import OpenSquareBracket from './combination/single-open-square-bracket'
import CloseCurlyBracketAndCloseSquareBracket from './combination/combination-close-curly-bracket-close-square-bracket'
import CloseCurlyBracket from './combination/single-close-curly-bracket'
import CloseSquareBracket from './combination/single-close-square-bracket'
import VerticalBarAndBackslash from './combination/combination-vertical-bar-backslash'
import VerticalBar from './combination/single-vertical-bar'
import Backslash from './combination/single-backslash'
import ColonAndSemicolon from './combination/combination-colon-semicolon'
import Colon from './combination/single-colon'
import Semicolon from './combination/single-semicolon'
import QuoteAndSingleQuote from './combination/combination-quote-single-quote'
import Quote from './combination/single-quote'
import SingleQuote from './combination/single-single-quote'
import OpenPointyBracketAndComma from './combination/combination-open-pointy-bracket-comma'
import OpenPointyBracket from './combination/single-open-pointy-bracket'
import Comma from './combination/single-comma'
import ClosePointyBracketAndPeriod from './combination/combination-close-pointy-bracket-period'
import ClosePointyBracket from './combination/single-close-pointy-bracket'
import Period from './combination/single-period'
import QuestionMarkAndSlash from './combination/combination-question-mark-slash'
import QuestionMark from './combination/single-question-mark'
import Slash from './combination/single-slash'

const qwerty = {
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
  Backspace, Tab, CapsLock, Enter, ShiftLeft, ShiftRight,
  CtrlLeft, WinLeft, AltLeft, SpaceBar, AltRight, WinRight, Menu, CtrlRight,
  TildeAndBackquote, Tilde, Backquote,
  ExclamationMarkAndDigitOne, ExclamationMark, DigitOne,
  AtSignAndDigitTwo, AtSign, DigitTwo,
  NumberSignAndDigitThree, NumberSign, DigitThree,
  DollarSignAndDigitFour, DollarSign, DigitFour,
  PercentAndDigitFive, Percent, DigitFive,
  CaretAndDigitSix, Caret, DigitSix,
  AmpersandAndDigitSeven, Ampersand, DigitSeven,
  AsteriskAndDigitEight, Asterisk, DigitEight,
  OpenRoundBracketAndDigitNine, OpenRoundBracket, DigitNine,
  CloseRoundBracketAndDigitZero, CloseRoundBracket, DigitZero,
  UnderstrikeAndMinus, Understrike, Minus,
  PlusAndEqualsSign, Plus, EqualsSign,
  OpenCurlyBracketAndOpenSquareBracket, OpenCurlyBracket, OpenSquareBracket,
  CloseCurlyBracketAndCloseSquareBracket, CloseCurlyBracket, CloseSquareBracket,
  VerticalBarAndBackslash, VerticalBar, Backslash,
  ColonAndSemicolon, Colon, Semicolon,
  QuoteAndSingleQuote, Quote, SingleQuote,
  OpenPointyBracketAndComma, OpenPointyBracket, Comma,
  ClosePointyBracketAndPeriod, ClosePointyBracket, Period,
  QuestionMarkAndSlash, QuestionMark, Slash
}

export default qwerty
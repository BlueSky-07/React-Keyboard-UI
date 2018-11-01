/**
 
 +-----------+-----------+
 |           |           |
 |     )     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     0     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class CloseRoundBracketAndDigitZero extends Key {
  constructor() {
    super({
      name: 'CloseRoundBracket&DigitZero',
      type: KeyType.COMBINATION,
      description: ') 0',
      content: {leftTop: ')', leftBottom: '0'},
      actions: {
        self: qwerty.DigitZero,
        with: {shift: qwerty.CloseRoundBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitZero, qwerty.CloseRoundBracket]
      }
    })
  }
}

export default CloseRoundBracketAndDigitZero
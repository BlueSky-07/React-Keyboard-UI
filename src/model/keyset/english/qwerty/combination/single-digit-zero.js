/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
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

class DigitZero extends Key {
  constructor() {
    super({
      name: 'DigitZero',
      type: KeyType.COMBINATION,
      description: '0',
      content: {leftBottom: '0'},
      actions: {
        self: DigitZero,
        with: {shift: qwerty.CloseRoundBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CloseRoundBracketAndDigitZero
      }
    })
  }
}

export default DigitZero
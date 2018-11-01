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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class CloseRoundBracket extends Key {
  constructor() {
    super({
      name: 'CloseRoundBracket',
      type: KeyType.COMBINATION,
      description: ')',
      content: {leftTop: ')'},
      actions: {
        self: CloseRoundBracket,
        with: {shift: qwerty.DigitZero},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CloseRoundBracketAndDigitZero
      }
    })
  }
}

export default CloseRoundBracket
/**
 
 +-----------+-----------+
 |           |           |
 |     (     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     9     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class OpenRoundBracketAndDigitNine extends Key {
  constructor() {
    super({
      name: 'OpenRoundBracket&DigitNine',
      type: KeyType.COMBINATION,
      description: '( 9',
      content: {leftTop: '(', leftBottom: '9'},
      actions: {
        self: qwerty.DigitNine,
        with: {shift: qwerty.OpenRoundBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitNine, qwerty.OpenRoundBracket]
      }
    })
  }
}

export default OpenRoundBracketAndDigitNine
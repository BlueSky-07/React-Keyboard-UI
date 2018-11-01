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
 |     9     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitNine extends Key {
  constructor() {
    super({
      name: 'DigitNine',
      type: KeyType.COMBINATION,
      description: '9',
      content: {leftBottom: '9'},
      actions: {
        self: DigitNine,
        with: {shift: qwerty.OpenRoundBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenRoundBracketAndDigitNine
      }
    })
  }
}

export default DigitNine
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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class OpenRoundBracket extends Key {
  constructor() {
    super({
      name: 'OpenRoundBracket',
      type: KeyType.COMBINATION,
      description: '(',
      content: {leftTop: '('},
      actions: {
        self: OpenRoundBracket,
        with: {shift: qwerty.DigitNine},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenRoundBracketAndDigitNine
      }
    })
  }
}

export default OpenRoundBracket
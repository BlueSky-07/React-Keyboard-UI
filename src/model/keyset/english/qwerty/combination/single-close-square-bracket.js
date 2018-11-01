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
 |     ]     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class CloseSquareBracket extends Key {
  constructor() {
    super({
      name: 'CloseSquareBracket',
      type: KeyType.COMBINATION,
      description: ']',
      content: {leftBottom: ']'},
      actions: {
        self: CloseSquareBracket,
        with: {shift: qwerty.CloseCurlyBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CloseCurlyBracketAndCloseSquareBracket
      }
    })
  }
}

export default CloseSquareBracket
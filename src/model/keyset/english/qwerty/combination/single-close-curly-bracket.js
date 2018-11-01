/**
 
 +-----------+-----------+
 |           |           |
 |     }     |           |
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

class CloseCurlyBracket extends Key {
  constructor() {
    super({
      name: 'CloseCurlyBracket',
      type: KeyType.COMBINATION,
      description: '}',
      content: {leftTop: '}'},
      actions: {
        self: CloseCurlyBracket,
        with: {shift: qwerty.CloseSquareBracket},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CloseCurlyBracketAndCloseSquareBracket
      }
    })
  }
}

export default CloseCurlyBracket
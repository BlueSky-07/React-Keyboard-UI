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
 |     ]     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class CloseCurlyBracketAndCloseSquareBracket extends Key {
  constructor() {
    super({
      name: 'CloseCurlyBracket&CloseSquareBracket',
      type: KeyType.COMBINATION,
      description: '} ]',
      content: {leftTop: '}', leftBottom: ']'},
      actions: {
        self: qwerty.CloseSquareBracket,
        with: {shift: qwerty.CloseCurlyBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.CloseSquareBracket, qwerty.CloseCurlyBracket]
      }
    })
  }
}

export default CloseCurlyBracketAndCloseSquareBracket
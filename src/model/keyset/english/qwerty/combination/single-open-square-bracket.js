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
 |     [     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class OpenSquareBracket extends Key {
  constructor() {
    super({
      name: 'OpenSquareBracket',
      type: KeyType.COMBINATION,
      description: '[',
      content: {leftBottom: '['},
      actions: {
        self: OpenSquareBracket,
        with: {shift: qwerty.OpenCurlyBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenCurlyBracketAndOpenSquareBracket
      }
    })
  }
}

export default OpenSquareBracket
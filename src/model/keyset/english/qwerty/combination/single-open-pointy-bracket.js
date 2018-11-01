/**
 
 +-----------+-----------+
 |           |           |
 |     <     |           |
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

class OpenPointyBracket extends Key {
  constructor() {
    super({
      name: 'OpenPointyBracket',
      type: KeyType.COMBINATION,
      description: '<',
      content: {leftTop: '<'},
      actions: {
        self: OpenPointyBracket,
        with: {shift: qwerty.Comma},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenPointyBracketAndComma
      }
    })
  }
}

export default OpenPointyBracket
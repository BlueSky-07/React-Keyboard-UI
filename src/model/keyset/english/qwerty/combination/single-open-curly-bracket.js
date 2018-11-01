/**
 
 +-----------+-----------+
 |           |           |
 |     {     |           |
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

class OpenCurlyBracket extends Key {
  constructor() {
    super({
      name: 'OpenCurlyBracket',
      type: KeyType.COMBINATION,
      description: '{',
      content: {leftTop: '{'},
      actions: {
        self: OpenCurlyBracket,
        with: {shift: qwerty.OpenSquareBracket},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenCurlyBracketAndOpenSquareBracket
      }
    })
  }
}

export default OpenCurlyBracket
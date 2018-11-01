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
 |     [     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class OpenCurlyBracketAndOpenSquareBracket extends Key {
  constructor() {
    super({
      name: 'OpenCurlyBracket&OpenSquareBracket',
      type: KeyType.COMBINATION,
      description: '{ [',
      content: {leftTop: '{', leftBottom: '['},
      actions: {
        self: qwerty.OpenSquareBracket,
        with: {shift: qwerty.OpenCurlyBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.OpenSquareBracket, qwerty.OpenCurlyBracket]
      }
    })
  }
}

export default OpenCurlyBracketAndOpenSquareBracket
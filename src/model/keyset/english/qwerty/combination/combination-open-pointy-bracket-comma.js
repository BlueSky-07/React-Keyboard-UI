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
 |     ,     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class OpenPointyBracketAndComma extends Key {
  constructor() {
    super({
      name: 'OpenPointyBracket&Comma',
      type: KeyType.COMBINATION,
      description: '< ,',
      content: {leftTop: '<', leftBottom: ','},
      actions: {
        self: qwerty.Comma,
        with: {shift: qwerty.OpenPointyBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Comma, qwerty.OpenPointyBracket]
      }
    })
  }
}

export default OpenPointyBracketAndComma
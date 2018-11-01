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
 |     ,     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Comma extends Key {
  constructor() {
    super({
      name: 'Comma',
      type: KeyType.COMBINATION,
      description: ',',
      content: {leftBottom: ','},
      actions: {
        self: Comma,
        with: {shift: qwerty.OpenPointyBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.OpenPointyBracketAndComma
      }
    })
  }
}

export default Comma
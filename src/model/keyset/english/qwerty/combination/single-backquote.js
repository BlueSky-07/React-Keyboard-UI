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
 |     `     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Backquote extends Key {
  constructor() {
    super({
      name: 'Backquote',
      type: KeyType.COMBINATION,
      description: '`',
      content: {leftBottom: '`'},
      actions: {
        self: Backquote,
        with: {shift: qwerty.Tilde}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.TildeAndBackquote
      }
    })
  }
}

export default Backquote
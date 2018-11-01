/**
 
 +-----------+-----------+
 |           |           |
 |     ~     |           |
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

class Tilde extends Key {
  constructor() {
    super({
      name: 'Tilde',
      type: KeyType.COMBINATION,
      description: '~',
      content: {leftTop: '~'},
      actions: {
        self: Tilde,
        with: {shift: qwerty.Backquote},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.TildeAndBackquote
      }
    })
  }
}

export default Tilde
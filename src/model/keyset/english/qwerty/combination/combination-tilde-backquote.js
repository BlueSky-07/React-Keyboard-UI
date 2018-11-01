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
 |     `     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class TildeAndBackquote extends Key {
  constructor() {
    super({
      name: 'Tilde&Backquote',
      type: KeyType.COMBINATION,
      description: '~ `',
      content: {leftTop: '~', leftBottom: '`'},
      actions: {
        self: qwerty.Backquote,
        with: {shift: qwerty.Tilde},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Backquote, qwerty.Tilde]
      }
    })
  }
}

export default TildeAndBackquote
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
 |     \     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Backslash extends Key {
  constructor() {
    super({
      name: 'Backslash',
      type: KeyType.COMBINATION,
      description: '\\',
      content: {leftBottom: '\\'},
      actions: {
        self: Backslash,
        with: {shift: qwerty.VerticalBar}
      },
      style: {widthRatio: 1.5},
      combination: {
        from: qwerty.VerticalBarAndBackslash
      }
    })
  }
}

export default Backslash
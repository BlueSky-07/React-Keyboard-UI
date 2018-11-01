/**
 
 +-----------+-----------+
 |           |           |
 |     |     |           |
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

class VerticalBarAndBackslash extends Key {
  constructor() {
    super({
      name: 'VerticalBar&Backslash',
      type: KeyType.COMBINATION,
      description: '| \\',
      content: {leftTop: '|', leftBottom: '\\'},
      actions: {
        self: qwerty.Backslash,
        with: {shift: qwerty.VerticalBar},
      },
      style: {widthRatio: 1.5},
      combination: {
        set: [qwerty.Backslash, qwerty.VerticalBar]
      }
    })
  }
}

export default VerticalBarAndBackslash
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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class VerticalBar extends Key {
  constructor() {
    super({
      name: 'VerticalBar',
      type: KeyType.COMBINATION,
      description: '|',
      content: {leftTop: '|'},
      actions: {
        self: VerticalBar,
        with: {shift: qwerty.Backslash},
      },
      style: {widthRatio: 1.5},
      combination: {
        from: qwerty.VerticalBarAndBackslash
      }
    })
  }
}

export default VerticalBar
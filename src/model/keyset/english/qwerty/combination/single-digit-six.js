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
 |     6     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitSix extends Key {
  constructor() {
    super({
      name: 'DigitSix',
      type: KeyType.COMBINATION,
      description: '6',
      content: {leftBottom: '6'},
      actions: {
        self: DigitSix,
        with: {shift: qwerty.Caret}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CaretAndDigitSix
      }
    })
  }
}

export default DigitSix
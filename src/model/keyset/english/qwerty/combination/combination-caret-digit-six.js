/**
 
 +-----------+-----------+
 |           |           |
 |     ^     |           |
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

class CaretAndDigitSix extends Key {
  constructor() {
    super({
      name: 'Caret&DigitSix',
      type: KeyType.COMBINATION,
      description: '^ 6',
      content: {leftTop: '^', leftBottom: '6'},
      actions: {
        self: qwerty.DigitSix,
        with: {shift: qwerty.Caret},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitSix, qwerty.Caret]
      }
    })
  }
}

export default CaretAndDigitSix
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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Caret extends Key {
  constructor() {
    super({
      name: 'Caret',
      type: KeyType.COMBINATION,
      description: '^',
      content: {leftTop: '^'},
      actions: {
        self: Caret,
        with: {shift: qwerty.DigitSix},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.CaretAndDigitSix
      }
    })
  }
}

export default Caret
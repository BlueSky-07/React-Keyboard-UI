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
 |     4     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitFour extends Key {
  constructor() {
    super({
      name: 'DigitFour',
      type: KeyType.COMBINATION,
      description: '4',
      content: {leftBottom: '4'},
      actions: {
        self: DigitFour,
        with: {shift: qwerty.DollarSign}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.DollarSignAndDigitFour
      }
    })
  }
}

export default DigitFour
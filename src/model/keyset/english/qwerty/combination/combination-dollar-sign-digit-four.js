/**
 
 +-----------+-----------+
 |           |           |
 |     $     |           |
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

class DollarSignAndDigitFour extends Key {
  constructor() {
    super({
      name: 'DollarSign&DigitFour',
      type: KeyType.COMBINATION,
      description: '$ 4',
      content: {leftTop: '$', leftBottom: '4'},
      actions: {
        self: qwerty.DigitFour,
        with: {shift: qwerty.DollarSign},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitFour, qwerty.DollarSign]
      }
    })
  }
}

export default DollarSignAndDigitFour
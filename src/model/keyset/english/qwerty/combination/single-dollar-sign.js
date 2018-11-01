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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DollarSign extends Key {
  constructor() {
    super({
      name: 'DollarSign',
      type: KeyType.COMBINATION,
      description: '$',
      content: {leftTop: '$'},
      actions: {
        self: DollarSign,
        with: {shift: qwerty.DigitFour},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.DollarSignAndDigitFour
      }
    })
  }
}

export default DollarSign
/**
 
 +-----------+-----------+
 |           |           |
 |     #     |           |
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

class NumberSign extends Key {
  constructor() {
    super({
      name: 'NumberSign',
      type: KeyType.COMBINATION,
      description: '#',
      content: {leftTop: '#'},
      actions: {
        self: NumberSign,
        with: {shift: qwerty.DigitThree},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.NumberSignAndDigitThree
      }
    })
  }
}

export default NumberSign
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
 |     3     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitThree extends Key {
  constructor() {
    super({
      name: 'DigitThree',
      type: KeyType.COMBINATION,
      description: '3',
      content: {leftBottom: '3'},
      actions: {
        self: DigitThree,
        with: {shift: qwerty.NumberSign}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.NumberSignAndDigitThree
      }
    })
  }
}

export default DigitThree
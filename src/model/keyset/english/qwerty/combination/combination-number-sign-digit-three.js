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
 |     3     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class NumberSignAndDigitThree extends Key {
  constructor() {
    super({
      name: 'NumberSign&DigitThree',
      type: KeyType.COMBINATION,
      description: '# 3',
      content: {leftTop: '#', leftBottom: '3'},
      actions: {
        self: qwerty.DigitThree,
        with: {shift: qwerty.NumberSign},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitThree, qwerty.NumberSign]
      }
    })
  }
}

export default NumberSignAndDigitThree
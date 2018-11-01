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
 |     8     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitEight extends Key {
  constructor() {
    super({
      name: 'DigitEight',
      type: KeyType.COMBINATION,
      description: '8',
      content: {leftBottom: '8'},
      actions: {
        self: DigitEight,
        with: {shift: qwerty.Asterisk}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AsteriskAndDigitEight
      }
    })
  }
}

export default DigitEight
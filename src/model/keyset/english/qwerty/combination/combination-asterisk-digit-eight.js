/**
 
 +-----------+-----------+
 |           |           |
 |     *     |           |
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

class AsteriskAndDigitEight extends Key {
  constructor() {
    super({
      name: 'Asterisk&DigitEight',
      type: KeyType.COMBINATION,
      description: '* 8',
      content: {leftTop: '*', leftBottom: '8'},
      actions: {
        self: qwerty.DigitEight,
        with: {shift: qwerty.Asterisk},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitEight, qwerty.Asterisk]
      }
    })
  }
}

export default AsteriskAndDigitEight
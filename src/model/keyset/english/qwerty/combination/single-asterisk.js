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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Asterisk extends Key {
  constructor() {
    super({
      name: 'Asterisk',
      type: KeyType.COMBINATION,
      description: '*',
      content: {leftTop: '*'},
      actions: {
        self: Asterisk,
        with: {shift: qwerty.DigitEight},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AsteriskAndDigitEight
      }
    })
  }
}

export default Asterisk
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
 |     7     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitSeven extends Key {
  constructor() {
    super({
      name: 'DigitSeven',
      type: KeyType.COMBINATION,
      description: '7',
      content: {leftBottom: '7'},
      actions: {
        self: DigitSeven,
        with: {shift: qwerty.Ampersand}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AmpersandAndDigitSeven
      }
    })
  }
}

export default DigitSeven
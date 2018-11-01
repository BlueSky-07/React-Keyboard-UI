/**
 
 +-----------+-----------+
 |           |           |
 |     &     |           |
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

class Ampersand extends Key {
  constructor() {
    super({
      name: 'Ampersand',
      type: KeyType.COMBINATION,
      description: '&',
      content: {leftTop: '&'},
      actions: {
        self: Ampersand,
        with: {shift: qwerty.DigitSeven},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.AmpersandAndDigitSeven
      }
    })
  }
}

export default Ampersand
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
 |     7     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class AmpersandAndDigitSeven extends Key {
  constructor() {
    super({
      name: 'Ampersand&DigitSeven',
      type: KeyType.COMBINATION,
      description: '& 7',
      content: {leftTop: '&', leftBottom: '7'},
      actions: {
        self: qwerty.DigitSeven,
        with: {shift: qwerty.Ampersand},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitSeven, qwerty.Ampersand]
      }
    })
  }
}

export default AmpersandAndDigitSeven
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
 |     5     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitFive extends Key {
  constructor() {
    super({
      name: 'DigitFive',
      type: KeyType.COMBINATION,
      description: '5',
      content: {leftBottom: '5'},
      actions: {
        self: DigitFive,
        with: {shift: qwerty.Percent}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.PercentAndDigitFive
      }
    })
  }
}

export default DigitFive
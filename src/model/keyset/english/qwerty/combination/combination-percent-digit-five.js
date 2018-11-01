/**
 
 +-----------+-----------+
 |           |           |
 |     %     |           |
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

class PercentAndDigitFive extends Key {
  constructor() {
    super({
      name: 'Percent&DigitFive',
      type: KeyType.COMBINATION,
      description: '% 5',
      content: {leftTop: '%', leftBottom: '5'},
      actions: {
        self: qwerty.DigitFive,
        with: {shift: qwerty.Percent},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitFive, qwerty.Percent]
      }
    })
  }
}

export default PercentAndDigitFive
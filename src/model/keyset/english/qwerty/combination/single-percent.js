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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Percent extends Key {
  constructor() {
    super({
      name: 'Percent',
      type: KeyType.COMBINATION,
      description: '%',
      content: {leftTop: '%'},
      actions: {
        self: Percent,
        with: {shift: qwerty.DigitFive},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.PercentAndDigitFive
      }
    })
  }
}

export default Percent
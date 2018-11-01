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
 |     1     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class DigitOne extends Key {
  constructor() {
    super({
      name: 'DigitOne',
      type: KeyType.COMBINATION,
      description: '1',
      content: {leftBottom: '1'},
      actions: {
        self: DigitOne,
        with: {shift: qwerty.ExclamationMark}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ExclamationMarkAndDigitOne
      }
    })
  }
}

export default DigitOne
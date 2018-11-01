/**
 
 +-----------+-----------+
 |           |           |
 |     !     |           |
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

class ExclamationMarkAndDigitOne extends Key {
  constructor() {
    super({
      name: 'ExclamationMark&DigitOne',
      type: KeyType.COMBINATION,
      description: '! 1',
      content: {leftTop: '!', leftBottom: '1'},
      actions: {
        self: qwerty.DigitOne,
        with: {shift: qwerty.ExclamationMark},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.DigitOne, qwerty.ExclamationMark]
      }
    })
  }
}

export default ExclamationMarkAndDigitOne
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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class ExclamationMark extends Key {
  constructor() {
    super({
      name: 'ExclamationMark',
      type: KeyType.COMBINATION,
      description: '!',
      content: {leftTop: '!'},
      actions: {
        self: ExclamationMark,
        with: {shift: qwerty.DigitOne},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ExclamationMarkAndDigitOne
      }
    })
  }
}

export default ExclamationMark
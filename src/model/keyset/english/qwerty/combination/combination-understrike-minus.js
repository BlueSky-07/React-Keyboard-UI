/**
 
 +-----------+-----------+
 |           |           |
 |     _     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     -     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class UnderstrikeAndMinus extends Key {
  constructor() {
    super({
      name: 'Understrike&Minus',
      type: KeyType.COMBINATION,
      description: '_ -',
      content: {leftTop: '_', leftBottom: '-'},
      actions: {
        self: qwerty.Minus,
        with: {shift: qwerty.Understrike},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Minus, qwerty.Understrike]
      }
    })
  }
}

export default UnderstrikeAndMinus
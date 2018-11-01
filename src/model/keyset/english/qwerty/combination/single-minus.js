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
 |     -     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Minus extends Key {
  constructor() {
    super({
      name: 'Minus',
      type: KeyType.COMBINATION,
      description: '-',
      content: {leftBottom: '-'},
      actions: {
        self: Minus,
        with: {shift: qwerty.Understrike}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.UnderstrikeAndMinus
      }
    })
  }
}

export default Minus
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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Understrike extends Key {
  constructor() {
    super({
      name: 'Understrike',
      type: KeyType.COMBINATION,
      description: '_',
      content: {leftTop: '_'},
      actions: {
        self: Understrike,
        with: {shift: qwerty.Minus},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.UnderstrikeAndMinus
      }
    })
  }
}

export default Understrike
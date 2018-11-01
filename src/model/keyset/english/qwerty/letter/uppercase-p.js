/**
 
 +-----------+-----------+
 |           |           |
 |     P     |           |
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

class P extends Key {
  constructor() {
    super({
      name: 'P',
      type: KeyType.LETTER,
      description: 'uppercase of p',
      content: {center: 'P'},
      actions: {
        self: P,
        with: {shift: qwerty.p},
        after: {capslock: qwerty.p}
      },
      style: {widthRatio: 1}
    })
  }
}

export default P

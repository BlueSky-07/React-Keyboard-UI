/**
 
 +-----------+-----------+
 |           |           |
 |     A     |           |
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

class A extends Key {
  constructor() {
    super({
      name: 'A',
      type: KeyType.LETTER,
      description: 'uppercase of a',
      content: {center: 'A'},
      actions: {
        self: A,
        with: {shift: qwerty.a},
        after: {capslock: qwerty.a}
      },
      style: {widthRatio: 1}
    })
  }
}

export default A

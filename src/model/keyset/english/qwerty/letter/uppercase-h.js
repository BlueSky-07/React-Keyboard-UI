/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
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

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'uppercase of h',
      content: {center: 'H'},
      actions: {
        self: H,
        with: {shift: qwerty.h},
        after: {capslock: qwerty.h}
      },
      style: {widthRatio: 1}
    })
  }
}

export default H

/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |         Enter         |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Enter extends Key {
  constructor() {
    super({
      name: 'Enter',
      type: KeyType.FUNCTION,
      description: '⏎ or ↵, to finish an "entry" and begin the desired process, and is usually an alternative to pressing an OK button',
      content: {center: 'Enter'},
      actions: {self: Enter},
      style: {widthRatio: 2.25}
    })
  }
}

export default Enter

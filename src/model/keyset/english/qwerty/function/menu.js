/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |         Menu          |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class Menu extends Key {
  constructor() {
    super({
      name: 'Menu',
      type: KeyType.FUNCTION,
      description: '≣, to launch a context menu with the keyboard rather than with the usual right-mouse button',
      content: {center: 'Menu'},
      actions: {self: Menu},
      style: {widthRatio: 1}
    })
  }
}

export default Menu

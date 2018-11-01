import React from 'react'
import './Key.css'
import Key from '../model/Key'
import KeyboardUI from './Keyboard-UI'

/**
 
 +-----------+-----------+
 |           |           |
 |     K     e     y     |
 |           |           |
 +-----------+-----------+
 |                       |
 |     B  o  a  r  d     |
 |                       |
 +-----------+-----------+
 |           |           |
 |     j     |     s     |
 |           |           |
 +-----------+-----------+
 
 */

const border_colored = false
const autocalc_size = true
let standard_width = 32
let fontsize_ratio = 0.25

class KeyUI extends React.Component {
  static set standardWidth(value) {
    if (value < 22) {
      throw new Error('width is too small')
    }
    standard_width = value
  }
  
  static get standardWidth() {
    return standard_width
  }
  
  static set fontsizeRatio(value) {
    fontsize_ratio = value
  }
  
  static get fontsizeRatio() {
    return fontsize_ratio
  }
  
  static autoCalcWidth(maxWidth) {
    if (autocalc_size) {
      const bodyWidth = maxWidth || document.body.clientWidth
      standard_width = Math.ceil(bodyWidth / 16)
      if (standard_width < 22) {
        fontsize_ratio = 0.1
      } else if (standard_width <= 32) {
        fontsize_ratio = 0.25
      } else if (standard_width <= 64) {
        fontsize_ratio = 0.3
      }
    }
  }
  
  constructor() {
    super()
    this.state = {
      setKey: null,
      fontSize: 0,
      width: 0,
      height: 0
    }
    KeyboardUI.putKey(this)
  }
  
  componentWillMount() {
    let setKey = null
    if (this.props.setKey instanceof Function) {
      try {
        setKey = new this.props.setKey()
      } catch (e) {
        throw new Error('not a valid Key')
      }
    } else if (this.props.setKey instanceof Key) {
      setKey = this.props.setKey
    } else {
      throw new Error('not a valid Key')
    }
    this.setState({
      setKey,
      fontSize: Math.ceil(KeyUI.standardWidth * KeyUI.fontsizeRatio) + 'px',
      width: (setKey ? setKey.style.widthRatio : 1) * KeyUI.standardWidth + 'px',
      height: KeyUI.standardWidth + 'px'
    })
  }
  
  updateSize() {
    this.setState({
      fontSize: Math.ceil(KeyUI.standardWidth * KeyUI.fontsizeRatio) + 'px',
      width: (this.state.setKey ? this.state.setKey.style.widthRatio : 1) * KeyUI.standardWidth + 'px',
      height: KeyUI.standardWidth + 'px'
    })
  }
  
  render() {
    return (
        <div
            className={['Key'].concat(this.props.className || []).join(' ')}
            title={this.props.title}
            style={Object.assign({
              fontSize: this.state.fontSize,
              width: this.state.width,
              height: this.state.height
            }, this.props.style)}
            // onClick={() => {
            //   this.setState({setKey: new this.state.setKey.actions.self()})
            // }}
        >
          <div className="display-table">
            <div className="Key-Row">
              <div className="display-table">
                {/**
                 
                 Left-Top Area
                 
                 +-----------+-----------+
                 |           |           |
                 |     *     |           |
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
                 
                 */}
                
                {this.renderArea('leftTop', 'leftBottom')}
                
                {/**
                 
                 Right-Top Area
                 
                 +-----------+-----------+
                 |           |           |
                 |           |     *     |
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
                 
                 */}
                
                {this.renderArea('rightTop', 'rightBottom')}
              </div>
            </div>
            
            <div className="Key-Row">
              <div className="display-table">
                {/**
                 
                 Center Area
                 
                 +-----------+-----------+
                 |           |           |
                 |           |           |
                 |           |           |
                 +-----------+-----------+
                 |                       |
                 |           *           |
                 |                       |
                 +-----------+-----------+
                 |           |           |
                 |           |           |
                 |           |           |
                 +-----------+-----------+
                 
                 */}
                
                {this.renderArea('center')}
              </div>
            </div>
            
            <div className="Key-Row">
              <div className="display-table">
                {/**
                 
                 Left-Bottom Area
                 
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
                 |     *     |           |
                 |           |           |
                 +-----------+-----------+
                 
                 */}
                
                {this.renderArea('leftBottom', 'leftTop')}
                
                {/**
                 
                 Right-Bottom Area
                 
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
                 |           |     *     |
                 |           |           |
                 +-----------+-----------+
                 
                 */}
                
                {this.renderArea('rightBottom', 'rightTop')}
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  renderArea(position = '', float = 'center') {
    const setKey = this.state.setKey
    if (this.props.float && this.props.float[position]) float = this.props.float[position]
    if (setKey && setKey instanceof Key && setKey.content) {
      const position_name = position.split('').map(c => c.toUpperCase() === c ? `-${c.toLowerCase()}` : c).join('')
      const float_css = 'float-' + float.split('').map(c => c.toUpperCase() === c ? `-${c.toLowerCase()}` : c).join('')
      const content = setKey.content[position]
      return (
          <div className={['Key-Row-Area', border_colored ? 'color' : '', position_name, float_css].join(' ')}>
            {Array.isArray(content) && content.length ? content.map(
                (content, index) =>
                    <div
                        className="Key-Row-Area-Line"
                        key={`${position}-${index}`}
                    >
                      {content}
                    </div>
            ) : content}
          </div>
      )
    } else {
      return ''
    }
  }
}

export default KeyUI
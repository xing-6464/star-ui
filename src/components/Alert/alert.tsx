import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import Transition from '../Transition'
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  /**标题 */
  title: string;
  /**描述 */
  description?: string;
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType;
  /**关闭alert时触发的事件 */
  onClose?: () => void;
  /**是否显示关闭图标*/
  closable?: boolean;
}

/** 
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 * 
 * ~~~js
 * import { Alert } from '@pdx6464/star-ui'
 * ~~~
*/
export const Alert: FC<AlertProps> = (props) => {
  const [ hide, setHide ] = useState(false)
  const {
    title,
    description,
    type = 'default',
    onClose,
    closable = true
  } = props
  const classes = classNames('x-alert', {
    [`x-alert-${type}`]: type,
  })
  const titleClass = classNames('x-alert-title', {
    'bold-title': description
  })
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition
      in={!hide}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="x-alert-desc">{description}</p>}
        {closable && <span className="x-alert-close" onClick={handleClose}><Icon icon="times"/></span>}
      </div>
    </Transition>
  )
}

export default Alert;
import React from 'react'
import classNames from 'classnames'

type ButtonSize = 'sm' | 'lg'

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'link'

interface ButtonBaseProps {
  size?: ButtonSize
  btnType?: ButtonType
  disabled?: boolean
  href?: string
}

type ButtonNativeProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorNativeProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = Partial<ButtonNativeProps & AnchorNativeProps>

const Button: React.FC<ButtonProps> = props => {
  const { size, btnType, disabled, href, children, ...restProps } = props
  const classes = classNames('cf-btn', {
    [`cf-btn-${btnType}`]: btnType,
    [`cf-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  size: 'sm',
  btnType: 'primary'
}

export default Button

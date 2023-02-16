/** Because every project needs a button. */
import type { HTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Contents that appear in the button */
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button className={cx(styles.Button, className)} {...rest} >
      {children}
    </button>
  )
}

// Button.displayName = 'Button';

export default Button;

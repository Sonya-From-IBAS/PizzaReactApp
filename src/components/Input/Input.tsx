import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { IInputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input({className, isValid = true, ...props }, ref){

	return (
		<input  {...props} ref={ref} className={cn(className, styles['input'], {
			[styles['invalid']]: !isValid
		})}{...props}
		/>
	);
});

export default Input;
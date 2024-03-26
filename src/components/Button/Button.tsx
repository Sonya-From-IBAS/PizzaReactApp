import { MouseEvent } from 'react';
import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import cn from 'classnames';


function Button({children, className, appearence = 'small', ...props}: IButtonProps) {
	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};
	return (
		<button onClick={addCounter} className={cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearence === 'small',
			[styles['big']]: appearence === 'big'
		})} {...props}>
			{children}
		</button>
	);
}

export default Button;

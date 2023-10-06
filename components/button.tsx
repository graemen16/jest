import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, label, ...props }, ref) => {
		return (
			<button
				type="button"
				ref={ref}
				{...props}
			>
				{label}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button };

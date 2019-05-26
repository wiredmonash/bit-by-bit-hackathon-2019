import React from 'react';

function Button({ onClick, children, style }) {
	return (
		<span
			onClick={onClick}
			style={{
				backgroundColor: style ? style.backgroundColor : 'var(--primary-color)',
				color: style ? style.color : 'var(--secondary-color)',
				padding: 10,
				fontWeight: 700,
				textDecoration: 'none',
				cursor: 'pointer',
				margin: 5,
				...style
			}}
		>
			{children}
		</span>
	);
}

export default Button;

import React from 'react';

function Button({ onClick, children, style, href }) {
	return (
		<span
			onClick={href ? () => (window.location = href) : onClick}
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
			className="text-select-none"
		>
			{children}
		</span>
	);
}

export default Button;

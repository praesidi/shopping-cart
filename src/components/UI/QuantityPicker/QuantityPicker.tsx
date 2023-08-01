import styles from './QuantityPicker.module.sass';
import { useState } from 'react';

interface Props {
	min: number;
	max: number;
	fontSize?: string;
}

export default function QuantityPicker(props: Props) {
	const [value, setValue] = useState(1);

	const decrement = () => {
		setValue(value - 1);
	};

	const increment = () => {
		setValue(value + 1);
	};

	return (
		<span
			className={styles.container}
			style={{ fontSize: props.fontSize ? props.fontSize : '18px' }}
		>
			{value <= props.min ? (
				<button onClick={() => decrement()} disabled>
					-
				</button>
			) : (
				<button onClick={() => decrement()}> - </button>
			)}
			<input
				type='number'
				min={props.min}
				max={props.max}
				value={value}
				name='quantity'
				readOnly
			/>
			{value >= props.max ? (
				<button onClick={() => increment()} disabled>
					+
				</button>
			) : (
				<button onClick={() => increment()}> + </button>
			)}
		</span>
	);
}

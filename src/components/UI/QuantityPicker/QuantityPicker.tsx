import styles from './QuantityPicker.module.sass';
import { useState } from 'react';

export default function QuantityPicker({
	min,
	max,
}: {
	min: number;
	max: number;
}) {
	const [value, setValue] = useState(1);

	const decrement = () => {
		setValue(value - 1);
	};

	const increment = () => {
		setValue(value + 1);
	};

	return (
		<span className={styles.container}>
			{value <= min ? (
				<button onClick={() => decrement()} disabled>
					-
				</button>
			) : (
				<button onClick={() => decrement()}> - </button>
			)}
			<input
				type='number'
				min={min}
				max={max}
				value={value}
				name='quantity'
				readOnly
			/>
			{value >= max ? (
				<button onClick={() => increment()} disabled>
					+
				</button>
			) : (
				<button onClick={() => increment()}> + </button>
			)}
		</span>
	);
}

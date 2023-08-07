import styles from './QuantityPicker.module.sass';

interface QuantityPicker {
	min: number;
	max: number;
	value: number;
	fontSize?: string;
	setValue?: any;
}

export default function QuantityPicker({
	min,
	max,
	fontSize = '1rem',
	value,
	setValue,
}: QuantityPicker) {
	const decrement = () => {
		setValue(value - 1);
	};

	const increment = () => {
		setValue(value + 1);
	};

	return (
		<span className={styles.container} style={{ fontSize: fontSize }}>
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

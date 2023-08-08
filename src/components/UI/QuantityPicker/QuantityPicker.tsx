import styles from './QuantityPicker.module.sass';

interface QuantityPicker {
	onAdd: any;
	onRemove: any;
	min: number;
	max: number;
	value: number;
	fontSize?: string;
}

export default function QuantityPicker({
	min,
	max,
	fontSize = '1rem',
	value,
	onAdd,
	onRemove,
}: QuantityPicker) {
	return (
		<span className={styles.container} style={{ fontSize: fontSize }}>
			{value <= min ? (
				<button onClick={() => onRemove()} disabled>
					-
				</button>
			) : (
				<button onClick={() => onRemove()}> - </button>
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
				<button onClick={() => onAdd()} disabled>
					+
				</button>
			) : (
				<button onClick={() => onAdd()}> + </button>
			)}
		</span>
	);
}

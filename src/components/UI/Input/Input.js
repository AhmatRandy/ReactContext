import classes from "./Input.module.css";

const Input = props => {
	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : ""
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.email}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				isValid={props.isValid}
			/>
		</div>
	);
};
export default Input;

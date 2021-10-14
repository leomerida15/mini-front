import { ReactElement, FC, useState, ChangeEvent, MouseEvent } from 'react';
//
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import { currencie, fromInput, pInput } from './interface';

export * as Interface from './interface';

const createForm: FC<{
	fromInput: fromInput[];
	Action: any;
	schema: any;
	sx?: any;
	conten?: string;
	buttonText?: string;
	ButtonClass?: string;
}> = ({ fromInput, Action, schema, sx, conten, ButtonClass, buttonText }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useForm<any>(
		schema
			? {
					resolver: yupResolver(schema),
			  }
			: {},
	);

	const onSubmit: any = handleSubmit((data: any): any => Action(data));

	// const { onChange, value } = field;
	const Input = (input: fromInput): any => {
		switch (input.type) {
			case 'select':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { currencies, name, label }: any = input;
					if (input.value) value = input.value;

					return (
						<TextField
							id='outlined-select-currency'
							select
							label={label}
							onChange={onChange}
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}>
							{currencies.map((option: currencie) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					);
				};
			case 'select-multiple':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { currencies, name, label }: any = input;
					if (input.value) value = input.value;

					// eslint-disable-next-line react-hooks/rules-of-hooks
					const [personName, setPersonName] = useState<string[]>([]);

					const handleChange = (event: SelectChangeEvent<typeof personName>) => {
						const {
							target: { value },
						} = event;
						setPersonName(
							// On autofill we get a the stringified value.
							typeof value === 'string' ? value.split(',') : value,
						);

						onChange(event);
					};

					return (
						<FormControl sx={{ m: 1 }}>
							<InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
							<Select
								labelId='demo-multiple-checkbox-label'
								id='demo-multiple-checkbox'
								multiple
								value={personName}
								onChange={handleChange}
								input={<OutlinedInput label={label} />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={currencies}
								error={!!errors[name]}>
								{currencies.map((name: any) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={personName.indexOf(name) > -1} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					);
				};
			case 'text':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							value={value}
							label={label}
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
						/>
					);
				};
			case 'email':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label } = input;

					return (
						<TextField
							onChange={onChange}
							value={value}
							label={label}
							type='email'
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
						/>
					);
				};
			case 'password-see':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, label } = input;

					if (input.value) value = input.value;

					// eslint-disable-next-line react-hooks/rules-of-hooks
					const [values, setValues] = useState<any>({ password: value, showPassword: false });

					const handleChange = (prop: keyof any) => (event: ChangeEvent<HTMLInputElement>) => {
						setValues({ ...values, [prop]: event.target.value });
						onChange(event);
					};

					const handleClickShowPassword = () => {
						setValues({
							...values,
							showPassword: !values.showPassword,
						});
					};

					const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

					return (
						<FormControl sx={{ m: 1 }} variant='outlined' error={!!errors[name]}>
							<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label={label}
							/>
						</FormControl>
					);
				};
			case 'password':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							value={value}
							label={label}
							type='password'
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
						/>
					);
				};
		}
	};

	return (
		<Box
			component='form'
			sx={
				sx
					? sx
					: {
							'& > :not(style)': { m: 1 },
					  }
			}
			className={conten ? conten : 'ed-grid'}
			noValidate
			autoComplete='off'
			onSubmit={onSubmit}>
			{/*  */}
			{fromInput.map((item, i: number): ReactElement => {
				const { name, rules } = item;
				return (
					<Controller
						name={name}
						control={control}
						rules={rules}
						render={!item.render ? Input(item) : item.render}
						key={i}
					/>
				);
			})}

			<Button onClick={handleSubmit(onSubmit)} className={ButtonClass ? ButtonClass : ''} variant={'contained'}>
				{buttonText ? buttonText : 'Submit'}
			</Button>
		</Box>
	);
};

createForm.propTypes = {
	fromInput: PropTypes.array.isRequired,
	Action: PropTypes.func.isRequired,
	schema: PropTypes.any.isRequired,
	sx: PropTypes.any,
	buttonText: PropTypes.string,
	conten: PropTypes.string,
	ButtonClass: PropTypes.string,
};

export default createForm;

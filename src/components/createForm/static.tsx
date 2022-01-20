/** @format */

import { ReactElement, FC, useState, ChangeEvent, MouseEvent, useEffect } from 'react';
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
// ? para fechas
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import DateAdapter from '@mui/lab/AdapterLuxon';

import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import { fromInput, pInput, createFormPropsStatic } from './interface';

export * from './interface';

const CreateFormStatic: FC<createFormPropsStatic> = ({
	fromInput,
	Action,
	schema,
	sx,
	conten,
	ButtonClass,
	buttonText,
}) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		formState,
		reset,
	} = useForm<any>(
		schema
			? {
					resolver: yupResolver(schema),
			  }
			: {},
	);

	const [submittedData, setSubmittedData] = useState({});

	const Clear = (obj: any): {} =>
		Object.fromEntries(
			Object.entries(obj).map(([key, value]): [string, any] => {
				const type = typeof value;

				if (type === 'string') return [key, ''];
				if (type === 'number') return [key, 0];
				if (type === 'boolean') return [key, false];
				if (Array.isArray(value)) return [key, []];
				if (type === 'object') return [key, ''];
				return [key, value];
			}),
		);

	const onSubmit = (data: any) => {
		try {
			const reseting = () => {
				const obj = Clear(data);

				setSubmittedData(obj);
			};

			Action(data, reseting);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) reset(submittedData);
	}, [formState, submittedData, reset]);

	// const { onChange, value } = field;
	const Input = (input: fromInput): any => {
		switch (input.type) {
			case 'file':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label, autoFocus } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							defaultValue={value}
							label={label}
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
							autoFocus={autoFocus ?? false}
							type={'file'}
						/>
					);
				};

			case 'select':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { currencies, name, label, autoFocus } = input;
					if (input.value) value = input.value;

					const handleChange = (event: SelectChangeEvent) => onChange(event);

					return (
						<FormControl>
							<InputLabel id='demo-simple-select-label'>{label}</InputLabel>
							<Select
								error={!!errors[name]}
								autoFocus={autoFocus ?? false}
								defaultValue={value}
								label={label}
								onChange={handleChange}>
								{currencies
									? currencies.map(({ name }: any) => (
											<MenuItem key={name} value={name}>
												{name}
											</MenuItem>
									  ))
									: []}
							</Select>
						</FormControl>
					);
				};

			case 'select-multiple':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { currencies, name, label, autoFocus, checkItems } = input;
					if (input.value) value = input.value;

					// eslint-disable-next-line react-hooks/rules-of-hooks
					const [personName, setPersonName] = useState<string[]>(checkItems ? checkItems : []);

					const handleChange = (event: SelectChangeEvent<typeof personName>) => {
						const {
							target: { value },
						} = event;

						setPersonName(typeof value === 'string' ? value.split(',') : value);

						onChange(event);
					};

					return (
						<FormControl sx={{ m: 1 }}>
							<InputLabel id='demo-multiple-checkbox-label'>{label}</InputLabel>
							<Select
								labelId='demo-multiple-checkbox-label'
								id='demo-multiple-checkbox'
								multiple
								value={personName}
								onChange={handleChange}
								input={<OutlinedInput label={label} />}
								renderValue={(selected) => selected.join(', ')}
								// MenuProps={currencies ? (currencies as any) : []}
								error={!!errors[name]}
								autoFocus={autoFocus ?? false}>
								{currencies
									? currencies.map(({ name }: any) => (
											<MenuItem key={name} value={name}>
												<Checkbox checked={personName.includes(name)} />
												<ListItemText primary={name} />
											</MenuItem>
									  ))
									: []}
							</Select>
						</FormControl>
					);
				};

			case 'text':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label, autoFocus } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							defaultValue={value}
							label={label}
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
							autoFocus={autoFocus ?? false}
						/>
					);
				};

			case 'email':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label, autoFocus } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							defaultValue={value}
							label={label}
							type='email'
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
							autoFocus={autoFocus ?? false}
						/>
					);
				};

			case 'password-see':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, label, autoFocus } = input;

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
							<InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								type={values.showPassword ? 'text' : 'password'}
								defaultValue={values.password}
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
								autoFocus={autoFocus ?? false}
							/>
						</FormControl>
					);
				};

			case 'password':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const { name, InputProps, label, autoFocus } = input;

					if (input.value) value = input.value;

					return (
						<TextField
							onChange={onChange}
							defaultValue={value}
							label={label}
							type='password'
							error={!!errors[name]}
							helperText={errors[name] && errors[name].message}
							InputProps={InputProps ? InputProps : ''}
							autoFocus={autoFocus ?? false}
						/>
					);
				};

			case 'time-date':
				return ({ field: { onChange, value } }: pInput): JSX.Element => {
					const {
						name,
						timeConfig: { inputFormat, typeTime },
						label,
					}: any = input;

					if (input.value) value = input.value;

					// const [value, setValue] = useState<Date>(Val ?? new Date('2014-08-18T21:11:54'));

					const handleChange = (newValue: Date | null) => {
						onChange({ target: { name, value: newValue } });
					};

					return (
						<LocalizationProvider locale={'es'} dateAdapter={DateAdapter}>
							<Stack spacing={3}>
								{(() => {
									switch (typeTime) {
										case 'Desktop':
											return (
												<DesktopDatePicker
													label={label}
													inputFormat={inputFormat ?? 'MM/dd/yyyy'}
													value={value}
													onChange={handleChange}
													renderInput={(params) => <TextField {...params} />}
												/>
											);

										case 'Mobile':
											return (
												<MobileDatePicker
													label={label}
													inputFormat={inputFormat ?? 'MM/dd/yyyy'}
													value={value}
													onChange={handleChange}
													renderInput={(params) => <TextField {...params} />}
												/>
											);

										case 'Time':
											return (
												<TimePicker
													label={label}
													value={value}
													onChange={handleChange}
													renderInput={(params) => <TextField {...params} />}
												/>
											);

										case 'Date':
											return (
												<DateTimePicker
													label={label}
													value={value}
													onChange={handleChange}
													renderInput={(params) => <TextField {...params} />}
												/>
											);
									}
								})()}
							</Stack>
						</LocalizationProvider>
					);
				};
		}
	};

	return (
		<Box
			onSubmit={handleSubmit(onSubmit)}
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
			autoComplete='off'>
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

			<Button type={'submit'} className={ButtonClass ? ButtonClass : ''} variant={'contained'}>
				{buttonText ? buttonText : 'Submit'}
			</Button>
		</Box>
	);
};

CreateFormStatic.propTypes = {
	fromInput: PropTypes.array.isRequired,
	Action: PropTypes.func.isRequired,
	schema: PropTypes.any.isRequired,
	sx: PropTypes.any,
	buttonText: PropTypes.string,
	conten: PropTypes.string,
	ButtonClass: PropTypes.string,
};

export default CreateFormStatic;

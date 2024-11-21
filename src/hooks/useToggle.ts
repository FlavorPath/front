import { useState } from 'react'

interface IProps {
	defaultValue?: boolean;
}

export const useToggle = ({defaultValue = false}: IProps) => {
	const [value, setValue] = useState(defaultValue);

	const toggle = () => setValue(prev => !prev)

	return {value, toggle}
}
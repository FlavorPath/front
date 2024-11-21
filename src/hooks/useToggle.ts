import useToggleStore from '@/store/stores/toggle.store';
import { useEffect } from 'react'

interface IProps {
	defaultValue?: boolean;
}

export const useToggle = ({defaultValue = false}: IProps) => {
	const { isOn, toggle, setDefaultValue } = useToggleStore();

  useEffect(() => {
    setDefaultValue?.(defaultValue);
  }, [setDefaultValue]);

	return { isOn, toggle };
}
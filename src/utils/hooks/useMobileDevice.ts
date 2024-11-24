export const useMobileDevice = () => {
	return /iPhone|Android|Mobile/i.test(navigator.userAgent);
}
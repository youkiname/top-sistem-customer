export const phoneReg = () =>
	/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
export const emailReg = () => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const birthDateReg = () => /^(\d{1,2})\.(\d{1,2})(?:\.(\d{4}))?$/

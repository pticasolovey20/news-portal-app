export const prepareDate = (date: string): string => {
	const publishedDate = new Date(date);

	const day = publishedDate.getDate();
	const month = publishedDate.getMonth() + 1;
	const year = publishedDate.getFullYear();
	const hours = publishedDate.getHours();
	const minutes = publishedDate.getMinutes();

	const format = (value: number): string | number => {
		return value < 10 ? "0" + value : value;
	};

	return `${format(day)}.${format(month)}.${format(year)} | ${format(hours)}:${format(minutes)}`;
};

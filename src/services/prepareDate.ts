export const prepareDate = (date: string): string => {
	const publishedDate = new Date(date);
	const day = publishedDate.getDate();
	const month = publishedDate.getMonth() + 1;
	const year = publishedDate.getFullYear();
	const hours = publishedDate.getHours();
	const minutes = publishedDate.getMinutes();
	return `${day}.${month < 10 ? "0" + month : month}.${year} | ${hours}:${
		minutes < 10 ? "0" + minutes : minutes
	}`;
};

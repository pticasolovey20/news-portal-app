import { useAppSelector } from "./redux";

export const useAuth = () => {
	const { email } = useAppSelector((state) => state.userReducer);

	return {
		isAuth: !!email,
		email,
	};
};

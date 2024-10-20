import axiosInstance from "./API";

export interface IInterests {
	travel: number;
	music: number;
	sport: number;
	films: number;
	student_community: number;
	social_interaction: number;
	entertainment: number;
	technologies: number;
	science: number;
	ai: number;
}

export interface ILogin {
	username: string;
	password: string;
}

export interface IRegisterData extends ILogin {
	telegram_link: string;
	name: string;
	surname: string;
	interests: IInterests;
}

export interface IProfile {
	username: string;
	telegram_link: string;
	name: string;
	surname: string;
	interests: IInterests;
}

export const registerUser = async (data: IRegisterData) => {
	return axiosInstance.post("/users/register/", data);
};

export const loginUser = async (data: ILogin) => {
	return axiosInstance.put("/auth/", data);
};

export const getUser = async (userName: string) => {
	return axiosInstance.get(`/users/${userName}`);
};

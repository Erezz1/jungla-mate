import { axiosInstance } from '@/client';
import { authInterceptor } from '../interceptor';

type LoginService = (params: ParamsForLogin) => Promise<Auth>;
export const loginUserService: LoginService = async (params) => {
  // const res = await axiosInstance.post<LoginUserResponse>('/user/login', params);
  // const response = authInterceptor(res.data);

  // localStorage.setItem('token', JSON.stringify(response.token));
  // return response;
  return {
    token: 'token',
    user: {
      firstName: 'Neto',
      id: 1,
      idLocation: 1,
      idRole: 1,
      isVerified: true,
      lastName: 'Martinez',
      location: 'CDMX',
      role: 'ADMIN',
      userName: 'Erez'
    }
  }
}

export const validateSession = async (): Promise<Auth> => {
  const res = await axiosInstance.get('/user/renew');
  const response = authInterceptor(res.data);
  return response;
}

export const verifyUser = async (params: ParamsForVerifyUser): Promise<any> => {
  const res = await axiosInstance.put('/user/verifyUser', params);
  return res;
}

import { InitParams, LoginOptions } from './params';
import { LoginResponse } from './response';

export interface FB {
  init: (params: InitParams) => void;

  login: (
    callback: (res: LoginResponse) => void,
    options?: LoginOptions
  ) => void;

  api: (
    path: string,
    params: { fields: string },
    callback: (res: unknown) => void
  ) => void;
}

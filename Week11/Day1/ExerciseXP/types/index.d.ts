import {User} from '../middlewares/verifyUser'

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
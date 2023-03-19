import { Request, Response } from 'express'

class UserController{    
    public async list(req: Request, res: Response) {
        return res.json('Andre L S Volpato');
    }
}
''
export default new UserController()
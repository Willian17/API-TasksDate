import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import AppError from '../errors/AppError'


interface TokenPayload {
    iat: number,
    exp: number,
    sub: string
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
    ): void{
        const authHeader = request.headers.authorization

        console.log(`authHeader ${authHeader}`)

        if(!authHeader){
            throw new AppError('JWT token is missing', 401)
        }

        const [, token] = authHeader.split(' ')

        try{
            const decoded = verify(token, process.env.AUTH_SECRET as string)

            const { sub } = decoded as TokenPayload

            request.student = {
                id: sub,
              };
            
            return next()
        } catch {
            throw new AppError('Invalid JWT token', 401)
        }
    }
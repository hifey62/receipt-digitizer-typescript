import type { Response , Request } from "express";

export function getHealth(req:Request ,res:Response): void{
            res.json({status : "ok"})
}
import "dotenv/config"
import {z} from "zod"

const envSchema = z.object({
    PORT : z.coerce.number().default(3000) ,
    NODE_ENV : z.enum(["development", "production" , "test"]).default("development"),
    GROQ_API_KEY : z.string().min(1),
    DATABASE_URL : z.url().min(1),
    DIRECT_URL : z.url().min(1)
})

const verifiedEnv = envSchema.safeParse(process.env) 

if(!verifiedEnv.success){
    verifiedEnv.error.issues.forEach((issue)=>{
        console.error(`${issue.path.join(' ')} : ${issue.message}`)
    })

    process.exit(1)
}

export const env = verifiedEnv.data
import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string(),
    },
    client: {
        NEXT_PUBLIC_TEST_KEY: z.string(),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_TEST_KEY: process.env.NEXT_PUBLIC_TEST_KEY
    }
})
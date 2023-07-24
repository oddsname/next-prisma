import { PrismaClient } from "@prisma/client";

let _instance: PrismaClient|null = null;

export const prisma = () => {
    if(!_instance) {
        console.log("init db");
        _instance = new PrismaClient();
    }

    return _instance;
}

import { spawn } from "child_process"
import { projectRoot } from "./paths"
export const withTashName = (name,fn) => Object.assign(fn,{displayName:name})


//在node中使用子进程运行脚本
export const run = async (command:string) => {
    return new Promise((resolve) => {
        const [cmd, ...args] = command.split(" ")
        const app = spawn(cmd, args,{
            cwd:projectRoot,
            stdio:'inherit', //直接把这个子进程的输出共享给父进程
            shell:true
        })
        app.on("close", resolve)
    })
}
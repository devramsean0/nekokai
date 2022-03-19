import 'dotenv/config'
import { Client } from '@skyra/http-framework';
import { Registry } from '@skyra/http-framework';
const port: any = process.env.WEBSERVER_PORT
async function nekokai_client() {
const client = new Client({ discordPublicKey: process.env.DISCORD_PUBLIC_KEY});
await client.load();
await client.listen({ port: port });
console.log('Logged in!')
}
 async function nekokai_commandregister() {
    const registry = new Registry({ token: process.env.DISCORD_TOKEN })
    await registry.load();
    await registry.registerGlobalCommands();
    await registry.registerGuildRestrictedCommands();
}
nekokai_client()
nekokai_commandregister()

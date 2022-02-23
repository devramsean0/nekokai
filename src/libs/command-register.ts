import { Registry } from '@skyra/http-framework';
export default async function nekokai_commandregister() {
    const registry = new Registry({ token: process.env.DISCORD_TOKEN })
    await registry.load();
    await registry.registerGlobalCommands();
    await registry.registerGuildRestrictedCommands();
}
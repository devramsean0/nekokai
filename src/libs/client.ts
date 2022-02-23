import { Client } from '@skyra/http-framework';
export default async function nekokai_client() {
const client = new Client({ discordPublicKey: process.env.DISCORD_PUBLIC_KEY});
await client.load();
await client.listen({ port: process.env.WEBSERVER_PORT });
}
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getCoins, addCoins } from './controllers/coins.ts'

const app = new Application();
const router = new Router();
const PORT = 4000;

router.get('/coins', getCoins).post('/coins', addCoins);

app.use(router.routes());

console.log(`Server running on Port: ${PORT}`);
await app.listen({ port: PORT });

import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import { Coins } from '../types.ts';

let coins: Coins[] = [
  {
    id: v4.generate(),
    name: 'Ethereum',
    shortName: 'ETH',
    website: 'https://ethereum.org/en/',
  },
  {
    id: v4.generate(),
    name: 'Cardano',
    shortName: 'ADA',
    website: 'https://cardano.org/',
  },
  {
    id: v4.generate(),
    name: 'Ripple',
    shortName: 'XRP',
    website: 'https://ripple.com/',
  },
];

const getCoins = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: coins,
  };
};

const addCoins = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: 'The request is empty',
    };
  } else {
    const coins: Coins = body.value;
    coins.id = v4.generate();
    coins.push(coins);
    response.status = 201;
    response.body = {
      success: true,
      data: coins,
    };
  }
};

export { getCoins, addCoins };

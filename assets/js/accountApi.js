import { Api } from './api.js';

export class AccountApi extends Api {
  DEFAULT_REGION = 'ASIA';
  
  HOST_BY_REGION = {
    ASIA: `https://asia.api.riotgames.com`,
    AMERICAS: `https://americas.api.riotgames.com`,
    ESPORTS: `https://esports.api.riotgames.com`,
    EUROPE: `https://europe.api.riotgames.com`,
  }
  
  PREFIX = {
    GET_ACCOUNT_BY_PUUID: 'riot/account/v1/accounts/by-puuid',
    GET_ACCOUNT_BY_RIOT_ID: 'riot/account/v1/accounts/by-riot-id',
    GET_ACCOUNT_BY_ME: 'riot/account/v1/accounts/me',
  }
  constructor(region = 'ASIA') {
    super();
    this.DEFAULT_REGION = region;
  }
  async getAccountByPuuid(puuid) {
    const url = `${this.HOST_BY_REGION[this.DEFAULT_REGION]}/${this.PREFIX.GET_ACCOUNT_BY_PUUID}/${puuid}`;
    const res = await this.get(url);
    return res;
  }
  async getAccountByRiotId(input) {
    const { gameName, tagLine } = input;
    const url = `${this.HOST_BY_REGION[this.DEFAULT_REGION]}/${this.PREFIX.GET_ACCOUNT_BY_RIOT_ID}/${gameName}/${tagLine}`;
    const res = await this.get(url);
    return res;
  }
}


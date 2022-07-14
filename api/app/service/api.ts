import { Service } from 'egg';

export default class Api extends Service {

  public async getNewsList(): Promise<void> {
    const { ctx } = this;
    return `hi, ${name}`;
  }
}

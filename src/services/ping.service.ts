import { PingRepository } from "../repositories/ping.repository";

export class PingService {
  constructor(private readonly pingRepository: PingRepository) {}

  public async store() {
    const newPing = await this.pingRepository.store();
    return newPing;
  }
}

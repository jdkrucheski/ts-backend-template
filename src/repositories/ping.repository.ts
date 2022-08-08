import { Ping } from "../types/ping";

export interface PingRepository {
  store(): Promise<Ping | undefined>;
}

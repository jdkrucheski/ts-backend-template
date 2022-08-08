import dayjs from "dayjs";
import { db } from "../../common/persistence/dummy/dummydb";
import { Ping } from "../../types/ping";
import { PingRepository } from "../ping.repository";

// TODO: Mejorar manejo de errores
export class PingDummyRepository implements PingRepository {
  public async store(): Promise<Ping | undefined> {
    const pings = await db.getObject<Ping[]>("/pings");
    const addedPing = {
      id: `${pings.length + 1}`,
      date: `${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
    };
    pings.push(addedPing);
    db.push("/pings", pings);
    return addedPing;
  }
}

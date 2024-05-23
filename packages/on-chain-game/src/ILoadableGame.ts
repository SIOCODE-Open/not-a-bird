import { IOnChainGame } from "@not-a-bird/model";
import { ILoadableGameMetadata } from "./ILoadableGameMetadata";

export interface ILoadableGame {
    id: string;
    metadata: ILoadableGameMetadata;
    load(): Promise<IOnChainGame>;
}
import { PlayingItem } from "./queue-item.interface"

/**
 * Packet sent to clients for video sync
 */
export interface SyncPacket {
    /**
     * The box Document ID
     *
     * @type {string}
     * @memberof SyncPacket
     */
    box: string

    /**
     * The video to play to ensure sync
     *
     * @type {PlayingItem}
     * @memberof SyncPacket
     */
    item: PlayingItem
}

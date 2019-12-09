import { PlaylistItem } from "./playlist-item.interface"

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
     * @type {PlaylistItem}
     * @memberof SyncPacket
     */
    item: PlaylistItem
}

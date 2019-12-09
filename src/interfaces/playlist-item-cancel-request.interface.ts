export interface PlaylistItemCancelRequest {
    /**
     * Identifier of the playlist item
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    item: string

    /**
     * Identifier of the user who requested the cancel
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    userToken: string

    /**
     * Identifier of the box of the playlist
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    boxToken: string
}
export interface BoxScope {
    /**
     * Identifier of the user who requested the cancel
     *
     * @type {string}
     * @memberof QueueItemActionRequest
     */
    userToken: string
    /**
     * Identifier of the box of the playlist
     *
     * @type {string}
     * @memberof QueueItemActionRequest
     */
    boxToken: string
}

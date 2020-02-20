/**
 * Interface for actions regarding playlist items
 *
 * @export
 * @interface PlaylistItemActionRequest
 */
export interface PlaylistItemActionRequest {
    /**
     * Identifier of the playlist item
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    item: string;
    /**
     * Identifier of the user who requested the cancel
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    userToken: string;
    /**
     * Identifier of the box of the playlist
     *
     * @type {string}
     * @memberof PlaylistItemCancelRequest
     */
    boxToken: string;
    /**
     * Action type of the request
     *
     * - 'cancel': the video will be removed from the playlist
     * - 'ignore': the video will be marked for skip
     * - 'reinstate': the skip mark will be removed from the video
     *
     * @type {('cancel' | 'ignore' | 'reinstate')}
     * @memberof PlaylistItemActionRequest
     */
    action: 'cancel' | 'ignore' | 'reinstate';
}
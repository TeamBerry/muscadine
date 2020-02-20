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
     * The YouTube uID of the video to add
     *
     * @type {string}
     * @memberof PlaylistItemSubmissionRequest
     */
    link: string;
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
}

export type PlaylistItemCancelRequest = Pick<PlaylistItemActionRequest, 'item' | 'userToken' | 'boxToken'>
export type PlaylistItemSubmissionRequest = Pick<PlaylistItemActionRequest, 'link' | 'userToken' | 'boxToken'>
export type PlaylistItemIgnoreRequest = Pick<PlaylistItemActionRequest, 'item' | 'userToken' | 'boxToken'>
export type PlaylistItemUnignoreRequest = Pick<PlaylistItemActionRequest, 'item' | 'userToken' | 'boxToken'>
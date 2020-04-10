import { BoxScope } from "./box-scope.interface"

export interface QueueItemActionRequest extends BoxScope {
    /**
     * Identifier of the video target in the queue
     *
     * @type {string}
     * @memberof QueueItemActionRequest
     */
    item: string
}

/**
 *
 */
export interface VideoSubmissionRequest extends BoxScope {
    /**
     * The YouTube uID of the video to add
     *
     * @type {string}
     * @memberof VideoSubmissionRequest
     */
    link: string
}

export interface PlaylistSubmissionRequest extends BoxScope {
    /**
     * The Playlist uID to submit to the queue
     *
     * @type {string}
     */
    playlistId: string
}
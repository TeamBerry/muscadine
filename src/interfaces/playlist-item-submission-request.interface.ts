export interface PlaylistItemSubmissionRequest {
    /**
     * The YouTube uID of the video to add
     *
     * @type {string}
     * @memberof PlaylistItemSubmissionRequest
     */
    link: string

    /**
     * The document ID of the user who submitted the video
     *
     * @type {string}
     * @memberof PlaylistItemSubmissionRequest
     */
    userToken: string

    /**
     * The document ID of the box to which the video is added
     *
     * @type {string}
     * @memberof PlaylistItemSubmissionRequest
     */
    boxToken: string
}
export interface QueueItem {
    _id?: string
    box: string
    submittedAt: Date
    video: any
    submitted_by: any
    startTime: Date
    endTime: Date
    /**
     * If set, the video will be played in priority, according to an implicit FIFO set by all the videos that
     * have a value for this property.
     */
    setToNext: Date
    /**
     * Indicates if the current state of the video was obtained by using berries
     *
     * A queue item forced with berries cannot be:
     * - skipped if it's playing
     * - unset from the next mini-queue
     *
     * @type {boolean}
     * @memberof QueueItem
     */
    stateForcedWithBerries: boolean
}

export interface Video {
    name: string
    link: string
    duration: string
}

export interface PlayingItem extends QueueItem {
    position: number
}

export interface QueueItem {
    _id?: string
    submittedAt: Date
    video: any
    submitted_by: any
    startTime: Date
    endTime: Date
    isPreselected: boolean
    /**
     * Indicates if the current state of the video was obtained by using berries
     *
     * A queue item forced with berries cannot be:
     * - skipped if it's playing
     * - unselected if it's preselected
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
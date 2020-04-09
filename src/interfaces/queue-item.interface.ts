export interface QueueItem {
    _id?: string
    submittedAt: Date
    video: any
    submitted_by: any
    startTime: Date
    endTime: Date
    isPreselected: boolean
}

export interface Video {
    name: string
    link: string
    duration: string
}

export interface CatalogItem {

}
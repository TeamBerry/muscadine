export class Message {
    public author: string | { _id: string, name: string }
    public contents: string
    public source: string
    public scope: string
    public time: Date
    /**
     * Qualifies the message. Server will send 'feedbacks'
     *
     * @type {('feedback' | 'message')}
     * @memberof Message
     */
    public type: 'feedback' | 'message'
    /**
     * Qualifies the feedback of the message
     *
     * @type {('error' | 'success' | 'info' | 'warning')}
     * @memberof Message
     */
    public feedbackType: 'error' | 'success' | 'info' | 'warning'

    constructor(message?: any) {
        this.author = message && message.author || null
        this.contents = message && message.contents
        this.source = message && message.source || null
        this.scope = message && message.scope || null
        this.time = message && message.time || new Date()
        this.type = message && message.type || 'message'
        this.feedbackType = message && message.feedbackType || null
    }
}

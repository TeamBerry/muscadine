export class Message {
    public author: string | { _id: string, name: string }
    public contents: string
    public source: string
    public scope: string
    public time: Date

    constructor(message?: any) {
        this.author = message && message.author || null
        this.contents = message && message.contents
        this.source = message && message.source || 'user'
        this.scope = message && message.scope || null
        this.time = message && message.time || new Date()
    }
}

export class SystemMessage extends Message {
    constructor(message?: Partial<Message>) {
        super(message)
        this.source = 'system'
    }
}

export class FeedbackMessage extends Message {
    /**
     * Qualifies the feedback of the message
     *
     * @type {('error' | 'success' | 'info' | 'warning')}
     * @memberof Message
     */
    public feedbackType: 'error' | 'success' | 'info' | 'warning'

    constructor(message?: any) {
        super(message)
        this.source = 'feedback'
        this.feedbackType = message && message.feedbackType || null
    }
}

export class Message {
    public author: { _id: string, name?: string, color?: string, role?: string }
    public contents: string
    public source: string
    public scope: string
    public time: Date

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message?: any) {
        this.author = message && message.author || null
        this.contents = message && message.contents
        this.source = message && message.source || 'human'
        this.scope = message && message.scope || null
        this.time = message && message.time || new Date()
    }
}

export class SystemMessage extends Message {
    public context: 'success' | 'info' | 'berries' | null

    constructor(message?: Partial<SystemMessage>) {
        super(message)
        this.source = 'system'
        this.context = message?.context ?? null
    }
}

export class FeedbackMessage extends Message {
    /**
     * Qualifies the feedback of the message
     *
     * @type {('error' | 'success' | 'info' | 'warning')}
     * @memberof Message
     */
    public context: 'error' | 'success' | 'info' | 'warning' | null

    constructor(message?: Partial<FeedbackMessage>) {
        super(message)
        this.source = 'feedback'
        this.context = message?.context ?? null
    }
}

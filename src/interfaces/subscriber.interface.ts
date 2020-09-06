import { BoxScope } from "./box-scope.interface"
import { Role } from "./acl.interface"

export interface Subscriber extends BoxScope {
    connexions: Array<{
        /**
         * Origin of connection
         *
         * @type {string}
         */
        origin: string
        /**
         * Socket identifier
         *
         * @type {string}
         */
        socket: string
    }>
    berries: number
}

export type BerryCount = Pick<Subscriber, 'userToken' | 'boxToken' | 'berries'>

export interface ActiveSubscriber {
    _id: string
    name: string
    origin: Subscriber['connexions'][0]['origin']
    role: Role
}

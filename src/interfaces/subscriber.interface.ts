import { BoxScope } from "./box-scope.interface";

export interface Subscriber extends BoxScope {
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
}

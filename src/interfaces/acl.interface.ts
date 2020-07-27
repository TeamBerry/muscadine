import { BoxScope } from "./box-scope.interface"

export type Permission = 'addVideo' | 'removeVideo' | 'forceNext' | 'forcePlay' | 'skipVideo' | 'editBox' | 'promoteVIP' | 'demoteVIP' | 'bypassVideoDurationLimit'

export type Role = 'admin' | 'moderator' | 'vip' | 'simple'

export interface ACLConfig {
    moderator: Array<Permission>
    vip: Array<Permission>
    simple: Array<Permission>
}

export interface RoleChangeRequest {
    /**
     * The requester
     *
     * @type {string}
     * @memberof RoleChangeRequest
     */
    source: string,
    /**
     * Who and where to apply the request
     *
     * @type {BoxScope}
     * @memberof RoleChangeRequest
     */
    scope: BoxScope
    /**
     * The role to give to the target (source.userToken)
     *
     * @type {Role}
     * @memberof RoleChangeRequest
     */
    role: Role,
}
import { BoxScope } from "./box-scope.interface"

export type Permission = 'addVideo' | 'removeVideo' | 'forceNext' | 'forcePlay' | 'skipVideo' | 'editBox' | 'promoteVIP' | 'demoteVIP' | 'bypassVideoDurationLimit' | 'inviteUser'

export type Role = 'admin' | 'moderator' | 'vip' | 'simple'

export interface ACLConfig {
    moderator: Array<Permission>
    vip: Array<Permission>
    simple: Array<Permission>
}

// eslint-disable-next-line no-shadow
export enum ACLEvaluationResult {
    NO = 0,
    YES = 1,
    BERRIES = 2
}

export interface RoleChangeRequest {
    /**
     * The requester
     *
     * @type {string}
     * @memberof RoleChangeRequest
     */
    source: string
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
    role: Role
}

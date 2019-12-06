import { Resource } from 'rest-hooks';

export default class DistributorResource extends Resource {
    readonly id: string | undefined = undefined;
    readonly isActive: boolean = false;
    readonly balance: number | null = null;
    readonly totalCollected: number | null = null;
    readonly picture: string = '';
    readonly registered: string = '';
    readonly firstName: string = '';
    readonly lastName: string = '';
    readonly company: string = '';
    readonly email: string = '';
    readonly phone: string = '';
    readonly address: string = '';

    pk() {
        return this.id;
    }

    static getFetchOptions() {
        return {
            ...super.getFetchOptions(),
            dataExpiryLength: 60 * 60 * 1000, // one hour
        };
    }

    static urlRoot = 'https://cup-admin-mock-server.herokuapp.com/distributors';
}
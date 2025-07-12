import { CacheService } from './redis';

// Cache-aside pattern implementation for your API endpoints
export class ApiCache {
    private static readonly CACHE_PREFIX = 'ziyy_gym:';
    private static readonly DEFAULT_TTL = parseInt(process.env.CACHE_TTL_DEFAULT || '3600', 10);

    // Generate cache keys
    private static key(type: string, identifier?: string | number): string {
        return identifier 
            ? `${this.CACHE_PREFIX}${type}:${identifier}`
            : `${this.CACHE_PREFIX}${type}`;
    }

    // Members cache
    static async getMembers(): Promise<any[] | null> {
        return await CacheService.get(this.key('members'));
    }

    static async setMembers(members: any[]): Promise<void> {
        await CacheService.set(this.key('members'), members, this.DEFAULT_TTL);
    }

    static async getMember(id: number): Promise<any | null> {
        return await CacheService.get(this.key('member', id));
    }

    static async setMember(id: number, member: any): Promise<void> {
        await CacheService.set(this.key('member', id), member, this.DEFAULT_TTL);
    }

    // Arrivals cache
    static async getArrivals(date?: string): Promise<any[] | null> {
        const key = date ? this.key('arrivals', date) : this.key('arrivals');
        return await CacheService.get(key);
    }

    static async setArrivals(arrivals: any[], date?: string): Promise<void> {
        const key = date ? this.key('arrivals', date) : this.key('arrivals');
        await CacheService.set(key, arrivals, this.DEFAULT_TTL);
    }

    // Incidentiles cache
    static async getIncidentiles(): Promise<any[] | null> {
        return await CacheService.get(this.key('incidentiles'));
    }

    static async setIncidentiles(incidentiles: any[]): Promise<void> {
        await CacheService.set(this.key('incidentiles'), incidentiles, this.DEFAULT_TTL);
    }

    // statistic counts cache (frequently accessed)
    static async getStatisticCounts(): Promise<any | null> {
        return await CacheService.get(this.key('statistic_counts'));
    }

    static async setStatisticCounts(counts: any): Promise<void> {
        const statisticTTL = parseInt(process.env.CACHE_TTL_STATISTICS || '60', 10); // 1 minute TTL for statistics
        await CacheService.set(this.key('statistic_counts'), counts, statisticTTL);
    }

    // Couple cache
    static async getCouple(memberId: number): Promise<any | null> {
        return await CacheService.get(this.key('couple', memberId));
    }

    static async setCouple(memberId: number, couple: any): Promise<void> {
        await CacheService.set(this.key('couple', memberId), couple, this.DEFAULT_TTL);
    }

    // Transaction FO cache
    static async getTxFo(): Promise<any[] | null> {
        return await CacheService.get(this.key('txFo'));
    }

    static async setTxFo(txs: any[]): Promise<void> {
        await CacheService.set(this.key('txFo'), txs, this.DEFAULT_TTL);
    }

    // Transaction Canteen cache
    static async getTxCanteen(): Promise<any[] | null> {
        return await CacheService.get(this.key('txCanteen'));
    }

    static async setTxCanteen(txs: any[]): Promise<void> {
        await CacheService.set(this.key('txCanteen'), txs, this.DEFAULT_TTL);
    }

    // Transaction Accounting cache
    static async getTxAccounting(): Promise<any[] | null> {
        return await CacheService.get(this.key('txAccounting'));
    }

    static async setTxAccounting(txs: any[]): Promise<void> {
        await CacheService.set(this.key('txAccounting'), txs, this.DEFAULT_TTL);
    }

    // Activities cache
    static async getActivities(): Promise<any[] | null> {
        return await CacheService.get(this.key('activities'));
    }

    static async setActivities(activities: any[]): Promise<void> {
        await CacheService.set(this.key('activities'), activities, this.DEFAULT_TTL);
    }

    // Campaigns cache
    static async getCampaigns(): Promise<any[] | null> {
        return await CacheService.get(this.key('campaigns'));
    }

    static async setCampaigns(campaigns: any[]): Promise<void> {
        await CacheService.set(this.key('campaigns'), campaigns, this.DEFAULT_TTL);
    }

    // Users cache
    static async getUsers(): Promise<any[] | null> {
        return await CacheService.get(this.key('users'));
    }

    static async setUsers(users: any[]): Promise<void> {
        await CacheService.set(this.key('users'), users, this.DEFAULT_TTL);
    }

    // Canteen with items cache (separate from transaction-canteen)
    static async getCanteenWithItems(): Promise<any[] | null> {
        return await CacheService.get(this.key('canteenWithItems'));
    }

    static async setCanteenWithItems(txs: any[]): Promise<void> {
        await CacheService.set(this.key('canteenWithItems'), txs, this.DEFAULT_TTL);
    }

    // Canteen Items cache (menu items)
    static async getCanteenItems(): Promise<any[] | null> {
        return await CacheService.get(this.key('canteenItems'));
    }

    static async setCanteenItems(items: any[]): Promise<void> {
        await CacheService.set(this.key('canteenItems'), items, this.DEFAULT_TTL);
    }

    // Invalidation methods
    static async invalidateMembers(): Promise<void> {
        await CacheService.invalidatePattern(`${this.CACHE_PREFIX}member*`);
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateArrivals(): Promise<void> {
        await CacheService.invalidatePattern(`${this.CACHE_PREFIX}arrivals*`);
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateIncidentiles(): Promise<void> {
        await CacheService.del(this.key('incidentiles'));
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateCouple(memberId: number): Promise<void> {
        await CacheService.del(this.key('couple', memberId));
    }

    static async invalidateTxFo(): Promise<void> {
        await CacheService.del(this.key('txFo'));
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateTxCanteen(): Promise<void> {
        await CacheService.del(this.key('txCanteen'));
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateTxAccounting(): Promise<void> {
        await CacheService.del(this.key('txAccounting'));
        await CacheService.del(this.key('statistic_counts'));
    }

    static async invalidateActivities(): Promise<void> {
        await CacheService.del(this.key('activities'));
    }

    static async invalidateCampaigns(): Promise<void> {
        await CacheService.del(this.key('campaigns'));
    }

    static async invalidateUsers(): Promise<void> {
        await CacheService.del(this.key('users'));
    }

    static async invalidateCanteenWithItems(): Promise<void> {
        await CacheService.del(this.key('canteenWithItems'));
    }

    static async invalidateCanteenItems(): Promise<void> {
        await CacheService.del(this.key('canteenItems'));
    }

    static async invalidateAll(): Promise<void> {
        await CacheService.invalidatePattern(`${this.CACHE_PREFIX}*`);
    }
}

// Cache-aside wrapper for database operations
export function withCache<T>(
    cacheKey: string,
    dbOperation: () => Promise<T>,
    ttl: number = parseInt(process.env.CACHE_TTL_DEFAULT || '3600', 10)
) {
    return async (): Promise<T> => {
        // Try to get from cache first
        const cached = await CacheService.get<T>(cacheKey);
        if (cached !== null) {
            return cached;
        }

        // If not in cache, fetch from database
        const result = await dbOperation();
        
        // Store in cache for next time
        await CacheService.set(cacheKey, result, ttl);
        
        return result;
    };
}

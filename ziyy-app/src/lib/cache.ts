import { CacheService } from './redis';

// Cache-aside pattern implementation for your API endpoints
export class ApiCache {
    private static readonly CACHE_PREFIX = 'ziyy_gym:';
    private static readonly DEFAULT_TTL = 300; // 5 minutes for frequently changing data
    private static readonly LONG_TTL = 3600; // 1 hour for stable data

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
        await CacheService.set(this.key('statistic_counts'), counts, 60); // 1 minute TTL
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

    static async invalidateAll(): Promise<void> {
        await CacheService.invalidatePattern(`${this.CACHE_PREFIX}*`);
    }
}

// Cache-aside wrapper for database operations
export function withCache<T>(
    cacheKey: string,
    dbOperation: () => Promise<T>,
    ttl: number = 300
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

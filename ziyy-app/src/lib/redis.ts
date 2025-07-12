import { createClient } from 'redis';

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    }
});

client.on('error', err => console.log('Redis Client Error', err));
client.on('connect', () => console.log('Redis Connected'));

// Initialize connection
let isConnected = false;
const connectRedis = async () => {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
};

// Cache utility with cache-aside pattern
export class CacheService {
    private static TTL = parseInt(process.env.CACHE_TTL_DEFAULT || '3600', 10); // Default TTL from env

    static async get<T>(key: string): Promise<T | null> {
        try {
            await connectRedis();
            const result = await client.get(key);
            return result ? JSON.parse(result) : null;
        } catch (error) {
            console.error('Cache get error:', error);
            return null;
        }
    }

    static async set(key: string, value: any, ttl: number = this.TTL): Promise<void> {
        try {
            await connectRedis();
            await client.setEx(key, ttl, JSON.stringify(value));
        } catch (error) {
            console.error('Cache set error:', error);
        }
    }

    static async del(key: string): Promise<void> {
        try {
            await connectRedis();
            await client.del(key);
        } catch (error) {
            console.error('Cache delete error:', error);
        }
    }

    static async invalidatePattern(pattern: string): Promise<void> {
        try {
            await connectRedis();
            const keys = await client.keys(pattern);
            if (keys.length > 0) {
                await client.del(keys);
            }
        } catch (error) {
            console.error('Cache invalidate error:', error);
        }
    }
}

export default client;
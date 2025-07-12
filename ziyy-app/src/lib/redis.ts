import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'u3W94A5hv9aEiufVhntQmGap4aMP0JLf',
    socket: {
        host: 'redis-16516.c89.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 16516
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
    private static TTL = 3600; // 1 hour default TTL

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
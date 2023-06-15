import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getKey(key: string) {
    return await this.cacheManager.get(key);
  }

  async saveKey<T>(key: string, value: T) {
    await this.cacheManager.set(key, value, 300);
  }

  async removeKey(key: string) {
    await this.cacheManager.del(key);
  }
}

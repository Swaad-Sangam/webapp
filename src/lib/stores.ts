import { writable } from 'svelte/store';
import type { modalStore_t } from './types';
import { cachedwritable } from 'svelte-cached-store';
import type { Session } from '@supabase/supabase-js';

// Normal stores

export const isLoading = writable<boolean>(true);
export const authStore = writable<Session | null>(null);
export const modalStore = writable<modalStore_t | null>(null);
import { writable } from 'svelte-local-storage-store';

export const preferences = writable('loggedUser', {
    email: ''
});
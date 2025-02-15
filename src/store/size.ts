import { defineStore } from 'pinia'
export const sizesStore = defineStore('sizes', {
    state: () => ({
        sizes: [
            {
                id: 1,
                value: 1
            }, {
                id: 2,
                value: 2
            }, {
                id: 3,
                value: 3
            }, {
                id: 4,
                value: 4
            }, {
                id: 5,
                value: 5
            }, {
                id: 6,
                value: 6
            }
        ],
    }),
    getters: {},
    actions: {},
})
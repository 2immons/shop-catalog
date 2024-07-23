import { defineStore } from 'pinia'
export const brandsStore = defineStore('brands', {
    state: () => ({
        brands: [
            {
                id: 1,
                value: "MSI"
            }, {
                id: 2,
                value: "KFA2"
            }, {
                id: 3,
                value: "ASUS"
            }, {
                id: 4,
                value: "GIGABYTE"
            }, {
                id: 5,
                value: "ZOTAC"
            }, {
                id: 6,
                value: "Palit"
            }, {
                id: 7,
                value: "Sapphire"
            }, {
                id: 7,
                value: "EVGA"
            }
        ]
    }),
    getters: {},
    actions: {},
})
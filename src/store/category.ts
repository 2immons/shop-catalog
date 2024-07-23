import { defineStore } from 'pinia'

export const categoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            {
                id: 1,
                name: "Видеокарты",
                quantity: 64,
                subCategories: [
                    {
                        id: 2,
                        name: "Офисные",
                        quantity: 33
                    }, {
                        id: 3,
                        name: "Игровые",
                        quantity: 31
                    },
                ]
            }, {
                id: 4,
                name: "Компьютеры",
                quantity: 35,
                subCategories: [
                    {
                        id: 5,
                        name: "Офисные",
                        quantity: 5
                    }, {
                        id: 6,
                        name: "Средние",
                        quantity: 10
                    }, {
                        id: 7,
                        name: "Игровые",
                        quantity: 20
                    },
                ]
            }, {
                id: 8,
                name: "Клавиатуры",
                quantity: 3,
                subCategories: [
                    {
                        id: 9,
                        name: "Офисные",
                        quantity: 2
                    }, {
                        id: 10,
                        name: "Игровые",
                        quantity: 1
                    },
                ]
            }, {
                id: 11,
                name: "Наушники",
                quantity: 21,
                subCategories: [
                    {
                        id: 12,
                        name: "Беспроводные",
                        quantity: 11
                    }, {
                        id: 13,
                        name: "Проводные",
                        quantity: 10
                    },
                ]
            }
        ],
    }),
    getters: {},
    actions: {},
})
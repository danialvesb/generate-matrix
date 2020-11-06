const vm = new Vue({
    el: '#app',
    methods: {
        getRandomPair() {
            let value = parseInt(Math.random() * 100)
            if ((value % 2) == 0 && value != 0) {
                return value;
            }
            
            return this.getRandomPair();
        },
        getRandomOdd() {
            let value = parseInt(Math.random() * 100)
            if ((value % 2) == 1 && value != 0) {
                return value;
            }

            return this.getRandomOdd();
        },
        generateMatrix(typeNumbers) {
            let matrix = [
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    [],

                ],
                [
                    [],
                    [],
                    [],
                    [],
                    [],

                ],
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            ];

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    matrix[i][j] = typeNumbers === 2 ? this.getRandomPair() : this.getRandomOdd();
                }
            }

            return matrix;
        },
    },
});

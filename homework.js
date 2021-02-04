var Homework = {};
    Homework.sample = function () {
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                Homework.createTable(i, j, i * j);
            }
        }
    }

    /**https://codepen.io/alian13/pen/poNggwO
     * 
     * @param {number} multiplicand 
     * @param {number} multiplier 
     * @param {number} ans 
     */
    Homework.createTable = function (multiplicand, multiplier, ans) {
        let td = document.createElement('td');
        td.innerHTML = multiplicand + 'x' + multiplier + ' = ' + ans;

        let body = document.getElementById('body');
        body.getElementsByTagName('tr')[multiplier - 1].appendChild(td);
        document.getElementById('table').style.display = 'block';
    }

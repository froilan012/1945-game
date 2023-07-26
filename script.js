const player = document.querySelector('#player'); //Airplane
let playerPosx = 350; //x-axis initial pos
let playerPosy = 650; //y-axis initial pos
const container = document.querySelector('#container');
player.style.left = playerPosx + 'px';
player.style.top = playerPosy + 'px';
let id = null;
let directionLeft = false; 
let directionRight = false;
let directionUp = false;
let directionDown = false;

window.addEventListener('keyup', () => {
    if (event.key == 'ArrowRight') {
        directionRight = false;
    }
    if (event.key == 'ArrowLeft') {
        directionLeft = false;
    }
    if (event.key == 'ArrowUp') {
        directionUp = false;
    }
    if (event.key == 'ArrowDown') {
        directionDown = false;
    }
});

window.addEventListener('keydown', () => {
    if (event.key == 'ArrowRight') {
        directionRight = true;
    }
    if (event.key == 'ArrowLeft') {
        directionLeft = true;
    }
    if (event.key == 'ArrowUp') {
        directionUp = true;
    }
    if (event.key == 'ArrowDown') {
        directionDown = true;
    }
})


id = setInterval(speed, 15); //movement animation
function speed() {
    if (directionRight && playerPosx < 650) {
        playerPosx += 5;
        player.style.left = playerPosx + 'px';
    }
    if (directionLeft && playerPosx > 00) {
        playerPosx -= 5;
        player.style.left = playerPosx + 'px';
    }
    if (directionUp && playerPosy > 50) {
        playerPosy -= 5;
        player.style.top = playerPosy + 'px';
    }
    if (directionDown && playerPosy < 650) {
        playerPosy += 5;
        player.style.top = playerPosy + 'px';
    }
}

let fire = 0;
window.addEventListener('keydown', () => {
    if (event.key == ' ') {
        fire = 1;
    }
});
window.addEventListener('keyup', () => {
    if (event.key == ' ') {
        fire = 0;
    }
});

const enemyArea = document.querySelector('#enemy-area')
//const enemy = document.createElement('div');
//enemy.setAttribute('id','enemy');
//var enemyPosx = 350;
//var enemyPosy = -50;
//var enemyDir = 0;

//enemy.style.top = enemyPosy + 'px';
//enemy.style.left = enemyPosx + 'px';

/* id = setInterval(enemyMove, 15)
function enemyMove() {
    if (enemyDir == 0) {
        enemyPosx -= 3;
        enemy.style.left = enemyPosx + 'px';
        if (enemyPosx < 0) {
            enemyDir = 1;
        }
    }
    if (enemyDir == 1) {
        enemyPosx += 3;
        enemy.style.left = enemyPosx + 'px';
        if (enemyPosx > 640) {
            enemyDir = 0;
        }
    }
} */
var enemyPosx = 0;
var enemyPosy = 0;
var i = 1;

//console.log(enemy)

/* enemy1.forEach((button) => {
    button.addEventListener('mouseover', () => {
        console.log(button.id);
        if(enemyArea.hasChildNodes(enemyArea.querySelector('#'+button.id))) {
            enemyArea.removeChild(enemyArea.querySelector('#'+button.id))
        }
        //console.log(parseFloat(button.style.top));
        //console.log(parseFloat(button.style.left));
        if (bulletPosx >= parseFloat(button.style.left) - 50 && bulletPosx <= parseFloat(button.style.left) + 50 && bulletPosy <= parseFloat(button.style.top) + 50 && bulletPosy >= parseFloat(button.style.top) - 50) {
            console.log(button.id);
        }
    })
}) */

id = setInterval(bullet1, 200)
function bullet1() {
    const enemy1 = document.querySelectorAll('.enemy');

    
    if (fire == 1) {
        const bullet = document.createElement('div');
        bullet.setAttribute('class','bullet');
        bullet.style.width = '50px'
        bullet.style.position = 'absolute';
        var bulletPosx = playerPosx;
        var bulletPosy = playerPosy;
        bullet.style.top = bulletPosy + 'px';
        bullet.style.left = bulletPosx + 'px';
        bullet.innerHTML = '<svg viewBox="230.078 217.445 50 45" width="50" height="45"><g transform="matrix(0, -0.045918, 0.058182, 0, 225.987549, 262.903473)"><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M100,3179.4V1950.1l2719.4,7.7c2989.9,5.8,2815.3,0,3567.1,130.4c824.7,141.9,1800.8,418.1,2740.6,772.9c389.3,145.8,772.9,304.9,772.9,318.4c0,5.7-23,21.1-51.8,32.6c-30.7,11.5-212.9,84.4-408.5,163C8053.2,3935.1,6634,4299.4,5489,4387.7c-138.1,9.6-1338.6,19.2-2813.4,19.2H100V3179.4z M1327.4,3179.4v-613.7h-306.9H713.7v613.7v613.7h306.9h306.9V3179.4z M5009.6,3486.3v-306.9H3475.3H1941.1v306.9v306.8h1534.2h1534.2V3486.3z M6022.2,3745.2c161.1-26.8,466-82.5,680.8-126.6c454.5-92.1,1937-420,1948.5-431.5c3.8-3.8-675.1-7.7-1509.3-7.7H5623.3v306.9v306.8h53.7C5705.8,3793.1,5861.1,3772.1,6022.2,3745.2z"></path><path d="M100,111v-1229.3l2719.4,7.7c2989.9,5.8,2815.3,0,3567.1,130.4c824.7,141.9,1800.8,418.1,2740.6,772.9C9516.4-61.7,9900,97.5,9900,111c0,5.7-23,21.1-51.8,32.6c-30.7,11.5-212.9,84.4-408.5,163C8053.2,866.6,6634,1231,5489,1319.2c-138.1,9.6-1338.6,19.2-2813.4,19.2H100V111z M1327.4,111v-613.7h-306.9H713.7V111v613.7h306.9h306.9V111z M5009.6,417.8V111H3475.3H1941.1v306.8v306.9h1534.2h1534.2V417.8z M6022.2,676.7c161.1-26.8,466-82.5,680.8-126.6c454.5-92.1,1937-420,1948.5-431.5c3.8-3.8-675.1-7.7-1509.3-7.7H5623.3v306.8v306.9h53.7C5705.8,724.7,5861.1,703.6,6022.2,676.7z"></path><path d="M100-2957.5v-1229.3l2719.4,7.7c2989.9,5.8,2815.3,0,3567.1,130.4c824.7,141.9,1800.8,418.1,2740.6,772.9c389.3,145.8,772.9,304.9,772.9,318.3c0,5.8-23,21.1-51.8,32.6c-30.7,11.5-212.9,84.4-408.5,163C8053.2-2201.9,6634-1837.5,5489-1749.3c-138.1,9.6-1338.6,19.2-2813.4,19.2H100V-2957.5z M1327.4-2957.5v-613.7h-306.9H713.7v613.7v613.7h306.9h306.9V-2957.5z M5009.6-2650.7v-306.8H3475.3H1941.1v306.8v306.9h1534.2h1534.2V-2650.7z M6022.2-2391.8c161.1-26.9,466-82.5,680.8-126.6c454.5-92.1,1937-420,1948.5-431.5c3.8-3.8-675.1-7.7-1509.3-7.7H5623.3v306.8v306.9h53.7C5705.8-2343.8,5861.1-2364.9,6022.2-2391.8z"></path></g></g></svg>'
        container.appendChild(bullet);

        id = setInterval(() => {
            if (bulletPosy > -20) {
                bulletPosy -= 5;
                bullet.style.top = bulletPosy + 'px';
                if (bulletPosy <= -20) {
                    bulletPosx = 0;
                    //bulletPosy = playerPosy - 50;
                    container.removeChild(bullet);
                }
                //bulletPosy = -50;
            }
        }, 5);
        //console.log(enemy1);
    }
    //console.log(enemy1)
    /* enemy1.forEach((button) => {
        const test2 = button.getBoundingClientRect();
        //console.log(test2.top)
        //console.log(button.id)
        if (bulletPosx >= test2.left - 50 && bulletPosx <= test2.left + 50 && bulletPosy <= test2.top && bulletPosy >= test2.top - 50) {
            console.log(button.id);
        }
        button.addEventListener('mouseover', () => {
            console.log(button.id);
            if(enemyArea.hasChildNodes(enemyArea.querySelector('#'+button.id))) {
                enemyArea.removeChild(enemyArea.querySelector('#'+button.id))
            }
            //console.log(parseFloat(button.style.top));
            //console.log(parseFloat(button.style.left));
            
        })
    })*/
    const bullet2 = document.querySelectorAll('.bullet');
    bullet2.forEach((button) => {
        const test3 = button.getBoundingClientRect();
        console.log(test3.x,test3.y)
        enemy1.forEach((button) => {
            const test2 = button.getBoundingClientRect();
            if (test3.left >= test2.left - 50 && test3.left <= test2.left + 50 && test3.top <= test2.top && test3.top >= test2.top - 50) {
                //console.log(button.top);
                if(container.hasChildNodes(container.querySelector('#'+button.id))) {
                    container.removeChild(container.querySelector('#'+button.id));
                }
            }
        })
    })
}

id = setInterval(createEnemy, 750); 
function createEnemy() {
    const enemy = document.createElement('div');
    enemyPosx = Math.floor(650 * Math.random());
    enemy.setAttribute('id','enemy-plane'+i);
    enemy.setAttribute('class','enemy');
    enemy.style.position = 'absolute';
    enemy.innerHTML += '<svg viewBox="0 0 70.71 70.71" width="50px" height="50px"><path style="fill: rgba(255, 0, 0, 0.93);" id="path13" d="M 50.138 20.571 C 50.326 20.761 50.308 21.001 49.659 22.405 C 49.582 22.569 49.156 23.175 49.156 23.175 C 49.156 23.175 49.442 23.49 49.52 23.568 C 49.67 23.719 49.739 24.057 49.678 24.322 C 49.488 25.142 47.195 28.424 45.911 29.707 C 45.114 30.506 44.703 31.05 44.732 31.27 C 44.756 31.457 45.058 32.261 45.403 33.053 C 46.012 34.451 46.24 34.725 53.11 42.371 C 58.55 48.424 60.215 50.377 60.313 50.821 C 60.587 52.046 59.526 53.184 56.786 54.608 L 55.372 55.339 C 55.372 55.339 34.753 40.577 34.753 40.577 L 22.392 49.967 L 22.675 50.469 C 22.831 50.746 24.123 52.358 25.546 54.05 C 26.969 55.743 28.149 57.289 28.168 57.488 C 28.241 58.28 25.068 60.772 24.592 60.295 C 23.841 59.544 20.688 57.139 20.423 57.114 C 20.233 57.094 17.523 55.029 16.603 54.108 C 15.682 53.187 13.616 50.478 13.598 50.288 C 13.572 50.023 11.167 46.869 10.415 46.119 C 9.939 45.642 12.431 42.469 13.224 42.544 C 13.421 42.561 14.967 43.741 16.66 45.164 C 18.354 46.588 19.965 47.88 20.24 48.036 L 20.744 48.318 L 30.133 35.958 C 30.133 35.958 15.371 15.339 15.371 15.339 L 16.104 13.924 C 17.526 11.184 18.665 10.123 19.891 10.397 C 20.333 10.497 22.286 12.16 28.34 17.602 C 35.985 24.47 36.26 24.698 37.658 25.307 C 38.45 25.653 39.254 25.954 39.441 25.979 C 39.662 26.007 40.206 25.597 41.003 24.799 C 42.287 23.515 45.568 21.221 46.39 21.032 C 46.655 20.97 46.992 21.04 47.143 21.191 C 47.22 21.269 47.531 21.551 47.531 21.551 C 47.531 21.551 48.137 21.124 48.302 21.046 C 49.705 20.398 49.95 20.384 50.138 20.571 Z" transform="matrix(-0.707106, 0.707107, -0.707107, -0.707106, 85.354546, 35.355305)"></path></svg>';
    enemy.innerText += i;
    i++;
    var enemyPosy = -25;
    enemy.style.left = enemyPosx + 'px';
    container.appendChild(enemy);
    //console.log(enemyPosx)
    id = setInterval(enemyMove, 25)
    function enemyMove() {
        if (enemyPosy < 650) {
            enemyPosy += 5;
            enemy.style.top = enemyPosy + 'px';
        }
        if (enemyPosy == 645) {
            if(container.querySelector('#'+enemy.id) !== null) {
                container.removeChild(document.getElementById(enemy.id));
                }
            }
        }
}
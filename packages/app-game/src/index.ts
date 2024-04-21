async function startGame() {
    const body = document.body;
    const canvas = document.createElement('canvas');
    body.appendChild(canvas);

    const onWindowResized = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onWindowResized);
    onWindowResized();

    const gl = canvas.getContext('webgl2');
    if (!gl) {
        throw new Error('WebGL2 is not supported');
    }
}

startGame()
    .then(() => {
        console.log('Game started');
    })
    .catch((error) => {
        console.error(error);
    });
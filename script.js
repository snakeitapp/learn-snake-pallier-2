<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn Snake</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <canvas id="bgCanvas"></canvas>

    <div class="phone-play-area">

        <div id="welcomeScreen" class="welcome-screen">
            <div class="welcome-content">
                <h1>Make Your Own Snake <br>🐍</h1>
            </div>

            <div class="welcome-bottom">
                <button id="getStartedButton">Get Started</button>
                <p class="account-text">I already have an account</p>
            </div>
        </div>

        <div id="gameScreen" class="game-screen hidden">
            <canvas id="gameCanvas"></canvas>

            <button id="startButton">START</button>

            <div id="gameOverMessage" class="hidden">
                <p>Game Over</p>
                <button onclick="restartGame()">Rejouer</button>
            </div>
        </div>

    </div>

    <script src="script.js"></script>
</body>
</html>

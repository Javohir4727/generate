function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateGradient() {
    var numColors = Math.floor(Math.random() * 4) + 2; // 2 dan 5 gacha bo'lgan ranglar
    var gradientDirection = Math.floor(Math.random() * 360); // 0 dan 360 gradusgacha

    var gradientString = 'linear-gradient(' + gradientDirection + 'deg';
    for (var i = 0; i < numColors; i++) {
      gradientString += ', ' + getRandomColor();
    }
    gradientString += ')';

    document.getElementById('gradient').style.background = gradientString;
  }
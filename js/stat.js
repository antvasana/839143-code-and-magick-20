'use strict';

window.renderStatistics = function (ctx, players, times) {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 50;
  var LINE_GAP = 20;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var BAR_DOWN = CLOUD_Y - LINE_GAP + CLOUD_HEIGHT - LINE_GAP;
  var BAR_MAX = 150;
  var CLOUD_COLOR = 'white';
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

  var getMaxTime = function (time) {
    var maxTime = time[0];
    Math.max.apply(null, maxTime);
    return Math.max(maxTime);
  };

  var renderCloud = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  var renderFont = function (font, color) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = 'black';
    ctx.fillText('Ура вы победили!', 135, 25);
    ctx.fillText('Список результатов:', 135, 48);
  }

  var renderRect = function (players) {
    players.forEach(function callback(players[i], i, players) {
      //your iterator
    }[, thisArg]);
  }

  const players = ['Вы', 'Кекс', 'Катя', 'Игорь']
  const copy = []

  // до
  for (let i = 0; i < players.length; i++) {
    copy.push(items[i])
  }

  // после
  items.forEach(function (players) {
    copy.push(players)
  })

  for (var i = 0; i < players.length; i++) {
    var BAR_HEIGHT = Math.round((BAR_MAX * times[i]) / getMaxTime(times));
    var BAR_Y = BAR_DOWN - BAR_HEIGHT;

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(233, 100%, ' + (Math.floor(Math.random() * 70) + 20) + '%)';
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y - LINE_GAP);
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, CLOUD_HEIGHT - LINE_GAP);
  }
};

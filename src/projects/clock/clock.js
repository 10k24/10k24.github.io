
  // Base dimension and pixels per pixel (per axis)
  // e.g.
  // Sides: dim*ppp
  // Area: dim*dim*2*ppp
  const dim = 32;
  let ppp = 16;

  // Start 12 rows from the end
  const calendarStartRow = dim - 12;

  const colors = {
    bg: 0,
    default: 200,
    highlight: "rgb(80, 0, 255)"
  };

  let font;
  let today;

  function preload() {
    font = loadFont("./referential_mono.ttf");
  }

  function setup() {
    ppp = Math.floor(Math.min(window.windowWidth, window.windowHeight) / dim);
    createCanvas(dim * ppp, dim * ppp);
    // let x = createCanvas(dim * ppp, dim * ppp);
    // x.addClass('square-p5');
    textFont(font);
    if (dim < 32) {
        throw new Error(`Dimension of size=${dim} is too small to display a calendar.`);
    }
  }


  function draw() {
    today = new Date();
    background(colors.bg);
    noStroke();

    
    // TODO: 32x19 available for clock
    textClock("10k24", colors.default, 2, 4);
    textClock(`${today.getFullYear()}`, colors.highlight, 5, 9);
    
    // TODO: every 1 hour do an interesting transition/animation
    
    draw60(today.getSeconds(), colors.default, calendarStartRow - 8);
    draw60(today.getMinutes(), colors.default, calendarStartRow - 5);
    drawHours(today, colors.default, calendarStartRow - 2);
    drawCalendar(today, colors.default, calendarStartRow);

    // TODO: vellum diffusion via custom shader
    // filter(BLUR, 2);
    // filter(fShader);
  }

  // TODO: convert to LEDs, but that should be handled when converting to pixel buffers,
  // this whole “led-pixel” look is just for web display vs. on the LED matrix
  // maybe runtime optimization to cache essential char patterns
  function textClock(str, c, scale, row) {
    push();
    fill(c);
    textSize(scale * ppp);
    textAlign(CENTER);
    // TODO: texttopoints https://p5js.org/reference/p5.Font/textToPoints/
    text(str, width/2, row*ppp);
    pop();
  }

  // With this display you’re always viewing a rounded-up time
  function draw60(ticker, c, row) {
    push();
    fill(c);
    for (let i=0; i<60; i++) {
      drawXY(i < 30 ? i : i-30, i < 30 ? row : row+1);
      if (i === ticker) {
          push();
          fill(colors.highlight);
          drawXY(i < 30 ? i : i-30, i < 30 ? row : row+1);
          pop();
      }
    }
    pop();
  }

  function drawHours(today, c, row) {
    push();
    fill(c);
    for (let i=0; i<24; i++) {
      drawXY(i <= 12 ? i : i+1, row);
      if (i === today.getHours()) {
          push();
          fill(colors.highlight);
          drawXY(i <= 12 ? i : i+1, row);
          pop();
      }
    }
    pop();
  }

  // TODO: alternative is 16 x 26 for a weekly calendar instead of monthly
  function drawCalendar(today, c, startRow) {
    push();
    fill(c);
    drawMonth(1, 31, startRow);
    drawMonth(2, isLeap(today.getFullYear()) ? 29 : 28, startRow);
    drawMonth(3, 31, startRow);
    drawMonth(4, 30, startRow);
    drawMonth(5, 31, startRow);
    drawMonth(6, 30, startRow);
    drawMonth(7, 31, startRow);
    drawMonth(8, 31, startRow);
    drawMonth(9, 30, startRow);
    drawMonth(10, 31, startRow);
    drawMonth(11, 30, startRow);
    drawMonth(12, 31, startRow);
    drawToday(today, colors.highlight, startRow);
    pop();
  }

  function drawMonth(monthRow, days, startRow) {
    for (let i=0; i<days; i++) {
      drawXY(i, startRow + monthRow - 1);
    }
  }

  function isLeap(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  }

  function drawToday(today, c, startRow) {
    push();
    fill(c);
    
    const monthRow = today.getMonth();
    const dayCol = today.getDate();
    drawXY(dayCol, startRow + monthRow);
    
    pop();
  }

  function drawXY(x, y) {
    led(x*ppp, y*ppp, ppp, ppp);
  }

  function drawIdx(i) {
    const row = floor(i / dim) * ppp;
    const col = i % dim;
    led(col*ppp, row*ppp, ppp, ppp);
  }

  // More realistic for an LED matrix
  function led(x, y, w, h) {
    ellipse(x + w/2, y + h/2, w/2, h/2);
  }

  function pixel(x, y, w, h) {
    rect(x, y, w, h);
  }
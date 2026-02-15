const sketchFunction = function(p) {
  const describe = (...args) => p.describe(...args);
  const describeElement = (...args) => p.describeElement(...args);
  const textOutput = (...args) => p.textOutput(...args);
  const gridOutput = (...args) => p.gridOutput(...args);
  const alpha = (...args) => p.alpha(...args);
  const blue = (...args) => p.blue(...args);
  const brightness = (...args) => p.brightness(...args);
  const color = (...args) => p.color(...args);
  const green = (...args) => p.green(...args);
  const hue = (...args) => p.hue(...args);
  const lerpColor = (...args) => p.lerpColor(...args);
  const lightness = (...args) => p.lightness(...args);
  const red = (...args) => p.red(...args);
  const saturation = (...args) => p.saturation(...args);
  const background = (...args) => p.background(...args);
  const clear = (...args) => p.clear(...args);
  const colorMode = (...args) => p.colorMode(...args);
  const fill = (...args) => p.fill(...args);
  const noFill = (...args) => p.noFill(...args);
  const noStroke = (...args) => p.noStroke(...args);
  const stroke = (...args) => p.stroke(...args);
  const erase = (...args) => p.erase(...args);
  const noErase = (...args) => p.noErase(...args);
  const arc = (...args) => p.arc(...args);
  const ellipse = (...args) => p.ellipse(...args);
  const circle = (...args) => p.circle(...args);
  const line = (...args) => p.line(...args);
  const point = (...args) => p.point(...args);
  const quad = (...args) => p.quad(...args);
  const rect = (...args) => p.rect(...args);
  const square = (...args) => p.square(...args);
  const triangle = (...args) => p.triangle(...args);
  const ellipseMode = (...args) => p.ellipseMode(...args);
  const noSmooth = (...args) => p.noSmooth(...args);
  const rectMode = (...args) => p.rectMode(...args);
  const smooth = (...args) => p.smooth(...args);
  const strokeCap = (...args) => p.strokeCap(...args);
  const strokeJoin = (...args) => p.strokeJoin(...args);
  const strokeWeight = (...args) => p.strokeWeight(...args);
  const bezier = (...args) => p.bezier(...args);
  const bezierDetail = (...args) => p.bezierDetail(...args);
  const bezierPoint = (...args) => p.bezierPoint(...args);
  const bezierTangent = (...args) => p.bezierTangent(...args);
  const curve = (...args) => p.curve(...args);
  const curveDetail = (...args) => p.curveDetail(...args);
  const curveTightness = (...args) => p.curveTightness(...args);
  const curvePoint = (...args) => p.curvePoint(...args);
  const curveTangent = (...args) => p.curveTangent(...args);
  const beginContour = (...args) => p.beginContour(...args);
  const beginShape = (...args) => p.beginShape(...args);
  const bezierVertex = (...args) => p.bezierVertex(...args);
  const curveVertex = (...args) => p.curveVertex(...args);
  const endContour = (...args) => p.endContour(...args);
  const endShape = (...args) => p.endShape(...args);
  const quadraticVertex = (...args) => p.quadraticVertex(...args);
  const vertex = (...args) => p.vertex(...args);
  const normal = (...args) => p.normal(...args);
  const print = (...args) => p.print(...args);
  const cursor = (...args) => p.cursor(...args);
  const frameRate = (...args) => p.frameRate(...args);
  const getTargetFrameRate = (...args) => p.getTargetFrameRate(...args);
  const noCursor = (...args) => p.noCursor(...args);
  const windowResized = (...args) => p.windowResized(...args);
  const fullscreen = (...args) => p.fullscreen(...args);
  const pixelDensity = (...args) => p.pixelDensity(...args);
  const displayDensity = (...args) => p.displayDensity(...args);
  const getURL = (...args) => p.getURL(...args);
  const getURLPath = (...args) => p.getURLPath(...args);
  const getURLParams = (...args) => p.getURLParams(...args);
  const createCanvas = (...args) => p.createCanvas(...args);
  const resizeCanvas = (...args) => p.resizeCanvas(...args);
  const noCanvas = (...args) => p.noCanvas(...args);
  const createGraphics = (...args) => p.createGraphics(...args);
  const createFramebuffer = (...args) => p.createFramebuffer(...args);
  const blendMode = (...args) => p.blendMode(...args);
  const noLoop = (...args) => p.noLoop(...args);
  const loop = (...args) => p.loop(...args);
  const isLooping = (...args) => p.isLooping(...args);
  const push = (...args) => p.push(...args);
  const pop = (...args) => p.pop(...args);
  const redraw = (...args) => p.redraw(...args);
  const p5 = (...args) => p.p5(...args);
  const applyMatrix = (...args) => p.applyMatrix(...args);
  const resetMatrix = (...args) => p.resetMatrix(...args);
  const rotate = (...args) => p.rotate(...args);
  const rotateX = (...args) => p.rotateX(...args);
  const rotateY = (...args) => p.rotateY(...args);
  const rotateZ = (...args) => p.rotateZ(...args);
  const scale = (...args) => p.scale(...args);
  const shearX = (...args) => p.shearX(...args);
  const shearY = (...args) => p.shearY(...args);
  const translate = (...args) => p.translate(...args);
  const storeItem = (...args) => p.storeItem(...args);
  const getItem = (...args) => p.getItem(...args);
  const clearStorage = (...args) => p.clearStorage(...args);
  const removeItem = (...args) => p.removeItem(...args);
  const createStringDict = (...args) => p.createStringDict(...args);
  const createNumberDict = (...args) => p.createNumberDict(...args);
  const select = (...args) => p.select(...args);
  const selectAll = (...args) => p.selectAll(...args);
  const removeElements = (...args) => p.removeElements(...args);
  const changed = (...args) => p.changed(...args);
  const input = (...args) => p.input(...args);
  const createDiv = (...args) => p.createDiv(...args);
  const createP = (...args) => p.createP(...args);
  const createSpan = (...args) => p.createSpan(...args);
  const createImg = (...args) => p.createImg(...args);
  const createA = (...args) => p.createA(...args);
  const createSlider = (...args) => p.createSlider(...args);
  const createButton = (...args) => p.createButton(...args);
  const createCheckbox = (...args) => p.createCheckbox(...args);
  const createSelect = (...args) => p.createSelect(...args);
  const createRadio = (...args) => p.createRadio(...args);
  const createColorPicker = (...args) => p.createColorPicker(...args);
  const createInput = (...args) => p.createInput(...args);
  const createFileInput = (...args) => p.createFileInput(...args);
  const createVideo = (...args) => p.createVideo(...args);
  const createAudio = (...args) => p.createAudio(...args);
  const createCapture = (...args) => p.createCapture(...args);
  const createElement = (...args) => p.createElement(...args);
  const setMoveThreshold = (...args) => p.setMoveThreshold(...args);
  const setShakeThreshold = (...args) => p.setShakeThreshold(...args);
  const deviceMoved = (...args) => p.deviceMoved(...args);
  const deviceTurned = (...args) => p.deviceTurned(...args);
  const deviceShaken = (...args) => p.deviceShaken(...args);
  const keyPressed = (...args) => p.keyPressed(...args);
  const keyReleased = (...args) => p.keyReleased(...args);
  const keyTyped = (...args) => p.keyTyped(...args);
  const keyIsDown = (...args) => p.keyIsDown(...args);
  const mouseMoved = (...args) => p.mouseMoved(...args);
  const mouseDragged = (...args) => p.mouseDragged(...args);
  const mousePressed = (...args) => p.mousePressed(...args);
  const mouseReleased = (...args) => p.mouseReleased(...args);
  const mouseClicked = (...args) => p.mouseClicked(...args);
  const doubleClicked = (...args) => p.doubleClicked(...args);
  const mouseWheel = (...args) => p.mouseWheel(...args);
  const requestPointerLock = (...args) => p.requestPointerLock(...args);
  const exitPointerLock = (...args) => p.exitPointerLock(...args);
  const touchStarted = (...args) => p.touchStarted(...args);
  const touchMoved = (...args) => p.touchMoved(...args);
  const touchEnded = (...args) => p.touchEnded(...args);
  const createImage = (...args) => p.createImage(...args);
  const saveCanvas = (...args) => p.saveCanvas(...args);
  const saveFrames = (...args) => p.saveFrames(...args);
  const loadImage = (...args) => p.loadImage(...args);
  const saveGif = (...args) => p.saveGif(...args);
  const image = (...args) => p.image(...args);
  const tint = (...args) => p.tint(...args);
  const noTint = (...args) => p.noTint(...args);
  const imageMode = (...args) => p.imageMode(...args);
  const blend = (...args) => p.blend(...args);
  const copy = (...args) => p.copy(...args);
  const filter = (...args) => p.filter(...args);
  const get = (...args) => p.get(...args);
  const loadPixels = (...args) => p.loadPixels(...args);
  const set = (...args) => p.set(...args);
  const updatePixels = (...args) => p.updatePixels(...args);
  const loadJSON = (...args) => p.loadJSON(...args);
  const loadStrings = (...args) => p.loadStrings(...args);
  const loadTable = (...args) => p.loadTable(...args);
  const loadXML = (...args) => p.loadXML(...args);
  const loadBytes = (...args) => p.loadBytes(...args);
  const httpGet = (...args) => p.httpGet(...args);
  const httpPost = (...args) => p.httpPost(...args);
  const httpDo = (...args) => p.httpDo(...args);
  const createWriter = (...args) => p.createWriter(...args);
  const save = (...args) => p.save(...args);
  const saveJSON = (...args) => p.saveJSON(...args);
  const saveStrings = (...args) => p.saveStrings(...args);
  const saveTable = (...args) => p.saveTable(...args);
  const abs = (...args) => p.abs(...args);
  const ceil = (...args) => p.ceil(...args);
  const constrain = (...args) => p.constrain(...args);
  const dist = (...args) => p.dist(...args);
  const exp = (...args) => p.exp(...args);
  const floor = (...args) => p.floor(...args);
  const lerp = (...args) => p.lerp(...args);
  const log = (...args) => p.log(...args);
  const mag = (...args) => p.mag(...args);
  const map = (...args) => p.map(...args);
  const max = (...args) => p.max(...args);
  const min = (...args) => p.min(...args);
  const norm = (...args) => p.norm(...args);
  const pow = (...args) => p.pow(...args);
  const round = (...args) => p.round(...args);
  const sq = (...args) => p.sq(...args);
  const sqrt = (...args) => p.sqrt(...args);
  const fract = (...args) => p.fract(...args);
  const createVector = (...args) => p.createVector(...args);
  const noise = (...args) => p.noise(...args);
  const noiseDetail = (...args) => p.noiseDetail(...args);
  const noiseSeed = (...args) => p.noiseSeed(...args);
  const randomSeed = (...args) => p.randomSeed(...args);
  const random = (...args) => p.random(...args);
  const randomGaussian = (...args) => p.randomGaussian(...args);
  const acos = (...args) => p.acos(...args);
  const asin = (...args) => p.asin(...args);
  const atan = (...args) => p.atan(...args);
  const atan2 = (...args) => p.atan2(...args);
  const cos = (...args) => p.cos(...args);
  const sin = (...args) => p.sin(...args);
  const tan = (...args) => p.tan(...args);
  const degrees = (...args) => p.degrees(...args);
  const radians = (...args) => p.radians(...args);
  const angleMode = (...args) => p.angleMode(...args);
  const textAlign = (...args) => p.textAlign(...args);
  const textLeading = (...args) => p.textLeading(...args);
  const textSize = (...args) => p.textSize(...args);
  const textStyle = (...args) => p.textStyle(...args);
  const textWidth = (...args) => p.textWidth(...args);
  const textAscent = (...args) => p.textAscent(...args);
  const textDescent = (...args) => p.textDescent(...args);
  const textWrap = (...args) => p.textWrap(...args);
  const loadFont = (...args) => p.loadFont(...args);
  const text = (...args) => p.text(...args);
  const textFont = (...args) => p.textFont(...args);
  const append = (...args) => p.append(...args);
  const arrayCopy = (...args) => p.arrayCopy(...args);
  const concat = (...args) => p.concat(...args);
  const reverse = (...args) => p.reverse(...args);
  const shorten = (...args) => p.shorten(...args);
  const shuffle = (...args) => p.shuffle(...args);
  const sort = (...args) => p.sort(...args);
  const splice = (...args) => p.splice(...args);
  const subset = (...args) => p.subset(...args);
  const float = (...args) => p.float(...args);
  const int = (...args) => p.int(...args);
  const str = (...args) => p.str(...args);
  const boolean = (...args) => p.boolean(...args);
  const byte = (...args) => p.byte(...args);
  const char = (...args) => p.char(...args);
  const unchar = (...args) => p.unchar(...args);
  const hex = (...args) => p.hex(...args);
  const unhex = (...args) => p.unhex(...args);
  const join = (...args) => p.join(...args);
  const match = (...args) => p.match(...args);
  const matchAll = (...args) => p.matchAll(...args);
  const nf = (...args) => p.nf(...args);
  const nfc = (...args) => p.nfc(...args);
  const nfp = (...args) => p.nfp(...args);
  const nfs = (...args) => p.nfs(...args);
  const split = (...args) => p.split(...args);
  const splitTokens = (...args) => p.splitTokens(...args);
  const trim = (...args) => p.trim(...args);
  const day = (...args) => p.day(...args);
  const hour = (...args) => p.hour(...args);
  const minute = (...args) => p.minute(...args);
  const millis = (...args) => p.millis(...args);
  const month = (...args) => p.month(...args);
  const second = (...args) => p.second(...args);
  const year = (...args) => p.year(...args);
  const plane = (...args) => p.plane(...args);
  const box = (...args) => p.box(...args);
  const sphere = (...args) => p.sphere(...args);
  const cylinder = (...args) => p.cylinder(...args);
  const cone = (...args) => p.cone(...args);
  const ellipsoid = (...args) => p.ellipsoid(...args);
  const torus = (...args) => p.torus(...args);
  const orbitControl = (...args) => p.orbitControl(...args);
  const debugMode = (...args) => p.debugMode(...args);
  const noDebugMode = (...args) => p.noDebugMode(...args);
  const ambientLight = (...args) => p.ambientLight(...args);
  const specularColor = (...args) => p.specularColor(...args);
  const directionalLight = (...args) => p.directionalLight(...args);
  const pointLight = (...args) => p.pointLight(...args);
  const lights = (...args) => p.lights(...args);
  const lightFalloff = (...args) => p.lightFalloff(...args);
  const spotLight = (...args) => p.spotLight(...args);
  const noLights = (...args) => p.noLights(...args);
  const loadModel = (...args) => p.loadModel(...args);
  const model = (...args) => p.model(...args);
  const loadShader = (...args) => p.loadShader(...args);
  const createShader = (...args) => p.createShader(...args);
  const shader = (...args) => p.shader(...args);
  const resetShader = (...args) => p.resetShader(...args);
  const texture = (...args) => p.texture(...args);
  const textureMode = (...args) => p.textureMode(...args);
  const textureWrap = (...args) => p.textureWrap(...args);
  const normalMaterial = (...args) => p.normalMaterial(...args);
  const ambientMaterial = (...args) => p.ambientMaterial(...args);
  const emissiveMaterial = (...args) => p.emissiveMaterial(...args);
  const specularMaterial = (...args) => p.specularMaterial(...args);
  const shininess = (...args) => p.shininess(...args);
  const camera = (...args) => p.camera(...args);
  const perspective = (...args) => p.perspective(...args);
  const ortho = (...args) => p.ortho(...args);
  const frustum = (...args) => p.frustum(...args);
  const createCamera = (...args) => p.createCamera(...args);
  const setCamera = (...args) => p.setCamera(...args);
  const vertexNormal = (...args) => p.vertexNormal(...args);
  const setAttributes = (...args) => p.setAttributes(...args);
  const getAudioContext = (...args) => p.getAudioContext(...args);
  const userStartAudio = (...args) => p.userStartAudio(...args);
  const getOutputVolume = (...args) => p.getOutputVolume(...args);
  const outputVolume = (...args) => p.outputVolume(...args);
  const sampleRate = (...args) => p.sampleRate(...args);
  const freqToMidi = (...args) => p.freqToMidi(...args);
  const midiToFreq = (...args) => p.midiToFreq(...args);
  const soundFormats = (...args) => p.soundFormats(...args);
  const saveSound = (...args) => p.saveSound(...args);
  const loadSound = (...args) => p.loadSound(...args);
  const createConvolver = (...args) => p.createConvolver(...args);
  const setBPM = (...args) => p.setBPM(...args);
  const VERSION = p.VERSION;
  const P2D = p.P2D;
  const WEBGL = p.WEBGL;
  const WEBGL2 = p.WEBGL2;
  const ARROW = p.ARROW;
  const CROSS = p.CROSS;
  const HAND = p.HAND;
  const MOVE = p.MOVE;
  const TEXT = p.TEXT;
  const WAIT = p.WAIT;
  const HALF_PI = p.HALF_PI;
  const PI = p.PI;
  const QUARTER_PI = p.QUARTER_PI;
  const TAU = p.TAU;
  const TWO_PI = p.TWO_PI;
  const DEGREES = p.DEGREES;
  const RADIANS = p.RADIANS;
  const CORNER = p.CORNER;
  const CORNERS = p.CORNERS;
  const RADIUS = p.RADIUS;
  const RIGHT = p.RIGHT;
  const LEFT = p.LEFT;
  const CENTER = p.CENTER;
  const TOP = p.TOP;
  const BOTTOM = p.BOTTOM;
  const BASELINE = p.BASELINE;
  const POINTS = p.POINTS;
  const LINES = p.LINES;
  const LINE_STRIP = p.LINE_STRIP;
  const LINE_LOOP = p.LINE_LOOP;
  const TRIANGLES = p.TRIANGLES;
  const TRIANGLE_FAN = p.TRIANGLE_FAN;
  const TRIANGLE_STRIP = p.TRIANGLE_STRIP;
  const QUADS = p.QUADS;
  const QUAD_STRIP = p.QUAD_STRIP;
  const TESS = p.TESS;
  const CLOSE = p.CLOSE;
  const OPEN = p.OPEN;
  const CHORD = p.CHORD;
  const PIE = p.PIE;
  const PROJECT = p.PROJECT;
  const SQUARE = p.SQUARE;
  const ROUND = p.ROUND;
  const BEVEL = p.BEVEL;
  const MITER = p.MITER;
  const RGB = p.RGB;
  const HSB = p.HSB;
  const HSL = p.HSL;
  const AUTO = p.AUTO;
  const ALT = p.ALT;
  const BACKSPACE = p.BACKSPACE;
  const CONTROL = p.CONTROL;
  const DELETE = p.DELETE;
  const DOWN_ARROW = p.DOWN_ARROW;
  const ENTER = p.ENTER;
  const ESCAPE = p.ESCAPE;
  const LEFT_ARROW = p.LEFT_ARROW;
  const OPTION = p.OPTION;
  const RETURN = p.RETURN;
  const RIGHT_ARROW = p.RIGHT_ARROW;
  const SHIFT = p.SHIFT;
  const TAB = p.TAB;
  const UP_ARROW = p.UP_ARROW;
  const BLEND = p.BLEND;
  const REMOVE = p.REMOVE;
  const ADD = p.ADD;
  const DARKEST = p.DARKEST;
  const LIGHTEST = p.LIGHTEST;
  const DIFFERENCE = p.DIFFERENCE;
  const SUBTRACT = p.SUBTRACT;
  const EXCLUSION = p.EXCLUSION;
  const MULTIPLY = p.MULTIPLY;
  const SCREEN = p.SCREEN;
  const REPLACE = p.REPLACE;
  const OVERLAY = p.OVERLAY;
  const HARD_LIGHT = p.HARD_LIGHT;
  const SOFT_LIGHT = p.SOFT_LIGHT;
  const DODGE = p.DODGE;
  const BURN = p.BURN;
  const THRESHOLD = p.THRESHOLD;
  const GRAY = p.GRAY;
  const OPAQUE = p.OPAQUE;
  const INVERT = p.INVERT;
  const POSTERIZE = p.POSTERIZE;
  const DILATE = p.DILATE;
  const ERODE = p.ERODE;
  const BLUR = p.BLUR;
  const NORMAL = p.NORMAL;
  const ITALIC = p.ITALIC;
  const BOLD = p.BOLD;
  const BOLDITALIC = p.BOLDITALIC;
  const CHAR = p.CHAR;
  const WORD = p.WORD;
  const LINEAR = p.LINEAR;
  const QUADRATIC = p.QUADRATIC;
  const BEZIER = p.BEZIER;
  const CURVE = p.CURVE;
  const STROKE = p.STROKE;
  const FILL = p.FILL;
  const TEXTURE = p.TEXTURE;
  const IMMEDIATE = p.IMMEDIATE;
  const IMAGE = p.IMAGE;
  const NEAREST = p.NEAREST;
  const REPEAT = p.REPEAT;
  const CLAMP = p.CLAMP;
  const MIRROR = p.MIRROR;
  const LANDSCAPE = p.LANDSCAPE;
  const PORTRAIT = p.PORTRAIT;
  const GRID = p.GRID;
  const AXES = p.AXES;
  const LABEL = p.LABEL;
  const FALLBACK = p.FALLBACK;
  const CONTAIN = p.CONTAIN;
  const COVER = p.COVER;
  const UNSIGNED_BYTE = p.UNSIGNED_BYTE;
  const UNSIGNED_INT = p.UNSIGNED_INT;
  const FLOAT = p.FLOAT;
  const HALF_FLOAT = p.HALF_FLOAT;
  const RGBA = p.RGBA;
  const webglVersion = p.webglVersion;


  // Base dimension and p.pixels per pixel (per axis)
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

  p.preload = function() {
    font = loadFont("./referential_mono.ttf");
  }

  p.setup = function() {
    ppp = Math.floor(Math.min(p.windowWidth, p.windowHeight) / dim);
    createCanvas(dim * ppp, dim * ppp);
    // let x = createCanvas(dim * ppp, dim * ppp);
    // x.addClass('square-p5');
    textFont(font);
    if (dim < 32) {
        throw new Error(`Dimension of size=${dim} is too small to display a calendar.`);
    }
  }


  p.draw = function() {
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
    text(str, p.width/2, row*ppp);
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
};
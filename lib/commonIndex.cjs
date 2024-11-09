'use strict';

var require$$0$2 = require('os');
var require$$1 = require('tty');
var require$$0$3 = require('util');
var require$$0$4 = require('buffer');
var require$$2$1 = require('events');
var require$$13 = require('string_decoder');
var require$$0$6 = require('fs');
var require$$1$1 = require('path');
var require$$3 = require('zlib');
var require$$0$5 = require('stream');
var require$$0$7 = require('http');
var require$$1$2 = require('https');
var require$$0$8 = require('crypto');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var ansiStyles = {exports: {}};

var colorName$1;
var hasRequiredColorName$1;

function requireColorName$1 () {
	if (hasRequiredColorName$1) return colorName$1;
	hasRequiredColorName$1 = 1;

	colorName$1 = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	return colorName$1;
}

/* MIT license */

var conversions$1;
var hasRequiredConversions$1;

function requireConversions$1 () {
	if (hasRequiredConversions$1) return conversions$1;
	hasRequiredConversions$1 = 1;
	/* eslint-disable no-mixed-operators */
	const cssKeywords = requireColorName$1();

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	const reverseKeywords = {};
	for (const key of Object.keys(cssKeywords)) {
		reverseKeywords[cssKeywords[key]] = key;
	}

	const convert = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	conversions$1 = convert;

	// Hide .channels and .labels properties
	for (const model of Object.keys(convert)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		const {channels, labels} = convert[model];
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}

	convert.rgb.hsl = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const delta = max - min;
		let h;
		let s;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		const l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		let rdif;
		let gdif;
		let bdif;
		let h;
		let s;

		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const v = Math.max(r, g, b);
		const diff = v - Math.min(r, g, b);
		const diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = 0;
			s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}

			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		const r = rgb[0];
		const g = rgb[1];
		let b = rgb[2];
		const h = convert.rgb.hsl(rgb)[0];
		const w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;

		const k = Math.min(1 - r, 1 - g, 1 - b);
		const c = (1 - r - k) / (1 - k) || 0;
		const m = (1 - g - k) / (1 - k) || 0;
		const y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
		/*
			See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
		*/
		return (
			((x[0] - y[0]) ** 2) +
			((x[1] - y[1]) ** 2) +
			((x[2] - y[2]) ** 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		const reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		let currentClosestDistance = Infinity;
		let currentClosestKeyword;

		for (const keyword of Object.keys(cssKeywords)) {
			const value = cssKeywords[keyword];

			// Compute comparative distance
			const distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		let r = rgb[0] / 255;
		let g = rgb[1] / 255;
		let b = rgb[2] / 255;

		// Assume sRGB
		r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
		g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
		b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

		const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		const xyz = convert.rgb.xyz(rgb);
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		const h = hsl[0] / 360;
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;
		let t2;
		let t3;
		let val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		const t1 = 2 * l - t2;

		const rgb = [0, 0, 0];
		for (let i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}

			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		const h = hsl[0];
		let s = hsl[1] / 100;
		let l = hsl[2] / 100;
		let smin = s;
		const lmin = Math.max(l, 0.01);

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		const v = (l + s) / 2;
		const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		const h = hsv[0] / 60;
		const s = hsv[1] / 100;
		let v = hsv[2] / 100;
		const hi = Math.floor(h) % 6;

		const f = h - Math.floor(h);
		const p = 255 * v * (1 - s);
		const q = 255 * v * (1 - (s * f));
		const t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		const h = hsv[0];
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;
		const vmin = Math.max(v, 0.01);
		let sl;
		let l;

		l = (2 - s) * v;
		const lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		const h = hwb[0] / 360;
		let wh = hwb[1] / 100;
		let bl = hwb[2] / 100;
		const ratio = wh + bl;
		let f;

		// Wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		const i = Math.floor(6 * h);
		const v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		const n = wh + f * (v - wh); // Linear interpolation

		let r;
		let g;
		let b;
		/* eslint-disable max-statements-per-line,no-multi-spaces */
		switch (i) {
			default:
			case 6:
			case 0: r = v;  g = n;  b = wh; break;
			case 1: r = n;  g = v;  b = wh; break;
			case 2: r = wh; g = v;  b = n; break;
			case 3: r = wh; g = n;  b = v; break;
			case 4: r = n;  g = wh; b = v; break;
			case 5: r = v;  g = wh; b = n; break;
		}
		/* eslint-enable max-statements-per-line,no-multi-spaces */

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		const c = cmyk[0] / 100;
		const m = cmyk[1] / 100;
		const y = cmyk[2] / 100;
		const k = cmyk[3] / 100;

		const r = 1 - Math.min(1, c * (1 - k) + k);
		const g = 1 - Math.min(1, m * (1 - k) + k);
		const b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		const x = xyz[0] / 100;
		const y = xyz[1] / 100;
		const z = xyz[2] / 100;
		let r;
		let g;
		let b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

		// Assume sRGB
		r = r > 0.0031308
			? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let x;
		let y;
		let z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		const y2 = y ** 3;
		const x2 = x ** 3;
		const z2 = z ** 3;
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let h;

		const hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		const c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		const l = lch[0];
		const c = lch[1];
		const h = lch[2];

		const hr = h / 360 * 2 * Math.PI;
		const a = c * Math.cos(hr);
		const b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args, saturation = null) {
		const [r, g, b] = args;
		let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		let ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// Optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		const r = args[0];
		const g = args[1];
		const b = args[2];

		// We use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		const ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		let color = args % 10;

		// Handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		const mult = (~~(args > 50) + 1) * 0.5;
		const r = ((color & 1) * mult) * 255;
		const g = (((color >> 1) & 1) * mult) * 255;
		const b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// Handle greyscale
		if (args >= 232) {
			const c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		let rem;
		const r = Math.floor(args / 36) / 5 * 255;
		const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		const b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		const integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		const string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		let colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(char => {
				return char + char;
			}).join('');
		}

		const integer = parseInt(colorString, 16);
		const r = (integer >> 16) & 0xFF;
		const g = (integer >> 8) & 0xFF;
		const b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const max = Math.max(Math.max(r, g), b);
		const min = Math.min(Math.min(r, g), b);
		const chroma = (max - min);
		let grayscale;
		let hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;

		const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

		let f = 0;
		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;

		const c = s * v;
		let f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		const h = hcg[0] / 360;
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		const pure = [0, 0, 0];
		const hi = (h % 1) * 6;
		const v = hi % 1;
		const w = 1 - v;
		let mg = 0;

		/* eslint-disable max-statements-per-line */
		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
		/* eslint-enable max-statements-per-line */

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const v = c + g * (1.0 - c);
		let f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const l = g * (1.0 - c) + 0.5 * c;
		let s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;
		const v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		const w = hwb[1] / 100;
		const b = hwb[2] / 100;
		const v = 1 - b;
		const c = v - w;
		let g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hsv = convert.gray.hsl;

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		const val = Math.round(gray[0] / 100 * 255) & 0xFF;
		const integer = (val << 16) + (val << 8) + val;

		const string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	return conversions$1;
}

var route$1;
var hasRequiredRoute$1;

function requireRoute$1 () {
	if (hasRequiredRoute$1) return route$1;
	hasRequiredRoute$1 = 1;
	const conversions = requireConversions$1();

	/*
		This function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		const graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		const models = Object.keys(conversions);

		for (let len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		const graph = buildGraph();
		const queue = [fromModel]; // Unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			const current = queue.pop();
			const adjacents = Object.keys(conversions[current]);

			for (let len = adjacents.length, i = 0; i < len; i++) {
				const adjacent = adjacents[i];
				const node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		const path = [graph[toModel].parent, toModel];
		let fn = conversions[graph[toModel].parent][toModel];

		let cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	route$1 = function (fromModel) {
		const graph = deriveBFS(fromModel);
		const conversion = {};

		const models = Object.keys(graph);
		for (let len = models.length, i = 0; i < len; i++) {
			const toModel = models[i];
			const node = graph[toModel];

			if (node.parent === null) {
				// No possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};
	return route$1;
}

var colorConvert$1;
var hasRequiredColorConvert$1;

function requireColorConvert$1 () {
	if (hasRequiredColorConvert$1) return colorConvert$1;
	hasRequiredColorConvert$1 = 1;
	const conversions = requireConversions$1();
	const route = requireRoute$1();

	const convert = {};

	const models = Object.keys(conversions);

	function wrapRaw(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];
			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			return fn(args);
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];

			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			const result = fn(args);

			// We're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (let len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(fromModel => {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		const routes = route(fromModel);
		const routeModels = Object.keys(routes);

		routeModels.forEach(toModel => {
			const fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	colorConvert$1 = convert;
	return colorConvert$1;
}

ansiStyles.exports;

var hasRequiredAnsiStyles;

function requireAnsiStyles () {
	if (hasRequiredAnsiStyles) return ansiStyles.exports;
	hasRequiredAnsiStyles = 1;
	(function (module) {

		const wrapAnsi16 = (fn, offset) => (...args) => {
			const code = fn(...args);
			return `\u001B[${code + offset}m`;
		};

		const wrapAnsi256 = (fn, offset) => (...args) => {
			const code = fn(...args);
			return `\u001B[${38 + offset};5;${code}m`;
		};

		const wrapAnsi16m = (fn, offset) => (...args) => {
			const rgb = fn(...args);
			return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
		};

		const ansi2ansi = n => n;
		const rgb2rgb = (r, g, b) => [r, g, b];

		const setLazyProperty = (object, property, get) => {
			Object.defineProperty(object, property, {
				get: () => {
					const value = get();

					Object.defineProperty(object, property, {
						value,
						enumerable: true,
						configurable: true
					});

					return value;
				},
				enumerable: true,
				configurable: true
			});
		};

		/** @type {typeof import('color-convert')} */
		let colorConvert;
		const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
			if (colorConvert === undefined) {
				colorConvert = requireColorConvert$1();
			}

			const offset = isBackground ? 10 : 0;
			const styles = {};

			for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
				const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
				if (sourceSpace === targetSpace) {
					styles[name] = wrap(identity, offset);
				} else if (typeof suite === 'object') {
					styles[name] = wrap(suite[targetSpace], offset);
				}
			}

			return styles;
		};

		function assembleStyles() {
			const codes = new Map();
			const styles = {
				modifier: {
					reset: [0, 0],
					// 21 isn't widely supported and 22 does the same thing
					bold: [1, 22],
					dim: [2, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					hidden: [8, 28],
					strikethrough: [9, 29]
				},
				color: {
					black: [30, 39],
					red: [31, 39],
					green: [32, 39],
					yellow: [33, 39],
					blue: [34, 39],
					magenta: [35, 39],
					cyan: [36, 39],
					white: [37, 39],

					// Bright color
					blackBright: [90, 39],
					redBright: [91, 39],
					greenBright: [92, 39],
					yellowBright: [93, 39],
					blueBright: [94, 39],
					magentaBright: [95, 39],
					cyanBright: [96, 39],
					whiteBright: [97, 39]
				},
				bgColor: {
					bgBlack: [40, 49],
					bgRed: [41, 49],
					bgGreen: [42, 49],
					bgYellow: [43, 49],
					bgBlue: [44, 49],
					bgMagenta: [45, 49],
					bgCyan: [46, 49],
					bgWhite: [47, 49],

					// Bright color
					bgBlackBright: [100, 49],
					bgRedBright: [101, 49],
					bgGreenBright: [102, 49],
					bgYellowBright: [103, 49],
					bgBlueBright: [104, 49],
					bgMagentaBright: [105, 49],
					bgCyanBright: [106, 49],
					bgWhiteBright: [107, 49]
				}
			};

			// Alias bright black as gray (and grey)
			styles.color.gray = styles.color.blackBright;
			styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
			styles.color.grey = styles.color.blackBright;
			styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

			for (const [groupName, group] of Object.entries(styles)) {
				for (const [styleName, style] of Object.entries(group)) {
					styles[styleName] = {
						open: `\u001B[${style[0]}m`,
						close: `\u001B[${style[1]}m`
					};

					group[styleName] = styles[styleName];

					codes.set(style[0], style[1]);
				}

				Object.defineProperty(styles, groupName, {
					value: group,
					enumerable: false
				});
			}

			Object.defineProperty(styles, 'codes', {
				value: codes,
				enumerable: false
			});

			styles.color.close = '\u001B[39m';
			styles.bgColor.close = '\u001B[49m';

			setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
			setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
			setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
			setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
			setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
			setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

			return styles;
		}

		// Make the export immutable
		Object.defineProperty(module, 'exports', {
			enumerable: true,
			get: assembleStyles
		}); 
	} (ansiStyles));
	return ansiStyles.exports;
}

var hasFlag$1;
var hasRequiredHasFlag$1;

function requireHasFlag$1 () {
	if (hasRequiredHasFlag$1) return hasFlag$1;
	hasRequiredHasFlag$1 = 1;

	hasFlag$1 = (flag, argv = process.argv) => {
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const position = argv.indexOf(prefix + flag);
		const terminatorPosition = argv.indexOf('--');
		return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
	};
	return hasFlag$1;
}

var supportsColor_1;
var hasRequiredSupportsColor;

function requireSupportsColor () {
	if (hasRequiredSupportsColor) return supportsColor_1;
	hasRequiredSupportsColor = 1;
	const os = require$$0$2;
	const tty = require$$1;
	const hasFlag = requireHasFlag$1();

	const {env} = process;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false') ||
		hasFlag('color=never')) {
		forceColor = 0;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = 1;
	}

	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			forceColor = 1;
		} else if (env.FORCE_COLOR === 'false') {
			forceColor = 0;
		} else {
			forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
		}
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(haveStream, streamIsTTY) {
		if (forceColor === 0) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (haveStream && !streamIsTTY && forceColor === undefined) {
			return 0;
		}

		const min = forceColor || 0;

		if (env.TERM === 'dumb') {
			return min;
		}

		if (process.platform === 'win32') {
			// Windows 10 build 10586 is the first Windows release that supports 256 colors.
			// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream, stream && stream.isTTY);
		return translateLevel(level);
	}

	supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: translateLevel(supportsColor(true, tty.isatty(1))),
		stderr: translateLevel(supportsColor(true, tty.isatty(2)))
	};
	return supportsColor_1;
}

var util$1;
var hasRequiredUtil$1;

function requireUtil$1 () {
	if (hasRequiredUtil$1) return util$1;
	hasRequiredUtil$1 = 1;

	const stringReplaceAll = (string, substring, replacer) => {
		let index = string.indexOf(substring);
		if (index === -1) {
			return string;
		}

		const substringLength = substring.length;
		let endIndex = 0;
		let returnValue = '';
		do {
			returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
			endIndex = index + substringLength;
			index = string.indexOf(substring, endIndex);
		} while (index !== -1);

		returnValue += string.substr(endIndex);
		return returnValue;
	};

	const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
		let endIndex = 0;
		let returnValue = '';
		do {
			const gotCR = string[index - 1] === '\r';
			returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
			endIndex = index + 1;
			index = string.indexOf('\n', endIndex);
		} while (index !== -1);

		returnValue += string.substr(endIndex);
		return returnValue;
	};

	util$1 = {
		stringReplaceAll,
		stringEncaseCRLFWithFirstIndex
	};
	return util$1;
}

var templates;
var hasRequiredTemplates;

function requireTemplates () {
	if (hasRequiredTemplates) return templates;
	hasRequiredTemplates = 1;
	const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
	const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
	const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
	const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

	const ESCAPES = new Map([
		['n', '\n'],
		['r', '\r'],
		['t', '\t'],
		['b', '\b'],
		['f', '\f'],
		['v', '\v'],
		['0', '\0'],
		['\\', '\\'],
		['e', '\u001B'],
		['a', '\u0007']
	]);

	function unescape(c) {
		const u = c[0] === 'u';
		const bracket = c[1] === '{';

		if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
			return String.fromCharCode(parseInt(c.slice(1), 16));
		}

		if (u && bracket) {
			return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
		}

		return ESCAPES.get(c) || c;
	}

	function parseArguments(name, arguments_) {
		const results = [];
		const chunks = arguments_.trim().split(/\s*,\s*/g);
		let matches;

		for (const chunk of chunks) {
			const number = Number(chunk);
			if (!Number.isNaN(number)) {
				results.push(number);
			} else if ((matches = chunk.match(STRING_REGEX))) {
				results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
			} else {
				throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
			}
		}

		return results;
	}

	function parseStyle(style) {
		STYLE_REGEX.lastIndex = 0;

		const results = [];
		let matches;

		while ((matches = STYLE_REGEX.exec(style)) !== null) {
			const name = matches[1];

			if (matches[2]) {
				const args = parseArguments(name, matches[2]);
				results.push([name].concat(args));
			} else {
				results.push([name]);
			}
		}

		return results;
	}

	function buildStyle(chalk, styles) {
		const enabled = {};

		for (const layer of styles) {
			for (const style of layer.styles) {
				enabled[style[0]] = layer.inverse ? null : style.slice(1);
			}
		}

		let current = chalk;
		for (const [styleName, styles] of Object.entries(enabled)) {
			if (!Array.isArray(styles)) {
				continue;
			}

			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
		}

		return current;
	}

	templates = (chalk, temporary) => {
		const styles = [];
		const chunks = [];
		let chunk = [];

		// eslint-disable-next-line max-params
		temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
			if (escapeCharacter) {
				chunk.push(unescape(escapeCharacter));
			} else if (style) {
				const string = chunk.join('');
				chunk = [];
				chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
				styles.push({inverse, styles: parseStyle(style)});
			} else if (close) {
				if (styles.length === 0) {
					throw new Error('Found extraneous } in Chalk template literal');
				}

				chunks.push(buildStyle(chalk, styles)(chunk.join('')));
				chunk = [];
				styles.pop();
			} else {
				chunk.push(character);
			}
		});

		chunks.push(chunk.join(''));

		if (styles.length > 0) {
			const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
			throw new Error(errMessage);
		}

		return chunks.join('');
	};
	return templates;
}

var source;
var hasRequiredSource;

function requireSource () {
	if (hasRequiredSource) return source;
	hasRequiredSource = 1;
	const ansiStyles = requireAnsiStyles();
	const {stdout: stdoutColor, stderr: stderrColor} = requireSupportsColor();
	const {
		stringReplaceAll,
		stringEncaseCRLFWithFirstIndex
	} = requireUtil$1();

	const {isArray} = Array;

	// `supportsColor.level` → `ansiStyles.color[name]` mapping
	const levelMapping = [
		'ansi',
		'ansi',
		'ansi256',
		'ansi16m'
	];

	const styles = Object.create(null);

	const applyOptions = (object, options = {}) => {
		if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
			throw new Error('The `level` option should be an integer from 0 to 3');
		}

		// Detect level if not set manually
		const colorLevel = stdoutColor ? stdoutColor.level : 0;
		object.level = options.level === undefined ? colorLevel : options.level;
	};

	class ChalkClass {
		constructor(options) {
			// eslint-disable-next-line no-constructor-return
			return chalkFactory(options);
		}
	}

	const chalkFactory = options => {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = () => {
			throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
		};

		chalk.template.Instance = ChalkClass;

		return chalk.template;
	};

	function Chalk(options) {
		return chalkFactory(options);
	}

	for (const [styleName, style] of Object.entries(ansiStyles)) {
		styles[styleName] = {
			get() {
				const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
				Object.defineProperty(this, styleName, {value: builder});
				return builder;
			}
		};
	}

	styles.visible = {
		get() {
			const builder = createBuilder(this, this._styler, true);
			Object.defineProperty(this, 'visible', {value: builder});
			return builder;
		}
	};

	const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

	for (const model of usedModels) {
		styles[model] = {
			get() {
				const {level} = this;
				return function (...arguments_) {
					const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
					return createBuilder(this, styler, this._isEmpty);
				};
			}
		};
	}

	for (const model of usedModels) {
		const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
		styles[bgModel] = {
			get() {
				const {level} = this;
				return function (...arguments_) {
					const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
					return createBuilder(this, styler, this._isEmpty);
				};
			}
		};
	}

	const proto = Object.defineProperties(() => {}, {
		...styles,
		level: {
			enumerable: true,
			get() {
				return this._generator.level;
			},
			set(level) {
				this._generator.level = level;
			}
		}
	});

	const createStyler = (open, close, parent) => {
		let openAll;
		let closeAll;
		if (parent === undefined) {
			openAll = open;
			closeAll = close;
		} else {
			openAll = parent.openAll + open;
			closeAll = close + parent.closeAll;
		}

		return {
			open,
			close,
			openAll,
			closeAll,
			parent
		};
	};

	const createBuilder = (self, _styler, _isEmpty) => {
		const builder = (...arguments_) => {
			if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
				// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
				return applyStyle(builder, chalkTag(builder, ...arguments_));
			}

			// Single argument is hot path, implicit coercion is faster than anything
			// eslint-disable-next-line no-implicit-coercion
			return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
		};

		// We alter the prototype because we must return a function, but there is
		// no way to create a function with a different prototype
		Object.setPrototypeOf(builder, proto);

		builder._generator = self;
		builder._styler = _styler;
		builder._isEmpty = _isEmpty;

		return builder;
	};

	const applyStyle = (self, string) => {
		if (self.level <= 0 || !string) {
			return self._isEmpty ? '' : string;
		}

		let styler = self._styler;

		if (styler === undefined) {
			return string;
		}

		const {openAll, closeAll} = styler;
		if (string.indexOf('\u001B') !== -1) {
			while (styler !== undefined) {
				// Replace any instances already present with a re-opening code
				// otherwise only the part of the string until said closing code
				// will be colored, and the rest will simply be 'plain'.
				string = stringReplaceAll(string, styler.close, styler.open);

				styler = styler.parent;
			}
		}

		// We can move both next actions out of loop, because remaining actions in loop won't have
		// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
		const lfIndex = string.indexOf('\n');
		if (lfIndex !== -1) {
			string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
		}

		return openAll + string + closeAll;
	};

	let template;
	const chalkTag = (chalk, ...strings) => {
		const [firstString] = strings;

		if (!isArray(firstString) || !isArray(firstString.raw)) {
			// If chalk() was called by itself or with a string,
			// return the string itself as a string.
			return strings.join(' ');
		}

		const arguments_ = strings.slice(1);
		const parts = [firstString.raw[0]];

		for (let i = 1; i < firstString.length; i++) {
			parts.push(
				String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
				String(firstString.raw[i])
			);
		}

		if (template === undefined) {
			template = requireTemplates();
		}

		return template(chalk, parts.join(''));
	};

	Object.defineProperties(Chalk.prototype, styles);

	const chalk = Chalk(); // eslint-disable-line new-cap
	chalk.supportsColor = stdoutColor;
	chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
	chalk.stderr.supportsColor = stderrColor;

	source = chalk;
	return source;
}

var sourceExports = requireSource();
var chalk = /*@__PURE__*/getDefaultExportFromCjs(sourceExports);

// eslint-disable-next-line import/prefer-default-export
var ELogTypes;
(function (ELogTypes) {
    ELogTypes["Debug"] = "debug";
    ELogTypes["Error"] = "error";
    ELogTypes["Warn"] = "warn";
    ELogTypes["Log"] = "log";
})(ELogTypes || (ELogTypes = {}));

var winston = {};

var logform = {};

var format$1;
var hasRequiredFormat;

function requireFormat () {
	if (hasRequiredFormat) return format$1;
	hasRequiredFormat = 1;

	/*
	 * Displays a helpful message and the source of
	 * the format when it is invalid.
	 */
	class InvalidFormatError extends Error {
	  constructor(formatFn) {
	    super(`Format functions must be synchronous taking a two arguments: (info, opts)
Found: ${formatFn.toString().split('\n')[0]}\n`);

	    Error.captureStackTrace(this, InvalidFormatError);
	  }
	}

	/*
	 * function format (formatFn)
	 * Returns a create function for the `formatFn`.
	 */
	format$1 = formatFn => {
	  if (formatFn.length > 2) {
	    throw new InvalidFormatError(formatFn);
	  }

	  /*
	   * function Format (options)
	   * Base prototype which calls a `_format`
	   * function and pushes the result.
	   */
	  function Format(options = {}) {
	    this.options = options;
	  }

	  Format.prototype.transform = formatFn;

	  //
	  // Create a function which returns new instances of
	  // FormatWrap for simple syntax like:
	  //
	  // require('winston').formats.json();
	  //
	  function createFormatWrap(opts) {
	    return new Format(opts);
	  }

	  //
	  // Expose the FormatWrap through the create function
	  // for testability.
	  //
	  createFormatWrap.Format = Format;
	  return createFormatWrap;
	};
	return format$1;
}

var colorize = {exports: {}};

var safe = {exports: {}};

var colors = {exports: {}};

var styles = {exports: {}};

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var hasRequiredStyles;

function requireStyles () {
	if (hasRequiredStyles) return styles.exports;
	hasRequiredStyles = 1;
	(function (module) {
		var styles = {};
		module['exports'] = styles;

		var codes = {
		  reset: [0, 0],

		  bold: [1, 22],
		  dim: [2, 22],
		  italic: [3, 23],
		  underline: [4, 24],
		  inverse: [7, 27],
		  hidden: [8, 28],
		  strikethrough: [9, 29],

		  black: [30, 39],
		  red: [31, 39],
		  green: [32, 39],
		  yellow: [33, 39],
		  blue: [34, 39],
		  magenta: [35, 39],
		  cyan: [36, 39],
		  white: [37, 39],
		  gray: [90, 39],
		  grey: [90, 39],

		  brightRed: [91, 39],
		  brightGreen: [92, 39],
		  brightYellow: [93, 39],
		  brightBlue: [94, 39],
		  brightMagenta: [95, 39],
		  brightCyan: [96, 39],
		  brightWhite: [97, 39],

		  bgBlack: [40, 49],
		  bgRed: [41, 49],
		  bgGreen: [42, 49],
		  bgYellow: [43, 49],
		  bgBlue: [44, 49],
		  bgMagenta: [45, 49],
		  bgCyan: [46, 49],
		  bgWhite: [47, 49],
		  bgGray: [100, 49],
		  bgGrey: [100, 49],

		  bgBrightRed: [101, 49],
		  bgBrightGreen: [102, 49],
		  bgBrightYellow: [103, 49],
		  bgBrightBlue: [104, 49],
		  bgBrightMagenta: [105, 49],
		  bgBrightCyan: [106, 49],
		  bgBrightWhite: [107, 49],

		  // legacy styles for colors pre v1.0.0
		  blackBG: [40, 49],
		  redBG: [41, 49],
		  greenBG: [42, 49],
		  yellowBG: [43, 49],
		  blueBG: [44, 49],
		  magentaBG: [45, 49],
		  cyanBG: [46, 49],
		  whiteBG: [47, 49],

		};

		Object.keys(codes).forEach(function(key) {
		  var val = codes[key];
		  var style = styles[key] = [];
		  style.open = '\u001b[' + val[0] + 'm';
		  style.close = '\u001b[' + val[1] + 'm';
		}); 
	} (styles));
	return styles.exports;
}

/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var hasFlag;
var hasRequiredHasFlag;

function requireHasFlag () {
	if (hasRequiredHasFlag) return hasFlag;
	hasRequiredHasFlag = 1;

	hasFlag = function(flag, argv) {
	  argv = argv || process.argv || [];

	  var terminatorPos = argv.indexOf('--');
	  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	  var pos = argv.indexOf(prefix + flag);

	  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
	};
	return hasFlag;
}

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var supportsColors;
var hasRequiredSupportsColors;

function requireSupportsColors () {
	if (hasRequiredSupportsColors) return supportsColors;
	hasRequiredSupportsColors = 1;

	var os = require$$0$2;
	var hasFlag = requireHasFlag();

	var env = process.env;

	var forceColor = void 0;
	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
	  forceColor = false;
	} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
	           || hasFlag('color=always')) {
	  forceColor = true;
	}
	if ('FORCE_COLOR' in env) {
	  forceColor = env.FORCE_COLOR.length === 0
	    || parseInt(env.FORCE_COLOR, 10) !== 0;
	}

	function translateLevel(level) {
	  if (level === 0) {
	    return false;
	  }

	  return {
	    level: level,
	    hasBasic: true,
	    has256: level >= 2,
	    has16m: level >= 3,
	  };
	}

	function supportsColor(stream) {
	  if (forceColor === false) {
	    return 0;
	  }

	  if (hasFlag('color=16m') || hasFlag('color=full')
	      || hasFlag('color=truecolor')) {
	    return 3;
	  }

	  if (hasFlag('color=256')) {
	    return 2;
	  }

	  if (stream && !stream.isTTY && forceColor !== true) {
	    return 0;
	  }

	  var min = forceColor ? 1 : 0;

	  if (process.platform === 'win32') {
	    // Node.js 7.5.0 is the first version of Node.js to include a patch to
	    // libuv that enables 256 color output on Windows. Anything earlier and it
	    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
	    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
	    // Windows release that supports 256 colors. Windows 10 build 14931 is the
	    // first release that supports 16m/TrueColor.
	    var osRelease = os.release().split('.');
	    if (Number(process.versions.node.split('.')[0]) >= 8
	        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
	      return Number(osRelease[2]) >= 14931 ? 3 : 2;
	    }

	    return 1;
	  }

	  if ('CI' in env) {
	    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
	      return sign in env;
	    }) || env.CI_NAME === 'codeship') {
	      return 1;
	    }

	    return min;
	  }

	  if ('TEAMCITY_VERSION' in env) {
	    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
	    );
	  }

	  if ('TERM_PROGRAM' in env) {
	    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

	    switch (env.TERM_PROGRAM) {
	      case 'iTerm.app':
	        return version >= 3 ? 3 : 2;
	      case 'Hyper':
	        return 3;
	      case 'Apple_Terminal':
	        return 2;
	      // No default
	    }
	  }

	  if (/-256(color)?$/i.test(env.TERM)) {
	    return 2;
	  }

	  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
	    return 1;
	  }

	  if ('COLORTERM' in env) {
	    return 1;
	  }

	  if (env.TERM === 'dumb') {
	    return min;
	  }

	  return min;
	}

	function getSupportLevel(stream) {
	  var level = supportsColor(stream);
	  return translateLevel(level);
	}

	supportsColors = {
	  supportsColor: getSupportLevel,
	  stdout: getSupportLevel(process.stdout),
	  stderr: getSupportLevel(process.stderr),
	};
	return supportsColors;
}

var trap = {exports: {}};

var hasRequiredTrap;

function requireTrap () {
	if (hasRequiredTrap) return trap.exports;
	hasRequiredTrap = 1;
	(function (module) {
		module['exports'] = function runTheTrap(text, options) {
		  var result = '';
		  text = text || 'Run the trap, drop the bass';
		  text = text.split('');
		  var trap = {
		    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
		    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
		    c: ['\u00a9', '\u023b', '\u03fe'],
		    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
		    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
		      '\u0a6c'],
		    f: ['\u04fa'],
		    g: ['\u0262'],
		    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
		    i: ['\u0f0f'],
		    j: ['\u0134'],
		    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
		    l: ['\u0139'],
		    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
		    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
		    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
		      '\u06dd', '\u0e4f'],
		    p: ['\u01f7', '\u048e'],
		    q: ['\u09cd'],
		    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
		    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
		    t: ['\u0141', '\u0166', '\u0373'],
		    u: ['\u01b1', '\u054d'],
		    v: ['\u05d8'],
		    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
		    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
		    y: ['\u00a5', '\u04b0', '\u04cb'],
		    z: ['\u01b5', '\u0240'],
		  };
		  text.forEach(function(c) {
		    c = c.toLowerCase();
		    var chars = trap[c] || [' '];
		    var rand = Math.floor(Math.random() * chars.length);
		    if (typeof trap[c] !== 'undefined') {
		      result += trap[c][rand];
		    } else {
		      result += c;
		    }
		  });
		  return result;
		}; 
	} (trap));
	return trap.exports;
}

var zalgo = {exports: {}};

var hasRequiredZalgo;

function requireZalgo () {
	if (hasRequiredZalgo) return zalgo.exports;
	hasRequiredZalgo = 1;
	(function (module) {
		// please no
		module['exports'] = function zalgo(text, options) {
		  text = text || '   he is here   ';
		  var soul = {
		    'up': [
		      '̍', '̎', '̄', '̅',
		      '̿', '̑', '̆', '̐',
		      '͒', '͗', '͑', '̇',
		      '̈', '̊', '͂', '̓',
		      '̈', '͊', '͋', '͌',
		      '̃', '̂', '̌', '͐',
		      '̀', '́', '̋', '̏',
		      '̒', '̓', '̔', '̽',
		      '̉', 'ͣ', 'ͤ', 'ͥ',
		      'ͦ', 'ͧ', 'ͨ', 'ͩ',
		      'ͪ', 'ͫ', 'ͬ', 'ͭ',
		      'ͮ', 'ͯ', '̾', '͛',
		      '͆', '̚',
		    ],
		    'down': [
		      '̖', '̗', '̘', '̙',
		      '̜', '̝', '̞', '̟',
		      '̠', '̤', '̥', '̦',
		      '̩', '̪', '̫', '̬',
		      '̭', '̮', '̯', '̰',
		      '̱', '̲', '̳', '̹',
		      '̺', '̻', '̼', 'ͅ',
		      '͇', '͈', '͉', '͍',
		      '͎', '͓', '͔', '͕',
		      '͖', '͙', '͚', '̣',
		    ],
		    'mid': [
		      '̕', '̛', '̀', '́',
		      '͘', '̡', '̢', '̧',
		      '̨', '̴', '̵', '̶',
		      '͜', '͝', '͞',
		      '͟', '͠', '͢', '̸',
		      '̷', '͡', ' ҉',
		    ],
		  };
		  var all = [].concat(soul.up, soul.down, soul.mid);

		  function randomNumber(range) {
		    var r = Math.floor(Math.random() * range);
		    return r;
		  }

		  function isChar(character) {
		    var bool = false;
		    all.filter(function(i) {
		      bool = (i === character);
		    });
		    return bool;
		  }


		  function heComes(text, options) {
		    var result = '';
		    var counts;
		    var l;
		    options = options || {};
		    options['up'] =
		      typeof options['up'] !== 'undefined' ? options['up'] : true;
		    options['mid'] =
		      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
		    options['down'] =
		      typeof options['down'] !== 'undefined' ? options['down'] : true;
		    options['size'] =
		      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
		    text = text.split('');
		    for (l in text) {
		      if (isChar(l)) {
		        continue;
		      }
		      result = result + text[l];
		      counts = {'up': 0, 'down': 0, 'mid': 0};
		      switch (options.size) {
		        case 'mini':
		          counts.up = randomNumber(8);
		          counts.mid = randomNumber(2);
		          counts.down = randomNumber(8);
		          break;
		        case 'maxi':
		          counts.up = randomNumber(16) + 3;
		          counts.mid = randomNumber(4) + 1;
		          counts.down = randomNumber(64) + 3;
		          break;
		        default:
		          counts.up = randomNumber(8) + 1;
		          counts.mid = randomNumber(6) / 2;
		          counts.down = randomNumber(8) + 1;
		          break;
		      }

		      var arr = ['up', 'mid', 'down'];
		      for (var d in arr) {
		        var index = arr[d];
		        for (var i = 0; i <= counts[index]; i++) {
		          if (options[index]) {
		            result = result + soul[index][randomNumber(soul[index].length)];
		          }
		        }
		      }
		    }
		    return result;
		  }
		  // don't summon him
		  return heComes(text, options);
		}; 
	} (zalgo));
	return zalgo.exports;
}

var america = {exports: {}};

var hasRequiredAmerica;

function requireAmerica () {
	if (hasRequiredAmerica) return america.exports;
	hasRequiredAmerica = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  return function(letter, i, exploded) {
		    if (letter === ' ') return letter;
		    switch (i%3) {
		      case 0: return colors.red(letter);
		      case 1: return colors.white(letter);
		      case 2: return colors.blue(letter);
		    }
		  };
		}; 
	} (america));
	return america.exports;
}

var zebra = {exports: {}};

var hasRequiredZebra;

function requireZebra () {
	if (hasRequiredZebra) return zebra.exports;
	hasRequiredZebra = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  return function(letter, i, exploded) {
		    return i % 2 === 0 ? letter : colors.inverse(letter);
		  };
		}; 
	} (zebra));
	return zebra.exports;
}

var rainbow = {exports: {}};

var hasRequiredRainbow;

function requireRainbow () {
	if (hasRequiredRainbow) return rainbow.exports;
	hasRequiredRainbow = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  // RoY G BiV
		  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
		  return function(letter, i, exploded) {
		    if (letter === ' ') {
		      return letter;
		    } else {
		      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
		    }
		  };
		}; 
	} (rainbow));
	return rainbow.exports;
}

var random = {exports: {}};

var hasRequiredRandom;

function requireRandom () {
	if (hasRequiredRandom) return random.exports;
	hasRequiredRandom = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
		    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
		    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
		  return function(letter, i, exploded) {
		    return letter === ' ' ? letter :
		      colors[
		          available[Math.round(Math.random() * (available.length - 2))]
		      ](letter);
		  };
		}; 
	} (random));
	return random.exports;
}

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var hasRequiredColors;

function requireColors () {
	if (hasRequiredColors) return colors.exports;
	hasRequiredColors = 1;
	(function (module) {
		var colors = {};
		module['exports'] = colors;

		colors.themes = {};

		var util = require$$0$3;
		var ansiStyles = colors.styles = requireStyles();
		var defineProps = Object.defineProperties;
		var newLineRegex = new RegExp(/[\r\n]+/g);

		colors.supportsColor = requireSupportsColors().supportsColor;

		if (typeof colors.enabled === 'undefined') {
		  colors.enabled = colors.supportsColor() !== false;
		}

		colors.enable = function() {
		  colors.enabled = true;
		};

		colors.disable = function() {
		  colors.enabled = false;
		};

		colors.stripColors = colors.strip = function(str) {
		  return ('' + str).replace(/\x1B\[\d+m/g, '');
		};

		// eslint-disable-next-line no-unused-vars
		colors.stylize = function stylize(str, style) {
		  if (!colors.enabled) {
		    return str+'';
		  }

		  var styleMap = ansiStyles[style];

		  // Stylize should work for non-ANSI styles, too
		  if (!styleMap && style in colors) {
		    // Style maps like trap operate as functions on strings;
		    // they don't have properties like open or close.
		    return colors[style](str);
		  }

		  return styleMap.open + str + styleMap.close;
		};

		var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
		var escapeStringRegexp = function(str) {
		  if (typeof str !== 'string') {
		    throw new TypeError('Expected a string');
		  }
		  return str.replace(matchOperatorsRe, '\\$&');
		};

		function build(_styles) {
		  var builder = function builder() {
		    return applyStyle.apply(builder, arguments);
		  };
		  builder._styles = _styles;
		  // __proto__ is used because we must return a function, but there is
		  // no way to create a function with a different prototype.
		  builder.__proto__ = proto;
		  return builder;
		}

		var styles = (function() {
		  var ret = {};
		  ansiStyles.grey = ansiStyles.gray;
		  Object.keys(ansiStyles).forEach(function(key) {
		    ansiStyles[key].closeRe =
		      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
		    ret[key] = {
		      get: function() {
		        return build(this._styles.concat(key));
		      },
		    };
		  });
		  return ret;
		})();

		var proto = defineProps(function colors() {}, styles);

		function applyStyle() {
		  var args = Array.prototype.slice.call(arguments);

		  var str = args.map(function(arg) {
		    // Use weak equality check so we can colorize null/undefined in safe mode
		    if (arg != null && arg.constructor === String) {
		      return arg;
		    } else {
		      return util.inspect(arg);
		    }
		  }).join(' ');

		  if (!colors.enabled || !str) {
		    return str;
		  }

		  var newLinesPresent = str.indexOf('\n') != -1;

		  var nestedStyles = this._styles;

		  var i = nestedStyles.length;
		  while (i--) {
		    var code = ansiStyles[nestedStyles[i]];
		    str = code.open + str.replace(code.closeRe, code.open) + code.close;
		    if (newLinesPresent) {
		      str = str.replace(newLineRegex, function(match) {
		        return code.close + match + code.open;
		      });
		    }
		  }

		  return str;
		}

		colors.setTheme = function(theme) {
		  if (typeof theme === 'string') {
		    console.log('colors.setTheme now only accepts an object, not a string.  ' +
		      'If you are trying to set a theme from a file, it is now your (the ' +
		      'caller\'s) responsibility to require the file.  The old syntax ' +
		      'looked like colors.setTheme(__dirname + ' +
		      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
		      'colors.setTheme(require(__dirname + ' +
		      '\'/../themes/generic-logging.js\'));');
		    return;
		  }
		  for (var style in theme) {
		    (function(style) {
		      colors[style] = function(str) {
		        if (typeof theme[style] === 'object') {
		          var out = str;
		          for (var i in theme[style]) {
		            out = colors[theme[style][i]](out);
		          }
		          return out;
		        }
		        return colors[theme[style]](str);
		      };
		    })(style);
		  }
		};

		function init() {
		  var ret = {};
		  Object.keys(styles).forEach(function(name) {
		    ret[name] = {
		      get: function() {
		        return build([name]);
		      },
		    };
		  });
		  return ret;
		}

		var sequencer = function sequencer(map, str) {
		  var exploded = str.split('');
		  exploded = exploded.map(map);
		  return exploded.join('');
		};

		// custom formatter methods
		colors.trap = requireTrap();
		colors.zalgo = requireZalgo();

		// maps
		colors.maps = {};
		colors.maps.america = requireAmerica()(colors);
		colors.maps.zebra = requireZebra()(colors);
		colors.maps.rainbow = requireRainbow()(colors);
		colors.maps.random = requireRandom()(colors);

		for (var map in colors.maps) {
		  (function(map) {
		    colors[map] = function(str) {
		      return sequencer(colors.maps[map], str);
		    };
		  })(map);
		}

		defineProps(colors, init()); 
	} (colors));
	return colors.exports;
}

var hasRequiredSafe;

function requireSafe () {
	if (hasRequiredSafe) return safe.exports;
	hasRequiredSafe = 1;
	(function (module) {
		//
		// Remark: Requiring this file will use the "safe" colors API,
		// which will not touch String.prototype.
		//
		//   var colors = require('colors/safe');
		//   colors.red("foo")
		//
		//
		var colors = requireColors();
		module['exports'] = colors; 
	} (safe));
	return safe.exports;
}

var tripleBeam = {};

var config$1 = {};

var cli$1 = {};

/**
 * cli.js: Config that conform to commonly used CLI logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredCli$1;

function requireCli$1 () {
	if (hasRequiredCli$1) return cli$1;
	hasRequiredCli$1 = 1;

	/**
	 * Default levels for the CLI configuration.
	 * @type {Object}
	 */
	cli$1.levels = {
	  error: 0,
	  warn: 1,
	  help: 2,
	  data: 3,
	  info: 4,
	  debug: 5,
	  prompt: 6,
	  verbose: 7,
	  input: 8,
	  silly: 9
	};

	/**
	 * Default colors for the CLI configuration.
	 * @type {Object}
	 */
	cli$1.colors = {
	  error: 'red',
	  warn: 'yellow',
	  help: 'cyan',
	  data: 'grey',
	  info: 'green',
	  debug: 'blue',
	  prompt: 'grey',
	  verbose: 'cyan',
	  input: 'grey',
	  silly: 'magenta'
	};
	return cli$1;
}

var npm = {};

/**
 * npm.js: Config that conform to npm logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredNpm;

function requireNpm () {
	if (hasRequiredNpm) return npm;
	hasRequiredNpm = 1;

	/**
	 * Default levels for the npm configuration.
	 * @type {Object}
	 */
	npm.levels = {
	  error: 0,
	  warn: 1,
	  info: 2,
	  http: 3,
	  verbose: 4,
	  debug: 5,
	  silly: 6
	};

	/**
	 * Default levels for the npm configuration.
	 * @type {Object}
	 */
	npm.colors = {
	  error: 'red',
	  warn: 'yellow',
	  info: 'green',
	  http: 'green',
	  verbose: 'cyan',
	  debug: 'blue',
	  silly: 'magenta'
	};
	return npm;
}

var syslog = {};

/**
 * syslog.js: Config that conform to syslog logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredSyslog;

function requireSyslog () {
	if (hasRequiredSyslog) return syslog;
	hasRequiredSyslog = 1;

	/**
	 * Default levels for the syslog configuration.
	 * @type {Object}
	 */
	syslog.levels = {
	  emerg: 0,
	  alert: 1,
	  crit: 2,
	  error: 3,
	  warning: 4,
	  notice: 5,
	  info: 6,
	  debug: 7
	};

	/**
	 * Default levels for the syslog configuration.
	 * @type {Object}
	 */
	syslog.colors = {
	  emerg: 'red',
	  alert: 'yellow',
	  crit: 'red',
	  error: 'red',
	  warning: 'red',
	  notice: 'yellow',
	  info: 'green',
	  debug: 'blue'
	};
	return syslog;
}

/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredConfig$1;

function requireConfig$1 () {
	if (hasRequiredConfig$1) return config$1;
	hasRequiredConfig$1 = 1;
	(function (exports) {

		/**
		 * Export config set for the CLI.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'cli', {
		  value: requireCli$1()
		});

		/**
		 * Export config set for npm.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'npm', {
		  value: requireNpm()
		});

		/**
		 * Export config set for the syslog.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'syslog', {
		  value: requireSyslog()
		}); 
	} (config$1));
	return config$1;
}

var hasRequiredTripleBeam;

function requireTripleBeam () {
	if (hasRequiredTripleBeam) return tripleBeam;
	hasRequiredTripleBeam = 1;
	(function (exports) {

		/**
		 * A shareable symbol constant that can be used
		 * as a non-enumerable / semi-hidden level identifier
		 * to allow the readable level property to be mutable for
		 * operations like colorization
		 *
		 * @type {Symbol}
		 */
		Object.defineProperty(exports, 'LEVEL', {
		  value: Symbol.for('level')
		});

		/**
		 * A shareable symbol constant that can be used
		 * as a non-enumerable / semi-hidden message identifier
		 * to allow the final message property to not have
		 * side effects on another.
		 *
		 * @type {Symbol}
		 */
		Object.defineProperty(exports, 'MESSAGE', {
		  value: Symbol.for('message')
		});

		/**
		 * A shareable symbol constant that can be used
		 * as a non-enumerable / semi-hidden message identifier
		 * to allow the extracted splat property be hidden
		 *
		 * @type {Symbol}
		 */
		Object.defineProperty(exports, 'SPLAT', {
		  value: Symbol.for('splat')
		});

		/**
		 * A shareable object constant  that can be used
		 * as a standard configuration for winston@3.
		 *
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'configs', {
		  value: requireConfig$1()
		}); 
	} (tripleBeam));
	return tripleBeam;
}

var hasRequiredColorize;

function requireColorize () {
	if (hasRequiredColorize) return colorize.exports;
	hasRequiredColorize = 1;

	const colors = requireSafe();
	const { LEVEL, MESSAGE } = requireTripleBeam();

	//
	// Fix colors not appearing in non-tty environments
	//
	colors.enabled = true;

	/**
	 * @property {RegExp} hasSpace
	 * Simple regex to check for presence of spaces.
	 */
	const hasSpace = /\s+/;

	/*
	 * Colorizer format. Wraps the `level` and/or `message` properties
	 * of the `info` objects with ANSI color codes based on a few options.
	 */
	class Colorizer {
	  constructor(opts = {}) {
	    if (opts.colors) {
	      this.addColors(opts.colors);
	    }

	    this.options = opts;
	  }

	  /*
	   * Adds the colors Object to the set of allColors
	   * known by the Colorizer
	   *
	   * @param {Object} colors Set of color mappings to add.
	   */
	  static addColors(clrs) {
	    const nextColors = Object.keys(clrs).reduce((acc, level) => {
	      acc[level] = hasSpace.test(clrs[level])
	        ? clrs[level].split(hasSpace)
	        : clrs[level];

	      return acc;
	    }, {});

	    Colorizer.allColors = Object.assign({}, Colorizer.allColors || {}, nextColors);
	    return Colorizer.allColors;
	  }

	  /*
	   * Adds the colors Object to the set of allColors
	   * known by the Colorizer
	   *
	   * @param {Object} colors Set of color mappings to add.
	   */
	  addColors(clrs) {
	    return Colorizer.addColors(clrs);
	  }

	  /*
	   * function colorize (lookup, level, message)
	   * Performs multi-step colorization using @colors/colors/safe
	   */
	  colorize(lookup, level, message) {
	    if (typeof message === 'undefined') {
	      message = level;
	    }

	    //
	    // If the color for the level is just a string
	    // then attempt to colorize the message with it.
	    //
	    if (!Array.isArray(Colorizer.allColors[lookup])) {
	      return colors[Colorizer.allColors[lookup]](message);
	    }

	    //
	    // If it is an Array then iterate over that Array, applying
	    // the colors function for each item.
	    //
	    for (let i = 0, len = Colorizer.allColors[lookup].length; i < len; i++) {
	      message = colors[Colorizer.allColors[lookup][i]](message);
	    }

	    return message;
	  }

	  /*
	   * function transform (info, opts)
	   * Attempts to colorize the { level, message } of the given
	   * `logform` info object.
	   */
	  transform(info, opts) {
	    if (opts.all && typeof info[MESSAGE] === 'string') {
	      info[MESSAGE] = this.colorize(info[LEVEL], info.level, info[MESSAGE]);
	    }

	    if (opts.level || opts.all || !opts.message) {
	      info.level = this.colorize(info[LEVEL], info.level);
	    }

	    if (opts.all || opts.message) {
	      info.message = this.colorize(info[LEVEL], info.level, info.message);
	    }

	    return info;
	  }
	}

	/*
	 * function colorize (info)
	 * Returns a new instance of the colorize Format that applies
	 * level colors to `info` objects. This was previously exposed
	 * as { colorize: true } to transports in `winston < 3.0.0`.
	 */
	colorize.exports = opts => new Colorizer(opts);

	//
	// Attach the Colorizer for registration purposes
	//
	colorize.exports.Colorizer
	  = colorize.exports.Format
	  = Colorizer;
	return colorize.exports;
}

var levels$1;
var hasRequiredLevels;

function requireLevels () {
	if (hasRequiredLevels) return levels$1;
	hasRequiredLevels = 1;

	const { Colorizer } = requireColorize();

	/*
	 * Simple method to register colors with a simpler require
	 * path within the module.
	 */
	levels$1 = config => {
	  Colorizer.addColors(config.colors || config);
	  return config;
	};
	return levels$1;
}

var align;
var hasRequiredAlign;

function requireAlign () {
	if (hasRequiredAlign) return align;
	hasRequiredAlign = 1;

	const format = requireFormat();

	/*
	 * function align (info)
	 * Returns a new instance of the align Format which adds a `\t`
	 * delimiter before the message to properly align it in the same place.
	 * It was previously { align: true } in winston < 3.0.0
	 */
	align = format(info => {
	  info.message = `\t${info.message}`;
	  return info;
	});
	return align;
}

/* eslint no-undefined: 0 */

var errors$2;
var hasRequiredErrors$2;

function requireErrors$2 () {
	if (hasRequiredErrors$2) return errors$2;
	hasRequiredErrors$2 = 1;

	const format = requireFormat();
	const { LEVEL, MESSAGE } = requireTripleBeam();

	/*
	 * function errors (info)
	 * If the `message` property of the `info` object is an instance of `Error`,
	 * replace the `Error` object its own `message` property.
	 *
	 * Optionally, the Error's `stack` and/or `cause` properties can also be appended to the `info` object.
	 */
	errors$2 = format((einfo, { stack, cause }) => {
	  if (einfo instanceof Error) {
	    const info = Object.assign({}, einfo, {
	      level: einfo.level,
	      [LEVEL]: einfo[LEVEL] || einfo.level,
	      message: einfo.message,
	      [MESSAGE]: einfo[MESSAGE] || einfo.message
	    });

	    if (stack) info.stack = einfo.stack;
	    if (cause) info.cause = einfo.cause;
	    return info;
	  }

	  if (!(einfo.message instanceof Error)) return einfo;

	  // Assign all enumerable properties and the
	  // message property from the error provided.
	  const err = einfo.message;
	  Object.assign(einfo, err);
	  einfo.message = err.message;
	  einfo[MESSAGE] = err.message;

	  // Assign the stack and/or cause if requested.
	  if (stack) einfo.stack = err.stack;
	  if (cause) einfo.cause = err.cause;
	  return einfo;
	});
	return errors$2;
}

var cli = {exports: {}};

var padLevels = {exports: {}};

/* eslint no-unused-vars: 0 */

var hasRequiredPadLevels;

function requirePadLevels () {
	if (hasRequiredPadLevels) return padLevels.exports;
	hasRequiredPadLevels = 1;

	const { configs, LEVEL, MESSAGE } = requireTripleBeam();

	class Padder {
	  constructor(opts = { levels: configs.npm.levels }) {
	    this.paddings = Padder.paddingForLevels(opts.levels, opts.filler);
	    this.options = opts;
	  }

	  /**
	   * Returns the maximum length of keys in the specified `levels` Object.
	   * @param  {Object} levels Set of all levels to calculate longest level against.
	   * @returns {Number} Maximum length of the longest level string.
	   */
	  static getLongestLevel(levels) {
	    const lvls = Object.keys(levels).map(level => level.length);
	    return Math.max(...lvls);
	  }

	  /**
	   * Returns the padding for the specified `level` assuming that the
	   * maximum length of all levels it's associated with is `maxLength`.
	   * @param  {String} level Level to calculate padding for.
	   * @param  {String} filler Repeatable text to use for padding.
	   * @param  {Number} maxLength Length of the longest level
	   * @returns {String} Padding string for the `level`
	   */
	  static paddingForLevel(level, filler, maxLength) {
	    const targetLen = maxLength + 1 - level.length;
	    const rep = Math.floor(targetLen / filler.length);
	    const padding = `${filler}${filler.repeat(rep)}`;
	    return padding.slice(0, targetLen);
	  }

	  /**
	   * Returns an object with the string paddings for the given `levels`
	   * using the specified `filler`.
	   * @param  {Object} levels Set of all levels to calculate padding for.
	   * @param  {String} filler Repeatable text to use for padding.
	   * @returns {Object} Mapping of level to desired padding.
	   */
	  static paddingForLevels(levels, filler = ' ') {
	    const maxLength = Padder.getLongestLevel(levels);
	    return Object.keys(levels).reduce((acc, level) => {
	      acc[level] = Padder.paddingForLevel(level, filler, maxLength);
	      return acc;
	    }, {});
	  }

	  /**
	   * Prepends the padding onto the `message` based on the `LEVEL` of
	   * the `info`. This is based on the behavior of `winston@2` which also
	   * prepended the level onto the message.
	   *
	   * See: https://github.com/winstonjs/winston/blob/2.x/lib/winston/logger.js#L198-L201
	   *
	   * @param  {Info} info Logform info object
	   * @param  {Object} opts Options passed along to this instance.
	   * @returns {Info} Modified logform info object.
	   */
	  transform(info, opts) {
	    info.message = `${this.paddings[info[LEVEL]]}${info.message}`;
	    if (info[MESSAGE]) {
	      info[MESSAGE] = `${this.paddings[info[LEVEL]]}${info[MESSAGE]}`;
	    }

	    return info;
	  }
	}

	/*
	 * function padLevels (info)
	 * Returns a new instance of the padLevels Format which pads
	 * levels to be the same length. This was previously exposed as
	 * { padLevels: true } to transports in `winston < 3.0.0`.
	 */
	padLevels.exports = opts => new Padder(opts);

	padLevels.exports.Padder
	  = padLevels.exports.Format
	  = Padder;
	return padLevels.exports;
}

var hasRequiredCli;

function requireCli () {
	if (hasRequiredCli) return cli.exports;
	hasRequiredCli = 1;

	const { Colorizer } = requireColorize();
	const { Padder } = requirePadLevels();
	const { configs, MESSAGE } = requireTripleBeam();


	/**
	 * Cli format class that handles initial state for a a separate
	 * Colorizer and Padder instance.
	 */
	class CliFormat {
	  constructor(opts = {}) {
	    if (!opts.levels) {
	      opts.levels = configs.cli.levels;
	    }

	    this.colorizer = new Colorizer(opts);
	    this.padder = new Padder(opts);
	    this.options = opts;
	  }

	  /*
	   * function transform (info, opts)
	   * Attempts to both:
	   * 1. Pad the { level }
	   * 2. Colorize the { level, message }
	   * of the given `logform` info object depending on the `opts`.
	   */
	  transform(info, opts) {
	    this.colorizer.transform(
	      this.padder.transform(info, opts),
	      opts
	    );

	    info[MESSAGE] = `${info.level}:${info.message}`;
	    return info;
	  }
	}

	/*
	 * function cli (opts)
	 * Returns a new instance of the CLI format that turns a log
	 * `info` object into the same format previously available
	 * in `winston.cli()` in `winston < 3.0.0`.
	 */
	cli.exports = opts => new CliFormat(opts);

	//
	// Attach the CliFormat for registration purposes
	//
	cli.exports.Format = CliFormat;
	return cli.exports;
}

var combine = {exports: {}};

var hasRequiredCombine;

function requireCombine () {
	if (hasRequiredCombine) return combine.exports;
	hasRequiredCombine = 1;

	const format = requireFormat();

	/*
	 * function cascade(formats)
	 * Returns a function that invokes the `._format` function in-order
	 * for the specified set of `formats`. In this manner we say that Formats
	 * are "pipe-like", but not a pure pumpify implementation. Since there is no back
	 * pressure we can remove all of the "readable" plumbing in Node streams.
	 */
	function cascade(formats) {
	  if (!formats.every(isValidFormat)) {
	    return;
	  }

	  return info => {
	    let obj = info;
	    for (let i = 0; i < formats.length; i++) {
	      obj = formats[i].transform(obj, formats[i].options);
	      if (!obj) {
	        return false;
	      }
	    }

	    return obj;
	  };
	}

	/*
	 * function isValidFormat(format)
	 * If the format does not define a `transform` function throw an error
	 * with more detailed usage.
	 */
	function isValidFormat(fmt) {
	  if (typeof fmt.transform !== 'function') {
	    throw new Error([
	      'No transform function found on format. Did you create a format instance?',
	      'const myFormat = format(formatFn);',
	      'const instance = myFormat();'
	    ].join('\n'));
	  }

	  return true;
	}

	/*
	 * function combine (info)
	 * Returns a new instance of the combine Format which combines the specified
	 * formats into a new format. This is similar to a pipe-chain in transform streams.
	 * We choose to combine the prototypes this way because there is no back pressure in
	 * an in-memory transform chain.
	 */
	combine.exports = (...formats) => {
	  const combinedFormat = format(cascade(formats));
	  const instance = combinedFormat();
	  instance.Format = combinedFormat.Format;
	  return instance;
	};

	//
	// Export the cascade method for use in cli and other
	// combined formats that should not be assumed to be
	// singletons.
	//
	combine.exports.cascade = cascade;
	return combine.exports;
}

var safeStableStringify = {exports: {}};

var hasRequiredSafeStableStringify;

function requireSafeStableStringify () {
	if (hasRequiredSafeStableStringify) return safeStableStringify.exports;
	hasRequiredSafeStableStringify = 1;
	(function (module, exports) {

		const { hasOwnProperty } = Object.prototype;

		const stringify = configure();

		// @ts-expect-error
		stringify.configure = configure;
		// @ts-expect-error
		stringify.stringify = stringify;

		// @ts-expect-error
		stringify.default = stringify;

		// @ts-expect-error used for named export
		exports.stringify = stringify;
		// @ts-expect-error used for named export
		exports.configure = configure;

		module.exports = stringify;

		// eslint-disable-next-line no-control-regex
		const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;

		// Escape C0 control characters, double quotes, the backslash and every code
		// unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
		function strEscape (str) {
		  // Some magic numbers that worked out fine while benchmarking with v8 8.0
		  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
		    return `"${str}"`
		  }
		  return JSON.stringify(str)
		}

		function sort (array, comparator) {
		  // Insertion sort is very efficient for small input sizes, but it has a bad
		  // worst case complexity. Thus, use native array sort for bigger values.
		  if (array.length > 2e2 || comparator) {
		    return array.sort(comparator)
		  }
		  for (let i = 1; i < array.length; i++) {
		    const currentValue = array[i];
		    let position = i;
		    while (position !== 0 && array[position - 1] > currentValue) {
		      array[position] = array[position - 1];
		      position--;
		    }
		    array[position] = currentValue;
		  }
		  return array
		}

		const typedArrayPrototypeGetSymbolToStringTag =
		  Object.getOwnPropertyDescriptor(
		    Object.getPrototypeOf(
		      Object.getPrototypeOf(
		        new Int8Array()
		      )
		    ),
		    Symbol.toStringTag
		  ).get;

		function isTypedArrayWithEntries (value) {
		  return typedArrayPrototypeGetSymbolToStringTag.call(value) !== undefined && value.length !== 0
		}

		function stringifyTypedArray (array, separator, maximumBreadth) {
		  if (array.length < maximumBreadth) {
		    maximumBreadth = array.length;
		  }
		  const whitespace = separator === ',' ? '' : ' ';
		  let res = `"0":${whitespace}${array[0]}`;
		  for (let i = 1; i < maximumBreadth; i++) {
		    res += `${separator}"${i}":${whitespace}${array[i]}`;
		  }
		  return res
		}

		function getCircularValueOption (options) {
		  if (hasOwnProperty.call(options, 'circularValue')) {
		    const circularValue = options.circularValue;
		    if (typeof circularValue === 'string') {
		      return `"${circularValue}"`
		    }
		    if (circularValue == null) {
		      return circularValue
		    }
		    if (circularValue === Error || circularValue === TypeError) {
		      return {
		        toString () {
		          throw new TypeError('Converting circular structure to JSON')
		        }
		      }
		    }
		    throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
		  }
		  return '"[Circular]"'
		}

		function getDeterministicOption (options) {
		  let value;
		  if (hasOwnProperty.call(options, 'deterministic')) {
		    value = options.deterministic;
		    if (typeof value !== 'boolean' && typeof value !== 'function') {
		      throw new TypeError('The "deterministic" argument must be of type boolean or comparator function')
		    }
		  }
		  return value === undefined ? true : value
		}

		function getBooleanOption (options, key) {
		  let value;
		  if (hasOwnProperty.call(options, key)) {
		    value = options[key];
		    if (typeof value !== 'boolean') {
		      throw new TypeError(`The "${key}" argument must be of type boolean`)
		    }
		  }
		  return value === undefined ? true : value
		}

		function getPositiveIntegerOption (options, key) {
		  let value;
		  if (hasOwnProperty.call(options, key)) {
		    value = options[key];
		    if (typeof value !== 'number') {
		      throw new TypeError(`The "${key}" argument must be of type number`)
		    }
		    if (!Number.isInteger(value)) {
		      throw new TypeError(`The "${key}" argument must be an integer`)
		    }
		    if (value < 1) {
		      throw new RangeError(`The "${key}" argument must be >= 1`)
		    }
		  }
		  return value === undefined ? Infinity : value
		}

		function getItemCount (number) {
		  if (number === 1) {
		    return '1 item'
		  }
		  return `${number} items`
		}

		function getUniqueReplacerSet (replacerArray) {
		  const replacerSet = new Set();
		  for (const value of replacerArray) {
		    if (typeof value === 'string' || typeof value === 'number') {
		      replacerSet.add(String(value));
		    }
		  }
		  return replacerSet
		}

		function getStrictOption (options) {
		  if (hasOwnProperty.call(options, 'strict')) {
		    const value = options.strict;
		    if (typeof value !== 'boolean') {
		      throw new TypeError('The "strict" argument must be of type boolean')
		    }
		    if (value) {
		      return (value) => {
		        let message = `Object can not safely be stringified. Received type ${typeof value}`;
		        if (typeof value !== 'function') message += ` (${value.toString()})`;
		        throw new Error(message)
		      }
		    }
		  }
		}

		function configure (options) {
		  options = { ...options };
		  const fail = getStrictOption(options);
		  if (fail) {
		    if (options.bigint === undefined) {
		      options.bigint = false;
		    }
		    if (!('circularValue' in options)) {
		      options.circularValue = Error;
		    }
		  }
		  const circularValue = getCircularValueOption(options);
		  const bigint = getBooleanOption(options, 'bigint');
		  const deterministic = getDeterministicOption(options);
		  const comparator = typeof deterministic === 'function' ? deterministic : undefined;
		  const maximumDepth = getPositiveIntegerOption(options, 'maximumDepth');
		  const maximumBreadth = getPositiveIntegerOption(options, 'maximumBreadth');

		  function stringifyFnReplacer (key, parent, stack, replacer, spacer, indentation) {
		    let value = parent[key];

		    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
		      value = value.toJSON(key);
		    }
		    value = replacer.call(parent, key, value);

		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        let res = '';
		        let join = ',';
		        const originalIndentation = indentation;

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          if (spacer !== '') {
		            indentation += spacer;
		            res += `\n${indentation}`;
		            join = `,\n${indentation}`;
		          }
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          if (spacer !== '') {
		            res += `\n${originalIndentation}`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        let whitespace = '';
		        let separator = '';
		        if (spacer !== '') {
		          indentation += spacer;
		          join = `,\n${indentation}`;
		          whitespace = ' ';
		        }
		        const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (deterministic && !isTypedArrayWithEntries(value)) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifyFnReplacer(key, value, stack, replacer, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`;
		            separator = join;
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
		          separator = join;
		        }
		        if (spacer !== '' && separator.length > 1) {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifyArrayReplacer (key, value, stack, replacer, spacer, indentation) {
		    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
		      value = value.toJSON(key);
		    }

		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        const originalIndentation = indentation;
		        let res = '';
		        let join = ',';

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          if (spacer !== '') {
		            indentation += spacer;
		            res += `\n${indentation}`;
		            join = `,\n${indentation}`;
		          }
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          if (spacer !== '') {
		            res += `\n${originalIndentation}`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }
		        stack.push(value);
		        let whitespace = '';
		        if (spacer !== '') {
		          indentation += spacer;
		          join = `,\n${indentation}`;
		          whitespace = ' ';
		        }
		        let separator = '';
		        for (const key of replacer) {
		          const tmp = stringifyArrayReplacer(key, value[key], stack, replacer, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`;
		            separator = join;
		          }
		        }
		        if (spacer !== '' && separator.length > 1) {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifyIndent (key, value, stack, spacer, indentation) {
		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (typeof value.toJSON === 'function') {
		          value = value.toJSON(key);
		          // Prevent calling `toJSON` again.
		          if (typeof value !== 'object') {
		            return stringifyIndent(key, value, stack, spacer, indentation)
		          }
		          if (value === null) {
		            return 'null'
		          }
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }
		        const originalIndentation = indentation;

		        if (Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          indentation += spacer;
		          let res = `\n${indentation}`;
		          const join = `,\n${indentation}`;
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
		            res += tmp !== undefined ? tmp : 'null';
		            res += join;
		          }
		          const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          res += `\n${originalIndentation}`;
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        indentation += spacer;
		        const join = `,\n${indentation}`;
		        let res = '';
		        let separator = '';
		        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (isTypedArrayWithEntries(value)) {
		          res += stringifyTypedArray(value, join, maximumBreadth);
		          keys = keys.slice(value.length);
		          maximumPropertiesToStringify -= value.length;
		          separator = join;
		        }
		        if (deterministic) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifyIndent(key, value[key], stack, spacer, indentation);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}: ${tmp}`;
		            separator = join;
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
		          separator = join;
		        }
		        if (separator !== '') {
		          res = `\n${indentation}${res}\n${originalIndentation}`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringifySimple (key, value, stack) {
		    switch (typeof value) {
		      case 'string':
		        return strEscape(value)
		      case 'object': {
		        if (value === null) {
		          return 'null'
		        }
		        if (typeof value.toJSON === 'function') {
		          value = value.toJSON(key);
		          // Prevent calling `toJSON` again
		          if (typeof value !== 'object') {
		            return stringifySimple(key, value, stack)
		          }
		          if (value === null) {
		            return 'null'
		          }
		        }
		        if (stack.indexOf(value) !== -1) {
		          return circularValue
		        }

		        let res = '';

		        const hasLength = value.length !== undefined;
		        if (hasLength && Array.isArray(value)) {
		          if (value.length === 0) {
		            return '[]'
		          }
		          if (maximumDepth < stack.length + 1) {
		            return '"[Array]"'
		          }
		          stack.push(value);
		          const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
		          let i = 0;
		          for (; i < maximumValuesToStringify - 1; i++) {
		            const tmp = stringifySimple(String(i), value[i], stack);
		            res += tmp !== undefined ? tmp : 'null';
		            res += ',';
		          }
		          const tmp = stringifySimple(String(i), value[i], stack);
		          res += tmp !== undefined ? tmp : 'null';
		          if (value.length - 1 > maximumBreadth) {
		            const removedKeys = value.length - maximumBreadth - 1;
		            res += `,"... ${getItemCount(removedKeys)} not stringified"`;
		          }
		          stack.pop();
		          return `[${res}]`
		        }

		        let keys = Object.keys(value);
		        const keyLength = keys.length;
		        if (keyLength === 0) {
		          return '{}'
		        }
		        if (maximumDepth < stack.length + 1) {
		          return '"[Object]"'
		        }
		        let separator = '';
		        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
		        if (hasLength && isTypedArrayWithEntries(value)) {
		          res += stringifyTypedArray(value, ',', maximumBreadth);
		          keys = keys.slice(value.length);
		          maximumPropertiesToStringify -= value.length;
		          separator = ',';
		        }
		        if (deterministic) {
		          keys = sort(keys, comparator);
		        }
		        stack.push(value);
		        for (let i = 0; i < maximumPropertiesToStringify; i++) {
		          const key = keys[i];
		          const tmp = stringifySimple(key, value[key], stack);
		          if (tmp !== undefined) {
		            res += `${separator}${strEscape(key)}:${tmp}`;
		            separator = ',';
		          }
		        }
		        if (keyLength > maximumBreadth) {
		          const removedKeys = keyLength - maximumBreadth;
		          res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
		        }
		        stack.pop();
		        return `{${res}}`
		      }
		      case 'number':
		        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
		      case 'boolean':
		        return value === true ? 'true' : 'false'
		      case 'undefined':
		        return undefined
		      case 'bigint':
		        if (bigint) {
		          return String(value)
		        }
		        // fallthrough
		      default:
		        return fail ? fail(value) : undefined
		    }
		  }

		  function stringify (value, replacer, space) {
		    if (arguments.length > 1) {
		      let spacer = '';
		      if (typeof space === 'number') {
		        spacer = ' '.repeat(Math.min(space, 10));
		      } else if (typeof space === 'string') {
		        spacer = space.slice(0, 10);
		      }
		      if (replacer != null) {
		        if (typeof replacer === 'function') {
		          return stringifyFnReplacer('', { '': value }, [], replacer, spacer, '')
		        }
		        if (Array.isArray(replacer)) {
		          return stringifyArrayReplacer('', value, [], getUniqueReplacerSet(replacer), spacer, '')
		        }
		      }
		      if (spacer.length !== 0) {
		        return stringifyIndent('', value, [], spacer, '')
		      }
		    }
		    return stringifySimple('', value, [])
		  }

		  return stringify
		} 
	} (safeStableStringify, safeStableStringify.exports));
	return safeStableStringify.exports;
}

var json;
var hasRequiredJson;

function requireJson () {
	if (hasRequiredJson) return json;
	hasRequiredJson = 1;

	const format = requireFormat();
	const { MESSAGE } = requireTripleBeam();
	const stringify = requireSafeStableStringify();

	/*
	 * function replacer (key, value)
	 * Handles proper stringification of Buffer and bigint output.
	 */
	function replacer(key, value) {
	  // safe-stable-stringify does support BigInt, however, it doesn't wrap the value in quotes.
	  // Leading to a loss in fidelity if the resulting string is parsed.
	  // It would also be a breaking change for logform.
	  if (typeof value === 'bigint')
	    return value.toString();
	  return value;
	}

	/*
	 * function json (info)
	 * Returns a new instance of the JSON format that turns a log `info`
	 * object into pure JSON. This was previously exposed as { json: true }
	 * to transports in `winston < 3.0.0`.
	 */
	json = format((info, opts) => {
	  const jsonStringify = stringify.configure(opts);
	  info[MESSAGE] = jsonStringify(info, opts.replacer || replacer, opts.space);
	  return info;
	});
	return json;
}

var label;
var hasRequiredLabel;

function requireLabel () {
	if (hasRequiredLabel) return label;
	hasRequiredLabel = 1;

	const format = requireFormat();

	/*
	 * function label (info)
	 * Returns a new instance of the label Format which adds the specified
	 * `opts.label` before the message. This was previously exposed as
	 * { label: 'my label' } to transports in `winston < 3.0.0`.
	 */
	label = format((info, opts) => {
	  if (opts.message) {
	    info.message = `[${opts.label}] ${info.message}`;
	    return info;
	  }

	  info.label = opts.label;
	  return info;
	});
	return label;
}

var logstash;
var hasRequiredLogstash;

function requireLogstash () {
	if (hasRequiredLogstash) return logstash;
	hasRequiredLogstash = 1;

	const format = requireFormat();
	const { MESSAGE } = requireTripleBeam();
	const jsonStringify = requireSafeStableStringify();

	/*
	 * function logstash (info)
	 * Returns a new instance of the LogStash Format that turns a
	 * log `info` object into pure JSON with the appropriate logstash
	 * options. This was previously exposed as { logstash: true }
	 * to transports in `winston < 3.0.0`.
	 */
	logstash = format(info => {
	  const logstash = {};
	  if (info.message) {
	    logstash['@message'] = info.message;
	    delete info.message;
	  }

	  if (info.timestamp) {
	    logstash['@timestamp'] = info.timestamp;
	    delete info.timestamp;
	  }

	  logstash['@fields'] = info;
	  info[MESSAGE] = jsonStringify(logstash);
	  return info;
	});
	return logstash;
}

var metadata;
var hasRequiredMetadata;

function requireMetadata () {
	if (hasRequiredMetadata) return metadata;
	hasRequiredMetadata = 1;

	const format = requireFormat();

	function fillExcept(info, fillExceptKeys, metadataKey) {
	  const savedKeys = fillExceptKeys.reduce((acc, key) => {
	    acc[key] = info[key];
	    delete info[key];
	    return acc;
	  }, {});
	  const metadata = Object.keys(info).reduce((acc, key) => {
	    acc[key] = info[key];
	    delete info[key];
	    return acc;
	  }, {});

	  Object.assign(info, savedKeys, {
	    [metadataKey]: metadata
	  });
	  return info;
	}

	function fillWith(info, fillWithKeys, metadataKey) {
	  info[metadataKey] = fillWithKeys.reduce((acc, key) => {
	    acc[key] = info[key];
	    delete info[key];
	    return acc;
	  }, {});
	  return info;
	}

	/**
	 * Adds in a "metadata" object to collect extraneous data, similar to the metadata
	 * object in winston 2.x.
	 */
	metadata = format((info, opts = {}) => {
	  let metadataKey = 'metadata';
	  if (opts.key) {
	    metadataKey = opts.key;
	  }

	  let fillExceptKeys = [];
	  if (!opts.fillExcept && !opts.fillWith) {
	    fillExceptKeys.push('level');
	    fillExceptKeys.push('message');
	  }

	  if (opts.fillExcept) {
	    fillExceptKeys = opts.fillExcept;
	  }

	  if (fillExceptKeys.length > 0) {
	    return fillExcept(info, fillExceptKeys, metadataKey);
	  }

	  if (opts.fillWith) {
	    return fillWith(info, opts.fillWith, metadataKey);
	  }

	  return info;
	});
	return metadata;
}

/**
 * Helpers.
 */

var ms;
var hasRequiredMs$1;

function requireMs$1 () {
	if (hasRequiredMs$1) return ms;
	hasRequiredMs$1 = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function (val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isFinite(val)) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}
	return ms;
}

var ms_1;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms_1;
	hasRequiredMs = 1;

	const format = requireFormat();
	const ms = requireMs$1();

	/*
	 * function ms (info)
	 * Returns an `info` with a `ms` property. The `ms` property holds the Value
	 * of the time difference between two calls in milliseconds.
	 */
	ms_1 = format(info => {
	  const curr = +new Date();
	  this.diff = curr - (this.prevTime || curr);
	  this.prevTime = curr;
	  info.ms = `+${ms(this.diff)}`;

	  return info;
	});
	return ms_1;
}

var prettyPrint;
var hasRequiredPrettyPrint;

function requirePrettyPrint () {
	if (hasRequiredPrettyPrint) return prettyPrint;
	hasRequiredPrettyPrint = 1;

	const inspect = require$$0$3.inspect;
	const format = requireFormat();
	const { LEVEL, MESSAGE, SPLAT } = requireTripleBeam();

	/*
	 * function prettyPrint (info)
	 * Returns a new instance of the prettyPrint Format that "prettyPrint"
	 * serializes `info` objects. This was previously exposed as
	 * { prettyPrint: true } to transports in `winston < 3.0.0`.
	 */
	prettyPrint = format((info, opts = {}) => {
	  //
	  // info[{LEVEL, MESSAGE, SPLAT}] are enumerable here. Since they
	  // are internal, we remove them before util.inspect so they
	  // are not printed.
	  //
	  const stripped = Object.assign({}, info);

	  // Remark (indexzero): update this technique in April 2019
	  // when node@6 is EOL
	  delete stripped[LEVEL];
	  delete stripped[MESSAGE];
	  delete stripped[SPLAT];

	  info[MESSAGE] = inspect(stripped, false, opts.depth || null, opts.colorize);
	  return info;
	});
	return prettyPrint;
}

var printf = {exports: {}};

var hasRequiredPrintf;

function requirePrintf () {
	if (hasRequiredPrintf) return printf.exports;
	hasRequiredPrintf = 1;

	const { MESSAGE } = requireTripleBeam();

	class Printf {
	  constructor(templateFn) {
	    this.template = templateFn;
	  }

	  transform(info) {
	    info[MESSAGE] = this.template(info);
	    return info;
	  }
	}

	/*
	 * function printf (templateFn)
	 * Returns a new instance of the printf Format that creates an
	 * intermediate prototype to store the template string-based formatter
	 * function.
	 */
	printf.exports = opts => new Printf(opts);

	printf.exports.Printf
	  = printf.exports.Format
	  = Printf;
	return printf.exports;
}

/* eslint no-undefined: 0 */

var simple;
var hasRequiredSimple;

function requireSimple () {
	if (hasRequiredSimple) return simple;
	hasRequiredSimple = 1;

	const format = requireFormat();
	const { MESSAGE } = requireTripleBeam();
	const jsonStringify = requireSafeStableStringify();

	/*
	 * function simple (info)
	 * Returns a new instance of the simple format TransformStream
	 * which writes a simple representation of logs.
	 *
	 *    const { level, message, splat, ...rest } = info;
	 *
	 *    ${level}: ${message}                            if rest is empty
	 *    ${level}: ${message} ${JSON.stringify(rest)}    otherwise
	 */
	simple = format(info => {
	  const stringifiedRest = jsonStringify(Object.assign({}, info, {
	    level: undefined,
	    message: undefined,
	    splat: undefined
	  }));

	  const padding = info.padding && info.padding[info.level] || '';
	  if (stringifiedRest !== '{}') {
	    info[MESSAGE] = `${info.level}:${padding} ${info.message} ${stringifiedRest}`;
	  } else {
	    info[MESSAGE] = `${info.level}:${padding} ${info.message}`;
	  }

	  return info;
	});
	return simple;
}

var splat;
var hasRequiredSplat;

function requireSplat () {
	if (hasRequiredSplat) return splat;
	hasRequiredSplat = 1;

	const util = require$$0$3;
	const { SPLAT } = requireTripleBeam();

	/**
	 * Captures the number of format (i.e. %s strings) in a given string.
	 * Based on `util.format`, see Node.js source:
	 * https://github.com/nodejs/node/blob/b1c8f15c5f169e021f7c46eb7b219de95fe97603/lib/util.js#L201-L230
	 * @type {RegExp}
	 */
	const formatRegExp = /%[scdjifoO%]/g;

	/**
	 * Captures the number of escaped % signs in a format string (i.e. %s strings).
	 * @type {RegExp}
	 */
	const escapedPercent = /%%/g;

	class Splatter {
	  constructor(opts) {
	    this.options = opts;
	  }

	  /**
	     * Check to see if tokens <= splat.length, assign { splat, meta } into the
	     * `info` accordingly, and write to this instance.
	     *
	     * @param  {Info} info Logform info message.
	     * @param  {String[]} tokens Set of string interpolation tokens.
	     * @returns {Info} Modified info message
	     * @private
	     */
	  _splat(info, tokens) {
	    const msg = info.message;
	    const splat = info[SPLAT] || info.splat || [];
	    const percents = msg.match(escapedPercent);
	    const escapes = percents && percents.length || 0;

	    // The expected splat is the number of tokens minus the number of escapes
	    // e.g.
	    // - { expectedSplat: 3 } '%d %s %j'
	    // - { expectedSplat: 5 } '[%s] %d%% %d%% %s %j'
	    //
	    // Any "meta" will be arugments in addition to the expected splat size
	    // regardless of type. e.g.
	    //
	    // logger.log('info', '%d%% %s %j', 100, 'wow', { such: 'js' }, { thisIsMeta: true });
	    // would result in splat of four (4), but only three (3) are expected. Therefore:
	    //
	    // extraSplat = 3 - 4 = -1
	    // metas = [100, 'wow', { such: 'js' }, { thisIsMeta: true }].splice(-1, -1 * -1);
	    // splat = [100, 'wow', { such: 'js' }]
	    const expectedSplat = tokens.length - escapes;
	    const extraSplat = expectedSplat - splat.length;
	    const metas = extraSplat < 0
	      ? splat.splice(extraSplat, -1 * extraSplat)
	      : [];

	    // Now that { splat } has been separated from any potential { meta }. we
	    // can assign this to the `info` object and write it to our format stream.
	    // If the additional metas are **NOT** objects or **LACK** enumerable properties
	    // you are going to have a bad time.
	    const metalen = metas.length;
	    if (metalen) {
	      for (let i = 0; i < metalen; i++) {
	        Object.assign(info, metas[i]);
	      }
	    }

	    info.message = util.format(msg, ...splat);
	    return info;
	  }

	  /**
	    * Transforms the `info` message by using `util.format` to complete
	    * any `info.message` provided it has string interpolation tokens.
	    * If no tokens exist then `info` is immutable.
	    *
	    * @param  {Info} info Logform info message.
	    * @param  {Object} opts Options for this instance.
	    * @returns {Info} Modified info message
	    */
	  transform(info) {
	    const msg = info.message;
	    const splat = info[SPLAT] || info.splat;

	    // No need to process anything if splat is undefined
	    if (!splat || !splat.length) {
	      return info;
	    }

	    // Extract tokens, if none available default to empty array to
	    // ensure consistancy in expected results
	    const tokens = msg && msg.match && msg.match(formatRegExp);

	    // This condition will take care of inputs with info[SPLAT]
	    // but no tokens present
	    if (!tokens && (splat || splat.length)) {
	      const metas = splat.length > 1
	        ? splat.splice(0)
	        : splat;

	      // Now that { splat } has been separated from any potential { meta }. we
	      // can assign this to the `info` object and write it to our format stream.
	      // If the additional metas are **NOT** objects or **LACK** enumerable properties
	      // you are going to have a bad time.
	      const metalen = metas.length;
	      if (metalen) {
	        for (let i = 0; i < metalen; i++) {
	          Object.assign(info, metas[i]);
	        }
	      }

	      return info;
	    }

	    if (tokens) {
	      return this._splat(info, tokens);
	    }

	    return info;
	  }
	}

	/*
	 * function splat (info)
	 * Returns a new instance of the splat format TransformStream
	 * which performs string interpolation from `info` objects. This was
	 * previously exposed implicitly in `winston < 3.0.0`.
	 */
	splat = opts => new Splatter(opts);
	return splat;
}

var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{3}";
var fourDigits = "\\d{4}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
}
var monthUpdate = function (arrName) { return function (v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
    var index = lowerCaseArr.indexOf(v.toLowerCase());
    if (index > -1) {
        return index;
    }
    return null;
}; };
function assign(origObj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        for (var key in obj) {
            // @ts-ignore ex
            origObj[key] = obj[key];
        }
    }
    return origObj;
}
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ["am", "pm"],
    DoFn: function (dayOfMonth) {
        return (dayOfMonth +
            ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3
                ? 0
                : ((dayOfMonth - (dayOfMonth % 10) !== 10 ? 1 : 0) * dayOfMonth) % 10]);
    }
};
var globalI18n = assign({}, defaultI18n);
var setGlobalDateI18n = function (i18n) {
    return (globalI18n = assign(globalI18n, i18n));
};
var regexEscape = function (str) {
    return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function (val, len) {
    if (len === void 0) { len = 2; }
    val = String(val);
    while (val.length < len) {
        val = "0" + val;
    }
    return val;
};
var formatFlags = {
    D: function (dateObj) { return String(dateObj.getDate()); },
    DD: function (dateObj) { return pad(dateObj.getDate()); },
    Do: function (dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) { return String(dateObj.getDay()); },
    dd: function (dateObj) { return pad(dateObj.getDay()); },
    ddd: function (dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) { return String(dateObj.getMonth() + 1); },
    MM: function (dateObj) { return pad(dateObj.getMonth() + 1); },
    MMM: function (dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
    },
    YYYY: function (dateObj) { return pad(dateObj.getFullYear(), 4); },
    h: function (dateObj) { return String(dateObj.getHours() % 12 || 12); },
    hh: function (dateObj) { return pad(dateObj.getHours() % 12 || 12); },
    H: function (dateObj) { return String(dateObj.getHours()); },
    HH: function (dateObj) { return pad(dateObj.getHours()); },
    m: function (dateObj) { return String(dateObj.getMinutes()); },
    mm: function (dateObj) { return pad(dateObj.getMinutes()); },
    s: function (dateObj) { return String(dateObj.getSeconds()); },
    ss: function (dateObj) { return pad(dateObj.getSeconds()); },
    S: function (dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / 100));
    },
    SS: function (dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), 3); },
    a: function (dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
        return dateObj.getHours() < 12
            ? i18n.amPm[0].toUpperCase()
            : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4));
    },
    Z: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60), 2) +
            ":" +
            pad(Math.abs(offset) % 60, 2));
    }
};
var monthParse = function (v) { return +v - 1; };
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
    "isPm",
    word,
    function (v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
            return 0;
        }
        else if (val === i18n.amPm[1]) {
            return 1;
        }
        return null;
    }
];
var timezoneOffset = [
    "timezoneOffset",
    "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
    function (v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
            var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
            return parts[0] === "+" ? minutes : -minutes;
        }
        return 0;
    }
];
var parseFlags = {
    D: ["day", twoDigitsOptional],
    DD: ["day", twoDigits],
    Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, 10); }],
    M: ["month", twoDigitsOptional, monthParse],
    MM: ["month", twoDigits, monthParse],
    YY: [
        "year",
        twoDigits,
        function (v) {
            var now = new Date();
            var cent = +("" + now.getFullYear()).substr(0, 2);
            return +("" + (+v > 68 ? cent - 1 : cent) + v);
        }
    ],
    h: ["hour", twoDigitsOptional, undefined, "isPm"],
    hh: ["hour", twoDigits, undefined, "isPm"],
    H: ["hour", twoDigitsOptional],
    HH: ["hour", twoDigits],
    m: ["minute", twoDigitsOptional],
    mm: ["minute", twoDigits],
    s: ["second", twoDigitsOptional],
    ss: ["second", twoDigits],
    YYYY: ["year", fourDigits],
    S: ["millisecond", "\\d", function (v) { return +v * 100; }],
    SS: ["millisecond", twoDigits, function (v) { return +v * 10; }],
    SSS: ["millisecond", threeDigits],
    d: emptyDigits,
    dd: emptyDigits,
    ddd: emptyWord,
    dddd: emptyWord,
    MMM: ["month", word, monthUpdate("monthNamesShort")],
    MMMM: ["month", word, monthUpdate("monthNames")],
    a: amPm,
    A: amPm,
    ZZ: timezoneOffset,
    Z: timezoneOffset
};
// Some common format strings
var globalMasks = {
    default: "ddd MMM DD YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MMM D, YYYY",
    longDate: "MMMM D, YYYY",
    fullDate: "dddd, MMMM D, YYYY",
    isoDate: "YYYY-MM-DD",
    isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
    shortTime: "HH:mm",
    mediumTime: "HH:mm:ss",
    longTime: "HH:mm:ss.SSS"
};
var setGlobalDateMasks = function (masks) { return assign(globalMasks, masks); };
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 * @returns {string} Formatted date string
 */
var format = function (dateObj, mask, i18n) {
    if (mask === void 0) { mask = globalMasks["default"]; }
    if (i18n === void 0) { i18n = {}; }
    if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
    }
    if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
        isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
    }
    mask = globalMasks[mask] || mask;
    var literals = [];
    // Make literals inactive by replacing them with @@@
    mask = mask.replace(literal, function ($0, $1) {
        literals.push($1);
        return "@@@";
    });
    var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
        return formatFlags[$0](dateObj, combinedI18nSettings);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function () { return literals.shift(); });
};
/**
 * Parse a date string into a Javascript Date object /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
 * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
 */
function parse(dateStr, format, i18n) {
    if (i18n === void 0) { i18n = {}; }
    if (typeof format !== "string") {
        throw new Error("Invalid format in fecha parse");
    }
    // Check to see if the format is actually a mask
    format = globalMasks[format] || format;
    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
        return null;
    }
    // Default to the beginning of the year.
    var today = new Date();
    var dateInfo = {
        year: today.getFullYear(),
        month: 0,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        isPm: null,
        timezoneOffset: null
    };
    var parseInfo = [];
    var literals = [];
    // Replace all the literals with @@@. Hopefully a string that won't exist in the format
    var newFormat = format.replace(literal, function ($0, $1) {
        literals.push(regexEscape($1));
        return "@@@";
    });
    var specifiedFields = {};
    var requiredFields = {};
    // Change every token that we find into the correct regex
    newFormat = regexEscape(newFormat).replace(token, function ($0) {
        var info = parseFlags[$0];
        var field = info[0], regex = info[1], requiredField = info[3];
        // Check if the person has specified the same field twice. This will lead to confusing results.
        if (specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " specified twice in format");
        }
        specifiedFields[field] = true;
        // Check if there are any required fields. For instance, 12 hour time requires AM/PM specified
        if (requiredField) {
            requiredFields[requiredField] = true;
        }
        parseInfo.push(info);
        return "(" + regex + ")";
    });
    // Check all the required fields are present
    Object.keys(requiredFields).forEach(function (field) {
        if (!specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " is required in specified format");
        }
    });
    // Add back all the literals after
    newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
    // Check if the date string matches the format. If it doesn't return null
    var matches = dateStr.match(new RegExp(newFormat, "i"));
    if (!matches) {
        return null;
    }
    var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
    // For each match, call the parser function for that date part
    for (var i = 1; i < matches.length; i++) {
        var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
        var value = parser
            ? parser(matches[i], combinedI18nSettings)
            : +matches[i];
        // If the parser can't make sense of the value, return null
        if (value == null) {
            return null;
        }
        dateInfo[field] = value;
    }
    if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
    }
    else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
    }
    var dateTZ;
    if (dateInfo.timezoneOffset == null) {
        dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
            ["month", "getMonth"],
            ["day", "getDate"],
            ["hour", "getHours"],
            ["minute", "getMinutes"],
            ["second", "getSeconds"]
        ];
        for (var i = 0, len = validateFields.length; i < len; i++) {
            // Check to make sure the date field is within the allowed range. Javascript dates allows values
            // outside the allowed range. If the values don't match the value was invalid
            if (specifiedFields[validateFields[i][0]] &&
                dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
                return null;
            }
        }
    }
    else {
        dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
        // We can't validate dates in another timezone unfortunately. Do a basic check instead
        if (dateInfo.month > 11 ||
            dateInfo.month < 0 ||
            dateInfo.day > 31 ||
            dateInfo.day < 1 ||
            dateInfo.hour > 23 ||
            dateInfo.hour < 0 ||
            dateInfo.minute > 59 ||
            dateInfo.minute < 0 ||
            dateInfo.second > 59 ||
            dateInfo.second < 0) {
            return null;
        }
    }
    // Don't allow invalid dates
    return dateTZ;
}
var fecha = {
    format: format,
    parse: parse,
    defaultI18n: defaultI18n,
    setGlobalDateI18n: setGlobalDateI18n,
    setGlobalDateMasks: setGlobalDateMasks
};

var fecha$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	assign: assign,
	default: fecha,
	defaultI18n: defaultI18n,
	format: format,
	parse: parse,
	setGlobalDateI18n: setGlobalDateI18n,
	setGlobalDateMasks: setGlobalDateMasks
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(fecha$1);

var timestamp;
var hasRequiredTimestamp;

function requireTimestamp () {
	if (hasRequiredTimestamp) return timestamp;
	hasRequiredTimestamp = 1;

	const fecha = require$$0$1;
	const format = requireFormat();

	/*
	 * function timestamp (info)
	 * Returns a new instance of the timestamp Format which adds a timestamp
	 * to the info. It was previously available in winston < 3.0.0 as:
	 *
	 * - { timestamp: true }             // `new Date.toISOString()`
	 * - { timestamp: function:String }  // Value returned by `timestamp()`
	 */
	timestamp = format((info, opts = {}) => {
	  if (opts.format) {
	    info.timestamp = typeof opts.format === 'function'
	      ? opts.format()
	      : fecha.format(new Date(), opts.format);
	  }

	  if (!info.timestamp) {
	    info.timestamp = new Date().toISOString();
	  }

	  if (opts.alias) {
	    info[opts.alias] = info.timestamp;
	  }

	  return info;
	});
	return timestamp;
}

var uncolorize;
var hasRequiredUncolorize;

function requireUncolorize () {
	if (hasRequiredUncolorize) return uncolorize;
	hasRequiredUncolorize = 1;

	const colors = requireSafe();
	const format = requireFormat();
	const { MESSAGE } = requireTripleBeam();

	/*
	 * function uncolorize (info)
	 * Returns a new instance of the uncolorize Format that strips colors
	 * from `info` objects. This was previously exposed as { stripColors: true }
	 * to transports in `winston < 3.0.0`.
	 */
	uncolorize = format((info, opts) => {
	  if (opts.level !== false) {
	    info.level = colors.strip(info.level);
	  }

	  if (opts.message !== false) {
	    info.message = colors.strip(String(info.message));
	  }

	  if (opts.raw !== false && info[MESSAGE]) {
	    info[MESSAGE] = colors.strip(String(info[MESSAGE]));
	  }

	  return info;
	});
	return uncolorize;
}

var hasRequiredLogform;

function requireLogform () {
	if (hasRequiredLogform) return logform;
	hasRequiredLogform = 1;

	/*
	 * @api public
	 * @property {function} format
	 * Both the construction method and set of exposed
	 * formats.
	 */
	const format = logform.format = requireFormat();

	/*
	 * @api public
	 * @method {function} levels
	 * Registers the specified levels with logform.
	 */
	logform.levels = requireLevels();

	/*
	 * @api private
	 * method {function} exposeFormat
	 * Exposes a sub-format on the main format object
	 * as a lazy-loaded getter.
	 */
	function exposeFormat(name, requireFormat) {
	  Object.defineProperty(format, name, {
	    get() {
	      return requireFormat();
	    },
	    configurable: true
	  });
	}

	//
	// Setup all transports as lazy-loaded getters.
	//
	exposeFormat('align', function () { return requireAlign(); });
	exposeFormat('errors', function () { return requireErrors$2(); });
	exposeFormat('cli', function () { return requireCli(); });
	exposeFormat('combine', function () { return requireCombine(); });
	exposeFormat('colorize', function () { return requireColorize(); });
	exposeFormat('json', function () { return requireJson(); });
	exposeFormat('label', function () { return requireLabel(); });
	exposeFormat('logstash', function () { return requireLogstash(); });
	exposeFormat('metadata', function () { return requireMetadata(); });
	exposeFormat('ms', function () { return requireMs(); });
	exposeFormat('padLevels', function () { return requirePadLevels(); });
	exposeFormat('prettyPrint', function () { return requirePrettyPrint(); });
	exposeFormat('printf', function () { return requirePrintf(); });
	exposeFormat('simple', function () { return requireSimple(); });
	exposeFormat('splat', function () { return requireSplat(); });
	exposeFormat('timestamp', function () { return requireTimestamp(); });
	exposeFormat('uncolorize', function () { return requireUncolorize(); });
	return logform;
}

var common = {};

/**
 * common.js: Internal helper and utility functions for winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	(function (exports) {

		const { format } = require$$0$3;

		/**
		 * Set of simple deprecation notices and a way to expose them for a set of
		 * properties.
		 * @type {Object}
		 * @private
		 */
		exports.warn = {
		  deprecated(prop) {
		    return () => {
		      throw new Error(format('{ %s } was removed in winston@3.0.0.', prop));
		    };
		  },
		  useFormat(prop) {
		    return () => {
		      throw new Error([
		        format('{ %s } was removed in winston@3.0.0.', prop),
		        'Use a custom winston.format = winston.format(function) instead.'
		      ].join('\n'));
		    };
		  },
		  forFunctions(obj, type, props) {
		    props.forEach(prop => {
		      obj[prop] = exports.warn[type](prop);
		    });
		  },
		  forProperties(obj, type, props) {
		    props.forEach(prop => {
		      const notice = exports.warn[type](prop);
		      Object.defineProperty(obj, prop, {
		        get: notice,
		        set: notice
		      });
		    });
		  }
		}; 
	} (common));
	return common;
}

var name$1 = "winston";
var description = "A logger for just about everything.";
var version = "3.16.0";
var author = "Charlie Robbins <charlie.robbins@gmail.com>";
var maintainers = [
	"David Hyde <dabh@alumni.stanford.edu>"
];
var repository = {
	type: "git",
	url: "https://github.com/winstonjs/winston.git"
};
var keywords = [
	"winston",
	"logger",
	"logging",
	"logs",
	"sysadmin",
	"bunyan",
	"pino",
	"loglevel",
	"tools",
	"json",
	"stream"
];
var dependencies = {
	"@dabh/diagnostics": "^2.0.2",
	"@colors/colors": "^1.6.0",
	async: "^3.2.3",
	"is-stream": "^2.0.0",
	logform: "^2.6.0",
	"one-time": "^1.0.0",
	"readable-stream": "^3.4.0",
	"safe-stable-stringify": "^2.3.1",
	"stack-trace": "0.0.x",
	"triple-beam": "^1.3.0",
	"winston-transport": "^4.7.0"
};
var devDependencies = {
	"@babel/cli": "^7.23.9",
	"@babel/core": "^7.24.0",
	"@babel/preset-env": "^7.24.0",
	"@dabh/eslint-config-populist": "^4.4.0",
	"@types/node": "^20.11.24",
	"abstract-winston-transport": "^0.5.1",
	assume: "^2.2.0",
	"cross-spawn-async": "^2.2.5",
	eslint: "^8.57.0",
	hock: "^1.4.1",
	mocha: "^10.3.0",
	nyc: "^17.1.0",
	rimraf: "5.0.1",
	split2: "^4.1.0",
	"std-mocks": "^2.0.0",
	through2: "^4.0.2",
	"winston-compat": "^0.1.5"
};
var main = "./lib/winston.js";
var browser = "./dist/winston";
var types = "./index.d.ts";
var scripts = {
	lint: "eslint lib/*.js lib/winston/*.js lib/winston/**/*.js --resolve-plugins-relative-to ./node_modules/@dabh/eslint-config-populist",
	test: "rimraf test/fixtures/logs/* && mocha",
	"test:coverage": "nyc npm run test:unit",
	"test:unit": "mocha test/unit",
	"test:integration": "mocha test/integration",
	build: "rimraf dist && babel lib -d dist",
	prepublishOnly: "npm run build"
};
var engines = {
	node: ">= 12.0.0"
};
var license = "MIT";
var require$$2 = {
	name: name$1,
	description: description,
	version: version,
	author: author,
	maintainers: maintainers,
	repository: repository,
	keywords: keywords,
	dependencies: dependencies,
	devDependencies: devDependencies,
	main: main,
	browser: browser,
	types: types,
	scripts: scripts,
	engines: engines,
	license: license
};

var transports = {};

var winstonTransport = {exports: {}};

var modern = {exports: {}};

var stream$2 = {exports: {}};

var primordials;
var hasRequiredPrimordials;

function requirePrimordials () {
	if (hasRequiredPrimordials) return primordials;
	hasRequiredPrimordials = 1;

	/*
	  This file is a reduced and adapted version of the main lib/internal/per_context/primordials.js file defined at

	  https://github.com/nodejs/node/blob/master/lib/internal/per_context/primordials.js

	  Don't try to replace with the original file and keep it up to date with the upstream file.
	*/
	primordials = {
	  ArrayIsArray(self) {
	    return Array.isArray(self)
	  },
	  ArrayPrototypeIncludes(self, el) {
	    return self.includes(el)
	  },
	  ArrayPrototypeIndexOf(self, el) {
	    return self.indexOf(el)
	  },
	  ArrayPrototypeJoin(self, sep) {
	    return self.join(sep)
	  },
	  ArrayPrototypeMap(self, fn) {
	    return self.map(fn)
	  },
	  ArrayPrototypePop(self, el) {
	    return self.pop(el)
	  },
	  ArrayPrototypePush(self, el) {
	    return self.push(el)
	  },
	  ArrayPrototypeSlice(self, start, end) {
	    return self.slice(start, end)
	  },
	  Error,
	  FunctionPrototypeCall(fn, thisArgs, ...args) {
	    return fn.call(thisArgs, ...args)
	  },
	  FunctionPrototypeSymbolHasInstance(self, instance) {
	    return Function.prototype[Symbol.hasInstance].call(self, instance)
	  },
	  MathFloor: Math.floor,
	  Number,
	  NumberIsInteger: Number.isInteger,
	  NumberIsNaN: Number.isNaN,
	  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
	  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
	  NumberParseInt: Number.parseInt,
	  ObjectDefineProperties(self, props) {
	    return Object.defineProperties(self, props)
	  },
	  ObjectDefineProperty(self, name, prop) {
	    return Object.defineProperty(self, name, prop)
	  },
	  ObjectGetOwnPropertyDescriptor(self, name) {
	    return Object.getOwnPropertyDescriptor(self, name)
	  },
	  ObjectKeys(obj) {
	    return Object.keys(obj)
	  },
	  ObjectSetPrototypeOf(target, proto) {
	    return Object.setPrototypeOf(target, proto)
	  },
	  Promise,
	  PromisePrototypeCatch(self, fn) {
	    return self.catch(fn)
	  },
	  PromisePrototypeThen(self, thenFn, catchFn) {
	    return self.then(thenFn, catchFn)
	  },
	  PromiseReject(err) {
	    return Promise.reject(err)
	  },
	  PromiseResolve(val) {
	    return Promise.resolve(val)
	  },
	  ReflectApply: Reflect.apply,
	  RegExpPrototypeTest(self, value) {
	    return self.test(value)
	  },
	  SafeSet: Set,
	  String,
	  StringPrototypeSlice(self, start, end) {
	    return self.slice(start, end)
	  },
	  StringPrototypeToLowerCase(self) {
	    return self.toLowerCase()
	  },
	  StringPrototypeToUpperCase(self) {
	    return self.toUpperCase()
	  },
	  StringPrototypeTrim(self) {
	    return self.trim()
	  },
	  Symbol,
	  SymbolFor: Symbol.for,
	  SymbolAsyncIterator: Symbol.asyncIterator,
	  SymbolHasInstance: Symbol.hasInstance,
	  SymbolIterator: Symbol.iterator,
	  SymbolDispose: Symbol.dispose || Symbol('Symbol.dispose'),
	  SymbolAsyncDispose: Symbol.asyncDispose || Symbol('Symbol.asyncDispose'),
	  TypedArrayPrototypeSet(self, buf, len) {
	    return self.set(buf, len)
	  },
	  Boolean: Boolean,
	  Uint8Array
	};
	return primordials;
}

var util = {exports: {}};

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */
const privateData = new WeakMap();

/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrappers = new WeakMap();

/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */
function pd(event) {
    const retv = privateData.get(event);
    console.assert(
        retv != null,
        "'this' is expected an Event object, but got",
        event
    );
    return retv
}

/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */
function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (
            typeof console !== "undefined" &&
            typeof console.error === "function"
        ) {
            console.error(
                "Unable to preventDefault inside passive event listener invocation.",
                data.passiveListener
            );
        }
        return
    }
    if (!data.event.cancelable) {
        return
    }

    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}

/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */
/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */
function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now(),
    });

    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });

    // Define accessors
    const keys = Object.keys(event);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}

// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */
    get type() {
        return pd(this).event.type
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get target() {
        return pd(this).eventTarget
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get currentTarget() {
        return pd(this).currentTarget
    },

    /**
     * @returns {EventTarget[]} The composed path of this event.
     */
    composedPath() {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return []
        }
        return [currentTarget]
    },

    /**
     * Constant of NONE.
     * @type {number}
     */
    get NONE() {
        return 0
    },

    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */
    get CAPTURING_PHASE() {
        return 1
    },

    /**
     * Constant of AT_TARGET.
     * @type {number}
     */
    get AT_TARGET() {
        return 2
    },

    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */
    get BUBBLING_PHASE() {
        return 3
    },

    /**
     * The target of this event.
     * @type {number}
     */
    get eventPhase() {
        return pd(this).eventPhase
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopPropagation() {
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopImmediatePropagation() {
        const data = pd(this);

        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },

    /**
     * The flag to be bubbling.
     * @type {boolean}
     */
    get bubbles() {
        return Boolean(pd(this).event.bubbles)
    },

    /**
     * The flag to be cancelable.
     * @type {boolean}
     */
    get cancelable() {
        return Boolean(pd(this).event.cancelable)
    },

    /**
     * Cancel this event.
     * @returns {void}
     */
    preventDefault() {
        setCancelFlag(pd(this));
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */
    get defaultPrevented() {
        return pd(this).canceled
    },

    /**
     * The flag to be composed.
     * @type {boolean}
     */
    get composed() {
        return Boolean(pd(this).event.composed)
    },

    /**
     * The unix time of this event.
     * @type {number}
     */
    get timeStamp() {
        return pd(this).timeStamp
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */
    get srcElement() {
        return pd(this).eventTarget
    },

    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */
    get cancelBubble() {
        return pd(this).stopped
    },
    set cancelBubble(value) {
        if (!value) {
            return
        }
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */
    get returnValue() {
        return !pd(this).canceled
    },
    set returnValue(value) {
        if (!value) {
            setCancelFlag(pd(this));
        }
    },

    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */
    initEvent() {
        // Do nothing.
    },
};

// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true,
});

// Ensure `event instanceof window.Event` is `true`.
if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
    Object.setPrototypeOf(Event.prototype, window.Event.prototype);

    // Make association for wrappers.
    wrappers.set(window.Event.prototype, Event);
}

/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */
function defineRedirectDescriptor(key) {
    return {
        get() {
            return pd(this).event[key]
        },
        set(value) {
            pd(this).event[key] = value;
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */
function defineCallDescriptor(key) {
    return {
        value() {
            const event = pd(this).event;
            return event[key].apply(event, arguments)
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */
function defineWrapper(BaseEvent, proto) {
    const keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent
    }

    /** CustomEvent */
    function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }

    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: { value: CustomEvent, configurable: true, writable: true },
    });

    // Define accessors.
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const isFunc = typeof descriptor.value === "function";
            Object.defineProperty(
                CustomEvent.prototype,
                key,
                isFunc
                    ? defineCallDescriptor(key)
                    : defineRedirectDescriptor(key)
            );
        }
    }

    return CustomEvent
}

/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */
function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event
    }

    let wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper
}

/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */
function wrapEvent(eventTarget, event) {
    const Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event)
}

/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */
function isStopped(event) {
    return pd(event).immediateStopped
}

/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */
function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}

/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */
function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}

/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */
function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}

/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */
const listenersMap = new WeakMap();

// Listener types
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;

/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */
function isObject(x) {
    return x !== null && typeof x === "object" //eslint-disable-line no-restricted-syntax
}

/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */
function getListeners(eventTarget) {
    const listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError(
            "'this' is expected an EventTarget object, but got another value."
        )
    }
    return listeners
}

/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */
function defineEventAttributeDescriptor(eventName) {
    return {
        get() {
            const listeners = getListeners(this);
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener
                }
                node = node.next;
            }
            return null
        },

        set(listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            const listeners = getListeners(this);

            // Traverse to the tail while removing old value.
            let prev = null;
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }

                node = node.next;
            }

            // Add new value.
            if (listener !== null) {
                const newNode = {
                    listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null,
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */
function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(
        eventTargetPrototype,
        `on${eventName}`,
        defineEventAttributeDescriptor(eventName)
    );
}

/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */
function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */
    function CustomEventTarget() {
        EventTarget.call(this);
    }

    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true,
        },
    });

    for (let i = 0; i < eventNames.length; ++i) {
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }

    return CustomEventTarget
}

/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */
function EventTarget() {
    /*eslint-disable consistent-return */
    if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0])
    }
    if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for (let i = 0; i < arguments.length; ++i) {
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types)
    }
    throw new TypeError("Cannot call a class as a function")
    /*eslint-enable consistent-return */
}

// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    addEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.")
        }

        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
            listener,
            listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null,
        };

        // Set it as the first node if the first node is null.
        let node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return
        }

        // Traverse to the tail while checking duplication..
        let prev = null;
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                // Should ignore duplication.
                return
            }
            prev = node;
            node = node.next;
        }

        // Add it.
        prev.next = newNode;
    },

    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    removeEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }

        const listeners = getListeners(this);
        const capture = isObject(options)
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;

        let prev = null;
        let node = listeners.get(eventName);
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return
            }

            prev = node;
            node = node.next;
        }
    },

    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */
    dispatchEvent(event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.')
        }

        // If listeners aren't registered, terminate.
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
            return true
        }

        // Since we cannot rewrite several properties, so wrap object.
        const wrappedEvent = wrapEvent(this, event);

        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        let prev = null;
        while (node != null) {
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }

            // Call this listener
            setPassiveListener(
                wrappedEvent,
                node.passive ? node.listener : null
            );
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (
                        typeof console !== "undefined" &&
                        typeof console.error === "function"
                    ) {
                        console.error(err);
                    }
                }
            } else if (
                node.listenerType !== ATTRIBUTE &&
                typeof node.listener.handleEvent === "function"
            ) {
                node.listener.handleEvent(wrappedEvent);
            }

            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break
            }

            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);

        return !wrappedEvent.defaultPrevented
    },
};

// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true,
});

// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (
    typeof window !== "undefined" &&
    typeof window.EventTarget !== "undefined"
) {
    Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */

/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */
class AbortSignal extends EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */
    constructor() {
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */
    get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
    }
}
defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */
function createAbortSignal() {
    const signal = Object.create(AbortSignal.prototype);
    EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */
function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({ type: "abort" });
}
/**
 * Aborted flag for each instances.
 */
const abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: { enumerable: true },
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal",
    });
}

/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */
class AbortController {
    /**
     * Initialize this controller.
     */
    constructor() {
        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */
    get signal() {
        return getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        abortSignal(getSignal(this));
    }
}
/**
 * Associated signals.
 */
const signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */
function getSignal(controller) {
    const signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController.prototype, {
    signal: { enumerable: true },
    abort: { enumerable: true },
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController",
    });
}

var abortController = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AbortController: AbortController,
	AbortSignal: AbortSignal,
	default: AbortController
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(abortController);

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util.exports;
	hasRequiredUtil = 1;
	(function (module) {

		const bufferModule = require$$0$4;
		const { kResistStopPropagation, SymbolDispose } = requirePrimordials();
		const AbortSignal = globalThis.AbortSignal || require$$0.AbortSignal;
		const AbortController = globalThis.AbortController || require$$0.AbortController;
		const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
		const Blob = globalThis.Blob || bufferModule.Blob;
		/* eslint-disable indent */
		const isBlob =
		  typeof Blob !== 'undefined'
		    ? function isBlob(b) {
		        // eslint-disable-next-line indent
		        return b instanceof Blob
		      }
		    : function isBlob(b) {
		        return false
		      };
		/* eslint-enable indent */

		const validateAbortSignal = (signal, name) => {
		  if (signal !== undefined && (signal === null || typeof signal !== 'object' || !('aborted' in signal))) {
		    throw new ERR_INVALID_ARG_TYPE(name, 'AbortSignal', signal)
		  }
		};
		const validateFunction = (value, name) => {
		  if (typeof value !== 'function') throw new ERR_INVALID_ARG_TYPE(name, 'Function', value)
		};

		// This is a simplified version of AggregateError
		class AggregateError extends Error {
		  constructor(errors) {
		    if (!Array.isArray(errors)) {
		      throw new TypeError(`Expected input to be an Array, got ${typeof errors}`)
		    }
		    let message = '';
		    for (let i = 0; i < errors.length; i++) {
		      message += `    ${errors[i].stack}\n`;
		    }
		    super(message);
		    this.name = 'AggregateError';
		    this.errors = errors;
		  }
		}
		module.exports = {
		  AggregateError,
		  kEmptyObject: Object.freeze({}),
		  once(callback) {
		    let called = false;
		    return function (...args) {
		      if (called) {
		        return
		      }
		      called = true;
		      callback.apply(this, args);
		    }
		  },
		  createDeferredPromise: function () {
		    let resolve;
		    let reject;

		    // eslint-disable-next-line promise/param-names
		    const promise = new Promise((res, rej) => {
		      resolve = res;
		      reject = rej;
		    });
		    return {
		      promise,
		      resolve,
		      reject
		    }
		  },
		  promisify(fn) {
		    return new Promise((resolve, reject) => {
		      fn((err, ...args) => {
		        if (err) {
		          return reject(err)
		        }
		        return resolve(...args)
		      });
		    })
		  },
		  debuglog() {
		    return function () {}
		  },
		  format(format, ...args) {
		    // Simplified version of https://nodejs.org/api/util.html#utilformatformat-args
		    return format.replace(/%([sdifj])/g, function (...[_unused, type]) {
		      const replacement = args.shift();
		      if (type === 'f') {
		        return replacement.toFixed(6)
		      } else if (type === 'j') {
		        return JSON.stringify(replacement)
		      } else if (type === 's' && typeof replacement === 'object') {
		        const ctor = replacement.constructor !== Object ? replacement.constructor.name : '';
		        return `${ctor} {}`.trim()
		      } else {
		        return replacement.toString()
		      }
		    })
		  },
		  inspect(value) {
		    // Vastly simplified version of https://nodejs.org/api/util.html#utilinspectobject-options
		    switch (typeof value) {
		      case 'string':
		        if (value.includes("'")) {
		          if (!value.includes('"')) {
		            return `"${value}"`
		          } else if (!value.includes('`') && !value.includes('${')) {
		            return `\`${value}\``
		          }
		        }
		        return `'${value}'`
		      case 'number':
		        if (isNaN(value)) {
		          return 'NaN'
		        } else if (Object.is(value, -0)) {
		          return String(value)
		        }
		        return value
		      case 'bigint':
		        return `${String(value)}n`
		      case 'boolean':
		      case 'undefined':
		        return String(value)
		      case 'object':
		        return '{}'
		    }
		  },
		  types: {
		    isAsyncFunction(fn) {
		      return fn instanceof AsyncFunction
		    },
		    isArrayBufferView(arr) {
		      return ArrayBuffer.isView(arr)
		    }
		  },
		  isBlob,
		  deprecate(fn, message) {
		    return fn
		  },
		  addAbortListener:
		    require$$2$1.addAbortListener ||
		    function addAbortListener(signal, listener) {
		      if (signal === undefined) {
		        throw new ERR_INVALID_ARG_TYPE('signal', 'AbortSignal', signal)
		      }
		      validateAbortSignal(signal, 'signal');
		      validateFunction(listener, 'listener');
		      let removeEventListener;
		      if (signal.aborted) {
		        queueMicrotask(() => listener());
		      } else {
		        signal.addEventListener('abort', listener, {
		          __proto__: null,
		          once: true,
		          [kResistStopPropagation]: true
		        });
		        removeEventListener = () => {
		          signal.removeEventListener('abort', listener);
		        };
		      }
		      return {
		        __proto__: null,
		        [SymbolDispose]() {
		          var _removeEventListener
		          ;(_removeEventListener = removeEventListener) === null || _removeEventListener === undefined
		            ? undefined
		            : _removeEventListener();
		        }
		      }
		    },
		  AbortSignalAny:
		    AbortSignal.any ||
		    function AbortSignalAny(signals) {
		      // Fast path if there is only one signal.
		      if (signals.length === 1) {
		        return signals[0]
		      }
		      const ac = new AbortController();
		      const abort = () => ac.abort();
		      signals.forEach((signal) => {
		        validateAbortSignal(signal, 'signals');
		        signal.addEventListener('abort', abort, {
		          once: true
		        });
		      });
		      ac.signal.addEventListener(
		        'abort',
		        () => {
		          signals.forEach((signal) => signal.removeEventListener('abort', abort));
		        },
		        {
		          once: true
		        }
		      );
		      return ac.signal
		    }
		};
		module.exports.promisify.custom = Symbol.for('nodejs.util.promisify.custom'); 
	} (util));
	return util.exports;
}

var operators = {};

var errors$1;
var hasRequiredErrors$1;

function requireErrors$1 () {
	if (hasRequiredErrors$1) return errors$1;
	hasRequiredErrors$1 = 1;

	const { format, inspect, AggregateError: CustomAggregateError } = requireUtil();

	/*
	  This file is a reduced and adapted version of the main lib/internal/errors.js file defined at

	  https://github.com/nodejs/node/blob/master/lib/internal/errors.js

	  Don't try to replace with the original file and keep it up to date (starting from E(...) definitions)
	  with the upstream file.
	*/

	const AggregateError = globalThis.AggregateError || CustomAggregateError;
	const kIsNodeError = Symbol('kIsNodeError');
	const kTypes = [
	  'string',
	  'function',
	  'number',
	  'object',
	  // Accept 'Function' and 'Object' as alternative to the lower cased version.
	  'Function',
	  'Object',
	  'boolean',
	  'bigint',
	  'symbol'
	];
	const classRegExp = /^([A-Z][a-z0-9]*)+$/;
	const nodeInternalPrefix = '__node_internal_';
	const codes = {};
	function assert(value, message) {
	  if (!value) {
	    throw new codes.ERR_INTERNAL_ASSERTION(message)
	  }
	}

	// Only use this for integers! Decimal numbers do not work with this function.
	function addNumericalSeparator(val) {
	  let res = '';
	  let i = val.length;
	  const start = val[0] === '-' ? 1 : 0;
	  for (; i >= start + 4; i -= 3) {
	    res = `_${val.slice(i - 3, i)}${res}`;
	  }
	  return `${val.slice(0, i)}${res}`
	}
	function getMessage(key, msg, args) {
	  if (typeof msg === 'function') {
	    assert(
	      msg.length <= args.length,
	      // Default options do not count.
	      `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`
	    );
	    return msg(...args)
	  }
	  const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
	  assert(
	    expectedLength === args.length,
	    `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`
	  );
	  if (args.length === 0) {
	    return msg
	  }
	  return format(msg, ...args)
	}
	function E(code, message, Base) {
	  if (!Base) {
	    Base = Error;
	  }
	  class NodeError extends Base {
	    constructor(...args) {
	      super(getMessage(code, message, args));
	    }
	    toString() {
	      return `${this.name} [${code}]: ${this.message}`
	    }
	  }
	  Object.defineProperties(NodeError.prototype, {
	    name: {
	      value: Base.name,
	      writable: true,
	      enumerable: false,
	      configurable: true
	    },
	    toString: {
	      value() {
	        return `${this.name} [${code}]: ${this.message}`
	      },
	      writable: true,
	      enumerable: false,
	      configurable: true
	    }
	  });
	  NodeError.prototype.code = code;
	  NodeError.prototype[kIsNodeError] = true;
	  codes[code] = NodeError;
	}
	function hideStackFrames(fn) {
	  // We rename the functions that will be hidden to cut off the stacktrace
	  // at the outermost one
	  const hidden = nodeInternalPrefix + fn.name;
	  Object.defineProperty(fn, 'name', {
	    value: hidden
	  });
	  return fn
	}
	function aggregateTwoErrors(innerError, outerError) {
	  if (innerError && outerError && innerError !== outerError) {
	    if (Array.isArray(outerError.errors)) {
	      // If `outerError` is already an `AggregateError`.
	      outerError.errors.push(innerError);
	      return outerError
	    }
	    const err = new AggregateError([outerError, innerError], outerError.message);
	    err.code = outerError.code;
	    return err
	  }
	  return innerError || outerError
	}
	class AbortError extends Error {
	  constructor(message = 'The operation was aborted', options = undefined) {
	    if (options !== undefined && typeof options !== 'object') {
	      throw new codes.ERR_INVALID_ARG_TYPE('options', 'Object', options)
	    }
	    super(message, options);
	    this.code = 'ABORT_ERR';
	    this.name = 'AbortError';
	  }
	}
	E('ERR_ASSERTION', '%s', Error);
	E(
	  'ERR_INVALID_ARG_TYPE',
	  (name, expected, actual) => {
	    assert(typeof name === 'string', "'name' must be a string");
	    if (!Array.isArray(expected)) {
	      expected = [expected];
	    }
	    let msg = 'The ';
	    if (name.endsWith(' argument')) {
	      // For cases like 'first argument'
	      msg += `${name} `;
	    } else {
	      msg += `"${name}" ${name.includes('.') ? 'property' : 'argument'} `;
	    }
	    msg += 'must be ';
	    const types = [];
	    const instances = [];
	    const other = [];
	    for (const value of expected) {
	      assert(typeof value === 'string', 'All expected entries have to be of type string');
	      if (kTypes.includes(value)) {
	        types.push(value.toLowerCase());
	      } else if (classRegExp.test(value)) {
	        instances.push(value);
	      } else {
	        assert(value !== 'object', 'The value "object" should be written as "Object"');
	        other.push(value);
	      }
	    }

	    // Special handle `object` in case other instances are allowed to outline
	    // the differences between each other.
	    if (instances.length > 0) {
	      const pos = types.indexOf('object');
	      if (pos !== -1) {
	        types.splice(types, pos, 1);
	        instances.push('Object');
	      }
	    }
	    if (types.length > 0) {
	      switch (types.length) {
	        case 1:
	          msg += `of type ${types[0]}`;
	          break
	        case 2:
	          msg += `one of type ${types[0]} or ${types[1]}`;
	          break
	        default: {
	          const last = types.pop();
	          msg += `one of type ${types.join(', ')}, or ${last}`;
	        }
	      }
	      if (instances.length > 0 || other.length > 0) {
	        msg += ' or ';
	      }
	    }
	    if (instances.length > 0) {
	      switch (instances.length) {
	        case 1:
	          msg += `an instance of ${instances[0]}`;
	          break
	        case 2:
	          msg += `an instance of ${instances[0]} or ${instances[1]}`;
	          break
	        default: {
	          const last = instances.pop();
	          msg += `an instance of ${instances.join(', ')}, or ${last}`;
	        }
	      }
	      if (other.length > 0) {
	        msg += ' or ';
	      }
	    }
	    switch (other.length) {
	      case 0:
	        break
	      case 1:
	        if (other[0].toLowerCase() !== other[0]) {
	          msg += 'an ';
	        }
	        msg += `${other[0]}`;
	        break
	      case 2:
	        msg += `one of ${other[0]} or ${other[1]}`;
	        break
	      default: {
	        const last = other.pop();
	        msg += `one of ${other.join(', ')}, or ${last}`;
	      }
	    }
	    if (actual == null) {
	      msg += `. Received ${actual}`;
	    } else if (typeof actual === 'function' && actual.name) {
	      msg += `. Received function ${actual.name}`;
	    } else if (typeof actual === 'object') {
	      var _actual$constructor;
	      if (
	        (_actual$constructor = actual.constructor) !== null &&
	        _actual$constructor !== undefined &&
	        _actual$constructor.name
	      ) {
	        msg += `. Received an instance of ${actual.constructor.name}`;
	      } else {
	        const inspected = inspect(actual, {
	          depth: -1
	        });
	        msg += `. Received ${inspected}`;
	      }
	    } else {
	      let inspected = inspect(actual, {
	        colors: false
	      });
	      if (inspected.length > 25) {
	        inspected = `${inspected.slice(0, 25)}...`;
	      }
	      msg += `. Received type ${typeof actual} (${inspected})`;
	    }
	    return msg
	  },
	  TypeError
	);
	E(
	  'ERR_INVALID_ARG_VALUE',
	  (name, value, reason = 'is invalid') => {
	    let inspected = inspect(value);
	    if (inspected.length > 128) {
	      inspected = inspected.slice(0, 128) + '...';
	    }
	    const type = name.includes('.') ? 'property' : 'argument';
	    return `The ${type} '${name}' ${reason}. Received ${inspected}`
	  },
	  TypeError
	);
	E(
	  'ERR_INVALID_RETURN_VALUE',
	  (input, name, value) => {
	    var _value$constructor;
	    const type =
	      value !== null &&
	      value !== undefined &&
	      (_value$constructor = value.constructor) !== null &&
	      _value$constructor !== undefined &&
	      _value$constructor.name
	        ? `instance of ${value.constructor.name}`
	        : `type ${typeof value}`;
	    return `Expected ${input} to be returned from the "${name}"` + ` function but got ${type}.`
	  },
	  TypeError
	);
	E(
	  'ERR_MISSING_ARGS',
	  (...args) => {
	    assert(args.length > 0, 'At least one arg needs to be specified');
	    let msg;
	    const len = args.length;
	    args = (Array.isArray(args) ? args : [args]).map((a) => `"${a}"`).join(' or ');
	    switch (len) {
	      case 1:
	        msg += `The ${args[0]} argument`;
	        break
	      case 2:
	        msg += `The ${args[0]} and ${args[1]} arguments`;
	        break
	      default:
	        {
	          const last = args.pop();
	          msg += `The ${args.join(', ')}, and ${last} arguments`;
	        }
	        break
	    }
	    return `${msg} must be specified`
	  },
	  TypeError
	);
	E(
	  'ERR_OUT_OF_RANGE',
	  (str, range, input) => {
	    assert(range, 'Missing "range" argument');
	    let received;
	    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
	      received = addNumericalSeparator(String(input));
	    } else if (typeof input === 'bigint') {
	      received = String(input);
	      if (input > 2n ** 32n || input < -(2n ** 32n)) {
	        received = addNumericalSeparator(received);
	      }
	      received += 'n';
	    } else {
	      received = inspect(input);
	    }
	    return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`
	  },
	  RangeError
	);
	E('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times', Error);
	E('ERR_METHOD_NOT_IMPLEMENTED', 'The %s method is not implemented', Error);
	E('ERR_STREAM_ALREADY_FINISHED', 'Cannot call %s after a stream was finished', Error);
	E('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable', Error);
	E('ERR_STREAM_DESTROYED', 'Cannot call %s after a stream was destroyed', Error);
	E('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
	E('ERR_STREAM_PREMATURE_CLOSE', 'Premature close', Error);
	E('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF', Error);
	E('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event', Error);
	E('ERR_STREAM_WRITE_AFTER_END', 'write after end', Error);
	E('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s', TypeError);
	errors$1 = {
	  AbortError,
	  aggregateTwoErrors: hideStackFrames(aggregateTwoErrors),
	  hideStackFrames,
	  codes
	};
	return errors$1;
}

/* eslint jsdoc/require-jsdoc: "error" */

var validators;
var hasRequiredValidators;

function requireValidators () {
	if (hasRequiredValidators) return validators;
	hasRequiredValidators = 1;

	const {
	  ArrayIsArray,
	  ArrayPrototypeIncludes,
	  ArrayPrototypeJoin,
	  ArrayPrototypeMap,
	  NumberIsInteger,
	  NumberIsNaN,
	  NumberMAX_SAFE_INTEGER,
	  NumberMIN_SAFE_INTEGER,
	  NumberParseInt,
	  ObjectPrototypeHasOwnProperty,
	  RegExpPrototypeExec,
	  String,
	  StringPrototypeToUpperCase,
	  StringPrototypeTrim
	} = requirePrimordials();
	const {
	  hideStackFrames,
	  codes: { ERR_SOCKET_BAD_PORT, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_SIGNAL }
	} = requireErrors$1();
	const { normalizeEncoding } = requireUtil();
	const { isAsyncFunction, isArrayBufferView } = requireUtil().types;
	const signals = {};

	/**
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isInt32(value) {
	  return value === (value | 0)
	}

	/**
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isUint32(value) {
	  return value === value >>> 0
	}
	const octalReg = /^[0-7]+$/;
	const modeDesc = 'must be a 32-bit unsigned integer or an octal string';

	/**
	 * Parse and validate values that will be converted into mode_t (the S_*
	 * constants). Only valid numbers and octal strings are allowed. They could be
	 * converted to 32-bit unsigned integers or non-negative signed integers in the
	 * C++ land, but any value higher than 0o777 will result in platform-specific
	 * behaviors.
	 * @param {*} value Values to be validated
	 * @param {string} name Name of the argument
	 * @param {number} [def] If specified, will be returned for invalid values
	 * @returns {number}
	 */
	function parseFileMode(value, name, def) {
	  if (typeof value === 'undefined') {
	    value = def;
	  }
	  if (typeof value === 'string') {
	    if (RegExpPrototypeExec(octalReg, value) === null) {
	      throw new ERR_INVALID_ARG_VALUE(name, value, modeDesc)
	    }
	    value = NumberParseInt(value, 8);
	  }
	  validateUint32(value, name);
	  return value
	}

	/**
	 * @callback validateInteger
	 * @param {*} value
	 * @param {string} name
	 * @param {number} [min]
	 * @param {number} [max]
	 * @returns {asserts value is number}
	 */

	/** @type {validateInteger} */
	const validateInteger = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
	  if (typeof value !== 'number') throw new ERR_INVALID_ARG_TYPE(name, 'number', value)
	  if (!NumberIsInteger(value)) throw new ERR_OUT_OF_RANGE(name, 'an integer', value)
	  if (value < min || value > max) throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
	});

	/**
	 * @callback validateInt32
	 * @param {*} value
	 * @param {string} name
	 * @param {number} [min]
	 * @param {number} [max]
	 * @returns {asserts value is number}
	 */

	/** @type {validateInt32} */
	const validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
	  // The defaults for min and max correspond to the limits of 32-bit integers.
	  if (typeof value !== 'number') {
	    throw new ERR_INVALID_ARG_TYPE(name, 'number', value)
	  }
	  if (!NumberIsInteger(value)) {
	    throw new ERR_OUT_OF_RANGE(name, 'an integer', value)
	  }
	  if (value < min || value > max) {
	    throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
	  }
	});

	/**
	 * @callback validateUint32
	 * @param {*} value
	 * @param {string} name
	 * @param {number|boolean} [positive=false]
	 * @returns {asserts value is number}
	 */

	/** @type {validateUint32} */
	const validateUint32 = hideStackFrames((value, name, positive = false) => {
	  if (typeof value !== 'number') {
	    throw new ERR_INVALID_ARG_TYPE(name, 'number', value)
	  }
	  if (!NumberIsInteger(value)) {
	    throw new ERR_OUT_OF_RANGE(name, 'an integer', value)
	  }
	  const min = positive ? 1 : 0;
	  // 2 ** 32 === 4294967296
	  const max = 4294967295;
	  if (value < min || value > max) {
	    throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value)
	  }
	});

	/**
	 * @callback validateString
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is string}
	 */

	/** @type {validateString} */
	function validateString(value, name) {
	  if (typeof value !== 'string') throw new ERR_INVALID_ARG_TYPE(name, 'string', value)
	}

	/**
	 * @callback validateNumber
	 * @param {*} value
	 * @param {string} name
	 * @param {number} [min]
	 * @param {number} [max]
	 * @returns {asserts value is number}
	 */

	/** @type {validateNumber} */
	function validateNumber(value, name, min = undefined, max) {
	  if (typeof value !== 'number') throw new ERR_INVALID_ARG_TYPE(name, 'number', value)
	  if (
	    (min != null && value < min) ||
	    (max != null && value > max) ||
	    ((min != null || max != null) && NumberIsNaN(value))
	  ) {
	    throw new ERR_OUT_OF_RANGE(
	      name,
	      `${min != null ? `>= ${min}` : ''}${min != null && max != null ? ' && ' : ''}${max != null ? `<= ${max}` : ''}`,
	      value
	    )
	  }
	}

	/**
	 * @callback validateOneOf
	 * @template T
	 * @param {T} value
	 * @param {string} name
	 * @param {T[]} oneOf
	 */

	/** @type {validateOneOf} */
	const validateOneOf = hideStackFrames((value, name, oneOf) => {
	  if (!ArrayPrototypeIncludes(oneOf, value)) {
	    const allowed = ArrayPrototypeJoin(
	      ArrayPrototypeMap(oneOf, (v) => (typeof v === 'string' ? `'${v}'` : String(v))),
	      ', '
	    );
	    const reason = 'must be one of: ' + allowed;
	    throw new ERR_INVALID_ARG_VALUE(name, value, reason)
	  }
	});

	/**
	 * @callback validateBoolean
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is boolean}
	 */

	/** @type {validateBoolean} */
	function validateBoolean(value, name) {
	  if (typeof value !== 'boolean') throw new ERR_INVALID_ARG_TYPE(name, 'boolean', value)
	}

	/**
	 * @param {any} options
	 * @param {string} key
	 * @param {boolean} defaultValue
	 * @returns {boolean}
	 */
	function getOwnPropertyValueOrDefault(options, key, defaultValue) {
	  return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key]
	}

	/**
	 * @callback validateObject
	 * @param {*} value
	 * @param {string} name
	 * @param {{
	 *   allowArray?: boolean,
	 *   allowFunction?: boolean,
	 *   nullable?: boolean
	 * }} [options]
	 */

	/** @type {validateObject} */
	const validateObject = hideStackFrames((value, name, options = null) => {
	  const allowArray = getOwnPropertyValueOrDefault(options, 'allowArray', false);
	  const allowFunction = getOwnPropertyValueOrDefault(options, 'allowFunction', false);
	  const nullable = getOwnPropertyValueOrDefault(options, 'nullable', false);
	  if (
	    (!nullable && value === null) ||
	    (!allowArray && ArrayIsArray(value)) ||
	    (typeof value !== 'object' && (!allowFunction || typeof value !== 'function'))
	  ) {
	    throw new ERR_INVALID_ARG_TYPE(name, 'Object', value)
	  }
	});

	/**
	 * @callback validateDictionary - We are using the Web IDL Standard definition
	 *                                of "dictionary" here, which means any value
	 *                                whose Type is either Undefined, Null, or
	 *                                Object (which includes functions).
	 * @param {*} value
	 * @param {string} name
	 * @see https://webidl.spec.whatwg.org/#es-dictionary
	 * @see https://tc39.es/ecma262/#table-typeof-operator-results
	 */

	/** @type {validateDictionary} */
	const validateDictionary = hideStackFrames((value, name) => {
	  if (value != null && typeof value !== 'object' && typeof value !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE(name, 'a dictionary', value)
	  }
	});

	/**
	 * @callback validateArray
	 * @param {*} value
	 * @param {string} name
	 * @param {number} [minLength]
	 * @returns {asserts value is any[]}
	 */

	/** @type {validateArray} */
	const validateArray = hideStackFrames((value, name, minLength = 0) => {
	  if (!ArrayIsArray(value)) {
	    throw new ERR_INVALID_ARG_TYPE(name, 'Array', value)
	  }
	  if (value.length < minLength) {
	    const reason = `must be longer than ${minLength}`;
	    throw new ERR_INVALID_ARG_VALUE(name, value, reason)
	  }
	});

	/**
	 * @callback validateStringArray
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is string[]}
	 */

	/** @type {validateStringArray} */
	function validateStringArray(value, name) {
	  validateArray(value, name);
	  for (let i = 0; i < value.length; i++) {
	    validateString(value[i], `${name}[${i}]`);
	  }
	}

	/**
	 * @callback validateBooleanArray
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is boolean[]}
	 */

	/** @type {validateBooleanArray} */
	function validateBooleanArray(value, name) {
	  validateArray(value, name);
	  for (let i = 0; i < value.length; i++) {
	    validateBoolean(value[i], `${name}[${i}]`);
	  }
	}

	/**
	 * @callback validateAbortSignalArray
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is AbortSignal[]}
	 */

	/** @type {validateAbortSignalArray} */
	function validateAbortSignalArray(value, name) {
	  validateArray(value, name);
	  for (let i = 0; i < value.length; i++) {
	    const signal = value[i];
	    const indexedName = `${name}[${i}]`;
	    if (signal == null) {
	      throw new ERR_INVALID_ARG_TYPE(indexedName, 'AbortSignal', signal)
	    }
	    validateAbortSignal(signal, indexedName);
	  }
	}

	/**
	 * @param {*} signal
	 * @param {string} [name='signal']
	 * @returns {asserts signal is keyof signals}
	 */
	function validateSignalName(signal, name = 'signal') {
	  validateString(signal, name);
	  if (signals[signal] === undefined) {
	    if (signals[StringPrototypeToUpperCase(signal)] !== undefined) {
	      throw new ERR_UNKNOWN_SIGNAL(signal + ' (signals must use all capital letters)')
	    }
	    throw new ERR_UNKNOWN_SIGNAL(signal)
	  }
	}

	/**
	 * @callback validateBuffer
	 * @param {*} buffer
	 * @param {string} [name='buffer']
	 * @returns {asserts buffer is ArrayBufferView}
	 */

	/** @type {validateBuffer} */
	const validateBuffer = hideStackFrames((buffer, name = 'buffer') => {
	  if (!isArrayBufferView(buffer)) {
	    throw new ERR_INVALID_ARG_TYPE(name, ['Buffer', 'TypedArray', 'DataView'], buffer)
	  }
	});

	/**
	 * @param {string} data
	 * @param {string} encoding
	 */
	function validateEncoding(data, encoding) {
	  const normalizedEncoding = normalizeEncoding(encoding);
	  const length = data.length;
	  if (normalizedEncoding === 'hex' && length % 2 !== 0) {
	    throw new ERR_INVALID_ARG_VALUE('encoding', encoding, `is invalid for data of length ${length}`)
	  }
	}

	/**
	 * Check that the port number is not NaN when coerced to a number,
	 * is an integer and that it falls within the legal range of port numbers.
	 * @param {*} port
	 * @param {string} [name='Port']
	 * @param {boolean} [allowZero=true]
	 * @returns {number}
	 */
	function validatePort(port, name = 'Port', allowZero = true) {
	  if (
	    (typeof port !== 'number' && typeof port !== 'string') ||
	    (typeof port === 'string' && StringPrototypeTrim(port).length === 0) ||
	    +port !== +port >>> 0 ||
	    port > 0xffff ||
	    (port === 0 && !allowZero)
	  ) {
	    throw new ERR_SOCKET_BAD_PORT(name, port, allowZero)
	  }
	  return port | 0
	}

	/**
	 * @callback validateAbortSignal
	 * @param {*} signal
	 * @param {string} name
	 */

	/** @type {validateAbortSignal} */
	const validateAbortSignal = hideStackFrames((signal, name) => {
	  if (signal !== undefined && (signal === null || typeof signal !== 'object' || !('aborted' in signal))) {
	    throw new ERR_INVALID_ARG_TYPE(name, 'AbortSignal', signal)
	  }
	});

	/**
	 * @callback validateFunction
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is Function}
	 */

	/** @type {validateFunction} */
	const validateFunction = hideStackFrames((value, name) => {
	  if (typeof value !== 'function') throw new ERR_INVALID_ARG_TYPE(name, 'Function', value)
	});

	/**
	 * @callback validatePlainFunction
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is Function}
	 */

	/** @type {validatePlainFunction} */
	const validatePlainFunction = hideStackFrames((value, name) => {
	  if (typeof value !== 'function' || isAsyncFunction(value)) throw new ERR_INVALID_ARG_TYPE(name, 'Function', value)
	});

	/**
	 * @callback validateUndefined
	 * @param {*} value
	 * @param {string} name
	 * @returns {asserts value is undefined}
	 */

	/** @type {validateUndefined} */
	const validateUndefined = hideStackFrames((value, name) => {
	  if (value !== undefined) throw new ERR_INVALID_ARG_TYPE(name, 'undefined', value)
	});

	/**
	 * @template T
	 * @param {T} value
	 * @param {string} name
	 * @param {T[]} union
	 */
	function validateUnion(value, name, union) {
	  if (!ArrayPrototypeIncludes(union, value)) {
	    throw new ERR_INVALID_ARG_TYPE(name, `('${ArrayPrototypeJoin(union, '|')}')`, value)
	  }
	}

	/*
	  The rules for the Link header field are described here:
	  https://www.rfc-editor.org/rfc/rfc8288.html#section-3

	  This regex validates any string surrounded by angle brackets
	  (not necessarily a valid URI reference) followed by zero or more
	  link-params separated by semicolons.
	*/
	const linkValueRegExp = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;

	/**
	 * @param {any} value
	 * @param {string} name
	 */
	function validateLinkHeaderFormat(value, name) {
	  if (typeof value === 'undefined' || !RegExpPrototypeExec(linkValueRegExp, value)) {
	    throw new ERR_INVALID_ARG_VALUE(
	      name,
	      value,
	      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
	    )
	  }
	}

	/**
	 * @param {any} hints
	 * @return {string}
	 */
	function validateLinkHeaderValue(hints) {
	  if (typeof hints === 'string') {
	    validateLinkHeaderFormat(hints, 'hints');
	    return hints
	  } else if (ArrayIsArray(hints)) {
	    const hintsLength = hints.length;
	    let result = '';
	    if (hintsLength === 0) {
	      return result
	    }
	    for (let i = 0; i < hintsLength; i++) {
	      const link = hints[i];
	      validateLinkHeaderFormat(link, 'hints');
	      result += link;
	      if (i !== hintsLength - 1) {
	        result += ', ';
	      }
	    }
	    return result
	  }
	  throw new ERR_INVALID_ARG_VALUE(
	    'hints',
	    hints,
	    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
	  )
	}
	validators = {
	  isInt32,
	  isUint32,
	  parseFileMode,
	  validateArray,
	  validateStringArray,
	  validateBooleanArray,
	  validateAbortSignalArray,
	  validateBoolean,
	  validateBuffer,
	  validateDictionary,
	  validateEncoding,
	  validateFunction,
	  validateInt32,
	  validateInteger,
	  validateNumber,
	  validateObject,
	  validateOneOf,
	  validatePlainFunction,
	  validatePort,
	  validateSignalName,
	  validateString,
	  validateUint32,
	  validateUndefined,
	  validateUnion,
	  validateAbortSignal,
	  validateLinkHeaderValue
	};
	return validators;
}

var endOfStream$1 = {exports: {}};

var process$1;
var hasRequiredProcess;

function requireProcess () {
	if (hasRequiredProcess) return process$1;
	hasRequiredProcess = 1;
	// for now just expose the builtin process global from node.js
	process$1 = commonjsGlobal.process;
	return process$1;
}

var utils;
var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;

	const { SymbolAsyncIterator, SymbolIterator, SymbolFor } = requirePrimordials();

	// We need to use SymbolFor to make these globally available
	// for interopt with readable-stream, i.e. readable-stream
	// and node core needs to be able to read/write private state
	// from each other for proper interoperability.
	const kIsDestroyed = SymbolFor('nodejs.stream.destroyed');
	const kIsErrored = SymbolFor('nodejs.stream.errored');
	const kIsReadable = SymbolFor('nodejs.stream.readable');
	const kIsWritable = SymbolFor('nodejs.stream.writable');
	const kIsDisturbed = SymbolFor('nodejs.stream.disturbed');
	const kIsClosedPromise = SymbolFor('nodejs.webstream.isClosedPromise');
	const kControllerErrorFunction = SymbolFor('nodejs.webstream.controllerErrorFunction');
	function isReadableNodeStream(obj, strict = false) {
	  var _obj$_readableState;
	  return !!(
	    (
	      obj &&
	      typeof obj.pipe === 'function' &&
	      typeof obj.on === 'function' &&
	      (!strict || (typeof obj.pause === 'function' && typeof obj.resume === 'function')) &&
	      (!obj._writableState ||
	        ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === undefined
	          ? undefined
	          : _obj$_readableState.readable) !== false) &&
	      // Duplex
	      (!obj._writableState || obj._readableState)
	    ) // Writable has .pipe.
	  )
	}

	function isWritableNodeStream(obj) {
	  var _obj$_writableState;
	  return !!(
	    (
	      obj &&
	      typeof obj.write === 'function' &&
	      typeof obj.on === 'function' &&
	      (!obj._readableState ||
	        ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === undefined
	          ? undefined
	          : _obj$_writableState.writable) !== false)
	    ) // Duplex
	  )
	}

	function isDuplexNodeStream(obj) {
	  return !!(
	    obj &&
	    typeof obj.pipe === 'function' &&
	    obj._readableState &&
	    typeof obj.on === 'function' &&
	    typeof obj.write === 'function'
	  )
	}
	function isNodeStream(obj) {
	  return (
	    obj &&
	    (obj._readableState ||
	      obj._writableState ||
	      (typeof obj.write === 'function' && typeof obj.on === 'function') ||
	      (typeof obj.pipe === 'function' && typeof obj.on === 'function'))
	  )
	}
	function isReadableStream(obj) {
	  return !!(
	    obj &&
	    !isNodeStream(obj) &&
	    typeof obj.pipeThrough === 'function' &&
	    typeof obj.getReader === 'function' &&
	    typeof obj.cancel === 'function'
	  )
	}
	function isWritableStream(obj) {
	  return !!(obj && !isNodeStream(obj) && typeof obj.getWriter === 'function' && typeof obj.abort === 'function')
	}
	function isTransformStream(obj) {
	  return !!(obj && !isNodeStream(obj) && typeof obj.readable === 'object' && typeof obj.writable === 'object')
	}
	function isWebStream(obj) {
	  return isReadableStream(obj) || isWritableStream(obj) || isTransformStream(obj)
	}
	function isIterable(obj, isAsync) {
	  if (obj == null) return false
	  if (isAsync === true) return typeof obj[SymbolAsyncIterator] === 'function'
	  if (isAsync === false) return typeof obj[SymbolIterator] === 'function'
	  return typeof obj[SymbolAsyncIterator] === 'function' || typeof obj[SymbolIterator] === 'function'
	}
	function isDestroyed(stream) {
	  if (!isNodeStream(stream)) return null
	  const wState = stream._writableState;
	  const rState = stream._readableState;
	  const state = wState || rState;
	  return !!(stream.destroyed || stream[kIsDestroyed] || (state !== null && state !== undefined && state.destroyed))
	}

	// Have been end():d.
	function isWritableEnded(stream) {
	  if (!isWritableNodeStream(stream)) return null
	  if (stream.writableEnded === true) return true
	  const wState = stream._writableState;
	  if (wState !== null && wState !== undefined && wState.errored) return false
	  if (typeof (wState === null || wState === undefined ? undefined : wState.ended) !== 'boolean') return null
	  return wState.ended
	}

	// Have emitted 'finish'.
	function isWritableFinished(stream, strict) {
	  if (!isWritableNodeStream(stream)) return null
	  if (stream.writableFinished === true) return true
	  const wState = stream._writableState;
	  if (wState !== null && wState !== undefined && wState.errored) return false
	  if (typeof (wState === null || wState === undefined ? undefined : wState.finished) !== 'boolean') return null
	  return !!(wState.finished || (strict === false && wState.ended === true && wState.length === 0))
	}

	// Have been push(null):d.
	function isReadableEnded(stream) {
	  if (!isReadableNodeStream(stream)) return null
	  if (stream.readableEnded === true) return true
	  const rState = stream._readableState;
	  if (!rState || rState.errored) return false
	  if (typeof (rState === null || rState === undefined ? undefined : rState.ended) !== 'boolean') return null
	  return rState.ended
	}

	// Have emitted 'end'.
	function isReadableFinished(stream, strict) {
	  if (!isReadableNodeStream(stream)) return null
	  const rState = stream._readableState;
	  if (rState !== null && rState !== undefined && rState.errored) return false
	  if (typeof (rState === null || rState === undefined ? undefined : rState.endEmitted) !== 'boolean') return null
	  return !!(rState.endEmitted || (strict === false && rState.ended === true && rState.length === 0))
	}
	function isReadable(stream) {
	  if (stream && stream[kIsReadable] != null) return stream[kIsReadable]
	  if (typeof (stream === null || stream === undefined ? undefined : stream.readable) !== 'boolean') return null
	  if (isDestroyed(stream)) return false
	  return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream)
	}
	function isWritable(stream) {
	  if (stream && stream[kIsWritable] != null) return stream[kIsWritable]
	  if (typeof (stream === null || stream === undefined ? undefined : stream.writable) !== 'boolean') return null
	  if (isDestroyed(stream)) return false
	  return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream)
	}
	function isFinished(stream, opts) {
	  if (!isNodeStream(stream)) {
	    return null
	  }
	  if (isDestroyed(stream)) {
	    return true
	  }
	  if ((opts === null || opts === undefined ? undefined : opts.readable) !== false && isReadable(stream)) {
	    return false
	  }
	  if ((opts === null || opts === undefined ? undefined : opts.writable) !== false && isWritable(stream)) {
	    return false
	  }
	  return true
	}
	function isWritableErrored(stream) {
	  var _stream$_writableStat, _stream$_writableStat2;
	  if (!isNodeStream(stream)) {
	    return null
	  }
	  if (stream.writableErrored) {
	    return stream.writableErrored
	  }
	  return (_stream$_writableStat =
	    (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === undefined
	      ? undefined
	      : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== undefined
	    ? _stream$_writableStat
	    : null
	}
	function isReadableErrored(stream) {
	  var _stream$_readableStat, _stream$_readableStat2;
	  if (!isNodeStream(stream)) {
	    return null
	  }
	  if (stream.readableErrored) {
	    return stream.readableErrored
	  }
	  return (_stream$_readableStat =
	    (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === undefined
	      ? undefined
	      : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== undefined
	    ? _stream$_readableStat
	    : null
	}
	function isClosed(stream) {
	  if (!isNodeStream(stream)) {
	    return null
	  }
	  if (typeof stream.closed === 'boolean') {
	    return stream.closed
	  }
	  const wState = stream._writableState;
	  const rState = stream._readableState;
	  if (
	    typeof (wState === null || wState === undefined ? undefined : wState.closed) === 'boolean' ||
	    typeof (rState === null || rState === undefined ? undefined : rState.closed) === 'boolean'
	  ) {
	    return (
	      (wState === null || wState === undefined ? undefined : wState.closed) ||
	      (rState === null || rState === undefined ? undefined : rState.closed)
	    )
	  }
	  if (typeof stream._closed === 'boolean' && isOutgoingMessage(stream)) {
	    return stream._closed
	  }
	  return null
	}
	function isOutgoingMessage(stream) {
	  return (
	    typeof stream._closed === 'boolean' &&
	    typeof stream._defaultKeepAlive === 'boolean' &&
	    typeof stream._removedConnection === 'boolean' &&
	    typeof stream._removedContLen === 'boolean'
	  )
	}
	function isServerResponse(stream) {
	  return typeof stream._sent100 === 'boolean' && isOutgoingMessage(stream)
	}
	function isServerRequest(stream) {
	  var _stream$req;
	  return (
	    typeof stream._consuming === 'boolean' &&
	    typeof stream._dumped === 'boolean' &&
	    ((_stream$req = stream.req) === null || _stream$req === undefined ? undefined : _stream$req.upgradeOrConnect) ===
	      undefined
	  )
	}
	function willEmitClose(stream) {
	  if (!isNodeStream(stream)) return null
	  const wState = stream._writableState;
	  const rState = stream._readableState;
	  const state = wState || rState;
	  return (
	    (!state && isServerResponse(stream)) || !!(state && state.autoDestroy && state.emitClose && state.closed === false)
	  )
	}
	function isDisturbed(stream) {
	  var _stream$kIsDisturbed;
	  return !!(
	    stream &&
	    ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== undefined
	      ? _stream$kIsDisturbed
	      : stream.readableDidRead || stream.readableAborted)
	  )
	}
	function isErrored(stream) {
	  var _ref,
	    _ref2,
	    _ref3,
	    _ref4,
	    _ref5,
	    _stream$kIsErrored,
	    _stream$_readableStat3,
	    _stream$_writableStat3,
	    _stream$_readableStat4,
	    _stream$_writableStat4;
	  return !!(
	    stream &&
	    ((_ref =
	      (_ref2 =
	        (_ref3 =
	          (_ref4 =
	            (_ref5 =
	              (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== undefined
	                ? _stream$kIsErrored
	                : stream.readableErrored) !== null && _ref5 !== undefined
	              ? _ref5
	              : stream.writableErrored) !== null && _ref4 !== undefined
	            ? _ref4
	            : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === undefined
	            ? undefined
	            : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== undefined
	          ? _ref3
	          : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === undefined
	          ? undefined
	          : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== undefined
	        ? _ref2
	        : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === undefined
	        ? undefined
	        : _stream$_readableStat4.errored) !== null && _ref !== undefined
	      ? _ref
	      : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === undefined
	      ? undefined
	      : _stream$_writableStat4.errored)
	  )
	}
	utils = {
	  isDestroyed,
	  kIsDestroyed,
	  isDisturbed,
	  kIsDisturbed,
	  isErrored,
	  kIsErrored,
	  isReadable,
	  kIsReadable,
	  kIsClosedPromise,
	  kControllerErrorFunction,
	  kIsWritable,
	  isClosed,
	  isDuplexNodeStream,
	  isFinished,
	  isIterable,
	  isReadableNodeStream,
	  isReadableStream,
	  isReadableEnded,
	  isReadableFinished,
	  isReadableErrored,
	  isNodeStream,
	  isWebStream,
	  isWritable,
	  isWritableNodeStream,
	  isWritableStream,
	  isWritableEnded,
	  isWritableFinished,
	  isWritableErrored,
	  isServerRequest,
	  isServerResponse,
	  willEmitClose,
	  isTransformStream
	};
	return utils;
}

/* replacement start */

var hasRequiredEndOfStream$1;

function requireEndOfStream$1 () {
	if (hasRequiredEndOfStream$1) return endOfStream$1.exports;
	hasRequiredEndOfStream$1 = 1;
	const process = requireProcess()

	/* replacement end */
	// Ported from https://github.com/mafintosh/end-of-stream with
	// permission from the author, Mathias Buus (@mafintosh).

	;	const { AbortError, codes } = requireErrors$1();
	const { ERR_INVALID_ARG_TYPE, ERR_STREAM_PREMATURE_CLOSE } = codes;
	const { kEmptyObject, once } = requireUtil();
	const { validateAbortSignal, validateFunction, validateObject, validateBoolean } = requireValidators();
	const { Promise, PromisePrototypeThen, SymbolDispose } = requirePrimordials();
	const {
	  isClosed,
	  isReadable,
	  isReadableNodeStream,
	  isReadableStream,
	  isReadableFinished,
	  isReadableErrored,
	  isWritable,
	  isWritableNodeStream,
	  isWritableStream,
	  isWritableFinished,
	  isWritableErrored,
	  isNodeStream,
	  willEmitClose: _willEmitClose,
	  kIsClosedPromise
	} = requireUtils();
	let addAbortListener;
	function isRequest(stream) {
	  return stream.setHeader && typeof stream.abort === 'function'
	}
	const nop = () => {};
	function eos(stream, options, callback) {
	  var _options$readable, _options$writable;
	  if (arguments.length === 2) {
	    callback = options;
	    options = kEmptyObject;
	  } else if (options == null) {
	    options = kEmptyObject;
	  } else {
	    validateObject(options, 'options');
	  }
	  validateFunction(callback, 'callback');
	  validateAbortSignal(options.signal, 'options.signal');
	  callback = once(callback);
	  if (isReadableStream(stream) || isWritableStream(stream)) {
	    return eosWeb(stream, options, callback)
	  }
	  if (!isNodeStream(stream)) {
	    throw new ERR_INVALID_ARG_TYPE('stream', ['ReadableStream', 'WritableStream', 'Stream'], stream)
	  }
	  const readable =
	    (_options$readable = options.readable) !== null && _options$readable !== undefined
	      ? _options$readable
	      : isReadableNodeStream(stream);
	  const writable =
	    (_options$writable = options.writable) !== null && _options$writable !== undefined
	      ? _options$writable
	      : isWritableNodeStream(stream);
	  const wState = stream._writableState;
	  const rState = stream._readableState;
	  const onlegacyfinish = () => {
	    if (!stream.writable) {
	      onfinish();
	    }
	  };

	  // TODO (ronag): Improve soft detection to include core modules and
	  // common ecosystem modules that do properly emit 'close' but fail
	  // this generic check.
	  let willEmitClose =
	    _willEmitClose(stream) && isReadableNodeStream(stream) === readable && isWritableNodeStream(stream) === writable;
	  let writableFinished = isWritableFinished(stream, false);
	  const onfinish = () => {
	    writableFinished = true;
	    // Stream should not be destroyed here. If it is that
	    // means that user space is doing something differently and
	    // we cannot trust willEmitClose.
	    if (stream.destroyed) {
	      willEmitClose = false;
	    }
	    if (willEmitClose && (!stream.readable || readable)) {
	      return
	    }
	    if (!readable || readableFinished) {
	      callback.call(stream);
	    }
	  };
	  let readableFinished = isReadableFinished(stream, false);
	  const onend = () => {
	    readableFinished = true;
	    // Stream should not be destroyed here. If it is that
	    // means that user space is doing something differently and
	    // we cannot trust willEmitClose.
	    if (stream.destroyed) {
	      willEmitClose = false;
	    }
	    if (willEmitClose && (!stream.writable || writable)) {
	      return
	    }
	    if (!writable || writableFinished) {
	      callback.call(stream);
	    }
	  };
	  const onerror = (err) => {
	    callback.call(stream, err);
	  };
	  let closed = isClosed(stream);
	  const onclose = () => {
	    closed = true;
	    const errored = isWritableErrored(stream) || isReadableErrored(stream);
	    if (errored && typeof errored !== 'boolean') {
	      return callback.call(stream, errored)
	    }
	    if (readable && !readableFinished && isReadableNodeStream(stream, true)) {
	      if (!isReadableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE())
	    }
	    if (writable && !writableFinished) {
	      if (!isWritableFinished(stream, false)) return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE())
	    }
	    callback.call(stream);
	  };
	  const onclosed = () => {
	    closed = true;
	    const errored = isWritableErrored(stream) || isReadableErrored(stream);
	    if (errored && typeof errored !== 'boolean') {
	      return callback.call(stream, errored)
	    }
	    callback.call(stream);
	  };
	  const onrequest = () => {
	    stream.req.on('finish', onfinish);
	  };
	  if (isRequest(stream)) {
	    stream.on('complete', onfinish);
	    if (!willEmitClose) {
	      stream.on('abort', onclose);
	    }
	    if (stream.req) {
	      onrequest();
	    } else {
	      stream.on('request', onrequest);
	    }
	  } else if (writable && !wState) {
	    // legacy streams
	    stream.on('end', onlegacyfinish);
	    stream.on('close', onlegacyfinish);
	  }

	  // Not all streams will emit 'close' after 'aborted'.
	  if (!willEmitClose && typeof stream.aborted === 'boolean') {
	    stream.on('aborted', onclose);
	  }
	  stream.on('end', onend);
	  stream.on('finish', onfinish);
	  if (options.error !== false) {
	    stream.on('error', onerror);
	  }
	  stream.on('close', onclose);
	  if (closed) {
	    process.nextTick(onclose);
	  } else if (
	    (wState !== null && wState !== undefined && wState.errorEmitted) ||
	    (rState !== null && rState !== undefined && rState.errorEmitted)
	  ) {
	    if (!willEmitClose) {
	      process.nextTick(onclosed);
	    }
	  } else if (
	    !readable &&
	    (!willEmitClose || isReadable(stream)) &&
	    (writableFinished || isWritable(stream) === false)
	  ) {
	    process.nextTick(onclosed);
	  } else if (
	    !writable &&
	    (!willEmitClose || isWritable(stream)) &&
	    (readableFinished || isReadable(stream) === false)
	  ) {
	    process.nextTick(onclosed);
	  } else if (rState && stream.req && stream.aborted) {
	    process.nextTick(onclosed);
	  }
	  const cleanup = () => {
	    callback = nop;
	    stream.removeListener('aborted', onclose);
	    stream.removeListener('complete', onfinish);
	    stream.removeListener('abort', onclose);
	    stream.removeListener('request', onrequest);
	    if (stream.req) stream.req.removeListener('finish', onfinish);
	    stream.removeListener('end', onlegacyfinish);
	    stream.removeListener('close', onlegacyfinish);
	    stream.removeListener('finish', onfinish);
	    stream.removeListener('end', onend);
	    stream.removeListener('error', onerror);
	    stream.removeListener('close', onclose);
	  };
	  if (options.signal && !closed) {
	    const abort = () => {
	      // Keep it because cleanup removes it.
	      const endCallback = callback;
	      cleanup();
	      endCallback.call(
	        stream,
	        new AbortError(undefined, {
	          cause: options.signal.reason
	        })
	      );
	    };
	    if (options.signal.aborted) {
	      process.nextTick(abort);
	    } else {
	      addAbortListener = addAbortListener || requireUtil().addAbortListener;
	      const disposable = addAbortListener(options.signal, abort);
	      const originalCallback = callback;
	      callback = once((...args) => {
	        disposable[SymbolDispose]();
	        originalCallback.apply(stream, args);
	      });
	    }
	  }
	  return cleanup
	}
	function eosWeb(stream, options, callback) {
	  let isAborted = false;
	  let abort = nop;
	  if (options.signal) {
	    abort = () => {
	      isAborted = true;
	      callback.call(
	        stream,
	        new AbortError(undefined, {
	          cause: options.signal.reason
	        })
	      );
	    };
	    if (options.signal.aborted) {
	      process.nextTick(abort);
	    } else {
	      addAbortListener = addAbortListener || requireUtil().addAbortListener;
	      const disposable = addAbortListener(options.signal, abort);
	      const originalCallback = callback;
	      callback = once((...args) => {
	        disposable[SymbolDispose]();
	        originalCallback.apply(stream, args);
	      });
	    }
	  }
	  const resolverFn = (...args) => {
	    if (!isAborted) {
	      process.nextTick(() => callback.apply(stream, args));
	    }
	  };
	  PromisePrototypeThen(stream[kIsClosedPromise].promise, resolverFn, resolverFn);
	  return nop
	}
	function finished(stream, opts) {
	  var _opts;
	  let autoCleanup = false;
	  if (opts === null) {
	    opts = kEmptyObject;
	  }
	  if ((_opts = opts) !== null && _opts !== undefined && _opts.cleanup) {
	    validateBoolean(opts.cleanup, 'cleanup');
	    autoCleanup = opts.cleanup;
	  }
	  return new Promise((resolve, reject) => {
	    const cleanup = eos(stream, opts, (err) => {
	      if (autoCleanup) {
	        cleanup();
	      }
	      if (err) {
	        reject(err);
	      } else {
	        resolve();
	      }
	    });
	  })
	}
	endOfStream$1.exports = eos;
	endOfStream$1.exports.finished = finished;
	return endOfStream$1.exports;
}

var destroy_1$1;
var hasRequiredDestroy$1;

function requireDestroy$1 () {
	if (hasRequiredDestroy$1) return destroy_1$1;
	hasRequiredDestroy$1 = 1;

	/* replacement start */

	const process = requireProcess();

	/* replacement end */

	const {
	  aggregateTwoErrors,
	  codes: { ERR_MULTIPLE_CALLBACK },
	  AbortError
	} = requireErrors$1();
	const { Symbol } = requirePrimordials();
	const { kIsDestroyed, isDestroyed, isFinished, isServerRequest } = requireUtils();
	const kDestroy = Symbol('kDestroy');
	const kConstruct = Symbol('kConstruct');
	function checkError(err, w, r) {
	  if (err) {
	    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
	    err.stack; // eslint-disable-line no-unused-expressions

	    if (w && !w.errored) {
	      w.errored = err;
	    }
	    if (r && !r.errored) {
	      r.errored = err;
	    }
	  }
	}

	// Backwards compat. cb() is undocumented and unused in core but
	// unfortunately might be used by modules.
	function destroy(err, cb) {
	  const r = this._readableState;
	  const w = this._writableState;
	  // With duplex streams we use the writable side for state.
	  const s = w || r;
	  if ((w !== null && w !== undefined && w.destroyed) || (r !== null && r !== undefined && r.destroyed)) {
	    if (typeof cb === 'function') {
	      cb();
	    }
	    return this
	  }

	  // We set destroyed to true before firing error callbacks in order
	  // to make it re-entrance safe in case destroy() is called within callbacks
	  checkError(err, w, r);
	  if (w) {
	    w.destroyed = true;
	  }
	  if (r) {
	    r.destroyed = true;
	  }

	  // If still constructing then defer calling _destroy.
	  if (!s.constructed) {
	    this.once(kDestroy, function (er) {
	      _destroy(this, aggregateTwoErrors(er, err), cb);
	    });
	  } else {
	    _destroy(this, err, cb);
	  }
	  return this
	}
	function _destroy(self, err, cb) {
	  let called = false;
	  function onDestroy(err) {
	    if (called) {
	      return
	    }
	    called = true;
	    const r = self._readableState;
	    const w = self._writableState;
	    checkError(err, w, r);
	    if (w) {
	      w.closed = true;
	    }
	    if (r) {
	      r.closed = true;
	    }
	    if (typeof cb === 'function') {
	      cb(err);
	    }
	    if (err) {
	      process.nextTick(emitErrorCloseNT, self, err);
	    } else {
	      process.nextTick(emitCloseNT, self);
	    }
	  }
	  try {
	    self._destroy(err || null, onDestroy);
	  } catch (err) {
	    onDestroy(err);
	  }
	}
	function emitErrorCloseNT(self, err) {
	  emitErrorNT(self, err);
	  emitCloseNT(self);
	}
	function emitCloseNT(self) {
	  const r = self._readableState;
	  const w = self._writableState;
	  if (w) {
	    w.closeEmitted = true;
	  }
	  if (r) {
	    r.closeEmitted = true;
	  }
	  if ((w !== null && w !== undefined && w.emitClose) || (r !== null && r !== undefined && r.emitClose)) {
	    self.emit('close');
	  }
	}
	function emitErrorNT(self, err) {
	  const r = self._readableState;
	  const w = self._writableState;
	  if ((w !== null && w !== undefined && w.errorEmitted) || (r !== null && r !== undefined && r.errorEmitted)) {
	    return
	  }
	  if (w) {
	    w.errorEmitted = true;
	  }
	  if (r) {
	    r.errorEmitted = true;
	  }
	  self.emit('error', err);
	}
	function undestroy() {
	  const r = this._readableState;
	  const w = this._writableState;
	  if (r) {
	    r.constructed = true;
	    r.closed = false;
	    r.closeEmitted = false;
	    r.destroyed = false;
	    r.errored = null;
	    r.errorEmitted = false;
	    r.reading = false;
	    r.ended = r.readable === false;
	    r.endEmitted = r.readable === false;
	  }
	  if (w) {
	    w.constructed = true;
	    w.destroyed = false;
	    w.closed = false;
	    w.closeEmitted = false;
	    w.errored = null;
	    w.errorEmitted = false;
	    w.finalCalled = false;
	    w.prefinished = false;
	    w.ended = w.writable === false;
	    w.ending = w.writable === false;
	    w.finished = w.writable === false;
	  }
	}
	function errorOrDestroy(stream, err, sync) {
	  // We have tests that rely on errors being emitted
	  // in the same tick, so changing this is semver major.
	  // For now when you opt-in to autoDestroy we allow
	  // the error to be emitted nextTick. In a future
	  // semver major update we should change the default to this.

	  const r = stream._readableState;
	  const w = stream._writableState;
	  if ((w !== null && w !== undefined && w.destroyed) || (r !== null && r !== undefined && r.destroyed)) {
	    return this
	  }
	  if ((r !== null && r !== undefined && r.autoDestroy) || (w !== null && w !== undefined && w.autoDestroy))
	    stream.destroy(err);
	  else if (err) {
	    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
	    err.stack; // eslint-disable-line no-unused-expressions

	    if (w && !w.errored) {
	      w.errored = err;
	    }
	    if (r && !r.errored) {
	      r.errored = err;
	    }
	    if (sync) {
	      process.nextTick(emitErrorNT, stream, err);
	    } else {
	      emitErrorNT(stream, err);
	    }
	  }
	}
	function construct(stream, cb) {
	  if (typeof stream._construct !== 'function') {
	    return
	  }
	  const r = stream._readableState;
	  const w = stream._writableState;
	  if (r) {
	    r.constructed = false;
	  }
	  if (w) {
	    w.constructed = false;
	  }
	  stream.once(kConstruct, cb);
	  if (stream.listenerCount(kConstruct) > 1) {
	    // Duplex
	    return
	  }
	  process.nextTick(constructNT, stream);
	}
	function constructNT(stream) {
	  let called = false;
	  function onConstruct(err) {
	    if (called) {
	      errorOrDestroy(stream, err !== null && err !== undefined ? err : new ERR_MULTIPLE_CALLBACK());
	      return
	    }
	    called = true;
	    const r = stream._readableState;
	    const w = stream._writableState;
	    const s = w || r;
	    if (r) {
	      r.constructed = true;
	    }
	    if (w) {
	      w.constructed = true;
	    }
	    if (s.destroyed) {
	      stream.emit(kDestroy, err);
	    } else if (err) {
	      errorOrDestroy(stream, err, true);
	    } else {
	      process.nextTick(emitConstructNT, stream);
	    }
	  }
	  try {
	    stream._construct((err) => {
	      process.nextTick(onConstruct, err);
	    });
	  } catch (err) {
	    process.nextTick(onConstruct, err);
	  }
	}
	function emitConstructNT(stream) {
	  stream.emit(kConstruct);
	}
	function isRequest(stream) {
	  return (stream === null || stream === undefined ? undefined : stream.setHeader) && typeof stream.abort === 'function'
	}
	function emitCloseLegacy(stream) {
	  stream.emit('close');
	}
	function emitErrorCloseLegacy(stream, err) {
	  stream.emit('error', err);
	  process.nextTick(emitCloseLegacy, stream);
	}

	// Normalize destroy for legacy.
	function destroyer(stream, err) {
	  if (!stream || isDestroyed(stream)) {
	    return
	  }
	  if (!err && !isFinished(stream)) {
	    err = new AbortError();
	  }

	  // TODO: Remove isRequest branches.
	  if (isServerRequest(stream)) {
	    stream.socket = null;
	    stream.destroy(err);
	  } else if (isRequest(stream)) {
	    stream.abort();
	  } else if (isRequest(stream.req)) {
	    stream.req.abort();
	  } else if (typeof stream.destroy === 'function') {
	    stream.destroy(err);
	  } else if (typeof stream.close === 'function') {
	    // TODO: Don't lose err?
	    stream.close();
	  } else if (err) {
	    process.nextTick(emitErrorCloseLegacy, stream, err);
	  } else {
	    process.nextTick(emitCloseLegacy, stream);
	  }
	  if (!stream.destroyed) {
	    stream[kIsDestroyed] = true;
	  }
	}
	destroy_1$1 = {
	  construct,
	  destroyer,
	  destroy,
	  undestroy,
	  errorOrDestroy
	};
	return destroy_1$1;
}

var legacy$1;
var hasRequiredLegacy$1;

function requireLegacy$1 () {
	if (hasRequiredLegacy$1) return legacy$1;
	hasRequiredLegacy$1 = 1;

	const { ArrayIsArray, ObjectSetPrototypeOf } = requirePrimordials();
	const { EventEmitter: EE } = require$$2$1;
	function Stream(opts) {
	  EE.call(this, opts);
	}
	ObjectSetPrototypeOf(Stream.prototype, EE.prototype);
	ObjectSetPrototypeOf(Stream, EE);
	Stream.prototype.pipe = function (dest, options) {
	  const source = this;
	  function ondata(chunk) {
	    if (dest.writable && dest.write(chunk) === false && source.pause) {
	      source.pause();
	    }
	  }
	  source.on('data', ondata);
	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }
	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }
	  let didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return
	    didOnEnd = true;
	    dest.end();
	  }
	  function onclose() {
	    if (didOnEnd) return
	    didOnEnd = true;
	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // Don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      this.emit('error', er);
	    }
	  }
	  prependListener(source, 'error', onerror);
	  prependListener(dest, 'error', onerror);

	  // Remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);
	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);
	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);
	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);
	    dest.removeListener('close', cleanup);
	  }
	  source.on('end', cleanup);
	  source.on('close', cleanup);
	  dest.on('close', cleanup);
	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest
	};
	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn)

	  // This is a hack to make sure that our error handler is attached before any
	  // userland ones.  NEVER DO THIS. This is here only because this code needs
	  // to continue to work with older versions of Node.js that do not include
	  // the prependListener() method. The goal is to eventually remove this hack.
	  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
	  else if (ArrayIsArray(emitter._events[event])) emitter._events[event].unshift(fn);
	  else emitter._events[event] = [fn, emitter._events[event]];
	}
	legacy$1 = {
	  Stream,
	  prependListener
	};
	return legacy$1;
}

var addAbortSignal = {exports: {}};

var hasRequiredAddAbortSignal;

function requireAddAbortSignal () {
	if (hasRequiredAddAbortSignal) return addAbortSignal.exports;
	hasRequiredAddAbortSignal = 1;
	(function (module) {

		const { SymbolDispose } = requirePrimordials();
		const { AbortError, codes } = requireErrors$1();
		const { isNodeStream, isWebStream, kControllerErrorFunction } = requireUtils();
		const eos = requireEndOfStream$1();
		const { ERR_INVALID_ARG_TYPE } = codes;
		let addAbortListener;

		// This method is inlined here for readable-stream
		// It also does not allow for signal to not exist on the stream
		// https://github.com/nodejs/node/pull/36061#discussion_r533718029
		const validateAbortSignal = (signal, name) => {
		  if (typeof signal !== 'object' || !('aborted' in signal)) {
		    throw new ERR_INVALID_ARG_TYPE(name, 'AbortSignal', signal)
		  }
		};
		module.exports.addAbortSignal = function addAbortSignal(signal, stream) {
		  validateAbortSignal(signal, 'signal');
		  if (!isNodeStream(stream) && !isWebStream(stream)) {
		    throw new ERR_INVALID_ARG_TYPE('stream', ['ReadableStream', 'WritableStream', 'Stream'], stream)
		  }
		  return module.exports.addAbortSignalNoValidate(signal, stream)
		};
		module.exports.addAbortSignalNoValidate = function (signal, stream) {
		  if (typeof signal !== 'object' || !('aborted' in signal)) {
		    return stream
		  }
		  const onAbort = isNodeStream(stream)
		    ? () => {
		        stream.destroy(
		          new AbortError(undefined, {
		            cause: signal.reason
		          })
		        );
		      }
		    : () => {
		        stream[kControllerErrorFunction](
		          new AbortError(undefined, {
		            cause: signal.reason
		          })
		        );
		      };
		  if (signal.aborted) {
		    onAbort();
		  } else {
		    addAbortListener = addAbortListener || requireUtil().addAbortListener;
		    const disposable = addAbortListener(signal, onAbort);
		    eos(stream, disposable[SymbolDispose]);
		  }
		  return stream
		}; 
	} (addAbortSignal));
	return addAbortSignal.exports;
}

var buffer_list$1;
var hasRequiredBuffer_list$1;

function requireBuffer_list$1 () {
	if (hasRequiredBuffer_list$1) return buffer_list$1;
	hasRequiredBuffer_list$1 = 1;

	const { StringPrototypeSlice, SymbolIterator, TypedArrayPrototypeSet, Uint8Array } = requirePrimordials();
	const { Buffer } = require$$0$4;
	const { inspect } = requireUtil();
	buffer_list$1 = class BufferList {
	  constructor() {
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }
	  push(v) {
	    const entry = {
	      data: v,
	      next: null
	    };
	    if (this.length > 0) this.tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	    ++this.length;
	  }
	  unshift(v) {
	    const entry = {
	      data: v,
	      next: this.head
	    };
	    if (this.length === 0) this.tail = entry;
	    this.head = entry;
	    ++this.length;
	  }
	  shift() {
	    if (this.length === 0) return
	    const ret = this.head.data;
	    if (this.length === 1) this.head = this.tail = null;
	    else this.head = this.head.next;
	    --this.length;
	    return ret
	  }
	  clear() {
	    this.head = this.tail = null;
	    this.length = 0;
	  }
	  join(s) {
	    if (this.length === 0) return ''
	    let p = this.head;
	    let ret = '' + p.data;
	    while ((p = p.next) !== null) ret += s + p.data;
	    return ret
	  }
	  concat(n) {
	    if (this.length === 0) return Buffer.alloc(0)
	    const ret = Buffer.allocUnsafe(n >>> 0);
	    let p = this.head;
	    let i = 0;
	    while (p) {
	      TypedArrayPrototypeSet(ret, p.data, i);
	      i += p.data.length;
	      p = p.next;
	    }
	    return ret
	  }

	  // Consumes a specified amount of bytes or characters from the buffered data.
	  consume(n, hasStrings) {
	    const data = this.head.data;
	    if (n < data.length) {
	      // `slice` is the same for buffers and strings.
	      const slice = data.slice(0, n);
	      this.head.data = data.slice(n);
	      return slice
	    }
	    if (n === data.length) {
	      // First chunk is a perfect match.
	      return this.shift()
	    }
	    // Result spans more than one buffer.
	    return hasStrings ? this._getString(n) : this._getBuffer(n)
	  }
	  first() {
	    return this.head.data
	  }
	  *[SymbolIterator]() {
	    for (let p = this.head; p; p = p.next) {
	      yield p.data;
	    }
	  }

	  // Consumes a specified amount of characters from the buffered data.
	  _getString(n) {
	    let ret = '';
	    let p = this.head;
	    let c = 0;
	    do {
	      const str = p.data;
	      if (n > str.length) {
	        ret += str;
	        n -= str.length;
	      } else {
	        if (n === str.length) {
	          ret += str;
	          ++c;
	          if (p.next) this.head = p.next;
	          else this.head = this.tail = null;
	        } else {
	          ret += StringPrototypeSlice(str, 0, n);
	          this.head = p;
	          p.data = StringPrototypeSlice(str, n);
	        }
	        break
	      }
	      ++c;
	    } while ((p = p.next) !== null)
	    this.length -= c;
	    return ret
	  }

	  // Consumes a specified amount of bytes from the buffered data.
	  _getBuffer(n) {
	    const ret = Buffer.allocUnsafe(n);
	    const retLen = n;
	    let p = this.head;
	    let c = 0;
	    do {
	      const buf = p.data;
	      if (n > buf.length) {
	        TypedArrayPrototypeSet(ret, buf, retLen - n);
	        n -= buf.length;
	      } else {
	        if (n === buf.length) {
	          TypedArrayPrototypeSet(ret, buf, retLen - n);
	          ++c;
	          if (p.next) this.head = p.next;
	          else this.head = this.tail = null;
	        } else {
	          TypedArrayPrototypeSet(ret, new Uint8Array(buf.buffer, buf.byteOffset, n), retLen - n);
	          this.head = p;
	          p.data = buf.slice(n);
	        }
	        break
	      }
	      ++c;
	    } while ((p = p.next) !== null)
	    this.length -= c;
	    return ret
	  }

	  // Make sure the linked list only shows the minimal necessary information.
	  [Symbol.for('nodejs.util.inspect.custom')](_, options) {
	    return inspect(this, {
	      ...options,
	      // Only inspect one level.
	      depth: 0,
	      // It should not recurse.
	      customInspect: false
	    })
	  }
	};
	return buffer_list$1;
}

var state$1;
var hasRequiredState$1;

function requireState$1 () {
	if (hasRequiredState$1) return state$1;
	hasRequiredState$1 = 1;

	const { MathFloor, NumberIsInteger } = requirePrimordials();
	const { validateInteger } = requireValidators();
	const { ERR_INVALID_ARG_VALUE } = requireErrors$1().codes;
	let defaultHighWaterMarkBytes = 16 * 1024;
	let defaultHighWaterMarkObjectMode = 16;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
	  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null
	}
	function getDefaultHighWaterMark(objectMode) {
	  return objectMode ? defaultHighWaterMarkObjectMode : defaultHighWaterMarkBytes
	}
	function setDefaultHighWaterMark(objectMode, value) {
	  validateInteger(value, 'value', 0);
	  if (objectMode) {
	    defaultHighWaterMarkObjectMode = value;
	  } else {
	    defaultHighWaterMarkBytes = value;
	  }
	}
	function getHighWaterMark(state, options, duplexKey, isDuplex) {
	  const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
	  if (hwm != null) {
	    if (!NumberIsInteger(hwm) || hwm < 0) {
	      const name = isDuplex ? `options.${duplexKey}` : 'options.highWaterMark';
	      throw new ERR_INVALID_ARG_VALUE(name, hwm)
	    }
	    return MathFloor(hwm)
	  }

	  // Default value
	  return getDefaultHighWaterMark(state.objectMode)
	}
	state$1 = {
	  getHighWaterMark,
	  getDefaultHighWaterMark,
	  setDefaultHighWaterMark
	};
	return state$1;
}

var from_1$1;
var hasRequiredFrom$1;

function requireFrom$1 () {
	if (hasRequiredFrom$1) return from_1$1;
	hasRequiredFrom$1 = 1;

	/* replacement start */

	const process = requireProcess();

	/* replacement end */

	const { PromisePrototypeThen, SymbolAsyncIterator, SymbolIterator } = requirePrimordials();
	const { Buffer } = require$$0$4;
	const { ERR_INVALID_ARG_TYPE, ERR_STREAM_NULL_VALUES } = requireErrors$1().codes;
	function from(Readable, iterable, opts) {
	  let iterator;
	  if (typeof iterable === 'string' || iterable instanceof Buffer) {
	    return new Readable({
	      objectMode: true,
	      ...opts,
	      read() {
	        this.push(iterable);
	        this.push(null);
	      }
	    })
	  }
	  let isAsync;
	  if (iterable && iterable[SymbolAsyncIterator]) {
	    isAsync = true;
	    iterator = iterable[SymbolAsyncIterator]();
	  } else if (iterable && iterable[SymbolIterator]) {
	    isAsync = false;
	    iterator = iterable[SymbolIterator]();
	  } else {
	    throw new ERR_INVALID_ARG_TYPE('iterable', ['Iterable'], iterable)
	  }
	  const readable = new Readable({
	    objectMode: true,
	    highWaterMark: 1,
	    // TODO(ronag): What options should be allowed?
	    ...opts
	  });

	  // Flag to protect against _read
	  // being called before last iteration completion.
	  let reading = false;
	  readable._read = function () {
	    if (!reading) {
	      reading = true;
	      next();
	    }
	  };
	  readable._destroy = function (error, cb) {
	    PromisePrototypeThen(
	      close(error),
	      () => process.nextTick(cb, error),
	      // nextTick is here in case cb throws
	      (e) => process.nextTick(cb, e || error)
	    );
	  };
	  async function close(error) {
	    const hadError = error !== undefined && error !== null;
	    const hasThrow = typeof iterator.throw === 'function';
	    if (hadError && hasThrow) {
	      const { value, done } = await iterator.throw(error);
	      await value;
	      if (done) {
	        return
	      }
	    }
	    if (typeof iterator.return === 'function') {
	      const { value } = await iterator.return();
	      await value;
	    }
	  }
	  async function next() {
	    for (;;) {
	      try {
	        const { value, done } = isAsync ? await iterator.next() : iterator.next();
	        if (done) {
	          readable.push(null);
	        } else {
	          const res = value && typeof value.then === 'function' ? await value : value;
	          if (res === null) {
	            reading = false;
	            throw new ERR_STREAM_NULL_VALUES()
	          } else if (readable.push(res)) {
	            continue
	          } else {
	            reading = false;
	          }
	        }
	      } catch (err) {
	        readable.destroy(err);
	      }
	      break
	    }
	  }
	  return readable
	}
	from_1$1 = from;
	return from_1$1;
}

/* replacement start */

var readable$1;
var hasRequiredReadable$1;

function requireReadable$1 () {
	if (hasRequiredReadable$1) return readable$1;
	hasRequiredReadable$1 = 1;
	const process = requireProcess()

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	;	const {
	  ArrayPrototypeIndexOf,
	  NumberIsInteger,
	  NumberIsNaN,
	  NumberParseInt,
	  ObjectDefineProperties,
	  ObjectKeys,
	  ObjectSetPrototypeOf,
	  Promise,
	  SafeSet,
	  SymbolAsyncDispose,
	  SymbolAsyncIterator,
	  Symbol
	} = requirePrimordials();
	readable$1 = Readable;
	Readable.ReadableState = ReadableState;
	const { EventEmitter: EE } = require$$2$1;
	const { Stream, prependListener } = requireLegacy$1();
	const { Buffer } = require$$0$4;
	const { addAbortSignal } = requireAddAbortSignal();
	const eos = requireEndOfStream$1();
	let debug = requireUtil().debuglog('stream', (fn) => {
	  debug = fn;
	});
	const BufferList = requireBuffer_list$1();
	const destroyImpl = requireDestroy$1();
	const { getHighWaterMark, getDefaultHighWaterMark } = requireState$1();
	const {
	  aggregateTwoErrors,
	  codes: {
	    ERR_INVALID_ARG_TYPE,
	    ERR_METHOD_NOT_IMPLEMENTED,
	    ERR_OUT_OF_RANGE,
	    ERR_STREAM_PUSH_AFTER_EOF,
	    ERR_STREAM_UNSHIFT_AFTER_END_EVENT
	  },
	  AbortError
	} = requireErrors$1();
	const { validateObject } = requireValidators();
	const kPaused = Symbol('kPaused');
	const { StringDecoder } = require$$13;
	const from = requireFrom$1();
	ObjectSetPrototypeOf(Readable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Readable, Stream);
	const nop = () => {};
	const { errorOrDestroy } = destroyImpl;
	const kObjectMode = 1 << 0;
	const kEnded = 1 << 1;
	const kEndEmitted = 1 << 2;
	const kReading = 1 << 3;
	const kConstructed = 1 << 4;
	const kSync = 1 << 5;
	const kNeedReadable = 1 << 6;
	const kEmittedReadable = 1 << 7;
	const kReadableListening = 1 << 8;
	const kResumeScheduled = 1 << 9;
	const kErrorEmitted = 1 << 10;
	const kEmitClose = 1 << 11;
	const kAutoDestroy = 1 << 12;
	const kDestroyed = 1 << 13;
	const kClosed = 1 << 14;
	const kCloseEmitted = 1 << 15;
	const kMultiAwaitDrain = 1 << 16;
	const kReadingMore = 1 << 17;
	const kDataEmitted = 1 << 18;

	// TODO(benjamingr) it is likely slower to do it this way than with free functions
	function makeBitMapDescriptor(bit) {
	  return {
	    enumerable: false,
	    get() {
	      return (this.state & bit) !== 0
	    },
	    set(value) {
	      if (value) this.state |= bit;
	      else this.state &= ~bit;
	    }
	  }
	}
	ObjectDefineProperties(ReadableState.prototype, {
	  objectMode: makeBitMapDescriptor(kObjectMode),
	  ended: makeBitMapDescriptor(kEnded),
	  endEmitted: makeBitMapDescriptor(kEndEmitted),
	  reading: makeBitMapDescriptor(kReading),
	  // Stream is still being constructed and cannot be
	  // destroyed until construction finished or failed.
	  // Async construction is opt in, therefore we start as
	  // constructed.
	  constructed: makeBitMapDescriptor(kConstructed),
	  // A flag to be able to tell if the event 'readable'/'data' is emitted
	  // immediately, or on a later tick.  We set this to true at first, because
	  // any actions that shouldn't happen until "later" should generally also
	  // not happen before the first read call.
	  sync: makeBitMapDescriptor(kSync),
	  // Whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  needReadable: makeBitMapDescriptor(kNeedReadable),
	  emittedReadable: makeBitMapDescriptor(kEmittedReadable),
	  readableListening: makeBitMapDescriptor(kReadableListening),
	  resumeScheduled: makeBitMapDescriptor(kResumeScheduled),
	  // True if the error was already emitted and should not be thrown again.
	  errorEmitted: makeBitMapDescriptor(kErrorEmitted),
	  emitClose: makeBitMapDescriptor(kEmitClose),
	  autoDestroy: makeBitMapDescriptor(kAutoDestroy),
	  // Has it been destroyed.
	  destroyed: makeBitMapDescriptor(kDestroyed),
	  // Indicates whether the stream has finished destroying.
	  closed: makeBitMapDescriptor(kClosed),
	  // True if close has been emitted or would have been emitted
	  // depending on emitClose.
	  closeEmitted: makeBitMapDescriptor(kCloseEmitted),
	  multiAwaitDrain: makeBitMapDescriptor(kMultiAwaitDrain),
	  // If true, a maybeReadMore has been scheduled.
	  readingMore: makeBitMapDescriptor(kReadingMore),
	  dataEmitted: makeBitMapDescriptor(kDataEmitted)
	});
	function ReadableState(options, stream, isDuplex) {
	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream.
	  // These options can be provided separately as readableXXX and writableXXX.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof requireDuplex();

	  // Bit map field to store ReadableState more effciently with 1 bit per field
	  // instead of a V8 slot per field.
	  this.state = kEmitClose | kAutoDestroy | kConstructed | kSync;
	  // Object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away.
	  if (options && options.objectMode) this.state |= kObjectMode;
	  if (isDuplex && options && options.readableObjectMode) this.state |= kObjectMode;

	  // The point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  this.highWaterMark = options
	    ? getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex)
	    : getDefaultHighWaterMark(false);

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift().
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = [];
	  this.flowing = null;
	  this[kPaused] = null;

	  // Should close be emitted on destroy. Defaults to true.
	  if (options && options.emitClose === false) this.state &= ~kEmitClose;

	  // Should .destroy() be called after 'end' (and potentially 'finish').
	  if (options && options.autoDestroy === false) this.state &= ~kAutoDestroy;

	  // Indicates whether the stream has errored. When true no further
	  // _read calls, 'data' or 'readable' events should occur. This is needed
	  // since when autoDestroy is disabled we need a way to tell whether the
	  // stream has failed.
	  this.errored = null;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = (options && options.defaultEncoding) || 'utf8';

	  // Ref the piped dest which we need a drain event on it
	  // type: null | Writable | Set<Writable>.
	  this.awaitDrainWriters = null;
	  this.decoder = null;
	  this.encoding = null;
	  if (options && options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {
	  if (!(this instanceof Readable)) return new Readable(options)

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the ReadableState constructor, at least with V8 6.5.
	  const isDuplex = this instanceof requireDuplex();
	  this._readableState = new ReadableState(options, this, isDuplex);
	  if (options) {
	    if (typeof options.read === 'function') this._read = options.read;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	    if (typeof options.construct === 'function') this._construct = options.construct;
	    if (options.signal && !isDuplex) addAbortSignal(options.signal, this);
	  }
	  Stream.call(this, options);
	  destroyImpl.construct(this, () => {
	    if (this._readableState.needReadable) {
	      maybeReadMore(this, this._readableState);
	    }
	  });
	}
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function (err, cb) {
	  cb(err);
	};
	Readable.prototype[EE.captureRejectionSymbol] = function (err) {
	  this.destroy(err);
	};
	Readable.prototype[SymbolAsyncDispose] = function () {
	  let error;
	  if (!this.destroyed) {
	    error = this.readableEnded ? null : new AbortError();
	    this.destroy(error);
	  }
	  return new Promise((resolve, reject) => eos(this, (err) => (err && err !== error ? reject(err) : resolve(null))))
	};

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  return readableAddChunk(this, chunk, encoding, false)
	};

	// Unshift should *always* be something directly out of read().
	Readable.prototype.unshift = function (chunk, encoding) {
	  return readableAddChunk(this, chunk, encoding, true)
	};
	function readableAddChunk(stream, chunk, encoding, addToFront) {
	  debug('readableAddChunk', chunk);
	  const state = stream._readableState;
	  let err;
	  if ((state.state & kObjectMode) === 0) {
	    if (typeof chunk === 'string') {
	      encoding = encoding || state.defaultEncoding;
	      if (state.encoding !== encoding) {
	        if (addToFront && state.encoding) {
	          // When unshifting, if state.encoding is set, we have to save
	          // the string in the BufferList with the state encoding.
	          chunk = Buffer.from(chunk, encoding).toString(state.encoding);
	        } else {
	          chunk = Buffer.from(chunk, encoding);
	          encoding = '';
	        }
	      }
	    } else if (chunk instanceof Buffer) {
	      encoding = '';
	    } else if (Stream._isUint8Array(chunk)) {
	      chunk = Stream._uint8ArrayToBuffer(chunk);
	      encoding = '';
	    } else if (chunk != null) {
	      err = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
	    }
	  }
	  if (err) {
	    errorOrDestroy(stream, err);
	  } else if (chunk === null) {
	    state.state &= ~kReading;
	    onEofChunk(stream, state);
	  } else if ((state.state & kObjectMode) !== 0 || (chunk && chunk.length > 0)) {
	    if (addToFront) {
	      if ((state.state & kEndEmitted) !== 0) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
	      else if (state.destroyed || state.errored) return false
	      else addChunk(stream, state, chunk, true);
	    } else if (state.ended) {
	      errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
	    } else if (state.destroyed || state.errored) {
	      return false
	    } else {
	      state.state &= ~kReading;
	      if (state.decoder && !encoding) {
	        chunk = state.decoder.write(chunk);
	        if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
	        else maybeReadMore(stream, state);
	      } else {
	        addChunk(stream, state, chunk, false);
	      }
	    }
	  } else if (!addToFront) {
	    state.state &= ~kReading;
	    maybeReadMore(stream, state);
	  }

	  // We can push more data if we are below the highWaterMark.
	  // Also, if we have no data yet, we can stand some more bytes.
	  // This is to work around cases where hwm=0, such as the repl.
	  return !state.ended && (state.length < state.highWaterMark || state.length === 0)
	}
	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount('data') > 0) {
	    // Use the guard to avoid creating `Set()` repeatedly
	    // when we have multiple pipes.
	    if ((state.state & kMultiAwaitDrain) !== 0) {
	      state.awaitDrainWriters.clear();
	    } else {
	      state.awaitDrainWriters = null;
	    }
	    state.dataEmitted = true;
	    stream.emit('data', chunk);
	  } else {
	    // Update the buffer info.
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);
	    else state.buffer.push(chunk);
	    if ((state.state & kNeedReadable) !== 0) emitReadable(stream);
	  }
	  maybeReadMore(stream, state);
	}
	Readable.prototype.isPaused = function () {
	  const state = this._readableState;
	  return state[kPaused] === true || state.flowing === false
	};

	// Backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  const decoder = new StringDecoder(enc);
	  this._readableState.decoder = decoder;
	  // If setEncoding(null), decoder.encoding equals utf8.
	  this._readableState.encoding = this._readableState.decoder.encoding;
	  const buffer = this._readableState.buffer;
	  // Iterate over current buffer to convert already stored Buffers:
	  let content = '';
	  for (const data of buffer) {
	    content += decoder.write(data);
	  }
	  buffer.clear();
	  if (content !== '') buffer.push(content);
	  this._readableState.length = content.length;
	  return this
	};

	// Don't raise the hwm > 1GB.
	const MAX_HWM = 0x40000000;
	function computeNewHighWaterMark(n) {
	  if (n > MAX_HWM) {
	    throw new ERR_OUT_OF_RANGE('size', '<= 1GiB', n)
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts.
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || (state.length === 0 && state.ended)) return 0
	  if ((state.state & kObjectMode) !== 0) return 1
	  if (NumberIsNaN(n)) {
	    // Only flow one buffer at a time.
	    if (state.flowing && state.length) return state.buffer.first().length
	    return state.length
	  }
	  if (n <= state.length) return n
	  return state.ended ? state.length : 0
	}

	// You can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  // Same as parseInt(undefined, 10), however V8 7.3 performance regressed
	  // in this scenario, so we are doing it manually.
	  if (n === undefined) {
	    n = NaN;
	  } else if (!NumberIsInteger(n)) {
	    n = NumberParseInt(n, 10);
	  }
	  const state = this._readableState;
	  const nOrig = n;

	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n !== 0) state.state &= ~kEmittedReadable;

	  // If we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (
	    n === 0 &&
	    state.needReadable &&
	    ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)
	  ) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);
	    else emitReadable(this);
	    return null
	  }
	  n = howMuchToRead(n, state);

	  // If we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  let doRead = (state.state & kNeedReadable) !== 0;
	  debug('need readable', doRead);

	  // If we currently have less than the highWaterMark, then also read some.
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // However, if we've ended, then there's no point, if we're already
	  // reading, then it's unnecessary, if we're constructing we have to wait,
	  // and if we're destroyed or errored, then it's not allowed,
	  if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
	    doRead = false;
	    debug('reading, ended or constructing', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.state |= kReading | kSync;
	    // If the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.state |= kNeedReadable;

	    // Call internal read method
	    try {
	      this._read(state.highWaterMark);
	    } catch (err) {
	      errorOrDestroy(this, err);
	    }
	    state.state &= ~kSync;

	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	  let ret;
	  if (n > 0) ret = fromList(n, state);
	  else ret = null;
	  if (ret === null) {
	    state.needReadable = state.length <= state.highWaterMark;
	    n = 0;
	  } else {
	    state.length -= n;
	    if (state.multiAwaitDrain) {
	      state.awaitDrainWriters.clear();
	    } else {
	      state.awaitDrainWriters = null;
	    }
	  }
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	  if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
	    state.dataEmitted = true;
	    this.emit('data', ret);
	  }
	  return ret
	};
	function onEofChunk(stream, state) {
	  debug('onEofChunk');
	  if (state.ended) return
	  if (state.decoder) {
	    const chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	  if (state.sync) {
	    // If we are sync, wait until next tick to emit the data.
	    // Otherwise we risk emitting data in the flow()
	    // the readable code triggers during a read() call.
	    emitReadable(stream);
	  } else {
	    // Emit 'readable' now to make sure it gets picked up.
	    state.needReadable = false;
	    state.emittedReadable = true;
	    // We have to emit readable now that we are EOF. Modules
	    // in the ecosystem (e.g. dicer) rely on this event being sync.
	    emitReadable_(stream);
	  }
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  const state = stream._readableState;
	  debug('emitReadable', state.needReadable, state.emittedReadable);
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    process.nextTick(emitReadable_, stream);
	  }
	}
	function emitReadable_(stream) {
	  const state = stream._readableState;
	  debug('emitReadable_', state.destroyed, state.length, state.ended);
	  if (!state.destroyed && !state.errored && (state.length || state.ended)) {
	    stream.emit('readable');
	    state.emittedReadable = false;
	  }

	  // The stream needs another readable event if:
	  // 1. It is not flowing, as the flow mechanism will take
	  //    care of it.
	  // 2. It is not ended.
	  // 3. It is below the highWaterMark, so we can schedule
	  //    another readable later.
	  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
	  flow(stream);
	}

	// At this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore && state.constructed) {
	    state.readingMore = true;
	    process.nextTick(maybeReadMore_, stream, state);
	  }
	}
	function maybeReadMore_(stream, state) {
	  // Attempt to read more data if we should.
	  //
	  // The conditions for reading more data are (one of):
	  // - Not enough data buffered (state.length < state.highWaterMark). The loop
	  //   is responsible for filling the buffer with enough data if such data
	  //   is available. If highWaterMark is 0 and we are not in the flowing mode
	  //   we should _not_ attempt to buffer any extra data. We'll get more data
	  //   when the stream consumer calls read() instead.
	  // - No data in the buffer, and the stream is in flowing mode. In this mode
	  //   the loop below is responsible for ensuring read() is called. Failing to
	  //   call read here would abort the flow and there's no other mechanism for
	  //   continuing the flow if the stream consumer has just subscribed to the
	  //   'data' event.
	  //
	  // In addition to the above conditions to keep reading data, the following
	  // conditions prevent the data from being read:
	  // - The stream has ended (state.ended).
	  // - There is already a pending 'read' operation (state.reading). This is a
	  //   case where the stream has called the implementation defined _read()
	  //   method, but they are processing the call asynchronously and have _not_
	  //   called push() with new data. In this case we skip performing more
	  //   read()s. The execution ends in this method again after the _read() ends
	  //   up calling push() with more data.
	  while (
	    !state.reading &&
	    !state.ended &&
	    (state.length < state.highWaterMark || (state.flowing && state.length === 0))
	  ) {
	    const len = state.length;
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // Didn't get any data, stop spinning.
	      break
	  }
	  state.readingMore = false;
	}

	// Abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  throw new ERR_METHOD_NOT_IMPLEMENTED('_read()')
	};
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  const src = this;
	  const state = this._readableState;
	  if (state.pipes.length === 1) {
	    if (!state.multiAwaitDrain) {
	      state.multiAwaitDrain = true;
	      state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
	    }
	  }
	  state.pipes.push(dest);
	  debug('pipe count=%d opts=%j', state.pipes.length, pipeOpts);
	  const doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	  const endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) process.nextTick(endFn);
	  else src.once('end', endFn);
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug('onunpipe');
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	  let ondrain;
	  let cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // Cleanup event handlers once the pipe is broken.
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    if (ondrain) {
	      dest.removeListener('drain', ondrain);
	    }
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', unpipe);
	    src.removeListener('data', ondata);
	    cleanedUp = true;

	    // If the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	  function pause() {
	    // If the user unpiped during `dest.write()`, it is possible
	    // to get stuck in a permanently paused state if that write
	    // also returned false.
	    // => Check whether `dest` is still a piping destination.
	    if (!cleanedUp) {
	      if (state.pipes.length === 1 && state.pipes[0] === dest) {
	        debug('false write response, pause', 0);
	        state.awaitDrainWriters = dest;
	        state.multiAwaitDrain = false;
	      } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
	        debug('false write response, pause', state.awaitDrainWriters.size);
	        state.awaitDrainWriters.add(dest);
	      }
	      src.pause();
	    }
	    if (!ondrain) {
	      // When the dest drains, it reduces the awaitDrain counter
	      // on the source.  This would be more elegant with a .once()
	      // handler in flow(), but adding and removing repeatedly is
	      // too slow.
	      ondrain = pipeOnDrain(src, dest);
	      dest.on('drain', ondrain);
	    }
	  }
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    const ret = dest.write(chunk);
	    debug('dest.write', ret);
	    if (ret === false) {
	      pause();
	    }
	  }

	  // If the dest has an error, then stop piping into it.
	  // However, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (dest.listenerCount('error') === 0) {
	      const s = dest._writableState || dest._readableState;
	      if (s && !s.errorEmitted) {
	        // User incorrectly emitted 'error' directly on the stream.
	        errorOrDestroy(dest, er);
	      } else {
	        dest.emit('error', er);
	      }
	    }
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // Tell the dest that it's being piped to.
	  dest.emit('pipe', src);

	  // Start the flow if it hasn't been started already.

	  if (dest.writableNeedDrain === true) {
	    pause();
	  } else if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	  return dest
	};
	function pipeOnDrain(src, dest) {
	  return function pipeOnDrainFunctionResult() {
	    const state = src._readableState;

	    // `ondrain` will call directly,
	    // `this` maybe not a reference to dest,
	    // so we use the real dest here.
	    if (state.awaitDrainWriters === dest) {
	      debug('pipeOnDrain', 1);
	      state.awaitDrainWriters = null;
	    } else if (state.multiAwaitDrain) {
	      debug('pipeOnDrain', state.awaitDrainWriters.size);
	      state.awaitDrainWriters.delete(dest);
	    }
	    if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount('data')) {
	      src.resume();
	    }
	  }
	}
	Readable.prototype.unpipe = function (dest) {
	  const state = this._readableState;
	  const unpipeInfo = {
	    hasUnpiped: false
	  };

	  // If we're not piping anywhere, then do nothing.
	  if (state.pipes.length === 0) return this
	  if (!dest) {
	    // remove all.
	    const dests = state.pipes;
	    state.pipes = [];
	    this.pause();
	    for (let i = 0; i < dests.length; i++)
	      dests[i].emit('unpipe', this, {
	        hasUnpiped: false
	      });
	    return this
	  }

	  // Try to find the right one.
	  const index = ArrayPrototypeIndexOf(state.pipes, dest);
	  if (index === -1) return this
	  state.pipes.splice(index, 1);
	  if (state.pipes.length === 0) this.pause();
	  dest.emit('unpipe', this, unpipeInfo);
	  return this
	};

	// Set up data events if they are asked for
	// Ensure readable listeners eventually get something.
	Readable.prototype.on = function (ev, fn) {
	  const res = Stream.prototype.on.call(this, ev, fn);
	  const state = this._readableState;
	  if (ev === 'data') {
	    // Update readableListening so that resume() may be a no-op
	    // a few lines down. This is needed to support once('readable').
	    state.readableListening = this.listenerCount('readable') > 0;

	    // Try start flowing on next tick if stream isn't explicitly paused.
	    if (state.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.flowing = false;
	      state.emittedReadable = false;
	      debug('on readable', state.length, state.reading);
	      if (state.length) {
	        emitReadable(this);
	      } else if (!state.reading) {
	        process.nextTick(nReadingNextTick, this);
	      }
	    }
	  }
	  return res
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function (ev, fn) {
	  const res = Stream.prototype.removeListener.call(this, ev, fn);
	  if (ev === 'readable') {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res
	};
	Readable.prototype.off = Readable.prototype.removeListener;
	Readable.prototype.removeAllListeners = function (ev) {
	  const res = Stream.prototype.removeAllListeners.apply(this, arguments);
	  if (ev === 'readable' || ev === undefined) {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res
	};
	function updateReadableListening(self) {
	  const state = self._readableState;
	  state.readableListening = self.listenerCount('readable') > 0;
	  if (state.resumeScheduled && state[kPaused] === false) {
	    // Flowing needs to be set to true now, otherwise
	    // the upcoming resume will not flow.
	    state.flowing = true;

	    // Crude way to check if we should resume.
	  } else if (self.listenerCount('data') > 0) {
	    self.resume();
	  } else if (!state.readableListening) {
	    state.flowing = null;
	  }
	}
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  const state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    // We flow only if there is no one listening
	    // for readable, but we still have to call
	    // resume().
	    state.flowing = !state.readableListening;
	    resume(this, state);
	  }
	  state[kPaused] = false;
	  return this
	};
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(resume_, stream, state);
	  }
	}
	function resume_(stream, state) {
	  debug('resume', state.reading);
	  if (!state.reading) {
	    stream.read(0);
	  }
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (this._readableState.flowing !== false) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  this._readableState[kPaused] = true;
	  return this
	};
	function flow(stream) {
	  const state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null);
	}

	// Wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  let paused = false;

	  // TODO (ronag): Should this.destroy(err) emit
	  // 'error' on the wrapped stream? Would require
	  // a static factory method, e.g. Readable.wrap(stream).

	  stream.on('data', (chunk) => {
	    if (!this.push(chunk) && stream.pause) {
	      paused = true;
	      stream.pause();
	    }
	  });
	  stream.on('end', () => {
	    this.push(null);
	  });
	  stream.on('error', (err) => {
	    errorOrDestroy(this, err);
	  });
	  stream.on('close', () => {
	    this.destroy();
	  });
	  stream.on('destroy', () => {
	    this.destroy();
	  });
	  this._read = () => {
	    if (paused && stream.resume) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  // Proxy all the other methods. Important when wrapping filters and duplexes.
	  const streamKeys = ObjectKeys(stream);
	  for (let j = 1; j < streamKeys.length; j++) {
	    const i = streamKeys[j];
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = stream[i].bind(stream);
	    }
	  }
	  return this
	};
	Readable.prototype[SymbolAsyncIterator] = function () {
	  return streamToAsyncIterator(this)
	};
	Readable.prototype.iterator = function (options) {
	  if (options !== undefined) {
	    validateObject(options, 'options');
	  }
	  return streamToAsyncIterator(this, options)
	};
	function streamToAsyncIterator(stream, options) {
	  if (typeof stream.read !== 'function') {
	    stream = Readable.wrap(stream, {
	      objectMode: true
	    });
	  }
	  const iter = createAsyncIterator(stream, options);
	  iter.stream = stream;
	  return iter
	}
	async function* createAsyncIterator(stream, options) {
	  let callback = nop;
	  function next(resolve) {
	    if (this === stream) {
	      callback();
	      callback = nop;
	    } else {
	      callback = resolve;
	    }
	  }
	  stream.on('readable', next);
	  let error;
	  const cleanup = eos(
	    stream,
	    {
	      writable: false
	    },
	    (err) => {
	      error = err ? aggregateTwoErrors(error, err) : null;
	      callback();
	      callback = nop;
	    }
	  );
	  try {
	    while (true) {
	      const chunk = stream.destroyed ? null : stream.read();
	      if (chunk !== null) {
	        yield chunk;
	      } else if (error) {
	        throw error
	      } else if (error === null) {
	        return
	      } else {
	        await new Promise(next);
	      }
	    }
	  } catch (err) {
	    error = aggregateTwoErrors(error, err);
	    throw error
	  } finally {
	    if (
	      (error || (options === null || options === undefined ? undefined : options.destroyOnReturn) !== false) &&
	      (error === undefined || stream._readableState.autoDestroy)
	    ) {
	      destroyImpl.destroyer(stream, null);
	    } else {
	      stream.off('readable', next);
	      cleanup();
	    }
	  }
	}

	// Making it explicit these properties are not enumerable
	// because otherwise some prototype manipulation in
	// userland will fail.
	ObjectDefineProperties(Readable.prototype, {
	  readable: {
	    __proto__: null,
	    get() {
	      const r = this._readableState;
	      // r.readable === false means that this is part of a Duplex stream
	      // where the readable side was disabled upon construction.
	      // Compat. The user might manually disable readable side through
	      // deprecated setter.
	      return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted
	    },
	    set(val) {
	      // Backwards compat.
	      if (this._readableState) {
	        this._readableState.readable = !!val;
	      }
	    }
	  },
	  readableDidRead: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.dataEmitted
	    }
	  },
	  readableAborted: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return !!(
	        this._readableState.readable !== false &&
	        (this._readableState.destroyed || this._readableState.errored) &&
	        !this._readableState.endEmitted
	      )
	    }
	  },
	  readableHighWaterMark: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.highWaterMark
	    }
	  },
	  readableBuffer: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState && this._readableState.buffer
	    }
	  },
	  readableFlowing: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return this._readableState.flowing
	    },
	    set: function (state) {
	      if (this._readableState) {
	        this._readableState.flowing = state;
	      }
	    }
	  },
	  readableLength: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState.length
	    }
	  },
	  readableObjectMode: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.objectMode : false
	    }
	  },
	  readableEncoding: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.encoding : null
	    }
	  },
	  errored: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.errored : null
	    }
	  },
	  closed: {
	    __proto__: null,
	    get() {
	      return this._readableState ? this._readableState.closed : false
	    }
	  },
	  destroyed: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.destroyed : false
	    },
	    set(value) {
	      // We ignore the value if the stream
	      // has not been initialized yet.
	      if (!this._readableState) {
	        return
	      }

	      // Backward compatibility, the user is explicitly
	      // managing destroyed.
	      this._readableState.destroyed = value;
	    }
	  },
	  readableEnded: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._readableState ? this._readableState.endEmitted : false
	    }
	  }
	});
	ObjectDefineProperties(ReadableState.prototype, {
	  // Legacy getter for `pipesCount`.
	  pipesCount: {
	    __proto__: null,
	    get() {
	      return this.pipes.length
	    }
	  },
	  // Legacy property for `paused`.
	  paused: {
	    __proto__: null,
	    get() {
	      return this[kPaused] !== false
	    },
	    set(value) {
	      this[kPaused] = !!value;
	    }
	  }
	});

	// Exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered.
	  if (state.length === 0) return null
	  let ret;
	  if (state.objectMode) ret = state.buffer.shift();
	  else if (!n || n >= state.length) {
	    // Read it all, truncate the list.
	    if (state.decoder) ret = state.buffer.join('');
	    else if (state.buffer.length === 1) ret = state.buffer.first();
	    else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list.
	    ret = state.buffer.consume(n, state.decoder);
	  }
	  return ret
	}
	function endReadable(stream) {
	  const state = stream._readableState;
	  debug('endReadable', state.endEmitted);
	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(endReadableNT, state, stream);
	  }
	}
	function endReadableNT(state, stream) {
	  debug('endReadableNT', state.endEmitted, state.length);

	  // Check that we didn't get one last unshift.
	  if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.emit('end');
	    if (stream.writable && stream.allowHalfOpen === false) {
	      process.nextTick(endWritableNT, stream);
	    } else if (state.autoDestroy) {
	      // In case of duplex streams we need a way to detect
	      // if the writable side is ready for autoDestroy as well.
	      const wState = stream._writableState;
	      const autoDestroy =
	        !wState ||
	        (wState.autoDestroy &&
	          // We don't expect the writable to ever 'finish'
	          // if writable is explicitly set to false.
	          (wState.finished || wState.writable === false));
	      if (autoDestroy) {
	        stream.destroy();
	      }
	    }
	  }
	}
	function endWritableNT(stream) {
	  const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
	  if (writable) {
	    stream.end();
	  }
	}
	Readable.from = function (iterable, opts) {
	  return from(Readable, iterable, opts)
	};
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Readable.fromWeb = function (readableStream, options) {
	  return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options)
	};
	Readable.toWeb = function (streamReadable, options) {
	  return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options)
	};
	Readable.wrap = function (src, options) {
	  var _ref, _src$readableObjectMo;
	  return new Readable({
	    objectMode:
	      (_ref =
	        (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== undefined
	          ? _src$readableObjectMo
	          : src.objectMode) !== null && _ref !== undefined
	        ? _ref
	        : true,
	    ...options,
	    destroy(err, callback) {
	      destroyImpl.destroyer(src, err);
	      callback(err);
	    }
	  }).wrap(src)
	};
	return readable$1;
}

/* replacement start */

var writable;
var hasRequiredWritable;

function requireWritable () {
	if (hasRequiredWritable) return writable;
	hasRequiredWritable = 1;
	const process = requireProcess()

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	;	const {
	  ArrayPrototypeSlice,
	  Error,
	  FunctionPrototypeSymbolHasInstance,
	  ObjectDefineProperty,
	  ObjectDefineProperties,
	  ObjectSetPrototypeOf,
	  StringPrototypeToLowerCase,
	  Symbol,
	  SymbolHasInstance
	} = requirePrimordials();
	writable = Writable;
	Writable.WritableState = WritableState;
	const { EventEmitter: EE } = require$$2$1;
	const Stream = requireLegacy$1().Stream;
	const { Buffer } = require$$0$4;
	const destroyImpl = requireDestroy$1();
	const { addAbortSignal } = requireAddAbortSignal();
	const { getHighWaterMark, getDefaultHighWaterMark } = requireState$1();
	const {
	  ERR_INVALID_ARG_TYPE,
	  ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_MULTIPLE_CALLBACK,
	  ERR_STREAM_CANNOT_PIPE,
	  ERR_STREAM_DESTROYED,
	  ERR_STREAM_ALREADY_FINISHED,
	  ERR_STREAM_NULL_VALUES,
	  ERR_STREAM_WRITE_AFTER_END,
	  ERR_UNKNOWN_ENCODING
	} = requireErrors$1().codes;
	const { errorOrDestroy } = destroyImpl;
	ObjectSetPrototypeOf(Writable.prototype, Stream.prototype);
	ObjectSetPrototypeOf(Writable, Stream);
	function nop() {}
	const kOnFinished = Symbol('kOnFinished');
	function WritableState(options, stream, isDuplex) {
	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream,
	  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof requireDuplex();

	  // Object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!(options && options.objectMode);
	  if (isDuplex) this.objectMode = this.objectMode || !!(options && options.writableObjectMode);

	  // The point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write().
	  this.highWaterMark = options
	    ? getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex)
	    : getDefaultHighWaterMark(false);

	  // if _final has been called.
	  this.finalCalled = false;

	  // drain event flag.
	  this.needDrain = false;
	  // At the start of calling end()
	  this.ending = false;
	  // When end() has been called, and returned.
	  this.ended = false;
	  // When 'finish' is emitted.
	  this.finished = false;

	  // Has it been destroyed
	  this.destroyed = false;

	  // Should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  const noDecode = !!(options && options.decodeStrings === false);
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = (options && options.defaultEncoding) || 'utf8';

	  // Not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // A flag to see when we're in the middle of a write.
	  this.writing = false;

	  // When true all writes will be buffered until .uncork() call.
	  this.corked = 0;

	  // A flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // A flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // The callback that's passed to _write(chunk, cb).
	  this.onwrite = onwrite.bind(undefined, stream);

	  // The callback that the user supplies to write(chunk, encoding, cb).
	  this.writecb = null;

	  // The amount that is being written when _write is called.
	  this.writelen = 0;

	  // Storage for data passed to the afterWrite() callback in case of
	  // synchronous _write() completion.
	  this.afterWriteTickInfo = null;
	  resetBuffer(this);

	  // Number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted.
	  this.pendingcb = 0;

	  // Stream is still being constructed and cannot be
	  // destroyed until construction finished or failed.
	  // Async construction is opt in, therefore we start as
	  // constructed.
	  this.constructed = true;

	  // Emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams.
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again.
	  this.errorEmitted = false;

	  // Should close be emitted on destroy. Defaults to true.
	  this.emitClose = !options || options.emitClose !== false;

	  // Should .destroy() be called after 'finish' (and potentially 'end').
	  this.autoDestroy = !options || options.autoDestroy !== false;

	  // Indicates whether the stream has errored. When true all write() calls
	  // should return false. This is needed since when autoDestroy
	  // is disabled we need a way to tell whether the stream has failed.
	  this.errored = null;

	  // Indicates whether the stream has finished destroying.
	  this.closed = false;

	  // True if close has been emitted or would have been emitted
	  // depending on emitClose.
	  this.closeEmitted = false;
	  this[kOnFinished] = [];
	}
	function resetBuffer(state) {
	  state.buffered = [];
	  state.bufferedIndex = 0;
	  state.allBuffers = true;
	  state.allNoop = true;
	}
	WritableState.prototype.getBuffer = function getBuffer() {
	  return ArrayPrototypeSlice(this.buffered, this.bufferedIndex)
	};
	ObjectDefineProperty(WritableState.prototype, 'bufferedRequestCount', {
	  __proto__: null,
	  get() {
	    return this.buffered.length - this.bufferedIndex
	  }
	});
	function Writable(options) {
	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the WritableState constructor, at least with V8 6.5.
	  const isDuplex = this instanceof requireDuplex();
	  if (!isDuplex && !FunctionPrototypeSymbolHasInstance(Writable, this)) return new Writable(options)
	  this._writableState = new WritableState(options, this, isDuplex);
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	    if (typeof options.writev === 'function') this._writev = options.writev;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	    if (typeof options.final === 'function') this._final = options.final;
	    if (typeof options.construct === 'function') this._construct = options.construct;
	    if (options.signal) addAbortSignal(options.signal, this);
	  }
	  Stream.call(this, options);
	  destroyImpl.construct(this, () => {
	    const state = this._writableState;
	    if (!state.writing) {
	      clearBuffer(this, state);
	    }
	    finishMaybe(this, state);
	  });
	}
	ObjectDefineProperty(Writable, SymbolHasInstance, {
	  __proto__: null,
	  value: function (object) {
	    if (FunctionPrototypeSymbolHasInstance(this, object)) return true
	    if (this !== Writable) return false
	    return object && object._writableState instanceof WritableState
	  }
	});

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function _write(stream, chunk, encoding, cb) {
	  const state = stream._writableState;
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = state.defaultEncoding;
	  } else {
	    if (!encoding) encoding = state.defaultEncoding;
	    else if (encoding !== 'buffer' && !Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding)
	    if (typeof cb !== 'function') cb = nop;
	  }
	  if (chunk === null) {
	    throw new ERR_STREAM_NULL_VALUES()
	  } else if (!state.objectMode) {
	    if (typeof chunk === 'string') {
	      if (state.decodeStrings !== false) {
	        chunk = Buffer.from(chunk, encoding);
	        encoding = 'buffer';
	      }
	    } else if (chunk instanceof Buffer) {
	      encoding = 'buffer';
	    } else if (Stream._isUint8Array(chunk)) {
	      chunk = Stream._uint8ArrayToBuffer(chunk);
	      encoding = 'buffer';
	    } else {
	      throw new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk)
	    }
	  }
	  let err;
	  if (state.ending) {
	    err = new ERR_STREAM_WRITE_AFTER_END();
	  } else if (state.destroyed) {
	    err = new ERR_STREAM_DESTROYED('write');
	  }
	  if (err) {
	    process.nextTick(cb, err);
	    errorOrDestroy(stream, err, true);
	    return err
	  }
	  state.pendingcb++;
	  return writeOrBuffer(stream, state, chunk, encoding, cb)
	}
	Writable.prototype.write = function (chunk, encoding, cb) {
	  return _write(this, chunk, encoding, cb) === true
	};
	Writable.prototype.cork = function () {
	  this._writableState.corked++;
	};
	Writable.prototype.uncork = function () {
	  const state = this._writableState;
	  if (state.corked) {
	    state.corked--;
	    if (!state.writing) clearBuffer(this, state);
	  }
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = StringPrototypeToLowerCase(encoding);
	  if (!Buffer.isEncoding(encoding)) throw new ERR_UNKNOWN_ENCODING(encoding)
	  this._writableState.defaultEncoding = encoding;
	  return this
	};

	// If we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, callback) {
	  const len = state.objectMode ? 1 : chunk.length;
	  state.length += len;

	  // stream._write resets state.length
	  const ret = state.length < state.highWaterMark;
	  // We must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	  if (state.writing || state.corked || state.errored || !state.constructed) {
	    state.buffered.push({
	      chunk,
	      encoding,
	      callback
	    });
	    if (state.allBuffers && encoding !== 'buffer') {
	      state.allBuffers = false;
	    }
	    if (state.allNoop && callback !== nop) {
	      state.allNoop = false;
	    }
	  } else {
	    state.writelen = len;
	    state.writecb = callback;
	    state.writing = true;
	    state.sync = true;
	    stream._write(chunk, encoding, state.onwrite);
	    state.sync = false;
	  }

	  // Return false if errored or destroyed in order to break
	  // any synchronous while(stream.write(data)) loops.
	  return ret && !state.errored && !state.destroyed
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
	  else if (writev) stream._writev(chunk, state.onwrite);
	  else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	function onwriteError(stream, state, er, cb) {
	  --state.pendingcb;
	  cb(er);
	  // Ensure callbacks are invoked even when autoDestroy is
	  // not enabled. Passing `er` here doesn't make sense since
	  // it's related to one specific write, not to the buffered
	  // writes.
	  errorBuffer(state);
	  // This can emit error, but error must always follow cb.
	  errorOrDestroy(stream, er);
	}
	function onwrite(stream, er) {
	  const state = stream._writableState;
	  const sync = state.sync;
	  const cb = state.writecb;
	  if (typeof cb !== 'function') {
	    errorOrDestroy(stream, new ERR_MULTIPLE_CALLBACK());
	    return
	  }
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	  if (er) {
	    // Avoid V8 leak, https://github.com/nodejs/node/pull/34103#issuecomment-652002364
	    er.stack; // eslint-disable-line no-unused-expressions

	    if (!state.errored) {
	      state.errored = er;
	    }

	    // In case of duplex streams we need to notify the readable side of the
	    // error.
	    if (stream._readableState && !stream._readableState.errored) {
	      stream._readableState.errored = er;
	    }
	    if (sync) {
	      process.nextTick(onwriteError, stream, state, er, cb);
	    } else {
	      onwriteError(stream, state, er, cb);
	    }
	  } else {
	    if (state.buffered.length > state.bufferedIndex) {
	      clearBuffer(stream, state);
	    }
	    if (sync) {
	      // It is a common case that the callback passed to .write() is always
	      // the same. In that case, we do not schedule a new nextTick(), but
	      // rather just increase a counter, to improve performance and avoid
	      // memory allocations.
	      if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
	        state.afterWriteTickInfo.count++;
	      } else {
	        state.afterWriteTickInfo = {
	          count: 1,
	          cb,
	          stream,
	          state
	        };
	        process.nextTick(afterWriteTick, state.afterWriteTickInfo);
	      }
	    } else {
	      afterWrite(stream, state, 1, cb);
	    }
	  }
	}
	function afterWriteTick({ stream, state, count, cb }) {
	  state.afterWriteTickInfo = null;
	  return afterWrite(stream, state, count, cb)
	}
	function afterWrite(stream, state, count, cb) {
	  const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
	  if (needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	  while (count-- > 0) {
	    state.pendingcb--;
	    cb();
	  }
	  if (state.destroyed) {
	    errorBuffer(state);
	  }
	  finishMaybe(stream, state);
	}

	// If there's something in the buffer waiting, then invoke callbacks.
	function errorBuffer(state) {
	  if (state.writing) {
	    return
	  }
	  for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
	    var _state$errored;
	    const { chunk, callback } = state.buffered[n];
	    const len = state.objectMode ? 1 : chunk.length;
	    state.length -= len;
	    callback(
	      (_state$errored = state.errored) !== null && _state$errored !== undefined
	        ? _state$errored
	        : new ERR_STREAM_DESTROYED('write')
	    );
	  }
	  const onfinishCallbacks = state[kOnFinished].splice(0);
	  for (let i = 0; i < onfinishCallbacks.length; i++) {
	    var _state$errored2;
	    onfinishCallbacks[i](
	      (_state$errored2 = state.errored) !== null && _state$errored2 !== undefined
	        ? _state$errored2
	        : new ERR_STREAM_DESTROYED('end')
	    );
	  }
	  resetBuffer(state);
	}

	// If there's something in the buffer waiting, then process it.
	function clearBuffer(stream, state) {
	  if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
	    return
	  }
	  const { buffered, bufferedIndex, objectMode } = state;
	  const bufferedLength = buffered.length - bufferedIndex;
	  if (!bufferedLength) {
	    return
	  }
	  let i = bufferedIndex;
	  state.bufferProcessing = true;
	  if (bufferedLength > 1 && stream._writev) {
	    state.pendingcb -= bufferedLength - 1;
	    const callback = state.allNoop
	      ? nop
	      : (err) => {
	          for (let n = i; n < buffered.length; ++n) {
	            buffered[n].callback(err);
	          }
	        };
	    // Make a copy of `buffered` if it's going to be used by `callback` above,
	    // since `doWrite` will mutate the array.
	    const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
	    chunks.allBuffers = state.allBuffers;
	    doWrite(stream, state, true, state.length, chunks, '', callback);
	    resetBuffer(state);
	  } else {
	    do {
	      const { chunk, encoding, callback } = buffered[i];
	      buffered[i++] = null;
	      const len = objectMode ? 1 : chunk.length;
	      doWrite(stream, state, false, len, chunk, encoding, callback);
	    } while (i < buffered.length && !state.writing)
	    if (i === buffered.length) {
	      resetBuffer(state);
	    } else if (i > 256) {
	      buffered.splice(0, i);
	      state.bufferedIndex = 0;
	    } else {
	      state.bufferedIndex = i;
	    }
	  }
	  state.bufferProcessing = false;
	}
	Writable.prototype._write = function (chunk, encoding, cb) {
	  if (this._writev) {
	    this._writev(
	      [
	        {
	          chunk,
	          encoding
	        }
	      ],
	      cb
	    );
	  } else {
	    throw new ERR_METHOD_NOT_IMPLEMENTED('_write()')
	  }
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function (chunk, encoding, cb) {
	  const state = this._writableState;
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	  let err;
	  if (chunk !== null && chunk !== undefined) {
	    const ret = _write(this, chunk, encoding);
	    if (ret instanceof Error) {
	      err = ret;
	    }
	  }

	  // .end() fully uncorks.
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	  if (err) ; else if (!state.errored && !state.ending) {
	    // This is forgiving in terms of unnecessary calls to end() and can hide
	    // logic errors. However, usually such errors are harmless and causing a
	    // hard error can be disproportionately destructive. It is not always
	    // trivial for the user to determine whether end() needs to be called
	    // or not.

	    state.ending = true;
	    finishMaybe(this, state, true);
	    state.ended = true;
	  } else if (state.finished) {
	    err = new ERR_STREAM_ALREADY_FINISHED('end');
	  } else if (state.destroyed) {
	    err = new ERR_STREAM_DESTROYED('end');
	  }
	  if (typeof cb === 'function') {
	    if (err || state.finished) {
	      process.nextTick(cb, err);
	    } else {
	      state[kOnFinished].push(cb);
	    }
	  }
	  return this
	};
	function needFinish(state) {
	  return (
	    state.ending &&
	    !state.destroyed &&
	    state.constructed &&
	    state.length === 0 &&
	    !state.errored &&
	    state.buffered.length === 0 &&
	    !state.finished &&
	    !state.writing &&
	    !state.errorEmitted &&
	    !state.closeEmitted
	  )
	}
	function callFinal(stream, state) {
	  let called = false;
	  function onFinish(err) {
	    if (called) {
	      errorOrDestroy(stream, err !== null && err !== undefined ? err : ERR_MULTIPLE_CALLBACK());
	      return
	    }
	    called = true;
	    state.pendingcb--;
	    if (err) {
	      const onfinishCallbacks = state[kOnFinished].splice(0);
	      for (let i = 0; i < onfinishCallbacks.length; i++) {
	        onfinishCallbacks[i](err);
	      }
	      errorOrDestroy(stream, err, state.sync);
	    } else if (needFinish(state)) {
	      state.prefinished = true;
	      stream.emit('prefinish');
	      // Backwards compat. Don't check state.sync here.
	      // Some streams assume 'finish' will be emitted
	      // asynchronously relative to _final callback.
	      state.pendingcb++;
	      process.nextTick(finish, stream, state);
	    }
	  }
	  state.sync = true;
	  state.pendingcb++;
	  try {
	    stream._final(onFinish);
	  } catch (err) {
	    onFinish(err);
	  }
	  state.sync = false;
	}
	function prefinish(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === 'function' && !state.destroyed) {
	      state.finalCalled = true;
	      callFinal(stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit('prefinish');
	    }
	  }
	}
	function finishMaybe(stream, state, sync) {
	  if (needFinish(state)) {
	    prefinish(stream, state);
	    if (state.pendingcb === 0) {
	      if (sync) {
	        state.pendingcb++;
	        process.nextTick(
	          (stream, state) => {
	            if (needFinish(state)) {
	              finish(stream, state);
	            } else {
	              state.pendingcb--;
	            }
	          },
	          stream,
	          state
	        );
	      } else if (needFinish(state)) {
	        state.pendingcb++;
	        finish(stream, state);
	      }
	    }
	  }
	}
	function finish(stream, state) {
	  state.pendingcb--;
	  state.finished = true;
	  const onfinishCallbacks = state[kOnFinished].splice(0);
	  for (let i = 0; i < onfinishCallbacks.length; i++) {
	    onfinishCallbacks[i]();
	  }
	  stream.emit('finish');
	  if (state.autoDestroy) {
	    // In case of duplex streams we need a way to detect
	    // if the readable side is ready for autoDestroy as well.
	    const rState = stream._readableState;
	    const autoDestroy =
	      !rState ||
	      (rState.autoDestroy &&
	        // We don't expect the readable to ever 'end'
	        // if readable is explicitly set to false.
	        (rState.endEmitted || rState.readable === false));
	    if (autoDestroy) {
	      stream.destroy();
	    }
	  }
	}
	ObjectDefineProperties(Writable.prototype, {
	  closed: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.closed : false
	    }
	  },
	  destroyed: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.destroyed : false
	    },
	    set(value) {
	      // Backward compatibility, the user is explicitly managing destroyed.
	      if (this._writableState) {
	        this._writableState.destroyed = value;
	      }
	    }
	  },
	  writable: {
	    __proto__: null,
	    get() {
	      const w = this._writableState;
	      // w.writable === false means that this is part of a Duplex stream
	      // where the writable side was disabled upon construction.
	      // Compat. The user might manually disable writable side through
	      // deprecated setter.
	      return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended
	    },
	    set(val) {
	      // Backwards compatible.
	      if (this._writableState) {
	        this._writableState.writable = !!val;
	      }
	    }
	  },
	  writableFinished: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.finished : false
	    }
	  },
	  writableObjectMode: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.objectMode : false
	    }
	  },
	  writableBuffer: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.getBuffer()
	    }
	  },
	  writableEnded: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.ending : false
	    }
	  },
	  writableNeedDrain: {
	    __proto__: null,
	    get() {
	      const wState = this._writableState;
	      if (!wState) return false
	      return !wState.destroyed && !wState.ending && wState.needDrain
	    }
	  },
	  writableHighWaterMark: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.highWaterMark
	    }
	  },
	  writableCorked: {
	    __proto__: null,
	    get() {
	      return this._writableState ? this._writableState.corked : 0
	    }
	  },
	  writableLength: {
	    __proto__: null,
	    get() {
	      return this._writableState && this._writableState.length
	    }
	  },
	  errored: {
	    __proto__: null,
	    enumerable: false,
	    get() {
	      return this._writableState ? this._writableState.errored : null
	    }
	  },
	  writableAborted: {
	    __proto__: null,
	    enumerable: false,
	    get: function () {
	      return !!(
	        this._writableState.writable !== false &&
	        (this._writableState.destroyed || this._writableState.errored) &&
	        !this._writableState.finished
	      )
	    }
	  }
	});
	const destroy = destroyImpl.destroy;
	Writable.prototype.destroy = function (err, cb) {
	  const state = this._writableState;

	  // Invoke pending callbacks.
	  if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) {
	    process.nextTick(errorBuffer, state);
	  }
	  destroy.call(this, err, cb);
	  return this
	};
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function (err, cb) {
	  cb(err);
	};
	Writable.prototype[EE.captureRejectionSymbol] = function (err) {
	  this.destroy(err);
	};
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Writable.fromWeb = function (writableStream, options) {
	  return lazyWebStreams().newStreamWritableFromWritableStream(writableStream, options)
	};
	Writable.toWeb = function (streamWritable) {
	  return lazyWebStreams().newWritableStreamFromStreamWritable(streamWritable)
	};
	return writable;
}

/* replacement start */

var duplexify;
var hasRequiredDuplexify;

function requireDuplexify () {
	if (hasRequiredDuplexify) return duplexify;
	hasRequiredDuplexify = 1;
	const process = requireProcess()

	/* replacement end */

	;	const bufferModule = require$$0$4;
	const {
	  isReadable,
	  isWritable,
	  isIterable,
	  isNodeStream,
	  isReadableNodeStream,
	  isWritableNodeStream,
	  isDuplexNodeStream,
	  isReadableStream,
	  isWritableStream
	} = requireUtils();
	const eos = requireEndOfStream$1();
	const {
	  AbortError,
	  codes: { ERR_INVALID_ARG_TYPE, ERR_INVALID_RETURN_VALUE }
	} = requireErrors$1();
	const { destroyer } = requireDestroy$1();
	const Duplex = requireDuplex();
	const Readable = requireReadable$1();
	const Writable = requireWritable();
	const { createDeferredPromise } = requireUtil();
	const from = requireFrom$1();
	const Blob = globalThis.Blob || bufferModule.Blob;
	const isBlob =
	  typeof Blob !== 'undefined'
	    ? function isBlob(b) {
	        return b instanceof Blob
	      }
	    : function isBlob(b) {
	        return false
	      };
	const AbortController = globalThis.AbortController || require$$0.AbortController;
	const { FunctionPrototypeCall } = requirePrimordials();

	// This is needed for pre node 17.
	class Duplexify extends Duplex {
	  constructor(options) {
	    super(options);

	    // https://github.com/nodejs/node/pull/34385

	    if ((options === null || options === undefined ? undefined : options.readable) === false) {
	      this._readableState.readable = false;
	      this._readableState.ended = true;
	      this._readableState.endEmitted = true;
	    }
	    if ((options === null || options === undefined ? undefined : options.writable) === false) {
	      this._writableState.writable = false;
	      this._writableState.ending = true;
	      this._writableState.ended = true;
	      this._writableState.finished = true;
	    }
	  }
	}
	duplexify = function duplexify(body, name) {
	  if (isDuplexNodeStream(body)) {
	    return body
	  }
	  if (isReadableNodeStream(body)) {
	    return _duplexify({
	      readable: body
	    })
	  }
	  if (isWritableNodeStream(body)) {
	    return _duplexify({
	      writable: body
	    })
	  }
	  if (isNodeStream(body)) {
	    return _duplexify({
	      writable: false,
	      readable: false
	    })
	  }
	  if (isReadableStream(body)) {
	    return _duplexify({
	      readable: Readable.fromWeb(body)
	    })
	  }
	  if (isWritableStream(body)) {
	    return _duplexify({
	      writable: Writable.fromWeb(body)
	    })
	  }
	  if (typeof body === 'function') {
	    const { value, write, final, destroy } = fromAsyncGen(body);
	    if (isIterable(value)) {
	      return from(Duplexify, value, {
	        // TODO (ronag): highWaterMark?
	        objectMode: true,
	        write,
	        final,
	        destroy
	      })
	    }
	    const then = value === null || value === undefined ? undefined : value.then;
	    if (typeof then === 'function') {
	      let d;
	      const promise = FunctionPrototypeCall(
	        then,
	        value,
	        (val) => {
	          if (val != null) {
	            throw new ERR_INVALID_RETURN_VALUE('nully', 'body', val)
	          }
	        },
	        (err) => {
	          destroyer(d, err);
	        }
	      );
	      return (d = new Duplexify({
	        // TODO (ronag): highWaterMark?
	        objectMode: true,
	        readable: false,
	        write,
	        final(cb) {
	          final(async () => {
	            try {
	              await promise;
	              process.nextTick(cb, null);
	            } catch (err) {
	              process.nextTick(cb, err);
	            }
	          });
	        },
	        destroy
	      }))
	    }
	    throw new ERR_INVALID_RETURN_VALUE('Iterable, AsyncIterable or AsyncFunction', name, value)
	  }
	  if (isBlob(body)) {
	    return duplexify(body.arrayBuffer())
	  }
	  if (isIterable(body)) {
	    return from(Duplexify, body, {
	      // TODO (ronag): highWaterMark?
	      objectMode: true,
	      writable: false
	    })
	  }
	  if (
	    isReadableStream(body === null || body === undefined ? undefined : body.readable) &&
	    isWritableStream(body === null || body === undefined ? undefined : body.writable)
	  ) {
	    return Duplexify.fromWeb(body)
	  }
	  if (
	    typeof (body === null || body === undefined ? undefined : body.writable) === 'object' ||
	    typeof (body === null || body === undefined ? undefined : body.readable) === 'object'
	  ) {
	    const readable =
	      body !== null && body !== undefined && body.readable
	        ? isReadableNodeStream(body === null || body === undefined ? undefined : body.readable)
	          ? body === null || body === undefined
	            ? undefined
	            : body.readable
	          : duplexify(body.readable)
	        : undefined;
	    const writable =
	      body !== null && body !== undefined && body.writable
	        ? isWritableNodeStream(body === null || body === undefined ? undefined : body.writable)
	          ? body === null || body === undefined
	            ? undefined
	            : body.writable
	          : duplexify(body.writable)
	        : undefined;
	    return _duplexify({
	      readable,
	      writable
	    })
	  }
	  const then = body === null || body === undefined ? undefined : body.then;
	  if (typeof then === 'function') {
	    let d;
	    FunctionPrototypeCall(
	      then,
	      body,
	      (val) => {
	        if (val != null) {
	          d.push(val);
	        }
	        d.push(null);
	      },
	      (err) => {
	        destroyer(d, err);
	      }
	    );
	    return (d = new Duplexify({
	      objectMode: true,
	      writable: false,
	      read() {}
	    }))
	  }
	  throw new ERR_INVALID_ARG_TYPE(
	    name,
	    [
	      'Blob',
	      'ReadableStream',
	      'WritableStream',
	      'Stream',
	      'Iterable',
	      'AsyncIterable',
	      'Function',
	      '{ readable, writable } pair',
	      'Promise'
	    ],
	    body
	  )
	};
	function fromAsyncGen(fn) {
	  let { promise, resolve } = createDeferredPromise();
	  const ac = new AbortController();
	  const signal = ac.signal;
	  const value = fn(
	    (async function* () {
	      while (true) {
	        const _promise = promise;
	        promise = null;
	        const { chunk, done, cb } = await _promise;
	        process.nextTick(cb);
	        if (done) return
	        if (signal.aborted)
	          throw new AbortError(undefined, {
	            cause: signal.reason
	          })
	        ;({ promise, resolve } = createDeferredPromise());
	        yield chunk;
	      }
	    })(),
	    {
	      signal
	    }
	  );
	  return {
	    value,
	    write(chunk, encoding, cb) {
	      const _resolve = resolve;
	      resolve = null;
	      _resolve({
	        chunk,
	        done: false,
	        cb
	      });
	    },
	    final(cb) {
	      const _resolve = resolve;
	      resolve = null;
	      _resolve({
	        done: true,
	        cb
	      });
	    },
	    destroy(err, cb) {
	      ac.abort();
	      cb(err);
	    }
	  }
	}
	function _duplexify(pair) {
	  const r = pair.readable && typeof pair.readable.read !== 'function' ? Readable.wrap(pair.readable) : pair.readable;
	  const w = pair.writable;
	  let readable = !!isReadable(r);
	  let writable = !!isWritable(w);
	  let ondrain;
	  let onfinish;
	  let onreadable;
	  let onclose;
	  let d;
	  function onfinished(err) {
	    const cb = onclose;
	    onclose = null;
	    if (cb) {
	      cb(err);
	    } else if (err) {
	      d.destroy(err);
	    }
	  }

	  // TODO(ronag): Avoid double buffering.
	  // Implement Writable/Readable/Duplex traits.
	  // See, https://github.com/nodejs/node/pull/33515.
	  d = new Duplexify({
	    // TODO (ronag): highWaterMark?
	    readableObjectMode: !!(r !== null && r !== undefined && r.readableObjectMode),
	    writableObjectMode: !!(w !== null && w !== undefined && w.writableObjectMode),
	    readable,
	    writable
	  });
	  if (writable) {
	    eos(w, (err) => {
	      writable = false;
	      if (err) {
	        destroyer(r, err);
	      }
	      onfinished(err);
	    });
	    d._write = function (chunk, encoding, callback) {
	      if (w.write(chunk, encoding)) {
	        callback();
	      } else {
	        ondrain = callback;
	      }
	    };
	    d._final = function (callback) {
	      w.end();
	      onfinish = callback;
	    };
	    w.on('drain', function () {
	      if (ondrain) {
	        const cb = ondrain;
	        ondrain = null;
	        cb();
	      }
	    });
	    w.on('finish', function () {
	      if (onfinish) {
	        const cb = onfinish;
	        onfinish = null;
	        cb();
	      }
	    });
	  }
	  if (readable) {
	    eos(r, (err) => {
	      readable = false;
	      if (err) {
	        destroyer(r, err);
	      }
	      onfinished(err);
	    });
	    r.on('readable', function () {
	      if (onreadable) {
	        const cb = onreadable;
	        onreadable = null;
	        cb();
	      }
	    });
	    r.on('end', function () {
	      d.push(null);
	    });
	    d._read = function () {
	      while (true) {
	        const buf = r.read();
	        if (buf === null) {
	          onreadable = d._read;
	          return
	        }
	        if (!d.push(buf)) {
	          return
	        }
	      }
	    };
	  }
	  d._destroy = function (err, callback) {
	    if (!err && onclose !== null) {
	      err = new AbortError();
	    }
	    onreadable = null;
	    ondrain = null;
	    onfinish = null;
	    if (onclose === null) {
	      callback(err);
	    } else {
	      onclose = callback;
	      destroyer(w, err);
	      destroyer(r, err);
	    }
	  };
	  return d
	}
	return duplexify;
}

var duplex;
var hasRequiredDuplex;

function requireDuplex () {
	if (hasRequiredDuplex) return duplex;
	hasRequiredDuplex = 1;

	const {
	  ObjectDefineProperties,
	  ObjectGetOwnPropertyDescriptor,
	  ObjectKeys,
	  ObjectSetPrototypeOf
	} = requirePrimordials();
	duplex = Duplex;
	const Readable = requireReadable$1();
	const Writable = requireWritable();
	ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
	ObjectSetPrototypeOf(Duplex, Readable);
	{
	  const keys = ObjectKeys(Writable.prototype);
	  // Allow the keys array to be GC'ed.
	  for (let i = 0; i < keys.length; i++) {
	    const method = keys[i];
	    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	  }
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options)
	  Readable.call(this, options);
	  Writable.call(this, options);
	  if (options) {
	    this.allowHalfOpen = options.allowHalfOpen !== false;
	    if (options.readable === false) {
	      this._readableState.readable = false;
	      this._readableState.ended = true;
	      this._readableState.endEmitted = true;
	    }
	    if (options.writable === false) {
	      this._writableState.writable = false;
	      this._writableState.ending = true;
	      this._writableState.ended = true;
	      this._writableState.finished = true;
	    }
	  } else {
	    this.allowHalfOpen = true;
	  }
	}
	ObjectDefineProperties(Duplex.prototype, {
	  writable: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writable')
	  },
	  writableHighWaterMark: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableHighWaterMark')
	  },
	  writableObjectMode: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableObjectMode')
	  },
	  writableBuffer: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableBuffer')
	  },
	  writableLength: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableLength')
	  },
	  writableFinished: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableFinished')
	  },
	  writableCorked: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableCorked')
	  },
	  writableEnded: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableEnded')
	  },
	  writableNeedDrain: {
	    __proto__: null,
	    ...ObjectGetOwnPropertyDescriptor(Writable.prototype, 'writableNeedDrain')
	  },
	  destroyed: {
	    __proto__: null,
	    get() {
	      if (this._readableState === undefined || this._writableState === undefined) {
	        return false
	      }
	      return this._readableState.destroyed && this._writableState.destroyed
	    },
	    set(value) {
	      // Backward compatibility, the user is explicitly
	      // managing destroyed.
	      if (this._readableState && this._writableState) {
	        this._readableState.destroyed = value;
	        this._writableState.destroyed = value;
	      }
	    }
	  }
	});
	let webStreamsAdapters;

	// Lazy to avoid circular references
	function lazyWebStreams() {
	  if (webStreamsAdapters === undefined) webStreamsAdapters = {};
	  return webStreamsAdapters
	}
	Duplex.fromWeb = function (pair, options) {
	  return lazyWebStreams().newStreamDuplexFromReadableWritablePair(pair, options)
	};
	Duplex.toWeb = function (duplex) {
	  return lazyWebStreams().newReadableWritablePairFromDuplex(duplex)
	};
	let duplexify;
	Duplex.from = function (body) {
	  if (!duplexify) {
	    duplexify = requireDuplexify();
	  }
	  return duplexify(body, 'body')
	};
	return duplex;
}

var transform;
var hasRequiredTransform;

function requireTransform () {
	if (hasRequiredTransform) return transform;
	hasRequiredTransform = 1;

	const { ObjectSetPrototypeOf, Symbol } = requirePrimordials();
	transform = Transform;
	const { ERR_METHOD_NOT_IMPLEMENTED } = requireErrors$1().codes;
	const Duplex = requireDuplex();
	const { getHighWaterMark } = requireState$1();
	ObjectSetPrototypeOf(Transform.prototype, Duplex.prototype);
	ObjectSetPrototypeOf(Transform, Duplex);
	const kCallback = Symbol('kCallback');
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options)

	  // TODO (ronag): This should preferably always be
	  // applied but would be semver-major. Or even better;
	  // make Transform a Readable with the Writable interface.
	  const readableHighWaterMark = options ? getHighWaterMark(this, options, 'readableHighWaterMark', true) : null;
	  if (readableHighWaterMark === 0) {
	    // A Duplex will buffer both on the writable and readable side while
	    // a Transform just wants to buffer hwm number of elements. To avoid
	    // buffering twice we disable buffering on the writable side.
	    options = {
	      ...options,
	      highWaterMark: null,
	      readableHighWaterMark,
	      // TODO (ronag): 0 is not optimal since we have
	      // a "bug" where we check needDrain before calling _write and not after.
	      // Refs: https://github.com/nodejs/node/pull/32887
	      // Refs: https://github.com/nodejs/node/pull/35941
	      writableHighWaterMark: options.writableHighWaterMark || 0
	    };
	  }
	  Duplex.call(this, options);

	  // We have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	  this[kCallback] = null;
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  // Backwards compat. Some Transform streams incorrectly implement _final
	  // instead of or in addition to _flush. By using 'prefinish' instead of
	  // implementing _final we continue supporting this unfortunate use case.
	  this.on('prefinish', prefinish);
	}
	function final(cb) {
	  if (typeof this._flush === 'function' && !this.destroyed) {
	    this._flush((er, data) => {
	      if (er) {
	        if (cb) {
	          cb(er);
	        } else {
	          this.destroy(er);
	        }
	        return
	      }
	      if (data != null) {
	        this.push(data);
	      }
	      this.push(null);
	      if (cb) {
	        cb();
	      }
	    });
	  } else {
	    this.push(null);
	    if (cb) {
	      cb();
	    }
	  }
	}
	function prefinish() {
	  if (this._final !== final) {
	    final.call(this);
	  }
	}
	Transform.prototype._final = final;
	Transform.prototype._transform = function (chunk, encoding, callback) {
	  throw new ERR_METHOD_NOT_IMPLEMENTED('_transform()')
	};
	Transform.prototype._write = function (chunk, encoding, callback) {
	  const rState = this._readableState;
	  const wState = this._writableState;
	  const length = rState.length;
	  this._transform(chunk, encoding, (err, val) => {
	    if (err) {
	      callback(err);
	      return
	    }
	    if (val != null) {
	      this.push(val);
	    }
	    if (
	      wState.ended ||
	      // Backwards compat.
	      length === rState.length ||
	      // Backwards compat.
	      rState.length < rState.highWaterMark
	    ) {
	      callback();
	    } else {
	      this[kCallback] = callback;
	    }
	  });
	};
	Transform.prototype._read = function () {
	  if (this[kCallback]) {
	    const callback = this[kCallback];
	    this[kCallback] = null;
	    callback();
	  }
	};
	return transform;
}

var passthrough;
var hasRequiredPassthrough;

function requirePassthrough () {
	if (hasRequiredPassthrough) return passthrough;
	hasRequiredPassthrough = 1;

	const { ObjectSetPrototypeOf } = requirePrimordials();
	passthrough = PassThrough;
	const Transform = requireTransform();
	ObjectSetPrototypeOf(PassThrough.prototype, Transform.prototype);
	ObjectSetPrototypeOf(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options)
	  Transform.call(this, options);
	}
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};
	return passthrough;
}

/* replacement start */

var pipeline_1$1;
var hasRequiredPipeline$1;

function requirePipeline$1 () {
	if (hasRequiredPipeline$1) return pipeline_1$1;
	hasRequiredPipeline$1 = 1;
	const process = requireProcess()

	/* replacement end */
	// Ported from https://github.com/mafintosh/pump with
	// permission from the author, Mathias Buus (@mafintosh).

	;	const { ArrayIsArray, Promise, SymbolAsyncIterator, SymbolDispose } = requirePrimordials();
	const eos = requireEndOfStream$1();
	const { once } = requireUtil();
	const destroyImpl = requireDestroy$1();
	const Duplex = requireDuplex();
	const {
	  aggregateTwoErrors,
	  codes: {
	    ERR_INVALID_ARG_TYPE,
	    ERR_INVALID_RETURN_VALUE,
	    ERR_MISSING_ARGS,
	    ERR_STREAM_DESTROYED,
	    ERR_STREAM_PREMATURE_CLOSE
	  },
	  AbortError
	} = requireErrors$1();
	const { validateFunction, validateAbortSignal } = requireValidators();
	const {
	  isIterable,
	  isReadable,
	  isReadableNodeStream,
	  isNodeStream,
	  isTransformStream,
	  isWebStream,
	  isReadableStream,
	  isReadableFinished
	} = requireUtils();
	const AbortController = globalThis.AbortController || require$$0.AbortController;
	let PassThrough;
	let Readable;
	let addAbortListener;
	function destroyer(stream, reading, writing) {
	  let finished = false;
	  stream.on('close', () => {
	    finished = true;
	  });
	  const cleanup = eos(
	    stream,
	    {
	      readable: reading,
	      writable: writing
	    },
	    (err) => {
	      finished = !err;
	    }
	  );
	  return {
	    destroy: (err) => {
	      if (finished) return
	      finished = true;
	      destroyImpl.destroyer(stream, err || new ERR_STREAM_DESTROYED('pipe'));
	    },
	    cleanup
	  }
	}
	function popCallback(streams) {
	  // Streams should never be an empty array. It should always contain at least
	  // a single stream. Therefore optimize for the average case instead of
	  // checking for length === 0 as well.
	  validateFunction(streams[streams.length - 1], 'streams[stream.length - 1]');
	  return streams.pop()
	}
	function makeAsyncIterable(val) {
	  if (isIterable(val)) {
	    return val
	  } else if (isReadableNodeStream(val)) {
	    // Legacy streams are not Iterable.
	    return fromReadable(val)
	  }
	  throw new ERR_INVALID_ARG_TYPE('val', ['Readable', 'Iterable', 'AsyncIterable'], val)
	}
	async function* fromReadable(val) {
	  if (!Readable) {
	    Readable = requireReadable$1();
	  }
	  yield* Readable.prototype[SymbolAsyncIterator].call(val);
	}
	async function pumpToNode(iterable, writable, finish, { end }) {
	  let error;
	  let onresolve = null;
	  const resume = (err) => {
	    if (err) {
	      error = err;
	    }
	    if (onresolve) {
	      const callback = onresolve;
	      onresolve = null;
	      callback();
	    }
	  };
	  const wait = () =>
	    new Promise((resolve, reject) => {
	      if (error) {
	        reject(error);
	      } else {
	        onresolve = () => {
	          if (error) {
	            reject(error);
	          } else {
	            resolve();
	          }
	        };
	      }
	    });
	  writable.on('drain', resume);
	  const cleanup = eos(
	    writable,
	    {
	      readable: false
	    },
	    resume
	  );
	  try {
	    if (writable.writableNeedDrain) {
	      await wait();
	    }
	    for await (const chunk of iterable) {
	      if (!writable.write(chunk)) {
	        await wait();
	      }
	    }
	    if (end) {
	      writable.end();
	      await wait();
	    }
	    finish();
	  } catch (err) {
	    finish(error !== err ? aggregateTwoErrors(error, err) : err);
	  } finally {
	    cleanup();
	    writable.off('drain', resume);
	  }
	}
	async function pumpToWeb(readable, writable, finish, { end }) {
	  if (isTransformStream(writable)) {
	    writable = writable.writable;
	  }
	  // https://streams.spec.whatwg.org/#example-manual-write-with-backpressure
	  const writer = writable.getWriter();
	  try {
	    for await (const chunk of readable) {
	      await writer.ready;
	      writer.write(chunk).catch(() => {});
	    }
	    await writer.ready;
	    if (end) {
	      await writer.close();
	    }
	    finish();
	  } catch (err) {
	    try {
	      await writer.abort(err);
	      finish(err);
	    } catch (err) {
	      finish(err);
	    }
	  }
	}
	function pipeline(...streams) {
	  return pipelineImpl(streams, once(popCallback(streams)))
	}
	function pipelineImpl(streams, callback, opts) {
	  if (streams.length === 1 && ArrayIsArray(streams[0])) {
	    streams = streams[0];
	  }
	  if (streams.length < 2) {
	    throw new ERR_MISSING_ARGS('streams')
	  }
	  const ac = new AbortController();
	  const signal = ac.signal;
	  const outerSignal = opts === null || opts === undefined ? undefined : opts.signal;

	  // Need to cleanup event listeners if last stream is readable
	  // https://github.com/nodejs/node/issues/35452
	  const lastStreamCleanup = [];
	  validateAbortSignal(outerSignal, 'options.signal');
	  function abort() {
	    finishImpl(new AbortError());
	  }
	  addAbortListener = addAbortListener || requireUtil().addAbortListener;
	  let disposable;
	  if (outerSignal) {
	    disposable = addAbortListener(outerSignal, abort);
	  }
	  let error;
	  let value;
	  const destroys = [];
	  let finishCount = 0;
	  function finish(err) {
	    finishImpl(err, --finishCount === 0);
	  }
	  function finishImpl(err, final) {
	    var _disposable;
	    if (err && (!error || error.code === 'ERR_STREAM_PREMATURE_CLOSE')) {
	      error = err;
	    }
	    if (!error && !final) {
	      return
	    }
	    while (destroys.length) {
	      destroys.shift()(error);
	    }
(_disposable = disposable) === null || _disposable === undefined ? undefined : _disposable[SymbolDispose]();
	    ac.abort();
	    if (final) {
	      if (!error) {
	        lastStreamCleanup.forEach((fn) => fn());
	      }
	      process.nextTick(callback, error, value);
	    }
	  }
	  let ret;
	  for (let i = 0; i < streams.length; i++) {
	    const stream = streams[i];
	    const reading = i < streams.length - 1;
	    const writing = i > 0;
	    const end = reading || (opts === null || opts === undefined ? undefined : opts.end) !== false;
	    const isLastStream = i === streams.length - 1;
	    if (isNodeStream(stream)) {
	      if (end) {
	        const { destroy, cleanup } = destroyer(stream, reading, writing);
	        destroys.push(destroy);
	        if (isReadable(stream) && isLastStream) {
	          lastStreamCleanup.push(cleanup);
	        }
	      }

	      // Catch stream errors that occur after pipe/pump has completed.
	      function onError(err) {
	        if (err && err.name !== 'AbortError' && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
	          finish(err);
	        }
	      }
	      stream.on('error', onError);
	      if (isReadable(stream) && isLastStream) {
	        lastStreamCleanup.push(() => {
	          stream.removeListener('error', onError);
	        });
	      }
	    }
	    if (i === 0) {
	      if (typeof stream === 'function') {
	        ret = stream({
	          signal
	        });
	        if (!isIterable(ret)) {
	          throw new ERR_INVALID_RETURN_VALUE('Iterable, AsyncIterable or Stream', 'source', ret)
	        }
	      } else if (isIterable(stream) || isReadableNodeStream(stream) || isTransformStream(stream)) {
	        ret = stream;
	      } else {
	        ret = Duplex.from(stream);
	      }
	    } else if (typeof stream === 'function') {
	      if (isTransformStream(ret)) {
	        var _ret;
	        ret = makeAsyncIterable((_ret = ret) === null || _ret === undefined ? undefined : _ret.readable);
	      } else {
	        ret = makeAsyncIterable(ret);
	      }
	      ret = stream(ret, {
	        signal
	      });
	      if (reading) {
	        if (!isIterable(ret, true)) {
	          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable', `transform[${i - 1}]`, ret)
	        }
	      } else {
	        var _ret2;
	        if (!PassThrough) {
	          PassThrough = requirePassthrough();
	        }

	        // If the last argument to pipeline is not a stream
	        // we must create a proxy stream so that pipeline(...)
	        // always returns a stream which can be further
	        // composed through `.pipe(stream)`.

	        const pt = new PassThrough({
	          objectMode: true
	        });

	        // Handle Promises/A+ spec, `then` could be a getter that throws on
	        // second use.
	        const then = (_ret2 = ret) === null || _ret2 === undefined ? undefined : _ret2.then;
	        if (typeof then === 'function') {
	          finishCount++;
	          then.call(
	            ret,
	            (val) => {
	              value = val;
	              if (val != null) {
	                pt.write(val);
	              }
	              if (end) {
	                pt.end();
	              }
	              process.nextTick(finish);
	            },
	            (err) => {
	              pt.destroy(err);
	              process.nextTick(finish, err);
	            }
	          );
	        } else if (isIterable(ret, true)) {
	          finishCount++;
	          pumpToNode(ret, pt, finish, {
	            end
	          });
	        } else if (isReadableStream(ret) || isTransformStream(ret)) {
	          const toRead = ret.readable || ret;
	          finishCount++;
	          pumpToNode(toRead, pt, finish, {
	            end
	          });
	        } else {
	          throw new ERR_INVALID_RETURN_VALUE('AsyncIterable or Promise', 'destination', ret)
	        }
	        ret = pt;
	        const { destroy, cleanup } = destroyer(ret, false, true);
	        destroys.push(destroy);
	        if (isLastStream) {
	          lastStreamCleanup.push(cleanup);
	        }
	      }
	    } else if (isNodeStream(stream)) {
	      if (isReadableNodeStream(ret)) {
	        finishCount += 2;
	        const cleanup = pipe(ret, stream, finish, {
	          end
	        });
	        if (isReadable(stream) && isLastStream) {
	          lastStreamCleanup.push(cleanup);
	        }
	      } else if (isTransformStream(ret) || isReadableStream(ret)) {
	        const toRead = ret.readable || ret;
	        finishCount++;
	        pumpToNode(toRead, stream, finish, {
	          end
	        });
	      } else if (isIterable(ret)) {
	        finishCount++;
	        pumpToNode(ret, stream, finish, {
	          end
	        });
	      } else {
	        throw new ERR_INVALID_ARG_TYPE(
	          'val',
	          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
	          ret
	        )
	      }
	      ret = stream;
	    } else if (isWebStream(stream)) {
	      if (isReadableNodeStream(ret)) {
	        finishCount++;
	        pumpToWeb(makeAsyncIterable(ret), stream, finish, {
	          end
	        });
	      } else if (isReadableStream(ret) || isIterable(ret)) {
	        finishCount++;
	        pumpToWeb(ret, stream, finish, {
	          end
	        });
	      } else if (isTransformStream(ret)) {
	        finishCount++;
	        pumpToWeb(ret.readable, stream, finish, {
	          end
	        });
	      } else {
	        throw new ERR_INVALID_ARG_TYPE(
	          'val',
	          ['Readable', 'Iterable', 'AsyncIterable', 'ReadableStream', 'TransformStream'],
	          ret
	        )
	      }
	      ret = stream;
	    } else {
	      ret = Duplex.from(stream);
	    }
	  }
	  if (
	    (signal !== null && signal !== undefined && signal.aborted) ||
	    (outerSignal !== null && outerSignal !== undefined && outerSignal.aborted)
	  ) {
	    process.nextTick(abort);
	  }
	  return ret
	}
	function pipe(src, dst, finish, { end }) {
	  let ended = false;
	  dst.on('close', () => {
	    if (!ended) {
	      // Finish if the destination closes before the source has completed.
	      finish(new ERR_STREAM_PREMATURE_CLOSE());
	    }
	  });
	  src.pipe(dst, {
	    end: false
	  }); // If end is true we already will have a listener to end dst.

	  if (end) {
	    // Compat. Before node v10.12.0 stdio used to throw an error so
	    // pipe() did/does not end() stdio destinations.
	    // Now they allow it but "secretly" don't close the underlying fd.

	    function endFn() {
	      ended = true;
	      dst.end();
	    }
	    if (isReadableFinished(src)) {
	      // End the destination if the source has already ended.
	      process.nextTick(endFn);
	    } else {
	      src.once('end', endFn);
	    }
	  } else {
	    finish();
	  }
	  eos(
	    src,
	    {
	      readable: true,
	      writable: false
	    },
	    (err) => {
	      const rState = src._readableState;
	      if (
	        err &&
	        err.code === 'ERR_STREAM_PREMATURE_CLOSE' &&
	        rState &&
	        rState.ended &&
	        !rState.errored &&
	        !rState.errorEmitted
	      ) {
	        // Some readable streams will emit 'close' before 'end'. However, since
	        // this is on the readable side 'end' should still be emitted if the
	        // stream has been ended and no error emitted. This should be allowed in
	        // favor of backwards compatibility. Since the stream is piped to a
	        // destination this should not result in any observable difference.
	        // We don't need to check if this is a writable premature close since
	        // eos will only fail with premature close on the reading side for
	        // duplex streams.
	        src.once('end', finish).once('error', finish);
	      } else {
	        finish(err);
	      }
	    }
	  );
	  return eos(
	    dst,
	    {
	      readable: false,
	      writable: true
	    },
	    finish
	  )
	}
	pipeline_1$1 = {
	  pipelineImpl,
	  pipeline
	};
	return pipeline_1$1;
}

var compose;
var hasRequiredCompose;

function requireCompose () {
	if (hasRequiredCompose) return compose;
	hasRequiredCompose = 1;

	const { pipeline } = requirePipeline$1();
	const Duplex = requireDuplex();
	const { destroyer } = requireDestroy$1();
	const {
	  isNodeStream,
	  isReadable,
	  isWritable,
	  isWebStream,
	  isTransformStream,
	  isWritableStream,
	  isReadableStream
	} = requireUtils();
	const {
	  AbortError,
	  codes: { ERR_INVALID_ARG_VALUE, ERR_MISSING_ARGS }
	} = requireErrors$1();
	const eos = requireEndOfStream$1();
	compose = function compose(...streams) {
	  if (streams.length === 0) {
	    throw new ERR_MISSING_ARGS('streams')
	  }
	  if (streams.length === 1) {
	    return Duplex.from(streams[0])
	  }
	  const orgStreams = [...streams];
	  if (typeof streams[0] === 'function') {
	    streams[0] = Duplex.from(streams[0]);
	  }
	  if (typeof streams[streams.length - 1] === 'function') {
	    const idx = streams.length - 1;
	    streams[idx] = Duplex.from(streams[idx]);
	  }
	  for (let n = 0; n < streams.length; ++n) {
	    if (!isNodeStream(streams[n]) && !isWebStream(streams[n])) {
	      // TODO(ronag): Add checks for non streams.
	      continue
	    }
	    if (
	      n < streams.length - 1 &&
	      !(isReadable(streams[n]) || isReadableStream(streams[n]) || isTransformStream(streams[n]))
	    ) {
	      throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], 'must be readable')
	    }
	    if (n > 0 && !(isWritable(streams[n]) || isWritableStream(streams[n]) || isTransformStream(streams[n]))) {
	      throw new ERR_INVALID_ARG_VALUE(`streams[${n}]`, orgStreams[n], 'must be writable')
	    }
	  }
	  let ondrain;
	  let onfinish;
	  let onreadable;
	  let onclose;
	  let d;
	  function onfinished(err) {
	    const cb = onclose;
	    onclose = null;
	    if (cb) {
	      cb(err);
	    } else if (err) {
	      d.destroy(err);
	    } else if (!readable && !writable) {
	      d.destroy();
	    }
	  }
	  const head = streams[0];
	  const tail = pipeline(streams, onfinished);
	  const writable = !!(isWritable(head) || isWritableStream(head) || isTransformStream(head));
	  const readable = !!(isReadable(tail) || isReadableStream(tail) || isTransformStream(tail));

	  // TODO(ronag): Avoid double buffering.
	  // Implement Writable/Readable/Duplex traits.
	  // See, https://github.com/nodejs/node/pull/33515.
	  d = new Duplex({
	    // TODO (ronag): highWaterMark?
	    writableObjectMode: !!(head !== null && head !== undefined && head.writableObjectMode),
	    readableObjectMode: !!(tail !== null && tail !== undefined && tail.readableObjectMode),
	    writable,
	    readable
	  });
	  if (writable) {
	    if (isNodeStream(head)) {
	      d._write = function (chunk, encoding, callback) {
	        if (head.write(chunk, encoding)) {
	          callback();
	        } else {
	          ondrain = callback;
	        }
	      };
	      d._final = function (callback) {
	        head.end();
	        onfinish = callback;
	      };
	      head.on('drain', function () {
	        if (ondrain) {
	          const cb = ondrain;
	          ondrain = null;
	          cb();
	        }
	      });
	    } else if (isWebStream(head)) {
	      const writable = isTransformStream(head) ? head.writable : head;
	      const writer = writable.getWriter();
	      d._write = async function (chunk, encoding, callback) {
	        try {
	          await writer.ready;
	          writer.write(chunk).catch(() => {});
	          callback();
	        } catch (err) {
	          callback(err);
	        }
	      };
	      d._final = async function (callback) {
	        try {
	          await writer.ready;
	          writer.close().catch(() => {});
	          onfinish = callback;
	        } catch (err) {
	          callback(err);
	        }
	      };
	    }
	    const toRead = isTransformStream(tail) ? tail.readable : tail;
	    eos(toRead, () => {
	      if (onfinish) {
	        const cb = onfinish;
	        onfinish = null;
	        cb();
	      }
	    });
	  }
	  if (readable) {
	    if (isNodeStream(tail)) {
	      tail.on('readable', function () {
	        if (onreadable) {
	          const cb = onreadable;
	          onreadable = null;
	          cb();
	        }
	      });
	      tail.on('end', function () {
	        d.push(null);
	      });
	      d._read = function () {
	        while (true) {
	          const buf = tail.read();
	          if (buf === null) {
	            onreadable = d._read;
	            return
	          }
	          if (!d.push(buf)) {
	            return
	          }
	        }
	      };
	    } else if (isWebStream(tail)) {
	      const readable = isTransformStream(tail) ? tail.readable : tail;
	      const reader = readable.getReader();
	      d._read = async function () {
	        while (true) {
	          try {
	            const { value, done } = await reader.read();
	            if (!d.push(value)) {
	              return
	            }
	            if (done) {
	              d.push(null);
	              return
	            }
	          } catch {
	            return
	          }
	        }
	      };
	    }
	  }
	  d._destroy = function (err, callback) {
	    if (!err && onclose !== null) {
	      err = new AbortError();
	    }
	    onreadable = null;
	    ondrain = null;
	    onfinish = null;
	    if (onclose === null) {
	      callback(err);
	    } else {
	      onclose = callback;
	      if (isNodeStream(tail)) {
	        destroyer(tail, err);
	      }
	    }
	  };
	  return d
	};
	return compose;
}

var hasRequiredOperators;

function requireOperators () {
	if (hasRequiredOperators) return operators;
	hasRequiredOperators = 1;

	const AbortController = globalThis.AbortController || require$$0.AbortController;
	const {
	  codes: { ERR_INVALID_ARG_VALUE, ERR_INVALID_ARG_TYPE, ERR_MISSING_ARGS, ERR_OUT_OF_RANGE },
	  AbortError
	} = requireErrors$1();
	const { validateAbortSignal, validateInteger, validateObject } = requireValidators();
	const kWeakHandler = requirePrimordials().Symbol('kWeak');
	const kResistStopPropagation = requirePrimordials().Symbol('kResistStopPropagation');
	const { finished } = requireEndOfStream$1();
	const staticCompose = requireCompose();
	const { addAbortSignalNoValidate } = requireAddAbortSignal();
	const { isWritable, isNodeStream } = requireUtils();
	const { deprecate } = requireUtil();
	const {
	  ArrayPrototypePush,
	  Boolean,
	  MathFloor,
	  Number,
	  NumberIsNaN,
	  Promise,
	  PromiseReject,
	  PromiseResolve,
	  PromisePrototypeThen,
	  Symbol
	} = requirePrimordials();
	const kEmpty = Symbol('kEmpty');
	const kEof = Symbol('kEof');
	function compose(stream, options) {
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  if (isNodeStream(stream) && !isWritable(stream)) {
	    throw new ERR_INVALID_ARG_VALUE('stream', stream, 'must be writable')
	  }
	  const composedStream = staticCompose(this, stream);
	  if (options !== null && options !== undefined && options.signal) {
	    // Not validating as we already validated before
	    addAbortSignalNoValidate(options.signal, composedStream);
	  }
	  return composedStream
	}
	function map(fn, options) {
	  if (typeof fn !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
	  }
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  let concurrency = 1;
	  if ((options === null || options === undefined ? undefined : options.concurrency) != null) {
	    concurrency = MathFloor(options.concurrency);
	  }
	  let highWaterMark = concurrency - 1;
	  if ((options === null || options === undefined ? undefined : options.highWaterMark) != null) {
	    highWaterMark = MathFloor(options.highWaterMark);
	  }
	  validateInteger(concurrency, 'options.concurrency', 1);
	  validateInteger(highWaterMark, 'options.highWaterMark', 0);
	  highWaterMark += concurrency;
	  return async function* map() {
	    const signal = requireUtil().AbortSignalAny(
	      [options === null || options === undefined ? undefined : options.signal].filter(Boolean)
	    );
	    const stream = this;
	    const queue = [];
	    const signalOpt = {
	      signal
	    };
	    let next;
	    let resume;
	    let done = false;
	    let cnt = 0;
	    function onCatch() {
	      done = true;
	      afterItemProcessed();
	    }
	    function afterItemProcessed() {
	      cnt -= 1;
	      maybeResume();
	    }
	    function maybeResume() {
	      if (resume && !done && cnt < concurrency && queue.length < highWaterMark) {
	        resume();
	        resume = null;
	      }
	    }
	    async function pump() {
	      try {
	        for await (let val of stream) {
	          if (done) {
	            return
	          }
	          if (signal.aborted) {
	            throw new AbortError()
	          }
	          try {
	            val = fn(val, signalOpt);
	            if (val === kEmpty) {
	              continue
	            }
	            val = PromiseResolve(val);
	          } catch (err) {
	            val = PromiseReject(err);
	          }
	          cnt += 1;
	          PromisePrototypeThen(val, afterItemProcessed, onCatch);
	          queue.push(val);
	          if (next) {
	            next();
	            next = null;
	          }
	          if (!done && (queue.length >= highWaterMark || cnt >= concurrency)) {
	            await new Promise((resolve) => {
	              resume = resolve;
	            });
	          }
	        }
	        queue.push(kEof);
	      } catch (err) {
	        const val = PromiseReject(err);
	        PromisePrototypeThen(val, afterItemProcessed, onCatch);
	        queue.push(val);
	      } finally {
	        done = true;
	        if (next) {
	          next();
	          next = null;
	        }
	      }
	    }
	    pump();
	    try {
	      while (true) {
	        while (queue.length > 0) {
	          const val = await queue[0];
	          if (val === kEof) {
	            return
	          }
	          if (signal.aborted) {
	            throw new AbortError()
	          }
	          if (val !== kEmpty) {
	            yield val;
	          }
	          queue.shift();
	          maybeResume();
	        }
	        await new Promise((resolve) => {
	          next = resolve;
	        });
	      }
	    } finally {
	      done = true;
	      if (resume) {
	        resume();
	        resume = null;
	      }
	    }
	  }.call(this)
	}
	function asIndexedPairs(options = undefined) {
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  return async function* asIndexedPairs() {
	    let index = 0;
	    for await (const val of this) {
	      var _options$signal;
	      if (
	        options !== null &&
	        options !== undefined &&
	        (_options$signal = options.signal) !== null &&
	        _options$signal !== undefined &&
	        _options$signal.aborted
	      ) {
	        throw new AbortError({
	          cause: options.signal.reason
	        })
	      }
	      yield [index++, val];
	    }
	  }.call(this)
	}
	async function some(fn, options = undefined) {
	  for await (const unused of filter.call(this, fn, options)) {
	    return true
	  }
	  return false
	}
	async function every(fn, options = undefined) {
	  if (typeof fn !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
	  }
	  // https://en.wikipedia.org/wiki/De_Morgan%27s_laws
	  return !(await some.call(
	    this,
	    async (...args) => {
	      return !(await fn(...args))
	    },
	    options
	  ))
	}
	async function find(fn, options) {
	  for await (const result of filter.call(this, fn, options)) {
	    return result
	  }
	  return undefined
	}
	async function forEach(fn, options) {
	  if (typeof fn !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
	  }
	  async function forEachFn(value, options) {
	    await fn(value, options);
	    return kEmpty
	  }
	  // eslint-disable-next-line no-unused-vars
	  for await (const unused of map.call(this, forEachFn, options));
	}
	function filter(fn, options) {
	  if (typeof fn !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('fn', ['Function', 'AsyncFunction'], fn)
	  }
	  async function filterFn(value, options) {
	    if (await fn(value, options)) {
	      return value
	    }
	    return kEmpty
	  }
	  return map.call(this, filterFn, options)
	}

	// Specific to provide better error to reduce since the argument is only
	// missing if the stream has no items in it - but the code is still appropriate
	class ReduceAwareErrMissingArgs extends ERR_MISSING_ARGS {
	  constructor() {
	    super('reduce');
	    this.message = 'Reduce of an empty stream requires an initial value';
	  }
	}
	async function reduce(reducer, initialValue, options) {
	  var _options$signal2;
	  if (typeof reducer !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('reducer', ['Function', 'AsyncFunction'], reducer)
	  }
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  let hasInitialValue = arguments.length > 1;
	  if (
	    options !== null &&
	    options !== undefined &&
	    (_options$signal2 = options.signal) !== null &&
	    _options$signal2 !== undefined &&
	    _options$signal2.aborted
	  ) {
	    const err = new AbortError(undefined, {
	      cause: options.signal.reason
	    });
	    this.once('error', () => {}); // The error is already propagated
	    await finished(this.destroy(err));
	    throw err
	  }
	  const ac = new AbortController();
	  const signal = ac.signal;
	  if (options !== null && options !== undefined && options.signal) {
	    const opts = {
	      once: true,
	      [kWeakHandler]: this,
	      [kResistStopPropagation]: true
	    };
	    options.signal.addEventListener('abort', () => ac.abort(), opts);
	  }
	  let gotAnyItemFromStream = false;
	  try {
	    for await (const value of this) {
	      var _options$signal3;
	      gotAnyItemFromStream = true;
	      if (
	        options !== null &&
	        options !== undefined &&
	        (_options$signal3 = options.signal) !== null &&
	        _options$signal3 !== undefined &&
	        _options$signal3.aborted
	      ) {
	        throw new AbortError()
	      }
	      if (!hasInitialValue) {
	        initialValue = value;
	        hasInitialValue = true;
	      } else {
	        initialValue = await reducer(initialValue, value, {
	          signal
	        });
	      }
	    }
	    if (!gotAnyItemFromStream && !hasInitialValue) {
	      throw new ReduceAwareErrMissingArgs()
	    }
	  } finally {
	    ac.abort();
	  }
	  return initialValue
	}
	async function toArray(options) {
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  const result = [];
	  for await (const val of this) {
	    var _options$signal4;
	    if (
	      options !== null &&
	      options !== undefined &&
	      (_options$signal4 = options.signal) !== null &&
	      _options$signal4 !== undefined &&
	      _options$signal4.aborted
	    ) {
	      throw new AbortError(undefined, {
	        cause: options.signal.reason
	      })
	    }
	    ArrayPrototypePush(result, val);
	  }
	  return result
	}
	function flatMap(fn, options) {
	  const values = map.call(this, fn, options);
	  return async function* flatMap() {
	    for await (const val of values) {
	      yield* val;
	    }
	  }.call(this)
	}
	function toIntegerOrInfinity(number) {
	  // We coerce here to align with the spec
	  // https://github.com/tc39/proposal-iterator-helpers/issues/169
	  number = Number(number);
	  if (NumberIsNaN(number)) {
	    return 0
	  }
	  if (number < 0) {
	    throw new ERR_OUT_OF_RANGE('number', '>= 0', number)
	  }
	  return number
	}
	function drop(number, options = undefined) {
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  number = toIntegerOrInfinity(number);
	  return async function* drop() {
	    var _options$signal5;
	    if (
	      options !== null &&
	      options !== undefined &&
	      (_options$signal5 = options.signal) !== null &&
	      _options$signal5 !== undefined &&
	      _options$signal5.aborted
	    ) {
	      throw new AbortError()
	    }
	    for await (const val of this) {
	      var _options$signal6;
	      if (
	        options !== null &&
	        options !== undefined &&
	        (_options$signal6 = options.signal) !== null &&
	        _options$signal6 !== undefined &&
	        _options$signal6.aborted
	      ) {
	        throw new AbortError()
	      }
	      if (number-- <= 0) {
	        yield val;
	      }
	    }
	  }.call(this)
	}
	function take(number, options = undefined) {
	  if (options != null) {
	    validateObject(options, 'options');
	  }
	  if ((options === null || options === undefined ? undefined : options.signal) != null) {
	    validateAbortSignal(options.signal, 'options.signal');
	  }
	  number = toIntegerOrInfinity(number);
	  return async function* take() {
	    var _options$signal7;
	    if (
	      options !== null &&
	      options !== undefined &&
	      (_options$signal7 = options.signal) !== null &&
	      _options$signal7 !== undefined &&
	      _options$signal7.aborted
	    ) {
	      throw new AbortError()
	    }
	    for await (const val of this) {
	      var _options$signal8;
	      if (
	        options !== null &&
	        options !== undefined &&
	        (_options$signal8 = options.signal) !== null &&
	        _options$signal8 !== undefined &&
	        _options$signal8.aborted
	      ) {
	        throw new AbortError()
	      }
	      if (number-- > 0) {
	        yield val;
	      }

	      // Don't get another item from iterator in case we reached the end
	      if (number <= 0) {
	        return
	      }
	    }
	  }.call(this)
	}
	operators.streamReturningOperators = {
	  asIndexedPairs: deprecate(asIndexedPairs, 'readable.asIndexedPairs will be removed in a future version.'),
	  drop,
	  filter,
	  flatMap,
	  map,
	  take,
	  compose
	};
	operators.promiseReturningOperators = {
	  every,
	  forEach,
	  reduce,
	  toArray,
	  some,
	  find
	};
	return operators;
}

var promises;
var hasRequiredPromises;

function requirePromises () {
	if (hasRequiredPromises) return promises;
	hasRequiredPromises = 1;

	const { ArrayPrototypePop, Promise } = requirePrimordials();
	const { isIterable, isNodeStream, isWebStream } = requireUtils();
	const { pipelineImpl: pl } = requirePipeline$1();
	const { finished } = requireEndOfStream$1();
	requireStream$2();
	function pipeline(...streams) {
	  return new Promise((resolve, reject) => {
	    let signal;
	    let end;
	    const lastArg = streams[streams.length - 1];
	    if (
	      lastArg &&
	      typeof lastArg === 'object' &&
	      !isNodeStream(lastArg) &&
	      !isIterable(lastArg) &&
	      !isWebStream(lastArg)
	    ) {
	      const options = ArrayPrototypePop(streams);
	      signal = options.signal;
	      end = options.end;
	    }
	    pl(
	      streams,
	      (err, value) => {
	        if (err) {
	          reject(err);
	        } else {
	          resolve(value);
	        }
	      },
	      {
	        signal,
	        end
	      }
	    );
	  })
	}
	promises = {
	  finished,
	  pipeline
	};
	return promises;
}

/* replacement start */

var hasRequiredStream$2;

function requireStream$2 () {
	if (hasRequiredStream$2) return stream$2.exports;
	hasRequiredStream$2 = 1;
	const { Buffer } = require$$0$4

	/* replacement end */
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	;	const { ObjectDefineProperty, ObjectKeys, ReflectApply } = requirePrimordials();
	const {
	  promisify: { custom: customPromisify }
	} = requireUtil();
	const { streamReturningOperators, promiseReturningOperators } = requireOperators();
	const {
	  codes: { ERR_ILLEGAL_CONSTRUCTOR }
	} = requireErrors$1();
	const compose = requireCompose();
	const { setDefaultHighWaterMark, getDefaultHighWaterMark } = requireState$1();
	const { pipeline } = requirePipeline$1();
	const { destroyer } = requireDestroy$1();
	const eos = requireEndOfStream$1();
	const promises = requirePromises();
	const utils = requireUtils();
	const Stream = (stream$2.exports = requireLegacy$1().Stream);
	Stream.isDestroyed = utils.isDestroyed;
	Stream.isDisturbed = utils.isDisturbed;
	Stream.isErrored = utils.isErrored;
	Stream.isReadable = utils.isReadable;
	Stream.isWritable = utils.isWritable;
	Stream.Readable = requireReadable$1();
	for (const key of ObjectKeys(streamReturningOperators)) {
	  const op = streamReturningOperators[key];
	  function fn(...args) {
	    if (new.target) {
	      throw ERR_ILLEGAL_CONSTRUCTOR()
	    }
	    return Stream.Readable.from(ReflectApply(op, this, args))
	  }
	  ObjectDefineProperty(fn, 'name', {
	    __proto__: null,
	    value: op.name
	  });
	  ObjectDefineProperty(fn, 'length', {
	    __proto__: null,
	    value: op.length
	  });
	  ObjectDefineProperty(Stream.Readable.prototype, key, {
	    __proto__: null,
	    value: fn,
	    enumerable: false,
	    configurable: true,
	    writable: true
	  });
	}
	for (const key of ObjectKeys(promiseReturningOperators)) {
	  const op = promiseReturningOperators[key];
	  function fn(...args) {
	    if (new.target) {
	      throw ERR_ILLEGAL_CONSTRUCTOR()
	    }
	    return ReflectApply(op, this, args)
	  }
	  ObjectDefineProperty(fn, 'name', {
	    __proto__: null,
	    value: op.name
	  });
	  ObjectDefineProperty(fn, 'length', {
	    __proto__: null,
	    value: op.length
	  });
	  ObjectDefineProperty(Stream.Readable.prototype, key, {
	    __proto__: null,
	    value: fn,
	    enumerable: false,
	    configurable: true,
	    writable: true
	  });
	}
	Stream.Writable = requireWritable();
	Stream.Duplex = requireDuplex();
	Stream.Transform = requireTransform();
	Stream.PassThrough = requirePassthrough();
	Stream.pipeline = pipeline;
	const { addAbortSignal } = requireAddAbortSignal();
	Stream.addAbortSignal = addAbortSignal;
	Stream.finished = eos;
	Stream.destroy = destroyer;
	Stream.compose = compose;
	Stream.setDefaultHighWaterMark = setDefaultHighWaterMark;
	Stream.getDefaultHighWaterMark = getDefaultHighWaterMark;
	ObjectDefineProperty(Stream, 'promises', {
	  __proto__: null,
	  configurable: true,
	  enumerable: true,
	  get() {
	    return promises
	  }
	});
	ObjectDefineProperty(pipeline, customPromisify, {
	  __proto__: null,
	  enumerable: true,
	  get() {
	    return promises.pipeline
	  }
	});
	ObjectDefineProperty(eos, customPromisify, {
	  __proto__: null,
	  enumerable: true,
	  get() {
	    return promises.finished
	  }
	});

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;
	Stream._isUint8Array = function isUint8Array(value) {
	  return value instanceof Uint8Array
	};
	Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
	};
	return stream$2.exports;
}

var _stream_writable$1;
var hasRequired_stream_writable$1;

function require_stream_writable$1 () {
	if (hasRequired_stream_writable$1) return _stream_writable$1;
	hasRequired_stream_writable$1 = 1;

	// Keep this file as an alias for the full stream module.
	_stream_writable$1 = requireStream$2().Writable;
	return _stream_writable$1;
}

var hasRequiredModern;

function requireModern () {
	if (hasRequiredModern) return modern.exports;
	hasRequiredModern = 1;

	const util = require$$0$3;
	const Writable = require_stream_writable$1();
	const { LEVEL } = requireTripleBeam();

	/**
	 * Constructor function for the TransportStream. This is the base prototype
	 * that all `winston >= 3` transports should inherit from.
	 * @param {Object} options - Options for this TransportStream instance
	 * @param {String} options.level - Highest level according to RFC5424.
	 * @param {Boolean} options.handleExceptions - If true, info with
	 * { exception: true } will be written.
	 * @param {Function} options.log - Custom log function for simple Transport
	 * creation
	 * @param {Function} options.close - Called on "unpipe" from parent.
	 */
	const TransportStream = modern.exports = function TransportStream(options = {}) {
	  Writable.call(this, { objectMode: true, highWaterMark: options.highWaterMark });

	  this.format = options.format;
	  this.level = options.level;
	  this.handleExceptions = options.handleExceptions;
	  this.handleRejections = options.handleRejections;
	  this.silent = options.silent;

	  if (options.log) this.log = options.log;
	  if (options.logv) this.logv = options.logv;
	  if (options.close) this.close = options.close;

	  // Get the levels from the source we are piped from.
	  this.once('pipe', logger => {
	    // Remark (indexzero): this bookkeeping can only support multiple
	    // Logger parents with the same `levels`. This comes into play in
	    // the `winston.Container` code in which `container.add` takes
	    // a fully realized set of options with pre-constructed TransportStreams.
	    this.levels = logger.levels;
	    this.parent = logger;
	  });

	  // If and/or when the transport is removed from this instance
	  this.once('unpipe', src => {
	    // Remark (indexzero): this bookkeeping can only support multiple
	    // Logger parents with the same `levels`. This comes into play in
	    // the `winston.Container` code in which `container.add` takes
	    // a fully realized set of options with pre-constructed TransportStreams.
	    if (src === this.parent) {
	      this.parent = null;
	      if (this.close) {
	        this.close();
	      }
	    }
	  });
	};

	/*
	 * Inherit from Writeable using Node.js built-ins
	 */
	util.inherits(TransportStream, Writable);

	/**
	 * Writes the info object to our transport instance.
	 * @param {mixed} info - TODO: add param description.
	 * @param {mixed} enc - TODO: add param description.
	 * @param {function} callback - TODO: add param description.
	 * @returns {undefined}
	 * @private
	 */
	TransportStream.prototype._write = function _write(info, enc, callback) {
	  if (this.silent || (info.exception === true && !this.handleExceptions)) {
	    return callback(null);
	  }

	  // Remark: This has to be handled in the base transport now because we
	  // cannot conditionally write to our pipe targets as stream. We always
	  // prefer any explicit level set on the Transport itself falling back to
	  // any level set on the parent.
	  const level = this.level || (this.parent && this.parent.level);

	  if (!level || this.levels[level] >= this.levels[info[LEVEL]]) {
	    if (info && !this.format) {
	      return this.log(info, callback);
	    }

	    let errState;
	    let transformed;

	    // We trap(and re-throw) any errors generated by the user-provided format, but also
	    // guarantee that the streams callback is invoked so that we can continue flowing.
	    try {
	      transformed = this.format.transform(Object.assign({}, info), this.format.options);
	    } catch (err) {
	      errState = err;
	    }

	    if (errState || !transformed) {
	      // eslint-disable-next-line callback-return
	      callback();
	      if (errState) throw errState;
	      return;
	    }

	    return this.log(transformed, callback);
	  }
	  this._writableState.sync = false;
	  return callback(null);
	};

	/**
	 * Writes the batch of info objects (i.e. "object chunks") to our transport
	 * instance after performing any necessary filtering.
	 * @param {mixed} chunks - TODO: add params description.
	 * @param {function} callback - TODO: add params description.
	 * @returns {mixed} - TODO: add returns description.
	 * @private
	 */
	TransportStream.prototype._writev = function _writev(chunks, callback) {
	  if (this.logv) {
	    const infos = chunks.filter(this._accept, this);
	    if (!infos.length) {
	      return callback(null);
	    }

	    // Remark (indexzero): from a performance perspective if Transport
	    // implementers do choose to implement logv should we make it their
	    // responsibility to invoke their format?
	    return this.logv(infos, callback);
	  }

	  for (let i = 0; i < chunks.length; i++) {
	    if (!this._accept(chunks[i])) continue;

	    if (chunks[i].chunk && !this.format) {
	      this.log(chunks[i].chunk, chunks[i].callback);
	      continue;
	    }

	    let errState;
	    let transformed;

	    // We trap(and re-throw) any errors generated by the user-provided format, but also
	    // guarantee that the streams callback is invoked so that we can continue flowing.
	    try {
	      transformed = this.format.transform(
	        Object.assign({}, chunks[i].chunk),
	        this.format.options
	      );
	    } catch (err) {
	      errState = err;
	    }

	    if (errState || !transformed) {
	      // eslint-disable-next-line callback-return
	      chunks[i].callback();
	      if (errState) {
	        // eslint-disable-next-line callback-return
	        callback(null);
	        throw errState;
	      }
	    } else {
	      this.log(transformed, chunks[i].callback);
	    }
	  }

	  return callback(null);
	};

	/**
	 * Predicate function that returns true if the specfied `info` on the
	 * WriteReq, `write`, should be passed down into the derived
	 * TransportStream's I/O via `.log(info, callback)`.
	 * @param {WriteReq} write - winston@3 Node.js WriteReq for the `info` object
	 * representing the log message.
	 * @returns {Boolean} - Value indicating if the `write` should be accepted &
	 * logged.
	 */
	TransportStream.prototype._accept = function _accept(write) {
	  const info = write.chunk;
	  if (this.silent) {
	    return false;
	  }

	  // We always prefer any explicit level set on the Transport itself
	  // falling back to any level set on the parent.
	  const level = this.level || (this.parent && this.parent.level);

	  // Immediately check the average case: log level filtering.
	  if (
	    info.exception === true ||
	    !level ||
	    this.levels[level] >= this.levels[info[LEVEL]]
	  ) {
	    // Ensure the info object is valid based on `{ exception }`:
	    // 1. { handleExceptions: true }: all `info` objects are valid
	    // 2. { exception: false }: accepted by all transports.
	    if (this.handleExceptions || info.exception !== true) {
	      return true;
	    }
	  }

	  return false;
	};

	/**
	 * _nop is short for "No operation"
	 * @returns {Boolean} Intentionally false.
	 */
	TransportStream.prototype._nop = function _nop() {
	  // eslint-disable-next-line no-undefined
	  return void undefined;
	};
	return modern.exports;
}

var legacy = {exports: {}};

var hasRequiredLegacy;

function requireLegacy () {
	if (hasRequiredLegacy) return legacy.exports;
	hasRequiredLegacy = 1;

	const util = require$$0$3;
	const { LEVEL } = requireTripleBeam();
	const TransportStream = requireModern();

	/**
	 * Constructor function for the LegacyTransportStream. This is an internal
	 * wrapper `winston >= 3` uses to wrap older transports implementing
	 * log(level, message, meta).
	 * @param {Object} options - Options for this TransportStream instance.
	 * @param {Transpot} options.transport - winston@2 or older Transport to wrap.
	 */

	const LegacyTransportStream = legacy.exports = function LegacyTransportStream(options = {}) {
	  TransportStream.call(this, options);
	  if (!options.transport || typeof options.transport.log !== 'function') {
	    throw new Error('Invalid transport, must be an object with a log method.');
	  }

	  this.transport = options.transport;
	  this.level = this.level || options.transport.level;
	  this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;

	  // Display our deprecation notice.
	  this._deprecated();

	  // Properly bubble up errors from the transport to the
	  // LegacyTransportStream instance, but only once no matter how many times
	  // this transport is shared.
	  function transportError(err) {
	    this.emit('error', err, this.transport);
	  }

	  if (!this.transport.__winstonError) {
	    this.transport.__winstonError = transportError.bind(this);
	    this.transport.on('error', this.transport.__winstonError);
	  }
	};

	/*
	 * Inherit from TransportStream using Node.js built-ins
	 */
	util.inherits(LegacyTransportStream, TransportStream);

	/**
	 * Writes the info object to our transport instance.
	 * @param {mixed} info - TODO: add param description.
	 * @param {mixed} enc - TODO: add param description.
	 * @param {function} callback - TODO: add param description.
	 * @returns {undefined}
	 * @private
	 */
	LegacyTransportStream.prototype._write = function _write(info, enc, callback) {
	  if (this.silent || (info.exception === true && !this.handleExceptions)) {
	    return callback(null);
	  }

	  // Remark: This has to be handled in the base transport now because we
	  // cannot conditionally write to our pipe targets as stream.
	  if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL]]) {
	    this.transport.log(info[LEVEL], info.message, info, this._nop);
	  }

	  callback(null);
	};

	/**
	 * Writes the batch of info objects (i.e. "object chunks") to our transport
	 * instance after performing any necessary filtering.
	 * @param {mixed} chunks - TODO: add params description.
	 * @param {function} callback - TODO: add params description.
	 * @returns {mixed} - TODO: add returns description.
	 * @private
	 */
	LegacyTransportStream.prototype._writev = function _writev(chunks, callback) {
	  for (let i = 0; i < chunks.length; i++) {
	    if (this._accept(chunks[i])) {
	      this.transport.log(
	        chunks[i].chunk[LEVEL],
	        chunks[i].chunk.message,
	        chunks[i].chunk,
	        this._nop
	      );
	      chunks[i].callback();
	    }
	  }

	  return callback(null);
	};

	/**
	 * Displays a deprecation notice. Defined as a function so it can be
	 * overriden in tests.
	 * @returns {undefined}
	 */
	LegacyTransportStream.prototype._deprecated = function _deprecated() {
	  // eslint-disable-next-line no-console
	  console.error([
	    `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
	    '- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md'
	  ].join('\n'));
	};

	/**
	 * Clean up error handling state on the legacy transport associated
	 * with this instance.
	 * @returns {undefined}
	 */
	LegacyTransportStream.prototype.close = function close() {
	  if (this.transport.close) {
	    this.transport.close();
	  }

	  if (this.transport.__winstonError) {
	    this.transport.removeListener('error', this.transport.__winstonError);
	    this.transport.__winstonError = null;
	  }
	};
	return legacy.exports;
}

var hasRequiredWinstonTransport;

function requireWinstonTransport () {
	if (hasRequiredWinstonTransport) return winstonTransport.exports;
	hasRequiredWinstonTransport = 1;

	// Expose modern transport directly as the export
	winstonTransport.exports = requireModern();

	// Expose legacy stream
	winstonTransport.exports.LegacyTransportStream = requireLegacy();
	return winstonTransport.exports;
}

/* eslint-disable no-console */

var console_1$1;
var hasRequiredConsole$1;

function requireConsole$1 () {
	if (hasRequiredConsole$1) return console_1$1;
	hasRequiredConsole$1 = 1;

	const os = require$$0$2;
	const { LEVEL, MESSAGE } = requireTripleBeam();
	const TransportStream = requireWinstonTransport();

	/**
	 * Transport for outputting to the console.
	 * @type {Console}
	 * @extends {TransportStream}
	 */
	console_1$1 = class Console extends TransportStream {
	  /**
	   * Constructor function for the Console transport object responsible for
	   * persisting log messages and metadata to a terminal or TTY.
	   * @param {!Object} [options={}] - Options for this instance.
	   */
	  constructor(options = {}) {
	    super(options);

	    // Expose the name of this Transport on the prototype
	    this.name = options.name || 'console';
	    this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
	    this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
	    this.eol = typeof options.eol === 'string' ? options.eol : os.EOL;
	    this.forceConsole = options.forceConsole || false;

	    // Keep a reference to the log, warn, and error console methods
	    // in case they get redirected to this transport after the logger is
	    // instantiated. This prevents a circular reference issue.
	    this._consoleLog = console.log.bind(console);
	    this._consoleWarn = console.warn.bind(console);
	    this._consoleError = console.error.bind(console);

	    this.setMaxListeners(30);
	  }

	  /**
	   * Core logging method exposed to Winston.
	   * @param {Object} info - TODO: add param description.
	   * @param {Function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  log(info, callback) {
	    setImmediate(() => this.emit('logged', info));

	    // Remark: what if there is no raw...?
	    if (this.stderrLevels[info[LEVEL]]) {
	      if (console._stderr && !this.forceConsole) {
	        // Node.js maps `process.stderr` to `console._stderr`.
	        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
	      } else {
	        // console.error adds a newline
	        this._consoleError(info[MESSAGE]);
	      }

	      if (callback) {
	        callback(); // eslint-disable-line callback-return
	      }
	      return;
	    } else if (this.consoleWarnLevels[info[LEVEL]]) {
	      if (console._stderr && !this.forceConsole) {
	        // Node.js maps `process.stderr` to `console._stderr`.
	        // in Node.js console.warn is an alias for console.error
	        console._stderr.write(`${info[MESSAGE]}${this.eol}`);
	      } else {
	        // console.warn adds a newline
	        this._consoleWarn(info[MESSAGE]);
	      }

	      if (callback) {
	        callback(); // eslint-disable-line callback-return
	      }
	      return;
	    }

	    if (console._stdout && !this.forceConsole) {
	      // Node.js maps `process.stdout` to `console._stdout`.
	      console._stdout.write(`${info[MESSAGE]}${this.eol}`);
	    } else {
	      // console.log adds a newline.
	      this._consoleLog(info[MESSAGE]);
	    }

	    if (callback) {
	      callback(); // eslint-disable-line callback-return
	    }
	  }

	  /**
	   * Returns a Set-like object with strArray's elements as keys (each with the
	   * value true).
	   * @param {Array} strArray - Array of Set-elements as strings.
	   * @param {?string} [errMsg] - Custom error message thrown on invalid input.
	   * @returns {Object} - TODO: add return description.
	   * @private
	   */
	  _stringArrayToSet(strArray, errMsg) {
	    if (!strArray) return {};

	    errMsg =
	      errMsg || 'Cannot make set from type other than Array of string elements';

	    if (!Array.isArray(strArray)) {
	      throw new Error(errMsg);
	    }

	    return strArray.reduce((set, el) => {
	      if (typeof el !== 'string') {
	        throw new Error(errMsg);
	      }
	      set[el] = true;

	      return set;
	    }, {});
	  }
	};
	return console_1$1;
}

var series = {exports: {}};

var parallel = {exports: {}};

var isArrayLike = {exports: {}};

var hasRequiredIsArrayLike;

function requireIsArrayLike () {
	if (hasRequiredIsArrayLike) return isArrayLike.exports;
	hasRequiredIsArrayLike = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = isArrayLike;
		function isArrayLike(value) {
		    return value && typeof value.length === 'number' && value.length >= 0 && value.length % 1 === 0;
		}
		module.exports = exports.default; 
	} (isArrayLike, isArrayLike.exports));
	return isArrayLike.exports;
}

var wrapAsync = {};

var asyncify = {exports: {}};

var initialParams = {exports: {}};

var hasRequiredInitialParams;

function requireInitialParams () {
	if (hasRequiredInitialParams) return initialParams.exports;
	hasRequiredInitialParams = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (fn) {
		    return function (...args /*, callback*/) {
		        var callback = args.pop();
		        return fn.call(this, args, callback);
		    };
		};

		module.exports = exports.default; 
	} (initialParams, initialParams.exports));
	return initialParams.exports;
}

var setImmediate$1 = {};

var hasRequiredSetImmediate;

function requireSetImmediate () {
	if (hasRequiredSetImmediate) return setImmediate$1;
	hasRequiredSetImmediate = 1;

	Object.defineProperty(setImmediate$1, "__esModule", {
	    value: true
	});
	setImmediate$1.fallback = fallback;
	setImmediate$1.wrap = wrap;
	/* istanbul ignore file */

	var hasQueueMicrotask = setImmediate$1.hasQueueMicrotask = typeof queueMicrotask === 'function' && queueMicrotask;
	var hasSetImmediate = setImmediate$1.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
	var hasNextTick = setImmediate$1.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

	function fallback(fn) {
	    setTimeout(fn, 0);
	}

	function wrap(defer) {
	    return (fn, ...args) => defer(() => fn(...args));
	}

	var _defer;

	if (hasQueueMicrotask) {
	    _defer = queueMicrotask;
	} else if (hasSetImmediate) {
	    _defer = setImmediate;
	} else if (hasNextTick) {
	    _defer = process.nextTick;
	} else {
	    _defer = fallback;
	}

	setImmediate$1.default = wrap(_defer);
	return setImmediate$1;
}

var hasRequiredAsyncify;

function requireAsyncify () {
	if (hasRequiredAsyncify) return asyncify.exports;
	hasRequiredAsyncify = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = asyncify;

		var _initialParams = requireInitialParams();

		var _initialParams2 = _interopRequireDefault(_initialParams);

		var _setImmediate = requireSetImmediate();

		var _setImmediate2 = _interopRequireDefault(_setImmediate);

		var _wrapAsync = requireWrapAsync();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * Take a sync function and make it async, passing its return value to a
		 * callback. This is useful for plugging sync functions into a waterfall,
		 * series, or other async functions. Any arguments passed to the generated
		 * function will be passed to the wrapped function (except for the final
		 * callback argument). Errors thrown will be passed to the callback.
		 *
		 * If the function passed to `asyncify` returns a Promise, that promises's
		 * resolved/rejected state will be used to call the callback, rather than simply
		 * the synchronous return value.
		 *
		 * This also means you can asyncify ES2017 `async` functions.
		 *
		 * @name asyncify
		 * @static
		 * @memberOf module:Utils
		 * @method
		 * @alias wrapSync
		 * @category Util
		 * @param {Function} func - The synchronous function, or Promise-returning
		 * function to convert to an {@link AsyncFunction}.
		 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
		 * invoked with `(args..., callback)`.
		 * @example
		 *
		 * // passing a regular synchronous function
		 * async.waterfall([
		 *     async.apply(fs.readFile, filename, "utf8"),
		 *     async.asyncify(JSON.parse),
		 *     function (data, next) {
		 *         // data is the result of parsing the text.
		 *         // If there was a parsing error, it would have been caught.
		 *     }
		 * ], callback);
		 *
		 * // passing a function returning a promise
		 * async.waterfall([
		 *     async.apply(fs.readFile, filename, "utf8"),
		 *     async.asyncify(function (contents) {
		 *         return db.model.create(contents);
		 *     }),
		 *     function (model, next) {
		 *         // `model` is the instantiated model object.
		 *         // If there was an error, this function would be skipped.
		 *     }
		 * ], callback);
		 *
		 * // es2017 example, though `asyncify` is not needed if your JS environment
		 * // supports async functions out of the box
		 * var q = async.queue(async.asyncify(async function(file) {
		 *     var intermediateStep = await processFile(file);
		 *     return await somePromise(intermediateStep)
		 * }));
		 *
		 * q.push(files);
		 */
		function asyncify(func) {
		    if ((0, _wrapAsync.isAsync)(func)) {
		        return function (...args /*, callback*/) {
		            const callback = args.pop();
		            const promise = func.apply(this, args);
		            return handlePromise(promise, callback);
		        };
		    }

		    return (0, _initialParams2.default)(function (args, callback) {
		        var result;
		        try {
		            result = func.apply(this, args);
		        } catch (e) {
		            return callback(e);
		        }
		        // if result is Promise object
		        if (result && typeof result.then === 'function') {
		            return handlePromise(result, callback);
		        } else {
		            callback(null, result);
		        }
		    });
		}

		function handlePromise(promise, callback) {
		    return promise.then(value => {
		        invokeCallback(callback, null, value);
		    }, err => {
		        invokeCallback(callback, err && (err instanceof Error || err.message) ? err : new Error(err));
		    });
		}

		function invokeCallback(callback, error, value) {
		    try {
		        callback(error, value);
		    } catch (err) {
		        (0, _setImmediate2.default)(e => {
		            throw e;
		        }, err);
		    }
		}
		module.exports = exports.default; 
	} (asyncify, asyncify.exports));
	return asyncify.exports;
}

var hasRequiredWrapAsync;

function requireWrapAsync () {
	if (hasRequiredWrapAsync) return wrapAsync;
	hasRequiredWrapAsync = 1;

	Object.defineProperty(wrapAsync, "__esModule", {
	    value: true
	});
	wrapAsync.isAsyncIterable = wrapAsync.isAsyncGenerator = wrapAsync.isAsync = undefined;

	var _asyncify = requireAsyncify();

	var _asyncify2 = _interopRequireDefault(_asyncify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAsync(fn) {
	    return fn[Symbol.toStringTag] === 'AsyncFunction';
	}

	function isAsyncGenerator(fn) {
	    return fn[Symbol.toStringTag] === 'AsyncGenerator';
	}

	function isAsyncIterable(obj) {
	    return typeof obj[Symbol.asyncIterator] === 'function';
	}

	function wrapAsync$1(asyncFn) {
	    if (typeof asyncFn !== 'function') throw new Error('expected a function');
	    return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
	}

	wrapAsync.default = wrapAsync$1;
	wrapAsync.isAsync = isAsync;
	wrapAsync.isAsyncGenerator = isAsyncGenerator;
	wrapAsync.isAsyncIterable = isAsyncIterable;
	return wrapAsync;
}

var awaitify = {exports: {}};

var hasRequiredAwaitify;

function requireAwaitify () {
	if (hasRequiredAwaitify) return awaitify.exports;
	hasRequiredAwaitify = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = awaitify;
		// conditionally promisify a function.
		// only return a promise if a callback is omitted
		function awaitify(asyncFn, arity) {
		    if (!arity) arity = asyncFn.length;
		    if (!arity) throw new Error('arity is undefined');
		    function awaitable(...args) {
		        if (typeof args[arity - 1] === 'function') {
		            return asyncFn.apply(this, args);
		        }

		        return new Promise((resolve, reject) => {
		            args[arity - 1] = (err, ...cbArgs) => {
		                if (err) return reject(err);
		                resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
		            };
		            asyncFn.apply(this, args);
		        });
		    }

		    return awaitable;
		}
		module.exports = exports.default; 
	} (awaitify, awaitify.exports));
	return awaitify.exports;
}

var hasRequiredParallel;

function requireParallel () {
	if (hasRequiredParallel) return parallel.exports;
	hasRequiredParallel = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _isArrayLike = requireIsArrayLike();

		var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

		var _wrapAsync = requireWrapAsync();

		var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

		var _awaitify = requireAwaitify();

		var _awaitify2 = _interopRequireDefault(_awaitify);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = (0, _awaitify2.default)((eachfn, tasks, callback) => {
		    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};

		    eachfn(tasks, (task, key, taskCb) => {
		        (0, _wrapAsync2.default)(task)((err, ...result) => {
		            if (result.length < 2) {
		                [result] = result;
		            }
		            results[key] = result;
		            taskCb(err);
		        });
		    }, err => callback(err, results));
		}, 3);
		module.exports = exports.default; 
	} (parallel, parallel.exports));
	return parallel.exports;
}

var eachOfSeries = {exports: {}};

var eachOfLimit$1 = {exports: {}};

var eachOfLimit = {exports: {}};

var once = {exports: {}};

var hasRequiredOnce;

function requireOnce () {
	if (hasRequiredOnce) return once.exports;
	hasRequiredOnce = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = once;
		function once(fn) {
		    function wrapper(...args) {
		        if (fn === null) return;
		        var callFn = fn;
		        fn = null;
		        callFn.apply(this, args);
		    }
		    Object.assign(wrapper, fn);
		    return wrapper;
		}
		module.exports = exports.default; 
	} (once, once.exports));
	return once.exports;
}

var iterator = {exports: {}};

var getIterator = {exports: {}};

var hasRequiredGetIterator;

function requireGetIterator () {
	if (hasRequiredGetIterator) return getIterator.exports;
	hasRequiredGetIterator = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		exports.default = function (coll) {
		    return coll[Symbol.iterator] && coll[Symbol.iterator]();
		};

		module.exports = exports.default; 
	} (getIterator, getIterator.exports));
	return getIterator.exports;
}

var hasRequiredIterator;

function requireIterator () {
	if (hasRequiredIterator) return iterator.exports;
	hasRequiredIterator = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = createIterator;

		var _isArrayLike = requireIsArrayLike();

		var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

		var _getIterator = requireGetIterator();

		var _getIterator2 = _interopRequireDefault(_getIterator);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function createArrayIterator(coll) {
		    var i = -1;
		    var len = coll.length;
		    return function next() {
		        return ++i < len ? { value: coll[i], key: i } : null;
		    };
		}

		function createES2015Iterator(iterator) {
		    var i = -1;
		    return function next() {
		        var item = iterator.next();
		        if (item.done) return null;
		        i++;
		        return { value: item.value, key: i };
		    };
		}

		function createObjectIterator(obj) {
		    var okeys = obj ? Object.keys(obj) : [];
		    var i = -1;
		    var len = okeys.length;
		    return function next() {
		        var key = okeys[++i];
		        if (key === '__proto__') {
		            return next();
		        }
		        return i < len ? { value: obj[key], key } : null;
		    };
		}

		function createIterator(coll) {
		    if ((0, _isArrayLike2.default)(coll)) {
		        return createArrayIterator(coll);
		    }

		    var iterator = (0, _getIterator2.default)(coll);
		    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
		}
		module.exports = exports.default; 
	} (iterator, iterator.exports));
	return iterator.exports;
}

var onlyOnce = {exports: {}};

var hasRequiredOnlyOnce;

function requireOnlyOnce () {
	if (hasRequiredOnlyOnce) return onlyOnce.exports;
	hasRequiredOnlyOnce = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = onlyOnce;
		function onlyOnce(fn) {
		    return function (...args) {
		        if (fn === null) throw new Error("Callback was already called.");
		        var callFn = fn;
		        fn = null;
		        callFn.apply(this, args);
		    };
		}
		module.exports = exports.default; 
	} (onlyOnce, onlyOnce.exports));
	return onlyOnce.exports;
}

var asyncEachOfLimit = {exports: {}};

var breakLoop = {exports: {}};

var hasRequiredBreakLoop;

function requireBreakLoop () {
	if (hasRequiredBreakLoop) return breakLoop.exports;
	hasRequiredBreakLoop = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		// A temporary value used to identify if the loop should be broken.
		// See #1064, #1293
		const breakLoop = {};
		exports.default = breakLoop;
		module.exports = exports.default; 
	} (breakLoop, breakLoop.exports));
	return breakLoop.exports;
}

var hasRequiredAsyncEachOfLimit;

function requireAsyncEachOfLimit () {
	if (hasRequiredAsyncEachOfLimit) return asyncEachOfLimit.exports;
	hasRequiredAsyncEachOfLimit = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = asyncEachOfLimit;

		var _breakLoop = requireBreakLoop();

		var _breakLoop2 = _interopRequireDefault(_breakLoop);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// for async generators
		function asyncEachOfLimit(generator, limit, iteratee, callback) {
		    let done = false;
		    let canceled = false;
		    let awaiting = false;
		    let running = 0;
		    let idx = 0;

		    function replenish() {
		        //console.log('replenish')
		        if (running >= limit || awaiting || done) return;
		        //console.log('replenish awaiting')
		        awaiting = true;
		        generator.next().then(({ value, done: iterDone }) => {
		            //console.log('got value', value)
		            if (canceled || done) return;
		            awaiting = false;
		            if (iterDone) {
		                done = true;
		                if (running <= 0) {
		                    //console.log('done nextCb')
		                    callback(null);
		                }
		                return;
		            }
		            running++;
		            iteratee(value, idx, iterateeCallback);
		            idx++;
		            replenish();
		        }).catch(handleError);
		    }

		    function iterateeCallback(err, result) {
		        //console.log('iterateeCallback')
		        running -= 1;
		        if (canceled) return;
		        if (err) return handleError(err);

		        if (err === false) {
		            done = true;
		            canceled = true;
		            return;
		        }

		        if (result === _breakLoop2.default || done && running <= 0) {
		            done = true;
		            //console.log('done iterCb')
		            return callback(null);
		        }
		        replenish();
		    }

		    function handleError(err) {
		        if (canceled) return;
		        awaiting = false;
		        done = true;
		        callback(err);
		    }

		    replenish();
		}
		module.exports = exports.default; 
	} (asyncEachOfLimit, asyncEachOfLimit.exports));
	return asyncEachOfLimit.exports;
}

var hasRequiredEachOfLimit$1;

function requireEachOfLimit$1 () {
	if (hasRequiredEachOfLimit$1) return eachOfLimit.exports;
	hasRequiredEachOfLimit$1 = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _once = requireOnce();

		var _once2 = _interopRequireDefault(_once);

		var _iterator = requireIterator();

		var _iterator2 = _interopRequireDefault(_iterator);

		var _onlyOnce = requireOnlyOnce();

		var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

		var _wrapAsync = requireWrapAsync();

		var _asyncEachOfLimit = requireAsyncEachOfLimit();

		var _asyncEachOfLimit2 = _interopRequireDefault(_asyncEachOfLimit);

		var _breakLoop = requireBreakLoop();

		var _breakLoop2 = _interopRequireDefault(_breakLoop);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = limit => {
		    return (obj, iteratee, callback) => {
		        callback = (0, _once2.default)(callback);
		        if (limit <= 0) {
		            throw new RangeError('concurrency limit cannot be less than 1');
		        }
		        if (!obj) {
		            return callback(null);
		        }
		        if ((0, _wrapAsync.isAsyncGenerator)(obj)) {
		            return (0, _asyncEachOfLimit2.default)(obj, limit, iteratee, callback);
		        }
		        if ((0, _wrapAsync.isAsyncIterable)(obj)) {
		            return (0, _asyncEachOfLimit2.default)(obj[Symbol.asyncIterator](), limit, iteratee, callback);
		        }
		        var nextElem = (0, _iterator2.default)(obj);
		        var done = false;
		        var canceled = false;
		        var running = 0;
		        var looping = false;

		        function iterateeCallback(err, value) {
		            if (canceled) return;
		            running -= 1;
		            if (err) {
		                done = true;
		                callback(err);
		            } else if (err === false) {
		                done = true;
		                canceled = true;
		            } else if (value === _breakLoop2.default || done && running <= 0) {
		                done = true;
		                return callback(null);
		            } else if (!looping) {
		                replenish();
		            }
		        }

		        function replenish() {
		            looping = true;
		            while (running < limit && !done) {
		                var elem = nextElem();
		                if (elem === null) {
		                    done = true;
		                    if (running <= 0) {
		                        callback(null);
		                    }
		                    return;
		                }
		                running += 1;
		                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
		            }
		            looping = false;
		        }

		        replenish();
		    };
		};

		module.exports = exports.default; 
	} (eachOfLimit, eachOfLimit.exports));
	return eachOfLimit.exports;
}

var hasRequiredEachOfLimit;

function requireEachOfLimit () {
	if (hasRequiredEachOfLimit) return eachOfLimit$1.exports;
	hasRequiredEachOfLimit = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _eachOfLimit2 = requireEachOfLimit$1();

		var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);

		var _wrapAsync = requireWrapAsync();

		var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

		var _awaitify = requireAwaitify();

		var _awaitify2 = _interopRequireDefault(_awaitify);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
		 * time.
		 *
		 * @name eachOfLimit
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.eachOf]{@link module:Collections.eachOf}
		 * @alias forEachOfLimit
		 * @category Collection
		 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
		 * @param {number} limit - The maximum number of async operations at a time.
		 * @param {AsyncFunction} iteratee - An async function to apply to each
		 * item in `coll`. The `key` is the item's key, or index in the case of an
		 * array.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 * @returns {Promise} a promise, if a callback is omitted
		 */
		function eachOfLimit(coll, limit, iteratee, callback) {
		    return (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
		}

		exports.default = (0, _awaitify2.default)(eachOfLimit, 4);
		module.exports = exports.default; 
	} (eachOfLimit$1, eachOfLimit$1.exports));
	return eachOfLimit$1.exports;
}

var hasRequiredEachOfSeries;

function requireEachOfSeries () {
	if (hasRequiredEachOfSeries) return eachOfSeries.exports;
	hasRequiredEachOfSeries = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _eachOfLimit = requireEachOfLimit();

		var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

		var _awaitify = requireAwaitify();

		var _awaitify2 = _interopRequireDefault(_awaitify);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
		 *
		 * @name eachOfSeries
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @see [async.eachOf]{@link module:Collections.eachOf}
		 * @alias forEachOfSeries
		 * @category Collection
		 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to each item in
		 * `coll`.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all `iteratee`
		 * functions have finished, or an error occurs. Invoked with (err).
		 * @returns {Promise} a promise, if a callback is omitted
		 */
		function eachOfSeries(coll, iteratee, callback) {
		    return (0, _eachOfLimit2.default)(coll, 1, iteratee, callback);
		}
		exports.default = (0, _awaitify2.default)(eachOfSeries, 3);
		module.exports = exports.default; 
	} (eachOfSeries, eachOfSeries.exports));
	return eachOfSeries.exports;
}

var hasRequiredSeries;

function requireSeries () {
	if (hasRequiredSeries) return series.exports;
	hasRequiredSeries = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = series;

		var _parallel2 = requireParallel();

		var _parallel3 = _interopRequireDefault(_parallel2);

		var _eachOfSeries = requireEachOfSeries();

		var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * Run the functions in the `tasks` collection in series, each one running once
		 * the previous function has completed. If any functions in the series pass an
		 * error to its callback, no more functions are run, and `callback` is
		 * immediately called with the value of the error. Otherwise, `callback`
		 * receives an array of results when `tasks` have completed.
		 *
		 * It is also possible to use an object instead of an array. Each property will
		 * be run as a function, and the results will be passed to the final `callback`
		 * as an object instead of an array. This can be a more readable way of handling
		 *  results from {@link async.series}.
		 *
		 * **Note** that while many implementations preserve the order of object
		 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
		 * explicitly states that
		 *
		 * > The mechanics and order of enumerating the properties is not specified.
		 *
		 * So if you rely on the order in which your series of functions are executed,
		 * and want this to work on all platforms, consider using an array.
		 *
		 * @name series
		 * @static
		 * @memberOf module:ControlFlow
		 * @method
		 * @category Control Flow
		 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing
		 * [async functions]{@link AsyncFunction} to run in series.
		 * Each function can complete with any number of optional `result` values.
		 * @param {Function} [callback] - An optional callback to run once all the
		 * functions have completed. This function gets a results array (or object)
		 * containing all the result arguments passed to the `task` callbacks. Invoked
		 * with (err, result).
		 * @return {Promise} a promise, if no callback is passed
		 * @example
		 *
		 * //Using Callbacks
		 * async.series([
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             // do some async task
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             // then do another async task
		 *             callback(null, 'two');
		 *         }, 100);
		 *     }
		 * ], function(err, results) {
		 *     console.log(results);
		 *     // results is equal to ['one','two']
		 * });
		 *
		 * // an example using objects instead of arrays
		 * async.series({
		 *     one: function(callback) {
		 *         setTimeout(function() {
		 *             // do some async task
		 *             callback(null, 1);
		 *         }, 200);
		 *     },
		 *     two: function(callback) {
		 *         setTimeout(function() {
		 *             // then do another async task
		 *             callback(null, 2);
		 *         }, 100);
		 *     }
		 * }, function(err, results) {
		 *     console.log(results);
		 *     // results is equal to: { one: 1, two: 2 }
		 * });
		 *
		 * //Using Promises
		 * async.series([
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'one');
		 *         }, 200);
		 *     },
		 *     function(callback) {
		 *         setTimeout(function() {
		 *             callback(null, 'two');
		 *         }, 100);
		 *     }
		 * ]).then(results => {
		 *     console.log(results);
		 *     // results is equal to ['one','two']
		 * }).catch(err => {
		 *     console.log(err);
		 * });
		 *
		 * // an example using an object instead of an array
		 * async.series({
		 *     one: function(callback) {
		 *         setTimeout(function() {
		 *             // do some async task
		 *             callback(null, 1);
		 *         }, 200);
		 *     },
		 *     two: function(callback) {
		 *         setTimeout(function() {
		 *             // then do another async task
		 *             callback(null, 2);
		 *         }, 100);
		 *     }
		 * }).then(results => {
		 *     console.log(results);
		 *     // results is equal to: { one: 1, two: 2 }
		 * }).catch(err => {
		 *     console.log(err);
		 * });
		 *
		 * //Using async/await
		 * async () => {
		 *     try {
		 *         let results = await async.series([
		 *             function(callback) {
		 *                 setTimeout(function() {
		 *                     // do some async task
		 *                     callback(null, 'one');
		 *                 }, 200);
		 *             },
		 *             function(callback) {
		 *                 setTimeout(function() {
		 *                     // then do another async task
		 *                     callback(null, 'two');
		 *                 }, 100);
		 *             }
		 *         ]);
		 *         console.log(results);
		 *         // results is equal to ['one','two']
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *     }
		 * }
		 *
		 * // an example using an object instead of an array
		 * async () => {
		 *     try {
		 *         let results = await async.parallel({
		 *             one: function(callback) {
		 *                 setTimeout(function() {
		 *                     // do some async task
		 *                     callback(null, 1);
		 *                 }, 200);
		 *             },
		 *            two: function(callback) {
		 *                 setTimeout(function() {
		 *                     // then do another async task
		 *                     callback(null, 2);
		 *                 }, 100);
		 *            }
		 *         });
		 *         console.log(results);
		 *         // results is equal to: { one: 1, two: 2 }
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *     }
		 * }
		 *
		 */
		function series(tasks, callback) {
		    return (0, _parallel3.default)(_eachOfSeries2.default, tasks, callback);
		}
		module.exports = exports.default; 
	} (series, series.exports));
	return series.exports;
}

var readable = {exports: {}};

var stream$1;
var hasRequiredStream$1;

function requireStream$1 () {
	if (hasRequiredStream$1) return stream$1;
	hasRequiredStream$1 = 1;
	stream$1 = require$$0$5;
	return stream$1;
}

var buffer_list;
var hasRequiredBuffer_list;

function requireBuffer_list () {
	if (hasRequiredBuffer_list) return buffer_list;
	hasRequiredBuffer_list = 1;

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
	function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
	var _require = require$$0$4,
	  Buffer = _require.Buffer;
	var _require2 = require$$0$3,
	  inspect = _require2.inspect;
	var custom = inspect && inspect.custom || 'inspect';
	function copyBuffer(src, target, offset) {
	  Buffer.prototype.copy.call(src, target, offset);
	}
	buffer_list = /*#__PURE__*/function () {
	  function BufferList() {
	    _classCallCheck(this, BufferList);
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }
	  _createClass(BufferList, [{
	    key: "push",
	    value: function push(v) {
	      var entry = {
	        data: v,
	        next: null
	      };
	      if (this.length > 0) this.tail.next = entry;else this.head = entry;
	      this.tail = entry;
	      ++this.length;
	    }
	  }, {
	    key: "unshift",
	    value: function unshift(v) {
	      var entry = {
	        data: v,
	        next: this.head
	      };
	      if (this.length === 0) this.tail = entry;
	      this.head = entry;
	      ++this.length;
	    }
	  }, {
	    key: "shift",
	    value: function shift() {
	      if (this.length === 0) return;
	      var ret = this.head.data;
	      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	      --this.length;
	      return ret;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.head = this.tail = null;
	      this.length = 0;
	    }
	  }, {
	    key: "join",
	    value: function join(s) {
	      if (this.length === 0) return '';
	      var p = this.head;
	      var ret = '' + p.data;
	      while (p = p.next) ret += s + p.data;
	      return ret;
	    }
	  }, {
	    key: "concat",
	    value: function concat(n) {
	      if (this.length === 0) return Buffer.alloc(0);
	      var ret = Buffer.allocUnsafe(n >>> 0);
	      var p = this.head;
	      var i = 0;
	      while (p) {
	        copyBuffer(p.data, ret, i);
	        i += p.data.length;
	        p = p.next;
	      }
	      return ret;
	    }

	    // Consumes a specified amount of bytes or characters from the buffered data.
	  }, {
	    key: "consume",
	    value: function consume(n, hasStrings) {
	      var ret;
	      if (n < this.head.data.length) {
	        // `slice` is the same for buffers and strings.
	        ret = this.head.data.slice(0, n);
	        this.head.data = this.head.data.slice(n);
	      } else if (n === this.head.data.length) {
	        // First chunk is a perfect match.
	        ret = this.shift();
	      } else {
	        // Result spans more than one buffer.
	        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
	      }
	      return ret;
	    }
	  }, {
	    key: "first",
	    value: function first() {
	      return this.head.data;
	    }

	    // Consumes a specified amount of characters from the buffered data.
	  }, {
	    key: "_getString",
	    value: function _getString(n) {
	      var p = this.head;
	      var c = 1;
	      var ret = p.data;
	      n -= ret.length;
	      while (p = p.next) {
	        var str = p.data;
	        var nb = n > str.length ? str.length : n;
	        if (nb === str.length) ret += str;else ret += str.slice(0, n);
	        n -= nb;
	        if (n === 0) {
	          if (nb === str.length) {
	            ++c;
	            if (p.next) this.head = p.next;else this.head = this.tail = null;
	          } else {
	            this.head = p;
	            p.data = str.slice(nb);
	          }
	          break;
	        }
	        ++c;
	      }
	      this.length -= c;
	      return ret;
	    }

	    // Consumes a specified amount of bytes from the buffered data.
	  }, {
	    key: "_getBuffer",
	    value: function _getBuffer(n) {
	      var ret = Buffer.allocUnsafe(n);
	      var p = this.head;
	      var c = 1;
	      p.data.copy(ret);
	      n -= p.data.length;
	      while (p = p.next) {
	        var buf = p.data;
	        var nb = n > buf.length ? buf.length : n;
	        buf.copy(ret, ret.length - n, 0, nb);
	        n -= nb;
	        if (n === 0) {
	          if (nb === buf.length) {
	            ++c;
	            if (p.next) this.head = p.next;else this.head = this.tail = null;
	          } else {
	            this.head = p;
	            p.data = buf.slice(nb);
	          }
	          break;
	        }
	        ++c;
	      }
	      this.length -= c;
	      return ret;
	    }

	    // Make sure the linked list only shows the minimal necessary information.
	  }, {
	    key: custom,
	    value: function value(_, options) {
	      return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
	        // Only inspect one level.
	        depth: 0,
	        // It should not recurse.
	        customInspect: false
	      }));
	    }
	  }]);
	  return BufferList;
	}();
	return buffer_list;
}

var destroy_1;
var hasRequiredDestroy;

function requireDestroy () {
	if (hasRequiredDestroy) return destroy_1;
	hasRequiredDestroy = 1;

	// undocumented cb() API, needed for core, not for public API
	function destroy(err, cb) {
	  var _this = this;
	  var readableDestroyed = this._readableState && this._readableState.destroyed;
	  var writableDestroyed = this._writableState && this._writableState.destroyed;
	  if (readableDestroyed || writableDestroyed) {
	    if (cb) {
	      cb(err);
	    } else if (err) {
	      if (!this._writableState) {
	        process.nextTick(emitErrorNT, this, err);
	      } else if (!this._writableState.errorEmitted) {
	        this._writableState.errorEmitted = true;
	        process.nextTick(emitErrorNT, this, err);
	      }
	    }
	    return this;
	  }

	  // we set destroyed to true before firing error callbacks in order
	  // to make it re-entrance safe in case destroy() is called within callbacks

	  if (this._readableState) {
	    this._readableState.destroyed = true;
	  }

	  // if this is a duplex stream mark the writable part as destroyed as well
	  if (this._writableState) {
	    this._writableState.destroyed = true;
	  }
	  this._destroy(err || null, function (err) {
	    if (!cb && err) {
	      if (!_this._writableState) {
	        process.nextTick(emitErrorAndCloseNT, _this, err);
	      } else if (!_this._writableState.errorEmitted) {
	        _this._writableState.errorEmitted = true;
	        process.nextTick(emitErrorAndCloseNT, _this, err);
	      } else {
	        process.nextTick(emitCloseNT, _this);
	      }
	    } else if (cb) {
	      process.nextTick(emitCloseNT, _this);
	      cb(err);
	    } else {
	      process.nextTick(emitCloseNT, _this);
	    }
	  });
	  return this;
	}
	function emitErrorAndCloseNT(self, err) {
	  emitErrorNT(self, err);
	  emitCloseNT(self);
	}
	function emitCloseNT(self) {
	  if (self._writableState && !self._writableState.emitClose) return;
	  if (self._readableState && !self._readableState.emitClose) return;
	  self.emit('close');
	}
	function undestroy() {
	  if (this._readableState) {
	    this._readableState.destroyed = false;
	    this._readableState.reading = false;
	    this._readableState.ended = false;
	    this._readableState.endEmitted = false;
	  }
	  if (this._writableState) {
	    this._writableState.destroyed = false;
	    this._writableState.ended = false;
	    this._writableState.ending = false;
	    this._writableState.finalCalled = false;
	    this._writableState.prefinished = false;
	    this._writableState.finished = false;
	    this._writableState.errorEmitted = false;
	  }
	}
	function emitErrorNT(self, err) {
	  self.emit('error', err);
	}
	function errorOrDestroy(stream, err) {
	  // We have tests that rely on errors being emitted
	  // in the same tick, so changing this is semver major.
	  // For now when you opt-in to autoDestroy we allow
	  // the error to be emitted nextTick. In a future
	  // semver major update we should change the default to this.

	  var rState = stream._readableState;
	  var wState = stream._writableState;
	  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
	}
	destroy_1 = {
	  destroy: destroy,
	  undestroy: undestroy,
	  errorOrDestroy: errorOrDestroy
	};
	return destroy_1;
}

var errors = {};

var hasRequiredErrors;

function requireErrors () {
	if (hasRequiredErrors) return errors;
	hasRequiredErrors = 1;

	const codes = {};

	function createErrorType(code, message, Base) {
	  if (!Base) {
	    Base = Error;
	  }

	  function getMessage (arg1, arg2, arg3) {
	    if (typeof message === 'string') {
	      return message
	    } else {
	      return message(arg1, arg2, arg3)
	    }
	  }

	  class NodeError extends Base {
	    constructor (arg1, arg2, arg3) {
	      super(getMessage(arg1, arg2, arg3));
	    }
	  }

	  NodeError.prototype.name = Base.name;
	  NodeError.prototype.code = code;

	  codes[code] = NodeError;
	}

	// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
	function oneOf(expected, thing) {
	  if (Array.isArray(expected)) {
	    const len = expected.length;
	    expected = expected.map((i) => String(i));
	    if (len > 2) {
	      return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` +
	             expected[len - 1];
	    } else if (len === 2) {
	      return `one of ${thing} ${expected[0]} or ${expected[1]}`;
	    } else {
	      return `of ${thing} ${expected[0]}`;
	    }
	  } else {
	    return `of ${thing} ${String(expected)}`;
	  }
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
	function startsWith(str, search, pos) {
		return str.substr(0 , search.length) === search;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
	function endsWith(str, search, this_len) {
		if (this_len === undefined || this_len > str.length) {
			this_len = str.length;
		}
		return str.substring(this_len - search.length, this_len) === search;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
	function includes(str, search, start) {
	  if (typeof start !== 'number') {
	    start = 0;
	  }

	  if (start + search.length > str.length) {
	    return false;
	  } else {
	    return str.indexOf(search, start) !== -1;
	  }
	}

	createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
	  return 'The value "' + value + '" is invalid for option "' + name + '"'
	}, TypeError);
	createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
	  // determiner: 'must be' or 'must not be'
	  let determiner;
	  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
	    determiner = 'must not be';
	    expected = expected.replace(/^not /, '');
	  } else {
	    determiner = 'must be';
	  }

	  let msg;
	  if (endsWith(name, ' argument')) {
	    // For cases like 'first argument'
	    msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
	  } else {
	    const type = includes(name, '.') ? 'property' : 'argument';
	    msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
	  }

	  msg += `. Received type ${typeof actual}`;
	  return msg;
	}, TypeError);
	createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
	createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
	  return 'The ' + name + ' method is not implemented'
	});
	createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
	createErrorType('ERR_STREAM_DESTROYED', function (name) {
	  return 'Cannot call ' + name + ' after a stream was destroyed';
	});
	createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
	createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
	createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
	createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
	createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
	  return 'Unknown encoding: ' + arg
	}, TypeError);
	createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');

	errors.codes = codes;
	return errors;
}

var state;
var hasRequiredState;

function requireState () {
	if (hasRequiredState) return state;
	hasRequiredState = 1;

	var ERR_INVALID_OPT_VALUE = requireErrors().codes.ERR_INVALID_OPT_VALUE;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
	  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
	}
	function getHighWaterMark(state, options, duplexKey, isDuplex) {
	  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
	  if (hwm != null) {
	    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
	      var name = isDuplex ? duplexKey : 'highWaterMark';
	      throw new ERR_INVALID_OPT_VALUE(name, hwm);
	    }
	    return Math.floor(hwm);
	  }

	  // Default value
	  return state.objectMode ? 16 : 16 * 1024;
	}
	state = {
	  getHighWaterMark: getHighWaterMark
	};
	return state;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	try {
	  var util = require('util');
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  inherits.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  inherits.exports = requireInherits_browser();
	}
	return inherits.exports;
}

var node$1;
var hasRequiredNode$1;

function requireNode$1 () {
	if (hasRequiredNode$1) return node$1;
	hasRequiredNode$1 = 1;
	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */

	node$1 = require$$0$3.deprecate;
	return node$1;
}

var _stream_writable;
var hasRequired_stream_writable;

function require_stream_writable () {
	if (hasRequired_stream_writable) return _stream_writable;
	hasRequired_stream_writable = 1;

	_stream_writable = Writable;

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;
	  this.next = null;
	  this.entry = null;
	  this.finish = function () {
	    onCorkedFinish(_this, state);
	  };
	}
	/* </replacement> */

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var internalUtil = {
	  deprecate: requireNode$1()
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream = requireStream$1();
	/*</replacement>*/

	var Buffer = require$$0$4.Buffer;
	var OurUint8Array = (typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var destroyImpl = requireDestroy();
	var _require = requireState(),
	  getHighWaterMark = _require.getHighWaterMark;
	var _require$codes = requireErrors().codes,
	  ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
	  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
	  ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
	  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
	  ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
	  ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
	  ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	requireInherits()(Writable, Stream);
	function nop() {}
	function WritableState(options, stream, isDuplex) {
	  Duplex = Duplex || require_stream_duplex();
	  options = options || {};

	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream,
	  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;
	  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);

	  // if _final has been called
	  this.finalCalled = false;

	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // has it been destroyed
	  this.destroyed = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // Should close be emitted on destroy. Defaults to true.
	  this.emitClose = options.emitClose !== false;

	  // Should .destroy() be called after 'finish' (and potentially 'end')
	  this.autoDestroy = !!options.autoDestroy;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function writableStateBufferGetter() {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
	    });
	  } catch (_) {}
	})();

	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function value(object) {
	      if (realHasInstance.call(this, object)) return true;
	      if (this !== Writable) return false;
	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function realHasInstance(object) {
	    return object instanceof this;
	  };
	}
	function Writable(options) {
	  Duplex = Duplex || require_stream_duplex();

	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the WritableState constructor, at least with V8 6.5
	  var isDuplex = this instanceof Duplex;
	  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
	  this._writableState = new WritableState(options, this, isDuplex);

	  // legacy.
	  this.writable = true;
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	    if (typeof options.writev === 'function') this._writev = options.writev;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	    if (typeof options.final === 'function') this._final = options.final;
	  }
	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function writeAfterEnd(stream, cb) {
	  var er = new ERR_STREAM_WRITE_AFTER_END();
	  // TODO: defer error events consistently everywhere, not just the cb
	  errorOrDestroy(stream, er);
	  process.nextTick(cb, er);
	}

	// Checks that a user-supplied chunk is valid, especially for the particular
	// mode the stream is in. Currently this means that `null` is never accepted
	// and undefined/non-string values are only allowed in object mode.
	function validChunk(stream, state, chunk, cb) {
	  var er;
	  if (chunk === null) {
	    er = new ERR_STREAM_NULL_VALUES();
	  } else if (typeof chunk !== 'string' && !state.objectMode) {
	    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
	  }
	  if (er) {
	    errorOrDestroy(stream, er);
	    process.nextTick(cb, er);
	    return false;
	  }
	  return true;
	}
	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	  var isBuf = !state.objectMode && _isUint8Array(chunk);
	  if (isBuf && !Buffer.isBuffer(chunk)) {
	    chunk = _uint8ArrayToBuffer(chunk);
	  }
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
	  if (typeof cb !== 'function') cb = nop;
	  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
	  }
	  return ret;
	};
	Writable.prototype.cork = function () {
	  this._writableState.corked++;
	};
	Writable.prototype.uncork = function () {
	  var state = this._writableState;
	  if (state.corked) {
	    state.corked--;
	    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	Object.defineProperty(Writable.prototype, 'writableBuffer', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState && this._writableState.getBuffer();
	  }
	});
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer.from(chunk, encoding);
	  }
	  return chunk;
	}
	Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.highWaterMark;
	  }
	});

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
	  if (!isBuf) {
	    var newChunk = decodeChunk(state, chunk, encoding);
	    if (chunk !== newChunk) {
	      isBuf = true;
	      encoding = 'buffer';
	      chunk = newChunk;
	    }
	  }
	  var len = state.objectMode ? 1 : chunk.length;
	  state.length += len;
	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = {
	      chunk: chunk,
	      encoding: encoding,
	      isBuf: isBuf,
	      callback: cb,
	      next: null
	    };
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	  return ret;
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) {
	    // defer the callback if we are being called synchronously
	    // to avoid piling up things on the stack
	    process.nextTick(cb, er);
	    // this can emit finish, and it will always happen
	    // after error
	    process.nextTick(finishMaybe, stream, state);
	    stream._writableState.errorEmitted = true;
	    errorOrDestroy(stream, er);
	  } else {
	    // the caller expect this to happen before if
	    // it is async
	    cb(er);
	    stream._writableState.errorEmitted = true;
	    errorOrDestroy(stream, er);
	    // this can emit finish, but finish must
	    // always follow error
	    finishMaybe(stream, state);
	  }
	}
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
	  onwriteStateUpdate(state);
	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state) || stream.destroyed;
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	    if (sync) {
	      process.nextTick(afterWrite, stream, state, finished, cb);
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	    var count = 0;
	    var allBuffers = true;
	    while (entry) {
	      buffer[count] = entry;
	      if (!entry.isBuf) allBuffers = false;
	      entry = entry.next;
	      count += 1;
	    }
	    buffer.allBuffers = allBuffers;
	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	    state.bufferedRequestCount = 0;
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      state.bufferedRequestCount--;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending) endWritable(this, state, cb);
	  return this;
	};
	Object.defineProperty(Writable.prototype, 'writableLength', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.length;
	  }
	});
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
	  stream._final(function (err) {
	    state.pendingcb--;
	    if (err) {
	      errorOrDestroy(stream, err);
	    }
	    state.prefinished = true;
	    stream.emit('prefinish');
	    finishMaybe(stream, state);
	  });
	}
	function prefinish(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === 'function' && !state.destroyed) {
	      state.pendingcb++;
	      state.finalCalled = true;
	      process.nextTick(callFinal, stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit('prefinish');
	    }
	  }
	}
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    prefinish(stream, state);
	    if (state.pendingcb === 0) {
	      state.finished = true;
	      stream.emit('finish');
	      if (state.autoDestroy) {
	        // In case of duplex streams we need a way to detect
	        // if the readable side is ready for autoDestroy as well
	        var rState = stream._readableState;
	        if (!rState || rState.autoDestroy && rState.endEmitted) {
	          stream.destroy();
	        }
	      }
	    }
	  }
	  return need;
	}
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	function onCorkedFinish(corkReq, state, err) {
	  var entry = corkReq.entry;
	  corkReq.entry = null;
	  while (entry) {
	    var cb = entry.callback;
	    state.pendingcb--;
	    cb(err);
	    entry = entry.next;
	  }

	  // reuse the free corkReq.
	  state.corkedRequestsFree.next = corkReq;
	}
	Object.defineProperty(Writable.prototype, 'destroyed', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    if (this._writableState === undefined) {
	      return false;
	    }
	    return this._writableState.destroyed;
	  },
	  set: function set(value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._writableState) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._writableState.destroyed = value;
	  }
	});
	Writable.prototype.destroy = destroyImpl.destroy;
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function (err, cb) {
	  cb(err);
	};
	return _stream_writable;
}

var _stream_duplex;
var hasRequired_stream_duplex;

function require_stream_duplex () {
	if (hasRequired_stream_duplex) return _stream_duplex;
	hasRequired_stream_duplex = 1;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/

	_stream_duplex = Duplex;
	var Readable = require_stream_readable();
	var Writable = require_stream_writable();
	requireInherits()(Duplex, Readable);
	{
	  // Allow the keys array to be GC'ed.
	  var keys = objectKeys(Writable.prototype);
	  for (var v = 0; v < keys.length; v++) {
	    var method = keys[v];
	    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	  }
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	  Readable.call(this, options);
	  Writable.call(this, options);
	  this.allowHalfOpen = true;
	  if (options) {
	    if (options.readable === false) this.readable = false;
	    if (options.writable === false) this.writable = false;
	    if (options.allowHalfOpen === false) {
	      this.allowHalfOpen = false;
	      this.once('end', onend);
	    }
	  }
	}
	Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.highWaterMark;
	  }
	});
	Object.defineProperty(Duplex.prototype, 'writableBuffer', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState && this._writableState.getBuffer();
	  }
	});
	Object.defineProperty(Duplex.prototype, 'writableLength', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.length;
	  }
	});

	// the no-half-open enforcer
	function onend() {
	  // If the writable side ended, then we're ok.
	  if (this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(onEndNT, this);
	}
	function onEndNT(self) {
	  self.end();
	}
	Object.defineProperty(Duplex.prototype, 'destroyed', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed && this._writableState.destroyed;
	  },
	  set: function set(value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	    this._writableState.destroyed = value;
	  }
	});
	return _stream_duplex;
}

var string_decoder = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var hasRequiredSafeBuffer;

function requireSafeBuffer () {
	if (hasRequiredSafeBuffer) return safeBuffer.exports;
	hasRequiredSafeBuffer = 1;
	(function (module, exports) {
		/* eslint-disable node/no-deprecated-api */
		var buffer = require$$0$4;
		var Buffer = buffer.Buffer;

		// alternative to using Object.keys for old browsers
		function copyProps (src, dst) {
		  for (var key in src) {
		    dst[key] = src[key];
		  }
		}
		if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
		  module.exports = buffer;
		} else {
		  // Copy properties from require('buffer')
		  copyProps(buffer, exports);
		  exports.Buffer = SafeBuffer;
		}

		function SafeBuffer (arg, encodingOrOffset, length) {
		  return Buffer(arg, encodingOrOffset, length)
		}

		SafeBuffer.prototype = Object.create(Buffer.prototype);

		// Copy static methods from Buffer
		copyProps(Buffer, SafeBuffer);

		SafeBuffer.from = function (arg, encodingOrOffset, length) {
		  if (typeof arg === 'number') {
		    throw new TypeError('Argument must not be a number')
		  }
		  return Buffer(arg, encodingOrOffset, length)
		};

		SafeBuffer.alloc = function (size, fill, encoding) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  var buf = Buffer(size);
		  if (fill !== undefined) {
		    if (typeof encoding === 'string') {
		      buf.fill(fill, encoding);
		    } else {
		      buf.fill(fill);
		    }
		  } else {
		    buf.fill(0);
		  }
		  return buf
		};

		SafeBuffer.allocUnsafe = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return Buffer(size)
		};

		SafeBuffer.allocUnsafeSlow = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return buffer.SlowBuffer(size)
		}; 
	} (safeBuffer, safeBuffer.exports));
	return safeBuffer.exports;
}

var hasRequiredString_decoder;

function requireString_decoder () {
	if (hasRequiredString_decoder) return string_decoder;
	hasRequiredString_decoder = 1;

	/*<replacement>*/

	var Buffer = requireSafeBuffer().Buffer;
	/*</replacement>*/

	var isEncoding = Buffer.isEncoding || function (encoding) {
	  encoding = '' + encoding;
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
	      return true;
	    default:
	      return false;
	  }
	};

	function _normalizeEncoding(enc) {
	  if (!enc) return 'utf8';
	  var retried;
	  while (true) {
	    switch (enc) {
	      case 'utf8':
	      case 'utf-8':
	        return 'utf8';
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return 'utf16le';
	      case 'latin1':
	      case 'binary':
	        return 'latin1';
	      case 'base64':
	      case 'ascii':
	      case 'hex':
	        return enc;
	      default:
	        if (retried) return; // undefined
	        enc = ('' + enc).toLowerCase();
	        retried = true;
	    }
	  }
	}
	// Do not cache `Buffer.isEncoding` when checking encoding names as some
	// modules monkey-patch it to support additional encodings
	function normalizeEncoding(enc) {
	  var nenc = _normalizeEncoding(enc);
	  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
	  return nenc || enc;
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters.
	string_decoder.StringDecoder = StringDecoder;
	function StringDecoder(encoding) {
	  this.encoding = normalizeEncoding(encoding);
	  var nb;
	  switch (this.encoding) {
	    case 'utf16le':
	      this.text = utf16Text;
	      this.end = utf16End;
	      nb = 4;
	      break;
	    case 'utf8':
	      this.fillLast = utf8FillLast;
	      nb = 4;
	      break;
	    case 'base64':
	      this.text = base64Text;
	      this.end = base64End;
	      nb = 3;
	      break;
	    default:
	      this.write = simpleWrite;
	      this.end = simpleEnd;
	      return;
	  }
	  this.lastNeed = 0;
	  this.lastTotal = 0;
	  this.lastChar = Buffer.allocUnsafe(nb);
	}

	StringDecoder.prototype.write = function (buf) {
	  if (buf.length === 0) return '';
	  var r;
	  var i;
	  if (this.lastNeed) {
	    r = this.fillLast(buf);
	    if (r === undefined) return '';
	    i = this.lastNeed;
	    this.lastNeed = 0;
	  } else {
	    i = 0;
	  }
	  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
	  return r || '';
	};

	StringDecoder.prototype.end = utf8End;

	// Returns only complete characters in a Buffer
	StringDecoder.prototype.text = utf8Text;

	// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
	StringDecoder.prototype.fillLast = function (buf) {
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
	  this.lastNeed -= buf.length;
	};

	// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
	// continuation byte. If an invalid byte is detected, -2 is returned.
	function utf8CheckByte(byte) {
	  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
	  return byte >> 6 === 0x02 ? -1 : -2;
	}

	// Checks at most 3 bytes at the end of a Buffer in order to detect an
	// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
	// needed to complete the UTF-8 character (if applicable) are returned.
	function utf8CheckIncomplete(self, buf, i) {
	  var j = buf.length - 1;
	  if (j < i) return 0;
	  var nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 1;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 2;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) {
	      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
	    }
	    return nb;
	  }
	  return 0;
	}

	// Validates as many continuation bytes for a multi-byte UTF-8 character as
	// needed or are available. If we see a non-continuation byte where we expect
	// one, we "replace" the validated continuation bytes we've seen so far with
	// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
	// behavior. The continuation byte check is included three times in the case
	// where all of the continuation bytes for a character exist in the same buffer.
	// It is also done this way as a slight performance increase instead of using a
	// loop.
	function utf8CheckExtraBytes(self, buf, p) {
	  if ((buf[0] & 0xC0) !== 0x80) {
	    self.lastNeed = 0;
	    return '\ufffd';
	  }
	  if (self.lastNeed > 1 && buf.length > 1) {
	    if ((buf[1] & 0xC0) !== 0x80) {
	      self.lastNeed = 1;
	      return '\ufffd';
	    }
	    if (self.lastNeed > 2 && buf.length > 2) {
	      if ((buf[2] & 0xC0) !== 0x80) {
	        self.lastNeed = 2;
	        return '\ufffd';
	      }
	    }
	  }
	}

	// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
	function utf8FillLast(buf) {
	  var p = this.lastTotal - this.lastNeed;
	  var r = utf8CheckExtraBytes(this, buf);
	  if (r !== undefined) return r;
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, p, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, p, 0, buf.length);
	  this.lastNeed -= buf.length;
	}

	// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
	// partial character, the character's bytes are buffered until the required
	// number of bytes are available.
	function utf8Text(buf, i) {
	  var total = utf8CheckIncomplete(this, buf, i);
	  if (!this.lastNeed) return buf.toString('utf8', i);
	  this.lastTotal = total;
	  var end = buf.length - (total - this.lastNeed);
	  buf.copy(this.lastChar, 0, end);
	  return buf.toString('utf8', i, end);
	}

	// For UTF-8, a replacement character is added when ending on a partial
	// character.
	function utf8End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + '\ufffd';
	  return r;
	}

	// UTF-16LE typically needs two bytes per character, but even if we have an even
	// number of bytes available, we need to check if we end on a leading/high
	// surrogate. In that case, we need to wait for the next two bytes in order to
	// decode the last character properly.
	function utf16Text(buf, i) {
	  if ((buf.length - i) % 2 === 0) {
	    var r = buf.toString('utf16le', i);
	    if (r) {
	      var c = r.charCodeAt(r.length - 1);
	      if (c >= 0xD800 && c <= 0xDBFF) {
	        this.lastNeed = 2;
	        this.lastTotal = 4;
	        this.lastChar[0] = buf[buf.length - 2];
	        this.lastChar[1] = buf[buf.length - 1];
	        return r.slice(0, -1);
	      }
	    }
	    return r;
	  }
	  this.lastNeed = 1;
	  this.lastTotal = 2;
	  this.lastChar[0] = buf[buf.length - 1];
	  return buf.toString('utf16le', i, buf.length - 1);
	}

	// For UTF-16LE we do not explicitly append special replacement characters if we
	// end on a partial character, we simply let v8 handle that.
	function utf16End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) {
	    var end = this.lastTotal - this.lastNeed;
	    return r + this.lastChar.toString('utf16le', 0, end);
	  }
	  return r;
	}

	function base64Text(buf, i) {
	  var n = (buf.length - i) % 3;
	  if (n === 0) return buf.toString('base64', i);
	  this.lastNeed = 3 - n;
	  this.lastTotal = 3;
	  if (n === 1) {
	    this.lastChar[0] = buf[buf.length - 1];
	  } else {
	    this.lastChar[0] = buf[buf.length - 2];
	    this.lastChar[1] = buf[buf.length - 1];
	  }
	  return buf.toString('base64', i, buf.length - n);
	}

	function base64End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
	  return r;
	}

	// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
	function simpleWrite(buf) {
	  return buf.toString(this.encoding);
	}

	function simpleEnd(buf) {
	  return buf && buf.length ? this.write(buf) : '';
	}
	return string_decoder;
}

var endOfStream;
var hasRequiredEndOfStream;

function requireEndOfStream () {
	if (hasRequiredEndOfStream) return endOfStream;
	hasRequiredEndOfStream = 1;

	var ERR_STREAM_PREMATURE_CLOSE = requireErrors().codes.ERR_STREAM_PREMATURE_CLOSE;
	function once(callback) {
	  var called = false;
	  return function () {
	    if (called) return;
	    called = true;
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    callback.apply(this, args);
	  };
	}
	function noop() {}
	function isRequest(stream) {
	  return stream.setHeader && typeof stream.abort === 'function';
	}
	function eos(stream, opts, callback) {
	  if (typeof opts === 'function') return eos(stream, null, opts);
	  if (!opts) opts = {};
	  callback = once(callback || noop);
	  var readable = opts.readable || opts.readable !== false && stream.readable;
	  var writable = opts.writable || opts.writable !== false && stream.writable;
	  var onlegacyfinish = function onlegacyfinish() {
	    if (!stream.writable) onfinish();
	  };
	  var writableEnded = stream._writableState && stream._writableState.finished;
	  var onfinish = function onfinish() {
	    writable = false;
	    writableEnded = true;
	    if (!readable) callback.call(stream);
	  };
	  var readableEnded = stream._readableState && stream._readableState.endEmitted;
	  var onend = function onend() {
	    readable = false;
	    readableEnded = true;
	    if (!writable) callback.call(stream);
	  };
	  var onerror = function onerror(err) {
	    callback.call(stream, err);
	  };
	  var onclose = function onclose() {
	    var err;
	    if (readable && !readableEnded) {
	      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
	      return callback.call(stream, err);
	    }
	    if (writable && !writableEnded) {
	      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
	      return callback.call(stream, err);
	    }
	  };
	  var onrequest = function onrequest() {
	    stream.req.on('finish', onfinish);
	  };
	  if (isRequest(stream)) {
	    stream.on('complete', onfinish);
	    stream.on('abort', onclose);
	    if (stream.req) onrequest();else stream.on('request', onrequest);
	  } else if (writable && !stream._writableState) {
	    // legacy streams
	    stream.on('end', onlegacyfinish);
	    stream.on('close', onlegacyfinish);
	  }
	  stream.on('end', onend);
	  stream.on('finish', onfinish);
	  if (opts.error !== false) stream.on('error', onerror);
	  stream.on('close', onclose);
	  return function () {
	    stream.removeListener('complete', onfinish);
	    stream.removeListener('abort', onclose);
	    stream.removeListener('request', onrequest);
	    if (stream.req) stream.req.removeListener('finish', onfinish);
	    stream.removeListener('end', onlegacyfinish);
	    stream.removeListener('close', onlegacyfinish);
	    stream.removeListener('finish', onfinish);
	    stream.removeListener('end', onend);
	    stream.removeListener('error', onerror);
	    stream.removeListener('close', onclose);
	  };
	}
	endOfStream = eos;
	return endOfStream;
}

var async_iterator;
var hasRequiredAsync_iterator;

function requireAsync_iterator () {
	if (hasRequiredAsync_iterator) return async_iterator;
	hasRequiredAsync_iterator = 1;

	var _Object$setPrototypeO;
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
	function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
	var finished = requireEndOfStream();
	var kLastResolve = Symbol('lastResolve');
	var kLastReject = Symbol('lastReject');
	var kError = Symbol('error');
	var kEnded = Symbol('ended');
	var kLastPromise = Symbol('lastPromise');
	var kHandlePromise = Symbol('handlePromise');
	var kStream = Symbol('stream');
	function createIterResult(value, done) {
	  return {
	    value: value,
	    done: done
	  };
	}
	function readAndResolve(iter) {
	  var resolve = iter[kLastResolve];
	  if (resolve !== null) {
	    var data = iter[kStream].read();
	    // we defer if data is null
	    // we can be expecting either 'end' or
	    // 'error'
	    if (data !== null) {
	      iter[kLastPromise] = null;
	      iter[kLastResolve] = null;
	      iter[kLastReject] = null;
	      resolve(createIterResult(data, false));
	    }
	  }
	}
	function onReadable(iter) {
	  // we wait for the next tick, because it might
	  // emit an error with process.nextTick
	  process.nextTick(readAndResolve, iter);
	}
	function wrapForNext(lastPromise, iter) {
	  return function (resolve, reject) {
	    lastPromise.then(function () {
	      if (iter[kEnded]) {
	        resolve(createIterResult(undefined, true));
	        return;
	      }
	      iter[kHandlePromise](resolve, reject);
	    }, reject);
	  };
	}
	var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
	var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
	  get stream() {
	    return this[kStream];
	  },
	  next: function next() {
	    var _this = this;
	    // if we have detected an error in the meanwhile
	    // reject straight away
	    var error = this[kError];
	    if (error !== null) {
	      return Promise.reject(error);
	    }
	    if (this[kEnded]) {
	      return Promise.resolve(createIterResult(undefined, true));
	    }
	    if (this[kStream].destroyed) {
	      // We need to defer via nextTick because if .destroy(err) is
	      // called, the error will be emitted via nextTick, and
	      // we cannot guarantee that there is no error lingering around
	      // waiting to be emitted.
	      return new Promise(function (resolve, reject) {
	        process.nextTick(function () {
	          if (_this[kError]) {
	            reject(_this[kError]);
	          } else {
	            resolve(createIterResult(undefined, true));
	          }
	        });
	      });
	    }

	    // if we have multiple next() calls
	    // we will wait for the previous Promise to finish
	    // this logic is optimized to support for await loops,
	    // where next() is only called once at a time
	    var lastPromise = this[kLastPromise];
	    var promise;
	    if (lastPromise) {
	      promise = new Promise(wrapForNext(lastPromise, this));
	    } else {
	      // fast path needed to support multiple this.push()
	      // without triggering the next() queue
	      var data = this[kStream].read();
	      if (data !== null) {
	        return Promise.resolve(createIterResult(data, false));
	      }
	      promise = new Promise(this[kHandlePromise]);
	    }
	    this[kLastPromise] = promise;
	    return promise;
	  }
	}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
	  return this;
	}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
	  var _this2 = this;
	  // destroy(err, cb) is a private API
	  // we can guarantee we have that here, because we control the
	  // Readable class this is attached to
	  return new Promise(function (resolve, reject) {
	    _this2[kStream].destroy(null, function (err) {
	      if (err) {
	        reject(err);
	        return;
	      }
	      resolve(createIterResult(undefined, true));
	    });
	  });
	}), _Object$setPrototypeO), AsyncIteratorPrototype);
	var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
	  var _Object$create;
	  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
	    value: stream,
	    writable: true
	  }), _defineProperty(_Object$create, kLastResolve, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kLastReject, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kError, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kEnded, {
	    value: stream._readableState.endEmitted,
	    writable: true
	  }), _defineProperty(_Object$create, kHandlePromise, {
	    value: function value(resolve, reject) {
	      var data = iterator[kStream].read();
	      if (data) {
	        iterator[kLastPromise] = null;
	        iterator[kLastResolve] = null;
	        iterator[kLastReject] = null;
	        resolve(createIterResult(data, false));
	      } else {
	        iterator[kLastResolve] = resolve;
	        iterator[kLastReject] = reject;
	      }
	    },
	    writable: true
	  }), _Object$create));
	  iterator[kLastPromise] = null;
	  finished(stream, function (err) {
	    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
	      var reject = iterator[kLastReject];
	      // reject if we are waiting for data in the Promise
	      // returned by next() and store the error
	      if (reject !== null) {
	        iterator[kLastPromise] = null;
	        iterator[kLastResolve] = null;
	        iterator[kLastReject] = null;
	        reject(err);
	      }
	      iterator[kError] = err;
	      return;
	    }
	    var resolve = iterator[kLastResolve];
	    if (resolve !== null) {
	      iterator[kLastPromise] = null;
	      iterator[kLastResolve] = null;
	      iterator[kLastReject] = null;
	      resolve(createIterResult(undefined, true));
	    }
	    iterator[kEnded] = true;
	  });
	  stream.on('readable', onReadable.bind(null, iterator));
	  return iterator;
	};
	async_iterator = createReadableStreamAsyncIterator;
	return async_iterator;
}

var from_1;
var hasRequiredFrom;

function requireFrom () {
	if (hasRequiredFrom) return from_1;
	hasRequiredFrom = 1;

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
	function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
	function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
	var ERR_INVALID_ARG_TYPE = requireErrors().codes.ERR_INVALID_ARG_TYPE;
	function from(Readable, iterable, opts) {
	  var iterator;
	  if (iterable && typeof iterable.next === 'function') {
	    iterator = iterable;
	  } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();else throw new ERR_INVALID_ARG_TYPE('iterable', ['Iterable'], iterable);
	  var readable = new Readable(_objectSpread({
	    objectMode: true
	  }, opts));
	  // Reading boolean to protect against _read
	  // being called before last iteration completion.
	  var reading = false;
	  readable._read = function () {
	    if (!reading) {
	      reading = true;
	      next();
	    }
	  };
	  function next() {
	    return _next2.apply(this, arguments);
	  }
	  function _next2() {
	    _next2 = _asyncToGenerator(function* () {
	      try {
	        var _yield$iterator$next = yield iterator.next(),
	          value = _yield$iterator$next.value,
	          done = _yield$iterator$next.done;
	        if (done) {
	          readable.push(null);
	        } else if (readable.push(yield value)) {
	          next();
	        } else {
	          reading = false;
	        }
	      } catch (err) {
	        readable.destroy(err);
	      }
	    });
	    return _next2.apply(this, arguments);
	  }
	  return readable;
	}
	from_1 = from;
	return from_1;
}

var _stream_readable;
var hasRequired_stream_readable;

function require_stream_readable () {
	if (hasRequired_stream_readable) return _stream_readable;
	hasRequired_stream_readable = 1;

	_stream_readable = Readable;

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	/*<replacement>*/
	require$$2$1.EventEmitter;
	var EElistenerCount = function EElistenerCount(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream = requireStream$1();
	/*</replacement>*/

	var Buffer = require$$0$4.Buffer;
	var OurUint8Array = (typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}

	/*<replacement>*/
	var debugUtil = require$$0$3;
	var debug;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function debug() {};
	}
	/*</replacement>*/

	var BufferList = requireBuffer_list();
	var destroyImpl = requireDestroy();
	var _require = requireState(),
	  getHighWaterMark = _require.getHighWaterMark;
	var _require$codes = requireErrors().codes,
	  ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
	  ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
	  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;

	// Lazy loaded to improve the startup performance.
	var StringDecoder;
	var createReadableStreamAsyncIterator;
	var from;
	requireInherits()(Readable, Stream);
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

	  // This is a hack to make sure that our error handler is attached before any
	  // userland ones.  NEVER DO THIS. This is here only because this code needs
	  // to continue to work with older versions of Node.js that do not include
	  // the prependListener() method. The goal is to eventually remove this hack.
	  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	}
	function ReadableState(options, stream, isDuplex) {
	  Duplex = Duplex || require_stream_duplex();
	  options = options || {};

	  // Duplex streams are both readable and writable, but share
	  // the same options object.
	  // However, some cases require setting options to different
	  // values for the readable and the writable sides of the duplex stream.
	  // These options can be provided separately as readableXXX and writableXXX.
	  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex;

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;
	  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the event 'readable'/'data' is emitted
	  // immediately, or on a later tick.  We set this to true at first, because
	  // any actions that shouldn't happen until "later" should generally also
	  // not happen before the first read call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	  this.paused = true;

	  // Should close be emitted on destroy. Defaults to true.
	  this.emitClose = options.emitClose !== false;

	  // Should .destroy() be called after 'end' (and potentially 'finish')
	  this.autoDestroy = !!options.autoDestroy;

	  // has it been destroyed
	  this.destroyed = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {
	  Duplex = Duplex || require_stream_duplex();
	  if (!(this instanceof Readable)) return new Readable(options);

	  // Checking for a Stream.Duplex instance is faster here instead of inside
	  // the ReadableState constructor, at least with V8 6.5
	  var isDuplex = this instanceof Duplex;
	  this._readableState = new ReadableState(options, this, isDuplex);

	  // legacy
	  this.readable = true;
	  if (options) {
	    if (typeof options.read === 'function') this._read = options.read;
	    if (typeof options.destroy === 'function') this._destroy = options.destroy;
	  }
	  Stream.call(this);
	}
	Object.defineProperty(Readable.prototype, 'destroyed', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    if (this._readableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed;
	  },
	  set: function set(value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (!this._readableState) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	  }
	});
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function (err, cb) {
	  cb(err);
	};

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	  var skipChunkCheck;
	  if (!state.objectMode) {
	    if (typeof chunk === 'string') {
	      encoding = encoding || state.defaultEncoding;
	      if (encoding !== state.encoding) {
	        chunk = Buffer.from(chunk, encoding);
	        encoding = '';
	      }
	      skipChunkCheck = true;
	    }
	  } else {
	    skipChunkCheck = true;
	  }
	  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  return readableAddChunk(this, chunk, null, true, false);
	};
	function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
	  debug('readableAddChunk', chunk);
	  var state = stream._readableState;
	  if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else {
	    var er;
	    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
	    if (er) {
	      errorOrDestroy(stream, er);
	    } else if (state.objectMode || chunk && chunk.length > 0) {
	      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
	        chunk = _uint8ArrayToBuffer(chunk);
	      }
	      if (addToFront) {
	        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
	      } else if (state.ended) {
	        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
	      } else if (state.destroyed) {
	        return false;
	      } else {
	        state.reading = false;
	        if (state.decoder && !encoding) {
	          chunk = state.decoder.write(chunk);
	          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
	        } else {
	          addChunk(stream, state, chunk, false);
	        }
	      }
	    } else if (!addToFront) {
	      state.reading = false;
	      maybeReadMore(stream, state);
	    }
	  }

	  // We can push more data if we are below the highWaterMark.
	  // Also, if we have no data yet, we can stand some more bytes.
	  // This is to work around cases where hwm=0, such as the repl.
	  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
	}
	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync) {
	    state.awaitDrain = 0;
	    stream.emit('data', chunk);
	  } else {
	    // update the buffer info.
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
	    if (state.needReadable) emitReadable(stream);
	  }
	  maybeReadMore(stream, state);
	}
	function chunkInvalid(state, chunk) {
	  var er;
	  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
	  }
	  return er;
	}
	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
	  var decoder = new StringDecoder(enc);
	  this._readableState.decoder = decoder;
	  // If setEncoding(null), decoder.encoding equals utf8
	  this._readableState.encoding = this._readableState.decoder.encoding;

	  // Iterate over current buffer to convert already stored Buffers:
	  var p = this._readableState.buffer.head;
	  var content = '';
	  while (p !== null) {
	    content += decoder.write(p.data);
	    p = p.next;
	  }
	  this._readableState.buffer.clear();
	  if (content !== '') this._readableState.buffer.push(content);
	  this._readableState.length = content.length;
	  return this;
	};

	// Don't raise the hwm > 1GB
	var MAX_HWM = 0x40000000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }
	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;
	  if (ret === null) {
	    state.needReadable = state.length <= state.highWaterMark;
	    n = 0;
	  } else {
	    state.length -= n;
	    state.awaitDrain = 0;
	  }
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	  if (ret !== null) this.emit('data', ret);
	  return ret;
	};
	function onEofChunk(stream, state) {
	  debug('onEofChunk');
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	  if (state.sync) {
	    // if we are sync, wait until next tick to emit the data.
	    // Otherwise we risk emitting data in the flow()
	    // the readable code triggers during a read() call
	    emitReadable(stream);
	  } else {
	    // emit 'readable' now to make sure it gets picked up.
	    state.needReadable = false;
	    if (!state.emittedReadable) {
	      state.emittedReadable = true;
	      emitReadable_(stream);
	    }
	  }
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  debug('emitReadable', state.needReadable, state.emittedReadable);
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    process.nextTick(emitReadable_, stream);
	  }
	}
	function emitReadable_(stream) {
	  var state = stream._readableState;
	  debug('emitReadable_', state.destroyed, state.length, state.ended);
	  if (!state.destroyed && (state.length || state.ended)) {
	    stream.emit('readable');
	    state.emittedReadable = false;
	  }

	  // The stream needs another readable event if
	  // 1. It is not flowing, as the flow mechanism will take
	  //    care of it.
	  // 2. It is not ended.
	  // 3. It is below the highWaterMark, so we can schedule
	  //    another readable later.
	  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(maybeReadMore_, stream, state);
	  }
	}
	function maybeReadMore_(stream, state) {
	  // Attempt to read more data if we should.
	  //
	  // The conditions for reading more data are (one of):
	  // - Not enough data buffered (state.length < state.highWaterMark). The loop
	  //   is responsible for filling the buffer with enough data if such data
	  //   is available. If highWaterMark is 0 and we are not in the flowing mode
	  //   we should _not_ attempt to buffer any extra data. We'll get more data
	  //   when the stream consumer calls read() instead.
	  // - No data in the buffer, and the stream is in flowing mode. In this mode
	  //   the loop below is responsible for ensuring read() is called. Failing to
	  //   call read here would abort the flow and there's no other mechanism for
	  //   continuing the flow if the stream consumer has just subscribed to the
	  //   'data' event.
	  //
	  // In addition to the above conditions to keep reading data, the following
	  // conditions prevent the data from being read:
	  // - The stream has ended (state.ended).
	  // - There is already a pending 'read' operation (state.reading). This is a
	  //   case where the the stream has called the implementation defined _read()
	  //   method, but they are processing the call asynchronously and have _not_
	  //   called push() with new data. In this case we skip performing more
	  //   read()s. The execution ends in this method again after the _read() ends
	  //   up calling push() with more data.
	  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
	    var len = state.length;
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
	};
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	  var endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug('onunpipe');
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }
	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);
	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', unpipe);
	    src.removeListener('data', ondata);
	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    debug('dest.write', ret);
	    if (ret === false) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', state.awaitDrain);
	        state.awaitDrain++;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	  return dest;
	};
	function pipeOnDrain(src) {
	  return function pipeOnDrainFunctionResult() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	  var unpipeInfo = {
	    hasUnpiped: false
	  };

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;
	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this, unpipeInfo);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    for (var i = 0; i < len; i++) dests[i].emit('unpipe', this, {
	      hasUnpiped: false
	    });
	    return this;
	  }

	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;
	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	  dest.emit('unpipe', this, unpipeInfo);
	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	  var state = this._readableState;
	  if (ev === 'data') {
	    // update readableListening so that resume() may be a no-op
	    // a few lines down. This is needed to support once('readable').
	    state.readableListening = this.listenerCount('readable') > 0;

	    // Try start flowing on next tick if stream isn't explicitly paused
	    if (state.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.flowing = false;
	      state.emittedReadable = false;
	      debug('on readable', state.length, state.reading);
	      if (state.length) {
	        emitReadable(this);
	      } else if (!state.reading) {
	        process.nextTick(nReadingNextTick, this);
	      }
	    }
	  }
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function (ev, fn) {
	  var res = Stream.prototype.removeListener.call(this, ev, fn);
	  if (ev === 'readable') {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res;
	};
	Readable.prototype.removeAllListeners = function (ev) {
	  var res = Stream.prototype.removeAllListeners.apply(this, arguments);
	  if (ev === 'readable' || ev === undefined) {
	    // We need to check if there is someone still listening to
	    // readable and reset the state. However this needs to happen
	    // after readable has been emitted but before I/O (nextTick) to
	    // support once('readable', fn) cycles. This means that calling
	    // resume within the same tick will have no
	    // effect.
	    process.nextTick(updateReadableListening, this);
	  }
	  return res;
	};
	function updateReadableListening(self) {
	  var state = self._readableState;
	  state.readableListening = self.listenerCount('readable') > 0;
	  if (state.resumeScheduled && !state.paused) {
	    // flowing needs to be set to true now, otherwise
	    // the upcoming resume will not flow.
	    state.flowing = true;

	    // crude way to check if we should resume
	  } else if (self.listenerCount('data') > 0) {
	    self.resume();
	  }
	}
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    // we flow only if there is no one listening
	    // for readable, but we still have to call
	    // resume()
	    state.flowing = !state.readableListening;
	    resume(this, state);
	  }
	  state.paused = false;
	  return this;
	};
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(resume_, stream, state);
	  }
	}
	function resume_(stream, state) {
	  debug('resume', state.reading);
	  if (!state.reading) {
	    stream.read(0);
	  }
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (this._readableState.flowing !== false) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  this._readableState.paused = true;
	  return this;
	};
	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null);
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var _this = this;
	  var state = this._readableState;
	  var paused = false;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) _this.push(chunk);
	    }
	    _this.push(null);
	  });
	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
	    var ret = _this.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function methodWrap(method) {
	        return function methodWrapReturnFunction() {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  for (var n = 0; n < kProxyEvents.length; n++) {
	    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
	  }

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  this._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	  return this;
	};
	if (typeof Symbol === 'function') {
	  Readable.prototype[Symbol.asyncIterator] = function () {
	    if (createReadableStreamAsyncIterator === undefined) {
	      createReadableStreamAsyncIterator = requireAsync_iterator();
	    }
	    return createReadableStreamAsyncIterator(this);
	  };
	}
	Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._readableState.highWaterMark;
	  }
	});
	Object.defineProperty(Readable.prototype, 'readableBuffer', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._readableState && this._readableState.buffer;
	  }
	});
	Object.defineProperty(Readable.prototype, 'readableFlowing', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._readableState.flowing;
	  },
	  set: function set(state) {
	    if (this._readableState) {
	      this._readableState.flowing = state;
	    }
	  }
	});

	// exposed for testing purposes only.
	Readable._fromList = fromList;
	Object.defineProperty(Readable.prototype, 'readableLength', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._readableState.length;
	  }
	});

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = state.buffer.consume(n, state.decoder);
	  }
	  return ret;
	}
	function endReadable(stream) {
	  var state = stream._readableState;
	  debug('endReadable', state.endEmitted);
	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(endReadableNT, state, stream);
	  }
	}
	function endReadableNT(state, stream) {
	  debug('endReadableNT', state.endEmitted, state.length);

	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	    if (state.autoDestroy) {
	      // In case of duplex streams we need a way to detect
	      // if the writable side is ready for autoDestroy as well
	      var wState = stream._writableState;
	      if (!wState || wState.autoDestroy && wState.finished) {
	        stream.destroy();
	      }
	    }
	  }
	}
	if (typeof Symbol === 'function') {
	  Readable.from = function (iterable, opts) {
	    if (from === undefined) {
	      from = requireFrom();
	    }
	    return from(Readable, iterable, opts);
	  };
	}
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	return _stream_readable;
}

var _stream_transform;
var hasRequired_stream_transform;

function require_stream_transform () {
	if (hasRequired_stream_transform) return _stream_transform;
	hasRequired_stream_transform = 1;

	_stream_transform = Transform;
	var _require$codes = requireErrors().codes,
	  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
	  ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
	  ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
	var Duplex = require_stream_duplex();
	requireInherits()(Transform, Duplex);
	function afterTransform(er, data) {
	  var ts = this._transformState;
	  ts.transforming = false;
	  var cb = ts.writecb;
	  if (cb === null) {
	    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
	  }
	  ts.writechunk = null;
	  ts.writecb = null;
	  if (data != null)
	    // single equals check for both `null` and `undefined`
	    this.push(data);
	  cb(er);
	  var rs = this._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    this._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	  Duplex.call(this, options);
	  this._transformState = {
	    afterTransform: afterTransform.bind(this),
	    needTransform: false,
	    transforming: false,
	    writecb: null,
	    writechunk: null,
	    writeencoding: null
	  };

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.on('prefinish', prefinish);
	}
	function prefinish() {
	  var _this = this;
	  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
	    this._flush(function (er, data) {
	      done(_this, er, data);
	    });
	  } else {
	    done(this, null, null);
	  }
	}
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
	};
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	  if (ts.writechunk !== null && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	Transform.prototype._destroy = function (err, cb) {
	  Duplex.prototype._destroy.call(this, err, function (err2) {
	    cb(err2);
	  });
	};
	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);
	  if (data != null)
	    // single equals check for both `null` and `undefined`
	    stream.push(data);

	  // TODO(BridgeAR): Write a test for these two error cases
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
	  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
	  return stream.push(null);
	}
	return _stream_transform;
}

var _stream_passthrough;
var hasRequired_stream_passthrough;

function require_stream_passthrough () {
	if (hasRequired_stream_passthrough) return _stream_passthrough;
	hasRequired_stream_passthrough = 1;

	_stream_passthrough = PassThrough;
	var Transform = require_stream_transform();
	requireInherits()(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	  Transform.call(this, options);
	}
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};
	return _stream_passthrough;
}

var pipeline_1;
var hasRequiredPipeline;

function requirePipeline () {
	if (hasRequiredPipeline) return pipeline_1;
	hasRequiredPipeline = 1;

	var eos;
	function once(callback) {
	  var called = false;
	  return function () {
	    if (called) return;
	    called = true;
	    callback.apply(void 0, arguments);
	  };
	}
	var _require$codes = requireErrors().codes,
	  ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
	  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
	function noop(err) {
	  // Rethrow the error if it exists to avoid swallowing it
	  if (err) throw err;
	}
	function isRequest(stream) {
	  return stream.setHeader && typeof stream.abort === 'function';
	}
	function destroyer(stream, reading, writing, callback) {
	  callback = once(callback);
	  var closed = false;
	  stream.on('close', function () {
	    closed = true;
	  });
	  if (eos === undefined) eos = requireEndOfStream();
	  eos(stream, {
	    readable: reading,
	    writable: writing
	  }, function (err) {
	    if (err) return callback(err);
	    closed = true;
	    callback();
	  });
	  var destroyed = false;
	  return function (err) {
	    if (closed) return;
	    if (destroyed) return;
	    destroyed = true;

	    // request.destroy just do .end - .abort is what we want
	    if (isRequest(stream)) return stream.abort();
	    if (typeof stream.destroy === 'function') return stream.destroy();
	    callback(err || new ERR_STREAM_DESTROYED('pipe'));
	  };
	}
	function call(fn) {
	  fn();
	}
	function pipe(from, to) {
	  return from.pipe(to);
	}
	function popCallback(streams) {
	  if (!streams.length) return noop;
	  if (typeof streams[streams.length - 1] !== 'function') return noop;
	  return streams.pop();
	}
	function pipeline() {
	  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
	    streams[_key] = arguments[_key];
	  }
	  var callback = popCallback(streams);
	  if (Array.isArray(streams[0])) streams = streams[0];
	  if (streams.length < 2) {
	    throw new ERR_MISSING_ARGS('streams');
	  }
	  var error;
	  var destroys = streams.map(function (stream, i) {
	    var reading = i < streams.length - 1;
	    var writing = i > 0;
	    return destroyer(stream, reading, writing, function (err) {
	      if (!error) error = err;
	      if (err) destroys.forEach(call);
	      if (reading) return;
	      destroys.forEach(call);
	      callback(error);
	    });
	  });
	  return streams.reduce(pipe);
	}
	pipeline_1 = pipeline;
	return pipeline_1;
}

var hasRequiredReadable;

function requireReadable () {
	if (hasRequiredReadable) return readable.exports;
	hasRequiredReadable = 1;
	(function (module, exports) {
		var Stream = require$$0$5;
		if (process.env.READABLE_STREAM === 'disable' && Stream) {
		  module.exports = Stream.Readable;
		  Object.assign(module.exports, Stream);
		  module.exports.Stream = Stream;
		} else {
		  exports = module.exports = require_stream_readable();
		  exports.Stream = Stream || exports;
		  exports.Readable = exports;
		  exports.Writable = require_stream_writable();
		  exports.Duplex = require_stream_duplex();
		  exports.Transform = require_stream_transform();
		  exports.PassThrough = require_stream_passthrough();
		  exports.finished = requireEndOfStream();
		  exports.pipeline = requirePipeline();
		} 
	} (readable, readable.exports));
	return readable.exports;
}

var node = {exports: {}};

/**
 * Contains all configured adapters for the given environment.
 *
 * @type {Array}
 * @public
 */

var diagnostics;
var hasRequiredDiagnostics;

function requireDiagnostics () {
	if (hasRequiredDiagnostics) return diagnostics;
	hasRequiredDiagnostics = 1;
	var adapters = [];

	/**
	 * Contains all modifier functions.
	 *
	 * @typs {Array}
	 * @public
	 */
	var modifiers = [];

	/**
	 * Our default logger.
	 *
	 * @public
	 */
	var logger = function devnull() {};

	/**
	 * Register a new adapter that will used to find environments.
	 *
	 * @param {Function} adapter A function that will return the possible env.
	 * @returns {Boolean} Indication of a successful add.
	 * @public
	 */
	function use(adapter) {
	  if (~adapters.indexOf(adapter)) return false;

	  adapters.push(adapter);
	  return true;
	}

	/**
	 * Assign a new log method.
	 *
	 * @param {Function} custom The log method.
	 * @public
	 */
	function set(custom) {
	  logger = custom;
	}

	/**
	 * Check if the namespace is allowed by any of our adapters.
	 *
	 * @param {String} namespace The namespace that needs to be enabled
	 * @returns {Boolean|Promise} Indication if the namespace is enabled by our adapters.
	 * @public
	 */
	function enabled(namespace) {
	  var async = [];

	  for (var i = 0; i < adapters.length; i++) {
	    if (adapters[i].async) {
	      async.push(adapters[i]);
	      continue;
	    }

	    if (adapters[i](namespace)) return true;
	  }

	  if (!async.length) return false;

	  //
	  // Now that we know that we Async functions, we know we run in an ES6
	  // environment and can use all the API's that they offer, in this case
	  // we want to return a Promise so that we can `await` in React-Native
	  // for an async adapter.
	  //
	  return new Promise(function pinky(resolve) {
	    Promise.all(
	      async.map(function prebind(fn) {
	        return fn(namespace);
	      })
	    ).then(function resolved(values) {
	      resolve(values.some(Boolean));
	    });
	  });
	}

	/**
	 * Add a new message modifier to the debugger.
	 *
	 * @param {Function} fn Modification function.
	 * @returns {Boolean} Indication of a successful add.
	 * @public
	 */
	function modify(fn) {
	  if (~modifiers.indexOf(fn)) return false;

	  modifiers.push(fn);
	  return true;
	}

	/**
	 * Write data to the supplied logger.
	 *
	 * @param {Object} meta Meta information about the log.
	 * @param {Array} args Arguments for console.log.
	 * @public
	 */
	function write() {
	  logger.apply(logger, arguments);
	}

	/**
	 * Process the message with the modifiers.
	 *
	 * @param {Mixed} message The message to be transformed by modifers.
	 * @returns {String} Transformed message.
	 * @public
	 */
	function process(message) {
	  for (var i = 0; i < modifiers.length; i++) {
	    message = modifiers[i].apply(modifiers[i], arguments);
	  }

	  return message;
	}

	/**
	 * Introduce options to the logger function.
	 *
	 * @param {Function} fn Calback function.
	 * @param {Object} options Properties to introduce on fn.
	 * @returns {Function} The passed function
	 * @public
	 */
	function introduce(fn, options) {
	  var has = Object.prototype.hasOwnProperty;

	  for (var key in options) {
	    if (has.call(options, key)) {
	      fn[key] = options[key];
	    }
	  }

	  return fn;
	}

	/**
	 * Nope, we're not allowed to write messages.
	 *
	 * @returns {Boolean} false
	 * @public
	 */
	function nope(options) {
	  options.enabled = false;
	  options.modify = modify;
	  options.set = set;
	  options.use = use;

	  return introduce(function diagnopes() {
	    return false;
	  }, options);
	}

	/**
	 * Yep, we're allowed to write debug messages.
	 *
	 * @param {Object} options The options for the process.
	 * @returns {Function} The function that does the logging.
	 * @public
	 */
	function yep(options) {
	  /**
	   * The function that receives the actual debug information.
	   *
	   * @returns {Boolean} indication that we're logging.
	   * @public
	   */
	  function diagnostics() {
	    var args = Array.prototype.slice.call(arguments, 0);

	    write.call(write, options, process(args, options));
	    return true;
	  }

	  options.enabled = true;
	  options.modify = modify;
	  options.set = set;
	  options.use = use;

	  return introduce(diagnostics, options);
	}

	/**
	 * Simple helper function to introduce various of helper methods to our given
	 * diagnostics function.
	 *
	 * @param {Function} diagnostics The diagnostics function.
	 * @returns {Function} diagnostics
	 * @public
	 */
	diagnostics = function create(diagnostics) {
	  diagnostics.introduce = introduce;
	  diagnostics.enabled = enabled;
	  diagnostics.process = process;
	  diagnostics.modify = modify;
	  diagnostics.write = write;
	  diagnostics.nope = nope;
	  diagnostics.yep = yep;
	  diagnostics.set = set;
	  diagnostics.use = use;

	  return diagnostics;
	};
	return diagnostics;
}

var production;
var hasRequiredProduction;

function requireProduction () {
	if (hasRequiredProduction) return production;
	hasRequiredProduction = 1;
	var create = requireDiagnostics();

	/**
	 * Create a new diagnostics logger.
	 *
	 * @param {String} namespace The namespace it should enable.
	 * @param {Object} options Additional options.
	 * @returns {Function} The logger.
	 * @public
	 */
	var diagnostics = create(function prod(namespace, options) {
	  options = options || {};
	  options.namespace = namespace;
	  options.prod = true;
	  options.dev = false;

	  if (!(options.force || prod.force)) return prod.nope(options);
	  return prod.yep(options);
	});

	//
	// Expose the diagnostics logger.
	//
	production = diagnostics;
	return production;
}

var colorString = {exports: {}};

var simpleSwizzle = {exports: {}};

var isArrayish;
var hasRequiredIsArrayish;

function requireIsArrayish () {
	if (hasRequiredIsArrayish) return isArrayish;
	hasRequiredIsArrayish = 1;
	isArrayish = function isArrayish(obj) {
		if (!obj || typeof obj === 'string') {
			return false;
		}

		return obj instanceof Array || Array.isArray(obj) ||
			(obj.length >= 0 && (obj.splice instanceof Function ||
				(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
	};
	return isArrayish;
}

var hasRequiredSimpleSwizzle;

function requireSimpleSwizzle () {
	if (hasRequiredSimpleSwizzle) return simpleSwizzle.exports;
	hasRequiredSimpleSwizzle = 1;

	var isArrayish = requireIsArrayish();

	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = simpleSwizzle.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
	return simpleSwizzle.exports;
}

/* MIT license */

var hasRequiredColorString;

function requireColorString () {
	if (hasRequiredColorString) return colorString.exports;
	hasRequiredColorString = 1;
	var colorNames = requireColorName$1();
	var swizzle = requireSimpleSwizzle();
	var hasOwnProperty = Object.hasOwnProperty;

	var reverseNames = Object.create(null);

	// create a list of reverse color names
	for (var name in colorNames) {
		if (hasOwnProperty.call(colorNames, name)) {
			reverseNames[colorNames[name]] = name;
		}
	}

	var cs = colorString.exports = {
		to: {},
		get: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return {model: model, value: val};
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
		var keyword = /^(\w+)$/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = parseInt(hexAlpha, 16) / 255;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				if (match[5]) {
					rgb[3] = parseFloat(match[4]) * 0.01;
				} else {
					rgb[3] = parseFloat(match[4]);
				}
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				if (match[5]) {
					rgb[3] = parseFloat(match[4]) * 0.01;
				} else {
					rgb[3] = parseFloat(match[4]);
				}
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			if (!hasOwnProperty.call(colorNames, match[1])) {
				return null;
			}

			rgb = colorNames[match[1]];
			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = swizzle(arguments);

		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};

	cs.to.rgb = function () {
		var rgba = swizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = swizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = swizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = swizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = Math.round(num).toString(16).toUpperCase();
		return (str.length < 2) ? '0' + str : str;
	}
	return colorString.exports;
}

var conversions = {exports: {}};

var colorName;
var hasRequiredColorName;

function requireColorName () {
	if (hasRequiredColorName) return colorName;
	hasRequiredColorName = 1;

	colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	return colorName;
}

/* MIT license */

var hasRequiredConversions;

function requireConversions () {
	if (hasRequiredConversions) return conversions.exports;
	hasRequiredConversions = 1;
	var cssKeywords = requireColorName();

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in cssKeywords) {
		if (cssKeywords.hasOwnProperty(key)) {
			reverseKeywords[cssKeywords[key]] = key;
		}
	}

	var convert = conversions.exports = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', {value: channels});
			Object.defineProperty(convert[model], 'labels', {value: labels});
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var rdif;
		var gdif;
		var bdif;
		var h;
		var s;

		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var v = Math.max(r, g, b);
		var diff = v - Math.min(r, g, b);
		var diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}
			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
	 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * */
	function comparativeDistance(x, y) {
		return (
			Math.pow(x[0] - y[0], 2) +
			Math.pow(x[1] - y[1], 2) +
			Math.pow(x[2] - y[2], 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in cssKeywords) {
			if (cssKeywords.hasOwnProperty(keyword)) {
				var value = cssKeywords[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
		g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
		b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

		var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - (s * f));
		var t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

		// assume sRGB
		r = r > 0.0031308
			? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		var ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = ((color & 1) * mult) * 255;
		var g = (((color >> 1) & 1) * mult) * 255;
		var b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = (integer >> 16) & 0xFF;
		var g = (integer >> 8) & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = (max - min);
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = (h % 1) * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	return conversions.exports;
}

var route;
var hasRequiredRoute;

function requireRoute () {
	if (hasRequiredRoute) return route;
	hasRequiredRoute = 1;
	var conversions = requireConversions();

	/*
		this function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);

		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);

			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];

		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	route = function (fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};

		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];

			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};
	return route;
}

var colorConvert;
var hasRequiredColorConvert;

function requireColorConvert () {
	if (hasRequiredColorConvert) return colorConvert;
	hasRequiredColorConvert = 1;
	var conversions = requireConversions();
	var route = requireRoute();

	var convert = {};

	var models = Object.keys(conversions);

	function wrapRaw(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			return fn(args);
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			var result = fn(args);

			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(function (fromModel) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		var routes = route(fromModel);
		var routeModels = Object.keys(routes);

		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	colorConvert = convert;
	return colorConvert;
}

var color;
var hasRequiredColor;

function requireColor () {
	if (hasRequiredColor) return color;
	hasRequiredColor = 1;

	var colorString = requireColorString();
	var convert = requireColorConvert();

	var _slice = [].slice;

	var skippedModels = [
		// to be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',

		// gray conflicts with some method names, and has its own method defined.
		'gray',

		// shouldn't really be in color-convert either...
		'hex'
	];

	var hashedModelKeys = {};
	Object.keys(convert).forEach(function (model) {
		hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
	});

	var limiters = {};

	function Color(obj, model) {
		if (!(this instanceof Color)) {
			return new Color(obj, model);
		}

		if (model && model in skippedModels) {
			model = null;
		}

		if (model && !(model in convert)) {
			throw new Error('Unknown model: ' + model);
		}

		var i;
		var channels;

		if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (obj instanceof Color) {
			this.model = obj.model;
			this.color = obj.color.slice();
			this.valpha = obj.valpha;
		} else if (typeof obj === 'string') {
			var result = colorString.get(obj);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + obj);
			}

			this.model = result.model;
			channels = convert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (obj.length) {
			this.model = model || 'rgb';
			channels = convert[this.model].channels;
			var newArr = _slice.call(obj, 0, channels);
			this.color = zeroArray(newArr, channels);
			this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
		} else if (typeof obj === 'number') {
			// this is always RGB - can be converted later on.
			obj &= 0xFFFFFF;
			this.model = 'rgb';
			this.color = [
				(obj >> 16) & 0xFF,
				(obj >> 8) & 0xFF,
				obj & 0xFF
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;

			var keys = Object.keys(obj);
			if ('alpha' in obj) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
			}

			var hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
			}

			this.model = hashedModelKeys[hashedKeys];

			var labels = convert[this.model].labels;
			var color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(obj[labels[i]]);
			}

			this.color = zeroArray(color);
		}

		// perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = convert[this.model].channels;
			for (i = 0; i < channels; i++) {
				var limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}

		this.valpha = Math.max(0, Math.min(1, this.valpha));

		if (Object.freeze) {
			Object.freeze(this);
		}
	}

	Color.prototype = {
		toString: function () {
			return this.string();
		},

		toJSON: function () {
			return this[this.model]();
		},

		string: function (places) {
			var self = this.model in colorString.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to[self.model](args);
		},

		percentString: function (places) {
			var self = this.rgb().round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to.rgb.percent(args);
		},

		array: function () {
			return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
		},

		object: function () {
			var result = {};
			var channels = convert[this.model].channels;
			var labels = convert[this.model].labels;

			for (var i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}

			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}

			return result;
		},

		unitArray: function () {
			var rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;

			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}

			return rgb;
		},

		unitObject: function () {
			var rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;

			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}

			return rgb;
		},

		round: function (places) {
			places = Math.max(places || 0, 0);
			return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
		},

		alpha: function (val) {
			if (arguments.length) {
				return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
			}

			return this.valpha;
		},

		// rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),

		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),

		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),

		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),

		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),

		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),

		x: getset('xyz', 0, maxfn(100)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(100)),

		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),

		keyword: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return convert[this.model].keyword(this.color);
		},

		hex: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorString.to.hex(this.rgb().round().color);
		},

		rgbNumber: function () {
			var rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.rgb().color;

			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}

			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();

			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}

			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		isDark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.rgb().color;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		isLight: function () {
			return !this.isDark();
		},

		negate: function () {
			var rgb = this.rgb();
			for (var i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}
			return rgb;
		},

		lighten: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},

		darken: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},

		saturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},

		desaturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},

		whiten: function (ratio) {
			var hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},

		blacken: function (ratio) {
			var hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},

		grayscale: function () {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var rgb = this.rgb().color;
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(val, val, val);
		},

		fade: function (ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},

		opaquer: function (ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},

		rotate: function (degrees) {
			var hsl = this.hsl();
			var hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},

		mix: function (mixinColor, weight) {
			// ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			if (!mixinColor || !mixinColor.rgb) {
				throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
			}
			var color1 = mixinColor.rgb();
			var color2 = this.rgb();
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return Color.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue(),
					color1.alpha() * p + color2.alpha() * (1 - p));
		}
	};

	// model conversion methods and static constructors
	Object.keys(convert).forEach(function (model) {
		if (skippedModels.indexOf(model) !== -1) {
			return;
		}

		var channels = convert[model].channels;

		// conversion methods
		Color.prototype[model] = function () {
			if (this.model === model) {
				return new Color(this);
			}

			if (arguments.length) {
				return new Color(arguments, model);
			}

			var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
			return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
		};

		// 'static' construction methods
		Color[model] = function (color) {
			if (typeof color === 'number') {
				color = zeroArray(_slice.call(arguments), channels);
			}
			return new Color(color, model);
		};
	});

	function roundTo(num, places) {
		return Number(num.toFixed(places));
	}

	function roundToPlace(places) {
		return function (num) {
			return roundTo(num, places);
		};
	}

	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];

		model.forEach(function (m) {
			(limiters[m] || (limiters[m] = []))[channel] = modifier;
		});

		model = model[0];

		return function (val) {
			var result;

			if (arguments.length) {
				if (modifier) {
					val = modifier(val);
				}

				result = this[model]();
				result.color[channel] = val;
				return result;
			}

			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}

			return result;
		};
	}

	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}

	function assertArray(val) {
		return Array.isArray(val) ? val : [val];
	}

	function zeroArray(arr, length) {
		for (var i = 0; i < length; i++) {
			if (typeof arr[i] !== 'number') {
				arr[i] = 0;
			}
		}

		return arr;
	}

	color = Color;
	return color;
}

var textHex;
var hasRequiredTextHex;

function requireTextHex () {
	if (hasRequiredTextHex) return textHex;
	hasRequiredTextHex = 1;

	/***
	 * Convert string to hex color.
	 *
	 * @param {String} str Text to hash and convert to hex.
	 * @returns {String}
	 * @api public
	 */
	textHex = function hex(str) {
	  for (
	    var i = 0, hash = 0;
	    i < str.length;
	    hash = str.charCodeAt(i++) + ((hash << 5) - hash)
	  );

	  var color = Math.floor(
	    Math.abs(
	      (Math.sin(hash) * 10000) % 1 * 16777216
	    )
	  ).toString(16);

	  return '#' + Array(6 - color.length + 1).join('0') + color;
	};
	return textHex;
}

var colorspace;
var hasRequiredColorspace;

function requireColorspace () {
	if (hasRequiredColorspace) return colorspace;
	hasRequiredColorspace = 1;

	var color = requireColor()
	  , hex = requireTextHex();

	/**
	 * Generate a color for a given name. But be reasonably smart about it by
	 * understanding name spaces and coloring each namespace a bit lighter so they
	 * still have the same base color as the root.
	 *
	 * @param {string} namespace The namespace
	 * @param {string} [delimiter] The delimiter
	 * @returns {string} color
	 */
	colorspace = function colorspace(namespace, delimiter) {
	  var split = namespace.split(delimiter || ':');
	  var base = hex(split[0]);

	  if (!split.length) return base;

	  for (var i = 0, l = split.length - 1; i < l; i++) {
	    base = color(base)
	    .mix(color(hex(split[i + 1])))
	    .saturate(1)
	    .hex();
	  }

	  return base;
	};
	return colorspace;
}

var kuler;
var hasRequiredKuler;

function requireKuler () {
	if (hasRequiredKuler) return kuler;
	hasRequiredKuler = 1;

	/**
	 * Kuler: Color text using CSS colors
	 *
	 * @constructor
	 * @param {String} text The text that needs to be styled
	 * @param {String} color Optional color for alternate API.
	 * @api public
	 */
	function Kuler(text, color) {
	  if (color) return (new Kuler(text)).style(color);
	  if (!(this instanceof Kuler)) return new Kuler(text);

	  this.text = text;
	}

	/**
	 * ANSI color codes.
	 *
	 * @type {String}
	 * @private
	 */
	Kuler.prototype.prefix = '\x1b[';
	Kuler.prototype.suffix = 'm';

	/**
	 * Parse a hex color string and parse it to it's RGB equiv.
	 *
	 * @param {String} color
	 * @returns {Array}
	 * @api private
	 */
	Kuler.prototype.hex = function hex(color) {
	  color = color[0] === '#' ? color.substring(1) : color;

	  //
	  // Pre-parse for shorthand hex colors.
	  //
	  if (color.length === 3) {
	    color = color.split('');

	    color[5] = color[2]; // F60##0
	    color[4] = color[2]; // F60#00
	    color[3] = color[1]; // F60600
	    color[2] = color[1]; // F66600
	    color[1] = color[0]; // FF6600

	    color = color.join('');
	  }

	  var r = color.substring(0, 2)
	    , g = color.substring(2, 4)
	    , b = color.substring(4, 6);

	  return [ parseInt(r, 16), parseInt(g, 16), parseInt(b, 16) ];
	};

	/**
	 * Transform a 255 RGB value to an RGV code.
	 *
	 * @param {Number} r Red color channel.
	 * @param {Number} g Green color channel.
	 * @param {Number} b Blue color channel.
	 * @returns {String}
	 * @api public
	 */
	Kuler.prototype.rgb = function rgb(r, g, b) {
	  var red = r / 255 * 5
	    , green = g / 255 * 5
	    , blue = b / 255 * 5;

	  return this.ansi(red, green, blue);
	};

	/**
	 * Turns RGB 0-5 values into a single ANSI code.
	 *
	 * @param {Number} r Red color channel.
	 * @param {Number} g Green color channel.
	 * @param {Number} b Blue color channel.
	 * @returns {String}
	 * @api public
	 */
	Kuler.prototype.ansi = function ansi(r, g, b) {
	  var red = Math.round(r)
	    , green = Math.round(g)
	    , blue = Math.round(b);

	  return 16 + (red * 36) + (green * 6) + blue;
	};

	/**
	 * Marks an end of color sequence.
	 *
	 * @returns {String} Reset sequence.
	 * @api public
	 */
	Kuler.prototype.reset = function reset() {
	  return this.prefix +'39;49'+ this.suffix;
	};

	/**
	 * Colour the terminal using CSS.
	 *
	 * @param {String} color The HEX color code.
	 * @returns {String} the escape code.
	 * @api public
	 */
	Kuler.prototype.style = function style(color) {
	  return this.prefix +'38;5;'+ this.rgb.apply(this, this.hex(color)) + this.suffix + this.text + this.reset();
	};


	//
	// Expose the actual interface.
	//
	kuler = Kuler;
	return kuler;
}

var namespaceAnsi;
var hasRequiredNamespaceAnsi;

function requireNamespaceAnsi () {
	if (hasRequiredNamespaceAnsi) return namespaceAnsi;
	hasRequiredNamespaceAnsi = 1;
	var colorspace = requireColorspace();
	var kuler = requireKuler();

	/**
	 * Prefix the messages with a colored namespace.
	 *
	 * @param {Array} args The messages array that is getting written.
	 * @param {Object} options Options for diagnostics.
	 * @returns {Array} Altered messages array.
	 * @public
	 */
	namespaceAnsi = function ansiModifier(args, options) {
	  var namespace = options.namespace;
	  var ansi = options.colors !== false
	  ? kuler(namespace +':', colorspace(namespace))
	  : namespace +':';

	  args[0] = ansi +' '+ args[0];
	  return args;
	};
	return namespaceAnsi;
}

var enabled;
var hasRequiredEnabled;

function requireEnabled () {
	if (hasRequiredEnabled) return enabled;
	hasRequiredEnabled = 1;

	/**
	 * Checks if a given namespace is allowed by the given variable.
	 *
	 * @param {String} name namespace that should be included.
	 * @param {String} variable Value that needs to be tested.
	 * @returns {Boolean} Indication if namespace is enabled.
	 * @public
	 */
	enabled = function enabled(name, variable) {
	  if (!variable) return false;

	  var variables = variable.split(/[\s,]+/)
	    , i = 0;

	  for (; i < variables.length; i++) {
	    variable = variables[i].replace('*', '.*?');

	    if ('-' === variable.charAt(0)) {
	      if ((new RegExp('^'+ variable.substr(1) +'$')).test(name)) {
	        return false;
	      }

	      continue;
	    }

	    if ((new RegExp('^'+ variable +'$')).test(name)) {
	      return true;
	    }
	  }

	  return false;
	};
	return enabled;
}

var adapters;
var hasRequiredAdapters;

function requireAdapters () {
	if (hasRequiredAdapters) return adapters;
	hasRequiredAdapters = 1;
	var enabled = requireEnabled();

	/**
	 * Creates a new Adapter.
	 *
	 * @param {Function} fn Function that returns the value.
	 * @returns {Function} The adapter logic.
	 * @public
	 */
	adapters = function create(fn) {
	  return function adapter(namespace) {
	    try {
	      return enabled(namespace, fn());
	    } catch (e) { /* Any failure means that we found nothing */ }

	    return false;
	  };
	};
	return adapters;
}

var process_env;
var hasRequiredProcess_env;

function requireProcess_env () {
	if (hasRequiredProcess_env) return process_env;
	hasRequiredProcess_env = 1;
	var adapter = requireAdapters();

	/**
	 * Extracts the values from process.env.
	 *
	 * @type {Function}
	 * @public
	 */
	process_env = adapter(function processenv() {
	  return process.env.DEBUG || process.env.DIAGNOSTICS;
	});
	return process_env;
}

/**
 * An idiot proof logger to be used as default. We've wrapped it in a try/catch
 * statement to ensure the environments without the `console` API do not crash
 * as well as an additional fix for ancient browsers like IE8 where the
 * `console.log` API doesn't have an `apply`, so we need to use the Function's
 * apply functionality to apply the arguments.
 *
 * @param {Object} meta Options of the logger.
 * @param {Array} messages The actuall message that needs to be logged.
 * @public
 */

var console_1;
var hasRequiredConsole;

function requireConsole () {
	if (hasRequiredConsole) return console_1;
	hasRequiredConsole = 1;
	console_1 = function (meta, messages) {
	  //
	  // So yea. IE8 doesn't have an apply so we need a work around to puke the
	  // arguments in place.
	  //
	  try { Function.prototype.apply.call(console.log, console, messages); }
	  catch (e) {}
	};
	return console_1;
}

var development;
var hasRequiredDevelopment;

function requireDevelopment () {
	if (hasRequiredDevelopment) return development;
	hasRequiredDevelopment = 1;
	var create = requireDiagnostics();
	var tty = require$$1.isatty(1);

	/**
	 * Create a new diagnostics logger.
	 *
	 * @param {String} namespace The namespace it should enable.
	 * @param {Object} options Additional options.
	 * @returns {Function} The logger.
	 * @public
	 */
	var diagnostics = create(function dev(namespace, options) {
	  options = options || {};
	  options.colors = 'colors' in options ? options.colors : tty;
	  options.namespace = namespace;
	  options.prod = false;
	  options.dev = true;

	  if (!dev.enabled(namespace) && !(options.force || dev.force)) {
	    return dev.nope(options);
	  }
	  
	  return dev.yep(options);
	});

	//
	// Configure the logger for the given environment.
	//
	diagnostics.modify(requireNamespaceAnsi());
	diagnostics.use(requireProcess_env());
	diagnostics.set(requireConsole());

	//
	// Expose the diagnostics logger.
	//
	development = diagnostics;
	return development;
}

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	//
	// Select the correct build version depending on the environment.
	//
	if (process.env.NODE_ENV === 'production') {
	  node.exports = requireProduction();
	} else {
	  node.exports = requireDevelopment();
	}
	return node.exports;
}

/**
 * tail-file.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var tailFile;
var hasRequiredTailFile;

function requireTailFile () {
	if (hasRequiredTailFile) return tailFile;
	hasRequiredTailFile = 1;

	const fs = require$$0$6;
	const { StringDecoder } = require$$13;
	const { Stream } = requireReadable();

	/**
	 * Simple no-op function.
	 * @returns {undefined}
	 */
	function noop() {}

	/**
	 * TODO: add function description.
	 * @param {Object} options - Options for tail.
	 * @param {function} iter - Iterator function to execute on every line.
	* `tail -f` a file. Options must include file.
	 * @returns {mixed} - TODO: add return description.
	 */
	tailFile = (options, iter) => {
	  const buffer = Buffer.alloc(64 * 1024);
	  const decode = new StringDecoder('utf8');
	  const stream = new Stream();
	  let buff = '';
	  let pos = 0;
	  let row = 0;

	  if (options.start === -1) {
	    delete options.start;
	  }

	  stream.readable = true;
	  stream.destroy = () => {
	    stream.destroyed = true;
	    stream.emit('end');
	    stream.emit('close');
	  };

	  fs.open(options.file, 'a+', '0644', (err, fd) => {
	    if (err) {
	      if (!iter) {
	        stream.emit('error', err);
	      } else {
	        iter(err);
	      }
	      stream.destroy();
	      return;
	    }

	    (function read() {
	      if (stream.destroyed) {
	        fs.close(fd, noop);
	        return;
	      }

	      return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
	        if (error) {
	          if (!iter) {
	            stream.emit('error', error);
	          } else {
	            iter(error);
	          }
	          stream.destroy();
	          return;
	        }

	        if (!bytes) {
	          if (buff) {
	            // eslint-disable-next-line eqeqeq
	            if (options.start == null || row > options.start) {
	              if (!iter) {
	                stream.emit('line', buff);
	              } else {
	                iter(null, buff);
	              }
	            }
	            row++;
	            buff = '';
	          }
	          return setTimeout(read, 1000);
	        }

	        let data = decode.write(buffer.slice(0, bytes));
	        if (!iter) {
	          stream.emit('data', data);
	        }

	        data = (buff + data).split(/\n+/);

	        const l = data.length - 1;
	        let i = 0;

	        for (; i < l; i++) {
	          // eslint-disable-next-line eqeqeq
	          if (options.start == null || row > options.start) {
	            if (!iter) {
	              stream.emit('line', data[i]);
	            } else {
	              iter(null, data[i]);
	            }
	          }
	          row++;
	        }

	        buff = data[l];
	        pos += bytes;
	        return read();
	      });
	    }());
	  });

	  if (!iter) {
	    return stream;
	  }

	  return stream.destroy;
	};
	return tailFile;
}

/* eslint-disable complexity,max-statements */

var file;
var hasRequiredFile;

function requireFile () {
	if (hasRequiredFile) return file;
	hasRequiredFile = 1;

	const fs = require$$0$6;
	const path = require$$1$1;
	const asyncSeries = requireSeries();
	const zlib = require$$3;
	const { MESSAGE } = requireTripleBeam();
	const { Stream, PassThrough } = requireReadable();
	const TransportStream = requireWinstonTransport();
	const debug = requireNode()('winston:file');
	const os = require$$0$2;
	const tailFile = requireTailFile();

	/**
	 * Transport for outputting to a local log file.
	 * @type {File}
	 * @extends {TransportStream}
	 */
	file = class File extends TransportStream {
	  /**
	   * Constructor function for the File transport object responsible for
	   * persisting log messages and metadata to one or more files.
	   * @param {Object} options - Options for this instance.
	   */
	  constructor(options = {}) {
	    super(options);

	    // Expose the name of this Transport on the prototype.
	    this.name = options.name || 'file';

	    // Helper function which throws an `Error` in the event that any of the
	    // rest of the arguments is present in `options`.
	    function throwIf(target, ...args) {
	      args.slice(1).forEach(name => {
	        if (options[name]) {
	          throw new Error(`Cannot set ${name} and ${target} together`);
	        }
	      });
	    }

	    // Setup the base stream that always gets piped to to handle buffering.
	    this._stream = new PassThrough();
	    this._stream.setMaxListeners(30);

	    // Bind this context for listener methods.
	    this._onError = this._onError.bind(this);

	    if (options.filename || options.dirname) {
	      throwIf('filename or dirname', 'stream');
	      this._basename = this.filename = options.filename
	        ? path.basename(options.filename)
	        : 'winston.log';

	      this.dirname = options.dirname || path.dirname(options.filename);
	      this.options = options.options || { flags: 'a' };
	    } else if (options.stream) {
	      // eslint-disable-next-line no-console
	      console.warn('options.stream will be removed in winston@4. Use winston.transports.Stream');
	      throwIf('stream', 'filename', 'maxsize');
	      this._dest = this._stream.pipe(this._setupStream(options.stream));
	      this.dirname = path.dirname(this._dest.path);
	      // We need to listen for drain events when write() returns false. This
	      // can make node mad at times.
	    } else {
	      throw new Error('Cannot log to file without filename or stream.');
	    }

	    this.maxsize = options.maxsize || null;
	    this.rotationFormat = options.rotationFormat || false;
	    this.zippedArchive = options.zippedArchive || false;
	    this.maxFiles = options.maxFiles || null;
	    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
	    this.tailable = options.tailable || false;
	    this.lazy = options.lazy || false;

	    // Internal state variables representing the number of files this instance
	    // has created and the current size (in bytes) of the current logfile.
	    this._size = 0;
	    this._pendingSize = 0;
	    this._created = 0;
	    this._drain = false;
	    this._opening = false;
	    this._ending = false;
	    this._fileExist = false;

	    if (this.dirname) this._createLogDirIfNotExist(this.dirname);
	    if (!this.lazy) this.open();
	  }

	  finishIfEnding() {
	    if (this._ending) {
	      if (this._opening) {
	        this.once('open', () => {
	          this._stream.once('finish', () => this.emit('finish'));
	          setImmediate(() => this._stream.end());
	        });
	      } else {
	        this._stream.once('finish', () => this.emit('finish'));
	        setImmediate(() => this._stream.end());
	      }
	    }
	  }

	  /**
	   * Core logging method exposed to Winston. Metadata is optional.
	   * @param {Object} info - TODO: add param description.
	   * @param {Function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  log(info, callback = () => { }) {
	    // Remark: (jcrugzz) What is necessary about this callback(null, true) now
	    // when thinking about 3.x? Should silent be handled in the base
	    // TransportStream _write method?
	    if (this.silent) {
	      callback();
	      return true;
	    }


	    // Output stream buffer is full and has asked us to wait for the drain event
	    if (this._drain) {
	      this._stream.once('drain', () => {
	        this._drain = false;
	        this.log(info, callback);
	      });
	      return;
	    }
	    if (this._rotate) {
	      this._stream.once('rotate', () => {
	        this._rotate = false;
	        this.log(info, callback);
	      });
	      return;
	    }
	    if (this.lazy) {
	      if (!this._fileExist) {
	        if (!this._opening) {
	          this.open();
	        }
	        this.once('open', () => {
	          this._fileExist = true;
	          this.log(info, callback);
	          return;
	        });
	        return;
	      }
	      if (this._needsNewFile(this._pendingSize)) {
	        this._dest.once('close', () => {
	          if (!this._opening) {
	            this.open();
	          }
	          this.once('open', () => {
	            this.log(info, callback);
	            return;
	          });
	          return;
	        });
	        return;
	      }
	    }

	    // Grab the raw string and append the expected EOL.
	    const output = `${info[MESSAGE]}${this.eol}`;
	    const bytes = Buffer.byteLength(output);

	    // After we have written to the PassThrough check to see if we need
	    // to rotate to the next file.
	    //
	    // Remark: This gets called too early and does not depict when data
	    // has been actually flushed to disk.
	    function logged() {
	      this._size += bytes;
	      this._pendingSize -= bytes;

	      debug('logged %s %s', this._size, output);
	      this.emit('logged', info);

	      // Do not attempt to rotate files while rotating
	      if (this._rotate) {
	        return;
	      }

	      // Do not attempt to rotate files while opening
	      if (this._opening) {
	        return;
	      }

	      // Check to see if we need to end the stream and create a new one.
	      if (!this._needsNewFile()) {
	        return;
	      }
	      if (this.lazy) {
	        this._endStream(() => {this.emit('fileclosed');});
	        return;
	      }

	      // End the current stream, ensure it flushes and create a new one.
	      // This could potentially be optimized to not run a stat call but its
	      // the safest way since we are supporting `maxFiles`.
	      this._rotate = true;
	      this._endStream(() => this._rotateFile());
	    }

	    // Keep track of the pending bytes being written while files are opening
	    // in order to properly rotate the PassThrough this._stream when the file
	    // eventually does open.
	    this._pendingSize += bytes;
	    if (this._opening
	      && !this.rotatedWhileOpening
	      && this._needsNewFile(this._size + this._pendingSize)) {
	      this.rotatedWhileOpening = true;
	    }

	    const written = this._stream.write(output, logged.bind(this));
	    if (!written) {
	      this._drain = true;
	      this._stream.once('drain', () => {
	        this._drain = false;
	        callback();
	      });
	    } else {
	      callback(); // eslint-disable-line callback-return
	    }

	    debug('written', written, this._drain);

	    this.finishIfEnding();

	    return written;
	  }

	  /**
	   * Query the transport. Options object is optional.
	   * @param {Object} options - Loggly-like query options for this instance.
	   * @param {function} callback - Continuation to respond to when complete.
	   * TODO: Refactor me.
	   */
	  query(options, callback) {
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    options = normalizeQuery(options);
	    const file = path.join(this.dirname, this.filename);
	    let buff = '';
	    let results = [];
	    let row = 0;

	    const stream = fs.createReadStream(file, {
	      encoding: 'utf8'
	    });

	    stream.on('error', err => {
	      if (stream.readable) {
	        stream.destroy();
	      }
	      if (!callback) {
	        return;
	      }

	      return err.code !== 'ENOENT' ? callback(err) : callback(null, results);
	    });

	    stream.on('data', data => {
	      data = (buff + data).split(/\n+/);
	      const l = data.length - 1;
	      let i = 0;

	      for (; i < l; i++) {
	        if (!options.start || row >= options.start) {
	          add(data[i]);
	        }
	        row++;
	      }

	      buff = data[l];
	    });

	    stream.on('close', () => {
	      if (buff) {
	        add(buff, true);
	      }
	      if (options.order === 'desc') {
	        results = results.reverse();
	      }

	      // eslint-disable-next-line callback-return
	      if (callback) callback(null, results);
	    });

	    function add(buff, attempt) {
	      try {
	        const log = JSON.parse(buff);
	        if (check(log)) {
	          push(log);
	        }
	      } catch (e) {
	        if (!attempt) {
	          stream.emit('error', e);
	        }
	      }
	    }

	    function push(log) {
	      if (
	        options.rows &&
	        results.length >= options.rows &&
	        options.order !== 'desc'
	      ) {
	        if (stream.readable) {
	          stream.destroy();
	        }
	        return;
	      }

	      if (options.fields) {
	        log = options.fields.reduce((obj, key) => {
	          obj[key] = log[key];
	          return obj;
	        }, {});
	      }

	      if (options.order === 'desc') {
	        if (results.length >= options.rows) {
	          results.shift();
	        }
	      }
	      results.push(log);
	    }

	    function check(log) {
	      if (!log) {
	        return;
	      }

	      if (typeof log !== 'object') {
	        return;
	      }

	      const time = new Date(log.timestamp);
	      if (
	        (options.from && time < options.from) ||
	        (options.until && time > options.until) ||
	        (options.level && options.level !== log.level)
	      ) {
	        return;
	      }

	      return true;
	    }

	    function normalizeQuery(options) {
	      options = options || {};

	      // limit
	      options.rows = options.rows || options.limit || 10;

	      // starting row offset
	      options.start = options.start || 0;

	      // now
	      options.until = options.until || new Date();
	      if (typeof options.until !== 'object') {
	        options.until = new Date(options.until);
	      }

	      // now - 24
	      options.from = options.from || (options.until - (24 * 60 * 60 * 1000));
	      if (typeof options.from !== 'object') {
	        options.from = new Date(options.from);
	      }

	      // 'asc' or 'desc'
	      options.order = options.order || 'desc';

	      return options;
	    }
	  }

	  /**
	   * Returns a log stream for this transport. Options object is optional.
	   * @param {Object} options - Stream options for this instance.
	   * @returns {Stream} - TODO: add return description.
	   * TODO: Refactor me.
	   */
	  stream(options = {}) {
	    const file = path.join(this.dirname, this.filename);
	    const stream = new Stream();
	    const tail = {
	      file,
	      start: options.start
	    };

	    stream.destroy = tailFile(tail, (err, line) => {
	      if (err) {
	        return stream.emit('error', err);
	      }

	      try {
	        stream.emit('data', line);
	        line = JSON.parse(line);
	        stream.emit('log', line);
	      } catch (e) {
	        stream.emit('error', e);
	      }
	    });

	    return stream;
	  }

	  /**
	   * Checks to see the filesize of.
	   * @returns {undefined}
	   */
	  open() {
	    // If we do not have a filename then we were passed a stream and
	    // don't need to keep track of size.
	    if (!this.filename) return;
	    if (this._opening) return;

	    this._opening = true;

	    // Stat the target file to get the size and create the stream.
	    this.stat((err, size) => {
	      if (err) {
	        return this.emit('error', err);
	      }
	      debug('stat done: %s { size: %s }', this.filename, size);
	      this._size = size;
	      this._dest = this._createStream(this._stream);
	      this._opening = false;
	      this.once('open', () => {
	        if (!this._stream.emit('rotate')) {
	          this._rotate = false;
	        }
	      });
	    });
	  }

	  /**
	   * Stat the file and assess information in order to create the proper stream.
	   * @param {function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  stat(callback) {
	    const target = this._getFile();
	    const fullpath = path.join(this.dirname, target);

	    fs.stat(fullpath, (err, stat) => {
	      if (err && err.code === 'ENOENT') {
	        debug('ENOENT ok', fullpath);
	        // Update internally tracked filename with the new target name.
	        this.filename = target;
	        return callback(null, 0);
	      }

	      if (err) {
	        debug(`err ${err.code} ${fullpath}`);
	        return callback(err);
	      }

	      if (!stat || this._needsNewFile(stat.size)) {
	        // If `stats.size` is greater than the `maxsize` for this
	        // instance then try again.
	        return this._incFile(() => this.stat(callback));
	      }

	      // Once we have figured out what the filename is, set it
	      // and return the size.
	      this.filename = target;
	      callback(null, stat.size);
	    });
	  }

	  /**
	   * Closes the stream associated with this instance.
	   * @param {function} cb - TODO: add param description.
	   * @returns {undefined}
	   */
	  close(cb) {
	    if (!this._stream) {
	      return;
	    }

	    this._stream.end(() => {
	      if (cb) {
	        cb(); // eslint-disable-line callback-return
	      }
	      this.emit('flush');
	      this.emit('closed');
	    });
	  }

	  /**
	   * TODO: add method description.
	   * @param {number} size - TODO: add param description.
	   * @returns {undefined}
	   */
	  _needsNewFile(size) {
	    size = size || this._size;
	    return this.maxsize && size >= this.maxsize;
	  }

	  /**
	   * TODO: add method description.
	   * @param {Error} err - TODO: add param description.
	   * @returns {undefined}
	   */
	  _onError(err) {
	    this.emit('error', err);
	  }

	  /**
	   * TODO: add method description.
	   * @param {Stream} stream - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   */
	  _setupStream(stream) {
	    stream.on('error', this._onError);

	    return stream;
	  }

	  /**
	   * TODO: add method description.
	   * @param {Stream} stream - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   */
	  _cleanupStream(stream) {
	    stream.removeListener('error', this._onError);
	    stream.destroy();
	    return stream;
	  }

	  /**
	   * TODO: add method description.
	   */
	  _rotateFile() {
	    this._incFile(() => this.open());
	  }

	  /**
	   * Unpipe from the stream that has been marked as full and end it so it
	   * flushes to disk.
	   *
	   * @param {function} callback - Callback for when the current file has closed.
	   * @private
	   */
	  _endStream(callback = () => { }) {
	    if (this._dest) {
	      this._stream.unpipe(this._dest);
	      this._dest.end(() => {
	        this._cleanupStream(this._dest);
	        callback();
	      });
	    } else {
	      callback(); // eslint-disable-line callback-return
	    }
	  }

	  /**
	   * Returns the WritableStream for the active file on this instance. If we
	   * should gzip the file then a zlib stream is returned.
	   *
	   * @param {ReadableStream} source –PassThrough to pipe to the file when open.
	   * @returns {WritableStream} Stream that writes to disk for the active file.
	   */
	  _createStream(source) {
	    const fullpath = path.join(this.dirname, this.filename);

	    debug('create stream start', fullpath, this.options);
	    const dest = fs.createWriteStream(fullpath, this.options)
	      // TODO: What should we do with errors here?
	      .on('error', err => debug(err))
	      .on('close', () => debug('close', dest.path, dest.bytesWritten))
	      .on('open', () => {
	        debug('file open ok', fullpath);
	        this.emit('open', fullpath);
	        source.pipe(dest);

	        // If rotation occured during the open operation then we immediately
	        // start writing to a new PassThrough, begin opening the next file
	        // and cleanup the previous source and dest once the source has drained.
	        if (this.rotatedWhileOpening) {
	          this._stream = new PassThrough();
	          this._stream.setMaxListeners(30);
	          this._rotateFile();
	          this.rotatedWhileOpening = false;
	          this._cleanupStream(dest);
	          source.end();
	        }
	      });

	    debug('create stream ok', fullpath);
	    return dest;
	  }

	  /**
	   * TODO: add method description.
	   * @param {function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  _incFile(callback) {
	    debug('_incFile', this.filename);
	    const ext = path.extname(this._basename);
	    const basename = path.basename(this._basename, ext);
	    const tasks = [];

	    if (this.zippedArchive) {
	      tasks.push(
	        function (cb) {
	          const num = this._created > 0 && !this.tailable ? this._created : '';
	          this._compressFile(
	            path.join(this.dirname, `${basename}${num}${ext}`),
	            path.join(this.dirname, `${basename}${num}${ext}.gz`),
	            cb
	          );
	        }.bind(this)
	      );
	    }

	    tasks.push(
	      function (cb) {
	        if (!this.tailable) {
	          this._created += 1;
	          this._checkMaxFilesIncrementing(ext, basename, cb);
	        } else {
	          this._checkMaxFilesTailable(ext, basename, cb);
	        }
	      }.bind(this)
	    );

	    asyncSeries(tasks, callback);
	  }

	  /**
	   * Gets the next filename to use for this instance in the case that log
	   * filesizes are being capped.
	   * @returns {string} - TODO: add return description.
	   * @private
	   */
	  _getFile() {
	    const ext = path.extname(this._basename);
	    const basename = path.basename(this._basename, ext);
	    const isRotation = this.rotationFormat
	      ? this.rotationFormat()
	      : this._created;

	    // Caveat emptor (indexzero): rotationFormat() was broken by design When
	    // combined with max files because the set of files to unlink is never
	    // stored.
	    return !this.tailable && this._created
	      ? `${basename}${isRotation}${ext}`
	      : `${basename}${ext}`;
	  }

	  /**
	   * Increment the number of files created or checked by this instance.
	   * @param {mixed} ext - TODO: add param description.
	   * @param {mixed} basename - TODO: add param description.
	   * @param {mixed} callback - TODO: add param description.
	   * @returns {undefined}
	   * @private
	   */
	  _checkMaxFilesIncrementing(ext, basename, callback) {
	    // Check for maxFiles option and delete file.
	    if (!this.maxFiles || this._created < this.maxFiles) {
	      return setImmediate(callback);
	    }

	    const oldest = this._created - this.maxFiles;
	    const isOldest = oldest !== 0 ? oldest : '';
	    const isZipped = this.zippedArchive ? '.gz' : '';
	    const filePath = `${basename}${isOldest}${ext}${isZipped}`;
	    const target = path.join(this.dirname, filePath);

	    fs.unlink(target, callback);
	  }

	  /**
	   * Roll files forward based on integer, up to maxFiles. e.g. if base if
	   * file.log and it becomes oversized, roll to file1.log, and allow file.log
	   * to be re-used. If file is oversized again, roll file1.log to file2.log,
	   * roll file.log to file1.log, and so on.
	   * @param {mixed} ext - TODO: add param description.
	   * @param {mixed} basename - TODO: add param description.
	   * @param {mixed} callback - TODO: add param description.
	   * @returns {undefined}
	   * @private
	   */
	  _checkMaxFilesTailable(ext, basename, callback) {
	    const tasks = [];
	    if (!this.maxFiles) {
	      return;
	    }

	    // const isZipped = this.zippedArchive ? '.gz' : '';
	    const isZipped = this.zippedArchive ? '.gz' : '';
	    for (let x = this.maxFiles - 1; x > 1; x--) {
	      tasks.push(function (i, cb) {
	        let fileName = `${basename}${(i - 1)}${ext}${isZipped}`;
	        const tmppath = path.join(this.dirname, fileName);

	        fs.exists(tmppath, exists => {
	          if (!exists) {
	            return cb(null);
	          }

	          fileName = `${basename}${i}${ext}${isZipped}`;
	          fs.rename(tmppath, path.join(this.dirname, fileName), cb);
	        });
	      }.bind(this, x));
	    }

	    asyncSeries(tasks, () => {
	      fs.rename(
	        path.join(this.dirname, `${basename}${ext}${isZipped}`),
	        path.join(this.dirname, `${basename}1${ext}${isZipped}`),
	        callback
	      );
	    });
	  }

	  /**
	   * Compresses src to dest with gzip and unlinks src
	   * @param {string} src - path to source file.
	   * @param {string} dest - path to zipped destination file.
	   * @param {Function} callback - callback called after file has been compressed.
	   * @returns {undefined}
	   * @private
	   */
	  _compressFile(src, dest, callback) {
	    fs.access(src, fs.F_OK, (err) => {
	      if (err) {
	        return callback();
	      }
	      var gzip = zlib.createGzip();
	      var inp = fs.createReadStream(src);
	      var out = fs.createWriteStream(dest);
	      out.on('finish', () => {
	        fs.unlink(src, callback);
	      });
	      inp.pipe(gzip).pipe(out);
	    });
	  }

	  _createLogDirIfNotExist(dirPath) {
	    /* eslint-disable no-sync */
	    if (!fs.existsSync(dirPath)) {
	      fs.mkdirSync(dirPath, { recursive: true });
	    }
	    /* eslint-enable no-sync */
	  }
	};
	return file;
}

/**
 * http.js: Transport for outputting to a json-rpcserver.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var http_1;
var hasRequiredHttp;

function requireHttp () {
	if (hasRequiredHttp) return http_1;
	hasRequiredHttp = 1;

	const http = require$$0$7;
	const https = require$$1$2;
	const { Stream } = requireReadable();
	const TransportStream = requireWinstonTransport();
	const { configure } = requireSafeStableStringify();

	/**
	 * Transport for outputting to a json-rpc server.
	 * @type {Stream}
	 * @extends {TransportStream}
	 */
	http_1 = class Http extends TransportStream {
	  /**
	   * Constructor function for the Http transport object responsible for
	   * persisting log messages and metadata to a terminal or TTY.
	   * @param {!Object} [options={}] - Options for this instance.
	   */
	  // eslint-disable-next-line max-statements
	  constructor(options = {}) {
	    super(options);

	    this.options = options;
	    this.name = options.name || 'http';
	    this.ssl = !!options.ssl;
	    this.host = options.host || 'localhost';
	    this.port = options.port;
	    this.auth = options.auth;
	    this.path = options.path || '';
	    this.maximumDepth = options.maximumDepth;
	    this.agent = options.agent;
	    this.headers = options.headers || {};
	    this.headers['content-type'] = 'application/json';
	    this.batch = options.batch || false;
	    this.batchInterval = options.batchInterval || 5000;
	    this.batchCount = options.batchCount || 10;
	    this.batchOptions = [];
	    this.batchTimeoutID = -1;
	    this.batchCallback = {};

	    if (!this.port) {
	      this.port = this.ssl ? 443 : 80;
	    }
	  }

	  /**
	   * Core logging method exposed to Winston.
	   * @param {Object} info - TODO: add param description.
	   * @param {function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  log(info, callback) {
	    this._request(info, null, null, (err, res) => {
	      if (res && res.statusCode !== 200) {
	        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
	      }

	      if (err) {
	        this.emit('warn', err);
	      } else {
	        this.emit('logged', info);
	      }
	    });

	    // Remark: (jcrugzz) Fire and forget here so requests dont cause buffering
	    // and block more requests from happening?
	    if (callback) {
	      setImmediate(callback);
	    }
	  }

	  /**
	   * Query the transport. Options object is optional.
	   * @param {Object} options -  Loggly-like query options for this instance.
	   * @param {function} callback - Continuation to respond to when complete.
	   * @returns {undefined}
	   */
	  query(options, callback) {
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    options = {
	      method: 'query',
	      params: this.normalizeQuery(options)
	    };

	    const auth = options.params.auth || null;
	    delete options.params.auth;

	    const path = options.params.path || null;
	    delete options.params.path;

	    this._request(options, auth, path, (err, res, body) => {
	      if (res && res.statusCode !== 200) {
	        err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
	      }

	      if (err) {
	        return callback(err);
	      }

	      if (typeof body === 'string') {
	        try {
	          body = JSON.parse(body);
	        } catch (e) {
	          return callback(e);
	        }
	      }

	      callback(null, body);
	    });
	  }

	  /**
	   * Returns a log stream for this transport. Options object is optional.
	   * @param {Object} options - Stream options for this instance.
	   * @returns {Stream} - TODO: add return description
	   */
	  stream(options = {}) {
	    const stream = new Stream();
	    options = {
	      method: 'stream',
	      params: options
	    };

	    const path = options.params.path || null;
	    delete options.params.path;

	    const auth = options.params.auth || null;
	    delete options.params.auth;

	    let buff = '';
	    const req = this._request(options, auth, path);

	    stream.destroy = () => req.destroy();
	    req.on('data', data => {
	      data = (buff + data).split(/\n+/);
	      const l = data.length - 1;

	      let i = 0;
	      for (; i < l; i++) {
	        try {
	          stream.emit('log', JSON.parse(data[i]));
	        } catch (e) {
	          stream.emit('error', e);
	        }
	      }

	      buff = data[l];
	    });
	    req.on('error', err => stream.emit('error', err));

	    return stream;
	  }

	  /**
	   * Make a request to a winstond server or any http server which can
	   * handle json-rpc.
	   * @param {function} options - Options to sent the request.
	   * @param {Object?} auth - authentication options
	   * @param {string} path - request path
	   * @param {function} callback - Continuation to respond to when complete.
	   */
	  _request(options, auth, path, callback) {
	    options = options || {};

	    auth = auth || this.auth;
	    path = path || this.path || '';

	    if (this.batch) {
	      this._doBatch(options, callback, auth, path);
	    } else {
	      this._doRequest(options, callback, auth, path);
	    }
	  }

	  /**
	   * Send or memorize the options according to batch configuration
	   * @param {function} options - Options to sent the request.
	   * @param {function} callback - Continuation to respond to when complete.
	   * @param {Object?} auth - authentication options
	   * @param {string} path - request path
	   */
	  _doBatch(options, callback, auth, path) {
	    this.batchOptions.push(options);
	    if (this.batchOptions.length === 1) {
	      // First message stored, it's time to start the timeout!
	      const me = this;
	      this.batchCallback = callback;
	      this.batchTimeoutID = setTimeout(function () {
	        // timeout is reached, send all messages to endpoint
	        me.batchTimeoutID = -1;
	        me._doBatchRequest(me.batchCallback, auth, path);
	      }, this.batchInterval);
	    }
	    if (this.batchOptions.length === this.batchCount) {
	      // max batch count is reached, send all messages to endpoint
	      this._doBatchRequest(this.batchCallback, auth, path);
	    }
	  }

	  /**
	   * Initiate a request with the memorized batch options, stop the batch timeout
	   * @param {function} callback - Continuation to respond to when complete.
	   * @param {Object?} auth - authentication options
	   * @param {string} path - request path
	   */
	  _doBatchRequest(callback, auth, path) {
	    if (this.batchTimeoutID > 0) {
	      clearTimeout(this.batchTimeoutID);
	      this.batchTimeoutID = -1;
	    }
	    const batchOptionsCopy = this.batchOptions.slice();
	    this.batchOptions = [];
	    this._doRequest(batchOptionsCopy, callback, auth, path);
	  }

	  /**
	   * Make a request to a winstond server or any http server which can
	   * handle json-rpc.
	   * @param {function} options - Options to sent the request.
	   * @param {function} callback - Continuation to respond to when complete.
	   * @param {Object?} auth - authentication options
	   * @param {string} path - request path
	   */
	  _doRequest(options, callback, auth, path) {
	    // Prepare options for outgoing HTTP request
	    const headers = Object.assign({}, this.headers);
	    if (auth && auth.bearer) {
	      headers.Authorization = `Bearer ${auth.bearer}`;
	    }
	    const req = (this.ssl ? https : http).request({
	      ...this.options,
	      method: 'POST',
	      host: this.host,
	      port: this.port,
	      path: `/${path.replace(/^\//, '')}`,
	      headers: headers,
	      auth: (auth && auth.username && auth.password) ? (`${auth.username}:${auth.password}`) : '',
	      agent: this.agent
	    });

	    req.on('error', callback);
	    req.on('response', res => (
	      res.on('end', () => callback(null, res)).resume()
	    ));
	    const jsonStringify = configure({
	      ...(this.maximumDepth && { maximumDepth: this.maximumDepth })
	    });
	    req.end(Buffer.from(jsonStringify(options, this.options.replacer), 'utf8'));
	  }
	};
	return http_1;
}

var isStream_1;
var hasRequiredIsStream;

function requireIsStream () {
	if (hasRequiredIsStream) return isStream_1;
	hasRequiredIsStream = 1;

	const isStream = stream =>
		stream !== null &&
		typeof stream === 'object' &&
		typeof stream.pipe === 'function';

	isStream.writable = stream =>
		isStream(stream) &&
		stream.writable !== false &&
		typeof stream._write === 'function' &&
		typeof stream._writableState === 'object';

	isStream.readable = stream =>
		isStream(stream) &&
		stream.readable !== false &&
		typeof stream._read === 'function' &&
		typeof stream._readableState === 'object';

	isStream.duplex = stream =>
		isStream.writable(stream) &&
		isStream.readable(stream);

	isStream.transform = stream =>
		isStream.duplex(stream) &&
		typeof stream._transform === 'function';

	isStream_1 = isStream;
	return isStream_1;
}

/**
 * stream.js: Transport for outputting to any arbitrary stream.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var stream;
var hasRequiredStream;

function requireStream () {
	if (hasRequiredStream) return stream;
	hasRequiredStream = 1;

	const isStream = requireIsStream();
	const { MESSAGE } = requireTripleBeam();
	const os = require$$0$2;
	const TransportStream = requireWinstonTransport();

	/**
	 * Transport for outputting to any arbitrary stream.
	 * @type {Stream}
	 * @extends {TransportStream}
	 */
	stream = class Stream extends TransportStream {
	  /**
	   * Constructor function for the Console transport object responsible for
	   * persisting log messages and metadata to a terminal or TTY.
	   * @param {!Object} [options={}] - Options for this instance.
	   */
	  constructor(options = {}) {
	    super(options);

	    if (!options.stream || !isStream(options.stream)) {
	      throw new Error('options.stream is required.');
	    }

	    // We need to listen for drain events when write() returns false. This can
	    // make node mad at times.
	    this._stream = options.stream;
	    this._stream.setMaxListeners(Infinity);
	    this.isObjectMode = options.stream._writableState.objectMode;
	    this.eol = (typeof options.eol === 'string') ? options.eol : os.EOL;
	  }

	  /**
	   * Core logging method exposed to Winston.
	   * @param {Object} info - TODO: add param description.
	   * @param {Function} callback - TODO: add param description.
	   * @returns {undefined}
	   */
	  log(info, callback) {
	    setImmediate(() => this.emit('logged', info));
	    if (this.isObjectMode) {
	      this._stream.write(info);
	      if (callback) {
	        callback(); // eslint-disable-line callback-return
	      }
	      return;
	    }

	    this._stream.write(`${info[MESSAGE]}${this.eol}`);
	    if (callback) {
	      callback(); // eslint-disable-line callback-return
	    }
	    return;
	  }
	};
	return stream;
}

/**
 * transports.js: Set of all transports Winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredTransports;

function requireTransports () {
	if (hasRequiredTransports) return transports;
	hasRequiredTransports = 1;
	(function (exports) {

		/**
		 * TODO: add property description.
		 * @type {Console}
		 */
		Object.defineProperty(exports, 'Console', {
		  configurable: true,
		  enumerable: true,
		  get() {
		    return requireConsole$1();
		  }
		});

		/**
		 * TODO: add property description.
		 * @type {File}
		 */
		Object.defineProperty(exports, 'File', {
		  configurable: true,
		  enumerable: true,
		  get() {
		    return requireFile();
		  }
		});

		/**
		 * TODO: add property description.
		 * @type {Http}
		 */
		Object.defineProperty(exports, 'Http', {
		  configurable: true,
		  enumerable: true,
		  get() {
		    return requireHttp();
		  }
		});

		/**
		 * TODO: add property description.
		 * @type {Stream}
		 */
		Object.defineProperty(exports, 'Stream', {
		  configurable: true,
		  enumerable: true,
		  get() {
		    return requireStream();
		  }
		}); 
	} (transports));
	return transports;
}

var config = {};

/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredConfig;

function requireConfig () {
	if (hasRequiredConfig) return config;
	hasRequiredConfig = 1;

	const logform = requireLogform();
	const { configs } = requireTripleBeam();

	/**
	 * Export config set for the CLI.
	 * @type {Object}
	 */
	config.cli = logform.levels(configs.cli);

	/**
	 * Export config set for npm.
	 * @type {Object}
	 */
	config.npm = logform.levels(configs.npm);

	/**
	 * Export config set for the syslog.
	 * @type {Object}
	 */
	config.syslog = logform.levels(configs.syslog);

	/**
	 * Hoist addColors from logform where it was refactored into in winston@3.
	 * @type {Object}
	 */
	config.addColors = logform.levels;
	return config;
}

var forEach = {exports: {}};

var eachOf = {exports: {}};

var hasRequiredEachOf;

function requireEachOf () {
	if (hasRequiredEachOf) return eachOf.exports;
	hasRequiredEachOf = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _isArrayLike = requireIsArrayLike();

		var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

		var _breakLoop = requireBreakLoop();

		var _breakLoop2 = _interopRequireDefault(_breakLoop);

		var _eachOfLimit = requireEachOfLimit();

		var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

		var _once = requireOnce();

		var _once2 = _interopRequireDefault(_once);

		var _onlyOnce = requireOnlyOnce();

		var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

		var _wrapAsync = requireWrapAsync();

		var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

		var _awaitify = requireAwaitify();

		var _awaitify2 = _interopRequireDefault(_awaitify);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// eachOf implementation optimized for array-likes
		function eachOfArrayLike(coll, iteratee, callback) {
		    callback = (0, _once2.default)(callback);
		    var index = 0,
		        completed = 0,
		        { length } = coll,
		        canceled = false;
		    if (length === 0) {
		        callback(null);
		    }

		    function iteratorCallback(err, value) {
		        if (err === false) {
		            canceled = true;
		        }
		        if (canceled === true) return;
		        if (err) {
		            callback(err);
		        } else if (++completed === length || value === _breakLoop2.default) {
		            callback(null);
		        }
		    }

		    for (; index < length; index++) {
		        iteratee(coll[index], index, (0, _onlyOnce2.default)(iteratorCallback));
		    }
		}

		// a generic version of eachOf which can handle array, object, and iterator cases.
		function eachOfGeneric(coll, iteratee, callback) {
		    return (0, _eachOfLimit2.default)(coll, Infinity, iteratee, callback);
		}

		/**
		 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
		 * to the iteratee.
		 *
		 * @name eachOf
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias forEachOf
		 * @category Collection
		 * @see [async.each]{@link module:Collections.each}
		 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - A function to apply to each
		 * item in `coll`.
		 * The `key` is the item's key, or index in the case of an array.
		 * Invoked with (item, key, callback).
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 * @returns {Promise} a promise, if a callback is omitted
		 * @example
		 *
		 * // dev.json is a file containing a valid json object config for dev environment
		 * // dev.json is a file containing a valid json object config for test environment
		 * // prod.json is a file containing a valid json object config for prod environment
		 * // invalid.json is a file with a malformed json object
		 *
		 * let configs = {}; //global variable
		 * let validConfigFileMap = {dev: 'dev.json', test: 'test.json', prod: 'prod.json'};
		 * let invalidConfigFileMap = {dev: 'dev.json', test: 'test.json', invalid: 'invalid.json'};
		 *
		 * // asynchronous function that reads a json file and parses the contents as json object
		 * function parseFile(file, key, callback) {
		 *     fs.readFile(file, "utf8", function(err, data) {
		 *         if (err) return calback(err);
		 *         try {
		 *             configs[key] = JSON.parse(data);
		 *         } catch (e) {
		 *             return callback(e);
		 *         }
		 *         callback();
		 *     });
		 * }
		 *
		 * // Using callbacks
		 * async.forEachOf(validConfigFileMap, parseFile, function (err) {
		 *     if (err) {
		 *         console.error(err);
		 *     } else {
		 *         console.log(configs);
		 *         // configs is now a map of JSON data, e.g.
		 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
		 *     }
		 * });
		 *
		 * //Error handing
		 * async.forEachOf(invalidConfigFileMap, parseFile, function (err) {
		 *     if (err) {
		 *         console.error(err);
		 *         // JSON parse error exception
		 *     } else {
		 *         console.log(configs);
		 *     }
		 * });
		 *
		 * // Using Promises
		 * async.forEachOf(validConfigFileMap, parseFile)
		 * .then( () => {
		 *     console.log(configs);
		 *     // configs is now a map of JSON data, e.g.
		 *     // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
		 * }).catch( err => {
		 *     console.error(err);
		 * });
		 *
		 * //Error handing
		 * async.forEachOf(invalidConfigFileMap, parseFile)
		 * .then( () => {
		 *     console.log(configs);
		 * }).catch( err => {
		 *     console.error(err);
		 *     // JSON parse error exception
		 * });
		 *
		 * // Using async/await
		 * async () => {
		 *     try {
		 *         let result = await async.forEachOf(validConfigFileMap, parseFile);
		 *         console.log(configs);
		 *         // configs is now a map of JSON data, e.g.
		 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *     }
		 * }
		 *
		 * //Error handing
		 * async () => {
		 *     try {
		 *         let result = await async.forEachOf(invalidConfigFileMap, parseFile);
		 *         console.log(configs);
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *         // JSON parse error exception
		 *     }
		 * }
		 *
		 */
		function eachOf(coll, iteratee, callback) {
		    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
		    return eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
		}

		exports.default = (0, _awaitify2.default)(eachOf, 3);
		module.exports = exports.default; 
	} (eachOf, eachOf.exports));
	return eachOf.exports;
}

var withoutIndex = {exports: {}};

var hasRequiredWithoutIndex;

function requireWithoutIndex () {
	if (hasRequiredWithoutIndex) return withoutIndex.exports;
	hasRequiredWithoutIndex = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = _withoutIndex;
		function _withoutIndex(iteratee) {
		    return (value, index, callback) => iteratee(value, callback);
		}
		module.exports = exports.default; 
	} (withoutIndex, withoutIndex.exports));
	return withoutIndex.exports;
}

var hasRequiredForEach;

function requireForEach () {
	if (hasRequiredForEach) return forEach.exports;
	hasRequiredForEach = 1;
	(function (module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});

		var _eachOf = requireEachOf();

		var _eachOf2 = _interopRequireDefault(_eachOf);

		var _withoutIndex = requireWithoutIndex();

		var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

		var _wrapAsync = requireWrapAsync();

		var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

		var _awaitify = requireAwaitify();

		var _awaitify2 = _interopRequireDefault(_awaitify);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/**
		 * Applies the function `iteratee` to each item in `coll`, in parallel.
		 * The `iteratee` is called with an item from the list, and a callback for when
		 * it has finished. If the `iteratee` passes an error to its `callback`, the
		 * main `callback` (for the `each` function) is immediately called with the
		 * error.
		 *
		 * Note, that since this function applies `iteratee` to each item in parallel,
		 * there is no guarantee that the iteratee functions will complete in order.
		 *
		 * @name each
		 * @static
		 * @memberOf module:Collections
		 * @method
		 * @alias forEach
		 * @category Collection
		 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
		 * @param {AsyncFunction} iteratee - An async function to apply to
		 * each item in `coll`. Invoked with (item, callback).
		 * The array index is not passed to the iteratee.
		 * If you need the index, use `eachOf`.
		 * @param {Function} [callback] - A callback which is called when all
		 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
		 * @returns {Promise} a promise, if a callback is omitted
		 * @example
		 *
		 * // dir1 is a directory that contains file1.txt, file2.txt
		 * // dir2 is a directory that contains file3.txt, file4.txt
		 * // dir3 is a directory that contains file5.txt
		 * // dir4 does not exist
		 *
		 * const fileList = [ 'dir1/file2.txt', 'dir2/file3.txt', 'dir/file5.txt'];
		 * const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];
		 *
		 * // asynchronous function that deletes a file
		 * const deleteFile = function(file, callback) {
		 *     fs.unlink(file, callback);
		 * };
		 *
		 * // Using callbacks
		 * async.each(fileList, deleteFile, function(err) {
		 *     if( err ) {
		 *         console.log(err);
		 *     } else {
		 *         console.log('All files have been deleted successfully');
		 *     }
		 * });
		 *
		 * // Error Handling
		 * async.each(withMissingFileList, deleteFile, function(err){
		 *     console.log(err);
		 *     // [ Error: ENOENT: no such file or directory ]
		 *     // since dir4/file2.txt does not exist
		 *     // dir1/file1.txt could have been deleted
		 * });
		 *
		 * // Using Promises
		 * async.each(fileList, deleteFile)
		 * .then( () => {
		 *     console.log('All files have been deleted successfully');
		 * }).catch( err => {
		 *     console.log(err);
		 * });
		 *
		 * // Error Handling
		 * async.each(fileList, deleteFile)
		 * .then( () => {
		 *     console.log('All files have been deleted successfully');
		 * }).catch( err => {
		 *     console.log(err);
		 *     // [ Error: ENOENT: no such file or directory ]
		 *     // since dir4/file2.txt does not exist
		 *     // dir1/file1.txt could have been deleted
		 * });
		 *
		 * // Using async/await
		 * async () => {
		 *     try {
		 *         await async.each(files, deleteFile);
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *     }
		 * }
		 *
		 * // Error Handling
		 * async () => {
		 *     try {
		 *         await async.each(withMissingFileList, deleteFile);
		 *     }
		 *     catch (err) {
		 *         console.log(err);
		 *         // [ Error: ENOENT: no such file or directory ]
		 *         // since dir4/file2.txt does not exist
		 *         // dir1/file1.txt could have been deleted
		 *     }
		 * }
		 *
		 */
		function eachLimit(coll, iteratee, callback) {
		    return (0, _eachOf2.default)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
		}

		exports.default = (0, _awaitify2.default)(eachLimit, 3);
		module.exports = exports.default; 
	} (forEach, forEach.exports));
	return forEach.exports;
}

var fn_name;
var hasRequiredFn_name;

function requireFn_name () {
	if (hasRequiredFn_name) return fn_name;
	hasRequiredFn_name = 1;

	var toString = Object.prototype.toString;

	/**
	 * Extract names from functions.
	 *
	 * @param {Function} fn The function who's name we need to extract.
	 * @returns {String} The name of the function.
	 * @public
	 */
	fn_name = function name(fn) {
	  if ('string' === typeof fn.displayName && fn.constructor.name) {
	    return fn.displayName;
	  } else if ('string' === typeof fn.name && fn.name) {
	    return fn.name;
	  }

	  //
	  // Check to see if the constructor has a name.
	  //
	  if (
	       'object' === typeof fn
	    && fn.constructor
	    && 'string' === typeof fn.constructor.name
	  ) return fn.constructor.name;

	  //
	  // toString the given function and attempt to parse it out of it, or determine
	  // the class.
	  //
	  var named = fn.toString()
	    , type = toString.call(fn).slice(8, -1);

	  if ('Function' === type) {
	    named = named.substring(named.indexOf('(') + 1, named.indexOf(')'));
	  } else {
	    named = type;
	  }

	  return named || 'anonymous';
	};
	return fn_name;
}

var oneTime;
var hasRequiredOneTime;

function requireOneTime () {
	if (hasRequiredOneTime) return oneTime;
	hasRequiredOneTime = 1;

	var name = requireFn_name();

	/**
	 * Wrap callbacks to prevent double execution.
	 *
	 * @param {Function} fn Function that should only be called once.
	 * @returns {Function} A wrapped callback which prevents multiple executions.
	 * @public
	 */
	oneTime = function one(fn) {
	  var called = 0
	    , value;

	  /**
	   * The function that prevents double execution.
	   *
	   * @private
	   */
	  function onetime() {
	    if (called) return value;

	    called = 1;
	    value = fn.apply(this, arguments);
	    fn = null;

	    return value;
	  }

	  //
	  // To make debugging more easy we want to use the name of the supplied
	  // function. So when you look at the functions that are assigned to event
	  // listeners you don't see a load of `onetime` functions but actually the
	  // names of the functions that this module will call.
	  //
	  // NOTE: We cannot override the `name` property, as that is `readOnly`
	  // property, so displayName will have to do.
	  //
	  onetime.displayName = name(fn);
	  return onetime;
	};
	return oneTime;
}

var stackTrace = {};

var hasRequiredStackTrace;

function requireStackTrace () {
	if (hasRequiredStackTrace) return stackTrace;
	hasRequiredStackTrace = 1;
	(function (exports) {
		exports.get = function(belowFn) {
		  var oldLimit = Error.stackTraceLimit;
		  Error.stackTraceLimit = Infinity;

		  var dummyObject = {};

		  var v8Handler = Error.prepareStackTrace;
		  Error.prepareStackTrace = function(dummyObject, v8StackTrace) {
		    return v8StackTrace;
		  };
		  Error.captureStackTrace(dummyObject, belowFn || exports.get);

		  var v8StackTrace = dummyObject.stack;
		  Error.prepareStackTrace = v8Handler;
		  Error.stackTraceLimit = oldLimit;

		  return v8StackTrace;
		};

		exports.parse = function(err) {
		  if (!err.stack) {
		    return [];
		  }

		  var self = this;
		  var lines = err.stack.split('\n').slice(1);

		  return lines
		    .map(function(line) {
		      if (line.match(/^\s*[-]{4,}$/)) {
		        return self._createParsedCallSite({
		          fileName: line,
		          lineNumber: null,
		          functionName: null,
		          typeName: null,
		          methodName: null,
		          columnNumber: null,
		          'native': null,
		        });
		      }

		      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
		      if (!lineMatch) {
		        return;
		      }

		      var object = null;
		      var method = null;
		      var functionName = null;
		      var typeName = null;
		      var methodName = null;
		      var isNative = (lineMatch[5] === 'native');

		      if (lineMatch[1]) {
		        functionName = lineMatch[1];
		        var methodStart = functionName.lastIndexOf('.');
		        if (functionName[methodStart-1] == '.')
		          methodStart--;
		        if (methodStart > 0) {
		          object = functionName.substr(0, methodStart);
		          method = functionName.substr(methodStart + 1);
		          var objectEnd = object.indexOf('.Module');
		          if (objectEnd > 0) {
		            functionName = functionName.substr(objectEnd + 1);
		            object = object.substr(0, objectEnd);
		          }
		        }
		        typeName = null;
		      }

		      if (method) {
		        typeName = object;
		        methodName = method;
		      }

		      if (method === '<anonymous>') {
		        methodName = null;
		        functionName = null;
		      }

		      var properties = {
		        fileName: lineMatch[2] || null,
		        lineNumber: parseInt(lineMatch[3], 10) || null,
		        functionName: functionName,
		        typeName: typeName,
		        methodName: methodName,
		        columnNumber: parseInt(lineMatch[4], 10) || null,
		        'native': isNative,
		      };

		      return self._createParsedCallSite(properties);
		    })
		    .filter(function(callSite) {
		      return !!callSite;
		    });
		};

		function CallSite(properties) {
		  for (var property in properties) {
		    this[property] = properties[property];
		  }
		}

		var strProperties = [
		  'this',
		  'typeName',
		  'functionName',
		  'methodName',
		  'fileName',
		  'lineNumber',
		  'columnNumber',
		  'function',
		  'evalOrigin'
		];
		var boolProperties = [
		  'topLevel',
		  'eval',
		  'native',
		  'constructor'
		];
		strProperties.forEach(function (property) {
		  CallSite.prototype[property] = null;
		  CallSite.prototype['get' + property[0].toUpperCase() + property.substr(1)] = function () {
		    return this[property];
		  };
		});
		boolProperties.forEach(function (property) {
		  CallSite.prototype[property] = false;
		  CallSite.prototype['is' + property[0].toUpperCase() + property.substr(1)] = function () {
		    return this[property];
		  };
		});

		exports._createParsedCallSite = function(properties) {
		  return new CallSite(properties);
		}; 
	} (stackTrace));
	return stackTrace;
}

/**
 * exception-stream.js: TODO: add file header handler.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var exceptionStream;
var hasRequiredExceptionStream;

function requireExceptionStream () {
	if (hasRequiredExceptionStream) return exceptionStream;
	hasRequiredExceptionStream = 1;

	const { Writable } = requireReadable();

	/**
	 * TODO: add class description.
	 * @type {ExceptionStream}
	 * @extends {Writable}
	 */
	exceptionStream = class ExceptionStream extends Writable {
	  /**
	   * Constructor function for the ExceptionStream responsible for wrapping a
	   * TransportStream; only allowing writes of `info` objects with
	   * `info.exception` set to true.
	   * @param {!TransportStream} transport - Stream to filter to exceptions
	   */
	  constructor(transport) {
	    super({ objectMode: true });

	    if (!transport) {
	      throw new Error('ExceptionStream requires a TransportStream instance.');
	    }

	    // Remark (indexzero): we set `handleExceptions` here because it's the
	    // predicate checked in ExceptionHandler.prototype.__getExceptionHandlers
	    this.handleExceptions = true;
	    this.transport = transport;
	  }

	  /**
	   * Writes the info object to our transport instance if (and only if) the
	   * `exception` property is set on the info.
	   * @param {mixed} info - TODO: add param description.
	   * @param {mixed} enc - TODO: add param description.
	   * @param {mixed} callback - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   * @private
	   */
	  _write(info, enc, callback) {
	    if (info.exception) {
	      return this.transport.log(info, callback);
	    }

	    callback();
	    return true;
	  }
	};
	return exceptionStream;
}

/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var exceptionHandler;
var hasRequiredExceptionHandler;

function requireExceptionHandler () {
	if (hasRequiredExceptionHandler) return exceptionHandler;
	hasRequiredExceptionHandler = 1;

	const os = require$$0$2;
	const asyncForEach = requireForEach();
	const debug = requireNode()('winston:exception');
	const once = requireOneTime();
	const stackTrace = requireStackTrace();
	const ExceptionStream = requireExceptionStream();

	/**
	 * Object for handling uncaughtException events.
	 * @type {ExceptionHandler}
	 */
	exceptionHandler = class ExceptionHandler {
	  /**
	   * TODO: add contructor description
	   * @param {!Logger} logger - TODO: add param description
	   */
	  constructor(logger) {
	    if (!logger) {
	      throw new Error('Logger is required to handle exceptions');
	    }

	    this.logger = logger;
	    this.handlers = new Map();
	  }

	  /**
	   * Handles `uncaughtException` events for the current process by adding any
	   * handlers passed in.
	   * @returns {undefined}
	   */
	  handle(...args) {
	    args.forEach(arg => {
	      if (Array.isArray(arg)) {
	        return arg.forEach(handler => this._addHandler(handler));
	      }

	      this._addHandler(arg);
	    });

	    if (!this.catcher) {
	      this.catcher = this._uncaughtException.bind(this);
	      process.on('uncaughtException', this.catcher);
	    }
	  }

	  /**
	   * Removes any handlers to `uncaughtException` events for the current
	   * process. This does not modify the state of the `this.handlers` set.
	   * @returns {undefined}
	   */
	  unhandle() {
	    if (this.catcher) {
	      process.removeListener('uncaughtException', this.catcher);
	      this.catcher = false;

	      Array.from(this.handlers.values())
	        .forEach(wrapper => this.logger.unpipe(wrapper));
	    }
	  }

	  /**
	   * TODO: add method description
	   * @param {Error} err - Error to get information about.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getAllInfo(err) {
	    let message = null;
	    if (err) {
	      message = typeof err === 'string' ? err : err.message;
	    }

	    return {
	      error: err,
	      // TODO (indexzero): how do we configure this?
	      level: 'error',
	      message: [
	        `uncaughtException: ${(message || '(no error message)')}`,
	        err && err.stack || '  No stack trace'
	      ].join('\n'),
	      stack: err && err.stack,
	      exception: true,
	      date: new Date().toString(),
	      process: this.getProcessInfo(),
	      os: this.getOsInfo(),
	      trace: this.getTrace(err)
	    };
	  }

	  /**
	   * Gets all relevant process information for the currently running process.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getProcessInfo() {
	    return {
	      pid: process.pid,
	      uid: process.getuid ? process.getuid() : null,
	      gid: process.getgid ? process.getgid() : null,
	      cwd: process.cwd(),
	      execPath: process.execPath,
	      version: process.version,
	      argv: process.argv,
	      memoryUsage: process.memoryUsage()
	    };
	  }

	  /**
	   * Gets all relevant OS information for the currently running process.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getOsInfo() {
	    return {
	      loadavg: os.loadavg(),
	      uptime: os.uptime()
	    };
	  }

	  /**
	   * Gets a stack trace for the specified error.
	   * @param {mixed} err - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getTrace(err) {
	    const trace = err ? stackTrace.parse(err) : stackTrace.get();
	    return trace.map(site => {
	      return {
	        column: site.getColumnNumber(),
	        file: site.getFileName(),
	        function: site.getFunctionName(),
	        line: site.getLineNumber(),
	        method: site.getMethodName(),
	        native: site.isNative()
	      };
	    });
	  }

	  /**
	   * Helper method to add a transport as an exception handler.
	   * @param {Transport} handler - The transport to add as an exception handler.
	   * @returns {void}
	   */
	  _addHandler(handler) {
	    if (!this.handlers.has(handler)) {
	      handler.handleExceptions = true;
	      const wrapper = new ExceptionStream(handler);
	      this.handlers.set(handler, wrapper);
	      this.logger.pipe(wrapper);
	    }
	  }

	  /**
	   * Logs all relevant information around the `err` and exits the current
	   * process.
	   * @param {Error} err - Error to handle
	   * @returns {mixed} - TODO: add return description.
	   * @private
	   */
	  _uncaughtException(err) {
	    const info = this.getAllInfo(err);
	    const handlers = this._getExceptionHandlers();
	    // Calculate if we should exit on this error
	    let doExit = typeof this.logger.exitOnError === 'function'
	      ? this.logger.exitOnError(err)
	      : this.logger.exitOnError;
	    let timeout;

	    if (!handlers.length && doExit) {
	      // eslint-disable-next-line no-console
	      console.warn('winston: exitOnError cannot be true with no exception handlers.');
	      // eslint-disable-next-line no-console
	      console.warn('winston: not exiting process.');
	      doExit = false;
	    }

	    function gracefulExit() {
	      debug('doExit', doExit);
	      debug('process._exiting', process._exiting);

	      if (doExit && !process._exiting) {
	        // Remark: Currently ignoring any exceptions from transports when
	        // catching uncaught exceptions.
	        if (timeout) {
	          clearTimeout(timeout);
	        }
	        // eslint-disable-next-line no-process-exit
	        process.exit(1);
	      }
	    }

	    if (!handlers || handlers.length === 0) {
	      return process.nextTick(gracefulExit);
	    }

	    // Log to all transports attempting to listen for when they are completed.
	    asyncForEach(handlers, (handler, next) => {
	      const done = once(next);
	      const transport = handler.transport || handler;

	      // Debug wrapping so that we can inspect what's going on under the covers.
	      function onDone(event) {
	        return () => {
	          debug(event);
	          done();
	        };
	      }

	      transport._ending = true;
	      transport.once('finish', onDone('finished'));
	      transport.once('error', onDone('error'));
	    }, () => doExit && gracefulExit());

	    this.logger.log(info);

	    // If exitOnError is true, then only allow the logging of exceptions to
	    // take up to `3000ms`.
	    if (doExit) {
	      timeout = setTimeout(gracefulExit, 3000);
	    }
	  }

	  /**
	   * Returns the list of transports and exceptionHandlers for this instance.
	   * @returns {Array} - List of transports and exceptionHandlers for this
	   * instance.
	   * @private
	   */
	  _getExceptionHandlers() {
	    // Remark (indexzero): since `logger.transports` returns all of the pipes
	    // from the _readableState of the stream we actually get the join of the
	    // explicit handlers and the implicit transports with
	    // `handleExceptions: true`
	    return this.logger.transports.filter(wrap => {
	      const transport = wrap.transport || wrap;
	      return transport.handleExceptions;
	    });
	  }
	};
	return exceptionHandler;
}

/**
 * rejection-stream.js: TODO: add file header handler.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var rejectionStream;
var hasRequiredRejectionStream;

function requireRejectionStream () {
	if (hasRequiredRejectionStream) return rejectionStream;
	hasRequiredRejectionStream = 1;

	const { Writable } = requireReadable();

	/**
	 * TODO: add class description.
	 * @type {RejectionStream}
	 * @extends {Writable}
	 */
	rejectionStream = class RejectionStream extends Writable {
	  /**
	   * Constructor function for the RejectionStream responsible for wrapping a
	   * TransportStream; only allowing writes of `info` objects with
	   * `info.rejection` set to true.
	   * @param {!TransportStream} transport - Stream to filter to rejections
	   */
	  constructor(transport) {
	    super({ objectMode: true });

	    if (!transport) {
	      throw new Error('RejectionStream requires a TransportStream instance.');
	    }

	    this.handleRejections = true;
	    this.transport = transport;
	  }

	  /**
	   * Writes the info object to our transport instance if (and only if) the
	   * `rejection` property is set on the info.
	   * @param {mixed} info - TODO: add param description.
	   * @param {mixed} enc - TODO: add param description.
	   * @param {mixed} callback - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   * @private
	   */
	  _write(info, enc, callback) {
	    if (info.rejection) {
	      return this.transport.log(info, callback);
	    }

	    callback();
	    return true;
	  }
	};
	return rejectionStream;
}

/**
 * exception-handler.js: Object for handling uncaughtException events.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var rejectionHandler;
var hasRequiredRejectionHandler;

function requireRejectionHandler () {
	if (hasRequiredRejectionHandler) return rejectionHandler;
	hasRequiredRejectionHandler = 1;

	const os = require$$0$2;
	const asyncForEach = requireForEach();
	const debug = requireNode()('winston:rejection');
	const once = requireOneTime();
	const stackTrace = requireStackTrace();
	const RejectionStream = requireRejectionStream();

	/**
	 * Object for handling unhandledRejection events.
	 * @type {RejectionHandler}
	 */
	rejectionHandler = class RejectionHandler {
	  /**
	   * TODO: add contructor description
	   * @param {!Logger} logger - TODO: add param description
	   */
	  constructor(logger) {
	    if (!logger) {
	      throw new Error('Logger is required to handle rejections');
	    }

	    this.logger = logger;
	    this.handlers = new Map();
	  }

	  /**
	   * Handles `unhandledRejection` events for the current process by adding any
	   * handlers passed in.
	   * @returns {undefined}
	   */
	  handle(...args) {
	    args.forEach(arg => {
	      if (Array.isArray(arg)) {
	        return arg.forEach(handler => this._addHandler(handler));
	      }

	      this._addHandler(arg);
	    });

	    if (!this.catcher) {
	      this.catcher = this._unhandledRejection.bind(this);
	      process.on('unhandledRejection', this.catcher);
	    }
	  }

	  /**
	   * Removes any handlers to `unhandledRejection` events for the current
	   * process. This does not modify the state of the `this.handlers` set.
	   * @returns {undefined}
	   */
	  unhandle() {
	    if (this.catcher) {
	      process.removeListener('unhandledRejection', this.catcher);
	      this.catcher = false;

	      Array.from(this.handlers.values()).forEach(wrapper =>
	        this.logger.unpipe(wrapper)
	      );
	    }
	  }

	  /**
	   * TODO: add method description
	   * @param {Error} err - Error to get information about.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getAllInfo(err) {
	    let message = null;
	    if (err) {
	      message = typeof err === 'string' ? err : err.message;
	    }

	    return {
	      error: err,
	      // TODO (indexzero): how do we configure this?
	      level: 'error',
	      message: [
	        `unhandledRejection: ${message || '(no error message)'}`,
	        err && err.stack || '  No stack trace'
	      ].join('\n'),
	      stack: err && err.stack,
	      rejection: true,
	      date: new Date().toString(),
	      process: this.getProcessInfo(),
	      os: this.getOsInfo(),
	      trace: this.getTrace(err)
	    };
	  }

	  /**
	   * Gets all relevant process information for the currently running process.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getProcessInfo() {
	    return {
	      pid: process.pid,
	      uid: process.getuid ? process.getuid() : null,
	      gid: process.getgid ? process.getgid() : null,
	      cwd: process.cwd(),
	      execPath: process.execPath,
	      version: process.version,
	      argv: process.argv,
	      memoryUsage: process.memoryUsage()
	    };
	  }

	  /**
	   * Gets all relevant OS information for the currently running process.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getOsInfo() {
	    return {
	      loadavg: os.loadavg(),
	      uptime: os.uptime()
	    };
	  }

	  /**
	   * Gets a stack trace for the specified error.
	   * @param {mixed} err - TODO: add param description.
	   * @returns {mixed} - TODO: add return description.
	   */
	  getTrace(err) {
	    const trace = err ? stackTrace.parse(err) : stackTrace.get();
	    return trace.map(site => {
	      return {
	        column: site.getColumnNumber(),
	        file: site.getFileName(),
	        function: site.getFunctionName(),
	        line: site.getLineNumber(),
	        method: site.getMethodName(),
	        native: site.isNative()
	      };
	    });
	  }

	  /**
	   * Helper method to add a transport as an exception handler.
	   * @param {Transport} handler - The transport to add as an exception handler.
	   * @returns {void}
	   */
	  _addHandler(handler) {
	    if (!this.handlers.has(handler)) {
	      handler.handleRejections = true;
	      const wrapper = new RejectionStream(handler);
	      this.handlers.set(handler, wrapper);
	      this.logger.pipe(wrapper);
	    }
	  }

	  /**
	   * Logs all relevant information around the `err` and exits the current
	   * process.
	   * @param {Error} err - Error to handle
	   * @returns {mixed} - TODO: add return description.
	   * @private
	   */
	  _unhandledRejection(err) {
	    const info = this.getAllInfo(err);
	    const handlers = this._getRejectionHandlers();
	    // Calculate if we should exit on this error
	    let doExit =
	      typeof this.logger.exitOnError === 'function'
	        ? this.logger.exitOnError(err)
	        : this.logger.exitOnError;
	    let timeout;

	    if (!handlers.length && doExit) {
	      // eslint-disable-next-line no-console
	      console.warn('winston: exitOnError cannot be true with no rejection handlers.');
	      // eslint-disable-next-line no-console
	      console.warn('winston: not exiting process.');
	      doExit = false;
	    }

	    function gracefulExit() {
	      debug('doExit', doExit);
	      debug('process._exiting', process._exiting);

	      if (doExit && !process._exiting) {
	        // Remark: Currently ignoring any rejections from transports when
	        // catching unhandled rejections.
	        if (timeout) {
	          clearTimeout(timeout);
	        }
	        // eslint-disable-next-line no-process-exit
	        process.exit(1);
	      }
	    }

	    if (!handlers || handlers.length === 0) {
	      return process.nextTick(gracefulExit);
	    }

	    // Log to all transports attempting to listen for when they are completed.
	    asyncForEach(
	      handlers,
	      (handler, next) => {
	        const done = once(next);
	        const transport = handler.transport || handler;

	        // Debug wrapping so that we can inspect what's going on under the covers.
	        function onDone(event) {
	          return () => {
	            debug(event);
	            done();
	          };
	        }

	        transport._ending = true;
	        transport.once('finish', onDone('finished'));
	        transport.once('error', onDone('error'));
	      },
	      () => doExit && gracefulExit()
	    );

	    this.logger.log(info);

	    // If exitOnError is true, then only allow the logging of exceptions to
	    // take up to `3000ms`.
	    if (doExit) {
	      timeout = setTimeout(gracefulExit, 3000);
	    }
	  }

	  /**
	   * Returns the list of transports and exceptionHandlers for this instance.
	   * @returns {Array} - List of transports and exceptionHandlers for this
	   * instance.
	   * @private
	   */
	  _getRejectionHandlers() {
	    // Remark (indexzero): since `logger.transports` returns all of the pipes
	    // from the _readableState of the stream we actually get the join of the
	    // explicit handlers and the implicit transports with
	    // `handleRejections: true`
	    return this.logger.transports.filter(wrap => {
	      const transport = wrap.transport || wrap;
	      return transport.handleRejections;
	    });
	  }
	};
	return rejectionHandler;
}

/**
 * profiler.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var profiler;
var hasRequiredProfiler;

function requireProfiler () {
	if (hasRequiredProfiler) return profiler;
	hasRequiredProfiler = 1;
	/**
	 * TODO: add class description.
	 * @type {Profiler}
	 * @private
	 */
	class Profiler {
	  /**
	   * Constructor function for the Profiler instance used by
	   * `Logger.prototype.startTimer`. When done is called the timer will finish
	   * and log the duration.
	   * @param {!Logger} logger - TODO: add param description.
	   * @private
	   */
	  constructor(logger) {
	    const Logger = requireLogger();
	    if (typeof logger !== 'object' || Array.isArray(logger) || !(logger instanceof Logger)) {
	      throw new Error('Logger is required for profiling');
	    } else {
	      this.logger = logger;
	      this.start = Date.now();
	    }
	  }

	  /**
	   * Ends the current timer (i.e. Profiler) instance and logs the `msg` along
	   * with the duration since creation.
	   * @returns {mixed} - TODO: add return description.
	   * @private
	   */
	  done(...args) {
	    if (typeof args[args.length - 1] === 'function') {
	      // eslint-disable-next-line no-console
	      console.warn('Callback function no longer supported as of winston@3.0.0');
	      args.pop();
	    }

	    const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
	    info.level = info.level || 'info';
	    info.durationMs = (Date.now()) - this.start;

	    return this.logger.write(info);
	  }
	}
	profiler = Profiler;
	return profiler;
}

/**
 * logger.js: TODO: add file header description.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var logger;
var hasRequiredLogger;

function requireLogger () {
	if (hasRequiredLogger) return logger;
	hasRequiredLogger = 1;

	const { Stream, Transform } = requireReadable();
	const asyncForEach = requireForEach();
	const { LEVEL, SPLAT } = requireTripleBeam();
	const isStream = requireIsStream();
	const ExceptionHandler = requireExceptionHandler();
	const RejectionHandler = requireRejectionHandler();
	const LegacyTransportStream = requireLegacy();
	const Profiler = requireProfiler();
	const { warn } = requireCommon();
	const config = requireConfig();

	/**
	 * Captures the number of format (i.e. %s strings) in a given string.
	 * Based on `util.format`, see Node.js source:
	 * https://github.com/nodejs/node/blob/b1c8f15c5f169e021f7c46eb7b219de95fe97603/lib/util.js#L201-L230
	 * @type {RegExp}
	 */
	const formatRegExp = /%[scdjifoO%]/g;

	/**
	 * TODO: add class description.
	 * @type {Logger}
	 * @extends {Transform}
	 */
	class Logger extends Transform {
	  /**
	   * Constructor function for the Logger object responsible for persisting log
	   * messages and metadata to one or more transports.
	   * @param {!Object} options - foo
	   */
	  constructor(options) {
	    super({ objectMode: true });
	    this.configure(options);
	  }

	  child(defaultRequestMetadata) {
	    const logger = this;
	    return Object.create(logger, {
	      write: {
	        value: function (info) {
	          const infoClone = Object.assign(
	            {},
	            defaultRequestMetadata,
	            info
	          );

	          // Object.assign doesn't copy inherited Error
	          // properties so we have to do that explicitly
	          //
	          // Remark (indexzero): we should remove this
	          // since the errors format will handle this case.
	          //
	          if (info instanceof Error) {
	            infoClone.stack = info.stack;
	            infoClone.message = info.message;
	          }

	          logger.write(infoClone);
	        }
	      }
	    });
	  }

	  /**
	   * This will wholesale reconfigure this instance by:
	   * 1. Resetting all transports. Older transports will be removed implicitly.
	   * 2. Set all other options including levels, colors, rewriters, filters,
	   *    exceptionHandlers, etc.
	   * @param {!Object} options - TODO: add param description.
	   * @returns {undefined}
	   */
	  configure({
	    silent,
	    format,
	    defaultMeta,
	    levels,
	    level = 'info',
	    exitOnError = true,
	    transports,
	    colors,
	    emitErrs,
	    formatters,
	    padLevels,
	    rewriters,
	    stripColors,
	    exceptionHandlers,
	    rejectionHandlers
	  } = {}) {
	    // Reset transports if we already have them
	    if (this.transports.length) {
	      this.clear();
	    }

	    this.silent = silent;
	    this.format = format || this.format || requireJson()();

	    this.defaultMeta = defaultMeta || null;
	    // Hoist other options onto this instance.
	    this.levels = levels || this.levels || config.npm.levels;
	    this.level = level;
	    if (this.exceptions) {
	      this.exceptions.unhandle();
	    }
	    if (this.rejections) {
	      this.rejections.unhandle();
	    }
	    this.exceptions = new ExceptionHandler(this);
	    this.rejections = new RejectionHandler(this);
	    this.profilers = {};
	    this.exitOnError = exitOnError;

	    // Add all transports we have been provided.
	    if (transports) {
	      transports = Array.isArray(transports) ? transports : [transports];
	      transports.forEach(transport => this.add(transport));
	    }

	    if (
	      colors ||
	      emitErrs ||
	      formatters ||
	      padLevels ||
	      rewriters ||
	      stripColors
	    ) {
	      throw new Error(
	        [
	          '{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.',
	          'Use a custom winston.format(function) instead.',
	          'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
	        ].join('\n')
	      );
	    }

	    if (exceptionHandlers) {
	      this.exceptions.handle(exceptionHandlers);
	    }
	    if (rejectionHandlers) {
	      this.rejections.handle(rejectionHandlers);
	    }
	  }

	  isLevelEnabled(level) {
	    const givenLevelValue = getLevelValue(this.levels, level);
	    if (givenLevelValue === null) {
	      return false;
	    }

	    const configuredLevelValue = getLevelValue(this.levels, this.level);
	    if (configuredLevelValue === null) {
	      return false;
	    }

	    if (!this.transports || this.transports.length === 0) {
	      return configuredLevelValue >= givenLevelValue;
	    }

	    const index = this.transports.findIndex(transport => {
	      let transportLevelValue = getLevelValue(this.levels, transport.level);
	      if (transportLevelValue === null) {
	        transportLevelValue = configuredLevelValue;
	      }
	      return transportLevelValue >= givenLevelValue;
	    });
	    return index !== -1;
	  }

	  /* eslint-disable valid-jsdoc */
	  /**
	   * Ensure backwards compatibility with a `log` method
	   * @param {mixed} level - Level the log message is written at.
	   * @param {mixed} msg - TODO: add param description.
	   * @param {mixed} meta - TODO: add param description.
	   * @returns {Logger} - TODO: add return description.
	   *
	   * @example
	   *    // Supports the existing API:
	   *    logger.log('info', 'Hello world', { custom: true });
	   *    logger.log('info', new Error('Yo, it\'s on fire'));
	   *
	   *    // Requires winston.format.splat()
	   *    logger.log('info', '%s %d%%', 'A string', 50, { thisIsMeta: true });
	   *
	   *    // And the new API with a single JSON literal:
	   *    logger.log({ level: 'info', message: 'Hello world', custom: true });
	   *    logger.log({ level: 'info', message: new Error('Yo, it\'s on fire') });
	   *
	   *    // Also requires winston.format.splat()
	   *    logger.log({
	   *      level: 'info',
	   *      message: '%s %d%%',
	   *      [SPLAT]: ['A string', 50],
	   *      meta: { thisIsMeta: true }
	   *    });
	   *
	   */
	  /* eslint-enable valid-jsdoc */
	  log(level, msg, ...splat) {
	    // eslint-disable-line max-params
	    // Optimize for the hotpath of logging JSON literals
	    if (arguments.length === 1) {
	      // Yo dawg, I heard you like levels ... seriously ...
	      // In this context the LHS `level` here is actually the `info` so read
	      // this as: info[LEVEL] = info.level;
	      level[LEVEL] = level.level;
	      this._addDefaultMeta(level);
	      this.write(level);
	      return this;
	    }

	    // Slightly less hotpath, but worth optimizing for.
	    if (arguments.length === 2) {
	      if (msg && typeof msg === 'object') {
	        msg[LEVEL] = msg.level = level;
	        this._addDefaultMeta(msg);
	        this.write(msg);
	        return this;
	      }

	      msg = { [LEVEL]: level, level, message: msg };
	      this._addDefaultMeta(msg);
	      this.write(msg);
	      return this;
	    }

	    const [meta] = splat;
	    if (typeof meta === 'object' && meta !== null) {
	      // Extract tokens, if none available default to empty array to
	      // ensure consistancy in expected results
	      const tokens = msg && msg.match && msg.match(formatRegExp);

	      if (!tokens) {
	        const info = Object.assign({}, this.defaultMeta, meta, {
	          [LEVEL]: level,
	          [SPLAT]: splat,
	          level,
	          message: msg
	        });

	        if (meta.message) info.message = `${info.message} ${meta.message}`;
	        if (meta.stack) info.stack = meta.stack;
	        if (meta.cause) info.cause = meta.cause;

	        this.write(info);
	        return this;
	      }
	    }

	    this.write(Object.assign({}, this.defaultMeta, {
	      [LEVEL]: level,
	      [SPLAT]: splat,
	      level,
	      message: msg
	    }));

	    return this;
	  }

	  /**
	   * Pushes data so that it can be picked up by all of our pipe targets.
	   * @param {mixed} info - TODO: add param description.
	   * @param {mixed} enc - TODO: add param description.
	   * @param {mixed} callback - Continues stream processing.
	   * @returns {undefined}
	   * @private
	   */
	  _transform(info, enc, callback) {
	    if (this.silent) {
	      return callback();
	    }

	    // [LEVEL] is only soft guaranteed to be set here since we are a proper
	    // stream. It is likely that `info` came in through `.log(info)` or
	    // `.info(info)`. If it is not defined, however, define it.
	    // This LEVEL symbol is provided by `triple-beam` and also used in:
	    // - logform
	    // - winston-transport
	    // - abstract-winston-transport
	    if (!info[LEVEL]) {
	      info[LEVEL] = info.level;
	    }

	    // Remark: really not sure what to do here, but this has been reported as
	    // very confusing by pre winston@2.0.0 users as quite confusing when using
	    // custom levels.
	    if (!this.levels[info[LEVEL]] && this.levels[info[LEVEL]] !== 0) {
	      // eslint-disable-next-line no-console
	      console.error('[winston] Unknown logger level: %s', info[LEVEL]);
	    }

	    // Remark: not sure if we should simply error here.
	    if (!this._readableState.pipes) {
	      // eslint-disable-next-line no-console
	      console.error(
	        '[winston] Attempt to write logs with no transports, which can increase memory usage: %j',
	        info
	      );
	    }

	    // Here we write to the `format` pipe-chain, which on `readable` above will
	    // push the formatted `info` Object onto the buffer for this instance. We trap
	    // (and re-throw) any errors generated by the user-provided format, but also
	    // guarantee that the streams callback is invoked so that we can continue flowing.
	    try {
	      this.push(this.format.transform(info, this.format.options));
	    } finally {
	      this._writableState.sync = false;
	      // eslint-disable-next-line callback-return
	      callback();
	    }
	  }

	  /**
	   * Delays the 'finish' event until all transport pipe targets have
	   * also emitted 'finish' or are already finished.
	   * @param {mixed} callback - Continues stream processing.
	   */
	  _final(callback) {
	    const transports = this.transports.slice();
	    asyncForEach(
	      transports,
	      (transport, next) => {
	        if (!transport || transport.finished) return setImmediate(next);
	        transport.once('finish', next);
	        transport.end();
	      },
	      callback
	    );
	  }

	  /**
	   * Adds the transport to this logger instance by piping to it.
	   * @param {mixed} transport - TODO: add param description.
	   * @returns {Logger} - TODO: add return description.
	   */
	  add(transport) {
	    // Support backwards compatibility with all existing `winston < 3.x.x`
	    // transports which meet one of two criteria:
	    // 1. They inherit from winston.Transport in  < 3.x.x which is NOT a stream.
	    // 2. They expose a log method which has a length greater than 2 (i.e. more then
	    //    just `log(info, callback)`.
	    const target =
	      !isStream(transport) || transport.log.length > 2
	        ? new LegacyTransportStream({ transport })
	        : transport;

	    if (!target._writableState || !target._writableState.objectMode) {
	      throw new Error(
	        'Transports must WritableStreams in objectMode. Set { objectMode: true }.'
	      );
	    }

	    // Listen for the `error` event and the `warn` event on the new Transport.
	    this._onEvent('error', target);
	    this._onEvent('warn', target);
	    this.pipe(target);

	    if (transport.handleExceptions) {
	      this.exceptions.handle();
	    }

	    if (transport.handleRejections) {
	      this.rejections.handle();
	    }

	    return this;
	  }

	  /**
	   * Removes the transport from this logger instance by unpiping from it.
	   * @param {mixed} transport - TODO: add param description.
	   * @returns {Logger} - TODO: add return description.
	   */
	  remove(transport) {
	    if (!transport) return this;
	    let target = transport;
	    if (!isStream(transport) || transport.log.length > 2) {
	      target = this.transports.filter(
	        match => match.transport === transport
	      )[0];
	    }

	    if (target) {
	      this.unpipe(target);
	    }
	    return this;
	  }

	  /**
	   * Removes all transports from this logger instance.
	   * @returns {Logger} - TODO: add return description.
	   */
	  clear() {
	    this.unpipe();
	    return this;
	  }

	  /**
	   * Cleans up resources (streams, event listeners) for all transports
	   * associated with this instance (if necessary).
	   * @returns {Logger} - TODO: add return description.
	   */
	  close() {
	    this.exceptions.unhandle();
	    this.rejections.unhandle();
	    this.clear();
	    this.emit('close');
	    return this;
	  }

	  /**
	   * Sets the `target` levels specified on this instance.
	   * @param {Object} Target levels to use on this instance.
	   */
	  setLevels() {
	    warn.deprecated('setLevels');
	  }

	  /**
	   * Queries the all transports for this instance with the specified `options`.
	   * This will aggregate each transport's results into one object containing
	   * a property per transport.
	   * @param {Object} options - Query options for this instance.
	   * @param {function} callback - Continuation to respond to when complete.
	   */
	  query(options, callback) {
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }

	    options = options || {};
	    const results = {};
	    const queryObject = Object.assign({}, options.query || {});

	    // Helper function to query a single transport
	    function queryTransport(transport, next) {
	      if (options.query && typeof transport.formatQuery === 'function') {
	        options.query = transport.formatQuery(queryObject);
	      }

	      transport.query(options, (err, res) => {
	        if (err) {
	          return next(err);
	        }

	        if (typeof transport.formatResults === 'function') {
	          res = transport.formatResults(res, options.format);
	        }

	        next(null, res);
	      });
	    }

	    // Helper function to accumulate the results from `queryTransport` into
	    // the `results`.
	    function addResults(transport, next) {
	      queryTransport(transport, (err, result) => {
	        // queryTransport could potentially invoke the callback multiple times
	        // since Transport code can be unpredictable.
	        if (next) {
	          result = err || result;
	          if (result) {
	            results[transport.name] = result;
	          }

	          // eslint-disable-next-line callback-return
	          next();
	        }

	        next = null;
	      });
	    }

	    // Iterate over the transports in parallel setting the appropriate key in
	    // the `results`.
	    asyncForEach(
	      this.transports.filter(transport => !!transport.query),
	      addResults,
	      () => callback(null, results)
	    );
	  }

	  /**
	   * Returns a log stream for all transports. Options object is optional.
	   * @param{Object} options={} - Stream options for this instance.
	   * @returns {Stream} - TODO: add return description.
	   */
	  stream(options = {}) {
	    const out = new Stream();
	    const streams = [];

	    out._streams = streams;
	    out.destroy = () => {
	      let i = streams.length;
	      while (i--) {
	        streams[i].destroy();
	      }
	    };

	    // Create a list of all transports for this instance.
	    this.transports
	      .filter(transport => !!transport.stream)
	      .forEach(transport => {
	        const str = transport.stream(options);
	        if (!str) {
	          return;
	        }

	        streams.push(str);

	        str.on('log', log => {
	          log.transport = log.transport || [];
	          log.transport.push(transport.name);
	          out.emit('log', log);
	        });

	        str.on('error', err => {
	          err.transport = err.transport || [];
	          err.transport.push(transport.name);
	          out.emit('error', err);
	        });
	      });

	    return out;
	  }

	  /**
	   * Returns an object corresponding to a specific timing. When done is called
	   * the timer will finish and log the duration. e.g.:
	   * @returns {Profile} - TODO: add return description.
	   * @example
	   *    const timer = winston.startTimer()
	   *    setTimeout(() => {
	   *      timer.done({
	   *        message: 'Logging message'
	   *      });
	   *    }, 1000);
	   */
	  startTimer() {
	    return new Profiler(this);
	  }

	  /**
	   * Tracks the time inbetween subsequent calls to this method with the same
	   * `id` parameter. The second call to this method will log the difference in
	   * milliseconds along with the message.
	   * @param {string} id Unique id of the profiler
	   * @returns {Logger} - TODO: add return description.
	   */
	  profile(id, ...args) {
	    const time = Date.now();
	    if (this.profilers[id]) {
	      const timeEnd = this.profilers[id];
	      delete this.profilers[id];

	      // Attempt to be kind to users if they are still using older APIs.
	      if (typeof args[args.length - 2] === 'function') {
	        // eslint-disable-next-line no-console
	        console.warn(
	          'Callback function no longer supported as of winston@3.0.0'
	        );
	        args.pop();
	      }

	      // Set the duration property of the metadata
	      const info = typeof args[args.length - 1] === 'object' ? args.pop() : {};
	      info.level = info.level || 'info';
	      info.durationMs = time - timeEnd;
	      info.message = info.message || id;
	      return this.write(info);
	    }

	    this.profilers[id] = time;
	    return this;
	  }

	  /**
	   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
	   * @returns {undefined}
	   * @deprecated
	   */
	  handleExceptions(...args) {
	    // eslint-disable-next-line no-console
	    console.warn(
	      'Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()'
	    );
	    this.exceptions.handle(...args);
	  }

	  /**
	   * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
	   * @returns {undefined}
	   * @deprecated
	   */
	  unhandleExceptions(...args) {
	    // eslint-disable-next-line no-console
	    console.warn(
	      'Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()'
	    );
	    this.exceptions.unhandle(...args);
	  }

	  /**
	   * Throw a more meaningful deprecation notice
	   * @throws {Error} - TODO: add throws description.
	   */
	  cli() {
	    throw new Error(
	      [
	        'Logger.cli() was removed in winston@3.0.0',
	        'Use a custom winston.formats.cli() instead.',
	        'See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md'
	      ].join('\n')
	    );
	  }

	  /**
	   * Bubbles the `event` that occured on the specified `transport` up
	   * from this instance.
	   * @param {string} event - The event that occured
	   * @param {Object} transport - Transport on which the event occured
	   * @private
	   */
	  _onEvent(event, transport) {
	    function transportEvent(err) {
	      // https://github.com/winstonjs/winston/issues/1364
	      if (event === 'error' && !this.transports.includes(transport)) {
	        this.add(transport);
	      }
	      this.emit(event, err, transport);
	    }

	    if (!transport['__winston' + event]) {
	      transport['__winston' + event] = transportEvent.bind(this);
	      transport.on(event, transport['__winston' + event]);
	    }
	  }

	  _addDefaultMeta(msg) {
	    if (this.defaultMeta) {
	      Object.assign(msg, this.defaultMeta);
	    }
	  }
	}

	function getLevelValue(levels, level) {
	  const value = levels[level];
	  if (!value && value !== 0) {
	    return null;
	  }
	  return value;
	}

	/**
	 * Represents the current readableState pipe targets for this Logger instance.
	 * @type {Array|Object}
	 */
	Object.defineProperty(Logger.prototype, 'transports', {
	  configurable: false,
	  enumerable: true,
	  get() {
	    const { pipes } = this._readableState;
	    return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
	  }
	});

	logger = Logger;
	return logger;
}

/**
 * create-logger.js: Logger factory for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var createLogger;
var hasRequiredCreateLogger;

function requireCreateLogger () {
	if (hasRequiredCreateLogger) return createLogger;
	hasRequiredCreateLogger = 1;

	const { LEVEL } = requireTripleBeam();
	const config = requireConfig();
	const Logger = requireLogger();
	const debug = requireNode()('winston:create-logger');

	function isLevelEnabledFunctionName(level) {
	  return 'is' + level.charAt(0).toUpperCase() + level.slice(1) + 'Enabled';
	}

	/**
	 * Create a new instance of a winston Logger. Creates a new
	 * prototype for each instance.
	 * @param {!Object} opts - Options for the created logger.
	 * @returns {Logger} - A newly created logger instance.
	 */
	createLogger = function (opts = {}) {
	  //
	  // Default levels: npm
	  //
	  opts.levels = opts.levels || config.npm.levels;

	  /**
	   * DerivedLogger to attach the logs level methods.
	   * @type {DerivedLogger}
	   * @extends {Logger}
	   */
	  class DerivedLogger extends Logger {
	    /**
	     * Create a new class derived logger for which the levels can be attached to
	     * the prototype of. This is a V8 optimization that is well know to increase
	     * performance of prototype functions.
	     * @param {!Object} options - Options for the created logger.
	     */
	    constructor(options) {
	      super(options);
	    }
	  }

	  const logger = new DerivedLogger(opts);

	  //
	  // Create the log level methods for the derived logger.
	  //
	  Object.keys(opts.levels).forEach(function (level) {
	    debug('Define prototype method for "%s"', level);
	    if (level === 'log') {
	      // eslint-disable-next-line no-console
	      console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
	      return;
	    }

	    //
	    // Define prototype methods for each log level e.g.:
	    // logger.log('info', msg) implies these methods are defined:
	    // - logger.info(msg)
	    // - logger.isInfoEnabled()
	    //
	    // Remark: to support logger.child this **MUST** be a function
	    // so it'll always be called on the instance instead of a fixed
	    // place in the prototype chain.
	    //
	    DerivedLogger.prototype[level] = function (...args) {
	      // Prefer any instance scope, but default to "root" logger
	      const self = this || logger;

	      // Optimize the hot-path which is the single object.
	      if (args.length === 1) {
	        const [msg] = args;
	        const info = msg && msg.message && msg || { message: msg };
	        info.level = info[LEVEL] = level;
	        self._addDefaultMeta(info);
	        self.write(info);
	        return (this || logger);
	      }

	      // When provided nothing assume the empty string
	      if (args.length === 0) {
	        self.log(level, '');
	        return self;
	      }

	      // Otherwise build argument list which could potentially conform to
	      // either:
	      // . v3 API: log(obj)
	      // 2. v1/v2 API: log(level, msg, ... [string interpolate], [{metadata}], [callback])
	      return self.log(level, ...args);
	    };

	    DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function () {
	      return (this || logger).isLevelEnabled(level);
	    };
	  });

	  return logger;
	};
	return createLogger;
}

/**
 * container.js: Inversion of control container for winston logger instances.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var container;
var hasRequiredContainer;

function requireContainer () {
	if (hasRequiredContainer) return container;
	hasRequiredContainer = 1;

	const createLogger = requireCreateLogger();

	/**
	 * Inversion of control container for winston logger instances.
	 * @type {Container}
	 */
	container = class Container {
	  /**
	   * Constructor function for the Container object responsible for managing a
	   * set of `winston.Logger` instances based on string ids.
	   * @param {!Object} [options={}] - Default pass-thru options for Loggers.
	   */
	  constructor(options = {}) {
	    this.loggers = new Map();
	    this.options = options;
	  }

	  /**
	   * Retrieves a `winston.Logger` instance for the specified `id`. If an
	   * instance does not exist, one is created.
	   * @param {!string} id - The id of the Logger to get.
	   * @param {?Object} [options] - Options for the Logger instance.
	   * @returns {Logger} - A configured Logger instance with a specified id.
	   */
	  add(id, options) {
	    if (!this.loggers.has(id)) {
	      // Remark: Simple shallow clone for configuration options in case we pass
	      // in instantiated protoypal objects
	      options = Object.assign({}, options || this.options);
	      const existing = options.transports || this.options.transports;

	      // Remark: Make sure if we have an array of transports we slice it to
	      // make copies of those references.
	      if (existing) {
	        options.transports = Array.isArray(existing) ? existing.slice() : [existing];
	      } else {
	        options.transports = [];
	      }

	      const logger = createLogger(options);
	      logger.on('close', () => this._delete(id));
	      this.loggers.set(id, logger);
	    }

	    return this.loggers.get(id);
	  }

	  /**
	   * Retreives a `winston.Logger` instance for the specified `id`. If
	   * an instance does not exist, one is created.
	   * @param {!string} id - The id of the Logger to get.
	   * @param {?Object} [options] - Options for the Logger instance.
	   * @returns {Logger} - A configured Logger instance with a specified id.
	   */
	  get(id, options) {
	    return this.add(id, options);
	  }

	  /**
	   * Check if the container has a logger with the id.
	   * @param {?string} id - The id of the Logger instance to find.
	   * @returns {boolean} - Boolean value indicating if this instance has a
	   * logger with the specified `id`.
	   */
	  has(id) {
	    return !!this.loggers.has(id);
	  }

	  /**
	   * Closes a `Logger` instance with the specified `id` if it exists.
	   * If no `id` is supplied then all Loggers are closed.
	   * @param {?string} id - The id of the Logger instance to close.
	   * @returns {undefined}
	   */
	  close(id) {
	    if (id) {
	      return this._removeLogger(id);
	    }

	    this.loggers.forEach((val, key) => this._removeLogger(key));
	  }

	  /**
	   * Remove a logger based on the id.
	   * @param {!string} id - The id of the logger to remove.
	   * @returns {undefined}
	   * @private
	   */
	  _removeLogger(id) {
	    if (!this.loggers.has(id)) {
	      return;
	    }

	    const logger = this.loggers.get(id);
	    logger.close();
	    this._delete(id);
	  }

	  /**
	   * Deletes a `Logger` instance with the specified `id`.
	   * @param {!string} id - The id of the Logger instance to delete from
	   * container.
	   * @returns {undefined}
	   * @private
	   */
	  _delete(id) {
	    this.loggers.delete(id);
	  }
	};
	return container;
}

/**
 * winston.js: Top-level include defining Winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

var hasRequiredWinston;

function requireWinston () {
	if (hasRequiredWinston) return winston;
	hasRequiredWinston = 1;
	(function (exports) {

		const logform = requireLogform();
		const { warn } = requireCommon();

		/**
		 * Expose version. Use `require` method for `webpack` support.
		 * @type {string}
		 */
		exports.version = require$$2.version;
		/**
		 * Include transports defined by default by winston
		 * @type {Array}
		 */
		exports.transports = requireTransports();
		/**
		 * Expose utility methods
		 * @type {Object}
		 */
		exports.config = requireConfig();
		/**
		 * Hoist format-related functionality from logform.
		 * @type {Object}
		 */
		exports.addColors = logform.levels;
		/**
		 * Hoist format-related functionality from logform.
		 * @type {Object}
		 */
		exports.format = logform.format;
		/**
		 * Expose core Logging-related prototypes.
		 * @type {function}
		 */
		exports.createLogger = requireCreateLogger();
		/**
		 * Expose core Logging-related prototypes.
		 * @type {function}
		 */
		exports.Logger = requireLogger();
		/**
		 * Expose core Logging-related prototypes.
		 * @type {Object}
		 */
		exports.ExceptionHandler = requireExceptionHandler();
		/**
		 * Expose core Logging-related prototypes.
		 * @type {Object}
		 */
		exports.RejectionHandler = requireRejectionHandler();
		/**
		 * Expose core Logging-related prototypes.
		 * @type {Container}
		 */
		exports.Container = requireContainer();
		/**
		 * Expose core Logging-related prototypes.
		 * @type {Object}
		 */
		exports.Transport = requireWinstonTransport();
		/**
		 * We create and expose a default `Container` to `winston.loggers` so that the
		 * programmer may manage multiple `winston.Logger` instances without any
		 * additional overhead.
		 * @example
		 *   // some-file1.js
		 *   const logger = require('winston').loggers.get('something');
		 *
		 *   // some-file2.js
		 *   const logger = require('winston').loggers.get('something');
		 */
		exports.loggers = new exports.Container();

		/**
		 * We create and expose a 'defaultLogger' so that the programmer may do the
		 * following without the need to create an instance of winston.Logger directly:
		 * @example
		 *   const winston = require('winston');
		 *   winston.log('info', 'some message');
		 *   winston.error('some error');
		 */
		const defaultLogger = exports.createLogger();

		// Pass through the target methods onto `winston.
		Object.keys(exports.config.npm.levels)
		  .concat([
		    'log',
		    'query',
		    'stream',
		    'add',
		    'remove',
		    'clear',
		    'profile',
		    'startTimer',
		    'handleExceptions',
		    'unhandleExceptions',
		    'handleRejections',
		    'unhandleRejections',
		    'configure',
		    'child'
		  ])
		  .forEach(
		    method => (exports[method] = (...args) => defaultLogger[method](...args))
		  );

		/**
		 * Define getter / setter for the default logger level which need to be exposed
		 * by winston.
		 * @type {string}
		 */
		Object.defineProperty(exports, 'level', {
		  get() {
		    return defaultLogger.level;
		  },
		  set(val) {
		    defaultLogger.level = val;
		  }
		});

		/**
		 * Define getter for `exceptions` which replaces `handleExceptions` and
		 * `unhandleExceptions`.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'exceptions', {
		  get() {
		    return defaultLogger.exceptions;
		  }
		});

		/**
		 * Define getter for `rejections` which replaces `handleRejections` and
		 * `unhandleRejections`.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'rejections', {
		  get() {
		    return defaultLogger.rejections;
		  }
		});

		/**
		 * Define getters / setters for appropriate properties of the default logger
		 * which need to be exposed by winston.
		 * @type {Logger}
		 */
		['exitOnError'].forEach(prop => {
		  Object.defineProperty(exports, prop, {
		    get() {
		      return defaultLogger[prop];
		    },
		    set(val) {
		      defaultLogger[prop] = val;
		    }
		  });
		});

		/**
		 * The default transports and exceptionHandlers for the default winston logger.
		 * @type {Object}
		 */
		Object.defineProperty(exports, 'default', {
		  get() {
		    return {
		      exceptionHandlers: defaultLogger.exceptionHandlers,
		      rejectionHandlers: defaultLogger.rejectionHandlers,
		      transports: defaultLogger.transports
		    };
		  }
		});

		// Have friendlier breakage notices for properties that were exposed by default
		// on winston < 3.0.
		warn.deprecated(exports, 'setLevels');
		warn.forFunctions(exports, 'useFormat', ['cli']);
		warn.forProperties(exports, 'useFormat', ['padLevels', 'stripColors']);
		warn.forFunctions(exports, 'deprecated', [
		  'addRewriter',
		  'addFilter',
		  'clone',
		  'extend'
		]);
		warn.forProperties(exports, 'deprecated', ['emitErrs', 'levelLength']); 
	} (winston));
	return winston;
}

var winstonExports = requireWinston();

var objectHash = {exports: {}};

var hasRequiredObjectHash;

function requireObjectHash () {
	if (hasRequiredObjectHash) return objectHash.exports;
	hasRequiredObjectHash = 1;
	(function (module, exports) {

		var crypto = require$$0$8;

		/**
		 * Exported function
		 *
		 * Options:
		 *
		 *  - `algorithm` hash algo to be used by this instance: *'sha1', 'md5'
		 *  - `excludeValues` {true|*false} hash object keys, values ignored
		 *  - `encoding` hash encoding, supports 'buffer', '*hex', 'binary', 'base64'
		 *  - `ignoreUnknown` {true|*false} ignore unknown object types
		 *  - `replacer` optional function that replaces values before hashing
		 *  - `respectFunctionProperties` {*true|false} consider function properties when hashing
		 *  - `respectFunctionNames` {*true|false} consider 'name' property of functions for hashing
		 *  - `respectType` {*true|false} Respect special properties (prototype, constructor)
		 *    when hashing to distinguish between types
		 *  - `unorderedArrays` {true|*false} Sort all arrays before hashing
		 *  - `unorderedSets` {*true|false} Sort `Set` and `Map` instances before hashing
		 *  * = default
		 *
		 * @param {object} object value to hash
		 * @param {object} options hashing options
		 * @return {string} hash value
		 * @api public
		 */
		exports = module.exports = objectHash;

		function objectHash(object, options){
		  options = applyDefaults(object, options);

		  return hash(object, options);
		}

		/**
		 * Exported sugar methods
		 *
		 * @param {object} object value to hash
		 * @return {string} hash value
		 * @api public
		 */
		exports.sha1 = function(object){
		  return objectHash(object);
		};
		exports.keys = function(object){
		  return objectHash(object, {excludeValues: true, algorithm: 'sha1', encoding: 'hex'});
		};
		exports.MD5 = function(object){
		  return objectHash(object, {algorithm: 'md5', encoding: 'hex'});
		};
		exports.keysMD5 = function(object){
		  return objectHash(object, {algorithm: 'md5', encoding: 'hex', excludeValues: true});
		};

		// Internals
		var hashes = crypto.getHashes ? crypto.getHashes().slice() : ['sha1', 'md5'];
		hashes.push('passthrough');
		var encodings = ['buffer', 'hex', 'binary', 'base64'];

		function applyDefaults(object, sourceOptions){
		  sourceOptions = sourceOptions || {};

		  // create a copy rather than mutating
		  var options = {};
		  options.algorithm = sourceOptions.algorithm || 'sha1';
		  options.encoding = sourceOptions.encoding || 'hex';
		  options.excludeValues = sourceOptions.excludeValues ? true : false;
		  options.algorithm = options.algorithm.toLowerCase();
		  options.encoding = options.encoding.toLowerCase();
		  options.ignoreUnknown = sourceOptions.ignoreUnknown !== true ? false : true; // default to false
		  options.respectType = sourceOptions.respectType === false ? false : true; // default to true
		  options.respectFunctionNames = sourceOptions.respectFunctionNames === false ? false : true;
		  options.respectFunctionProperties = sourceOptions.respectFunctionProperties === false ? false : true;
		  options.unorderedArrays = sourceOptions.unorderedArrays !== true ? false : true; // default to false
		  options.unorderedSets = sourceOptions.unorderedSets === false ? false : true; // default to false
		  options.unorderedObjects = sourceOptions.unorderedObjects === false ? false : true; // default to true
		  options.replacer = sourceOptions.replacer || undefined;
		  options.excludeKeys = sourceOptions.excludeKeys || undefined;

		  if(typeof object === 'undefined') {
		    throw new Error('Object argument required.');
		  }

		  // if there is a case-insensitive match in the hashes list, accept it
		  // (i.e. SHA256 for sha256)
		  for (var i = 0; i < hashes.length; ++i) {
		    if (hashes[i].toLowerCase() === options.algorithm.toLowerCase()) {
		      options.algorithm = hashes[i];
		    }
		  }

		  if(hashes.indexOf(options.algorithm) === -1){
		    throw new Error('Algorithm "' + options.algorithm + '"  not supported. ' +
		      'supported values: ' + hashes.join(', '));
		  }

		  if(encodings.indexOf(options.encoding) === -1 &&
		     options.algorithm !== 'passthrough'){
		    throw new Error('Encoding "' + options.encoding + '"  not supported. ' +
		      'supported values: ' + encodings.join(', '));
		  }

		  return options;
		}

		/** Check if the given function is a native function */
		function isNativeFunction(f) {
		  if ((typeof f) !== 'function') {
		    return false;
		  }
		  var exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
		  return exp.exec(Function.prototype.toString.call(f)) != null;
		}

		function hash(object, options) {
		  var hashingStream;

		  if (options.algorithm !== 'passthrough') {
		    hashingStream = crypto.createHash(options.algorithm);
		  } else {
		    hashingStream = new PassThrough();
		  }

		  if (typeof hashingStream.write === 'undefined') {
		    hashingStream.write = hashingStream.update;
		    hashingStream.end   = hashingStream.update;
		  }

		  var hasher = typeHasher(options, hashingStream);
		  hasher.dispatch(object);
		  if (!hashingStream.update) {
		    hashingStream.end('');
		  }

		  if (hashingStream.digest) {
		    return hashingStream.digest(options.encoding === 'buffer' ? undefined : options.encoding);
		  }

		  var buf = hashingStream.read();
		  if (options.encoding === 'buffer') {
		    return buf;
		  }

		  return buf.toString(options.encoding);
		}

		/**
		 * Expose streaming API
		 *
		 * @param {object} object  Value to serialize
		 * @param {object} options  Options, as for hash()
		 * @param {object} stream  A stream to write the serializiation to
		 * @api public
		 */
		exports.writeToStream = function(object, options, stream) {
		  if (typeof stream === 'undefined') {
		    stream = options;
		    options = {};
		  }

		  options = applyDefaults(object, options);

		  return typeHasher(options, stream).dispatch(object);
		};

		function typeHasher(options, writeTo, context){
		  context = context || [];
		  var write = function(str) {
		    if (writeTo.update) {
		      return writeTo.update(str, 'utf8');
		    } else {
		      return writeTo.write(str, 'utf8');
		    }
		  };

		  return {
		    dispatch: function(value){
		      if (options.replacer) {
		        value = options.replacer(value);
		      }

		      var type = typeof value;
		      if (value === null) {
		        type = 'null';
		      }

		      //console.log("[DEBUG] Dispatch: ", value, "->", type, " -> ", "_" + type);

		      return this['_' + type](value);
		    },
		    _object: function(object) {
		      var pattern = (/\[object (.*)\]/i);
		      var objString = Object.prototype.toString.call(object);
		      var objType = pattern.exec(objString);
		      if (!objType) { // object type did not match [object ...]
		        objType = 'unknown:[' + objString + ']';
		      } else {
		        objType = objType[1]; // take only the class name
		      }

		      objType = objType.toLowerCase();

		      var objectNumber = null;

		      if ((objectNumber = context.indexOf(object)) >= 0) {
		        return this.dispatch('[CIRCULAR:' + objectNumber + ']');
		      } else {
		        context.push(object);
		      }

		      if (typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(object)) {
		        write('buffer:');
		        return write(object);
		      }

		      if(objType !== 'object' && objType !== 'function' && objType !== 'asyncfunction') {
		        if(this['_' + objType]) {
		          this['_' + objType](object);
		        } else if (options.ignoreUnknown) {
		          return write('[' + objType + ']');
		        } else {
		          throw new Error('Unknown object type "' + objType + '"');
		        }
		      }else {
		        var keys = Object.keys(object);
		        if (options.unorderedObjects) {
		          keys = keys.sort();
		        }
		        // Make sure to incorporate special properties, so
		        // Types with different prototypes will produce
		        // a different hash and objects derived from
		        // different functions (`new Foo`, `new Bar`) will
		        // produce different hashes.
		        // We never do this for native functions since some
		        // seem to break because of that.
		        if (options.respectType !== false && !isNativeFunction(object)) {
		          keys.splice(0, 0, 'prototype', '__proto__', 'constructor');
		        }

		        if (options.excludeKeys) {
		          keys = keys.filter(function(key) { return !options.excludeKeys(key); });
		        }

		        write('object:' + keys.length + ':');
		        var self = this;
		        return keys.forEach(function(key){
		          self.dispatch(key);
		          write(':');
		          if(!options.excludeValues) {
		            self.dispatch(object[key]);
		          }
		          write(',');
		        });
		      }
		    },
		    _array: function(arr, unordered){
		      unordered = typeof unordered !== 'undefined' ? unordered :
		        options.unorderedArrays !== false; // default to options.unorderedArrays

		      var self = this;
		      write('array:' + arr.length + ':');
		      if (!unordered || arr.length <= 1) {
		        return arr.forEach(function(entry) {
		          return self.dispatch(entry);
		        });
		      }

		      // the unordered case is a little more complicated:
		      // since there is no canonical ordering on objects,
		      // i.e. {a:1} < {a:2} and {a:1} > {a:2} are both false,
		      // we first serialize each entry using a PassThrough stream
		      // before sorting.
		      // also: we can’t use the same context array for all entries
		      // since the order of hashing should *not* matter. instead,
		      // we keep track of the additions to a copy of the context array
		      // and add all of them to the global context array when we’re done
		      var contextAdditions = [];
		      var entries = arr.map(function(entry) {
		        var strm = new PassThrough();
		        var localContext = context.slice(); // make copy
		        var hasher = typeHasher(options, strm, localContext);
		        hasher.dispatch(entry);
		        // take only what was added to localContext and append it to contextAdditions
		        contextAdditions = contextAdditions.concat(localContext.slice(context.length));
		        return strm.read().toString();
		      });
		      context = context.concat(contextAdditions);
		      entries.sort();
		      return this._array(entries, false);
		    },
		    _date: function(date){
		      return write('date:' + date.toJSON());
		    },
		    _symbol: function(sym){
		      return write('symbol:' + sym.toString());
		    },
		    _error: function(err){
		      return write('error:' + err.toString());
		    },
		    _boolean: function(bool){
		      return write('bool:' + bool.toString());
		    },
		    _string: function(string){
		      write('string:' + string.length + ':');
		      write(string.toString());
		    },
		    _function: function(fn){
		      write('fn:');
		      if (isNativeFunction(fn)) {
		        this.dispatch('[native]');
		      } else {
		        this.dispatch(fn.toString());
		      }

		      if (options.respectFunctionNames !== false) {
		        // Make sure we can still distinguish native functions
		        // by their name, otherwise String and Function will
		        // have the same hash
		        this.dispatch("function-name:" + String(fn.name));
		      }

		      if (options.respectFunctionProperties) {
		        this._object(fn);
		      }
		    },
		    _number: function(number){
		      return write('number:' + number.toString());
		    },
		    _xml: function(xml){
		      return write('xml:' + xml.toString());
		    },
		    _null: function() {
		      return write('Null');
		    },
		    _undefined: function() {
		      return write('Undefined');
		    },
		    _regexp: function(regex){
		      return write('regex:' + regex.toString());
		    },
		    _uint8array: function(arr){
		      write('uint8array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _uint8clampedarray: function(arr){
		      write('uint8clampedarray:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _int8array: function(arr){
		      write('int8array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _uint16array: function(arr){
		      write('uint16array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _int16array: function(arr){
		      write('int16array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _uint32array: function(arr){
		      write('uint32array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _int32array: function(arr){
		      write('int32array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _float32array: function(arr){
		      write('float32array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _float64array: function(arr){
		      write('float64array:');
		      return this.dispatch(Array.prototype.slice.call(arr));
		    },
		    _arraybuffer: function(arr){
		      write('arraybuffer:');
		      return this.dispatch(new Uint8Array(arr));
		    },
		    _url: function(url) {
		      return write('url:' + url.toString());
		    },
		    _map: function(map) {
		      write('map:');
		      var arr = Array.from(map);
		      return this._array(arr, options.unorderedSets !== false);
		    },
		    _set: function(set) {
		      write('set:');
		      var arr = Array.from(set);
		      return this._array(arr, options.unorderedSets !== false);
		    },
		    _file: function(file) {
		      write('file:');
		      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
		    },
		    _blob: function() {
		      if (options.ignoreUnknown) {
		        return write('[blob]');
		      }

		      throw Error('Hashing Blob objects is currently not supported\n' +
		        '(see https://github.com/puleos/object-hash/issues/26)\n' +
		        'Use "options.replacer" or "options.ignoreUnknown"\n');
		    },
		    _domwindow: function() { return write('domwindow'); },
		    _bigint: function(number){
		      return write('bigint:' + number.toString());
		    },
		    /* Node.js standard native objects */
		    _process: function() { return write('process'); },
		    _timer: function() { return write('timer'); },
		    _pipe: function() { return write('pipe'); },
		    _tcp: function() { return write('tcp'); },
		    _udp: function() { return write('udp'); },
		    _tty: function() { return write('tty'); },
		    _statwatcher: function() { return write('statwatcher'); },
		    _securecontext: function() { return write('securecontext'); },
		    _connection: function() { return write('connection'); },
		    _zlib: function() { return write('zlib'); },
		    _context: function() { return write('context'); },
		    _nodescript: function() { return write('nodescript'); },
		    _httpparser: function() { return write('httpparser'); },
		    _dataview: function() { return write('dataview'); },
		    _signal: function() { return write('signal'); },
		    _fsevent: function() { return write('fsevent'); },
		    _tlswrap: function() { return write('tlswrap'); },
		  };
		}

		// Mini-implementation of stream.PassThrough
		// We are far from having need for the full implementation, and we can
		// make assumptions like "many writes, then only one final read"
		// and we can ignore encoding specifics
		function PassThrough() {
		  return {
		    buf: '',

		    write: function(b) {
		      this.buf += b;
		    },

		    end: function(b) {
		      this.buf += b;
		    },

		    read: function() {
		      return this.buf;
		    }
		  };
		} 
	} (objectHash, objectHash.exports));
	return objectHash.exports;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$1 = {exports: {}};

var moment = moment$1.exports;

var hasRequiredMoment;

function requireMoment () {
	if (hasRequiredMoment) return moment$1.exports;
	hasRequiredMoment = 1;
	(function (module, exports) {
(function (global, factory) {
		    module.exports = factory() ;
		}(moment, (function () {
		    var hookCallback;

		    function hooks() {
		        return hookCallback.apply(null, arguments);
		    }

		    // This is done to register the method called with moment()
		    // without creating circular dependencies.
		    function setHookCallback(callback) {
		        hookCallback = callback;
		    }

		    function isArray(input) {
		        return (
		            input instanceof Array ||
		            Object.prototype.toString.call(input) === '[object Array]'
		        );
		    }

		    function isObject(input) {
		        // IE8 will treat undefined and null as object if it wasn't for
		        // input != null
		        return (
		            input != null &&
		            Object.prototype.toString.call(input) === '[object Object]'
		        );
		    }

		    function hasOwnProp(a, b) {
		        return Object.prototype.hasOwnProperty.call(a, b);
		    }

		    function isObjectEmpty(obj) {
		        if (Object.getOwnPropertyNames) {
		            return Object.getOwnPropertyNames(obj).length === 0;
		        } else {
		            var k;
		            for (k in obj) {
		                if (hasOwnProp(obj, k)) {
		                    return false;
		                }
		            }
		            return true;
		        }
		    }

		    function isUndefined(input) {
		        return input === void 0;
		    }

		    function isNumber(input) {
		        return (
		            typeof input === 'number' ||
		            Object.prototype.toString.call(input) === '[object Number]'
		        );
		    }

		    function isDate(input) {
		        return (
		            input instanceof Date ||
		            Object.prototype.toString.call(input) === '[object Date]'
		        );
		    }

		    function map(arr, fn) {
		        var res = [],
		            i,
		            arrLen = arr.length;
		        for (i = 0; i < arrLen; ++i) {
		            res.push(fn(arr[i], i));
		        }
		        return res;
		    }

		    function extend(a, b) {
		        for (var i in b) {
		            if (hasOwnProp(b, i)) {
		                a[i] = b[i];
		            }
		        }

		        if (hasOwnProp(b, 'toString')) {
		            a.toString = b.toString;
		        }

		        if (hasOwnProp(b, 'valueOf')) {
		            a.valueOf = b.valueOf;
		        }

		        return a;
		    }

		    function createUTC(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, true).utc();
		    }

		    function defaultParsingFlags() {
		        // We need to deep clone this object.
		        return {
		            empty: false,
		            unusedTokens: [],
		            unusedInput: [],
		            overflow: -2,
		            charsLeftOver: 0,
		            nullInput: false,
		            invalidEra: null,
		            invalidMonth: null,
		            invalidFormat: false,
		            userInvalidated: false,
		            iso: false,
		            parsedDateParts: [],
		            era: null,
		            meridiem: null,
		            rfc2822: false,
		            weekdayMismatch: false,
		        };
		    }

		    function getParsingFlags(m) {
		        if (m._pf == null) {
		            m._pf = defaultParsingFlags();
		        }
		        return m._pf;
		    }

		    var some;
		    if (Array.prototype.some) {
		        some = Array.prototype.some;
		    } else {
		        some = function (fun) {
		            var t = Object(this),
		                len = t.length >>> 0,
		                i;

		            for (i = 0; i < len; i++) {
		                if (i in t && fun.call(this, t[i], i, t)) {
		                    return true;
		                }
		            }

		            return false;
		        };
		    }

		    function isValid(m) {
		        var flags = null,
		            parsedParts = false,
		            isNowValid = m._d && !isNaN(m._d.getTime());
		        if (isNowValid) {
		            flags = getParsingFlags(m);
		            parsedParts = some.call(flags.parsedDateParts, function (i) {
		                return i != null;
		            });
		            isNowValid =
		                flags.overflow < 0 &&
		                !flags.empty &&
		                !flags.invalidEra &&
		                !flags.invalidMonth &&
		                !flags.invalidWeekday &&
		                !flags.weekdayMismatch &&
		                !flags.nullInput &&
		                !flags.invalidFormat &&
		                !flags.userInvalidated &&
		                (!flags.meridiem || (flags.meridiem && parsedParts));
		            if (m._strict) {
		                isNowValid =
		                    isNowValid &&
		                    flags.charsLeftOver === 0 &&
		                    flags.unusedTokens.length === 0 &&
		                    flags.bigHour === undefined;
		            }
		        }
		        if (Object.isFrozen == null || !Object.isFrozen(m)) {
		            m._isValid = isNowValid;
		        } else {
		            return isNowValid;
		        }
		        return m._isValid;
		    }

		    function createInvalid(flags) {
		        var m = createUTC(NaN);
		        if (flags != null) {
		            extend(getParsingFlags(m), flags);
		        } else {
		            getParsingFlags(m).userInvalidated = true;
		        }

		        return m;
		    }

		    // Plugins that add properties should also add the key here (null value),
		    // so we can properly clone ourselves.
		    var momentProperties = (hooks.momentProperties = []),
		        updateInProgress = false;

		    function copyConfig(to, from) {
		        var i,
		            prop,
		            val,
		            momentPropertiesLen = momentProperties.length;

		        if (!isUndefined(from._isAMomentObject)) {
		            to._isAMomentObject = from._isAMomentObject;
		        }
		        if (!isUndefined(from._i)) {
		            to._i = from._i;
		        }
		        if (!isUndefined(from._f)) {
		            to._f = from._f;
		        }
		        if (!isUndefined(from._l)) {
		            to._l = from._l;
		        }
		        if (!isUndefined(from._strict)) {
		            to._strict = from._strict;
		        }
		        if (!isUndefined(from._tzm)) {
		            to._tzm = from._tzm;
		        }
		        if (!isUndefined(from._isUTC)) {
		            to._isUTC = from._isUTC;
		        }
		        if (!isUndefined(from._offset)) {
		            to._offset = from._offset;
		        }
		        if (!isUndefined(from._pf)) {
		            to._pf = getParsingFlags(from);
		        }
		        if (!isUndefined(from._locale)) {
		            to._locale = from._locale;
		        }

		        if (momentPropertiesLen > 0) {
		            for (i = 0; i < momentPropertiesLen; i++) {
		                prop = momentProperties[i];
		                val = from[prop];
		                if (!isUndefined(val)) {
		                    to[prop] = val;
		                }
		            }
		        }

		        return to;
		    }

		    // Moment prototype object
		    function Moment(config) {
		        copyConfig(this, config);
		        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		        if (!this.isValid()) {
		            this._d = new Date(NaN);
		        }
		        // Prevent infinite loop in case updateOffset creates new moment
		        // objects.
		        if (updateInProgress === false) {
		            updateInProgress = true;
		            hooks.updateOffset(this);
		            updateInProgress = false;
		        }
		    }

		    function isMoment(obj) {
		        return (
		            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
		        );
		    }

		    function warn(msg) {
		        if (
		            hooks.suppressDeprecationWarnings === false &&
		            typeof console !== 'undefined' &&
		            console.warn
		        ) {
		            console.warn('Deprecation warning: ' + msg);
		        }
		    }

		    function deprecate(msg, fn) {
		        var firstTime = true;

		        return extend(function () {
		            if (hooks.deprecationHandler != null) {
		                hooks.deprecationHandler(null, msg);
		            }
		            if (firstTime) {
		                var args = [],
		                    arg,
		                    i,
		                    key,
		                    argLen = arguments.length;
		                for (i = 0; i < argLen; i++) {
		                    arg = '';
		                    if (typeof arguments[i] === 'object') {
		                        arg += '\n[' + i + '] ';
		                        for (key in arguments[0]) {
		                            if (hasOwnProp(arguments[0], key)) {
		                                arg += key + ': ' + arguments[0][key] + ', ';
		                            }
		                        }
		                        arg = arg.slice(0, -2); // Remove trailing comma and space
		                    } else {
		                        arg = arguments[i];
		                    }
		                    args.push(arg);
		                }
		                warn(
		                    msg +
		                        '\nArguments: ' +
		                        Array.prototype.slice.call(args).join('') +
		                        '\n' +
		                        new Error().stack
		                );
		                firstTime = false;
		            }
		            return fn.apply(this, arguments);
		        }, fn);
		    }

		    var deprecations = {};

		    function deprecateSimple(name, msg) {
		        if (hooks.deprecationHandler != null) {
		            hooks.deprecationHandler(name, msg);
		        }
		        if (!deprecations[name]) {
		            warn(msg);
		            deprecations[name] = true;
		        }
		    }

		    hooks.suppressDeprecationWarnings = false;
		    hooks.deprecationHandler = null;

		    function isFunction(input) {
		        return (
		            (typeof Function !== 'undefined' && input instanceof Function) ||
		            Object.prototype.toString.call(input) === '[object Function]'
		        );
		    }

		    function set(config) {
		        var prop, i;
		        for (i in config) {
		            if (hasOwnProp(config, i)) {
		                prop = config[i];
		                if (isFunction(prop)) {
		                    this[i] = prop;
		                } else {
		                    this['_' + i] = prop;
		                }
		            }
		        }
		        this._config = config;
		        // Lenient ordinal parsing accepts just a number in addition to
		        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        this._dayOfMonthOrdinalParseLenient = new RegExp(
		            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
		                '|' +
		                /\d{1,2}/.source
		        );
		    }

		    function mergeConfigs(parentConfig, childConfig) {
		        var res = extend({}, parentConfig),
		            prop;
		        for (prop in childConfig) {
		            if (hasOwnProp(childConfig, prop)) {
		                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
		                    res[prop] = {};
		                    extend(res[prop], parentConfig[prop]);
		                    extend(res[prop], childConfig[prop]);
		                } else if (childConfig[prop] != null) {
		                    res[prop] = childConfig[prop];
		                } else {
		                    delete res[prop];
		                }
		            }
		        }
		        for (prop in parentConfig) {
		            if (
		                hasOwnProp(parentConfig, prop) &&
		                !hasOwnProp(childConfig, prop) &&
		                isObject(parentConfig[prop])
		            ) {
		                // make sure changes to properties don't modify parent config
		                res[prop] = extend({}, res[prop]);
		            }
		        }
		        return res;
		    }

		    function Locale(config) {
		        if (config != null) {
		            this.set(config);
		        }
		    }

		    var keys;

		    if (Object.keys) {
		        keys = Object.keys;
		    } else {
		        keys = function (obj) {
		            var i,
		                res = [];
		            for (i in obj) {
		                if (hasOwnProp(obj, i)) {
		                    res.push(i);
		                }
		            }
		            return res;
		        };
		    }

		    var defaultCalendar = {
		        sameDay: '[Today at] LT',
		        nextDay: '[Tomorrow at] LT',
		        nextWeek: 'dddd [at] LT',
		        lastDay: '[Yesterday at] LT',
		        lastWeek: '[Last] dddd [at] LT',
		        sameElse: 'L',
		    };

		    function calendar(key, mom, now) {
		        var output = this._calendar[key] || this._calendar['sameElse'];
		        return isFunction(output) ? output.call(mom, now) : output;
		    }

		    function zeroFill(number, targetLength, forceSign) {
		        var absNumber = '' + Math.abs(number),
		            zerosToFill = targetLength - absNumber.length,
		            sign = number >= 0;
		        return (
		            (sign ? (forceSign ? '+' : '') : '-') +
		            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
		            absNumber
		        );
		    }

		    var formattingTokens =
		            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		        formatFunctions = {},
		        formatTokenFunctions = {};

		    // token:    'M'
		    // padded:   ['MM', 2]
		    // ordinal:  'Mo'
		    // callback: function () { this.month() + 1 }
		    function addFormatToken(token, padded, ordinal, callback) {
		        var func = callback;
		        if (typeof callback === 'string') {
		            func = function () {
		                return this[callback]();
		            };
		        }
		        if (token) {
		            formatTokenFunctions[token] = func;
		        }
		        if (padded) {
		            formatTokenFunctions[padded[0]] = function () {
		                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
		            };
		        }
		        if (ordinal) {
		            formatTokenFunctions[ordinal] = function () {
		                return this.localeData().ordinal(
		                    func.apply(this, arguments),
		                    token
		                );
		            };
		        }
		    }

		    function removeFormattingTokens(input) {
		        if (input.match(/\[[\s\S]/)) {
		            return input.replace(/^\[|\]$/g, '');
		        }
		        return input.replace(/\\/g, '');
		    }

		    function makeFormatFunction(format) {
		        var array = format.match(formattingTokens),
		            i,
		            length;

		        for (i = 0, length = array.length; i < length; i++) {
		            if (formatTokenFunctions[array[i]]) {
		                array[i] = formatTokenFunctions[array[i]];
		            } else {
		                array[i] = removeFormattingTokens(array[i]);
		            }
		        }

		        return function (mom) {
		            var output = '',
		                i;
		            for (i = 0; i < length; i++) {
		                output += isFunction(array[i])
		                    ? array[i].call(mom, format)
		                    : array[i];
		            }
		            return output;
		        };
		    }

		    // format date using native date object
		    function formatMoment(m, format) {
		        if (!m.isValid()) {
		            return m.localeData().invalidDate();
		        }

		        format = expandFormat(format, m.localeData());
		        formatFunctions[format] =
		            formatFunctions[format] || makeFormatFunction(format);

		        return formatFunctions[format](m);
		    }

		    function expandFormat(format, locale) {
		        var i = 5;

		        function replaceLongDateFormatTokens(input) {
		            return locale.longDateFormat(input) || input;
		        }

		        localFormattingTokens.lastIndex = 0;
		        while (i >= 0 && localFormattingTokens.test(format)) {
		            format = format.replace(
		                localFormattingTokens,
		                replaceLongDateFormatTokens
		            );
		            localFormattingTokens.lastIndex = 0;
		            i -= 1;
		        }

		        return format;
		    }

		    var defaultLongDateFormat = {
		        LTS: 'h:mm:ss A',
		        LT: 'h:mm A',
		        L: 'MM/DD/YYYY',
		        LL: 'MMMM D, YYYY',
		        LLL: 'MMMM D, YYYY h:mm A',
		        LLLL: 'dddd, MMMM D, YYYY h:mm A',
		    };

		    function longDateFormat(key) {
		        var format = this._longDateFormat[key],
		            formatUpper = this._longDateFormat[key.toUpperCase()];

		        if (format || !formatUpper) {
		            return format;
		        }

		        this._longDateFormat[key] = formatUpper
		            .match(formattingTokens)
		            .map(function (tok) {
		                if (
		                    tok === 'MMMM' ||
		                    tok === 'MM' ||
		                    tok === 'DD' ||
		                    tok === 'dddd'
		                ) {
		                    return tok.slice(1);
		                }
		                return tok;
		            })
		            .join('');

		        return this._longDateFormat[key];
		    }

		    var defaultInvalidDate = 'Invalid date';

		    function invalidDate() {
		        return this._invalidDate;
		    }

		    var defaultOrdinal = '%d',
		        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

		    function ordinal(number) {
		        return this._ordinal.replace('%d', number);
		    }

		    var defaultRelativeTime = {
		        future: 'in %s',
		        past: '%s ago',
		        s: 'a few seconds',
		        ss: '%d seconds',
		        m: 'a minute',
		        mm: '%d minutes',
		        h: 'an hour',
		        hh: '%d hours',
		        d: 'a day',
		        dd: '%d days',
		        w: 'a week',
		        ww: '%d weeks',
		        M: 'a month',
		        MM: '%d months',
		        y: 'a year',
		        yy: '%d years',
		    };

		    function relativeTime(number, withoutSuffix, string, isFuture) {
		        var output = this._relativeTime[string];
		        return isFunction(output)
		            ? output(number, withoutSuffix, string, isFuture)
		            : output.replace(/%d/i, number);
		    }

		    function pastFuture(diff, output) {
		        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
		    }

		    var aliases = {
		        D: 'date',
		        dates: 'date',
		        date: 'date',
		        d: 'day',
		        days: 'day',
		        day: 'day',
		        e: 'weekday',
		        weekdays: 'weekday',
		        weekday: 'weekday',
		        E: 'isoWeekday',
		        isoweekdays: 'isoWeekday',
		        isoweekday: 'isoWeekday',
		        DDD: 'dayOfYear',
		        dayofyears: 'dayOfYear',
		        dayofyear: 'dayOfYear',
		        h: 'hour',
		        hours: 'hour',
		        hour: 'hour',
		        ms: 'millisecond',
		        milliseconds: 'millisecond',
		        millisecond: 'millisecond',
		        m: 'minute',
		        minutes: 'minute',
		        minute: 'minute',
		        M: 'month',
		        months: 'month',
		        month: 'month',
		        Q: 'quarter',
		        quarters: 'quarter',
		        quarter: 'quarter',
		        s: 'second',
		        seconds: 'second',
		        second: 'second',
		        gg: 'weekYear',
		        weekyears: 'weekYear',
		        weekyear: 'weekYear',
		        GG: 'isoWeekYear',
		        isoweekyears: 'isoWeekYear',
		        isoweekyear: 'isoWeekYear',
		        w: 'week',
		        weeks: 'week',
		        week: 'week',
		        W: 'isoWeek',
		        isoweeks: 'isoWeek',
		        isoweek: 'isoWeek',
		        y: 'year',
		        years: 'year',
		        year: 'year',
		    };

		    function normalizeUnits(units) {
		        return typeof units === 'string'
		            ? aliases[units] || aliases[units.toLowerCase()]
		            : undefined;
		    }

		    function normalizeObjectUnits(inputObject) {
		        var normalizedInput = {},
		            normalizedProp,
		            prop;

		        for (prop in inputObject) {
		            if (hasOwnProp(inputObject, prop)) {
		                normalizedProp = normalizeUnits(prop);
		                if (normalizedProp) {
		                    normalizedInput[normalizedProp] = inputObject[prop];
		                }
		            }
		        }

		        return normalizedInput;
		    }

		    var priorities = {
		        date: 9,
		        day: 11,
		        weekday: 11,
		        isoWeekday: 11,
		        dayOfYear: 4,
		        hour: 13,
		        millisecond: 16,
		        minute: 14,
		        month: 8,
		        quarter: 7,
		        second: 15,
		        weekYear: 1,
		        isoWeekYear: 1,
		        week: 5,
		        isoWeek: 5,
		        year: 1,
		    };

		    function getPrioritizedUnits(unitsObj) {
		        var units = [],
		            u;
		        for (u in unitsObj) {
		            if (hasOwnProp(unitsObj, u)) {
		                units.push({ unit: u, priority: priorities[u] });
		            }
		        }
		        units.sort(function (a, b) {
		            return a.priority - b.priority;
		        });
		        return units;
		    }

		    var match1 = /\d/, //       0 - 9
		        match2 = /\d\d/, //      00 - 99
		        match3 = /\d{3}/, //     000 - 999
		        match4 = /\d{4}/, //    0000 - 9999
		        match6 = /[+-]?\d{6}/, // -999999 - 999999
		        match1to2 = /\d\d?/, //       0 - 99
		        match3to4 = /\d\d\d\d?/, //     999 - 9999
		        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
		        match1to3 = /\d{1,3}/, //       0 - 999
		        match1to4 = /\d{1,4}/, //       0 - 9999
		        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
		        matchUnsigned = /\d+/, //       0 - inf
		        matchSigned = /[+-]?\d+/, //    -inf - inf
		        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
		        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
		        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
		        // any word (or two) characters or numbers including two/three word month in arabic.
		        // includes scottish gaelic two word and hyphenated months
		        matchWord =
		            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
		        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
		        regexes;

		    regexes = {};

		    function addRegexToken(token, regex, strictRegex) {
		        regexes[token] = isFunction(regex)
		            ? regex
		            : function (isStrict, localeData) {
		                  return isStrict && strictRegex ? strictRegex : regex;
		              };
		    }

		    function getParseRegexForToken(token, config) {
		        if (!hasOwnProp(regexes, token)) {
		            return new RegExp(unescapeFormat(token));
		        }

		        return regexes[token](config._strict, config._locale);
		    }

		    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
		    function unescapeFormat(s) {
		        return regexEscape(
		            s
		                .replace('\\', '')
		                .replace(
		                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
		                    function (matched, p1, p2, p3, p4) {
		                        return p1 || p2 || p3 || p4;
		                    }
		                )
		        );
		    }

		    function regexEscape(s) {
		        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		    }

		    function absFloor(number) {
		        if (number < 0) {
		            // -0 -> 0
		            return Math.ceil(number) || 0;
		        } else {
		            return Math.floor(number);
		        }
		    }

		    function toInt(argumentForCoercion) {
		        var coercedNumber = +argumentForCoercion,
		            value = 0;

		        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
		            value = absFloor(coercedNumber);
		        }

		        return value;
		    }

		    var tokens = {};

		    function addParseToken(token, callback) {
		        var i,
		            func = callback,
		            tokenLen;
		        if (typeof token === 'string') {
		            token = [token];
		        }
		        if (isNumber(callback)) {
		            func = function (input, array) {
		                array[callback] = toInt(input);
		            };
		        }
		        tokenLen = token.length;
		        for (i = 0; i < tokenLen; i++) {
		            tokens[token[i]] = func;
		        }
		    }

		    function addWeekParseToken(token, callback) {
		        addParseToken(token, function (input, array, config, token) {
		            config._w = config._w || {};
		            callback(input, config._w, config, token);
		        });
		    }

		    function addTimeToArrayFromToken(token, input, config) {
		        if (input != null && hasOwnProp(tokens, token)) {
		            tokens[token](input, config._a, config, token);
		        }
		    }

		    function isLeapYear(year) {
		        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		    }

		    var YEAR = 0,
		        MONTH = 1,
		        DATE = 2,
		        HOUR = 3,
		        MINUTE = 4,
		        SECOND = 5,
		        MILLISECOND = 6,
		        WEEK = 7,
		        WEEKDAY = 8;

		    // FORMATTING

		    addFormatToken('Y', 0, 0, function () {
		        var y = this.year();
		        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
		    });

		    addFormatToken(0, ['YY', 2], 0, function () {
		        return this.year() % 100;
		    });

		    addFormatToken(0, ['YYYY', 4], 0, 'year');
		    addFormatToken(0, ['YYYYY', 5], 0, 'year');
		    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

		    // PARSING

		    addRegexToken('Y', matchSigned);
		    addRegexToken('YY', match1to2, match2);
		    addRegexToken('YYYY', match1to4, match4);
		    addRegexToken('YYYYY', match1to6, match6);
		    addRegexToken('YYYYYY', match1to6, match6);

		    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
		    addParseToken('YYYY', function (input, array) {
		        array[YEAR] =
		            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
		    });
		    addParseToken('YY', function (input, array) {
		        array[YEAR] = hooks.parseTwoDigitYear(input);
		    });
		    addParseToken('Y', function (input, array) {
		        array[YEAR] = parseInt(input, 10);
		    });

		    // HELPERS

		    function daysInYear(year) {
		        return isLeapYear(year) ? 366 : 365;
		    }

		    // HOOKS

		    hooks.parseTwoDigitYear = function (input) {
		        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
		    };

		    // MOMENTS

		    var getSetYear = makeGetSet('FullYear', true);

		    function getIsLeapYear() {
		        return isLeapYear(this.year());
		    }

		    function makeGetSet(unit, keepTime) {
		        return function (value) {
		            if (value != null) {
		                set$1(this, unit, value);
		                hooks.updateOffset(this, keepTime);
		                return this;
		            } else {
		                return get(this, unit);
		            }
		        };
		    }

		    function get(mom, unit) {
		        if (!mom.isValid()) {
		            return NaN;
		        }

		        var d = mom._d,
		            isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
		            case 'Seconds':
		                return isUTC ? d.getUTCSeconds() : d.getSeconds();
		            case 'Minutes':
		                return isUTC ? d.getUTCMinutes() : d.getMinutes();
		            case 'Hours':
		                return isUTC ? d.getUTCHours() : d.getHours();
		            case 'Date':
		                return isUTC ? d.getUTCDate() : d.getDate();
		            case 'Day':
		                return isUTC ? d.getUTCDay() : d.getDay();
		            case 'Month':
		                return isUTC ? d.getUTCMonth() : d.getMonth();
		            case 'FullYear':
		                return isUTC ? d.getUTCFullYear() : d.getFullYear();
		            default:
		                return NaN; // Just in case
		        }
		    }

		    function set$1(mom, unit, value) {
		        var d, isUTC, year, month, date;

		        if (!mom.isValid() || isNaN(value)) {
		            return;
		        }

		        d = mom._d;
		        isUTC = mom._isUTC;

		        switch (unit) {
		            case 'Milliseconds':
		                return void (isUTC
		                    ? d.setUTCMilliseconds(value)
		                    : d.setMilliseconds(value));
		            case 'Seconds':
		                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
		            case 'Minutes':
		                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
		            case 'Hours':
		                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
		            case 'Date':
		                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
		            // case 'Day': // Not real
		            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
		            // case 'Month': // Not used because we need to pass two variables
		            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
		            case 'FullYear':
		                break; // See below ...
		            default:
		                return; // Just in case
		        }

		        year = value;
		        month = mom.month();
		        date = mom.date();
		        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
		        void (isUTC
		            ? d.setUTCFullYear(year, month, date)
		            : d.setFullYear(year, month, date));
		    }

		    // MOMENTS

		    function stringGet(units) {
		        units = normalizeUnits(units);
		        if (isFunction(this[units])) {
		            return this[units]();
		        }
		        return this;
		    }

		    function stringSet(units, value) {
		        if (typeof units === 'object') {
		            units = normalizeObjectUnits(units);
		            var prioritized = getPrioritizedUnits(units),
		                i,
		                prioritizedLen = prioritized.length;
		            for (i = 0; i < prioritizedLen; i++) {
		                this[prioritized[i].unit](units[prioritized[i].unit]);
		            }
		        } else {
		            units = normalizeUnits(units);
		            if (isFunction(this[units])) {
		                return this[units](value);
		            }
		        }
		        return this;
		    }

		    function mod(n, x) {
		        return ((n % x) + x) % x;
		    }

		    var indexOf;

		    if (Array.prototype.indexOf) {
		        indexOf = Array.prototype.indexOf;
		    } else {
		        indexOf = function (o) {
		            // I know
		            var i;
		            for (i = 0; i < this.length; ++i) {
		                if (this[i] === o) {
		                    return i;
		                }
		            }
		            return -1;
		        };
		    }

		    function daysInMonth(year, month) {
		        if (isNaN(year) || isNaN(month)) {
		            return NaN;
		        }
		        var modMonth = mod(month, 12);
		        year += (month - modMonth) / 12;
		        return modMonth === 1
		            ? isLeapYear(year)
		                ? 29
		                : 28
		            : 31 - ((modMonth % 7) % 2);
		    }

		    // FORMATTING

		    addFormatToken('M', ['MM', 2], 'Mo', function () {
		        return this.month() + 1;
		    });

		    addFormatToken('MMM', 0, 0, function (format) {
		        return this.localeData().monthsShort(this, format);
		    });

		    addFormatToken('MMMM', 0, 0, function (format) {
		        return this.localeData().months(this, format);
		    });

		    // PARSING

		    addRegexToken('M', match1to2, match1to2NoLeadingZero);
		    addRegexToken('MM', match1to2, match2);
		    addRegexToken('MMM', function (isStrict, locale) {
		        return locale.monthsShortRegex(isStrict);
		    });
		    addRegexToken('MMMM', function (isStrict, locale) {
		        return locale.monthsRegex(isStrict);
		    });

		    addParseToken(['M', 'MM'], function (input, array) {
		        array[MONTH] = toInt(input) - 1;
		    });

		    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		        var month = config._locale.monthsParse(input, token, config._strict);
		        // if we didn't find a month name, mark the date as invalid.
		        if (month != null) {
		            array[MONTH] = month;
		        } else {
		            getParsingFlags(config).invalidMonth = input;
		        }
		    });

		    // LOCALES

		    var defaultLocaleMonths =
		            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
		                '_'
		            ),
		        defaultLocaleMonthsShort =
		            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		        defaultMonthsShortRegex = matchWord,
		        defaultMonthsRegex = matchWord;

		    function localeMonths(m, format) {
		        if (!m) {
		            return isArray(this._months)
		                ? this._months
		                : this._months['standalone'];
		        }
		        return isArray(this._months)
		            ? this._months[m.month()]
		            : this._months[
		                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
		                      ? 'format'
		                      : 'standalone'
		              ][m.month()];
		    }

		    function localeMonthsShort(m, format) {
		        if (!m) {
		            return isArray(this._monthsShort)
		                ? this._monthsShort
		                : this._monthsShort['standalone'];
		        }
		        return isArray(this._monthsShort)
		            ? this._monthsShort[m.month()]
		            : this._monthsShort[
		                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
		              ][m.month()];
		    }

		    function handleStrictParse(monthName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = monthName.toLocaleLowerCase();
		        if (!this._monthsParse) {
		            // this is not used
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		            for (i = 0; i < 12; ++i) {
		                mom = createUTC([2000, i]);
		                this._shortMonthsParse[i] = this.monthsShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeMonthsParse(monthName, format, strict) {
		        var i, mom, regex;

		        if (this._monthsParseExact) {
		            return handleStrictParse.call(this, monthName, format, strict);
		        }

		        if (!this._monthsParse) {
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		        }

		        // TODO: add sorting
		        // Sorting makes sure if one month (or abbr) is a prefix of another
		        // see sorting in computeMonthsParse
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            if (strict && !this._longMonthsParse[i]) {
		                this._longMonthsParse[i] = new RegExp(
		                    '^' + this.months(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		                this._shortMonthsParse[i] = new RegExp(
		                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		            }
		            if (!strict && !this._monthsParse[i]) {
		                regex =
		                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
		                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'MMMM' &&
		                this._longMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'MMM' &&
		                this._shortMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (!strict && this._monthsParse[i].test(monthName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function setMonth(mom, value) {
		        if (!mom.isValid()) {
		            // No op
		            return mom;
		        }

		        if (typeof value === 'string') {
		            if (/^\d+$/.test(value)) {
		                value = toInt(value);
		            } else {
		                value = mom.localeData().monthsParse(value);
		                // TODO: Another silent failure?
		                if (!isNumber(value)) {
		                    return mom;
		                }
		            }
		        }

		        var month = value,
		            date = mom.date();

		        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
		        void (mom._isUTC
		            ? mom._d.setUTCMonth(month, date)
		            : mom._d.setMonth(month, date));
		        return mom;
		    }

		    function getSetMonth(value) {
		        if (value != null) {
		            setMonth(this, value);
		            hooks.updateOffset(this, true);
		            return this;
		        } else {
		            return get(this, 'Month');
		        }
		    }

		    function getDaysInMonth() {
		        return daysInMonth(this.year(), this.month());
		    }

		    function monthsShortRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsShortStrictRegex;
		            } else {
		                return this._monthsShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsShortRegex')) {
		                this._monthsShortRegex = defaultMonthsShortRegex;
		            }
		            return this._monthsShortStrictRegex && isStrict
		                ? this._monthsShortStrictRegex
		                : this._monthsShortRegex;
		        }
		    }

		    function monthsRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsStrictRegex;
		            } else {
		                return this._monthsRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                this._monthsRegex = defaultMonthsRegex;
		            }
		            return this._monthsStrictRegex && isStrict
		                ? this._monthsStrictRegex
		                : this._monthsRegex;
		        }
		    }

		    function computeMonthsParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            shortP,
		            longP;
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            shortP = regexEscape(this.monthsShort(mom, ''));
		            longP = regexEscape(this.months(mom, ''));
		            shortPieces.push(shortP);
		            longPieces.push(longP);
		            mixedPieces.push(longP);
		            mixedPieces.push(shortP);
		        }
		        // Sorting makes sure if one month (or abbr) is a prefix of another it
		        // will match the longer piece.
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._monthsShortRegex = this._monthsRegex;
		        this._monthsStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._monthsShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		    }

		    function createDate(y, m, d, h, M, s, ms) {
		        // can't just apply() to create a date:
		        // https://stackoverflow.com/q/181348
		        var date;
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            date = new Date(y + 400, m, d, h, M, s, ms);
		            if (isFinite(date.getFullYear())) {
		                date.setFullYear(y);
		            }
		        } else {
		            date = new Date(y, m, d, h, M, s, ms);
		        }

		        return date;
		    }

		    function createUTCDate(y) {
		        var date, args;
		        // the Date.UTC function remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            args = Array.prototype.slice.call(arguments);
		            // preserve leap years using a full 400 year cycle, then reset
		            args[0] = y + 400;
		            date = new Date(Date.UTC.apply(null, args));
		            if (isFinite(date.getUTCFullYear())) {
		                date.setUTCFullYear(y);
		            }
		        } else {
		            date = new Date(Date.UTC.apply(null, arguments));
		        }

		        return date;
		    }

		    // start-of-first-week - start-of-year
		    function firstWeekOffset(year, dow, doy) {
		        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
		            fwd = 7 + dow - doy,
		            // first-week day local weekday -- which local weekday is fwd
		            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		        return -fwdlw + fwd - 1;
		    }

		    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
		    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		        var localWeekday = (7 + weekday - dow) % 7,
		            weekOffset = firstWeekOffset(year, dow, doy),
		            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
		            resYear,
		            resDayOfYear;

		        if (dayOfYear <= 0) {
		            resYear = year - 1;
		            resDayOfYear = daysInYear(resYear) + dayOfYear;
		        } else if (dayOfYear > daysInYear(year)) {
		            resYear = year + 1;
		            resDayOfYear = dayOfYear - daysInYear(year);
		        } else {
		            resYear = year;
		            resDayOfYear = dayOfYear;
		        }

		        return {
		            year: resYear,
		            dayOfYear: resDayOfYear,
		        };
		    }

		    function weekOfYear(mom, dow, doy) {
		        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
		            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
		            resWeek,
		            resYear;

		        if (week < 1) {
		            resYear = mom.year() - 1;
		            resWeek = week + weeksInYear(resYear, dow, doy);
		        } else if (week > weeksInYear(mom.year(), dow, doy)) {
		            resWeek = week - weeksInYear(mom.year(), dow, doy);
		            resYear = mom.year() + 1;
		        } else {
		            resYear = mom.year();
		            resWeek = week;
		        }

		        return {
		            week: resWeek,
		            year: resYear,
		        };
		    }

		    function weeksInYear(year, dow, doy) {
		        var weekOffset = firstWeekOffset(year, dow, doy),
		            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
		    }

		    // FORMATTING

		    addFormatToken('w', ['ww', 2], 'wo', 'week');
		    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

		    // PARSING

		    addRegexToken('w', match1to2, match1to2NoLeadingZero);
		    addRegexToken('ww', match1to2, match2);
		    addRegexToken('W', match1to2, match1to2NoLeadingZero);
		    addRegexToken('WW', match1to2, match2);

		    addWeekParseToken(
		        ['w', 'ww', 'W', 'WW'],
		        function (input, week, config, token) {
		            week[token.substr(0, 1)] = toInt(input);
		        }
		    );

		    // HELPERS

		    // LOCALES

		    function localeWeek(mom) {
		        return weekOfYear(mom, this._week.dow, this._week.doy).week;
		    }

		    var defaultLocaleWeek = {
		        dow: 0, // Sunday is the first day of the week.
		        doy: 6, // The week that contains Jan 6th is the first week of the year.
		    };

		    function localeFirstDayOfWeek() {
		        return this._week.dow;
		    }

		    function localeFirstDayOfYear() {
		        return this._week.doy;
		    }

		    // MOMENTS

		    function getSetWeek(input) {
		        var week = this.localeData().week(this);
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    function getSetISOWeek(input) {
		        var week = weekOfYear(this, 1, 4).week;
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    // FORMATTING

		    addFormatToken('d', 0, 'do', 'day');

		    addFormatToken('dd', 0, 0, function (format) {
		        return this.localeData().weekdaysMin(this, format);
		    });

		    addFormatToken('ddd', 0, 0, function (format) {
		        return this.localeData().weekdaysShort(this, format);
		    });

		    addFormatToken('dddd', 0, 0, function (format) {
		        return this.localeData().weekdays(this, format);
		    });

		    addFormatToken('e', 0, 0, 'weekday');
		    addFormatToken('E', 0, 0, 'isoWeekday');

		    // PARSING

		    addRegexToken('d', match1to2);
		    addRegexToken('e', match1to2);
		    addRegexToken('E', match1to2);
		    addRegexToken('dd', function (isStrict, locale) {
		        return locale.weekdaysMinRegex(isStrict);
		    });
		    addRegexToken('ddd', function (isStrict, locale) {
		        return locale.weekdaysShortRegex(isStrict);
		    });
		    addRegexToken('dddd', function (isStrict, locale) {
		        return locale.weekdaysRegex(isStrict);
		    });

		    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		        var weekday = config._locale.weekdaysParse(input, token, config._strict);
		        // if we didn't get a weekday name, mark the date as invalid
		        if (weekday != null) {
		            week.d = weekday;
		        } else {
		            getParsingFlags(config).invalidWeekday = input;
		        }
		    });

		    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		        week[token] = toInt(input);
		    });

		    // HELPERS

		    function parseWeekday(input, locale) {
		        if (typeof input !== 'string') {
		            return input;
		        }

		        if (!isNaN(input)) {
		            return parseInt(input, 10);
		        }

		        input = locale.weekdaysParse(input);
		        if (typeof input === 'number') {
		            return input;
		        }

		        return null;
		    }

		    function parseIsoWeekday(input, locale) {
		        if (typeof input === 'string') {
		            return locale.weekdaysParse(input) % 7 || 7;
		        }
		        return isNaN(input) ? null : input;
		    }

		    // LOCALES
		    function shiftWeekdays(ws, n) {
		        return ws.slice(n, 7).concat(ws.slice(0, n));
		    }

		    var defaultLocaleWeekdays =
		            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		        defaultWeekdaysRegex = matchWord,
		        defaultWeekdaysShortRegex = matchWord,
		        defaultWeekdaysMinRegex = matchWord;

		    function localeWeekdays(m, format) {
		        var weekdays = isArray(this._weekdays)
		            ? this._weekdays
		            : this._weekdays[
		                  m && m !== true && this._weekdays.isFormat.test(format)
		                      ? 'format'
		                      : 'standalone'
		              ];
		        return m === true
		            ? shiftWeekdays(weekdays, this._week.dow)
		            : m
		              ? weekdays[m.day()]
		              : weekdays;
		    }

		    function localeWeekdaysShort(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
		            : m
		              ? this._weekdaysShort[m.day()]
		              : this._weekdaysShort;
		    }

		    function localeWeekdaysMin(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
		            : m
		              ? this._weekdaysMin[m.day()]
		              : this._weekdaysMin;
		    }

		    function handleStrictParse$1(weekdayName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = weekdayName.toLocaleLowerCase();
		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._minWeekdaysParse = [];

		            for (i = 0; i < 7; ++i) {
		                mom = createUTC([2000, 1]).day(i);
		                this._minWeekdaysParse[i] = this.weekdaysMin(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._shortWeekdaysParse[i] = this.weekdaysShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeWeekdaysParse(weekdayName, format, strict) {
		        var i, mom, regex;

		        if (this._weekdaysParseExact) {
		            return handleStrictParse$1.call(this, weekdayName, format, strict);
		        }

		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._minWeekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._fullWeekdaysParse = [];
		        }

		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already

		            mom = createUTC([2000, 1]).day(i);
		            if (strict && !this._fullWeekdaysParse[i]) {
		                this._fullWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._shortWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._minWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		            }
		            if (!this._weekdaysParse[i]) {
		                regex =
		                    '^' +
		                    this.weekdays(mom, '') +
		                    '|^' +
		                    this.weekdaysShort(mom, '') +
		                    '|^' +
		                    this.weekdaysMin(mom, '');
		                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'dddd' &&
		                this._fullWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'ddd' &&
		                this._shortWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'dd' &&
		                this._minWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function getSetDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        var day = get(this, 'Day');
		        if (input != null) {
		            input = parseWeekday(input, this.localeData());
		            return this.add(input - day, 'd');
		        } else {
		            return day;
		        }
		    }

		    function getSetLocaleDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		        return input == null ? weekday : this.add(input - weekday, 'd');
		    }

		    function getSetISODayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        // behaves the same as moment#day except
		        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		        // as a setter, sunday should belong to the previous week.

		        if (input != null) {
		            var weekday = parseIsoWeekday(input, this.localeData());
		            return this.day(this.day() % 7 ? weekday : weekday - 7);
		        } else {
		            return this.day() || 7;
		        }
		    }

		    function weekdaysRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysStrictRegex;
		            } else {
		                return this._weekdaysRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                this._weekdaysRegex = defaultWeekdaysRegex;
		            }
		            return this._weekdaysStrictRegex && isStrict
		                ? this._weekdaysStrictRegex
		                : this._weekdaysRegex;
		        }
		    }

		    function weekdaysShortRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysShortStrictRegex;
		            } else {
		                return this._weekdaysShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
		                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
		            }
		            return this._weekdaysShortStrictRegex && isStrict
		                ? this._weekdaysShortStrictRegex
		                : this._weekdaysShortRegex;
		        }
		    }

		    function weekdaysMinRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysMinStrictRegex;
		            } else {
		                return this._weekdaysMinRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
		                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
		            }
		            return this._weekdaysMinStrictRegex && isStrict
		                ? this._weekdaysMinStrictRegex
		                : this._weekdaysMinRegex;
		        }
		    }

		    function computeWeekdaysParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var minPieces = [],
		            shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            minp,
		            shortp,
		            longp;
		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, 1]).day(i);
		            minp = regexEscape(this.weekdaysMin(mom, ''));
		            shortp = regexEscape(this.weekdaysShort(mom, ''));
		            longp = regexEscape(this.weekdays(mom, ''));
		            minPieces.push(minp);
		            shortPieces.push(shortp);
		            longPieces.push(longp);
		            mixedPieces.push(minp);
		            mixedPieces.push(shortp);
		            mixedPieces.push(longp);
		        }
		        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
		        // will match the longer piece.
		        minPieces.sort(cmpLenRev);
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._weekdaysShortRegex = this._weekdaysRegex;
		        this._weekdaysMinRegex = this._weekdaysRegex;

		        this._weekdaysStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysMinStrictRegex = new RegExp(
		            '^(' + minPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    function hFormat() {
		        return this.hours() % 12 || 12;
		    }

		    function kFormat() {
		        return this.hours() || 24;
		    }

		    addFormatToken('H', ['HH', 2], 0, 'hour');
		    addFormatToken('h', ['hh', 2], 0, hFormat);
		    addFormatToken('k', ['kk', 2], 0, kFormat);

		    addFormatToken('hmm', 0, 0, function () {
		        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('hmmss', 0, 0, function () {
		        return (
		            '' +
		            hFormat.apply(this) +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    addFormatToken('Hmm', 0, 0, function () {
		        return '' + this.hours() + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('Hmmss', 0, 0, function () {
		        return (
		            '' +
		            this.hours() +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    function meridiem(token, lowercase) {
		        addFormatToken(token, 0, 0, function () {
		            return this.localeData().meridiem(
		                this.hours(),
		                this.minutes(),
		                lowercase
		            );
		        });
		    }

		    meridiem('a', true);
		    meridiem('A', false);

		    // PARSING

		    function matchMeridiem(isStrict, locale) {
		        return locale._meridiemParse;
		    }

		    addRegexToken('a', matchMeridiem);
		    addRegexToken('A', matchMeridiem);
		    addRegexToken('H', match1to2, match1to2HasZero);
		    addRegexToken('h', match1to2, match1to2NoLeadingZero);
		    addRegexToken('k', match1to2, match1to2NoLeadingZero);
		    addRegexToken('HH', match1to2, match2);
		    addRegexToken('hh', match1to2, match2);
		    addRegexToken('kk', match1to2, match2);

		    addRegexToken('hmm', match3to4);
		    addRegexToken('hmmss', match5to6);
		    addRegexToken('Hmm', match3to4);
		    addRegexToken('Hmmss', match5to6);

		    addParseToken(['H', 'HH'], HOUR);
		    addParseToken(['k', 'kk'], function (input, array, config) {
		        var kInput = toInt(input);
		        array[HOUR] = kInput === 24 ? 0 : kInput;
		    });
		    addParseToken(['a', 'A'], function (input, array, config) {
		        config._isPm = config._locale.isPM(input);
		        config._meridiem = input;
		    });
		    addParseToken(['h', 'hh'], function (input, array, config) {
		        array[HOUR] = toInt(input);
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('Hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		    });
		    addParseToken('Hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		    });

		    // LOCALES

		    function localeIsPM(input) {
		        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		        // Using charAt should be more compatible.
		        return (input + '').toLowerCase().charAt(0) === 'p';
		    }

		    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
		        // Setting the hour should keep the time, because the user explicitly
		        // specified which hour they want. So trying to maintain the same hour (in
		        // a new timezone) makes sense. Adding/subtracting hours does not follow
		        // this rule.
		        getSetHour = makeGetSet('Hours', true);

		    function localeMeridiem(hours, minutes, isLower) {
		        if (hours > 11) {
		            return isLower ? 'pm' : 'PM';
		        } else {
		            return isLower ? 'am' : 'AM';
		        }
		    }

		    var baseConfig = {
		        calendar: defaultCalendar,
		        longDateFormat: defaultLongDateFormat,
		        invalidDate: defaultInvalidDate,
		        ordinal: defaultOrdinal,
		        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
		        relativeTime: defaultRelativeTime,

		        months: defaultLocaleMonths,
		        monthsShort: defaultLocaleMonthsShort,

		        week: defaultLocaleWeek,

		        weekdays: defaultLocaleWeekdays,
		        weekdaysMin: defaultLocaleWeekdaysMin,
		        weekdaysShort: defaultLocaleWeekdaysShort,

		        meridiemParse: defaultLocaleMeridiemParse,
		    };

		    // internal storage for locale config files
		    var locales = {},
		        localeFamilies = {},
		        globalLocale;

		    function commonPrefix(arr1, arr2) {
		        var i,
		            minl = Math.min(arr1.length, arr2.length);
		        for (i = 0; i < minl; i += 1) {
		            if (arr1[i] !== arr2[i]) {
		                return i;
		            }
		        }
		        return minl;
		    }

		    function normalizeLocale(key) {
		        return key ? key.toLowerCase().replace('_', '-') : key;
		    }

		    // pick the locale from the array
		    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
		    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
		    function chooseLocale(names) {
		        var i = 0,
		            j,
		            next,
		            locale,
		            split;

		        while (i < names.length) {
		            split = normalizeLocale(names[i]).split('-');
		            j = split.length;
		            next = normalizeLocale(names[i + 1]);
		            next = next ? next.split('-') : null;
		            while (j > 0) {
		                locale = loadLocale(split.slice(0, j).join('-'));
		                if (locale) {
		                    return locale;
		                }
		                if (
		                    next &&
		                    next.length >= j &&
		                    commonPrefix(split, next) >= j - 1
		                ) {
		                    //the next array item is better than a shallower substring of this one
		                    break;
		                }
		                j--;
		            }
		            i++;
		        }
		        return globalLocale;
		    }

		    function isLocaleNameSane(name) {
		        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
		        // Ensure name is available and function returns boolean
		        return !!(name && name.match('^[^/\\\\]*$'));
		    }

		    function loadLocale(name) {
		        var oldLocale = null,
		            aliasedRequire;
		        // TODO: Find a better way to register and load all the locales in Node
		        if (
		            locales[name] === undefined &&
		            'object' !== 'undefined' &&
		            module &&
		            module.exports &&
		            isLocaleNameSane(name)
		        ) {
		            try {
		                oldLocale = globalLocale._abbr;
		                aliasedRequire = commonjsRequire;
		                aliasedRequire('./locale/' + name);
		                getSetGlobalLocale(oldLocale);
		            } catch (e) {
		                // mark as not found to avoid repeating expensive file require call causing high CPU
		                // when trying to find en-US, en_US, en-us for every format call
		                locales[name] = null; // null means not found
		            }
		        }
		        return locales[name];
		    }

		    // This function will load locale and then set the global locale.  If
		    // no arguments are passed in, it will simply return the current global
		    // locale key.
		    function getSetGlobalLocale(key, values) {
		        var data;
		        if (key) {
		            if (isUndefined(values)) {
		                data = getLocale(key);
		            } else {
		                data = defineLocale(key, values);
		            }

		            if (data) {
		                // moment.duration._locale = moment._locale = data;
		                globalLocale = data;
		            } else {
		                if (typeof console !== 'undefined' && console.warn) {
		                    //warn user if arguments are passed but the locale could not be set
		                    console.warn(
		                        'Locale ' + key + ' not found. Did you forget to load it?'
		                    );
		                }
		            }
		        }

		        return globalLocale._abbr;
		    }

		    function defineLocale(name, config) {
		        if (config !== null) {
		            var locale,
		                parentConfig = baseConfig;
		            config.abbr = name;
		            if (locales[name] != null) {
		                deprecateSimple(
		                    'defineLocaleOverride',
		                    'use moment.updateLocale(localeName, config) to change ' +
		                        'an existing locale. moment.defineLocale(localeName, ' +
		                        'config) should only be used for creating a new locale ' +
		                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
		                );
		                parentConfig = locales[name]._config;
		            } else if (config.parentLocale != null) {
		                if (locales[config.parentLocale] != null) {
		                    parentConfig = locales[config.parentLocale]._config;
		                } else {
		                    locale = loadLocale(config.parentLocale);
		                    if (locale != null) {
		                        parentConfig = locale._config;
		                    } else {
		                        if (!localeFamilies[config.parentLocale]) {
		                            localeFamilies[config.parentLocale] = [];
		                        }
		                        localeFamilies[config.parentLocale].push({
		                            name: name,
		                            config: config,
		                        });
		                        return null;
		                    }
		                }
		            }
		            locales[name] = new Locale(mergeConfigs(parentConfig, config));

		            if (localeFamilies[name]) {
		                localeFamilies[name].forEach(function (x) {
		                    defineLocale(x.name, x.config);
		                });
		            }

		            // backwards compat for now: also set the locale
		            // make sure we set the locale AFTER all child locales have been
		            // created, so we won't end up with the child locale set.
		            getSetGlobalLocale(name);

		            return locales[name];
		        } else {
		            // useful for testing
		            delete locales[name];
		            return null;
		        }
		    }

		    function updateLocale(name, config) {
		        if (config != null) {
		            var locale,
		                tmpLocale,
		                parentConfig = baseConfig;

		            if (locales[name] != null && locales[name].parentLocale != null) {
		                // Update existing child locale in-place to avoid memory-leaks
		                locales[name].set(mergeConfigs(locales[name]._config, config));
		            } else {
		                // MERGE
		                tmpLocale = loadLocale(name);
		                if (tmpLocale != null) {
		                    parentConfig = tmpLocale._config;
		                }
		                config = mergeConfigs(parentConfig, config);
		                if (tmpLocale == null) {
		                    // updateLocale is called for creating a new locale
		                    // Set abbr so it will have a name (getters return
		                    // undefined otherwise).
		                    config.abbr = name;
		                }
		                locale = new Locale(config);
		                locale.parentLocale = locales[name];
		                locales[name] = locale;
		            }

		            // backwards compat for now: also set the locale
		            getSetGlobalLocale(name);
		        } else {
		            // pass null for config to unupdate, useful for tests
		            if (locales[name] != null) {
		                if (locales[name].parentLocale != null) {
		                    locales[name] = locales[name].parentLocale;
		                    if (name === getSetGlobalLocale()) {
		                        getSetGlobalLocale(name);
		                    }
		                } else if (locales[name] != null) {
		                    delete locales[name];
		                }
		            }
		        }
		        return locales[name];
		    }

		    // returns locale data
		    function getLocale(key) {
		        var locale;

		        if (key && key._locale && key._locale._abbr) {
		            key = key._locale._abbr;
		        }

		        if (!key) {
		            return globalLocale;
		        }

		        if (!isArray(key)) {
		            //short-circuit everything else
		            locale = loadLocale(key);
		            if (locale) {
		                return locale;
		            }
		            key = [key];
		        }

		        return chooseLocale(key);
		    }

		    function listLocales() {
		        return keys(locales);
		    }

		    function checkOverflow(m) {
		        var overflow,
		            a = m._a;

		        if (a && getParsingFlags(m).overflow === -2) {
		            overflow =
		                a[MONTH] < 0 || a[MONTH] > 11
		                    ? MONTH
		                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
		                      ? DATE
		                      : a[HOUR] < 0 ||
		                          a[HOUR] > 24 ||
		                          (a[HOUR] === 24 &&
		                              (a[MINUTE] !== 0 ||
		                                  a[SECOND] !== 0 ||
		                                  a[MILLISECOND] !== 0))
		                        ? HOUR
		                        : a[MINUTE] < 0 || a[MINUTE] > 59
		                          ? MINUTE
		                          : a[SECOND] < 0 || a[SECOND] > 59
		                            ? SECOND
		                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
		                              ? MILLISECOND
		                              : -1;

		            if (
		                getParsingFlags(m)._overflowDayOfYear &&
		                (overflow < YEAR || overflow > DATE)
		            ) {
		                overflow = DATE;
		            }
		            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
		                overflow = WEEK;
		            }
		            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
		                overflow = WEEKDAY;
		            }

		            getParsingFlags(m).overflow = overflow;
		        }

		        return m;
		    }

		    // iso 8601 regex
		    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
		    var extendedIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        basicIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
		        isoDates = [
		            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
		            ['YYYY-DDD', /\d{4}-\d{3}/],
		            ['YYYY-MM', /\d{4}-\d\d/, false],
		            ['YYYYYYMMDD', /[+-]\d{10}/],
		            ['YYYYMMDD', /\d{8}/],
		            ['GGGG[W]WWE', /\d{4}W\d{3}/],
		            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
		            ['YYYYDDD', /\d{7}/],
		            ['YYYYMM', /\d{6}/, false],
		            ['YYYY', /\d{4}/, false],
		        ],
		        // iso time formats and regexes
		        isoTimes = [
		            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
		            ['HH:mm', /\d\d:\d\d/],
		            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		            ['HHmmss', /\d\d\d\d\d\d/],
		            ['HHmm', /\d\d\d\d/],
		            ['HH', /\d\d/],
		        ],
		        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
		        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
		        rfc2822 =
		            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		        obsOffsets = {
		            UT: 0,
		            GMT: 0,
		            EDT: -4 * 60,
		            EST: -5 * 60,
		            CDT: -5 * 60,
		            CST: -6 * 60,
		            MDT: -6 * 60,
		            MST: -7 * 60,
		            PDT: -7 * 60,
		            PST: -8 * 60,
		        };

		    // date from iso format
		    function configFromISO(config) {
		        var i,
		            l,
		            string = config._i,
		            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
		            allowTime,
		            dateFormat,
		            timeFormat,
		            tzFormat,
		            isoDatesLen = isoDates.length,
		            isoTimesLen = isoTimes.length;

		        if (match) {
		            getParsingFlags(config).iso = true;
		            for (i = 0, l = isoDatesLen; i < l; i++) {
		                if (isoDates[i][1].exec(match[1])) {
		                    dateFormat = isoDates[i][0];
		                    allowTime = isoDates[i][2] !== false;
		                    break;
		                }
		            }
		            if (dateFormat == null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[3]) {
		                for (i = 0, l = isoTimesLen; i < l; i++) {
		                    if (isoTimes[i][1].exec(match[3])) {
		                        // match[2] should be 'T' or space
		                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
		                        break;
		                    }
		                }
		                if (timeFormat == null) {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            if (!allowTime && timeFormat != null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[4]) {
		                if (tzRegex.exec(match[4])) {
		                    tzFormat = 'Z';
		                } else {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
		            configFromStringAndFormat(config);
		        } else {
		            config._isValid = false;
		        }
		    }

		    function extractFromRFC2822Strings(
		        yearStr,
		        monthStr,
		        dayStr,
		        hourStr,
		        minuteStr,
		        secondStr
		    ) {
		        var result = [
		            untruncateYear(yearStr),
		            defaultLocaleMonthsShort.indexOf(monthStr),
		            parseInt(dayStr, 10),
		            parseInt(hourStr, 10),
		            parseInt(minuteStr, 10),
		        ];

		        if (secondStr) {
		            result.push(parseInt(secondStr, 10));
		        }

		        return result;
		    }

		    function untruncateYear(yearStr) {
		        var year = parseInt(yearStr, 10);
		        if (year <= 49) {
		            return 2000 + year;
		        } else if (year <= 999) {
		            return 1900 + year;
		        }
		        return year;
		    }

		    function preprocessRFC2822(s) {
		        // Remove comments and folding whitespace and replace multiple-spaces with a single space
		        return s
		            .replace(/\([^()]*\)|[\n\t]/g, ' ')
		            .replace(/(\s\s+)/g, ' ')
		            .replace(/^\s\s*/, '')
		            .replace(/\s\s*$/, '');
		    }

		    function checkWeekday(weekdayStr, parsedInput, config) {
		        if (weekdayStr) {
		            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
		            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
		                weekdayActual = new Date(
		                    parsedInput[0],
		                    parsedInput[1],
		                    parsedInput[2]
		                ).getDay();
		            if (weekdayProvided !== weekdayActual) {
		                getParsingFlags(config).weekdayMismatch = true;
		                config._isValid = false;
		                return false;
		            }
		        }
		        return true;
		    }

		    function calculateOffset(obsOffset, militaryOffset, numOffset) {
		        if (obsOffset) {
		            return obsOffsets[obsOffset];
		        } else if (militaryOffset) {
		            // the only allowed military tz is Z
		            return 0;
		        } else {
		            var hm = parseInt(numOffset, 10),
		                m = hm % 100,
		                h = (hm - m) / 100;
		            return h * 60 + m;
		        }
		    }

		    // date and time from ref 2822 format
		    function configFromRFC2822(config) {
		        var match = rfc2822.exec(preprocessRFC2822(config._i)),
		            parsedArray;
		        if (match) {
		            parsedArray = extractFromRFC2822Strings(
		                match[4],
		                match[3],
		                match[2],
		                match[5],
		                match[6],
		                match[7]
		            );
		            if (!checkWeekday(match[1], parsedArray, config)) {
		                return;
		            }

		            config._a = parsedArray;
		            config._tzm = calculateOffset(match[8], match[9], match[10]);

		            config._d = createUTCDate.apply(null, config._a);
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

		            getParsingFlags(config).rfc2822 = true;
		        } else {
		            config._isValid = false;
		        }
		    }

		    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
		    function configFromString(config) {
		        var matched = aspNetJsonRegex.exec(config._i);
		        if (matched !== null) {
		            config._d = new Date(+matched[1]);
		            return;
		        }

		        configFromISO(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        configFromRFC2822(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        if (config._strict) {
		            config._isValid = false;
		        } else {
		            // Final attempt, use Input Fallback
		            hooks.createFromInputFallback(config);
		        }
		    }

		    hooks.createFromInputFallback = deprecate(
		        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
		            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
		            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		        function (config) {
		            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		        }
		    );

		    // Pick the first defined of two or three arguments.
		    function defaults(a, b, c) {
		        if (a != null) {
		            return a;
		        }
		        if (b != null) {
		            return b;
		        }
		        return c;
		    }

		    function currentDateArray(config) {
		        // hooks is actually the exported moment object
		        var nowValue = new Date(hooks.now());
		        if (config._useUTC) {
		            return [
		                nowValue.getUTCFullYear(),
		                nowValue.getUTCMonth(),
		                nowValue.getUTCDate(),
		            ];
		        }
		        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
		    }

		    // convert an array to a date.
		    // the array should mirror the parameters below
		    // note: all values past the year are optional and will default to the lowest possible value.
		    // [year, month, day , hour, minute, second, millisecond]
		    function configFromArray(config) {
		        var i,
		            date,
		            input = [],
		            currentDate,
		            expectedWeekday,
		            yearToUse;

		        if (config._d) {
		            return;
		        }

		        currentDate = currentDateArray(config);

		        //compute day of the year from weeks and weekdays
		        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
		            dayOfYearFromWeekInfo(config);
		        }

		        //if the day of the year is set, figure out what it is
		        if (config._dayOfYear != null) {
		            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

		            if (
		                config._dayOfYear > daysInYear(yearToUse) ||
		                config._dayOfYear === 0
		            ) {
		                getParsingFlags(config)._overflowDayOfYear = true;
		            }

		            date = createUTCDate(yearToUse, 0, config._dayOfYear);
		            config._a[MONTH] = date.getUTCMonth();
		            config._a[DATE] = date.getUTCDate();
		        }

		        // Default to current date.
		        // * if no year, month, day of month are given, default to today
		        // * if day of month is given, default month and year
		        // * if month is given, default only year
		        // * if year is given, don't default anything
		        for (i = 0; i < 3 && config._a[i] == null; ++i) {
		            config._a[i] = input[i] = currentDate[i];
		        }

		        // Zero out whatever was not defaulted, including time
		        for (; i < 7; i++) {
		            config._a[i] = input[i] =
		                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
		        }

		        // Check for 24:00:00.000
		        if (
		            config._a[HOUR] === 24 &&
		            config._a[MINUTE] === 0 &&
		            config._a[SECOND] === 0 &&
		            config._a[MILLISECOND] === 0
		        ) {
		            config._nextDay = true;
		            config._a[HOUR] = 0;
		        }

		        config._d = (config._useUTC ? createUTCDate : createDate).apply(
		            null,
		            input
		        );
		        expectedWeekday = config._useUTC
		            ? config._d.getUTCDay()
		            : config._d.getDay();

		        // Apply timezone offset from input. The actual utcOffset can be changed
		        // with parseZone.
		        if (config._tzm != null) {
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		        }

		        if (config._nextDay) {
		            config._a[HOUR] = 24;
		        }

		        // check for mismatching day of week
		        if (
		            config._w &&
		            typeof config._w.d !== 'undefined' &&
		            config._w.d !== expectedWeekday
		        ) {
		            getParsingFlags(config).weekdayMismatch = true;
		        }
		    }

		    function dayOfYearFromWeekInfo(config) {
		        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

		        w = config._w;
		        if (w.GG != null || w.W != null || w.E != null) {
		            dow = 1;
		            doy = 4;

		            // TODO: We need to take the current isoWeekYear, but that depends on
		            // how we interpret now (local, utc, fixed offset). So create
		            // a now version of current config (take local/utc/offset flags, and
		            // create now).
		            weekYear = defaults(
		                w.GG,
		                config._a[YEAR],
		                weekOfYear(createLocal(), 1, 4).year
		            );
		            week = defaults(w.W, 1);
		            weekday = defaults(w.E, 1);
		            if (weekday < 1 || weekday > 7) {
		                weekdayOverflow = true;
		            }
		        } else {
		            dow = config._locale._week.dow;
		            doy = config._locale._week.doy;

		            curWeek = weekOfYear(createLocal(), dow, doy);

		            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

		            // Default to current week.
		            week = defaults(w.w, curWeek.week);

		            if (w.d != null) {
		                // weekday -- low day numbers are considered next week
		                weekday = w.d;
		                if (weekday < 0 || weekday > 6) {
		                    weekdayOverflow = true;
		                }
		            } else if (w.e != null) {
		                // local weekday -- counting starts from beginning of week
		                weekday = w.e + dow;
		                if (w.e < 0 || w.e > 6) {
		                    weekdayOverflow = true;
		                }
		            } else {
		                // default to beginning of week
		                weekday = dow;
		            }
		        }
		        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
		            getParsingFlags(config)._overflowWeeks = true;
		        } else if (weekdayOverflow != null) {
		            getParsingFlags(config)._overflowWeekday = true;
		        } else {
		            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
		            config._a[YEAR] = temp.year;
		            config._dayOfYear = temp.dayOfYear;
		        }
		    }

		    // constant that refers to the ISO standard
		    hooks.ISO_8601 = function () {};

		    // constant that refers to the RFC 2822 form
		    hooks.RFC_2822 = function () {};

		    // date from string and format string
		    function configFromStringAndFormat(config) {
		        // TODO: Move this to another part of the creation flow to prevent circular deps
		        if (config._f === hooks.ISO_8601) {
		            configFromISO(config);
		            return;
		        }
		        if (config._f === hooks.RFC_2822) {
		            configFromRFC2822(config);
		            return;
		        }
		        config._a = [];
		        getParsingFlags(config).empty = true;

		        // This array is used to make a Date, either with `new Date` or `Date.UTC`
		        var string = '' + config._i,
		            i,
		            parsedInput,
		            tokens,
		            token,
		            skipped,
		            stringLength = string.length,
		            totalParsedInputLength = 0,
		            era,
		            tokenLen;

		        tokens =
		            expandFormat(config._f, config._locale).match(formattingTokens) || [];
		        tokenLen = tokens.length;
		        for (i = 0; i < tokenLen; i++) {
		            token = tokens[i];
		            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
		                [])[0];
		            if (parsedInput) {
		                skipped = string.substr(0, string.indexOf(parsedInput));
		                if (skipped.length > 0) {
		                    getParsingFlags(config).unusedInput.push(skipped);
		                }
		                string = string.slice(
		                    string.indexOf(parsedInput) + parsedInput.length
		                );
		                totalParsedInputLength += parsedInput.length;
		            }
		            // don't parse if it's not a known token
		            if (formatTokenFunctions[token]) {
		                if (parsedInput) {
		                    getParsingFlags(config).empty = false;
		                } else {
		                    getParsingFlags(config).unusedTokens.push(token);
		                }
		                addTimeToArrayFromToken(token, parsedInput, config);
		            } else if (config._strict && !parsedInput) {
		                getParsingFlags(config).unusedTokens.push(token);
		            }
		        }

		        // add remaining unparsed input length to the string
		        getParsingFlags(config).charsLeftOver =
		            stringLength - totalParsedInputLength;
		        if (string.length > 0) {
		            getParsingFlags(config).unusedInput.push(string);
		        }

		        // clear _12h flag if hour is <= 12
		        if (
		            config._a[HOUR] <= 12 &&
		            getParsingFlags(config).bigHour === true &&
		            config._a[HOUR] > 0
		        ) {
		            getParsingFlags(config).bigHour = undefined;
		        }

		        getParsingFlags(config).parsedDateParts = config._a.slice(0);
		        getParsingFlags(config).meridiem = config._meridiem;
		        // handle meridiem
		        config._a[HOUR] = meridiemFixWrap(
		            config._locale,
		            config._a[HOUR],
		            config._meridiem
		        );

		        // handle era
		        era = getParsingFlags(config).era;
		        if (era !== null) {
		            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
		        }

		        configFromArray(config);
		        checkOverflow(config);
		    }

		    function meridiemFixWrap(locale, hour, meridiem) {
		        var isPm;

		        if (meridiem == null) {
		            // nothing to do
		            return hour;
		        }
		        if (locale.meridiemHour != null) {
		            return locale.meridiemHour(hour, meridiem);
		        } else if (locale.isPM != null) {
		            // Fallback
		            isPm = locale.isPM(meridiem);
		            if (isPm && hour < 12) {
		                hour += 12;
		            }
		            if (!isPm && hour === 12) {
		                hour = 0;
		            }
		            return hour;
		        } else {
		            // this is not supposed to happen
		            return hour;
		        }
		    }

		    // date from string and array of format strings
		    function configFromStringAndArray(config) {
		        var tempConfig,
		            bestMoment,
		            scoreToBeat,
		            i,
		            currentScore,
		            validFormatFound,
		            bestFormatIsValid = false,
		            configfLen = config._f.length;

		        if (configfLen === 0) {
		            getParsingFlags(config).invalidFormat = true;
		            config._d = new Date(NaN);
		            return;
		        }

		        for (i = 0; i < configfLen; i++) {
		            currentScore = 0;
		            validFormatFound = false;
		            tempConfig = copyConfig({}, config);
		            if (config._useUTC != null) {
		                tempConfig._useUTC = config._useUTC;
		            }
		            tempConfig._f = config._f[i];
		            configFromStringAndFormat(tempConfig);

		            if (isValid(tempConfig)) {
		                validFormatFound = true;
		            }

		            // if there is any input that was not parsed add a penalty for that format
		            currentScore += getParsingFlags(tempConfig).charsLeftOver;

		            //or tokens
		            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

		            getParsingFlags(tempConfig).score = currentScore;

		            if (!bestFormatIsValid) {
		                if (
		                    scoreToBeat == null ||
		                    currentScore < scoreToBeat ||
		                    validFormatFound
		                ) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                    if (validFormatFound) {
		                        bestFormatIsValid = true;
		                    }
		                }
		            } else {
		                if (currentScore < scoreToBeat) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                }
		            }
		        }

		        extend(config, bestMoment || tempConfig);
		    }

		    function configFromObject(config) {
		        if (config._d) {
		            return;
		        }

		        var i = normalizeObjectUnits(config._i),
		            dayOrDate = i.day === undefined ? i.date : i.day;
		        config._a = map(
		            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
		            function (obj) {
		                return obj && parseInt(obj, 10);
		            }
		        );

		        configFromArray(config);
		    }

		    function createFromConfig(config) {
		        var res = new Moment(checkOverflow(prepareConfig(config)));
		        if (res._nextDay) {
		            // Adding is smart enough around DST
		            res.add(1, 'd');
		            res._nextDay = undefined;
		        }

		        return res;
		    }

		    function prepareConfig(config) {
		        var input = config._i,
		            format = config._f;

		        config._locale = config._locale || getLocale(config._l);

		        if (input === null || (format === undefined && input === '')) {
		            return createInvalid({ nullInput: true });
		        }

		        if (typeof input === 'string') {
		            config._i = input = config._locale.preparse(input);
		        }

		        if (isMoment(input)) {
		            return new Moment(checkOverflow(input));
		        } else if (isDate(input)) {
		            config._d = input;
		        } else if (isArray(format)) {
		            configFromStringAndArray(config);
		        } else if (format) {
		            configFromStringAndFormat(config);
		        } else {
		            configFromInput(config);
		        }

		        if (!isValid(config)) {
		            config._d = null;
		        }

		        return config;
		    }

		    function configFromInput(config) {
		        var input = config._i;
		        if (isUndefined(input)) {
		            config._d = new Date(hooks.now());
		        } else if (isDate(input)) {
		            config._d = new Date(input.valueOf());
		        } else if (typeof input === 'string') {
		            configFromString(config);
		        } else if (isArray(input)) {
		            config._a = map(input.slice(0), function (obj) {
		                return parseInt(obj, 10);
		            });
		            configFromArray(config);
		        } else if (isObject(input)) {
		            configFromObject(config);
		        } else if (isNumber(input)) {
		            // from milliseconds
		            config._d = new Date(input);
		        } else {
		            hooks.createFromInputFallback(config);
		        }
		    }

		    function createLocalOrUTC(input, format, locale, strict, isUTC) {
		        var c = {};

		        if (format === true || format === false) {
		            strict = format;
		            format = undefined;
		        }

		        if (locale === true || locale === false) {
		            strict = locale;
		            locale = undefined;
		        }

		        if (
		            (isObject(input) && isObjectEmpty(input)) ||
		            (isArray(input) && input.length === 0)
		        ) {
		            input = undefined;
		        }
		        // object construction must be done this way.
		        // https://github.com/moment/moment/issues/1423
		        c._isAMomentObject = true;
		        c._useUTC = c._isUTC = isUTC;
		        c._l = locale;
		        c._i = input;
		        c._f = format;
		        c._strict = strict;

		        return createFromConfig(c);
		    }

		    function createLocal(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, false);
		    }

		    var prototypeMin = deprecate(
		            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other < this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        ),
		        prototypeMax = deprecate(
		            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other > this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        );

		    // Pick a moment m from moments so that m[fn](other) is true for all
		    // other. This relies on the function fn to be transitive.
		    //
		    // moments should either be an array of moment objects or an array, whose
		    // first element is an array of moment objects.
		    function pickBy(fn, moments) {
		        var res, i;
		        if (moments.length === 1 && isArray(moments[0])) {
		            moments = moments[0];
		        }
		        if (!moments.length) {
		            return createLocal();
		        }
		        res = moments[0];
		        for (i = 1; i < moments.length; ++i) {
		            if (!moments[i].isValid() || moments[i][fn](res)) {
		                res = moments[i];
		            }
		        }
		        return res;
		    }

		    // TODO: Use [].sort instead?
		    function min() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isBefore', args);
		    }

		    function max() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isAfter', args);
		    }

		    var now = function () {
		        return Date.now ? Date.now() : +new Date();
		    };

		    var ordering = [
		        'year',
		        'quarter',
		        'month',
		        'week',
		        'day',
		        'hour',
		        'minute',
		        'second',
		        'millisecond',
		    ];

		    function isDurationValid(m) {
		        var key,
		            unitHasDecimal = false,
		            i,
		            orderLen = ordering.length;
		        for (key in m) {
		            if (
		                hasOwnProp(m, key) &&
		                !(
		                    indexOf.call(ordering, key) !== -1 &&
		                    (m[key] == null || !isNaN(m[key]))
		                )
		            ) {
		                return false;
		            }
		        }

		        for (i = 0; i < orderLen; ++i) {
		            if (m[ordering[i]]) {
		                if (unitHasDecimal) {
		                    return false; // only allow non-integers for smallest unit
		                }
		                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
		                    unitHasDecimal = true;
		                }
		            }
		        }

		        return true;
		    }

		    function isValid$1() {
		        return this._isValid;
		    }

		    function createInvalid$1() {
		        return createDuration(NaN);
		    }

		    function Duration(duration) {
		        var normalizedInput = normalizeObjectUnits(duration),
		            years = normalizedInput.year || 0,
		            quarters = normalizedInput.quarter || 0,
		            months = normalizedInput.month || 0,
		            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
		            days = normalizedInput.day || 0,
		            hours = normalizedInput.hour || 0,
		            minutes = normalizedInput.minute || 0,
		            seconds = normalizedInput.second || 0,
		            milliseconds = normalizedInput.millisecond || 0;

		        this._isValid = isDurationValid(normalizedInput);

		        // representation for dateAddRemove
		        this._milliseconds =
		            +milliseconds +
		            seconds * 1e3 + // 1000
		            minutes * 6e4 + // 1000 * 60
		            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		        // Because of dateAddRemove treats 24 hours as different from a
		        // day when working around DST, we need to store them separately
		        this._days = +days + weeks * 7;
		        // It is impossible to translate months into days without knowing
		        // which months you are are talking about, so we have to store
		        // it separately.
		        this._months = +months + quarters * 3 + years * 12;

		        this._data = {};

		        this._locale = getLocale();

		        this._bubble();
		    }

		    function isDuration(obj) {
		        return obj instanceof Duration;
		    }

		    function absRound(number) {
		        if (number < 0) {
		            return Math.round(-1 * number) * -1;
		        } else {
		            return Math.round(number);
		        }
		    }

		    // compare two arrays, return the number of differences
		    function compareArrays(array1, array2, dontConvert) {
		        var len = Math.min(array1.length, array2.length),
		            lengthDiff = Math.abs(array1.length - array2.length),
		            diffs = 0,
		            i;
		        for (i = 0; i < len; i++) {
		            if (
		                (toInt(array1[i]) !== toInt(array2[i]))
		            ) {
		                diffs++;
		            }
		        }
		        return diffs + lengthDiff;
		    }

		    // FORMATTING

		    function offset(token, separator) {
		        addFormatToken(token, 0, 0, function () {
		            var offset = this.utcOffset(),
		                sign = '+';
		            if (offset < 0) {
		                offset = -offset;
		                sign = '-';
		            }
		            return (
		                sign +
		                zeroFill(~~(offset / 60), 2) +
		                separator +
		                zeroFill(~~offset % 60, 2)
		            );
		        });
		    }

		    offset('Z', ':');
		    offset('ZZ', '');

		    // PARSING

		    addRegexToken('Z', matchShortOffset);
		    addRegexToken('ZZ', matchShortOffset);
		    addParseToken(['Z', 'ZZ'], function (input, array, config) {
		        config._useUTC = true;
		        config._tzm = offsetFromString(matchShortOffset, input);
		    });

		    // HELPERS

		    // timezone chunker
		    // '+10:00' > ['10',  '00']
		    // '-1530'  > ['-15', '30']
		    var chunkOffset = /([\+\-]|\d\d)/gi;

		    function offsetFromString(matcher, string) {
		        var matches = (string || '').match(matcher),
		            chunk,
		            parts,
		            minutes;

		        if (matches === null) {
		            return null;
		        }

		        chunk = matches[matches.length - 1] || [];
		        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		        minutes = +(parts[1] * 60) + toInt(parts[2]);

		        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
		    }

		    // Return a moment from input, that is local/utc/zone equivalent to model.
		    function cloneWithOffset(input, model) {
		        var res, diff;
		        if (model._isUTC) {
		            res = model.clone();
		            diff =
		                (isMoment(input) || isDate(input)
		                    ? input.valueOf()
		                    : createLocal(input).valueOf()) - res.valueOf();
		            // Use low-level api, because this fn is low-level api.
		            res._d.setTime(res._d.valueOf() + diff);
		            hooks.updateOffset(res, false);
		            return res;
		        } else {
		            return createLocal(input).local();
		        }
		    }

		    function getDateOffset(m) {
		        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
		        // https://github.com/moment/moment/pull/1871
		        return -Math.round(m._d.getTimezoneOffset());
		    }

		    // HOOKS

		    // This function will be called whenever a moment is mutated.
		    // It is intended to keep the offset in sync with the timezone.
		    hooks.updateOffset = function () {};

		    // MOMENTS

		    // keepLocalTime = true means only change the timezone, without
		    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
		    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
		    // +0200, so we adjust the time as needed, to be valid.
		    //
		    // Keeping the time actually adds/subtracts (one hour)
		    // from the actual represented time. That is why we call updateOffset
		    // a second time. In case it wants us to change the offset again
		    // _changeInProgress == true case, then we have to adjust, because
		    // there is no such time in the given timezone.
		    function getSetOffset(input, keepLocalTime, keepMinutes) {
		        var offset = this._offset || 0,
		            localAdjust;
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        if (input != null) {
		            if (typeof input === 'string') {
		                input = offsetFromString(matchShortOffset, input);
		                if (input === null) {
		                    return this;
		                }
		            } else if (Math.abs(input) < 16 && !keepMinutes) {
		                input = input * 60;
		            }
		            if (!this._isUTC && keepLocalTime) {
		                localAdjust = getDateOffset(this);
		            }
		            this._offset = input;
		            this._isUTC = true;
		            if (localAdjust != null) {
		                this.add(localAdjust, 'm');
		            }
		            if (offset !== input) {
		                if (!keepLocalTime || this._changeInProgress) {
		                    addSubtract(
		                        this,
		                        createDuration(input - offset, 'm'),
		                        1,
		                        false
		                    );
		                } else if (!this._changeInProgress) {
		                    this._changeInProgress = true;
		                    hooks.updateOffset(this, true);
		                    this._changeInProgress = null;
		                }
		            }
		            return this;
		        } else {
		            return this._isUTC ? offset : getDateOffset(this);
		        }
		    }

		    function getSetZone(input, keepLocalTime) {
		        if (input != null) {
		            if (typeof input !== 'string') {
		                input = -input;
		            }

		            this.utcOffset(input, keepLocalTime);

		            return this;
		        } else {
		            return -this.utcOffset();
		        }
		    }

		    function setOffsetToUTC(keepLocalTime) {
		        return this.utcOffset(0, keepLocalTime);
		    }

		    function setOffsetToLocal(keepLocalTime) {
		        if (this._isUTC) {
		            this.utcOffset(0, keepLocalTime);
		            this._isUTC = false;

		            if (keepLocalTime) {
		                this.subtract(getDateOffset(this), 'm');
		            }
		        }
		        return this;
		    }

		    function setOffsetToParsedOffset() {
		        if (this._tzm != null) {
		            this.utcOffset(this._tzm, false, true);
		        } else if (typeof this._i === 'string') {
		            var tZone = offsetFromString(matchOffset, this._i);
		            if (tZone != null) {
		                this.utcOffset(tZone);
		            } else {
		                this.utcOffset(0, true);
		            }
		        }
		        return this;
		    }

		    function hasAlignedHourOffset(input) {
		        if (!this.isValid()) {
		            return false;
		        }
		        input = input ? createLocal(input).utcOffset() : 0;

		        return (this.utcOffset() - input) % 60 === 0;
		    }

		    function isDaylightSavingTime() {
		        return (
		            this.utcOffset() > this.clone().month(0).utcOffset() ||
		            this.utcOffset() > this.clone().month(5).utcOffset()
		        );
		    }

		    function isDaylightSavingTimeShifted() {
		        if (!isUndefined(this._isDSTShifted)) {
		            return this._isDSTShifted;
		        }

		        var c = {},
		            other;

		        copyConfig(c, this);
		        c = prepareConfig(c);

		        if (c._a) {
		            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
		            this._isDSTShifted =
		                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
		        } else {
		            this._isDSTShifted = false;
		        }

		        return this._isDSTShifted;
		    }

		    function isLocal() {
		        return this.isValid() ? !this._isUTC : false;
		    }

		    function isUtcOffset() {
		        return this.isValid() ? this._isUTC : false;
		    }

		    function isUtc() {
		        return this.isValid() ? this._isUTC && this._offset === 0 : false;
		    }

		    // ASP.NET json date format regex
		    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
		        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
		        // and further modified to allow for strings containing both week and day
		        isoRegex =
		            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		    function createDuration(input, key) {
		        var duration = input,
		            // matching against regexp is expensive, do it on demand
		            match = null,
		            sign,
		            ret,
		            diffRes;

		        if (isDuration(input)) {
		            duration = {
		                ms: input._milliseconds,
		                d: input._days,
		                M: input._months,
		            };
		        } else if (isNumber(input) || !isNaN(+input)) {
		            duration = {};
		            if (key) {
		                duration[key] = +input;
		            } else {
		                duration.milliseconds = +input;
		            }
		        } else if ((match = aspNetRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: 0,
		                d: toInt(match[DATE]) * sign,
		                h: toInt(match[HOUR]) * sign,
		                m: toInt(match[MINUTE]) * sign,
		                s: toInt(match[SECOND]) * sign,
		                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
		            };
		        } else if ((match = isoRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: parseIso(match[2], sign),
		                M: parseIso(match[3], sign),
		                w: parseIso(match[4], sign),
		                d: parseIso(match[5], sign),
		                h: parseIso(match[6], sign),
		                m: parseIso(match[7], sign),
		                s: parseIso(match[8], sign),
		            };
		        } else if (duration == null) {
		            // checks for null or undefined
		            duration = {};
		        } else if (
		            typeof duration === 'object' &&
		            ('from' in duration || 'to' in duration)
		        ) {
		            diffRes = momentsDifference(
		                createLocal(duration.from),
		                createLocal(duration.to)
		            );

		            duration = {};
		            duration.ms = diffRes.milliseconds;
		            duration.M = diffRes.months;
		        }

		        ret = new Duration(duration);

		        if (isDuration(input) && hasOwnProp(input, '_locale')) {
		            ret._locale = input._locale;
		        }

		        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
		            ret._isValid = input._isValid;
		        }

		        return ret;
		    }

		    createDuration.fn = Duration.prototype;
		    createDuration.invalid = createInvalid$1;

		    function parseIso(inp, sign) {
		        // We'd normally use ~~inp for this, but unfortunately it also
		        // converts floats to ints.
		        // inp may be undefined, so careful calling replace on it.
		        var res = inp && parseFloat(inp.replace(',', '.'));
		        // apply sign while we're at it
		        return (isNaN(res) ? 0 : res) * sign;
		    }

		    function positiveMomentsDifference(base, other) {
		        var res = {};

		        res.months =
		            other.month() - base.month() + (other.year() - base.year()) * 12;
		        if (base.clone().add(res.months, 'M').isAfter(other)) {
		            --res.months;
		        }

		        res.milliseconds = +other - +base.clone().add(res.months, 'M');

		        return res;
		    }

		    function momentsDifference(base, other) {
		        var res;
		        if (!(base.isValid() && other.isValid())) {
		            return { milliseconds: 0, months: 0 };
		        }

		        other = cloneWithOffset(other, base);
		        if (base.isBefore(other)) {
		            res = positiveMomentsDifference(base, other);
		        } else {
		            res = positiveMomentsDifference(other, base);
		            res.milliseconds = -res.milliseconds;
		            res.months = -res.months;
		        }

		        return res;
		    }

		    // TODO: remove 'name' arg after deprecation is removed
		    function createAdder(direction, name) {
		        return function (val, period) {
		            var dur, tmp;
		            //invert the arguments, but complain about it
		            if (period !== null && !isNaN(+period)) {
		                deprecateSimple(
		                    name,
		                    'moment().' +
		                        name +
		                        '(period, number) is deprecated. Please use moment().' +
		                        name +
		                        '(number, period). ' +
		                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
		                );
		                tmp = val;
		                val = period;
		                period = tmp;
		            }

		            dur = createDuration(val, period);
		            addSubtract(this, dur, direction);
		            return this;
		        };
		    }

		    function addSubtract(mom, duration, isAdding, updateOffset) {
		        var milliseconds = duration._milliseconds,
		            days = absRound(duration._days),
		            months = absRound(duration._months);

		        if (!mom.isValid()) {
		            // No op
		            return;
		        }

		        updateOffset = updateOffset == null ? true : updateOffset;

		        if (months) {
		            setMonth(mom, get(mom, 'Month') + months * isAdding);
		        }
		        if (days) {
		            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
		        }
		        if (milliseconds) {
		            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		        }
		        if (updateOffset) {
		            hooks.updateOffset(mom, days || months);
		        }
		    }

		    var add = createAdder(1, 'add'),
		        subtract = createAdder(-1, 'subtract');

		    function isString(input) {
		        return typeof input === 'string' || input instanceof String;
		    }

		    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
		    function isMomentInput(input) {
		        return (
		            isMoment(input) ||
		            isDate(input) ||
		            isString(input) ||
		            isNumber(input) ||
		            isNumberOrStringArray(input) ||
		            isMomentInputObject(input) ||
		            input === null ||
		            input === undefined
		        );
		    }

		    function isMomentInputObject(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'years',
		                'year',
		                'y',
		                'months',
		                'month',
		                'M',
		                'days',
		                'day',
		                'd',
		                'dates',
		                'date',
		                'D',
		                'hours',
		                'hour',
		                'h',
		                'minutes',
		                'minute',
		                'm',
		                'seconds',
		                'second',
		                's',
		                'milliseconds',
		                'millisecond',
		                'ms',
		            ],
		            i,
		            property,
		            propertyLen = properties.length;

		        for (i = 0; i < propertyLen; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function isNumberOrStringArray(input) {
		        var arrayTest = isArray(input),
		            dataTypeTest = false;
		        if (arrayTest) {
		            dataTypeTest =
		                input.filter(function (item) {
		                    return !isNumber(item) && isString(input);
		                }).length === 0;
		        }
		        return arrayTest && dataTypeTest;
		    }

		    function isCalendarSpec(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'sameDay',
		                'nextDay',
		                'lastDay',
		                'nextWeek',
		                'lastWeek',
		                'sameElse',
		            ],
		            i,
		            property;

		        for (i = 0; i < properties.length; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function getCalendarFormat(myMoment, now) {
		        var diff = myMoment.diff(now, 'days', true);
		        return diff < -6
		            ? 'sameElse'
		            : diff < -1
		              ? 'lastWeek'
		              : diff < 0
		                ? 'lastDay'
		                : diff < 1
		                  ? 'sameDay'
		                  : diff < 2
		                    ? 'nextDay'
		                    : diff < 7
		                      ? 'nextWeek'
		                      : 'sameElse';
		    }

		    function calendar$1(time, formats) {
		        // Support for single parameter, formats only overload to the calendar function
		        if (arguments.length === 1) {
		            if (!arguments[0]) {
		                time = undefined;
		                formats = undefined;
		            } else if (isMomentInput(arguments[0])) {
		                time = arguments[0];
		                formats = undefined;
		            } else if (isCalendarSpec(arguments[0])) {
		                formats = arguments[0];
		                time = undefined;
		            }
		        }
		        // We want to compare the start of today, vs this.
		        // Getting start-of-today depends on whether we're local/utc/offset or not.
		        var now = time || createLocal(),
		            sod = cloneWithOffset(now, this).startOf('day'),
		            format = hooks.calendarFormat(this, sod) || 'sameElse',
		            output =
		                formats &&
		                (isFunction(formats[format])
		                    ? formats[format].call(this, now)
		                    : formats[format]);

		        return this.format(
		            output || this.localeData().calendar(format, this, createLocal(now))
		        );
		    }

		    function clone() {
		        return new Moment(this);
		    }

		    function isAfter(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() > localInput.valueOf();
		        } else {
		            return localInput.valueOf() < this.clone().startOf(units).valueOf();
		        }
		    }

		    function isBefore(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() < localInput.valueOf();
		        } else {
		            return this.clone().endOf(units).valueOf() < localInput.valueOf();
		        }
		    }

		    function isBetween(from, to, units, inclusivity) {
		        var localFrom = isMoment(from) ? from : createLocal(from),
		            localTo = isMoment(to) ? to : createLocal(to);
		        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
		            return false;
		        }
		        inclusivity = inclusivity || '()';
		        return (
		            (inclusivity[0] === '('
		                ? this.isAfter(localFrom, units)
		                : !this.isBefore(localFrom, units)) &&
		            (inclusivity[1] === ')'
		                ? this.isBefore(localTo, units)
		                : !this.isAfter(localTo, units))
		        );
		    }

		    function isSame(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input),
		            inputMs;
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() === localInput.valueOf();
		        } else {
		            inputMs = localInput.valueOf();
		            return (
		                this.clone().startOf(units).valueOf() <= inputMs &&
		                inputMs <= this.clone().endOf(units).valueOf()
		            );
		        }
		    }

		    function isSameOrAfter(input, units) {
		        return this.isSame(input, units) || this.isAfter(input, units);
		    }

		    function isSameOrBefore(input, units) {
		        return this.isSame(input, units) || this.isBefore(input, units);
		    }

		    function diff(input, units, asFloat) {
		        var that, zoneDelta, output;

		        if (!this.isValid()) {
		            return NaN;
		        }

		        that = cloneWithOffset(input, this);

		        if (!that.isValid()) {
		            return NaN;
		        }

		        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		        units = normalizeUnits(units);

		        switch (units) {
		            case 'year':
		                output = monthDiff(this, that) / 12;
		                break;
		            case 'month':
		                output = monthDiff(this, that);
		                break;
		            case 'quarter':
		                output = monthDiff(this, that) / 3;
		                break;
		            case 'second':
		                output = (this - that) / 1e3;
		                break; // 1000
		            case 'minute':
		                output = (this - that) / 6e4;
		                break; // 1000 * 60
		            case 'hour':
		                output = (this - that) / 36e5;
		                break; // 1000 * 60 * 60
		            case 'day':
		                output = (this - that - zoneDelta) / 864e5;
		                break; // 1000 * 60 * 60 * 24, negate dst
		            case 'week':
		                output = (this - that - zoneDelta) / 6048e5;
		                break; // 1000 * 60 * 60 * 24 * 7, negate dst
		            default:
		                output = this - that;
		        }

		        return asFloat ? output : absFloor(output);
		    }

		    function monthDiff(a, b) {
		        if (a.date() < b.date()) {
		            // end-of-month calculations work correct when the start month has more
		            // days than the end month.
		            return -monthDiff(b, a);
		        }
		        // difference in months
		        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
		            // b is in (anchor - 1 month, anchor + 1 month)
		            anchor = a.clone().add(wholeMonthDiff, 'months'),
		            anchor2,
		            adjust;

		        if (b - anchor < 0) {
		            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor - anchor2);
		        } else {
		            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor2 - anchor);
		        }

		        //check for negative zero, return zero if negative zero
		        return -(wholeMonthDiff + adjust) || 0;
		    }

		    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
		    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

		    function toString() {
		        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
		    }

		    function toISOString(keepOffset) {
		        if (!this.isValid()) {
		            return null;
		        }
		        var utc = keepOffset !== true,
		            m = utc ? this.clone().utc() : this;
		        if (m.year() < 0 || m.year() > 9999) {
		            return formatMoment(
		                m,
		                utc
		                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
		                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
		            );
		        }
		        if (isFunction(Date.prototype.toISOString)) {
		            // native implementation is ~50x faster, use it when we can
		            if (utc) {
		                return this.toDate().toISOString();
		            } else {
		                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
		                    .toISOString()
		                    .replace('Z', formatMoment(m, 'Z'));
		            }
		        }
		        return formatMoment(
		            m,
		            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
		        );
		    }

		    /**
		     * Return a human readable representation of a moment that can
		     * also be evaluated to get a new moment which is the same
		     *
		     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
		     */
		    function inspect() {
		        if (!this.isValid()) {
		            return 'moment.invalid(/* ' + this._i + ' */)';
		        }
		        var func = 'moment',
		            zone = '',
		            prefix,
		            year,
		            datetime,
		            suffix;
		        if (!this.isLocal()) {
		            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
		            zone = 'Z';
		        }
		        prefix = '[' + func + '("]';
		        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
		        datetime = '-MM-DD[T]HH:mm:ss.SSS';
		        suffix = zone + '[")]';

		        return this.format(prefix + year + datetime + suffix);
		    }

		    function format(inputString) {
		        if (!inputString) {
		            inputString = this.isUtc()
		                ? hooks.defaultFormatUtc
		                : hooks.defaultFormat;
		        }
		        var output = formatMoment(this, inputString);
		        return this.localeData().postformat(output);
		    }

		    function from(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ to: this, from: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function fromNow(withoutSuffix) {
		        return this.from(createLocal(), withoutSuffix);
		    }

		    function to(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ from: this, to: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function toNow(withoutSuffix) {
		        return this.to(createLocal(), withoutSuffix);
		    }

		    // If passed a locale key, it will set the locale for this
		    // instance.  Otherwise, it will return the locale configuration
		    // variables for this instance.
		    function locale(key) {
		        var newLocaleData;

		        if (key === undefined) {
		            return this._locale._abbr;
		        } else {
		            newLocaleData = getLocale(key);
		            if (newLocaleData != null) {
		                this._locale = newLocaleData;
		            }
		            return this;
		        }
		    }

		    var lang = deprecate(
		        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		        function (key) {
		            if (key === undefined) {
		                return this.localeData();
		            } else {
		                return this.locale(key);
		            }
		        }
		    );

		    function localeData() {
		        return this._locale;
		    }

		    var MS_PER_SECOND = 1000,
		        MS_PER_MINUTE = 60 * MS_PER_SECOND,
		        MS_PER_HOUR = 60 * MS_PER_MINUTE,
		        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

		    // actual modulo - handles negative numbers (for dates before 1970):
		    function mod$1(dividend, divisor) {
		        return ((dividend % divisor) + divisor) % divisor;
		    }

		    function localStartOfDate(y, m, d) {
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return new Date(y, m, d).valueOf();
		        }
		    }

		    function utcStartOfDate(y, m, d) {
		        // Date.UTC remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return Date.UTC(y, m, d);
		        }
		    }

		    function startOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year(), 0, 1);
		                break;
		            case 'quarter':
		                time = startOfDate(
		                    this.year(),
		                    this.month() - (this.month() % 3),
		                    1
		                );
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month(), 1);
		                break;
		            case 'week':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - this.weekday()
		                );
		                break;
		            case 'isoWeek':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - (this.isoWeekday() - 1)
		                );
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date());
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time -= mod$1(
		                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                    MS_PER_HOUR
		                );
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_MINUTE);
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_SECOND);
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function endOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year() + 1, 0, 1) - 1;
		                break;
		            case 'quarter':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month() - (this.month() % 3) + 3,
		                        1
		                    ) - 1;
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
		                break;
		            case 'week':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - this.weekday() + 7
		                    ) - 1;
		                break;
		            case 'isoWeek':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - (this.isoWeekday() - 1) + 7
		                    ) - 1;
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time +=
		                    MS_PER_HOUR -
		                    mod$1(
		                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                        MS_PER_HOUR
		                    ) -
		                    1;
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function valueOf() {
		        return this._d.valueOf() - (this._offset || 0) * 60000;
		    }

		    function unix() {
		        return Math.floor(this.valueOf() / 1000);
		    }

		    function toDate() {
		        return new Date(this.valueOf());
		    }

		    function toArray() {
		        var m = this;
		        return [
		            m.year(),
		            m.month(),
		            m.date(),
		            m.hour(),
		            m.minute(),
		            m.second(),
		            m.millisecond(),
		        ];
		    }

		    function toObject() {
		        var m = this;
		        return {
		            years: m.year(),
		            months: m.month(),
		            date: m.date(),
		            hours: m.hours(),
		            minutes: m.minutes(),
		            seconds: m.seconds(),
		            milliseconds: m.milliseconds(),
		        };
		    }

		    function toJSON() {
		        // new Date(NaN).toJSON() === null
		        return this.isValid() ? this.toISOString() : null;
		    }

		    function isValid$2() {
		        return isValid(this);
		    }

		    function parsingFlags() {
		        return extend({}, getParsingFlags(this));
		    }

		    function invalidAt() {
		        return getParsingFlags(this).overflow;
		    }

		    function creationData() {
		        return {
		            input: this._i,
		            format: this._f,
		            locale: this._locale,
		            isUTC: this._isUTC,
		            strict: this._strict,
		        };
		    }

		    addFormatToken('N', 0, 0, 'eraAbbr');
		    addFormatToken('NN', 0, 0, 'eraAbbr');
		    addFormatToken('NNN', 0, 0, 'eraAbbr');
		    addFormatToken('NNNN', 0, 0, 'eraName');
		    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

		    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
		    addFormatToken('y', ['yy', 2], 0, 'eraYear');
		    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
		    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

		    addRegexToken('N', matchEraAbbr);
		    addRegexToken('NN', matchEraAbbr);
		    addRegexToken('NNN', matchEraAbbr);
		    addRegexToken('NNNN', matchEraName);
		    addRegexToken('NNNNN', matchEraNarrow);

		    addParseToken(
		        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
		        function (input, array, config, token) {
		            var era = config._locale.erasParse(input, token, config._strict);
		            if (era) {
		                getParsingFlags(config).era = era;
		            } else {
		                getParsingFlags(config).invalidEra = input;
		            }
		        }
		    );

		    addRegexToken('y', matchUnsigned);
		    addRegexToken('yy', matchUnsigned);
		    addRegexToken('yyy', matchUnsigned);
		    addRegexToken('yyyy', matchUnsigned);
		    addRegexToken('yo', matchEraYearOrdinal);

		    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
		    addParseToken(['yo'], function (input, array, config, token) {
		        var match;
		        if (config._locale._eraYearOrdinalRegex) {
		            match = input.match(config._locale._eraYearOrdinalRegex);
		        }

		        if (config._locale.eraYearOrdinalParse) {
		            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
		        } else {
		            array[YEAR] = parseInt(input, 10);
		        }
		    });

		    function localeEras(m, format) {
		        var i,
		            l,
		            date,
		            eras = this._eras || getLocale('en')._eras;
		        for (i = 0, l = eras.length; i < l; ++i) {
		            switch (typeof eras[i].since) {
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].since).startOf('day');
		                    eras[i].since = date.valueOf();
		                    break;
		            }

		            switch (typeof eras[i].until) {
		                case 'undefined':
		                    eras[i].until = +Infinity;
		                    break;
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].until).startOf('day').valueOf();
		                    eras[i].until = date.valueOf();
		                    break;
		            }
		        }
		        return eras;
		    }

		    function localeErasParse(eraName, format, strict) {
		        var i,
		            l,
		            eras = this.eras(),
		            name,
		            abbr,
		            narrow;
		        eraName = eraName.toUpperCase();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            name = eras[i].name.toUpperCase();
		            abbr = eras[i].abbr.toUpperCase();
		            narrow = eras[i].narrow.toUpperCase();

		            if (strict) {
		                switch (format) {
		                    case 'N':
		                    case 'NN':
		                    case 'NNN':
		                        if (abbr === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNN':
		                        if (name === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNNN':
		                        if (narrow === eraName) {
		                            return eras[i];
		                        }
		                        break;
		                }
		            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
		                return eras[i];
		            }
		        }
		    }

		    function localeErasConvertYear(era, year) {
		        var dir = era.since <= era.until ? +1 : -1;
		        if (year === undefined) {
		            return hooks(era.since).year();
		        } else {
		            return hooks(era.since).year() + (year - era.offset) * dir;
		        }
		    }

		    function getEraName() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].name;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].name;
		            }
		        }

		        return '';
		    }

		    function getEraNarrow() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].narrow;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].narrow;
		            }
		        }

		        return '';
		    }

		    function getEraAbbr() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].abbr;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].abbr;
		            }
		        }

		        return '';
		    }

		    function getEraYear() {
		        var i,
		            l,
		            dir,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            dir = eras[i].since <= eras[i].until ? +1 : -1;

		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (
		                (eras[i].since <= val && val <= eras[i].until) ||
		                (eras[i].until <= val && val <= eras[i].since)
		            ) {
		                return (
		                    (this.year() - hooks(eras[i].since).year()) * dir +
		                    eras[i].offset
		                );
		            }
		        }

		        return this.year();
		    }

		    function erasNameRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNameRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNameRegex : this._erasRegex;
		    }

		    function erasAbbrRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasAbbrRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasAbbrRegex : this._erasRegex;
		    }

		    function erasNarrowRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNarrowRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNarrowRegex : this._erasRegex;
		    }

		    function matchEraAbbr(isStrict, locale) {
		        return locale.erasAbbrRegex(isStrict);
		    }

		    function matchEraName(isStrict, locale) {
		        return locale.erasNameRegex(isStrict);
		    }

		    function matchEraNarrow(isStrict, locale) {
		        return locale.erasNarrowRegex(isStrict);
		    }

		    function matchEraYearOrdinal(isStrict, locale) {
		        return locale._eraYearOrdinalRegex || matchUnsigned;
		    }

		    function computeErasParse() {
		        var abbrPieces = [],
		            namePieces = [],
		            narrowPieces = [],
		            mixedPieces = [],
		            i,
		            l,
		            erasName,
		            erasAbbr,
		            erasNarrow,
		            eras = this.eras();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            erasName = regexEscape(eras[i].name);
		            erasAbbr = regexEscape(eras[i].abbr);
		            erasNarrow = regexEscape(eras[i].narrow);

		            namePieces.push(erasName);
		            abbrPieces.push(erasAbbr);
		            narrowPieces.push(erasNarrow);
		            mixedPieces.push(erasName);
		            mixedPieces.push(erasAbbr);
		            mixedPieces.push(erasNarrow);
		        }

		        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
		        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
		        this._erasNarrowRegex = new RegExp(
		            '^(' + narrowPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    addFormatToken(0, ['gg', 2], 0, function () {
		        return this.weekYear() % 100;
		    });

		    addFormatToken(0, ['GG', 2], 0, function () {
		        return this.isoWeekYear() % 100;
		    });

		    function addWeekYearFormatToken(token, getter) {
		        addFormatToken(0, [token, token.length], 0, getter);
		    }

		    addWeekYearFormatToken('gggg', 'weekYear');
		    addWeekYearFormatToken('ggggg', 'weekYear');
		    addWeekYearFormatToken('GGGG', 'isoWeekYear');
		    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

		    // ALIASES

		    // PARSING

		    addRegexToken('G', matchSigned);
		    addRegexToken('g', matchSigned);
		    addRegexToken('GG', match1to2, match2);
		    addRegexToken('gg', match1to2, match2);
		    addRegexToken('GGGG', match1to4, match4);
		    addRegexToken('gggg', match1to4, match4);
		    addRegexToken('GGGGG', match1to6, match6);
		    addRegexToken('ggggg', match1to6, match6);

		    addWeekParseToken(
		        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
		        function (input, week, config, token) {
		            week[token.substr(0, 2)] = toInt(input);
		        }
		    );

		    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		        week[token] = hooks.parseTwoDigitYear(input);
		    });

		    // MOMENTS

		    function getSetWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.week(),
		            this.weekday() + this.localeData()._week.dow,
		            this.localeData()._week.dow,
		            this.localeData()._week.doy
		        );
		    }

		    function getSetISOWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.isoWeek(),
		            this.isoWeekday(),
		            1,
		            4
		        );
		    }

		    function getISOWeeksInYear() {
		        return weeksInYear(this.year(), 1, 4);
		    }

		    function getISOWeeksInISOWeekYear() {
		        return weeksInYear(this.isoWeekYear(), 1, 4);
		    }

		    function getWeeksInYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
		    }

		    function getWeeksInWeekYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
		    }

		    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		        var weeksTarget;
		        if (input == null) {
		            return weekOfYear(this, dow, doy).year;
		        } else {
		            weeksTarget = weeksInYear(input, dow, doy);
		            if (week > weeksTarget) {
		                week = weeksTarget;
		            }
		            return setWeekAll.call(this, input, week, weekday, dow, doy);
		        }
		    }

		    function setWeekAll(weekYear, week, weekday, dow, doy) {
		        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
		            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		        this.year(date.getUTCFullYear());
		        this.month(date.getUTCMonth());
		        this.date(date.getUTCDate());
		        return this;
		    }

		    // FORMATTING

		    addFormatToken('Q', 0, 'Qo', 'quarter');

		    // PARSING

		    addRegexToken('Q', match1);
		    addParseToken('Q', function (input, array) {
		        array[MONTH] = (toInt(input) - 1) * 3;
		    });

		    // MOMENTS

		    function getSetQuarter(input) {
		        return input == null
		            ? Math.ceil((this.month() + 1) / 3)
		            : this.month((input - 1) * 3 + (this.month() % 3));
		    }

		    // FORMATTING

		    addFormatToken('D', ['DD', 2], 'Do', 'date');

		    // PARSING

		    addRegexToken('D', match1to2, match1to2NoLeadingZero);
		    addRegexToken('DD', match1to2, match2);
		    addRegexToken('Do', function (isStrict, locale) {
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        return isStrict
		            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
		            : locale._dayOfMonthOrdinalParseLenient;
		    });

		    addParseToken(['D', 'DD'], DATE);
		    addParseToken('Do', function (input, array) {
		        array[DATE] = toInt(input.match(match1to2)[0]);
		    });

		    // MOMENTS

		    var getSetDayOfMonth = makeGetSet('Date', true);

		    // FORMATTING

		    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

		    // PARSING

		    addRegexToken('DDD', match1to3);
		    addRegexToken('DDDD', match3);
		    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		        config._dayOfYear = toInt(input);
		    });

		    // HELPERS

		    // MOMENTS

		    function getSetDayOfYear(input) {
		        var dayOfYear =
		            Math.round(
		                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
		            ) + 1;
		        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
		    }

		    // FORMATTING

		    addFormatToken('m', ['mm', 2], 0, 'minute');

		    // PARSING

		    addRegexToken('m', match1to2, match1to2HasZero);
		    addRegexToken('mm', match1to2, match2);
		    addParseToken(['m', 'mm'], MINUTE);

		    // MOMENTS

		    var getSetMinute = makeGetSet('Minutes', false);

		    // FORMATTING

		    addFormatToken('s', ['ss', 2], 0, 'second');

		    // PARSING

		    addRegexToken('s', match1to2, match1to2HasZero);
		    addRegexToken('ss', match1to2, match2);
		    addParseToken(['s', 'ss'], SECOND);

		    // MOMENTS

		    var getSetSecond = makeGetSet('Seconds', false);

		    // FORMATTING

		    addFormatToken('S', 0, 0, function () {
		        return ~~(this.millisecond() / 100);
		    });

		    addFormatToken(0, ['SS', 2], 0, function () {
		        return ~~(this.millisecond() / 10);
		    });

		    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
		    addFormatToken(0, ['SSSS', 4], 0, function () {
		        return this.millisecond() * 10;
		    });
		    addFormatToken(0, ['SSSSS', 5], 0, function () {
		        return this.millisecond() * 100;
		    });
		    addFormatToken(0, ['SSSSSS', 6], 0, function () {
		        return this.millisecond() * 1000;
		    });
		    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		        return this.millisecond() * 10000;
		    });
		    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		        return this.millisecond() * 100000;
		    });
		    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		        return this.millisecond() * 1000000;
		    });

		    // PARSING

		    addRegexToken('S', match1to3, match1);
		    addRegexToken('SS', match1to3, match2);
		    addRegexToken('SSS', match1to3, match3);

		    var token, getSetMillisecond;
		    for (token = 'SSSS'; token.length <= 9; token += 'S') {
		        addRegexToken(token, matchUnsigned);
		    }

		    function parseMs(input, array) {
		        array[MILLISECOND] = toInt(('0.' + input) * 1000);
		    }

		    for (token = 'S'; token.length <= 9; token += 'S') {
		        addParseToken(token, parseMs);
		    }

		    getSetMillisecond = makeGetSet('Milliseconds', false);

		    // FORMATTING

		    addFormatToken('z', 0, 0, 'zoneAbbr');
		    addFormatToken('zz', 0, 0, 'zoneName');

		    // MOMENTS

		    function getZoneAbbr() {
		        return this._isUTC ? 'UTC' : '';
		    }

		    function getZoneName() {
		        return this._isUTC ? 'Coordinated Universal Time' : '';
		    }

		    var proto = Moment.prototype;

		    proto.add = add;
		    proto.calendar = calendar$1;
		    proto.clone = clone;
		    proto.diff = diff;
		    proto.endOf = endOf;
		    proto.format = format;
		    proto.from = from;
		    proto.fromNow = fromNow;
		    proto.to = to;
		    proto.toNow = toNow;
		    proto.get = stringGet;
		    proto.invalidAt = invalidAt;
		    proto.isAfter = isAfter;
		    proto.isBefore = isBefore;
		    proto.isBetween = isBetween;
		    proto.isSame = isSame;
		    proto.isSameOrAfter = isSameOrAfter;
		    proto.isSameOrBefore = isSameOrBefore;
		    proto.isValid = isValid$2;
		    proto.lang = lang;
		    proto.locale = locale;
		    proto.localeData = localeData;
		    proto.max = prototypeMax;
		    proto.min = prototypeMin;
		    proto.parsingFlags = parsingFlags;
		    proto.set = stringSet;
		    proto.startOf = startOf;
		    proto.subtract = subtract;
		    proto.toArray = toArray;
		    proto.toObject = toObject;
		    proto.toDate = toDate;
		    proto.toISOString = toISOString;
		    proto.inspect = inspect;
		    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
		        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
		            return 'Moment<' + this.format() + '>';
		        };
		    }
		    proto.toJSON = toJSON;
		    proto.toString = toString;
		    proto.unix = unix;
		    proto.valueOf = valueOf;
		    proto.creationData = creationData;
		    proto.eraName = getEraName;
		    proto.eraNarrow = getEraNarrow;
		    proto.eraAbbr = getEraAbbr;
		    proto.eraYear = getEraYear;
		    proto.year = getSetYear;
		    proto.isLeapYear = getIsLeapYear;
		    proto.weekYear = getSetWeekYear;
		    proto.isoWeekYear = getSetISOWeekYear;
		    proto.quarter = proto.quarters = getSetQuarter;
		    proto.month = getSetMonth;
		    proto.daysInMonth = getDaysInMonth;
		    proto.week = proto.weeks = getSetWeek;
		    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
		    proto.weeksInYear = getWeeksInYear;
		    proto.weeksInWeekYear = getWeeksInWeekYear;
		    proto.isoWeeksInYear = getISOWeeksInYear;
		    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
		    proto.date = getSetDayOfMonth;
		    proto.day = proto.days = getSetDayOfWeek;
		    proto.weekday = getSetLocaleDayOfWeek;
		    proto.isoWeekday = getSetISODayOfWeek;
		    proto.dayOfYear = getSetDayOfYear;
		    proto.hour = proto.hours = getSetHour;
		    proto.minute = proto.minutes = getSetMinute;
		    proto.second = proto.seconds = getSetSecond;
		    proto.millisecond = proto.milliseconds = getSetMillisecond;
		    proto.utcOffset = getSetOffset;
		    proto.utc = setOffsetToUTC;
		    proto.local = setOffsetToLocal;
		    proto.parseZone = setOffsetToParsedOffset;
		    proto.hasAlignedHourOffset = hasAlignedHourOffset;
		    proto.isDST = isDaylightSavingTime;
		    proto.isLocal = isLocal;
		    proto.isUtcOffset = isUtcOffset;
		    proto.isUtc = isUtc;
		    proto.isUTC = isUtc;
		    proto.zoneAbbr = getZoneAbbr;
		    proto.zoneName = getZoneName;
		    proto.dates = deprecate(
		        'dates accessor is deprecated. Use date instead.',
		        getSetDayOfMonth
		    );
		    proto.months = deprecate(
		        'months accessor is deprecated. Use month instead',
		        getSetMonth
		    );
		    proto.years = deprecate(
		        'years accessor is deprecated. Use year instead',
		        getSetYear
		    );
		    proto.zone = deprecate(
		        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
		        getSetZone
		    );
		    proto.isDSTShifted = deprecate(
		        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
		        isDaylightSavingTimeShifted
		    );

		    function createUnix(input) {
		        return createLocal(input * 1000);
		    }

		    function createInZone() {
		        return createLocal.apply(null, arguments).parseZone();
		    }

		    function preParsePostFormat(string) {
		        return string;
		    }

		    var proto$1 = Locale.prototype;

		    proto$1.calendar = calendar;
		    proto$1.longDateFormat = longDateFormat;
		    proto$1.invalidDate = invalidDate;
		    proto$1.ordinal = ordinal;
		    proto$1.preparse = preParsePostFormat;
		    proto$1.postformat = preParsePostFormat;
		    proto$1.relativeTime = relativeTime;
		    proto$1.pastFuture = pastFuture;
		    proto$1.set = set;
		    proto$1.eras = localeEras;
		    proto$1.erasParse = localeErasParse;
		    proto$1.erasConvertYear = localeErasConvertYear;
		    proto$1.erasAbbrRegex = erasAbbrRegex;
		    proto$1.erasNameRegex = erasNameRegex;
		    proto$1.erasNarrowRegex = erasNarrowRegex;

		    proto$1.months = localeMonths;
		    proto$1.monthsShort = localeMonthsShort;
		    proto$1.monthsParse = localeMonthsParse;
		    proto$1.monthsRegex = monthsRegex;
		    proto$1.monthsShortRegex = monthsShortRegex;
		    proto$1.week = localeWeek;
		    proto$1.firstDayOfYear = localeFirstDayOfYear;
		    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

		    proto$1.weekdays = localeWeekdays;
		    proto$1.weekdaysMin = localeWeekdaysMin;
		    proto$1.weekdaysShort = localeWeekdaysShort;
		    proto$1.weekdaysParse = localeWeekdaysParse;

		    proto$1.weekdaysRegex = weekdaysRegex;
		    proto$1.weekdaysShortRegex = weekdaysShortRegex;
		    proto$1.weekdaysMinRegex = weekdaysMinRegex;

		    proto$1.isPM = localeIsPM;
		    proto$1.meridiem = localeMeridiem;

		    function get$1(format, index, field, setter) {
		        var locale = getLocale(),
		            utc = createUTC().set(setter, index);
		        return locale[field](utc, format);
		    }

		    function listMonthsImpl(format, index, field) {
		        if (isNumber(format)) {
		            index = format;
		            format = undefined;
		        }

		        format = format || '';

		        if (index != null) {
		            return get$1(format, index, field, 'month');
		        }

		        var i,
		            out = [];
		        for (i = 0; i < 12; i++) {
		            out[i] = get$1(format, i, field, 'month');
		        }
		        return out;
		    }

		    // ()
		    // (5)
		    // (fmt, 5)
		    // (fmt)
		    // (true)
		    // (true, 5)
		    // (true, fmt, 5)
		    // (true, fmt)
		    function listWeekdaysImpl(localeSorted, format, index, field) {
		        if (typeof localeSorted === 'boolean') {
		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        } else {
		            format = localeSorted;
		            index = format;
		            localeSorted = false;

		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        }

		        var locale = getLocale(),
		            shift = localeSorted ? locale._week.dow : 0,
		            i,
		            out = [];

		        if (index != null) {
		            return get$1(format, (index + shift) % 7, field, 'day');
		        }

		        for (i = 0; i < 7; i++) {
		            out[i] = get$1(format, (i + shift) % 7, field, 'day');
		        }
		        return out;
		    }

		    function listMonths(format, index) {
		        return listMonthsImpl(format, index, 'months');
		    }

		    function listMonthsShort(format, index) {
		        return listMonthsImpl(format, index, 'monthsShort');
		    }

		    function listWeekdays(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
		    }

		    function listWeekdaysShort(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
		    }

		    function listWeekdaysMin(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
		    }

		    getSetGlobalLocale('en', {
		        eras: [
		            {
		                since: '0001-01-01',
		                until: +Infinity,
		                offset: 1,
		                name: 'Anno Domini',
		                narrow: 'AD',
		                abbr: 'AD',
		            },
		            {
		                since: '0000-12-31',
		                until: -Infinity,
		                offset: 1,
		                name: 'Before Christ',
		                narrow: 'BC',
		                abbr: 'BC',
		            },
		        ],
		        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		        ordinal: function (number) {
		            var b = number % 10,
		                output =
		                    toInt((number % 100) / 10) === 1
		                        ? 'th'
		                        : b === 1
		                          ? 'st'
		                          : b === 2
		                            ? 'nd'
		                            : b === 3
		                              ? 'rd'
		                              : 'th';
		            return number + output;
		        },
		    });

		    // Side effect imports

		    hooks.lang = deprecate(
		        'moment.lang is deprecated. Use moment.locale instead.',
		        getSetGlobalLocale
		    );
		    hooks.langData = deprecate(
		        'moment.langData is deprecated. Use moment.localeData instead.',
		        getLocale
		    );

		    var mathAbs = Math.abs;

		    function abs() {
		        var data = this._data;

		        this._milliseconds = mathAbs(this._milliseconds);
		        this._days = mathAbs(this._days);
		        this._months = mathAbs(this._months);

		        data.milliseconds = mathAbs(data.milliseconds);
		        data.seconds = mathAbs(data.seconds);
		        data.minutes = mathAbs(data.minutes);
		        data.hours = mathAbs(data.hours);
		        data.months = mathAbs(data.months);
		        data.years = mathAbs(data.years);

		        return this;
		    }

		    function addSubtract$1(duration, input, value, direction) {
		        var other = createDuration(input, value);

		        duration._milliseconds += direction * other._milliseconds;
		        duration._days += direction * other._days;
		        duration._months += direction * other._months;

		        return duration._bubble();
		    }

		    // supports only 2.0-style add(1, 's') or add(duration)
		    function add$1(input, value) {
		        return addSubtract$1(this, input, value, 1);
		    }

		    // supports only 2.0-style subtract(1, 's') or subtract(duration)
		    function subtract$1(input, value) {
		        return addSubtract$1(this, input, value, -1);
		    }

		    function absCeil(number) {
		        if (number < 0) {
		            return Math.floor(number);
		        } else {
		            return Math.ceil(number);
		        }
		    }

		    function bubble() {
		        var milliseconds = this._milliseconds,
		            days = this._days,
		            months = this._months,
		            data = this._data,
		            seconds,
		            minutes,
		            hours,
		            years,
		            monthsFromDays;

		        // if we have a mix of positive and negative values, bubble down first
		        // check: https://github.com/moment/moment/issues/2166
		        if (
		            !(
		                (milliseconds >= 0 && days >= 0 && months >= 0) ||
		                (milliseconds <= 0 && days <= 0 && months <= 0)
		            )
		        ) {
		            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
		            days = 0;
		            months = 0;
		        }

		        // The following code bubbles up values, see the tests for
		        // examples of what that means.
		        data.milliseconds = milliseconds % 1000;

		        seconds = absFloor(milliseconds / 1000);
		        data.seconds = seconds % 60;

		        minutes = absFloor(seconds / 60);
		        data.minutes = minutes % 60;

		        hours = absFloor(minutes / 60);
		        data.hours = hours % 24;

		        days += absFloor(hours / 24);

		        // convert days to months
		        monthsFromDays = absFloor(daysToMonths(days));
		        months += monthsFromDays;
		        days -= absCeil(monthsToDays(monthsFromDays));

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        data.days = days;
		        data.months = months;
		        data.years = years;

		        return this;
		    }

		    function daysToMonths(days) {
		        // 400 years have 146097 days (taking into account leap year rules)
		        // 400 years have 12 months === 4800
		        return (days * 4800) / 146097;
		    }

		    function monthsToDays(months) {
		        // the reverse of daysToMonths
		        return (months * 146097) / 4800;
		    }

		    function as(units) {
		        if (!this.isValid()) {
		            return NaN;
		        }
		        var days,
		            months,
		            milliseconds = this._milliseconds;

		        units = normalizeUnits(units);

		        if (units === 'month' || units === 'quarter' || units === 'year') {
		            days = this._days + milliseconds / 864e5;
		            months = this._months + daysToMonths(days);
		            switch (units) {
		                case 'month':
		                    return months;
		                case 'quarter':
		                    return months / 3;
		                case 'year':
		                    return months / 12;
		            }
		        } else {
		            // handle milliseconds separately because of floating point math errors (issue #1867)
		            days = this._days + Math.round(monthsToDays(this._months));
		            switch (units) {
		                case 'week':
		                    return days / 7 + milliseconds / 6048e5;
		                case 'day':
		                    return days + milliseconds / 864e5;
		                case 'hour':
		                    return days * 24 + milliseconds / 36e5;
		                case 'minute':
		                    return days * 1440 + milliseconds / 6e4;
		                case 'second':
		                    return days * 86400 + milliseconds / 1000;
		                // Math.floor prevents floating point math errors here
		                case 'millisecond':
		                    return Math.floor(days * 864e5) + milliseconds;
		                default:
		                    throw new Error('Unknown unit ' + units);
		            }
		        }
		    }

		    function makeAs(alias) {
		        return function () {
		            return this.as(alias);
		        };
		    }

		    var asMilliseconds = makeAs('ms'),
		        asSeconds = makeAs('s'),
		        asMinutes = makeAs('m'),
		        asHours = makeAs('h'),
		        asDays = makeAs('d'),
		        asWeeks = makeAs('w'),
		        asMonths = makeAs('M'),
		        asQuarters = makeAs('Q'),
		        asYears = makeAs('y'),
		        valueOf$1 = asMilliseconds;

		    function clone$1() {
		        return createDuration(this);
		    }

		    function get$2(units) {
		        units = normalizeUnits(units);
		        return this.isValid() ? this[units + 's']() : NaN;
		    }

		    function makeGetter(name) {
		        return function () {
		            return this.isValid() ? this._data[name] : NaN;
		        };
		    }

		    var milliseconds = makeGetter('milliseconds'),
		        seconds = makeGetter('seconds'),
		        minutes = makeGetter('minutes'),
		        hours = makeGetter('hours'),
		        days = makeGetter('days'),
		        months = makeGetter('months'),
		        years = makeGetter('years');

		    function weeks() {
		        return absFloor(this.days() / 7);
		    }

		    var round = Math.round,
		        thresholds = {
		            ss: 44, // a few seconds to seconds
		            s: 45, // seconds to minute
		            m: 45, // minutes to hour
		            h: 22, // hours to day
		            d: 26, // days to month/week
		            w: null, // weeks to month
		            M: 11, // months to year
		        };

		    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
		    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
		    }

		    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
		        var duration = createDuration(posNegDuration).abs(),
		            seconds = round(duration.as('s')),
		            minutes = round(duration.as('m')),
		            hours = round(duration.as('h')),
		            days = round(duration.as('d')),
		            months = round(duration.as('M')),
		            weeks = round(duration.as('w')),
		            years = round(duration.as('y')),
		            a =
		                (seconds <= thresholds.ss && ['s', seconds]) ||
		                (seconds < thresholds.s && ['ss', seconds]) ||
		                (minutes <= 1 && ['m']) ||
		                (minutes < thresholds.m && ['mm', minutes]) ||
		                (hours <= 1 && ['h']) ||
		                (hours < thresholds.h && ['hh', hours]) ||
		                (days <= 1 && ['d']) ||
		                (days < thresholds.d && ['dd', days]);

		        if (thresholds.w != null) {
		            a =
		                a ||
		                (weeks <= 1 && ['w']) ||
		                (weeks < thresholds.w && ['ww', weeks]);
		        }
		        a = a ||
		            (months <= 1 && ['M']) ||
		            (months < thresholds.M && ['MM', months]) ||
		            (years <= 1 && ['y']) || ['yy', years];

		        a[2] = withoutSuffix;
		        a[3] = +posNegDuration > 0;
		        a[4] = locale;
		        return substituteTimeAgo.apply(null, a);
		    }

		    // This function allows you to set the rounding function for relative time strings
		    function getSetRelativeTimeRounding(roundingFunction) {
		        if (roundingFunction === undefined) {
		            return round;
		        }
		        if (typeof roundingFunction === 'function') {
		            round = roundingFunction;
		            return true;
		        }
		        return false;
		    }

		    // This function allows you to set a threshold for relative time strings
		    function getSetRelativeTimeThreshold(threshold, limit) {
		        if (thresholds[threshold] === undefined) {
		            return false;
		        }
		        if (limit === undefined) {
		            return thresholds[threshold];
		        }
		        thresholds[threshold] = limit;
		        if (threshold === 's') {
		            thresholds.ss = limit - 1;
		        }
		        return true;
		    }

		    function humanize(argWithSuffix, argThresholds) {
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var withSuffix = false,
		            th = thresholds,
		            locale,
		            output;

		        if (typeof argWithSuffix === 'object') {
		            argThresholds = argWithSuffix;
		            argWithSuffix = false;
		        }
		        if (typeof argWithSuffix === 'boolean') {
		            withSuffix = argWithSuffix;
		        }
		        if (typeof argThresholds === 'object') {
		            th = Object.assign({}, thresholds, argThresholds);
		            if (argThresholds.s != null && argThresholds.ss == null) {
		                th.ss = argThresholds.s - 1;
		            }
		        }

		        locale = this.localeData();
		        output = relativeTime$1(this, !withSuffix, th, locale);

		        if (withSuffix) {
		            output = locale.pastFuture(+this, output);
		        }

		        return locale.postformat(output);
		    }

		    var abs$1 = Math.abs;

		    function sign(x) {
		        return (x > 0) - (x < 0) || +x;
		    }

		    function toISOString$1() {
		        // for ISO strings we do not use the normal bubbling rules:
		        //  * milliseconds bubble up until they become hours
		        //  * days do not bubble at all
		        //  * months bubble up until they become years
		        // This is because there is no context-free conversion between hours and days
		        // (think of clock changes)
		        // and also not between days and months (28-31 days per month)
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var seconds = abs$1(this._milliseconds) / 1000,
		            days = abs$1(this._days),
		            months = abs$1(this._months),
		            minutes,
		            hours,
		            years,
		            s,
		            total = this.asSeconds(),
		            totalSign,
		            ymSign,
		            daysSign,
		            hmsSign;

		        if (!total) {
		            // this is the same as C#'s (Noda) and python (isodate)...
		            // but not other JS (goog.date)
		            return 'P0D';
		        }

		        // 3600 seconds -> 60 minutes -> 1 hour
		        minutes = absFloor(seconds / 60);
		        hours = absFloor(minutes / 60);
		        seconds %= 60;
		        minutes %= 60;

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

		        totalSign = total < 0 ? '-' : '';
		        ymSign = sign(this._months) !== sign(total) ? '-' : '';
		        daysSign = sign(this._days) !== sign(total) ? '-' : '';
		        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

		        return (
		            totalSign +
		            'P' +
		            (years ? ymSign + years + 'Y' : '') +
		            (months ? ymSign + months + 'M' : '') +
		            (days ? daysSign + days + 'D' : '') +
		            (hours || minutes || seconds ? 'T' : '') +
		            (hours ? hmsSign + hours + 'H' : '') +
		            (minutes ? hmsSign + minutes + 'M' : '') +
		            (seconds ? hmsSign + s + 'S' : '')
		        );
		    }

		    var proto$2 = Duration.prototype;

		    proto$2.isValid = isValid$1;
		    proto$2.abs = abs;
		    proto$2.add = add$1;
		    proto$2.subtract = subtract$1;
		    proto$2.as = as;
		    proto$2.asMilliseconds = asMilliseconds;
		    proto$2.asSeconds = asSeconds;
		    proto$2.asMinutes = asMinutes;
		    proto$2.asHours = asHours;
		    proto$2.asDays = asDays;
		    proto$2.asWeeks = asWeeks;
		    proto$2.asMonths = asMonths;
		    proto$2.asQuarters = asQuarters;
		    proto$2.asYears = asYears;
		    proto$2.valueOf = valueOf$1;
		    proto$2._bubble = bubble;
		    proto$2.clone = clone$1;
		    proto$2.get = get$2;
		    proto$2.milliseconds = milliseconds;
		    proto$2.seconds = seconds;
		    proto$2.minutes = minutes;
		    proto$2.hours = hours;
		    proto$2.days = days;
		    proto$2.weeks = weeks;
		    proto$2.months = months;
		    proto$2.years = years;
		    proto$2.humanize = humanize;
		    proto$2.toISOString = toISOString$1;
		    proto$2.toString = toISOString$1;
		    proto$2.toJSON = toISOString$1;
		    proto$2.locale = locale;
		    proto$2.localeData = localeData;

		    proto$2.toIsoString = deprecate(
		        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
		        toISOString$1
		    );
		    proto$2.lang = lang;

		    // FORMATTING

		    addFormatToken('X', 0, 0, 'unix');
		    addFormatToken('x', 0, 0, 'valueOf');

		    // PARSING

		    addRegexToken('x', matchSigned);
		    addRegexToken('X', matchTimestamp);
		    addParseToken('X', function (input, array, config) {
		        config._d = new Date(parseFloat(input) * 1000);
		    });
		    addParseToken('x', function (input, array, config) {
		        config._d = new Date(toInt(input));
		    });

		    //! moment.js

		    hooks.version = '2.30.1';

		    setHookCallback(createLocal);

		    hooks.fn = proto;
		    hooks.min = min;
		    hooks.max = max;
		    hooks.now = now;
		    hooks.utc = createUTC;
		    hooks.unix = createUnix;
		    hooks.months = listMonths;
		    hooks.isDate = isDate;
		    hooks.locale = getSetGlobalLocale;
		    hooks.invalid = createInvalid;
		    hooks.duration = createDuration;
		    hooks.isMoment = isMoment;
		    hooks.weekdays = listWeekdays;
		    hooks.parseZone = createInZone;
		    hooks.localeData = getLocale;
		    hooks.isDuration = isDuration;
		    hooks.monthsShort = listMonthsShort;
		    hooks.weekdaysMin = listWeekdaysMin;
		    hooks.defineLocale = defineLocale;
		    hooks.updateLocale = updateLocale;
		    hooks.locales = listLocales;
		    hooks.weekdaysShort = listWeekdaysShort;
		    hooks.normalizeUnits = normalizeUnits;
		    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
		    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
		    hooks.calendarFormat = getCalendarFormat;
		    hooks.prototype = proto;

		    // currently HTML5 input type only supports 24-hour formats
		    hooks.HTML5_FMT = {
		        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
		        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
		        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
		        DATE: 'YYYY-MM-DD', // <input type="date" />
		        TIME: 'HH:mm', // <input type="time" />
		        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
		        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
		        WEEK: 'GGGG-[W]WW', // <input type="week" />
		        MONTH: 'YYYY-MM', // <input type="month" />
		    };

		    return hooks;

		}))); 
	} (moment$1));
	return moment$1.exports;
}

var FileStreamRotator_1;
var hasRequiredFileStreamRotator;

function requireFileStreamRotator () {
	if (hasRequiredFileStreamRotator) return FileStreamRotator_1;
	hasRequiredFileStreamRotator = 1;

	/*!
	 * FileStreamRotator
	 * Copyright(c) 2012-2017 Holiday Extras.
	 * Copyright(c) 2017 Roger C.
	 * MIT Licensed
	 */

	/**
	 * Module dependencies.
	 */
	var fs = require$$0$6;
	var path = require$$1$1;
	var moment = requireMoment();
	var crypto = require$$0$8;

	var EventEmitter = require$$2$1;

	/**
	 * FileStreamRotator:
	 *
	 * Returns a file stream that auto-rotates based on date.
	 *
	 * Options:
	 *
	 *   - `filename`       Filename including full path used by the stream
	 *
	 *   - `frequency`      How often to rotate. Options are 'daily', 'custom' and 'test'. 'test' rotates every minute.
	 *                      If frequency is set to none of the above, a YYYYMMDD string will be added to the end of the filename.
	 *
	 *   - `verbose`        If set, it will log to STDOUT when it rotates files and name of log file. Default is TRUE.
	 *
	 *   - `date_format`    Format as used in moment.js http://momentjs.com/docs/#/displaying/format/. The result is used to replace
	 *                      the '%DATE%' placeholder in the filename.
	 *                      If using 'custom' frequency, it is used to trigger file change when the string representation changes.
	 *
	 *   - `size`           Max size of the file after which it will rotate. It can be combined with frequency or date format.
	 *                      The size units are 'k', 'm' and 'g'. Units need to directly follow a number e.g. 1g, 100m, 20k.
	 *
	 *   - `max_logs`       Max number of logs to keep. If not set, it won't remove past logs. It uses its own log audit file
	 *                      to keep track of the log files in a json format. It won't delete any file not contained in it.
	 *                      It can be a number of files or number of days. If using days, add 'd' as the suffix.
	 *
	 *   - `audit_file`     Location to store the log audit file. If not set, it will be stored in the root of the application.
	 * 
	 *   - `end_stream`     End stream (true) instead of the default behaviour of destroy (false). Set value to true if when writing to the
	 *                      stream in a loop, if the application terminates or log rotates, data pending to be flushed might be lost.                    
	 *
	 *   - `file_options`   An object passed to the stream. This can be used to specify flags, encoding, and mode.
	 *                      See https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options. Default `{ flags: 'a' }`.
	 * 
	 *   - `utc`            Use UTC time for date in filename. Defaults to 'FALSE'
	 * 
	 *   - `extension`      File extension to be appended to the filename. This is useful when using size restrictions as the rotation
	 *                      adds a count (1,2,3,4,...) at the end of the filename when the required size is met.
	 * 
	 *   - `watch_log`      Watch the current file being written to and recreate it in case of accidental deletion. Defaults to 'FALSE'
	 *
	 *   - `create_symlink` Create a tailable symlink to the current active log file. Defaults to 'FALSE'
	 * 
	 *   - `symlink_name`   Name to use when creating the symbolic link. Defaults to 'current.log'
	 * 
	 *   - `audit_hash_type` Use specified hashing algorithm for audit. Defaults to 'md5'. Use 'sha256' for FIPS compliance.
	 *
	 * To use with Express / Connect, use as below.
	 *
	 * var rotatingLogStream = require('FileStreamRotator').getStream({filename:"/tmp/test.log", frequency:"daily", verbose: false})
	 * app.use(express.logger({stream: rotatingLogStream, format: "default"}));
	 *
	 * @param {Object} options
	 * @return {Object}
	 * @api public
	 */
	var FileStreamRotator = {};

	FileStreamRotator_1 = FileStreamRotator;

	var staticFrequency = ['daily', 'test', 'm', 'h', 'custom'];
	var DATE_FORMAT = ('YYYYMMDDHHmm');


	/**
	 * Returns frequency metadata for minute/hour rotation
	 * @param type
	 * @param num
	 * @returns {*}
	 * @private
	 */
	var _checkNumAndType = function (type, num) {
	    if (typeof num == 'number') {
	        switch (type) {
	            case 'm':
	                if (num < 0 || num > 60) {
	                    return false;
	                }
	                break;
	            case 'h':
	                if (num < 0 || num > 24) {
	                    return false;
	                }
	                break;
	        }
	        return {type: type, digit: num};
	    }
	};

	/**
	 * Returns frequency metadata for defined frequency
	 * @param freqType
	 * @returns {*}
	 * @private
	 */
	var _checkDailyAndTest = function (freqType) {
	    switch (freqType) {
	        case 'custom':
	        case 'daily':
	            return {type: freqType, digit: undefined};
	        case 'test':
	            return {type: freqType, digit: 0};
	    }
	    return false;
	};


	/**
	 * Returns frequency metadata
	 * @param frequency
	 * @returns {*}
	 */
	FileStreamRotator.getFrequency = function (frequency) {
	    var _f = frequency.toLowerCase().match(/^(\d+)([mh])$/);
	    if(_f){
	        return _checkNumAndType(_f[2], parseInt(_f[1]));
	    }

	    var dailyOrTest = _checkDailyAndTest(frequency);
	    if (dailyOrTest) {
	        return dailyOrTest;
	    }

	    return false;
	};

	/**
	 * Returns a number based on the option string
	 * @param size
	 * @returns {Number}
	 */
	FileStreamRotator.parseFileSize = function (size) {
	    if(size && typeof size == "string"){
	        var _s = size.toLowerCase().match(/^((?:0\.)?\d+)([kmg])$/);
	        if(_s){
	            switch(_s[2]){
	                case 'k':
	                    return _s[1]*1024
	                case 'm':
	                    return _s[1]*1024*1024
	                case 'g':
	                    return _s[1]*1024*1024*1024
	            }
	        }
	    }
	    return null;
	};

	/**
	 * Returns date string for a given format / date_format
	 * @param format
	 * @param date_format
	 * @param {boolean} utc
	 * @returns {string}
	 */
	FileStreamRotator.getDate = function (format, date_format, utc) {
	    date_format = date_format || DATE_FORMAT;
	    let currentMoment = utc ? moment.utc() : moment().local();
	    if (format && staticFrequency.indexOf(format.type) !== -1) {
	        switch (format.type) {
	            case 'm':
	                var minute = Math.floor(currentMoment.minutes() / format.digit) * format.digit;
	                return currentMoment.minutes(minute).format(date_format);
	            case 'h':
	                var hour = Math.floor(currentMoment.hour() / format.digit) * format.digit;
	                return currentMoment.hour(hour).format(date_format);
	            case 'daily':
	            case 'custom':
	            case 'test':
	                return currentMoment.format(date_format);
	        }
	    }
	    return currentMoment.format(date_format);
	};

	/**
	 * Read audit json object from disk or return new object or null
	 * @param max_logs
	 * @param audit_file
	 * @param log_file
	 * @returns {Object} auditLogSettings
	 * @property {Object} auditLogSettings.keep
	 * @property {Boolean} auditLogSettings.keep.days
	 * @property {Number} auditLogSettings.keep.amount
	 * @property {String} auditLogSettings.auditLog
	 * @property {Array} auditLogSettings.files
	 * @property {String} auditLogSettings.hashType
	 */
	FileStreamRotator.setAuditLog = function (max_logs, audit_file, log_file){
	    var _rtn = null;
	    if(max_logs){
	        var use_days = max_logs.toString().substr(-1);
	        var _num = max_logs.toString().match(/^(\d+)/);

	        if(Number(_num[1]) > 0) {
	            var baseLog = path.dirname(log_file.replace(/%DATE%.+/,"_filename"));
	            try{
	                if(audit_file){
	                    var full_path = path.resolve(audit_file);
	                    _rtn = JSON.parse(fs.readFileSync(full_path, { encoding: 'utf-8' }));
	                }else {
	                    var full_path = path.resolve(baseLog + "/" + ".audit.json");
	                    _rtn = JSON.parse(fs.readFileSync(full_path, { encoding: 'utf-8' }));
	                }
	            }catch(e){
	                if(e.code !== "ENOENT"){
	                    return null;
	                }
	                _rtn = {
	                    keep: {
	                        days: false,
	                        amount: Number(_num[1])
	                    },
	                    auditLog: audit_file || baseLog + "/" + ".audit.json",
	                    files: []
	                };
	            }

	            _rtn.keep = {
	                days: use_days === 'd',
	                amount: Number(_num[1])
	            };

	        }
	    }
	    return _rtn;
	};

	/**
	 * Write audit json object to disk
	 * @param {Object} audit
	 * @param {Object} audit.keep
	 * @param {Boolean} audit.keep.days
	 * @param {Number} audit.keep.amount
	 * @param {String} audit.auditLog
	 * @param {Array} audit.files
	 * @param {String} audit.hashType
	 * @param {Boolean} verbose 
	 */
	FileStreamRotator.writeAuditLog = function(audit, verbose){
	    try{
	        mkDirForFile(audit.auditLog);
	        fs.writeFileSync(audit.auditLog, JSON.stringify(audit,null,4));
	    }catch(e){
	        if (verbose) {
	            console.error(new Date(),"[FileStreamRotator] Failed to store log audit at:", audit.auditLog,"Error:", e);
	        }
	    }
	};


	/**
	 * Removes old log file
	 * @param file
	 * @param file.hash
	 * @param file.name
	 * @param file.date
	 * @param file.hashType
	 * @param {Boolean} verbose 
	 */
	function removeFile(file, verbose){
	    if(file.hash === crypto.createHash(file.hashType).update(file.name + "LOG_FILE" + file.date).digest("hex")){
	        try{
	            if (fs.existsSync(file.name)) {
	                fs.unlinkSync(file.name);
	            }
	        }catch(e){
	            if (verbose) {
	                console.error(new Date(), "[FileStreamRotator] Could not remove old log file: ", file.name);
	            }
	        }
	    }
	}

	/**
	 * Create symbolic link to current log file
	 * @param {String} logfile 
	 * @param {String} name Name to use for symbolic link 
	 * @param {Boolean} verbose 
	 */
	function createCurrentSymLink(logfile, name, verbose) {
	    let symLinkName = name || "current.log";
	    let logPath = path.dirname(logfile);
	    let logfileName = path.basename(logfile);
	    let current = logPath + "/" + symLinkName;
	    try {
	        let stats = fs.lstatSync(current);
	        if(stats.isSymbolicLink()){
	            fs.unlinkSync(current);
	            fs.symlinkSync(logfileName, current);
	        }
	    } catch (err) {
	        if(err && err.code == "ENOENT") {
	            try {
	                fs.symlinkSync(logfileName, current);
	            } catch (e) {
	                if (verbose) {
	                    console.error(new Date(), "[FileStreamRotator] Could not create symlink file: ", current, ' -> ', logfileName);
	                }
	            }
	        }
	    }
	}

	/**
	 * 
	 * @param {String} logfile 
	 * @param {Boolean} verbose 
	 * @param {function} cb 
	 */
	function createLogWatcher(logfile, verbose, cb){
	    if(!logfile) return null
	    // console.log("Creating log watcher")
	    try {
	        let stats = fs.lstatSync(logfile);
	        return fs.watch(logfile, function(event,filename){
	            // console.log(Date(), event, filename)
	            if(event == "rename"){
	                try {
	                    let stats = fs.lstatSync(logfile);
	                    // console.log("STATS:", stats)
	                }catch(err){
	                    // console.log("ERROR:", err)
	                    cb(err,logfile);
	                }                    
	            }
	        })
	    }catch(err){
	        if(verbose){
	            console.log(new Date(),"[FileStreamRotator] Could not add watcher for " + logfile);
	        }
	    }                    
	}

	/**
	 * Write audit json object to disk
	 * @param {String} logfile
	 * @param {Object} audit
	 * @param {Object} audit.keep
	 * @param {Boolean} audit.keep.days
	 * @param {Number} audit.keep.amount
	 * @param {String} audit.auditLog
	 * @param {String} audit.hashType
	 * @param {Array} audit.files
	 * @param {EventEmitter} stream
	 * @param {Boolean} verbose 
	 */
	FileStreamRotator.addLogToAudit = function(logfile, audit, stream, verbose){
	    if(audit && audit.files){
	        // Based on contribution by @nickbug - https://github.com/nickbug
	        var index = audit.files.findIndex(function(file) {
	            return (file.name === logfile);
	        });
	        if (index !== -1) {
	            // nothing to do as entry already exists.
	            return audit;
	        }
	        var time = Date.now();
	        audit.files.push({
	            date: time,
	            name: logfile,
	            hash: crypto.createHash(audit.hashType).update(logfile + "LOG_FILE" + time).digest("hex")
	        });

	        if(audit.keep.days){
	            var oldestDate = moment().subtract(audit.keep.amount,"days").valueOf();
	            var recentFiles = audit.files.filter(function(file){
	                if(file.date > oldestDate){
	                    return true;
	                }
	                file.hashType = audit.hashType;
	                removeFile(file, verbose);
	                stream.emit("logRemoved", file);
	                return false;
	            });
	            audit.files = recentFiles;
	        }else {
	            var filesToKeep = audit.files.splice(-audit.keep.amount);
	            if(audit.files.length > 0){
	                audit.files.filter(function(file){
	                    file.hashType = audit.hashType;
	                    removeFile(file, verbose);
	                    stream.emit("logRemoved", file);
	                    return false;
	                });
	            }
	            audit.files = filesToKeep;
	        }

	        FileStreamRotator.writeAuditLog(audit, verbose);
	    }

	    return audit;
	};

	/**
	 *
	 * @param options
	 * @param options.filename
	 * @param options.frequency
	 * @param options.verbose
	 * @param options.date_format
	 * @param options.size
	 * @param options.max_logs
	 * @param options.audit_file
	 * @param options.file_options
	 * @param options.utc
	 * @param options.extension File extension to be added at the end of the filename
	 * @param options.watch_log
	 * @param options.create_symlink
	 * @param options.symlink_name
	 * @param options.audit_hash_type Hash to be used to add to the audit log (md5, sha256)
	 * @returns {Object} stream
	 */
	FileStreamRotator.getStream = function (options) {
	    var frequencyMetaData = null;
	    var curDate = null;
	    var self = this;

	    if (!options.filename) {
	        console.error(new Date(),"[FileStreamRotator] No filename supplied. Defaulting to STDOUT");
	        return process.stdout;
	    }

	    if (options.frequency) {
	        frequencyMetaData = self.getFrequency(options.frequency);
	    }

	    let auditLog = self.setAuditLog(options.max_logs, options.audit_file, options.filename);
	    // Thanks to Means88 for PR.
	    if (auditLog != null) {
	        auditLog.hashType = (options.audit_hash_type !== undefined ? options.audit_hash_type : 'md5');
	    }
	    self.verbose = (options.verbose !== undefined ? options.verbose : true);

	    var fileSize = null;
	    var fileCount = 0;
	    var curSize = 0;
	    if(options.size){
	        fileSize = FileStreamRotator.parseFileSize(options.size);
	    }

	    var dateFormat = (options.date_format || DATE_FORMAT);
	    if(frequencyMetaData && frequencyMetaData.type == "daily"){
	        if(!options.date_format){
	            dateFormat = "YYYY-MM-DD";
	        }
	        if(moment().format(dateFormat) != moment().endOf("day").format(dateFormat) || moment().format(dateFormat) == moment().add(1,"day").format(dateFormat)){
	            if(self.verbose){
	                console.log(new Date(),"[FileStreamRotator] Changing type to custom as date format changes more often than once a day or not every day");
	            }
	            frequencyMetaData.type = "custom";
	        }
	    }

	    if (frequencyMetaData) {
	        curDate = (options.frequency ? self.getDate(frequencyMetaData,dateFormat, options.utc) : "");
	    }

	    options.create_symlink = options.create_symlink || false;
	    options.extension = options.extension || "";
	    var filename = options.filename;
	    var oldFile = null;
	    var logfile = filename + (curDate ? "." + curDate : "");
	    if(filename.match(/%DATE%/)){
	        logfile = filename.replace(/%DATE%/g,(curDate?curDate:self.getDate(null,dateFormat, options.utc)));
	    }

	    if(fileSize){
	        var lastLogFile = null;
	        var t_log = logfile;
	        if(auditLog && auditLog.files && auditLog.files instanceof Array && auditLog.files.length > 0){
	            var lastEntry = auditLog.files[auditLog.files.length - 1].name;
	            if(lastEntry.match(t_log)){
	                var lastCount = lastEntry.match(t_log + "\\.(\\d+)");
	                // Thanks for the PR contribution from @andrefarzat - https://github.com/andrefarzat
	                if(lastCount){                    
	                    t_log = lastEntry;
	                    fileCount = lastCount[1];
	                }
	            }
	        }

	        if (fileCount == 0 && t_log == logfile) {
	            t_log += options.extension;
	        }

	        while(fs.existsSync(t_log)){
	            lastLogFile = t_log;
	            fileCount++;
	            t_log = logfile + "." + fileCount + options.extension;
	        }
	        if(lastLogFile){
	            var lastLogFileStats = fs.statSync(lastLogFile);
	            if(lastLogFileStats.size < fileSize){
	                t_log = lastLogFile;
	                fileCount--;
	                curSize = lastLogFileStats.size;
	            }
	        }
	        logfile = t_log;
	    } else {
	        logfile += options.extension;
	    }

	    if (self.verbose) {
	        console.log(new Date(),"[FileStreamRotator] Logging to: ", logfile);
	    }

	    mkDirForFile(logfile);

	    var file_options = options.file_options || {flags: 'a'};
	    var rotateStream = fs.createWriteStream(logfile, file_options);
	    if ((curDate && frequencyMetaData && (staticFrequency.indexOf(frequencyMetaData.type) > -1)) || fileSize > 0) {
	        if (self.verbose) {
	            console.log(new Date(),"[FileStreamRotator] Rotating file: ", frequencyMetaData?frequencyMetaData.type:"", fileSize?"size: " + fileSize:"");
	        }
	        var stream = new EventEmitter();
	        stream.auditLog = auditLog;
	        stream.end = function(){
	            rotateStream.end.apply(rotateStream,arguments);
	        };
	        BubbleEvents(rotateStream,stream);

	        stream.on('close', function(){
	            if (logWatcher) {
	                logWatcher.close();
	            }
	        });

	        stream.on("new",function(newLog){
	            // console.log("new log", newLog)
	            stream.auditLog = self.addLogToAudit(newLog,stream.auditLog, stream, self.verbose);
	            if(options.create_symlink){
	                createCurrentSymLink(newLog, options.symlink_name, self.verbose);
	            }
	            if(options.watch_log){
	                stream.emit("addWatcher", newLog);
	            }
	        });
	        
	        var logWatcher;
	        stream.on("addWatcher", function(newLog){
	            if (logWatcher) {
	                logWatcher.close();
	            }
	            if(!options.watch_log){
	                return
	            }
	            // console.log("ADDING WATCHER", newLog)
	            logWatcher = createLogWatcher(newLog, self.verbose, function(err,newLog){
	                stream.emit('createLog', newLog);
	            });        
	        });

	        stream.on("createLog",function(file){
	            try {
	                let stats = fs.lstatSync(file);
	            }catch(err){
	                if(rotateStream && rotateStream.end == "function"){
	                    rotateStream.end();
	                }
	                rotateStream = fs.createWriteStream(file, file_options);
	                stream.emit('new',file);
	                BubbleEvents(rotateStream,stream);
	            }
	        });


	        stream.write = (function (str, encoding) {
	            var newDate = frequencyMetaData ? this.getDate(frequencyMetaData, dateFormat, options.utc) : curDate;
	            if (newDate != curDate || (fileSize && curSize > fileSize)) {
	                var newLogfile = filename + (curDate && frequencyMetaData ? "." + newDate : "");
	                if(filename.match(/%DATE%/) && curDate){
	                    newLogfile = filename.replace(/%DATE%/g,newDate);
	                }

	                if(fileSize && curSize > fileSize){
	                    fileCount++;
	                    newLogfile += "." + fileCount + options.extension;
	                }else {
	                    // reset file count
	                    fileCount = 0;
	                    newLogfile += options.extension;
	                }
	                curSize = 0;

	                if (self.verbose) {
	                    console.log(new Date(),require$$0$3.format("[FileStreamRotator] Changing logs from %s to %s", logfile, newLogfile));
	                }
	                curDate = newDate;
	                oldFile = logfile;
	                logfile = newLogfile;
	                // Thanks to @mattberther https://github.com/mattberther for raising it again.
	                if(options.end_stream === true){
	                    rotateStream.end();
	                }else {
	                    rotateStream.destroy();
	                }

	                mkDirForFile(logfile);

	                rotateStream = fs.createWriteStream(newLogfile, file_options);
	                stream.emit('new',newLogfile);
	                stream.emit('rotate',oldFile, newLogfile);
	                BubbleEvents(rotateStream,stream);
	            }
	            rotateStream.write(str, encoding);
	            // Handle length of double-byte characters
	            curSize += Buffer.byteLength(str, encoding);
	        }).bind(this);
	        process.nextTick(function(){
	            stream.emit('new',logfile);
	        });
	        stream.emit('new',logfile);
	        return stream;
	    } else {
	        if (self.verbose) {
	            console.log(new Date(),"[FileStreamRotator] File won't be rotated: ", options.frequency, options.size);
	        }
	        process.nextTick(function(){
	            rotateStream.emit('new',logfile);
	        });
	        return rotateStream;
	    }
	};

	/**
	 * Check and make parent directory
	 * @param pathWithFile
	 */
	var mkDirForFile = function(pathWithFile){
	    var _path = path.dirname(pathWithFile);
	    _path.split(path.sep).reduce(
	        function(fullPath, folder) {
	            fullPath += folder + path.sep;
	            // Option to replace existsSync as deprecated. Maybe in a future release.
	            // try{
	            //     var stats = fs.statSync(fullPath);
	            //     console.log('STATS',fullPath, stats);
	            // }catch(e){
	            //     fs.mkdirSync(fullPath);
	            //     console.log("STATS ERROR",e)
	            // }
	            if (!fs.existsSync(fullPath)) {
	                try{
	                    fs.mkdirSync(fullPath);
	                }catch(e){
	                    if(e.code !== 'EEXIST'){
	                        throw e;
	                    }
	                }
	            }
	            return fullPath;
	        },
	        ''
	    );
	};


	/**
	 * Bubbles events to the proxy
	 * @param emitter
	 * @param proxy
	 * @constructor
	 */
	var BubbleEvents = function BubbleEvents(emitter,proxy){
	    emitter.on('close',function(){
	        proxy.emit('close');
	    });
	    emitter.on('finish',function(){
	        proxy.emit('finish');
	    });
	    emitter.on('error',function(err){
	        proxy.emit('error',err);
	    });
	    emitter.on('open',function(fd){
	        proxy.emit('open',fd);
	    });
	};
	return FileStreamRotator_1;
}

var dailyRotateFile;
var hasRequiredDailyRotateFile;

function requireDailyRotateFile () {
	if (hasRequiredDailyRotateFile) return dailyRotateFile;
	hasRequiredDailyRotateFile = 1;
	const fs = require$$0$6;
	const os = require$$0$2;
	const path = require$$1$1;
	const util = require$$0$3;
	const zlib = require$$3;
	const hash = requireObjectHash();
	const MESSAGE = requireTripleBeam().MESSAGE;
	const PassThrough = require$$0$5.PassThrough;
	const Transport = requireWinstonTransport();

	const loggerDefaults = {
	    json: false,
	    colorize: false,
	    eol: os.EOL,
	    logstash: null,
	    prettyPrint: false,
	    label: null,
	    stringify: false,
	    depth: null,
	    showLevel: true,
	    timestamp: () => {
	        return new Date().toISOString();
	    }
	};

	const DailyRotateFile = function(options) {
	    options = options || {};
	    Transport.call(this, options);

	    function throwIf(target /* , illegal... */) {
	        Array.prototype.slice.call(arguments, 1).forEach((name) => {
	            if (options[name]) {
	                throw new Error("Cannot set " + name + " and " + target + " together");
	            }
	        });
	    }

	    function getMaxSize(size) {
	        if (size && typeof size === "string") {
	            if (size.toLowerCase().match(/^((?:0\.)?\d+)([kmg])$/)) {
	                return size;
	            }
	        } else if (size && Number.isInteger(size)) {
	            const sizeK = Math.round(size / 1024);
	            return sizeK === 0 ? "1k" : sizeK + "k";
	        }

	        return null;
	    }

	    function isValidFileName(filename) {
	        // eslint-disable-next-line no-control-regex
	        return !/["<>|:*?\\/\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f]/g.test(
	            filename
	        );
	    }

	    function isValidDirName(dirname) {
	        // eslint-disable-next-line no-control-regex
	        return !/["<>|\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f]/g.test(
	            dirname
	        );
	    }

	    this.options = Object.assign({}, loggerDefaults, options);

	    if (options.stream) {
	        throwIf("stream", "filename", "maxsize");
	        this.logStream = new PassThrough();
	        this.logStream.pipe(options.stream);
	    } else {
	        this.filename = options.filename
	            ? path.basename(options.filename)
	            : "winston.log";
	        this.dirname = options.dirname || path.dirname(options.filename);

	        if (!isValidFileName(this.filename) || !isValidDirName(this.dirname)) {
	            throw new Error("Your path or filename contain an invalid character.");
	        }

	        this.logStream = requireFileStreamRotator().getStream({
	            filename: path.join(this.dirname, this.filename),
	            frequency: options.frequency ? options.frequency : "custom",
	            date_format: options.datePattern ? options.datePattern : "YYYY-MM-DD",
	            verbose: false,
	            size: getMaxSize(options.maxSize),
	            max_logs: options.maxFiles,
	            end_stream: true,
	            audit_file: options.auditFile
	                ? options.auditFile
	                : path.join(this.dirname, "." + hash(options) + "-audit.json"),
	            file_options: options.options ? options.options : { flags: "a" },
	            utc: options.utc ? options.utc : false,
	            extension: options.extension ? options.extension : "",
	            create_symlink: options.createSymlink ? options.createSymlink : false,
	            symlink_name: options.symlinkName ? options.symlinkName : "current.log",
	            watch_log: options.watchLog ? options.watchLog : false,
	            audit_hash_type: options.auditHashType ? options.auditHashType : "sha256"
	        });

	        this.logStream.on("new", (newFile) => {
	            this.emit("new", newFile);
	        });

	        this.logStream.on("rotate", (oldFile, newFile) => {
	            this.emit("rotate", oldFile, newFile);
	        });

	        this.logStream.on("logRemoved", (params) => {
	            if (options.zippedArchive) {
	                const gzName = params.name + ".gz";
	                try {
	                    fs.unlinkSync(gzName);
	                } catch (err) {
	                    // ENOENT is okay, means file doesn't exist, other errors prevent deletion, so report it
	                    if (err.code !== "ENOENT") {
	                        err.message = `Error occurred while removing ${gzName}: ${err.message}`;
	                        this.emit("error", err);
	                        return;
	                    }
	                }
	                this.emit("logRemoved", gzName);
	                return;
	            }
	            this.emit("logRemoved", params.name);
	        });

	        if (options.zippedArchive) {
	            this.logStream.on("rotate", (oldFile) => {
	                try {
	                    if (!fs.existsSync(oldFile)) {
	                        return;
	                    }
	                } catch (err) {
	                    err.message = `Error occurred while checking existence of ${oldFile}: ${err.message}`;
	                    this.emit("error", err);
	                    return;
	                }
	                try {
	                    if (fs.existsSync(`${oldFile}.gz`)) {
	                        return;
	                    }
	                } catch (err) {
	                    err.message = `Error occurred while checking existence of ${oldFile}.gz: ${err.message}`;
	                    this.emit("error", err);
	                    return;
	                }

	                const gzip = zlib.createGzip();
	                const inp = fs.createReadStream(oldFile);
	                inp.on("error", (err) => {
	                    err.message = `Error occurred while reading ${oldFile}: ${err.message}`;
	                    this.emit("error", err);
	                });
	                const out = fs.createWriteStream(oldFile + ".gz");
	                out.on("error", (err) => {
	                    err.message = `Error occurred while writing ${oldFile}.gz: ${err.message}`;
	                    this.emit("error", err);
	                });
	                inp
	                    .pipe(gzip)
	                    .pipe(out)
	                    .on("finish", () => {
	                        try {
	                            fs.unlinkSync(oldFile);
	                        } catch (err) {
	                            if (err.code !== "ENOENT") {
	                                err.message = `Error occurred while removing ${oldFile}: ${err.message}`;
	                                this.emit("error", err);
	                                return;
	                            }
	                        }
	                        this.emit("archive", oldFile + ".gz");
	                    });
	            });
	        }

	        if (options.watchLog) {
	            this.logStream.on("addWatcher", (newFile) => {
	                this.emit("addWatcher", newFile);
	            });
	        }
	    }
	};

	dailyRotateFile = DailyRotateFile;

	util.inherits(DailyRotateFile, Transport);

	DailyRotateFile.prototype.name = "dailyRotateFile";

	const noop = function() {};
	DailyRotateFile.prototype.log = function (info, callback) {
	    callback = callback || noop;

	    this.logStream.write(info[MESSAGE] + this.options.eol);
	    this.emit("logged", info);
	    callback(null, true);
	};

	DailyRotateFile.prototype.close = function () {
	    if (this.logStream) {
	        this.logStream.end(() => {
	            this.emit("finish");
	        });
	    }
	};

	DailyRotateFile.prototype.query = function (options, callback) {
	    if (typeof options === "function") {
	        callback = options;
	        options = {};
	    }

	    if (!this.options.json) {
	        throw new Error(
	            "query() may not be used without the json option being set to true"
	        );
	    }

	    if (!this.filename) {
	        throw new Error("query() may not be used when initializing with a stream");
	    }

	    let results = [];
	    options = options || {};

	    // limit
	    options.rows = options.rows || options.limit || 10;

	    // starting row offset
	    options.start = options.start || 0;

	    // now
	    options.until = options.until || new Date();
	    if (typeof options.until !== "object") {
	        options.until = new Date(options.until);
	    }

	    // now - 24
	    options.from = options.from || options.until - 24 * 60 * 60 * 1000;
	    if (typeof options.from !== "object") {
	        options.from = new Date(options.from);
	    }

	    // 'asc' or 'desc'
	    options.order = options.order || "desc";

	    const logFiles = (() => {
	        const fileRegex = new RegExp(this.filename.replace("%DATE%", ".*"), "i");
	        return fs.readdirSync(this.dirname).filter((file) => path.basename(file).match(fileRegex));
	    })();

	    if (logFiles.length === 0 && callback) {
	        callback(null, results);
	    }

	    const processLogFile = (file) => {
	        if (!file) {
	            return;
	        }

	        const logFile = path.join(this.dirname, file);
	        let buff = "";

	        let stream;

	        if (file.endsWith(".gz")) {
	            stream = new PassThrough();
	            const inp = fs.createReadStream(logFile);
	            inp.on("error",  (err) => {
	                err.message = `Error occurred while reading ${logFile}: ${err.message}`;
	                stream.emit("error", err);
	            });
	            inp.pipe(zlib.createGunzip()).pipe(stream);
	        } else {
	            stream = fs.createReadStream(logFile, {
	                encoding: "utf8",
	            });
	        }

	        stream.on("error",  (err) => {
	            if (stream.readable) {
	                stream.destroy();
	            }

	            if (!callback) {
	                return;
	            }

	            return err.code === "ENOENT" ? callback(null, results) : callback(err);
	        });

	        stream.on("data", (data) => {
	            data = (buff + data).split(/\n+/);
	            const l = data.length - 1;

	            for (let i = 0; i < l; i++) {
	                add(data[i]);
	            }

	            buff = data[l];
	        });

	        stream.on("end",  () => {
	            if (buff) {
	                add(buff, true);
	            }

	            if (logFiles.length) {
	                processLogFile(logFiles.shift());
	            } else if (callback) {
	                results.sort( (a, b) => {
	                    const d1 = new Date(a.timestamp).getTime();
	                    const d2 = new Date(b.timestamp).getTime();

	                    return d1 > d2 ? 1 : d1 < d2 ? -1 : 0;
	                });

	                if (options.order === "desc") {
	                    results = results.reverse();
	                }

	                const start = options.start || 0;
	                const limit = options.limit || results.length;

	                results = results.slice(start, start + limit);

	                if (options.fields) {
	                    results = results.map( (log) => {
	                        const obj = {};
	                        options.fields.forEach( (key) => {
	                            obj[key] = log[key];
	                        });
	                        return obj;
	                    });
	                }

	                callback(null, results);
	            }
	        });

	        function add(buff, attempt) {
	            try {
	                const log = JSON.parse(buff);
	                if (!log || typeof log !== "object") {
	                    return;
	                }

	                const time = new Date(log.timestamp);
	                if (
	                    (options.from && time < options.from) ||
	                    (options.until && time > options.until) ||
	                    (options.level && options.level !== log.level)
	                ) {
	                    return;
	                }

	                results.push(log);
	            } catch (e) {
	                if (!attempt) {
	                    stream.emit("error", e);
	                }
	            }
	        }
	    };
	    processLogFile(logFiles.shift());
	};
	return dailyRotateFile;
}

var winstonDailyRotateFile;
var hasRequiredWinstonDailyRotateFile;

function requireWinstonDailyRotateFile () {
	if (hasRequiredWinstonDailyRotateFile) return winstonDailyRotateFile;
	hasRequiredWinstonDailyRotateFile = 1;
	const winston = requireWinston();
	const DailyRotateFile = requireDailyRotateFile();

	winston.transports.DailyRotateFile = DailyRotateFile;
	winstonDailyRotateFile = DailyRotateFile;
	return winstonDailyRotateFile;
}

var winstonDailyRotateFileExports = requireWinstonDailyRotateFile();
var DailyRotateFile = /*@__PURE__*/getDefaultExportFromCjs(winstonDailyRotateFileExports);

let path = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
const cache = process.platform === 'win32' ? 'AppData/Roaming/' : '.cache';
const name = process.env.APP_NAME ?? process.env.npm_package_name ?? 'unnamed';
path += `/${cache}/${name}/`;
if (!name) {
    console.warn('Logger', "Missing 'name' field in package.json. Defaulting log files to 'unnamed'");
}
const levels = ['error', 'warn', 'info', 'debug'];
const errLogger = winstonExports.createLogger({
    transports: levels.map((l) => {
        return new DailyRotateFile({
            level: l,
            filename: `${path}logs/errors-%DATE%.log`,
            json: true,
            format: winstonExports.format.combine(winstonExports.format.timestamp(), winstonExports.format.align(), winstonExports.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)),
            datePattern: 'yyyy-MM-DD',
            maxFiles: 30,
            handleExceptions: true,
            handleRejections: true,
        });
    }),
});

/**
 * Log passed data and save it in local files.
 */
class Log {
    static _counter = [];
    static get counter() {
        return this._counter;
    }
    static set counter(val) {
        this._counter = val;
    }
    /**
     * Get current date.
     * @returns Formatted date for log files.
     */
    static getDate() {
        const date = new Date();
        const h = date.getHours().toString().length === 1 ? `0${date.getHours()}:` : `${date.getHours()}:`;
        const m = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`;
        const s = date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
        return `${h}${m}${s}`;
    }
    /**
     * Log new error.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static error(target, ...messages) {
        messages.forEach((m) => {
            Log.buildLog(() => chalk.red(`Log.ERROR: ${target}`), ELogTypes.Error, m);
        });
    }
    /**
     * Log new error in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateError(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                const result = await target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.red(`Log.ERROR: ${targetMessage}`), ELogTypes.Error, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new error in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncError(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                const result = target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.red(`Log.ERROR: ${targetMessage}`), ELogTypes.Error, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new warning.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static warn(target, ...messages) {
        messages.forEach((m) => {
            Log.buildLog(() => chalk.yellow(`Log.WARN: ${target}`), ELogTypes.Warn, m);
        });
    }
    /**
     * Log new warning in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateWarn(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                const result = await target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.yellow(`Log.WARN: ${targetMessage}`), ELogTypes.Warn, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new warning in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncWarn(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                const result = target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.yellow(`Log.WARN: ${targetMessage}`), ELogTypes.Warn, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new log.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static log(target, ...messages) {
        messages.forEach((m) => {
            Log.buildLog(() => chalk.blue(`Log.LOG: ${target}`), ELogTypes.Log, m);
        });
    }
    /**
     * Log new log in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateLog(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                const result = await target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.blue(`Log.LOG: ${targetMessage}`), ELogTypes.Log, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new log in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncLog(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                const result = target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.blue(`Log.LOG: ${targetMessage}`), ELogTypes.Log, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new debug.
     * This log will not show up, when NODE_ENV is set to production.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static debug(target, ...messages) {
        if (process.env.NODE_ENV === 'production')
            return;
        messages.forEach((m) => {
            Log.buildLog(() => chalk.magenta(`Log.Debug: ${target}`), ELogTypes.Debug, m);
        });
    }
    /**
     * Log new log in async decorator.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebug(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                if (process.env.NODE_ENV === 'production')
                    return target.apply(this, args);
                const result = await target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.magenta(`Log.Debug: ${targetMessage}`), ELogTypes.Debug, m);
                });
                return result;
            };
        };
    }
    /**
     * Log new log in sync decorator.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncDebug(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                if (process.env.NODE_ENV === 'production')
                    return target.apply(this, args);
                const result = target.apply(this, args);
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.magenta(`Log.Debug: ${targetMessage}`), ELogTypes.Debug, m);
                });
                return result;
            };
        };
    }
    /**
     * Start counting time.
     * To end time counting, run `log.endtime` with the same target.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static time(target, ...messages) {
        Log.counter.push({ target, start: Date.now() });
        messages.forEach((m) => {
            Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), ELogTypes.Log, m);
        });
    }
    /**
     * End counting time.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static endTime(target, ...messages) {
        const localTarget = Log.counter.filter((e) => e.target === target);
        if (localTarget.length === 0) {
            Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), ELogTypes.Log, 'Could not find time start');
        }
        else {
            Log.counter = Log.counter.filter((e) => e.target !== localTarget[0].target && e.start !== localTarget[0].start);
            Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), ELogTypes.Log, `Time passed: ${((Date.now() - localTarget[0].start) / 1000).toFixed(2)}s`);
        }
        messages.forEach((m) => {
            Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${target}`), ELogTypes.Log, m);
        });
    }
    /**
     * Decorator, which will counts how much time async function took to run.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateTime(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                const start = Date.now();
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = await target.apply(this, args);
                Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`);
                return result;
            };
        };
    }
    /**
     * Decorator, which will counts how much time async function took to run.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebugTime(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                if (process.env.NODE_ENV === 'production')
                    return target.apply(this, args);
                const start = Date.now();
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = await target.apply(this, args);
                Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`);
                return result;
            };
        };
    }
    /**
     * Decorator, which will counts how much time sync function took to run.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncTime(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                const start = Date.now();
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = target.apply(this, args);
                Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`);
                return result;
            };
        };
    }
    /**
     * Decorator, which will counts how much time sync function took to run.
     * This log will not show up, when NODE_ENV is set to production.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateDebugSyncTime(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                if (process.env.NODE_ENV === 'production')
                    return target.apply(this, args);
                const start = Date.now();
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = target.apply(this, args);
                Log.buildLog(() => chalk.bgBlue(`Log.TIME: ${targetMessage}`), ELogTypes.Log, `Time passed: ${((Date.now() - start) / 1000).toFixed(2)}s`);
                return result;
            };
        };
    }
    /**
     * Trace selected data and log related params.
     * @param target Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     */
    static trace(target, ...messages) {
        console.trace(chalk.yellowBright(target));
        messages.forEach((m) => {
            Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${target}`), ELogTypes.Log, m);
        });
    }
    /**
     * Trace selected data and log related params in async decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateTrace(targetMessage, ...messages) {
        return function (target, _context) {
            return async function (...args) {
                console.trace(chalk.yellowBright(target));
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = await target.apply(this, args);
                return result;
            };
        };
    }
    /**
     * Trace selected data and log related params in sync decorator.
     * @param targetMessage Log target used as prefix for log.
     * @param {...unknown} messages All messages that you want to log.
     * @returns Decorator data.
     */
    static decorateSyncTrace(targetMessage, ...messages) {
        return function (target, _context) {
            return function (...args) {
                console.trace(chalk.yellowBright(target));
                messages.forEach((m) => {
                    Log.buildLog(() => chalk.yellowBright(`Log.TRACE: ${targetMessage}`), ELogTypes.Log, m);
                });
                const result = target.apply(this, args);
                return result;
            };
        };
    }
    /**
     * Console.log data from log and push it to function, which saves it.
     * @param color Chalks function, which colours logs.
     * @param type Category of log.
     * @param message Messages to save.
     */
    static buildLog(color, type, message) {
        console.info(`[${chalk.gray(Log.getDate())}] ${color()} ${Log.toString(message)}`);
        Log.saveLog(message, type);
    }
    /**
     * Save log in files.
     * @param message Message to save.
     * @param type Category of log.
     */
    static saveLog(message, type) {
        const mess = typeof message !== 'string' ? JSON.stringify(message, null, 2) : message;
        switch (type) {
            case ELogTypes.Warn:
                errLogger.warn(mess);
                return;
            case ELogTypes.Error:
                errLogger.error(mess);
                return;
            case ELogTypes.Debug:
                errLogger.debug(mess);
                return;
            case ELogTypes.Log:
            default:
                errLogger.info(mess);
        }
    }
    /**
     * Stringify log.
     * @param message Stringify message to save it.
     * @returns Stringified log.
     */
    static toString(message) {
        return typeof message !== 'string' ? JSON.stringify(message, null, 2) : message;
    }
}

module.exports = Log;

//various inputs:
//1. RGB rgb(255,255,255)
//2. HSL hsl(120,60,60)
//3. HEX #ffffff

const input = process.argv[2];

//detect if rgb, hsl or hex
const detectType = (input) => {
    if (input.includes("(")) {
        const type = input.split("(")[0];
        return type === "rgb" ? "rgb" : "hsl";
    }

    if (input.includes("#")) {
        return "hex";
    }
    return "wrong format";
};

const convertType = {
    rgb: 1,
    hex: 1,
    hsl: 1,
};

//1. hex -> rgb -> hsl
//2. hsl -> rgb -> hex
//3. rgb -> hsl/hex

const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return [componentToHex(r), componentToHex(g), componentToHex(b)];
};

const hexToRgb = (x, y, z) => {
    console.log(x, y, z);
    const r = parseInt(x, 16);
    const g = parseInt(y, 16);
    const b = parseInt(z, 16);
    return [r, g, b];
};

const rgbToHsl = (r, g, b) => {
    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
};

const hslToRgb = (h, s, l) => {
    (h /= 360), (s /= 100), (l /= 100);
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const parseArray = (array, type) => {
    if (type === "rgb") {
        return `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
    } else if (type === "hsl") {
        return `hsl(${array[0]}, ${array[1]}, ${array[2]})`;
    } else if (type === "hex") {
        return `#${array[0]}${array[1]}${array[2]}`;
    }
};

const parseInput = (input, type) => {
    if (type === "rgb" || type === "hsl") {
        const regExp = /\(([^)]+)\)/;
        //removes parenthesis
        let cleaned = regExp.exec(input)[1].split(",");
        cleaned = cleaned.map((x) => Number(x));
        return cleaned;
    } else if (type === "hex") {
        const x = input.substr(1, 2);
        const y = input.substr(3, 2);
        const z = input.substr(5, 2);

        return [x, y, z];
    }
};

const main = (input) => {
    //if hex return rgb and hsl
    //if rgb return hsl and hex
    //if hsl return rgb and hex
    const type = detectType(input);
    const cleanedInput = parseInput(input, type);

    if (type === "hex") {
        //return rgb and hsl
        const rgbArray = hexToRgb(...cleanedInput);
        const hslArray = rgbToHsl(...rgbArray);
        console.log("RGB: ", parseArray(rgbArray, "rgb"));
        console.log("HSL: ", parseArray(hslArray, "hsl"));
    } else if (type === "hsl") {
        //return hex and rgb
        const rgbArray = hslToRgb(...cleanedInput);
        const hexArray = rgbToHex(...rgbArray);
        console.log("RGB: ", parseArray(rgbArray, "rgb"));
        console.log("HEX: ", parseArray(hexArray, "hex"));
    } else if (type === "rgb") {
        //return hsl and hex
        const hslArray = rgbToHsl(...cleanedInput);
        const hexArray = rgbToHex(...cleanedInput);
        console.log("HSL: ", parseArray(hslArray, "hsl"));
        console.log("HEX: ", parseArray(hexArray, "hex"));
    }
};

main(process.argv[2]);

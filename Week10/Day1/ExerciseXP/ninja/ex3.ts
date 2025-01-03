interface HasNumericProperty {
    num: number
}

function multiplyProperty(obj: HasNumericProperty, prop: keyof HasNumericProperty, factor: number): number {
    return obj[prop] * factor;
}

let obj = <HasNumericProperty>{num: 10}

console.log(multiplyProperty(obj, 'num', 5))
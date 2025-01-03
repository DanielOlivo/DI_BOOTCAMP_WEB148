function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.includes(typeof value)
}

console.log(validateUnionType(1, ['number', 'string']))
console.log(validateUnionType('dude', ['number', 'string']))
console.log(validateUnionType(true, ['number', 'string']))
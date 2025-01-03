type StringLength = number
type MappedType<T extends number | string> = T extends number ? number : StringLength

function mapType<T extends number | string>(arg: T): MappedType<T>;
function mapType(n): MappedType<number>{
    if(typeof n === 'number') return n;
    return n.length;
}

console.log('when number:', mapType(10));
console.log('when string:', mapType('this is a string!'));
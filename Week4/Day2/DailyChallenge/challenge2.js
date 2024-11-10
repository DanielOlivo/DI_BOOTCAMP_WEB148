//
for(i = 1; i < 6; i++){
    console.log('* '.repeat(i));
}


for(i = 1; i < 6; i++){
    let line = '';
    for(j = 0; j < i; j++){
        line += '* ';
    }
    console.log(line);
}
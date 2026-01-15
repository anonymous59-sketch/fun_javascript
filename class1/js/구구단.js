// 구구단
console.log(`구구단`);
let guGuDan = '';

for (let i = 2; i <= 9; i++) {
	guGuDan += (`${i}단\t`);
	for (let j = 1; j <= 9; j++) {
		guGuDan += (`${i} * ${j} = ${i * j}\t`);
	}
	guGuDan += `\n`;
}

console.log(guGuDan);

guGuDan = '';

for (let i = 0; i <= 9; i++) {
	for (let j = 2; j <= 9; j++) {
		if (i == 0) {
			guGuDan += `${j}단\t\t\t`;
		} else {
			guGuDan += `${j} * ${i} = ${i * j}\t`;
		}
	}
	guGuDan += `\n`;
}
console.log(guGuDan);

guGuDan = ``;
for (let i = 2; i <= 9; i++) {
	console.log(`구구단 ${i}단`);
	for (let j = 1; j <= 9; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}
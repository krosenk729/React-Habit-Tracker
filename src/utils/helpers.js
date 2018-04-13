export function floorEr(num){
	if(num === 0) return 0
	if(num <= 2.5) return 1
	if(num <= 5) return 2
	if(num <= 7.5) return 3
	return 4
}

export function rangeTen(){
	return new Array(10).fill(0).map((i, index) => i + index);
}
export function floorEr(num){
	if(num === 0) return 0 ;
	if(num <= 2) return 1 ;
	if(num <= 4) return 2 ;
	if(num <= 6) return 3 ;
	if(num <= 8) return 4 ;
	return 5
}

export function rangeFive(){
	return new Array(6).fill(0).map((i, index) => i + index);
}
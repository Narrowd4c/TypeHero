// https://typehero.dev/challenge/index-signatures

type GroceryList = {
	[key:string] :number
};

type InappropriateActionBySituation = {
	[key:string]:string[]
};

type CharactersById = {
	[key:number]:{
		id:number,
		name:string,
		status:string,
		species:string
	}
};
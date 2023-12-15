// https://typehero.dev/challenge/mapped-object-types

type Obj = {
	name:string,
	year:number,
	director:string,
}

type MovieInfoByGenre<T> = {
	[K in keyof T]: Obj;
};

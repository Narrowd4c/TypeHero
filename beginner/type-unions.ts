// https://typehero.dev/challenge/type-unions

// Part 1: Meters
type Meters = {
  unit: 'meters';
  value: number;
};

type Miles = {
  unit: 'miles';
  value: number;
};
type Feet = {
  unit:'feet',
  value:number
}
type Distance = Meters | Miles | Feet;

// Part 2: position
type Position = 'top' | 'topLeft' | 'topRight' | 'left' | 'center' |'bottomLeft' | 'bottom' | 'bottomRight' | 'right';


// answer 2

type Meters = {
    unit: 'meters' | 'feet';
    value: number;
  };
  
  type Miles = {
    unit: 'miles';
    value: number;
  };
  
  type Distance = Meters | Miles;
  
  // Part 2: position
  type Orientation = {
    x: 'right' | 'left'
    y: 'top' | 'bottom'
    z: 'center'
  }
  
  //  https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype
  type Position = Orientation[keyof Orientation]
    | `${Orientation['y']}${Capitalize<Orientation['x']>}`
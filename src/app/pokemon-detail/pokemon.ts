export interface Pokemon{
    id:number;
    name:string;
    gender:string;
    img:string;
    abilities:any[];
    height:number;
    weight:number;
    baseExp:number;
    stats:{hp:number, attack:number, defense:number,special_attack:number,speed:number};
    evolution:string;
    next:string;
    prev:string;
}
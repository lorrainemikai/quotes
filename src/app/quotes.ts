export class Quotes {
  showDescription: any;
    constructor(public id:number,public name:string ,public description :string,public upvotes:number,public downvotes :number,public compeleteDate:Date){
        this.showDescription=false
    }
    

           
}

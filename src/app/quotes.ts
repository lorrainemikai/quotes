export class Quotes {
  public showDescription: boolean;
    constructor(public id:number,public name:string ,public author:string,public upvotes:number,public downvotes :number,public compeleteDate:Date){
        this.showDescription=false
    }          
}

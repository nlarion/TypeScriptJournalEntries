module Journal {
  export interface IEntry {
    title: string;
    body: string;
    votes: number;
    upVote(): void;
    downVote(): void;
    wordCount(): number;
    validation(): boolean;
    assignedTo: IAuthor;
  }

  export interface IAuthor {
    name: string;
    email: string;
  }

  export class Entry implements IEntry {
    votes: number = 0;
    constructor(public title: string, public body: string, public assignedTo: IAuthor){}
    upVote() {
      this.votes += 1;
    }
    downVote() {
      this.votes -= 1;
    }
    wordCount() {
      var split = this.body.split(" ");
      return split.length;
    }
    validation() {
      if(this.title.length > 0 && this.title.length < 20 && this.body.length > 0  && this.body.length < 500){
        return true;
      }else{
        return false;
      }
    }
  }
}

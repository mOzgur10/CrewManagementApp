export class Certificate {
    id: number;
    name: string;
    issueDate: Date;
    expiryDate: Date;

    constructor(id: number, name: string, issueDate: Date, expiryDate: Date) {
        this.id = id;
        this.name = name;
        this.issueDate = issueDate;
        this.expiryDate = expiryDate;
      }
  }

  
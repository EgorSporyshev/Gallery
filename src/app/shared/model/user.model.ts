export class User {
    constructor(
      public email: string,
      public password: string,
      public fio: string,
      public datebirth: string,
      public id?: number
    ) {}
  }
  
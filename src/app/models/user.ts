export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public session: boolean,
        public id?:number
      ) {}
    
}

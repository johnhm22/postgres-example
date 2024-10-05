export class Todos {
  static async GetTodos() {
    return {
      1: 'Wash dishes',
      2: 'Gardening',
    };
  }
}

class Department {
  constructor(n: string) {
    this.name = n;
  }

  name: string;
}

// module.exports = Todos;
// export default Todos;

class Index {
  private name: string;
  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
  private phone: string;

  constructor(name: string) {
    this.name = name;
  }

  public print() {
    console.log("name: ", this.name);
  }
}

const index = new Index("typescript hello");
index.print();

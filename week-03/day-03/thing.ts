class Thing {
    private name: string;
    private completed: boolean;
  
    constructor(name: string, completed?: boolean) {
      this.name = name;
      this.completed = completed ?? false;
    }
  
    public complete(): void {
      this.completed = true;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }
  
    toString(): string {
      return `[${this.completed ? 'x' : ' '}] ${this.name}`;
    }
  }
  
  export { Thing };
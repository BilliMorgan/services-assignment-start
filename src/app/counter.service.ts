export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  increment() {
    this.activeToInactiveCounter++;
    console.log('Inactive =  ', this.activeToInactiveCounter);
  }
  decrement() {
    this.inactiveToActiveCounter++;
    console.log(' Active = ', this.inactiveToActiveCounter);
  }
}

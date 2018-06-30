export class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(event, data) {
    const listeners = this.events[event.type] || [];
    listeners.forEach(listener => {
      listener.call(this, data);
    });
  }

  subscribe(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
    return () => {
      this.events[event] = this.events[event].filter(eventFn => fn !== eventFn);
    };
  }
}

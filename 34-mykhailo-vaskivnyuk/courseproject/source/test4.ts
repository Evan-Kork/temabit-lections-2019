import 'reflect-metadata';
import { ReactiveStorage } from './reactive/reactive.storage';
import { Timer } from './reactive/ticker';
import { TrackedProperty } from './reactive/tracked.property';

class TestService extends Object {
  private _superPuperProperty: number = 10;

  @TrackedProperty({
    initial(): any {
      return 10;
    },
  })
  public x: number;

  @TrackedProperty({
    initial(): any {
      return 20;
    },
  })
  public y: number;

  public get z(): number {
    return this.x * this.y;
  }

  public constructor() {
    super();
  }
}

const instance = new TestService();
const storage = ReactiveStorage.persist(instance);
const emitter = storage.emitter;

type Writable<T> = {
  -readonly [key in keyof T]: T[key];
};

let collectedChanges: Writable<TestService> = createChanges(null);

const ticker = new Timer(10000);

function createChanges(prev: Writable<TestService> | null): Writable<TestService> {
  if (prev) {
    const proto = Object.getPrototypeOf(prev);
    Object.assign(proto, prev);
    prev = Object.create(proto);
  } else {
    const proto = Object.create(null);
    for (const prop of storage.properties) {
      proto[prop] = storage.get(prop);
    }
    console.log('initials', proto);
    prev = Object.create(proto);
  }
  return prev!;
}
ticker.on('start', () => {
  collectedChanges = createChanges(collectedChanges);
});

ticker.on('tick', () => {
  if (Object.keys(collectedChanges).length !== 0) {
    console.log(collectedChanges);
  } else {
    console.log('No changes');
  }
});
for (const prop of storage.properties) {
  emitter.on(prop, (value, prev) => {
    console.log('%s changed from %o to %o', prop, prev, value);
    ticker.start();
    Object.assign(collectedChanges, {
      [prop]: value
    });
    const proto = Object.getPrototypeOf(collectedChanges) as typeof collectedChanges;
    if (Object.is(proto[prop], value)) {
      delete collectedChanges[prop];
    }
  });
}

setTimeout(() => {
  instance.x = Math.floor(Math.random() * 10);
  instance.y = Math.floor(Math.random() * 10);
}, 1000);

setTimeout(() => {
  instance.x = Math.floor(Math.random() * 10);
  instance.y = Math.floor(Math.random() * 10);
}, 12000);

setTimeout(() => {
}, 30000);

export {};

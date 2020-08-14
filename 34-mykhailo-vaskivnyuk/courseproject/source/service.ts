import 'reflect-metadata';
import { ReactiveStorage } from './reactive/reactive.storage';
import { Timer } from './reactive/ticker';
import { TrackedProperty } from './reactive/tracked.property';

class x extends Object {

    method() {
        return 100;
    }

    constructor() {
        super();
    }
}

const y = new x();

console.log(x.prototype);
console.log(Object.getPrototypeOf(y) === x.prototype);
console.log(Object.getPrototypeOf(y) === Object.prototype);
console.log(y);

export type ServiceProps = 'firstName' | 'lastName' | 'email';

export class TestService extends Object {

  @TrackedProperty({
    initial(): string {
      return '1';
    },
  })
  public firstName: string = '1';

  @TrackedProperty({
    initial(): string {
      return '2';
    },
  })
  public lastName: string;

  @TrackedProperty({
    initial(): string {
      return '3';
    },
  })
  public email: string;

  public constructor() {
    super();
  }
}

console.log('BEFOR INSTANCE CREATE');
const META_KEY = Reflect.getMetadataKeys(TestService.prototype)[0];
console.log(META_KEY);
console.log({ ...Reflect.getMetadata(META_KEY, TestService.prototype).properties });

export const instance = new TestService();

console.log(TestService.prototype === Object.getPrototypeOf(instance));
console.log('AFTER INSTANCE CREATE');
console.log({ ...Reflect.getMetadata(META_KEY, instance).properties });

const storage = ReactiveStorage.persist(instance);
console.log(storage.properties);
const emitter = storage.emitter;

type Writable<T> = {
  -readonly [key in keyof T]: T[key];
};

let collectedChanges: Writable<TestService> = createChanges(null);

const ticker = new Timer(1000);

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

console.log("FOR");
for (const prop of storage.properties) {
    //console.log(prop);
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

export function getChanges(cb: Function) {
    ticker.on('tick', () => {
        if (Object.keys(collectedChanges).length !== 0) {
            cb(collectedChanges);
            console.log(collectedChanges);
        } else {
          //console.log('No changes');
        }
      });
}

setTimeout(() => {
}, 300000);

emitter.on('firstName', (value, prev) => {
    console.log('%s changed from %o to %o', 'firstName', prev, value);
});

//instance.firstName = 'dfdf';
//instance.lastName = 'dddddd';

export {};

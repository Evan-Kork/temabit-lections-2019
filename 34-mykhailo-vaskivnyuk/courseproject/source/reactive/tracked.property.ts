import 'reflect-metadata';
import { PropertyDecorator } from '../helpers/better.types';
import { ReactiveProperty, ReactivePropertyOptions } from './reactive.metadata';
import { ReactiveStorage } from './reactive.storage';

export function TrackedProperty(options: Readonly<Partial<ReactivePropertyOptions>> = {}): PropertyDecorator<string> {
  const decorator = ReactiveProperty(options);
  //console.log(decorator);
  return (target, propertyKey) => {
    console.log('DECORATE PROPERTY');
    Reflect.decorate([decorator as any], target, propertyKey);
    const META_KEY = Reflect.getMetadataKeys(target)[0];
    console.log(META_KEY);
    console.log({ ...Reflect.getMetadata(META_KEY, target).properties });
    return {
      get(this: typeof target) {
        const storage = ReactiveStorage.persist(this);
        return storage.get(propertyKey);
      },
      set(this: typeof target, value: (typeof target)[typeof propertyKey]) {
        const storage = ReactiveStorage.persist(this);
        storage.update(propertyKey, value);
      }
    };
  };
}

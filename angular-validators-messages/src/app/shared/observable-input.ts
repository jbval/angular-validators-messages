import { BehaviorSubject } from 'rxjs';

export function ObservableInput(defaultValue?) {
    const subjectSymbol = Symbol();
    const subjectSymbolObservable = Symbol();

    return (target, key) => {

        function initDefaultValue(object) {
            if (!object[subjectSymbolObservable]) {
                object[subjectSymbol] = new BehaviorSubject(defaultValue);
                object[subjectSymbolObservable] = object[subjectSymbol].asObservable();
            }
        }

        Object.defineProperty(target, key, {
            set(value) {
                initDefaultValue(this);

                if (value !== this[subjectSymbol].getValue()) {
                    this[subjectSymbol].next(value);
                }
            },
            get() {
                initDefaultValue(this);

                return this[subjectSymbolObservable];
            },
        });
    };
}


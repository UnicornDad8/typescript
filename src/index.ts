// Generic classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair(1, "apple");
let pair2 = new KeyValuePair("1", "apple");

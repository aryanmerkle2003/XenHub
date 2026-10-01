// pdf.js 5 relies on Map.prototype.getOrInsertComputed, which older browsers lack.
type Keyed<K, V> = {
  has(key: K): boolean
  get(key: K): V | undefined
  set(key: K, value: V): unknown
}

function patch(proto: object) {
  const p = proto as {
    getOrInsert?: unknown
    getOrInsertComputed?: unknown
  }
  if (!p.getOrInsert) {
    p.getOrInsert = function <K, V>(this: Keyed<K, V>, key: K, value: V) {
      if (!this.has(key)) this.set(key, value)
      return this.get(key) as V
    }
  }
  if (!p.getOrInsertComputed) {
    p.getOrInsertComputed = function <K, V>(this: Keyed<K, V>, key: K, fn: (key: K) => V) {
      if (!this.has(key)) this.set(key, fn(key))
      return this.get(key) as V
    }
  }
}

patch(Map.prototype)
patch(WeakMap.prototype)

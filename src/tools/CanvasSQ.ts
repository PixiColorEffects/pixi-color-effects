//  @ts-nocheck
export class CanvasSQ {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
  distanceTo(e) {
    return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
  }
  angleTo(e) {
    let t = -(this.x - e.x),
      s = this.y - e.y,
      i = 360 - Math.atan2(s, t) * (180 / Math.PI);
    return i < 0 && (i += 360), i > 360 && (i -= 360), i;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  lengthSQ() {
    return this.dot(this);
  }
  length() {
    return Math.sqrt(this.lengthSQ());
  }
  hypot2() {
    return this.dot(this);
  }
  hypot() {
    return Math.hypot(this.x, this.y);
  }
  add(e) {
    return e
      ? e instanceof CanvasSQ
        ? new CanvasSQ(this.x + e.x, this.y + e.y)
        : new CanvasSQ(this.x + e, this.y + e)
      : this;
  }
  neg(e) {
    return e instanceof CanvasSQ
      ? new CanvasSQ(this.x - e.x, this.y - e.y)
      : new CanvasSQ(this.x - e, this.y - e);
  }
  mul(e) {
    return e instanceof CanvasSQ
      ? new CanvasSQ(this.x * e.x, this.y * e.y)
      : new CanvasSQ(this.x * e, this.y * e);
  }
  rotateAround(e, t) {
    let s = Math.sin(t),
      n = Math.cos(t),
      a = this.x - e.x,
      r = this.y - e.y,
      o = a * s + r * n;
    return new CanvasSQ(a * n - r * s + e.x, o + e.y);
  }
  equalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  clone() {
    return new CanvasSQ(this.x, this.y);
  }
}

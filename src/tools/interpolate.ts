//  @ts-nocheck
export class interpolate {
  constructor(e, t) {
    var s, i, n, a, r, o, h, c, l, d, u, p, g;
    if (null != e && null != t) {
      for (
        c = e.length - 1,
          a = [],
          u = [],
          h = [],
          d = [],
          p = [],
          i = [],
          s = [],
          n = [],
          o = [],
          l = [],
          r = 0;
        0 <= c ? r < c : r > c;
        0 <= c ? (r += 1) : (r -= 1)
      )
        (a[r] = e[r + 1] - e[r]),
          (o[r] = t[r + 1] - t[r]),
          (l[r] = o[r] / a[r]);
      for (r = 1; 1 <= c ? r < c : r > c; 1 <= c ? (r += 1) : (r -= 1))
        u[r] =
          (3 / a[r]) * (t[r + 1] - t[r]) - (3 / a[r - 1]) * (t[r] - t[r - 1]);
      for (
        h[0] = 1, d[0] = 0, p[0] = 0, r = 1;
        1 <= c ? r < c : r > c;
        1 <= c ? (r += 1) : (r -= 1)
      )
        (h[r] = 2 * (e[r + 1] - e[r - 1]) - a[r - 1] * d[r - 1]),
          (d[r] = a[r] / h[r]),
          (p[r] = (u[r] - a[r - 1] * p[r - 1]) / h[r]);
      for (
        h[c] = 1, p[c] = 0, i[c] = 0, r = g = c - 1;
        g <= 0 ? r <= 0 : r >= 0;
        g <= 0 ? (r += 1) : (r -= 1)
      )
        (i[r] = p[r] - d[r] * i[r + 1]),
          (s[r] =
            (t[r + 1] - t[r]) / a[r] - (a[r] * (i[r + 1] + 2 * i[r])) / 3),
          (n[r] = (i[r + 1] - i[r]) / (3 * a[r]));
      (this.x = e.slice(0, c + 1)),
        (this.a = t.slice(0, c)),
        (this.b = s),
        (this.c = i.slice(0, c)),
        (this.d = n);
    }
  }
  interpolate(e) {
    var t, s, i;
    for (
      s = i = this.x.length - 1;
      (i <= 0 ? s <= 0 : s >= 0) && !(this.x[s] <= e);
      i <= 0 ? (s += 1) : (s -= 1)
    );
    return (
      (t = e - this.x[s]),
      this.a[s] +
        this.b[s] * t +
        this.c[s] * Math.pow(t, 2) +
        this.d[s] * Math.pow(t, 3)
    );
  }
}

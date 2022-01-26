import {
  D as t,
  F as e,
  l as n,
  d as s,
  h as o,
  v as i,
  A as r,
  _ as a,
  a as c,
  B as l,
  b as d,
  e as u,
  y as p,
  q as h,
  L as g,
  c as f,
  g as m,
  s as y,
  x as v,
  f as b
} from './preact.89f2d999.js'
var w = {
  app: 'Btww9',
  tablature: 'Btw148',
  tablatureFullscreen: 'Btw148 Btwq0',
  debug: 'Btw16k',
  tos: 'Btw1uz',
  popupOverlay: 'Btw2fs',
  footer: 'Btwsw',
  footerWithAds: 'Btwsw Btw2dx',
  copyright: 'Btwrv',
  rightSidebar: 'Btw13h',
  appFree: 'Btww9 Btw35a',
  appPlus: 'Btww9 Btw35a'
}
const S = !0,
  E = 27
var I = t()
const x = o
function C () {
  for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
    o[i] = arguments[i]
  const r = e(I),
    a = n({})
  return (
    x(
      () =>
        r.on('@changed', (t, e) => {
          o.some(t => t in e) && a[1]({})
        }),
      []
    ),
    s(() => {
      const t = r.get(),
        e = { dispatch: r.dispatch, store: r }
      for (const n of o) e[n] = t[n]
      return e
    }, [a[0]])
  )
}
function k (t) {
  for (
    var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1;
    s < e;
    s++
  )
    n[s - 1] = arguments[s]
  return function (e) {
    return i(t, Object.assign({}, e, C.apply(null, n)))
  }
}
const T = {}
function A (t, e) {
  ;(t.onload = function () {
    ;(this.onerror = this.onload = null), e(null, t)
  }),
    (t.onerror = function () {
      ;(this.onerror = this.onload = null),
        e(new Error('Failed to load ' + this.src), t)
    })
}
function O (t, e) {
  t.onreadystatechange = function () {
    ;('complete' !== this.readyState && 'loaded' !== this.readyState) ||
      ((this.onreadystatechange = null), e(null, t))
  }
}
function P (t, e) {
  return (
    T[e] ||
      (T[e] = new Promise((n, s) => {
        !(function (t, e) {
          const n = document.head || document.getElementsByTagName('head')[0],
            s = document.createElement('script')
          ;(s.async = !0),
            (s.defer = !0),
            (s.src = t),
            ('onload' in s ? A : O)(s, e),
            s.onload || A(s, e),
            n.appendChild(s)
        })(t, t => {
          ;(window[e] = !t), t ? s(t) : n()
        })
      })),
    T[e]
  )
}
const _ = ['signin', 'signup', 'subscribePlus', 'updateCard', 'help']
function L () {
  return P(
    'https://www.google.com/recaptcha/api.js?render='.concat(
      window.__RECAPTCHA_KEY__
    ),
    '__LOADED_RECAPTCHA__'
  )
}
async function N (t) {
  try {
    return (
      window.grecaptcha || (await L()),
      await window.grecaptcha.execute(window.__RECAPTCHA_KEY__, { action: t })
    )
  } catch (t) {}
}
function R (t) {
  const n = e(I),
    s = t.href || t.to,
    o = t.onClick,
    a = r(
      t => {
        ;(t => !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey))(t) ||
          (t.preventDefault(), o && o(), n.dispatch('navigate', s))
      },
      [s, o]
    )
  return i('a', Object.assign({}, t, { href: s, onClick: a, to: null }))
}
var j = {
  pane: 'Cb130o',
  divider: 'Cb178',
  dividerEdge: 'Cb12tj',
  dividerSmall: 'Cb120l',
  float: 'Cb1hh',
  icon: 'Cb12of',
  item: 'Cb1c3',
  logo: 'Cb12kp',
  text: 'Cb19h',
  stroke: 'Cb11ne',
  itemActive: 'Cb1c3 Cb14w',
  logoText: 'Cb12xu',
  overlay: 'Cb1ls',
  jobs: 'Cb1h4',
  new: 'Cb11qw',
  panel: 'Cb1x3'
}
const M = {
  signin: ['signup', 'forgotpassword'],
  account: ['changepassword', 'cancelPlus', 'deactivate', 'updateCard'],
  plus: ['subscribePlus']
}
function D (t) {
  let { id: n, route: s, url: o, songUrl: a, children: c, linkClick: l } = t
  const d = e(I),
    u = n === s.page || (n in M && -1 !== M[n].indexOf(s.page)),
    p = n === s.page ? a : o,
    h = r(
      t => {
        t.preventDefault(), l && l(u), d.dispatch('navigate', p)
      },
      [p]
    )
  return i(
    'a',
    {
      href: p,
      onClick: h,
      id: 'menu-'.concat(n),
      class: u ? j.itemActive : j.item
    },
    c
  )
}
const B = { page: '', isPanel: !1 },
  F = [
    ['/', { page: 'search', isPanel: !0 }],
    ['/a/wa/favorites', { page: 'favorites', isPanel: !0 }],
    ['/a/wa/plus', { page: 'plus', isPanel: !0 }],
    ['/a/wa/privacy', { page: 'privacy', isPanel: !0 }],
    ['/a/wa/terms', { page: 'terms', isPanel: !0 }],
    [
      '/a/wa/do-not-sell-my-personal-information',
      { page: 'dnsmpd', isPanel: !0 }
    ],
    ['/a/wa/submit', { page: 'submit', isPanel: !0 }],
    ['/a/wa/about', { page: 'about', isPanel: !0 }],
    ['/a/wa/jobs', { page: 'jobs', isPanel: !0 }],
    ['/a/wa/help', { page: 'help', isPanel: !0 }],
    ['/a/wa/signin', { page: 'signin', isPanel: !0 }],
    ['/a/wa/signup', { page: 'signup', isPanel: !0 }],
    [
      '/a/wa/recoverpassword',
      { page: 'recoverpassword', isPanel: !0, isRecover: !0 }
    ],
    ['/a/wa/account/password', { page: 'changepassword', isPanel: !0 }],
    ['/a/wa/forgotpassword', { page: 'forgotpassword', isPanel: !0 }],
    ['/a/wa/account', { page: 'account', isPanel: !0 }],
    ['/a/wa/account/subscription', { page: 'cancelPlus', isPanel: !0 }],
    ['/a/wa/account/deactivate', { page: 'deactivate', isPanel: !0 }],
    ['/a/wa/account/card', { page: 'updateCard', isPanel: !0 }],
    ['/a/wa/plus/payment', { page: 'subscribePlus', isPanel: !0 }],
    ['/a/wa/howtoreadtab', { page: 'howToReadTab', isPanel: !0 }],
    ['/tags', { page: 'tags', isPanel: !1 }],
    ['/tags/', { page: 'tags', isPanel: !1 }],
    ['/a/wsa/tags', { page: 'tags', isPanel: !1 }],
    ['/a/wsa/tags/', { page: 'tags', isPanel: !1 }],
    [
      /(\/|-)((drum|bass)-)?(tab|chords)-s(\d+)(t(\d+))?(\/r(\d+))?/i,
      t => {
        const [, , , e, n, s, , o, , i] = t
        return 'tab' === n
          ? {
              partInstrument: e || null,
              page: n,
              songId: +s,
              partId: o ? +o : null,
              revisionId: i ? +i : null,
              isPanel: !1
            }
          : {
              page: n,
              songId: +s,
              chordsRevisionId: i ? +i : null,
              isPanel: !1
            }
      }
    ],
    [
      /(\/|-|undefined)tabs-a(\d+)/i,
      t => ({ page: 'artist', artistId: t[2] ? +t[2] : null, isPanel: !0 })
    ],
    [
      /\/a\/wsa\/(.*)-tabs-t(\d+)/i,
      t => ({ page: 'tag', isPanel: !1, name: t[1].replace(/-/, ' ') })
    ],
    [/tags\/(.*)/i, t => ({ page: 'tag', isPanel: !1, name: t[1] })]
  ]
function U (t) {
  for (const [e, n] of F)
    if (e instanceof RegExp) {
      const s = t.match(e)
      if (s) return 'function' == typeof n ? n(s) : n
    } else if (t === e) return 'function' == typeof n ? n.apply(null) : n
  return B
}
function H (t) {
  const e = {}
  return (
    t
      .split('&')
      .map(t => t.split('=').map(decodeURIComponent))
      .forEach(t => {
        e[t[0]] = t[1] || ''
      }),
    e
  )
}
function q (t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1
  return !0
}
function G (t, e, n) {
  return (function (t, e) {
    if (e.user.isLoggedIn) {
      if ('/a/wa/signin' === t || '/a/wa/signup' === t) return '/a/wa/account'
      if (e.user.hasPlus) {
        if ('/a/wa/account/deactivate' === t) return '/a/wa/account'
        if (t.startsWith('/a/wa/plus')) return '/a/wa/account'
      } else if ('/a/wa/account/card' === t) return '/a/wa/account'
    } else {
      if (t.startsWith('/a/wa/account')) return '/a/wa/signin?next=account'
      if ('/a/wa/plus/payment' === t) return '/a/wa/signin?next=subscribe'
    }
  })(t ? t.toLowerCase() : '/', n)
}
function W (t, e, n, s) {
  const o = { route: U(t.toLowerCase()) }
  e && e.length ? (o.query = H(e)) : q(n.query) || (o.query = {}),
    (function (t) {
      const e = t.page
      return 'tab' === e || 'chords' === e || 'tag' === e || 'tags' === e
    })(o.route) &&
      ((o.routeContent = o.route),
      o.query
        ? (o.queryContent = o.query)
        : q(n.queryContent) || (o.queryContent = {})),
    s.dispatch('route/change', o)
}
const V = t => {
  t.on('navigate', (e, n) => {
    let [s, o] = n.split('#')[0].split('?')
    const i = G(s, 0, e)
    return (
      i && (([s, o] = i.split('?')), (n = i)),
      history.pushState(null, '', n),
      W(s, o, e, t)
    )
  }),
    t.on('popstate', (e, n) => {
      let { pathname: s, search: o } = n
      const i = o && o.substring(1),
        r = G(s, 0, e)
      return r
        ? (console.log('Found redirect to', r),
          history.replaceState(null, '', r),
          void t.dispatch('navigate', r))
        : W(s, i, e, t)
    }),
    t.on('route/change', (t, e) => e),
    window.addEventListener('popstate', () => {
      t.dispatch('popstate', {
        pathname: location.pathname,
        search: location.search
      })
    })
}
function X (t) {
  const e = Object.keys(t)
    .filter(e => t[e])
    .map(e =>
      ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(t[e]))
    )
    .join('&')
  return e.length ? '?'.concat(e) : ''
}
const z = 'ALL INSTRUMENTS',
  Y = 'GUITAR',
  J = 'BASS',
  K = 'DRUMS',
  Q = 'ALL TUNINGS'
function Z (t) {
  const e = H(document.location.search.substring(1))
  t.length ? (e.pattern = t) : delete e.pattern,
    history.replaceState(
      null,
      '',
      ''.concat(document.location.pathname || '/').concat(X(e))
    )
}
function $ (t) {
  const e = H(document.location.search.substring(1))
  t.length && 'ALL INSTRUMENTS' !== t ? (e.inst = nt(t)) : delete e.inst,
    history.replaceState(
      null,
      '',
      ''.concat(document.location.pathname || '/').concat(X(e))
    )
}
function tt (t, e, n) {
  let s = n
  return (
    e.length &&
      'ALL INSTRUMENTS' !== e &&
      (s = { pattern: n.pattern, inst: nt(e) }),
    ''.concat(t).concat(X(s))
  )
}
function et (t) {
  switch (t) {
    case 'guitar':
      return 'GUITAR'
    case 'drum':
      return 'DRUMS'
    case 'bass':
      return 'BASS'
    default:
      return 'ALL INSTRUMENTS'
  }
}
function nt (t) {
  switch (t) {
    case 'GUITAR':
      return 'guitar'
    case 'DRUMS':
      return 'drum'
    case 'BASS':
      return 'bass'
    default:
      return ''
  }
}
function st (t, e) {
  return X({
    pattern: t || void 0,
    inst:
      e && 'ALL INSTRUMENTS' !== e.instrument && e.instrument
        ? nt(e.instrument)
        : void 0
  })
}
function ot (t) {
  const { songs: e } = C('songs')
  return i(
    D,
    Object.assign({}, t, {
      url: ''.concat(t.url).concat(st(e.pattern, e.filters))
    })
  )
}
function it (t) {
  const { favorites: e } = C('favorites')
  return i(
    D,
    Object.assign({}, t, {
      url: ''.concat(t.url).concat(st(e.pattern, e.filters))
    })
  )
}
function rt (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s, stroke: o }
  } = t
  return i(
    'svg',
    { width: e || 18, height: n || 19, viewBox: '0 0 18 19', className: s },
    i('path', {
      className: o,
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      d:
        'M10.76 13.12A6.51 6.51 0 0 1 .97 7.56a6.5 6.5 0 1 1 9.79 5.56Zm6.25 4.9-5.4-5.42'
    })
  )
}
const at =
    'M14 21l-7.25 4.75c-.25.25-2 .5-1.5-1L8 16l-6.75-4.5c-.75-.5-2.5-2 0-2.25L10 8.5 12.75 1C13 0 15 0 15.25 1L18 8.5l8.75.75c2.5.25.75 1.75 0 2.25L20 16l2.75 8.75c.5 1.5-1.25 1.25-1.5 1L14 21z',
  ct = ''.concat(
    at,
    'm0-2.25l6.75 4.75-3-8.25 7.25-4.5-8.5-.5L14 3l-2.5 7.25-8.5.5 7.25 4.5-3 8.25L14 18.75z'
  )
function lt (t) {
  let {
    width: e,
    height: n,
    viewbox: s,
    title: o = 'Favorite',
    styles: { icon: r },
    id: a,
    state: c
  } = t
  const l = 'title-'.concat(a || 'favorite')
  return i(
    'svg',
    {
      width: e || 29,
      height: n || 27,
      viewBox: s || '0 0 29 27',
      className: r,
      'data-icon': c,
      id: a,
      'aria-labelledby': l
    },
    i('title', { id: l }, o),
    i('path', { d: 'fill' === c ? at : ct })
  )
}
function dt (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s, stroke: o }
  } = t
  return i(
    'svg',
    { width: e || 29, height: n || 27, viewBox: '0 0 29 27', className: s },
    i('path', {
      d:
        'M2 11a2 2 0 0 1 2-2h5v2h-3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z'
    }),
    i('path', {
      className: o,
      'stroke-width': 2,
      d: 'M14.5 17v-15.5m-5 5l5 -5l5 5'
    })
  )
}
function ut (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s }
  } = t
  return i(
    'svg',
    {
      width: e || 29,
      height: n || 27,
      viewBox: '0 0 1000 820',
      className: s,
      'aria-labelledby': 'title-faq'
    },
    i('title', { id: 'title-faq' }, 'Frequently Asked Questions'),
    i('path', {
      d:
        'M 74 109.4 C 74 109.4 89.9 75 109.4 75 L 890.6 75 C 910.1 75 925 89.9 925 109.4 L 925 594.3 C 925 613.8 910.1 625 890.6 625 L 640 625 C 585 625 530 700 500 733 C 470 700 415 625 360 625 L 109.4 625 C 89.9 625 74.1 613.8 74.1 594.3 L 75 109.4 L 74 109.4 Z M 109.4 0 C 49 0 0 49 0 109.4 L 0 594.3 C 0 654.7 49.7 700 110.1 700 L 356 700 C 390 700 451.2 814.8 500 814.8 C 548.8 814.8 610 700 644 700 L 890.4 700 C 950.8 700 1000 654.7 1000 594.3 L 1000 109.4 C 1000 49 951 0 890.6 0 L 109.4 0 Z M 821.5 443.8 L 851.5 474.5 L 819.1 507.1 L 785.1 472.8 C 767.8 483.8 747.8 487.1 727.5 487.1 C 657.8 487.1 610.5 437.1 610.5 363.1 C 610.5 290.1 661.5 237.8 732.5 237.8 C 800.5 237.8 850.1 289.8 850.1 360.5 C 850.1 395.1 839.5 426.8 821.5 443.8 Z M 752.5 374.1 L 772.5 394.8 C 776.8 385.8 777.5 372.5 777.5 362.1 C 777.5 319.8 760.8 296.5 730.8 296.5 C 701.1 296.5 683.8 320.8 683.8 362.8 C 683.8 402.8 701.8 429.8 728.8 429.8 C 734.1 429.8 737.1 429.1 741.5 426.8 L 720.1 406.1 L 752.5 374.1 Z M 368.9 244.1 L 185.2 244.1 L 185.2 481.5 L 257.9 481.5 L 257.9 396.1 L 353.5 396.1 L 353.5 340.1 L 257.9 340.1 L 257.9 303.8 L 368.9 303.8 L 368.9 244.1 Z M 513.9 244.1 L 441.9 244.1 L 354.3 481.5 L 427.9 481.5 L 439.6 447.8 L 515.9 447.8 L 527.6 481.5 L 601.3 481.5 L 513.9 244.1 Z M 499.9 396.8 L 455.3 396.8 C 463.3 372.8 474.3 336.5 478.3 320.1 C 478.3 320.1 495.6 383.1 499.9 396.8 Z'
    })
  )
}
function pt (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s }
  } = t
  return i(
    'svg',
    { width: e || 29, height: n || 27, viewBox: '0 0 29 27', className: s },
    i('path', {
      d:
        'M16 12V4.5a1.5 1.5 0 0 0-3 0V12H5.5a1.5 1.5 0 0 0 0 3H13v7.5a1.5 1.5 0 0 0 3 0V15h7.5a1.5 1.5 0 0 0 0-3H16zm-5-2V3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-7v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7z'
    })
  )
}
const ht =
  'M1 9.5h11l-3-3m3 3-3 3M5.1 4.3V1.96c.05-.52.5-.86 1.02-.85l10.05-.01c.41.11.8.48.84.9l.01 14.98c.01.48-.4.9-.88.99l-10.02-.02c-.54.04-.98-.4-1.04-.95l.02-2.27'
function gt (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s, stroke: o }
  } = t
  return i(
    'svg',
    {
      width: e || 18,
      height: n || 19,
      viewBox: '0 0 18 19',
      className: s,
      'aria-labelledby': 'title-signin'
    },
    i('title', { id: 'title-signin' }, 'Sign In'),
    i('path', {
      className: o,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: ht
    })
  )
}
function ft (t) {
  let {
    width: e,
    height: n,
    styles: { icon: s, stroke: o }
  } = t
  return i(
    'svg',
    {
      width: e || 19,
      height: n || 19,
      viewBox: '0 0 19 19',
      className: s,
      'aria-labelledby': 'title-account'
    },
    i('title', { id: 'title-account' }, 'Account'),
    i('ellipse', {
      className: o,
      cx: 9.73,
      cy: 5.8,
      rx: 3.76,
      ry: 4.7,
      strokeWidth: 1.5
    }),
    i('path', {
      className: o,
      strokeWidth: 1.5,
      d:
        'M18 15.56c0 2.12-3.8 2.4-8.5 2.4S1 17.67 1 15.55s3.8-4.1 8.5-4.1 8.5 1.98 8.5 4.1Z'
    })
  )
}
const mt = t(null)
class yt extends a {
  static __initStatic () {
    this.contextType = mt
  }
  constructor (t, e) {
    super(t, e)
    const n = e && !e.isMounting ? t.enter : t.appear
    let s
    ;(this.appearStatus = null),
      t.in
        ? n
          ? ((s = 'exited'), (this.appearStatus = 'entering'))
          : (s = 'entered')
        : (s = t.unmountOnExit || t.mountOnEnter ? 'unmounted' : 'exited'),
      (this.state = { status: s }),
      (this.nextCallback = null)
  }
  static getDerivedStateFromProps (t, e) {
    let { in: n } = t
    return n && 'unmounted' === e.status ? { status: 'exited' } : null
  }
  componentDidMount () {
    this.updateStatus(!0, this.appearStatus)
  }
  componentDidUpdate (t) {
    let e = null
    if (t !== this.props) {
      const { status: t } = this.state
      this.props.in
        ? 'entering' !== t && 'entered' !== t && (e = 'entering')
        : ('entering' !== t && 'entered' !== t) || (e = 'exiting')
    }
    this.updateStatus(!1, e)
  }
  componentWillUnmount () {
    this.cancelNextCallback()
  }
  getTimeouts () {
    const { timeout: t } = this.props
    let e, n, s
    return (
      (e = n = s = t),
      null != t &&
        'number' != typeof t &&
        ((e = t.exit), (n = t.enter), (s = t.appear)),
      { exit: e, enter: n, appear: s }
    )
  }
  updateStatus () {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      e = arguments.length > 1 ? arguments[1] : void 0
    if (null !== e) {
      this.cancelNextCallback()
      const s = (n = this) ? n.base || (1 === n.nodeType && n) : null
      'entering' === e ? this.performEnter(s, t) : this.performExit(s)
    } else
      this.props.unmountOnExit &&
        'exited' === this.state.status &&
        this.setState({ status: 'unmounted' })
    var n
  }
  performEnter (t, e) {
    const { enter: n } = this.props,
      s = this.context ? this.context.isMounting : e,
      o = this.getTimeouts()
    e || n
      ? (this.props.onEnter(t, s),
        this.safeSetState({ status: 'entering' }, () => {
          this.props.onEntering(t, s),
            this.onTransitionEnd(t, o.enter, () => {
              this.safeSetState({ status: 'entered' }, () => {
                this.props.onEntered(t, s)
              })
            })
        }))
      : this.safeSetState({ status: 'entered' }, () => {
          this.props.onEntered(t)
        })
  }
  performExit (t) {
    const { exit: e } = this.props,
      n = this.getTimeouts()
    e
      ? (this.props.onExit(t),
        this.safeSetState({ status: 'exiting' }, () => {
          this.props.onExiting(t),
            this.onTransitionEnd(t, n.exit, () => {
              this.safeSetState({ status: 'exited' }, () => {
                this.props.onExited(t)
              })
            })
        }))
      : this.safeSetState({ status: 'exited' }, () => {
          this.props.onExited(t)
        })
  }
  cancelNextCallback () {
    null !== this.nextCallback &&
      (this.nextCallback.cancel(), (this.nextCallback = null))
  }
  safeSetState (t, e) {
    ;(e = this.setNextCallback(e)), this.setState(t, e)
  }
  setNextCallback (t) {
    let e = !0
    return (
      (this.nextCallback = n => {
        e && ((e = !1), (this.nextCallback = null), t(n))
      }),
      (this.nextCallback.cancel = () => {
        e = !1
      }),
      this.nextCallback
    )
  }
  onTransitionEnd (t, e, n) {
    this.setNextCallback(n),
      t
        ? (this.props.addEndListener &&
            this.props.addEndListener(t, this.nextCallback),
          null != e && setTimeout(this.nextCallback, e))
        : setTimeout(this.nextCallback, 0)
  }
  render () {
    return 'unmounted' === this.state.status
      ? null
      : i(mt.Provider, { value: null }, this.props.children)
  }
}
function vt () {}
yt.__initStatic(),
  (yt.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: vt,
    onEntering: vt,
    onEntered: vt,
    onExit: vt,
    onExiting: vt,
    onExited: vt
  })
class bt extends a {
  constructor () {
    super(...arguments),
      bt.prototype.__init.call(this),
      bt.prototype.__init2.call(this),
      bt.prototype.__init3.call(this),
      bt.prototype.__init4.call(this),
      bt.prototype.__init5.call(this),
      bt.prototype.__init6.call(this)
  }
  static __initStatic () {
    this.defaultProps = { timeout: 200 }
  }
  __init () {
    this.onEnter = (t, e) => {
      if (t) {
        const n = this.props.animationStyles[e ? 'appear' : 'enter']
        this.removeClasses(t, 'exit'), n && t.classList.add(n)
      }
      this.props.onEnter && this.props.onEnter(t)
    }
  }
  __init2 () {
    this.onEntering = (t, e) => {
      if (t) {
        const n = this.props.animationStyles[
            (e ? 'appear' : 'enter') + 'Active'
          ],
          s = window.requestAnimationFrame
        n &&
          s(() => {
            s(() => {
              t && t.classList.add(n)
            })
          })
      }
      this.props.onEntering && this.props.onEntering(t)
    }
  }
  __init3 () {
    this.onEntered = (t, e) => {
      if (t) {
        const n = this.props.animationStyles[(e ? 'appear' : 'enter') + 'Done']
        this.removeClasses(t, e ? 'appear' : 'enter'), n && t.classList.add(n)
      }
      this.props.onEntered && this.props.onEntered(t)
    }
  }
  __init4 () {
    this.onExit = t => {
      if (t) {
        const e = this.props.animationStyles.exit
        this.removeClasses(t, 'appear'),
          this.removeClasses(t, 'enter'),
          e && t.classList.add(e)
      }
      this.props.onExit && this.props.onExit(t)
    }
  }
  __init5 () {
    this.onExiting = t => {
      if (t) {
        const e = this.props.animationStyles.exitActive,
          n = window.requestAnimationFrame
        e &&
          n(() => {
            n(() => {
              t && t.classList.add(e)
            })
          })
      }
      this.props.onExiting && this.props.onExiting(t)
    }
  }
  __init6 () {
    this.onExited = t => {
      if (t) {
        const e = this.props.animationStyles.exitDone
        this.removeClasses(t, 'exit'), e && t.classList.add(e)
      }
      this.props.onExited && this.props.onExited(t)
    }
  }
  removeClasses (t, e) {
    const n = this.props.animationStyles[e],
      s = this.props.animationStyles[e + 'Active'],
      o = this.props.animationStyles[e + 'Done']
    n && t.classList.remove(n),
      s && t.classList.remove(s),
      o && t.classList.remove(o)
  }
  render () {
    return i(
      yt,
      Object.assign({}, this.props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      })
    )
  }
}
function wt (t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = n),
    t
  )
}
function St (t, e) {
  if (null == t) return {}
  var n,
    s,
    o = {},
    i = Object.keys(t)
  for (s = 0; s < i.length; s++) (n = i[s]), e.indexOf(n) >= 0 || (o[n] = t[n])
  return o
}
bt.__initStatic()
const Et = t => t && t.props
function It (t, e) {
  const n = Object.create(null)
  return (
    t &&
      c(t).forEach(t => {
        t && (n[t.key] = (t => (e && Et(t) ? e(t) : t))(t))
      }),
    n
  )
}
function xt (t, e, n) {
  return null != n[e] ? n[e] : t.props && t.props[e]
}
function Ct (t, e, n) {
  const s = It(t.children),
    o = (function (t, e) {
      function n (n) {
        return n in e ? e[n] : t[n]
      }
      ;(t = t || {}), (e = e || {})
      const s = Object.create(null)
      let o,
        i = []
      for (const n in t) n in e ? i.length && ((s[n] = i), (i = [])) : i.push(n)
      const r = {}
      for (const t in e) {
        if (s[t])
          for (o = 0; o < s[t].length; o++) {
            const e = s[t][o]
            r[s[t][o]] = n(e)
          }
        r[t] = n(t)
      }
      for (o = 0; o < i.length; o++) r[i[o]] = n(i[o])
      return r
    })(e, s)
  return (
    Object.keys(o).forEach(i => {
      const r = o[i]
      if (!Et(r)) return
      const a = i in e,
        c = i in s,
        d = e[i],
        u = Et(d) && !d.props.in
      !c || (a && !u)
        ? c || !a || u
          ? c &&
            a &&
            Et(d) &&
            (o[i] = l(r, {
              onExited: n.bind(null, r),
              in: d.props.in,
              exit: xt(r, 'exit', t),
              enter: xt(r, 'enter', t)
            }))
          : (o[i] = l(r, { in: !1 }))
        : (o[i] = l(r, {
            onExited: n.bind(null, r),
            in: !0,
            exit: xt(r, 'exit', t),
            enter: xt(r, 'enter', t)
          }))
    }),
    o
  )
}
const kt = ['component', 'childFactory'],
  Tt = Object.values || (t => Object.keys(t).map(e => t[e]))
class At extends a {
  static __initStatic () {
    this.defaultProps = { component: null, childFactory: t => t }
  }
  constructor (t) {
    super(t)
    const e = this.handleExited.bind(this)
    this.state = { handleExited: e, firstRender: !0 }
  }
  componentDidMount () {
    this.appeared = !0
  }
  static getDerivedStateFromProps (t, e) {
    let { children: n, handleExited: s, firstRender: o } = e
    return {
      children: o
        ? ((i = t),
          (r = s),
          It(i.children, t =>
            l(t, {
              onExited: r.bind(null, t),
              in: !0,
              appear: xt(t, 'appear', i),
              enter: xt(t, 'enter', i),
              exit: xt(t, 'exit', i)
            })
          ))
        : Ct(t, n, s),
      firstRender: !1
    }
    var i, r
  }
  handleExited (t, e) {
    const n = It(this.props.children)
    t.key in n ||
      (t.props.onExited && t.props.onExited(e),
      this.setState(e => {
        const n = Object.assign({}, e.children)
        return delete n[t.key], { children: n }
      }))
  }
  render () {
    const t = this.props,
      { component: e, childFactory: n } = t,
      s = St(t, kt),
      o = Tt(this.state.children).map(n)
    return (
      delete s.appear,
      delete s.enter,
      delete s.exit,
      i(
        mt.Provider,
        { value: { isMounting: !this.appeared } },
        e ? i(e, s, o) : i(d, null, o)
      )
    )
  }
}
At.__initStatic()
var Ot = {
  spinner: 'Csr2lv',
  button: 'Csr2lv Csr8e',
  google: 'Csr2lv Csrjl',
  search: 'Csr2lv Csr28t',
  icon: 'Csrkj',
  revisions: 'Csr2lv Csr1bt',
  songs: 'Csr2lv Csr1xa',
  songsInvisible: 'Csr2lv Csr1xa Csr20e'
}
const Pt = t => {
  let {
    width: e,
    height: n,
    fill: s,
    className: o = Ot.spinner,
    style: r,
    id: a,
    iref: c
  } = t
  return i(
    'svg',
    {
      className: o,
      ref: c,
      id: a,
      width: e,
      height: n,
      style: r,
      viewBox: '25 25 50 50',
      'aria-labelledby': 'spinner-title'
    },
    i('circle', { stroke: s, cx: '50', cy: '50', r: '20' })
  )
}
function _t () {
  return u('div', {
    className: 'Bzp2vw',
    children: i(Pt, { width: 50, height: 40, fill: '#128df6' })
  })
}
function Lt (t, e, n, s) {
  const o = t.length,
    i = Math.ceil((o * n) / e),
    r = Math.ceil((o * n + s * i) / e)
  if (1 === r) return [t]
  const a = Math.ceil((e - s) / n)
  let c = 0
  const l = []
  for (let e = 0; e < r; e++) {
    const n = t.substr(c, a)
    let s
    if (e !== r - 1) {
      const t = n.split(' ')
      s = n.lastIndexOf(t[t.length - 1])
    }
    ;(c += s), l.push(n.substr(0, s).trim())
  }
  return l
}
function Nt (t) {
  let { level: e, title: n, action: s, reason: o } = t
  const { dispatch: r, screen: a, device: c } = C('screen', 'device')
  if ('bot' === c.type) return
  p(() => r('curiosity/event', { event: 'Alert', Reason: o }), [])
  const l = (function (t) {
      switch (t) {
        case 'error':
          return 'Ce123t Ce11ar'
        case 'notice':
          return 'Ce123t Ce1285'
        default:
          return 'Ce123t Ce128'
      }
    })(e),
    d = c.isPhone ? 0 : 190,
    u = a.viewport.width - d > 600 ? 600 : a.viewport.width - d,
    h = Lt(n, u, 9, 10),
    g = Lt(s, u, 7, 10),
    f =
      'undefined' == typeof btoa
        ? t => Buffer.from(t, 'binary').toString('base64')
        : btoa
  return i(
    'section',
    { className: l, role: 'alert' },
    h.map(t =>
      i('img', {
        height: 31,
        'aria-label': 'title',
        alt: n,
        src:
          'data:image/svg+xml;base64,' +
          f(
            "<svg xmlns='http://www.w3.org/2000/svg' width='"
              .concat(
                9 * t.length + 10,
                "' height='31'>\n            <text x='50%' y='50%' font-family='\"songsterr\", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' letter-spacing='-0.6px' font-size='20px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>"
              )
              .concat(t, '</text>\n          </svg>')
          )
      })
    ),
    s &&
      g.map(t =>
        i('img', {
          height: 22,
          'aria-label': 'action',
          alt: s,
          src:
            'data:image/svg+xml;base64,' +
            f(
              "<svg xmlns='http://www.w3.org/2000/svg' width='"
                .concat(
                  7 * t.length + 10,
                  "' height='22'>\n            <text x='50%' y='50%' font-family='\"songsterr\", -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif' font-weight='400' font-size='14px' fill='#fff' dominant-baseline='middle' text-anchor='middle'>"
                )
                .concat(t, '</text>\n          </svg>')
            )
        })
      )
  )
}
function Rt () {
  const [t] = h(t => {
    'Sentry' in window &&
      'function' == typeof window.Sentry.captureException &&
      window.Sentry.captureException(t),
      console && console.error(t)
  })
  return t
    ? u(Nt, {
        level: 'error',
        reason: 'lazy',
        title: 'Failed to load page',
        action: 'Please disable your ad blocker and check network connection'
      })
    : u(g, {
        fallback: u(_t, {}),
        children: u(this.props.component, this.props)
      })
}
function jt (t) {
  let e,
    n = t[0],
    s = 1
  for (; s < t.length; ) {
    const o = t[s],
      i = t[s + 1]
    if (
      ((s += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)
    )
      return
    'access' === o || 'optionalAccess' === o
      ? ((e = n), (n = i(n)))
      : ('call' !== o && 'optionalCall' !== o) ||
        ((n = i(function () {
          for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
            s[o] = arguments[o]
          return n.call(e, ...s)
        })),
        (e = void 0))
  }
  return n
}
let Mt
function Dt (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'all'
  if (
    (Mt || (Mt = JSON.parse(document.getElementById('cssImportMap').innerHTML)),
    Mt[t])
  )
    return Promise.all(
      jt([
        Mt,
        'access',
        e => e[t],
        'optionalAccess',
        t => t.map,
        'call',
        t =>
          t(
            t =>
              new Promise((n, s) => {
                if (
                  document.querySelectorAll('link[href="'.concat(t, '"]'))
                    .length
                )
                  return void n(!0)
                const o = document.createElement('link'),
                  i = (
                    document.body || document.getElementsByTagName('head')[0]
                  ).childNodes,
                  r = i[i.length - 1]
                Object.assign(o, {
                  rel: 'stylesheet',
                  href: t,
                  onerror: s,
                  onload: n,
                  media: e
                }),
                  r.parentNode.insertBefore(o, r.nextSibling)
              })
          )
      ])
    )
}
const Bt = f(() =>
    Promise.all([
      import('./AppChords.62a3543f.js'),
      Dt('AppChords', 'all')
    ]).then(t => t[0])
  ),
  Ft = f(() =>
    Promise.all([import('./AppTags.9d0b2864.js'), Dt('AppTags', 'all')]).then(
      t => t[0]
    )
  ),
  Ut = f(() =>
    Promise.all([import('./AppTab.e8a00491.js'), Dt('AppTab', 'all')]).then(
      t => t[0]
    )
  ),
  Ht = f(() =>
    Promise.all([import('./SongsPanel.e86def1f.js'), Dt('SongsPanel')]).then(
      t => t[0]
    )
  ),
  qt = f(() =>
    Promise.all([
      import('./FavoritesPanel.90268ff6.js'),
      Dt('FavoritesPanel')
    ]).then(t => t[0])
  ),
  Gt = f(() =>
    Promise.all([import('./ArtistPanel.abfa363b.js'), Dt('ArtistPanel')]).then(
      t => t[0]
    )
  ),
  Wt = f(() =>
    Promise.all([import('./SubmitPanel.bf66c906.js'), Dt('SubmitPanel')]).then(
      t => t[0]
    )
  ),
  Vt = f(() =>
    Promise.all([import('./TextPanel.c96c4768.js'), Dt('TextPanel')]).then(
      t => t[0]
    )
  ),
  Xt = f(() =>
    Promise.all([import('./AboutPanel.24618561.js'), Dt('AboutPanel')]).then(
      t => t[0]
    )
  ),
  zt = f(() =>
    Promise.all([import('./JobsPanel.46bb0e01.js'), Dt('JobsPanel')]).then(
      t => t[0]
    )
  ),
  Yt = f(() =>
    Promise.all([import('./HelpPanel.54a03261.js'), Dt('HelpPanel')]).then(
      t => t[0]
    )
  ),
  Jt = f(() =>
    Promise.all([import('./SigninPanel.e05a1f5f.js'), Dt('SigninPanel')]).then(
      t => t[0]
    )
  ),
  Kt = f(() =>
    Promise.all([import('./SignupPanel.223770ff.js'), Dt('SignupPanel')]).then(
      t => t[0]
    )
  ),
  Qt = f(() =>
    Promise.all([
      import('./AccountPanel.9bc3664d.js'),
      Dt('AccountPanel')
    ]).then(t => t[0])
  ),
  Zt = f(() =>
    Promise.all([
      import('./ForgotPasswordPanel.a331a484.js'),
      Dt('ForgotPasswordPanel')
    ]).then(t => t[0])
  ),
  $t = f(() =>
    Promise.all([
      import('./ChangePasswordPanel.de3b7ca6.js'),
      Dt('ChangePasswordPanel')
    ]).then(t => t[0])
  ),
  te = f(() =>
    Promise.all([import('./PlusPanel.593d1a89.js'), Dt('PlusPanel')]).then(
      t => t[0]
    )
  ),
  ee = f(() =>
    Promise.all([
      import('./PaymentPanel.8eb62524.js'),
      Dt('PaymentPanel')
    ]).then(t => t[0])
  ),
  ne = f(() =>
    Promise.all([
      import('./SubscriptionPanel.c8aedce3.js'),
      Dt('SubscriptionPanel')
    ]).then(t => t[0])
  ),
  se = f(() =>
    Promise.all([
      import('./DeactivatePanel.6e65f0cc.js'),
      Dt('DeactivatePanel')
    ]).then(t => t[0])
  ),
  oe = f(() =>
    Promise.all([
      import('./UpdateCardPanel.1eb9ed41.js'),
      Dt('UpdateCardPanel')
    ]).then(t => t[0])
  ),
  ie = f(() =>
    Promise.all([
      import('./HowToReadTabPanel.8cf8f547.js'),
      Dt('HowToReadTabPanel')
    ]).then(t => t[0])
  )
var re = {
    exitActive: 'ixbp',
    enterActive: 'ix299',
    enter: 'ix159',
    exit: 'ix2qb'
  },
  ae = {
    exitActive: 'Btos5',
    enterActive: 'Bto2jw',
    enter: 'Bto2az',
    exit: 'Bto32v'
  }
const ce = t => t[0],
  le = t => t[1],
  de = t => (11531520 * ce(t)) / le(t),
  ue = t => t / 11531520
function pe (t, e) {
  return ((4 * e) / le(t)) * ce(t)
}
const he = 32,
  ge = 1024,
  fe = 31
function me (t) {
  return 1024 === t
}
function ye (t) {
  return t >= 24 && t <= 31
}
function ve (t) {
  return t >= 32 && t <= 39
}
const be = 1,
  we = 3,
  Se = 4,
  Ee = 6,
  Ie = 10,
  xe = 14,
  Ce = 16,
  ke = 17,
  Te = 21
function Ae (t) {
  return 1024 === t
    ? 24
    : t < 32
    ? t < 24
      ? t < 16
        ? t < 8
          ? 0
          : 1
        : t < 21
        ? 2
        : 3
      : t < 27
      ? t < 26
        ? 4
        : 5
      : 6
    : t < 40
    ? 7
    : t < 68
    ? t < 47
      ? t < 43
        ? t < 42
          ? 8
          : 9
        : t < 46
        ? 10
        : 11
      : t < 56
      ? t < 48
        ? 12
        : 13
      : t < 64
      ? 14
      : 15
    : t < 96
    ? t < 80
      ? t < 72
        ? 16
        : 17
      : t < 88
      ? 18
      : 19
    : t < 112
    ? t < 104
      ? 20
      : 21
    : t < 120
    ? 22
    : 23
}
const Oe = t =>
    t
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\/|\s+/g, '-')
      .replace(/[^a-z0-9-_]/g, ''),
  Pe = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n]
    return Oe(e.join('-'))
  },
  _e = t => t.replace(/-+/g, '-').replace(/^-*|-$/g, ''),
  Le = t => t.replace(/^the-/g, '')
function Ne (t, e, n) {
  const s = t.views || 0
  let o = !0
  for (const i of e)
    if (t !== i) {
      if (n(i.instrumentId)) {
        const t = i.views || 0
        if (t > s || (t === s && o)) return !0
      }
    } else o = !1
  return !1
}
function Re (t) {
  return t.endsWith('-bass') || t.endsWith('-drum') ? t.slice(0, -4) : t
}
function je (t, e, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
  if (!t) return '/'
  let o = '',
    i = !0
  if (t.tracks && void 0 !== e && !n) {
    let n = null
    const r = t.tracks[e]
    r &&
      (me(r.instrumentId)
        ? ((o = '-drum'), (n = me))
        : ve(r.instrumentId)
        ? ((o = '-bass'), (n = ve))
        : ye(r.instrumentId) && (n = ye)),
      (i = s || !n || Ne(r, t.tracks, n))
  }
  let r = Pe(t.artist, t.title)
  i || (r = Re(r))
  const a = n ? '/r'.concat(n) : '',
    c = i ? 't'.concat(e) : ''
  return (
    '/a/wsa/' +
    Le(
      _e(
        r +
          o +
          '-tab-s'
            .concat(t.songId)
            .concat(c)
            .concat(a)
      )
    )
  )
}
function Me (t, e) {
  if (!t) return '/'
  const n = e ? '/r'.concat(e) : '',
    s = Pe(t.artist, t.title)
  return '/a/wsa/' + Le(_e(s + '-tab-s'.concat(t.songId).concat(n)))
}
function De (t, e) {
  let n = '',
    s = ''
  const o = t.tracks && t.tracks[e]
  o &&
    (me(o.instrumentId)
      ? (s = '-drum')
      : ve(o.instrumentId)
      ? (s = '-bass')
      : ye(o.instrumentId) || (n = 't'.concat(o.partId)))
  let i = Pe(t.artist, t.title)
  return (
    (i = Re(i)), '/a/wsa/' + Le(_e(i + s + '-tab-s'.concat(t.songId).concat(n)))
  )
}
function Be (t) {
  const e = Pe(t.artist || '')
  return '/a/wsa/' + _e(e + '-tabs-a'.concat(t.artistId))
}
function Fe (t) {
  if (!t) return '/'
  const e = Pe(t.artist, t.title)
  return '/a/wsa/' + Le(_e(e + '-chords-s'.concat(t.songId)))
}
var Ue
!(function (t) {
  ;(t[(t.TOO_LONG = 228)] = 'TOO_LONG'),
    (t[(t.MIDI_FAILED = 229)] = 'MIDI_FAILED'),
    (t[(t.UNKNOWN = 500)] = 'UNKNOWN')
})(Ue || (Ue = {}))
const He = (t, e, n) => 'v'.concat(t + ('next' === e ? 1 : 0), '-').concat(n)
function qe () {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
  return '/tags' + (t ? '?page='.concat(t) : '')
}
function Ge (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
  return '/tags/' + t.replace(/ /g, '+') + (e ? '?page='.concat(e) : '')
}
function We (t, e, n, s) {
  return 'tab' === t.page
    ? je(e.current, e.partId, e.revisionId)
    : 'chords' === t.page
    ? Fe(n.current)
    : 'tag' === t.page
    ? s.content
      ? Ge(s.content.tag, s.content.page)
      : '/'
    : 'tags' === t.page
    ? s.content
      ? qe(s.content.page)
      : '/'
    : void 0
}
const Ve = {
  search: Ht,
  favorites: qt,
  artist: Gt,
  plus: te,
  submit: Wt,
  about: Xt,
  jobs: zt,
  help: Yt,
  signin: Jt,
  signup: Kt,
  recoverpassword: $t,
  changepassword: $t,
  forgotpassword: Zt,
  account: Qt,
  cancelPlus: ne,
  deactivate: se,
  updateCard: oe,
  subscribePlus: ee,
  howToReadTab: ie,
  privacy: Vt,
  terms: Vt,
  dnsmpd: Vt
}
function Xe (t) {
  t.preventDefault()
}
const ze = m(t => {
  let { isSmallScreen: e } = t
  const {
      dispatch: n,
      device: s,
      user: r,
      route: a,
      query: c,
      routeContent: l,
      meta: d,
      chords: u,
      tags: h
    } = C(
      'device',
      'user',
      'route',
      'query',
      'routeContent',
      'meta',
      'chords',
      'tags'
    ),
    { isPanel: g, page: f } = a,
    m = We(l, d, u, h)
  p(
    () =>
      s.isDesktop &&
      (function (t) {
        if (!document.body) return
        const e = window.innerWidth - document.body.clientWidth,
          n = t ? '0px' : ''.concat(e, 'px')
        document.body.style.overflow = t ? 'inherit' : 'hidden'
        const s = document.getElementById('app')
        s && (s.style.marginRight = n)
        const o = document.getElementById('controls')
        o && (o.style.marginRight = n)
        const i = document.getElementById('fullscreen-controls')
        i && (i.style.marginRight = n)
        const r = document.getElementById('showroom')
        r && (r.style.paddingRight = n)
        const a = document.documentElement
        a && a.style.setProperty('--page-overflow-gap', n)
      })(!g),
    [g, s.isDesktop]
  ),
    o(
      () =>
        (function (t, e) {
          document.body &&
            (t && _.includes(e)
              ? (document.body.classList.add('grecaptcha-visible'), L())
              : document.body.classList.remove('grecaptcha-visible'))
        })(g, f),
      [g, f]
    )
  let { isDesktop: y } = s,
    { hasPlus: v, isLoggedIn: b, profile: w } = r,
    S = ['ru', 'ru-mo', 'be', 'uk'].some(t => -1 !== s.languages.indexOf(t))
    v = true;
  return i(
    'div',
    { className: j.pane },
    !e &&
      i(
        'nav',
        { className: j.float, id: 'tablist' },
        i(
          R,
          { to: '/', id: 'logo', className: j.logo, title: 'Songsterr' },
          i('img', {
            src: '/static/media/main.866931f6.svg',
            width: 30,
            height: 36,
            alt: 'Songsterr'
          }),
          i('img', {
            src: '/static/media/text.9cfe6bcf.svg',
            width: 62,
            height: 12,
            alt: 'Songsterr'
          })
        ),
        i('div', { className: j.dividerEdge }),
        i(
          ot,
          { id: 'search', route: a, url: '/', songUrl: m },
          i(rt, { styles: j, width: 30, height: 30 }),
          i('div', { className: j.text }, 'Songs')
        ),
        i(
          it,
          { id: 'favorites', route: a, url: '/a/wa/favorites', songUrl: m },
          i(lt, { styles: j }),
          i('div', { className: j.text }, 'Favorites')
        ),
        y &&
          i(
            D,
            { id: 'submit', route: a, url: '/a/wa/submit', songUrl: m },
            i(dt, { styles: j }),
            i('div', { className: j.text }, 'Submit Tab')
          ),
        i('div', { className: j.dividerSmall }),
        !v &&
          i(
            D,
            {
              id: 'plus',
              route: a,
              url: '/a/wa/plus',
              songUrl: m,
              linkClick: t => {
                !t &&
                  n('curiosity/setConversionProps', {
                    'Last referring link': 'Sidebar Button'
                  })
              }
            },
            i(pt, { styles: j }),
            i('div', { className: j.text }, 'Songsterr Plus')
          ),
        i(
          D,
          { id: 'help', route: a, url: '/a/wa/help', songUrl: m },
          i(ut, { styles: j }),
          i('div', { className: j.text }, 'Questions?')
        ),
        !b &&
          i(
            D,
            { id: 'signin', route: a, url: '/a/wa/signin', songUrl: m },
            i(gt, { styles: j, width: 28, height: 29 }),
            i('div', { className: j.text }, 'Sign In')
          ),
        b &&
          i(
            D,
            { id: 'account', route: a, url: '/a/wa/account', songUrl: m },
            i(ft, { styles: j, width: 29, height: 29 }),
            i('div', { className: j.text }, w.name)
          ),
        i('div', { className: j.dividerSmall }),
        y &&
          S &&
          i(
            R,
            {
              id: 'menu-jobs',
              to: '/a/wa/jobs',
              className: j.jobs,
              title: 'Jobs at Songsterr'
            },
            i('img', {
              src: '/static/media/jobs.30375c6a.svg',
              width: 79.271,
              height: 32,
              alt: 'Jobs'
            })
          )
      ),
    i(
      At,
      null,
      g &&
        i(
          bt,
          { animationStyles: ae, timeout: 400, key: 'overlay' },
          i(R, {
            onTouchMove: Xe,
            className: j.overlay,
            id: 'sidebar-overlay',
            to: m,
            title: 'Back to tab',
            tabIndex: -1
          })
        ),
      a.page in Ve &&
        i(
          bt,
          { animationStyles: re, timeout: 400, key: a.page },
          i(
            'main',
            { id: 'panel-'.concat(a.page), className: j.panel },
            i(Rt, {
              component: Ve[a.page],
              route: a,
              query: c,
              user: r,
              device: s,
              songUrl: m,
              isSmallScreen: e,
              id: a.page
            })
          )
        )
    )
  )
})
var Ye = {
  exitActive: 'Cx8aa',
  enterActive: 'Cx82ez',
  enter: 'Cx821x',
  exit: 'Cx81x3'
}
function Je (t) {
  return t ? 'B1vxv B1v1g1' : 'B1vxv B1v3s'
}
class Ke extends a {
  constructor (t) {
    super(t),
      (this.state = {
        online: navigator.onLine,
        className: Je(navigator.onLine),
        message: navigator.onLine ? null : 'offline'
      }),
      (this.updateOnlineStatus = this.updateOnlineStatus.bind(this)),
      (this.hideIndicator = this.hideIndicator.bind(this))
  }
  componentDidMount () {
    window.addEventListener('online', this.updateOnlineStatus),
      window.addEventListener('offline', this.updateOnlineStatus)
  }
  componentWillUnmount () {
    window.removeEventListener('online', this.updateOnlineStatus, !0),
      window.removeEventListener('offline', this.updateOnlineStatus, !0)
  }
  hideIndicator () {
    this.state.online &&
      this.setState(Object.assign({}, this.state, { message: null }))
  }
  updateOnlineStatus () {
    navigator.onLine &&
      (clearTimeout(this.hideIndicatorTimeout),
      (this.hideIndicatorTimeout = setTimeout(this.hideIndicator, 5e3))),
      this.setState({
        online: navigator.onLine,
        className: Je(navigator.onLine),
        message: navigator.onLine ? 'live' : 'offline'
      })
  }
  render () {
    const { online: t, className: e, message: n } = this.state
    let s = null
    return (
      (!n && t) ||
        (s = i(
          bt,
          { animationStyles: Ye, timeout: 400 },
          i('div', { className: e }, n)
        )),
      i(At, null, s)
    )
  }
}
function Qe (t, e) {
  return '/a/wa/SongAdminTools/'.concat(t, '?id=').concat(e)
}
function Ze (t) {
  return 'https://www.songsterr.com'.concat(t)
}
function $e (t) {
  switch (t) {
    case 'subscribe':
      return '/a/wa/plus/payment'
    case 'favorites':
      return '/a/wa/favorites'
    case 'account':
      return '/a/wa/account'
    case 'submit':
      return '/a/wa/submit'
    default:
      return '/'
  }
}
const tn = t => {
  window && !window.confirm('Are you sure?') && t.preventDefault()
}
function en (t) {
  let {
    meta: { songId: e },
    isAdmin: n,
    children: s
  } = t
  if (!n) return i('nav', { className: 'Bkv1ys' }, s)
  const o = Qe('editSong', e),
    r = Qe('updateSrwr', e),
    a = Qe('rerender', e),
    c = Qe('generatePng', e),
    l = Qe('blockDueToLicenseRestriction', e)
  return i(
    'nav',
    { className: 'Bkv1ys' },
    i(
      'a',
      { className: 'Bkv35b', href: window.location.href + '?redesign=off' },
      'SRWO'
    ),
    i('a', { href: o, target: '_blank' }, 'Edit'),
    i('a', { href: r, target: '_blank', onClick: tn }, 'Update'),
    i('a', { href: a, target: '_blank', onClick: tn }, 'Rerender'),
    i('a', { href: l, target: '_blank', onClick: tn }, 'Block'),
    i('a', { href: c, target: '_blank' }, 'Generate PNG'),
    s
  )
}
var nn = k(
  class extends a {
    constructor () {
      super(), (this.state = { offset: 0 })
    }
    componentDidMount () {
      this.props.dispatch('tabEditor/loadAdminData', {
        offset: this.state.offset,
        limit: 500
      })
    }
    render () {
      const { dispatch: t, query: e } = this.props,
        { adminData: n, adminPanelOpened: s } = this.props.tabEditor
      if (!s) return null
      const { offset: o } = this.state,
        r = +e.tabedit,
        a = n.map(t =>
          i(
            'li',
            {
              className: t.id === r ? 'Ex1ot' : void 0,
              onClick: () => this.props.dispatch('tabEditor/loadById', t.id)
            },
            'id"'.concat(t.id, '"-song"').concat(t.songId, '"')
          )
        )
      return i(
        'div',
        { className: 'Ex335' },
        i(
          'div',
          { className: 'Ex1mx' },
          i(
            'button',
            {
              onClick: () => {
                t('tabEditor/loadAdminData', { offset: o - 500, limit: 500 }),
                  this.setState({ offset: o - 500 })
              }
            },
            '<<'
          ),
          i('h1', {}, ''.concat(o, '-').concat(o + 500)),
          i(
            'button',
            {
              onClick: () => {
                t('tabEditor/loadAdminData', { offset: o + 500, limit: 500 }),
                  this.setState({ offset: o + 500 })
              }
            },
            '>>'
          )
        ),
        i('ul', null, a)
      )
    }
  },
  'tabEditor',
  'query'
)
const sn = t => {
  let { onClick: e, id: n, width: s = 11, height: o = 11 } = t
  return i(
    'button',
    { className: 'u2o7', onClick: e },
    i(
      'svg',
      {
        width: s,
        height: o,
        viewBox: '0 0 11 11',
        'aria-labelledby': ''.concat(n, '-close')
      },
      i('title', { id: ''.concat(n, '-close') }, 'Close'),
      i('path', { d: 'M1 1l9 9m-9 0l9-9' })
    )
  )
}
function on (t, e) {
  const n = new AudioContext(),
    s = n.createMediaStreamDestination()
  let o = !1,
    i = !1
  if (t && t.getAudioTracks().length > 0) {
    const e = n.createGain()
    ;(e.gain.value = 0.7),
      n
        .createMediaStreamSource(t)
        .connect(e)
        .connect(s),
      (o = !0)
  }
  return (
    e &&
      e.getAudioTracks().length > 0 &&
      (n.createMediaStreamSource(e).connect(s), (i = !0)),
    o || i ? s.stream.getAudioTracks() : []
  )
}
function rn (t) {
  try {
    t.stop()
  } catch (t) {
    console.error(t)
  }
}
function an (t) {
  try {
    t.close()
  } catch (t) {
    console.error(t)
  }
}
class cn {
  constructor (t) {
    cn.prototype.__init.call(this),
      cn.prototype.__init2.call(this),
      cn.prototype.__init3.call(this),
      (this.state = 'ready'),
      (this.handlers = t),
      (this.socket = new WebSocket('wss://curiosity.songsterr.com/ut/', 'rec')),
      (this.socket.onclose = this.onSocketClose),
      (this.socket.onerror = this.onError)
  }
  cleanup () {
    this.audioVideoStream && this.audioVideoStream.getTracks().forEach(rn),
      this.voiceStream && this.voiceStream.getTracks().forEach(rn)
  }
  __init () {
    this.onSocketClose = () => {
      console.log('socket closed'),
        ('ready' !== this.state && 'active' !== this.state) ||
          ((this.state = 'stopped'), this.cleanup(), this.handlers.onClose())
    }
  }
  __init2 () {
    this.onError = t => {
      ;('ready' !== this.state && 'active' !== this.state) ||
        ((this.state = 'failed'),
        this.cleanup(),
        an(this.socket),
        this.handlers.onError(t))
    }
  }
  __init3 () {
    this.onTrackEnded = () => {
      ;('ready' !== this.state && 'active' !== this.state) ||
        ((this.state = 'stopped'),
        this.cleanup(),
        an(this.socket),
        this.handlers.onTurnedOff())
    }
  }
  async connect (t, e, n, s) {
    try {
      this.audioVideoStream = await navigator.mediaDevices.getDisplayMedia({
        audio: !0,
        video: !0
      })
      for (const t of this.audioVideoStream.getTracks())
        t.onended = this.onTrackEnded
      this.voiceStream = await navigator.mediaDevices.getUserMedia({
        video: !1,
        audio: !0
      })
      for (const t of this.voiceStream.getTracks())
        t.onended = this.onTrackEnded
      const o = new RTCPeerConnection(null),
        i = new MediaStream([
          ...this.audioVideoStream.getVideoTracks(),
          ...on(this.audioVideoStream, this.voiceStream)
        ])
      for (const t of i.getTracks()) o.addTrack(t, i)
      const r = await o.createOffer({
        OfferToReceiveAudio: !1,
        OfferToReceiveVideo: !1
      })
      o.setLocalDescription(r),
        (this.socket.onmessage = async t => {
          try {
            const e = JSON.parse(t.data)
            await o.setRemoteDescription(
              new RTCSessionDescription({ type: 'answer', sdp: e.answer })
            ),
              (this.state = 'active'),
              this.handlers.onReady()
          } catch (t) {
            this.onError(t)
          }
        }),
        await (async (t, e) => {
          t.readyState !== t.OPEN &&
            (await (t =>
              new Promise((e, n) => {
                let s = 0
                const o = setInterval(() => {
                  s > 9
                    ? (clearInterval(o), n(new Error('Max number of attempts')))
                    : t.readyState === t.OPEN && (clearInterval(o), e()),
                    s++
                }, 200)
              }))(t)),
            t.send(e)
        })(
          this.socket,
          JSON.stringify({
            cmd: 'OFFER',
            offer: r.sdp,
            ticket: t,
            email: e,
            properties: n,
            stage: window.__STAGE__,
            isAdditional: s
          })
        )
    } catch (t) {
      this.onError(t)
    }
  }
  stop () {
    ;('ready' !== this.state && 'active' !== this.state) ||
      ((this.state = 'stopped'),
      this.cleanup(),
      an(this.socket),
      this.handlers.onStop())
  }
}
function ln (t) {
  return t
}
class dn extends Error {
  constructor (t, e) {
    for (
      var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), o = 2;
      o < n;
      o++
    )
      s[o - 2] = arguments[o]
    super(...s),
      Error.captureStackTrace && Error.captureStackTrace(this, dn),
      (this.name = 'ValidationError'),
      (this.reasons = t),
      (this.message = e || 'Form validation failed')
  }
}
class un extends dn {
  constructor (t, e) {
    for (
      var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), o = 2;
      o < n;
      o++
    )
      s[o - 2] = arguments[o]
    super(t, e, ...s),
      Error.captureStackTrace && Error.captureStackTrace(this, un),
      (this.name = 'ValidationWarning')
  }
}
class pn extends Error {
  constructor () {
    super(...arguments),
      Error.captureStackTrace && Error.captureStackTrace(this, pn),
      (this.name = 'FraudError'),
      (this.message = 'Email verification failed')
  }
}
class hn extends Error {
  constructor (t) {
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1;
      s < e;
      s++
    )
      n[s - 1] = arguments[s]
    super(...n),
      Error.captureStackTrace && Error.captureStackTrace(this, pn),
      (this.name = 'RestrainError'),
      (this.action = t),
      (this.message = 'Your actions appear suspicious.')
  }
}
class gn extends Error {
  constructor (t, e) {
    for (
      var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), o = 2;
      o < n;
      o++
    )
      s[o - 2] = arguments[o]
    super(...s),
      Error.captureStackTrace && Error.captureStackTrace(this, gn),
      (this.name = 'NetworkError'),
      (this.status = t),
      (this.message = ''.concat(t, ' ').concat(e)),
      (this.onLine = navigator && navigator.onLine)
  }
}
async function fn (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
  ;(s = s || { method: 'post', credentials: 'include' }),
    (n = Object.assign({}, n, {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }))
  const o = JSON.stringify(e)
  return fetch(t, Object.assign({}, s, { headers: n, body: o }))
}
function mn (t) {
  if (!t.ok) throw new gn(t.status, t.statusText)
}
async function yn (t, e) {
  if (406 === t.status) throw new hn(e)
}
function vn (t, e) {
  if (403 === t.status) throw new dn({ __all__: e }, e)
}
async function bn (t) {
  if (406 === t.status) {
    const e = await t.json()
    throw new dn(e, e.message)
  }
}
async function wn (t) {
  if (412 === t.status) {
    const e =
        'Please wait for reCAPTCHA logo to appear in the lower right corner',
      n = await t.json()
    throw new dn({ __all__: e }, n.message)
  }
}
async function Sn (t) {
  if (422 === t.status) {
    const e = await t.json()
    throw new dn(e.message || e.data || e)
  }
}
async function En (t) {
  if ([400, 422, 423].includes(+t.status)) {
    const e = await t.json()
    throw 423 === t.status ? new un(e.reasons) : new dn(e.reasons || e)
  }
}
async function In (t) {
  if (!t.ok && 409 !== t.status)
    throw new Error('Oops, something went wrong. Please try again later')
}
function xn (t) {
  try {
    return JSON.parse(window.localStorage.getItem(t))
  } catch (t) {
    return null
  }
}
function Cn (t, e) {
  try {
    e
      ? window.localStorage.setItem(t, JSON.stringify(e))
      : window.localStorage.removeItem(t)
  } catch (t) {}
}
var kn,
  Tn = { get: xn, set: Cn }
!(function (t) {
  ;(t.PROMO_CONTEXT_SLOWDOWN = 'promo-context-slowdown'),
    (t.PROMO_CONTEXT_LOOP = 'promo-context-loop'),
    (t.PROMO_CONTEXT_NO_ADS = 'promo-context-no-ads'),
    (t.PROMO_CONTEXT_PRINT = 'promo-context-print'),
    (t.PROMO_CONTEXT_MUTE = 'promo-context-mute'),
    (t.PROMO_CONTEXT_SOLO = 'promo-context-solo'),
    (t.PROMO_CONTEXT_RETUNE = 'promo-context-retune'),
    (t.SCREENER = 'screener'),
    (t.UT_RECORDER = 'ut-recorder')
})(kn || (kn = {}))
const An = [kn.UT_RECORDER],
  On = {
    allowNewUsers: !0,
    ignoreSingleAppearance: !1,
    ignoreDailyTimespan: !1,
    forced: !1
  }
function Pn (t) {
  const e = new Date(Date.now() - 864e5)
  return new Date(t) >= e
}
function _n (t) {
  let e =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : new Date().toUTCString()
  if (window.__ACTIVE_ATTRACTOR__ !== t) return
  const n = xn('hasSeenAttractors') || {}
  ;(n[t] = e), Cn('hasSeenAttractors', n), (window.__ACTIVE_ATTRACTOR__ = null)
}
function Ln () {
  return xn('hasSeenAttractors') || {}
}
function Nn (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : On
  ;(e = Object.assign({}, On, e)), console.log('attractor:', t, e)
  const n = -1 !== window.location.search.indexOf('ut=on')
  if (n && An.includes(t)) return (window.__ACTIVE_ATTRACTOR__ = t), !0
  if (t === window.__ACTIVE_ATTRACTOR__) return !0
  if (e.forced) return !0
  if (window.__ACTIVE_ATTRACTOR__ && t !== window.__ACTIVE_ATTRACTOR__)
    return !1
  let s = !0
  if (!e.allowNewUsers && !window.__HAS_BEEN_SEEN_BEFORE__) return !1
  const o = xn('hasSeenAttractors') || {}
  return (
    e.ignoreDailyTimespan ||
      Object.keys(o).forEach(t => {
        Pn(o[t]) && (s = !1)
      }),
    !e.ignoreSingleAppearance && o[t] && (s = !1),
    s && (window.__ACTIVE_ATTRACTOR__ = t),
    s
  )
}
function Rn (t) {
  let e,
    n = t[0],
    s = 1
  for (; s < t.length; ) {
    const o = t[s],
      i = t[s + 1]
    if (
      ((s += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)
    )
      return
    'access' === o || 'optionalAccess' === o
      ? ((e = n), (n = i(n)))
      : ('call' !== o && 'optionalCall' !== o) ||
        ((n = i(function () {
          for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
            s[o] = arguments[o]
          return n.call(e, ...s)
        })),
        (e = void 0))
  }
  return n
}
let jn, Mn
function Dn () {
  window.removeEventListener('visibilitychange', jn),
    Mn && (clearTimeout(Mn), (Mn = null))
}
const Bn = { ignoreDailyTimespan: !0, ignoreSingleAppearance: !0 }
async function Fn (t, e) {
  try {
    const n = await (async function (t) {
      const e = await fetch('/actions/usertest/'.concat(t, '/ticket'), {
        method: 'POST'
      })
      return mn(e), e.json()
    })(e)
    try {
      const s = await (async function (t) {
        const e = await fetch('/api/usertest/'.concat(t))
        return mn(e), e.json()
      })(e)
      return (
        t('ut/ticket', { ticket: n, script: s }),
        (Mn = setTimeout(() => t('ut/idle'), 6e4)),
        (jn = () => {
          let e
          document.hidden
            ? (e = setTimeout(() => {
                !(function (t) {
                  try {
                    navigator.sendBeacon(
                      '/actions/usertest/ticket/idle',
                      t.token
                    )
                  } catch (t) {
                    console.log(t)
                  }
                })(n),
                  t('ut/idle'),
                  window.removeEventListener('visibilitychange', jn)
              }, 3e4))
            : clearTimeout(e)
        }),
        window.addEventListener('visibilitychange', jn),
        { ticket: n, script: s }
      )
    } catch (e) {
      await Un(t, n)
    }
  } catch (t) {
    console.error(t)
  }
}
async function Un (t, e) {
  try {
    await (async function (t) {
      const e = JSON.stringify({ token: t.token }),
        n = await fetch('/actions/usertest/ticket', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: e
        })
      return mn(n), n.json()
    })(e),
      t('ut/ticket:dismiss')
  } catch (t) {
    console.error(t)
  }
}
function Hn (t) {
  try {
    const { recorder: e, ticket: n, script: s } = t.get().ut
    e && e.stop(),
      t.dispatch('curiosity/event', {
        event: 'UT Recorded',
        name: s.name,
        URL: n.urlToGet
      })
  } catch (t) {
    console.error(t)
  }
}
function qn (t, e) {
  Gn(t, e)
  let n = e.startUrl || '/'
  ;(n = n.includes('?') ? ''.concat(n, '&ut=on') : ''.concat(n, '?ut=on')),
    (window.location.href = n)
}
function Gn (t, e) {
  Tn.set('utTicket', t), Tn.set('utScript', e)
}
const Wn = t => {
    t.on('@init', () => ({
      ut: {
        recorderState: 'ready',
        recorder: void 0,
        ticket: void 0,
        script: void 0,
        stage: 'hidden',
        email: void 0,
        steps: { questions: 0, instructions: 0, survey: 0 },
        isAdditional: !1,
        isClosing: !1,
        isHidden: !1
      }
    })),
      t.on('ut/close', (t, e) => ({
        ut: Object.assign({}, t.ut, { isClosing: e })
      })),
      t.on('ut/hide', (t, e) => ({
        ut: Object.assign({}, t.ut, { isHidden: e })
      })),
      t.on('ut/ticket', (t, e) => {
        let { ticket: n, script: s } = e
        return { ut: Object.assign({}, t.ut, { ticket: n, script: s }) }
      }),
      t.on('ut/ticket:dismiss', t => ({
        ut: Object.assign({}, t.ut, { ticket: void 0 })
      })),
      t.on('ut/email', (e, n) => {
        const { name: s } = e.ut.script
        return (
          t.dispatch('curiosity/event', {
            event: 'UT Email Submitted',
            name: s,
            email: n
          }),
          { ut: Object.assign({}, e.ut, { email: n, stage: 'start' }) }
        )
      }),
      t.on('ut/continue', (e, n) => {
        if (n) return t.dispatch('ut/load', n), void Gn()
        const { ticket: s, script: o } = {
          ticket: Tn.get('utTicket'),
          script: Tn.get('utScript')
        }
        if (s && o) {
          if (!Nn(kn.UT_RECORDER, Bn)) return
          const n = !o.emailRequest || e.user.isLoggedIn ? 'start' : 'email'
          return (
            'email' === n &&
              t.dispatch('curiosity/event', {
                event: 'UT Email Requested',
                name: o.name
              }),
            'start' === n &&
              t.dispatch('curiosity/event', {
                event: 'UT Recording Requested',
                name: o.name
              }),
            { ut: Object.assign({}, e.ut, { ticket: s, script: o, stage: n }) }
          )
        }
      }),
      t.on('ut/load', async (e, n) => {
        const s = await Fn(t.dispatch, n)
        if (s && s.script) {
          const n =
            !s.script.emailRequest || e.user.isLoggedIn ? 'start' : 'email'
          'email' === n &&
            t.dispatch('curiosity/event', {
              event: 'UT Email Requested',
              name: s.script.name
            }),
            'start' === n &&
              t.dispatch('curiosity/event', {
                event: 'UT Recording Requested',
                name: s.script.name
              }),
            t.dispatch('ut/load:done', n)
        }
      }),
      t.on('ut/feedbackLoad', async (e, n) => {
        const s = await Fn(t.dispatch, n)
        if (s && s.script) {
          const e = 'feeback'
          t.dispatch('ut/load:done', e)
        }
      }),
      t.on('ut/load:done', (t, e) => {
        if (Nn(kn.UT_RECORDER, Bn))
          return { ut: Object.assign({}, t.ut, { stage: e }) }
      }),
      t.on('ut/start', e => {
        Dn(),
          (async function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.get()
            if (
              'ready' === n.ut.recorderState ||
              'failed' === n.ut.recorderState
            )
              try {
                const s = new cn({
                  onReady: () => t.dispatch('ut/start:done'),
                  onStop: () => t.dispatch('ut/stop:done'),
                  onClose: () => t.dispatch('ut/stop:closed'),
                  onTurnedOff: () => t.dispatch('ut/stop:turnedOff'),
                  onError: e => t.dispatch('ut/error', e)
                })
                t.dispatch('ut/start:processing', s), (n = t.get())
                const o = n.user
                await s.connect(
                  n.ut.ticket,
                  n.ut.email ||
                    (o.isLoggedIn
                      ? o.profile.email
                      : 'anonymous@songsterr.com'),
                  n.experiments,
                  e
                )
              } catch (e) {
                console.error(e), t.dispatch('ut/error', e)
              }
          })(t, e.ut.isAdditional)
      }),
      t.on('ut/start:done', e => {
        let { ut: n } = e
        Gn()
        const { name: s } = n.script
        return (
          t.dispatch('curiosity/event', {
            event: 'UT Instructions Shown',
            name: s
          }),
          {
            ut: Object.assign({}, n, {
              recorderState: 'active',
              recorder: n.recorder,
              stage: 'instructions'
            })
          }
        )
      }),
      t.on('ut/start:processing', (t, e) => ({
        ut: Object.assign({}, t.ut, { recorderState: 'starting', recorder: e })
      })),
      t.on('ut/terminate', e => {
        let { ut: n } = e
        switch ((_n(kn.UT_RECORDER), n.stage)) {
          case 'intro':
          case 'questions':
          case 'email':
            Un(t.dispatch, n.ticket)
            break
          case 'start':
            Un(t.dispatch, n.ticket), Gn(), t.dispatch('navigate', '/')
            break
          case 'instructions':
          case 'restart':
          case 'survey':
            Un(t.dispatch, n.ticket), Hn(t), t.dispatch('navigate', '/')
        }
        return (
          t.dispatch('curiosity/event', {
            event: 'UT Session Finished',
            name: Rn([
              n,
              'optionalAccess',
              t => t.script,
              'access',
              t => t.name
            ])
          }),
          {
            ut: {
              recorderState: 'ready',
              recorder: void 0,
              ticket: void 0,
              script: void 0,
              stage: 'hidden',
              email: void 0,
              steps: { questions: 0, instructions: 0, survey: 0 },
              isAdditional: !1,
              isClosing: !1,
              isHidden: !1
            }
          }
        )
      }),
      t.on('ut/idle', e => {
        let { ut: n } = e
        return (
          t.dispatch('screener/dismiss'),
          {
            ut: Object.assign({}, n, {
              recorderState: 'ready',
              recorder: void 0,
              script: void 0,
              stage: 'hidden',
              email: void 0,
              steps: { questions: 0, instructions: 0, survey: 0 },
              isAdditional: !1,
              isClosing: !1,
              isHidden: !1
            })
          }
        )
      }),
      t.on(
        'ut/error',
        (e, n) => (
          t.dispatch('curiosity/event', { event: 'UT Error', message: n }),
          {
            ut: Object.assign({}, e.ut, {
              recorderState: 'failed',
              recorder: void 0
            })
          }
        )
      ),
      t.on('ut/stop:done', t => ({
        ut: Object.assign({}, t.ut, {
          recorderState: 'ready',
          recorder: void 0
        })
      })),
      t.on('ut/stop:closed', t => ({
        ut: Object.assign({}, t.ut, {
          recorderState: 'ready',
          recorder: void 0
        })
      })),
      t.on('ut/stop:turnedOff', t => ({
        ut: Object.assign({}, t.ut, {
          recorderState: 'ready',
          recorder: void 0,
          stage: 'restart',
          isAdditional: !0
        })
      })),
      t.on('ut/stage', (e, n) => {
        let { ut: s } = e,
          { stage: o, step: i } = n
        const { ticket: r, script: a } = s
        switch (o) {
          case 'farewell':
            Hn(t),
              t.dispatch('curiosity/event', {
                event: 'UT End Dialog Shown',
                name: Rn([
                  s,
                  'optionalAccess',
                  t => t.script,
                  'access',
                  t => t.name
                ]),
                domain: window.location.hostname
              })
            break
          case 'not_chosen':
            Un(t.dispatch, r)
            break
          case 'questions':
            if (!a.questions || !a.questions.length || i >= a.questions.length)
              return void qn(r, a)
            t.dispatch('curiosity/event', {
              event: 'UT Question Shown',
              name: Rn([
                s,
                'optionalAccess',
                t => t.script,
                'access',
                t => t.name
              ]),
              question: a.questions[i]
            })
        }
        return {
          ut: Object.assign({}, s, {
            stage: o,
            steps:
              void 0 !== i ? Object.assign({}, s.steps, { [o]: i }) : s.steps
          })
        }
      }),
      t.on('screener/dismiss', e => {
        let { ut: n } = e
        n.ticket && (Dn(), Un(t.dispatch, n.ticket))
      }),
      t.on('screener/accept', (t, e) => {
        if (e.usertest) {
          const { script: e, ticket: n } = t.ut
          if (!e || !n) return
          if (!Nn(kn.UT_RECORDER, Bn)) return
          let s = 'intro'
          if (e && !e.intro) {
            if (!e.questions || !e.questions.length) return void qn(n, e)
            s = 'questions'
          }
          return (
            Dn(),
            {
              ut: Object.assign({}, t.ut, {
                stage: s,
                steps: { questions: 0, instructions: 0, survey: 0 },
                isAdditional: !1
              })
            }
          )
        }
      })
  },
  Vn = 'Cpb24q Cpb318',
  Xn = 'Cpb24q Cpb2j',
  zn = 'Cpb24q Cpb2uv',
  Yn = 'Cpb24q Cpb13f',
  Jn = 'Cpb24q Cpb14i Cpb1y5',
  Kn = 'Cpb24q Cpb2zn',
  Qn = 'Cpbjz',
  Zn = 'Cpb1m5'
var $n = {
  button: 'Cpb24q',
  active: 'Cpb180',
  buttonGreen: 'Cpb24q Cpb318',
  buttonBlue: 'Cpb24q Cpb2au',
  buttonGrey: 'Cpb24q Cpb2j',
  buttonDisabled: 'Cpb24q Cpb2j Cpb8g',
  buttonRed: 'Cpb24q Cpb2uv',
  buttonFloat: 'Cpb24q Cpb2tm',
  buttonLink: 'Cpb24q Cpb1oz',
  buttonLinkFloat: 'Cpb24q Cpb1oz Cpb2z8',
  buttonLinkSmall: 'Cpb24q Cpb1oz Cpb2g5',
  buttonPromoUnsubscribe: 'Cpb24q Cpb1oz Cpbxu',
  link: 'Cpbc6',
  buttonBlock: 'Cpb24q Cpbza',
  buttonSmall: 'Cpb24q Cpb13f',
  google: 'Cpb24q Cpb1jm',
  googleIcon: 'Cpb9k',
  popupButton: 'Cpb24q Cpb14i',
  popupButtonSmall: 'Cpbpb',
  popupButtonGreen: 'Cpb24q Cpb14i Cpb1t2',
  popupButtonBlue: 'Cpb24q Cpb14i Cpb1y5',
  popupButtonOrange: 'Cpb24q Cpb14i Cpb2xu',
  popupButtonLinkGreen: 'Cpb24q Cpb1oz Cpb2t0',
  popupButtonLinkOrange: 'Cpb24q Cpb1oz Cpb23m',
  popupButtonGreenSmall: 'Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9',
  popupButtonBlueSmall: 'Cpb24q Cpb14i Cpb1y5 Cpbpb Cpb2zd',
  submitRevisionButton: 'Cpb24q Cpb14i Cpb1t2 Cpb1a8',
  submitReportButton: 'Cpb24q Cpb14i Cpb2xu Cpb3h',
  submitRevisionButtonWarning: 'Cpb24q Cpb14i Cpb2xu Cpb1xh',
  addAnnotation: 'Cpb24q Cpb14i Cpb1t2 Cpbpb Cpb1o9 Cpb2bq',
  removeAnnotation: 'Cpb24q Cpb2uv Cpbpb Cpb2z3',
  buttonBig: 'Cpb24q Cpb2zn',
  greenHighlight: 'Cpbjz',
  orangeHighlight: 'Cpb1m5'
}
function ts () {
  const { dispatch: t, screener: e, ut: n } = C('screener', 'ut'),
    s = e.active
  if (!s || 'hidden' !== n.stage) return null
  const o = r(() => {
      t('screener/dismiss', s)
    }, [s]),
    a = r(() => {
      t('screener/accept', s)
    }, [s])
  return i(
    'aside',
    { className: 'A1lj', id: 'screener' },
    i(sn, { onClick: o, id: 'screener' }),
    i('h2', { className: 'A179' }, s.title),
    i('p', { className: 'A1eo' }, s.body),
    s.usertest
      ? i(
          'button',
          { className: 'Cpb24q Cpb14i Cpb1t2 Agq', onClick: a },
          s.button
        )
      : i(
          'a',
          {
            className: 'Cpb24q Cpb14i Cpb1t2 Ahd',
            href: s.link,
            onClick: a,
            rel: 'noopener noreferrer',
            target: '_blank'
          },
          s.button
        )
  )
}
function es (t) {
  return 'android' === t.toLowerCase()
}
function ns (t) {
  return 'ios' === t.toLowerCase()
}
function ss (t) {
  return (
    !(!t.isTablet || 'iOS' !== t.os) ||
    (t.isDesktop && 'Mac OS X' === t.os && 'ontouchstart' in window)
  )
}
const os = t => {}
function is (t, e, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
  if (es(t)) {
    const t = '',
      e = s.songId ? '%26tab_id%3D'.concat(s.songId) : ''
    return 'https://play.google.com/store/apps/details?id=com.songsterr&referrer=utm_source%3D'
      .concat(n)
      .concat(t)
      .concat(e)
  }
  return 'https://apps.apple.com/app/apple-store/id399211291?pt=414338&mt=8&at=10lcbo&ct='
    .concat(n)
    .concat('')
}
function rs (t) {
  const { dispatch: e, device: n, experiments: s } = C('device', 'experiments'),
    { source: o } = t,
    a = t.os || n.os,
    c = t.extra || {},
    l = t.attrs || {},
    d = is(a, s, o, c),
    u = r(() => {
      t.onClick && t.onClick(),
        e('player/togglePlay', !1),
        e('curiosity/google', {
          category: 'Showroom',
          action: 'Clicked on '.concat(
            es(a) ? 'Google Play' : 'App Store',
            ' link'
          )
        })
    }, [])
  return i(
    'a',
    Object.assign({}, l, {
      href: d,
      onClick: u,
      rel: 'noopener noreferrer',
      target: '_blank'
    }),
    t.children
  )
}
var as = {
  exitActive: 'hd33v',
  enterActive: 'hd10c',
  enter: 'hd1ve',
  exit: 'hd138'
}
const cs = { animationStyles: as },
  ls = () => {
    const { dispatch: t, promo: e, device: n } = C('promo', 'device'),
      s = e.active
    let o = {
      title: 'Struggling to figure out\nthe rhythm of this fragment?',
      cta: n.isPhone ? 'Slow it down in our app!' : 'Slow it down on Plus!',
      source: 'slowdown_promo_popup',
      link: 'Slowdown Promo Popup',
      context: void 0
    }
    switch (e.active) {
      case 'loop':
        o = {
          title: 'Want to nail this fragment?',
          cta: n.isPhone
            ? 'Practice it by looping\nin our app!'
            : 'Practice it by looping\non Plus!',
          source: 'loop_promo_popup',
          link: 'Loop Promo Popup',
          context: 'Loop'
        }
        break
      case 'noads':
        o = {
          title: 'Bottom banner takes up\ntoo much space?',
          cta: n.isPhone ? 'Remove it in our app!' : 'Remove it on Plus!',
          source: 'noads_promo_popup',
          link: 'No Ads Promo Popup',
          context: 'No Ads'
        }
        break
      case 'print':
        o = {
          title: 'Prefer to read and\nmarkup on paper?',
          cta: n.isPhone
            ? 'Print the tab out in our app!'
            : 'Print the tab out on Plus!',
          source: 'print_promo_popup',
          link: 'Print Promo Popup',
          context: 'Print'
        }
        break
      case 'mute':
        o = {
          title: 'Using tab as\na backing track?',
          cta: n.isPhone
            ? 'Mute your instrument\nin our app!'
            : 'Mute your instrument\non Plus!',
          source: 'mute_promo_popup',
          link: 'Mute Promo Popup',
          context: 'Mute'
        }
        break
      case 'solo':
        o = {
          title: 'Bass line is hard to hear?',
          cta: n.isPhone ? 'Solo it in our app!' : 'Solo it on Plus!',
          source: 'solo_promo_popup',
          link: 'Solo Promo Popup',
          context: 'Solo'
        }
        break
      case 'retune':
        o = {
          title: 'Don’t want to retune the guitar?',
          cta: n.isPhone
            ? 'Pitch shift the tab in our app!'
            : 'Pitch shift the tab on Plus!',
          source: 'retune_promo_popup',
          link: 'Retune Promo Popup',
          context: 'Retune'
        }
    }
    const r = () => {
      t('curiosity/setConversionProps', { 'Last referring link': o.link }),
        t('promo/dismiss')
    }
    return i(
      At,
      null,
      s &&
        i(
          bt,
          Object.assign({}, cs, { key: 'popup' }),
          i(
            'aside',
            { className: 'Cu1358', id: 'promo' },
            i('h2', { className: 'Cu11gf' }, o.title),
            i('p', { className: 'Cu11fb' }, o.cta),
            i(
              'div',
              { className: 'Cu1p' },
              !n.isPhone &&
                i(
                  R,
                  { to: '/a/wa/plus', className: $n.buttonGreen, onClick: r },
                  'Tell me more!'
                ),
              n.isPhone &&
                i(
                  rs,
                  {
                    source: o.source,
                    onClick: r,
                    attrs: { className: $n.buttonGreen }
                  },
                  es(n.os) ? 'Open Google Play' : 'Open App Store'
                ),
              i(
                'a',
                { onClick: () => t('promo/dismiss'), className: $n.buttonLink },
                'No, thanks'
              )
            ),
            i(
              'a',
              {
                onClick: () => t('promo/unsubscribe'),
                className: $n.buttonPromoUnsubscribe
              },
              'Don’t show ads like that'
            )
          )
        )
    )
  }
var ds = {
  pane: 'vj205',
  close: 'vjnm',
  hide: 'vj21s',
  show: 'Cpb24q Cpb1oz vj1fb',
  stroke: 'vj325',
  paneHidden: 'vj205 vj2c5',
  step: 'vj8n',
  reminder: 'vj2hl',
  center: 'vjtd',
  headerAlone: 'vj1fi',
  button: 'Cpb24q Cpb318 vj1pa',
  taskComplete: 'Cpb24q Cpb318 vj1pa vj2oc',
  optional: 'Cpb24q Cpb318 vj1pa vj2bc',
  confirmCompletion: 'vj289',
  icon: 'vjmg'
}
const us = {
    close: 'Закрыть',
    farewell: 'Спасибо!##Спасибо вам за помощь в улучшении нашего сайта.'
  },
  ps = {
    close: 'Close',
    farewell:
      'Thank you!##Thank you for helping us in the improvement of our site.'
  }
function hs () {
  const { dispatch: t, ut: e } = C('ut'),
    n = 'ru' === e.script.locale ? us : ps,
    s = e.script.farewell || n.farewell,
    [o, r] = s.split('##')
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-farewell' },
    o && i('h1', null, o),
    r && i('p', null, r),
    i(
      'button',
      {
        className: ds.button,
        onClick: () => t('ut/stage', { stage: 'hidden' })
      },
      n.close
    )
  )
}
const gs = {
    close: 'Закрыть',
    farewell:
      'Спасибо!##К сожалению для участия в исследовании нам нужны только те пользователи которые ответили на все вопросы положительно.'
  },
  fs = {
    close: 'Close',
    farewell:
      'Thank you!##For testing we need the users who answered positively to all the questions.'
  }
function ms () {
  const { dispatch: t, ut: e } = C('ut'),
    n = 'ru' === e.script.locale ? gs : fs,
    s = e.script.farewellNotChosen || n.farewell,
    [o, r] = s.split('##')
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-not-chosen' },
    o && i('h1', null, o),
    r && i('p', null, r),
    i(
      'button',
      {
        className: ds.button,
        onClick: () => t('ut/stage', { stage: 'hidden' })
      },
      n.close
    )
  )
}
function ys (t) {
  let {
    styles: { icon: e, stroke: n }
  } = t
  return i(
    'svg',
    { width: 10, height: 10, viewBox: '0 -3 10 10', className: e },
    i('path', { d: 'M1 -2l4 4 4-4M1 2l4 4 4-4', className: n })
  )
}
const vs = {
    basicInstruction:
      'Задание##Пробегитесь по сайту, поделитесь своими впечатлениями.',
    aloud: 'Думайте вслух! Микрофон запишет ваши мысли.',
    maximize: 'Открыть задание',
    minimize: 'Свернуть',
    finishTask: 'Завершить задание',
    didComplete: 'Вы выполнили задание?',
    yes: 'Да',
    no: 'Нет'
  },
  bs = {
    basicInstruction:
      'Instructions##Please take a look around and tell us what you think.',
    aloud: 'Think aloud! User study is recording',
    maximize: 'Click here to see your task',
    minimize: 'Minimize',
    finishTask: 'Finish the task',
    didComplete: 'Did you complete the task?',
    yes: 'Yes',
    no: 'No'
  }
function ws (t) {
  let { toggle: e, isHidden: s } = t
  const { dispatch: o, ut: r } = C('ut'),
    [a, c] = n(!1),
    l = 'ru' === r.script.locale ? vs : bs,
    d = r.steps.instructions || 0,
    u =
      d < r.script.instructions.length - 1
        ? { stage: 'instructions', step: d + 1 }
        : {
            stage:
              r.script.survey && r.script.survey.length > 0
                ? 'survey'
                : 'farewell'
          },
    p = r.script.instructions[d] || l.basicInstruction,
    [h, g] = p.split('##')
  return s
    ? i(
        'div',
        { className: ds.step, id: 'usertests-step-instructions' },
        i('h1', { className: ds.reminder }, l.aloud),
        i(
          'button',
          { className: ds.show, onClick: e },
          l.maximize,
          i(ys, { styles: ds })
        )
      )
    : i(
        'div',
        { className: ds.step, id: 'usertests-step-instructions' },
        i(
          'button',
          { className: ds.hide, onClick: e },
          i(ys, { styles: ds }),
          l.minimize
        ),
        h && i('h1', null, h),
        g && i('p', null, g),
        a
          ? i(
              'div',
              { className: ds.confirmCompletion },
              i('p', null, l.didComplete),
              i(
                'button',
                {
                  className: ds.optional,
                  onClick: () => {
                    c(!1), o('ut/stage', u)
                  }
                },
                l.yes
              ),
              i(
                'button',
                { className: ds.optional, onClick: () => c(!1) },
                l.no
              )
            )
          : i(
              'div',
              null,
              i(
                'button',
                { className: ds.taskComplete, onClick: () => c(!0) },
                l.finishTask
              )
            )
      )
}
const Ss = { yes: 'Да', no: 'Нет' },
  Es = { yes: 'Yes', no: 'No' }
function Is () {
  const { dispatch: t, ut: e } = C('user', 'ut'),
    n = 'ru' === e.script.locale ? Ss : Es,
    s = e.steps.questions,
    o = { stage: 'questions', step: s + 1 },
    r = { stage: 'not_chosen' },
    [a, c] = e.script.questions[s].split('##')
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-questions' },
    a && i('h1', null, a),
    c && i('p', null, c),
    i(
      'button',
      { className: ds.button, onClick: () => t('ut/stage', o) },
      n.yes
    ),
    i('button', { className: ds.button, onClick: () => t('ut/stage', r) }, n.no)
  )
}
const xs = { start: 'Начать' },
  Cs = { start: 'Start' }
function ks () {
  const { dispatch: t, ut: e } = C('user', 'ut'),
    n = 'ru' === e.script.locale ? xs : Cs,
    s = e.script.intro,
    [o, r] = s.split('##')
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-intro' },
    o && i('h1', null, o),
    r && i('p', null, r),
    i(
      'button',
      {
        className: ds.button,
        onClick: () => t('ut/stage', { stage: 'questions', step: 0 })
      },
      n.start
    )
  )
}
function Ts (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'En'
  const n = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return null == t || 0 === t.length
    ? 'Ru' === e
      ? 'Обязательно для заполнения'
      : 'Should not be empty'
    : !n.test(t) &&
        ('Ru' === e ? 'Неверный e-mail адрес' : 'Invalid e-mail address')
}
function As (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'En'
  return (
    0 === t.length &&
    ('Ru' === e ? 'Обязательно для заполнения' : 'Should not be empty')
  )
}
function Os (t) {
  return t.length >= 1e3
    ? 'Should be less than 1000 characters'
    : 0 === (t = t.replace(/[^\w\s_]/, '').trim()).length
    ? 'Should not be empty'
    : t.length < 3 && 'Please provide more meaningful edit summary'
}
function Ps (t) {
  return 0 === (t = t.replace(/[^\w\s_]/, '').trim()).length
    ? 'Should not be empty'
    : t.length < 3 && 'Please provide more meaningful annotation'
}
function _s (t) {
  return As(t)
}
function Ls (t) {
  return 0 === t.length && 'Tell us how can we help you'
}
function Ns (t) {
  const e = t ? ['gp3', 'gp4', 'gp5', 'gpx', 'gp'] : ['gp3', 'gp4', 'gp5']
  return function (t) {
    if (!t.length) return 'Upload the file'
    {
      const n = t[0].name.split('.').pop()
      if (!e.includes(n)) return 'Choose right file format'
    }
  }
}
function Rs (t) {
  return 0 === t.length
    ? 'Should not be empty'
    : t.length < 5 && 'Should be at least 5 symbols long'
}
function js (t) {
  return !t && 'Should be checked'
}
function Ms (t, e) {
  return !(!e || t === e) && 'Passwords should match'
}
function Ds (t, e) {
  return t && t.reasons && t.reasons[e]
}
function Bs (t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'En'
  const n = t
    .map(t => {
      let n
      return (
        (n =
          'checkbox' === t.field.type
            ? t.field.checked
            : 'file' === t.field.type
            ? t.field.files
            : t.field.value),
        { [t.field.name]: t.validator(n, e) }
      )
    })
    .reduce((t, e) => Object.assign(t, e), {})
  if (Object.keys(n).reduce((t, e) => t || !!n[e], !1)) throw new dn(n)
  return null
}
function Fs (t, e) {
  const n = { __all__: void 0, comment: void 0 }
  if (
    (t || (n.__all__ = 'Please select a reason for the report'),
    'other' !== t || e || (n.comment = 'Please describe the problem'),
    Object.keys(n).reduce((t, e) => t || !!n[e], !1))
  )
    throw new dn(n)
  return null
}
const Us = 'Bmp16t'
var Hs = {
  error: 'Bmph8',
  title: 'Bmp16t',
  rejected: 'Bmp1fm',
  content: 'Bmp2pa',
  exitActive: 'Bmp102',
  enterActive: 'Bmp64',
  enter: 'Bmp25l',
  exit: 'Bmpc0'
}
function qs (t) {
  let { styles: e, error: n, errorMessage: s, name: o = 'form' } = t
  const r = e || Hs,
    a = y()
  let c = s
  const l = {
    enter: r.enter,
    enterActive: r.enterActive,
    exit: r.exit,
    exitActive: r.exitActive
  }
  return (
    !c &&
      n &&
      (c = (function (t) {
        if (t instanceof dn) {
          if (t.reasons) {
            if (t.reasons.__all__) return t.reasons.__all__
            const e =
              t.reasons.length && t.reasons[t.reasons.length - 1].message
            if (e) return e
          }
          return 'Please fix the errors and try again'
        }
        return t.message || 'Oops, something went wrong. Please try again later'
      })(n)),
    p(() => {
      a.current.scrollIntoView && a.current.scrollIntoView()
    }, [c]),
    n instanceof hn && n.action
      ? i(
          At,
          { component: 'div', className: r.error, ref: a },
          n &&
            i(
              bt,
              { animationStyles: l, timeout: 300 },
              i(
                'div',
                { className: r.rejected, key: 'error' },
                i(
                  'span',
                  { className: r.content, role: 'alert', 'aria-label': o },
                  'Your actions appear suspicious. We will reject any attempt to '.concat(
                    n.action,
                    ' within the next twenty four hours. '
                  ),
                  'Please contact ',
                  i(
                    'a',
                    {
                      href: 'mailto:support@songsterr.com',
                      'data-action': 'support'
                    },
                    'support@songsterr.com'
                  ),
                  ' if you think we made a mistake.'
                )
              )
            )
        )
      : i(
          At,
          { component: 'div', className: r.error, ref: a },
          c &&
            i(
              bt,
              { animationStyles: l, timeout: 300 },
              i(
                'div',
                { className: r.title, key: 'error' },
                i(
                  'span',
                  { className: r.content, role: 'alert', 'aria-label': o },
                  c
                )
              )
            )
        )
  )
}
var Gs = {
  exitActive: 'Bpm1i8',
  enterActive: 'Bpm2vu',
  enter: 'Bpmf',
  exit: 'Bpm1rd'
}
function Ws (t) {
  let { errorMessage: e, name: n } = t
  return i(
    At,
    null,
    e &&
      i(
        bt,
        { animationStyles: Gs, timeout: 150 },
        i('span', { className: 'Cc1124', role: 'alert', 'aria-label': n }, e)
      )
  )
}
const Vs = 'fal3 fa2hs',
  Xs = 'fal3 fa2hs fa323',
  zs = 'fa1vk',
  Ys = 'faiw'
var Js = {
  base: 'fal3',
  input: 'fal3 fa2hs',
  textarea: 'fal3 fa2hs fad6',
  readonly: 'fal3 fa2hs fa323',
  field: 'fa1vk',
  fieldError: 'fa1vk fa1du',
  hint: 'faiw'
}
const Ks = v((t, e) => {
    const s = t.styles || Js,
      {
        type: o,
        name: r,
        error: a,
        defaultValue: c,
        label: l,
        placeholder: d,
        readonly: u,
        autocomplete: p
      } = t,
      { popup: h, errorStyles: g, onChange: f } = t,
      [m, y] = n(c),
      v = t.error && Ds(a, r)
    return i(
      'label',
      { className: v ? s.fieldError : s.field },
      h
        ? i(qs, { styles: g, errorMessage: v, name: r })
        : i('div', { className: s.hint }, l),
      !h && i(Ws, { name: r, errorMessage: v }),
      u && i('div', { className: s.readonly, name: r }, c),
      !u &&
        'textarea' === o &&
        i('textarea', {
          name: r,
          placeholder: d,
          onChange: t => {
            y(t.target.value), f && f(t)
          },
          className: s.textarea,
          autoComplete: p || 'on',
          ref: e
        }),
      !u &&
        'textarea' !== o &&
        i('input', {
          type: o,
          name: r,
          value: m,
          placeholder: d,
          onChange: t => {
            y(t.target.value), f && f(t)
          },
          autoComplete: p || 'on',
          className: s.input,
          ref: e
        })
    )
  }),
  Qs = { submit: 'Далее' },
  Zs = { submit: 'Submit' }
function $s () {
  const { dispatch: t, ut: e } = C('ut'),
    s = y(),
    [o, r] = n(null),
    a = e.script.emailRequest,
    [c, l] = a.split('##'),
    d = 'ru' === e.script.locale ? Qs : Zs
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-email' },
    c && i('h1', null, c),
    l && i('p', null, l),
    i(
      'form',
      {
        noValidate: !0,
        className: ds.form,
        onSubmit: async e => {
          e.preventDefault()
          const n = s.current
          try {
            Bs([{ field: n, validator: Ts }]),
              this.setState(null),
              t('ut/email', n.value)
          } catch (t) {
            r(t)
          }
        },
        action: ''
      },
      i(qs, { error: o, errorMessage: o && o.reasons && o.reasons.email }),
      i(Ks, { type: 'email', ref: s, name: 'email', error: null }),
      i('button', { className: ds.button }, d.submit)
    )
  )
}
function to (t) {
  let {
    processing: e,
    title: n,
    id: s,
    width: o = 17,
    height: r = 17,
    isDisabled: a = !1,
    onClick: c
  } = t
  return i(
    'button',
    {
      id: s,
      className: a ? $n.buttonDisabled : $n[s] || $n.buttonGreen,
      disabled: a || e,
      onClick: c
    },
    e && i(Pt, { width: o, height: r, fill: '#fff', className: Ot.button }),
    i('span', null, n)
  )
}
const eo = {
    needApproval: 'Нам нужно ваше подтверждение',
    recording1:
      'Запись начнется только после начала исследования и закончится сразу после. Запись за рамками исследования не ведется.',
    recording2:
      'Нажмите кнопку внизу для того чтобы разрешить доступ к микрофону и экрану. После этого появится уведомление о доступе. Выберите "Поделится всем экраном". После этого кликните "Поделиться" чтобы продолжить.',
    failed:
      'Не удалось получить доступ к экрану или записи звука. Проверьте настройки браузера и попробуйте ее раз.',
    screenAccess: 'Дать доступ к экрану и микрофону'
  },
  no = {
    needApproval: 'We need your approval',
    recording1:
      'Recording will start when the study begins & stop as soon as you complete the study. No recording will occur outside of these times.',
    recording2:
      "Click the below button to allow this study to record your device's screen and microphone. A message directing you to select your screen will appear. Please choose to share Your Entire Screen. Once selected click 'share' to proceed.",
    failed:
      'Failed to start screen or audio recording. Please, check browser permissions and try again',
    screenAccess: 'Yes, access my Screen and Voice'
  }
function so () {
  const { ut: t, dispatch: e } = C('ut'),
    n = 'ru' === t.script.locale ? eo : no
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-start' },
    i('h1', null, n.needApproval),
    i('p', null, n.recording1),
    i('p', null, n.recording2),
    'failed' === t.recorderState && i('p', null, i('strong', {}, n.failed)),
    i(to, {
      title: n.screenAccess,
      processing: 'starting' === t.recorderState,
      onClick: () => e('ut/start')
    })
  )
}
const oo = {
    recordingStopped: 'It appears that the recording has stopped.',
    recording1: 'Ваше участие в исследовании не было записано.',
    recording2:
      'Если это произошло по ошибке и вы хотите продолжить ваше участие нажмите кнопку "Начать заново".',
    failed:
      'Не удалось получить доступ к экрану или записи звука. Проверьте настройки браузера и попробуйте ее раз.',
    restart: 'Начать заново'
  },
  io = {
    recordingStopped: 'It appears that the recording has stopped.',
    recording1: 'Your participation has not been recorded.',
    recording2:
      'If this was a mistake and you wish to participate, click the restart button to start the study again.',
    failed:
      'Failed to start screen or audio recording. Please, check browser permissions and try again',
    restart: 'Restart'
  }
function ro () {
  const { ut: t, dispatch: e } = C('ut'),
    n = 'ru' === t.script.locale ? oo : io
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-restart' },
    i('h1', null, n.recordingStopped),
    i('p', null, n.recording1),
    i('p', null, n.recording2),
    'failed' === t.recorderState && i('p', null, i('strong', {}, n.failed)),
    i(to, {
      title: n.restart,
      processing: 'starting' === t.recorderState,
      onClick: () => e('ut/start')
    })
  )
}
const ao = {
    answerFinal: 'Пожалуйста ответьте на последние вопросы',
    impove: 'Как сайт может стать еще лучше?',
    proceed: 'Продолжить',
    answeredAloud: 'Я ответил вслух'
  },
  co = {
    answerFinal: 'Please answer final questions',
    impove: 'How can we improve?',
    proceed: 'Proceed',
    answeredAloud: 'I answered aloud'
  }
function lo () {
  const { dispatch: t, ut: e } = C('ut'),
    n = 'ru' === e.script.locale ? ao : co,
    s = e.steps.survey || 0,
    o =
      s < e.script.survey.length
        ? { stage: 'survey', step: s + 1 }
        : { stage: 'farewell' },
    r =
      0 === s
        ? e.script.surveyIntro || n.answerFinal
        : e.script.survey[s - 1] || n.impove,
    [a, c] = r.split('##')
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-survey' },
    a && i('h1', null, a),
    c && i('p', null, c),
    i(
      'button',
      { className: ds.button, onClick: () => t('ut/stage', o) },
      0 === s ? n.proceed : n.answeredAloud
    )
  )
}
const uo = {
    youSure: 'Вы уверены?',
    cancelStudy: 'Вы действительно хотите прервать исследование?',
    no: 'Нет, продолжить',
    yes: 'Да'
  },
  po = {
    youSure: 'Are you sure?',
    cancelStudy: 'Do you want to cancel the study?',
    no: 'No, continue',
    yes: 'Yes'
  }
function ho (t) {
  let { locale: e, onCancel: n, onConfirm: s } = t
  const o = (t => ('ru' === t ? uo : po))(e)
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-terminate' },
    i('h1', null, o.youSure),
    i('p', { className: ds.center }, o.cancelStudy),
    i('button', { className: ds.optional, onClick: s }, o.yes),
    i('button', { className: ds.button, onClick: n }, o.no)
  )
}
const go = { title: 'Баг репорт', button: 'Продолжить' },
  fo = { title: 'Report a bug or suggest a feature', button: 'Start' }
function mo () {
  const { ut: t, user: e, dispatch: n } = C('ut', 'user'),
    s = 'ru' === t.script.locale ? go : fo,
    o = !t.script.emailRequest || e.isLoggedIn ? 'start' : 'email'
  return i(
    'div',
    { className: ds.step, id: 'usertests-step-feedback' },
    i('h1', { className: ds.headerAlone }, s.title),
    i(
      'button',
      { className: ds.button, onClick: () => n('ut/stage', { stage: o }) },
      s.button
    )
  )
}
const yo = { cancel: 'Закончить исследование' },
  vo = { cancel: 'Cancel the study' }
function bo () {
  const { ut: t, dispatch: e } = C('ut'),
    n = r(() => {
      t.isHidden && e('ut/hide', !1), Dn()
    }, [e, t.isHidden]),
    s = r(
      n => {
        n.stopPropagation(), n.preventDefault(), e('ut/hide', !t.isHidden)
      },
      [t.isHidden, e]
    )
  if ('hidden' === t.stage) return
  const o = (function (t) {
      switch (t) {
        default:
          return null
        case 'intro':
          return ks
        case 'questions':
          return Is
        case 'start':
          return so
        case 'restart':
          return ro
        case 'not_chosen':
          return ms
        case 'email':
          return $s
        case 'instructions':
          return ws
        case 'survey':
          return lo
        case 'farewell':
          return hs
        case 'feeback':
          return mo
      }
    })(t.stage),
    a = t.script ? t.script.locale : 'en',
    c = (t => ('ru' === t ? yo : vo))(a)
  return i(
    'div',
    {
      className: t.isHidden ? ds.paneHidden : ds.pane,
      id: 'usertest-recorder',
      onClick: n
    },
    !t.isClosing &&
      !t.isHidden &&
      (function (t) {
        switch (t) {
          case 'not_chosen':
          case 'farewell':
            return !1
          default:
            return !0
        }
      })(t.stage) &&
      i(
        'button',
        {
          className: ds.close,
          id: 'ut-close',
          onClick: () => e('ut/close', !0)
        },
        c.cancel
      ),
    t.isClosing
      ? i(ho, {
          locale: a,
          onCancel: () => e('ut/close', !1),
          onConfirm: () => e('ut/terminate')
        })
      : o && i(o, { toggle: s, isHidden: t.isHidden })
  )
}
var wo = {
  wrapper: 'C2pr9',
  controls: 'C2poh',
  right: 'C2ps4',
  link: 'C2p2nt',
  active: 'C2p2nt C2p316',
  small: 'C2p2nt C2pgq'
}
let So
const Eo = () => {
  if ('indexedDB' in window)
    try {
      const t = window.indexedDB.open('data', 1)
      ;(t.onupgradeneeded = () => {
        try {
          const e = t.result
          e &&
            ((e.onerror = e => {
              console.error(t.error), e.preventDefault()
            }),
            e.createObjectStore('revisions'))
        } catch (t) {
          console.error(t)
        }
      }),
        (t.onerror = e => {
          console.error(t.error), e.preventDefault()
        }),
        (t.onblocked = t => {
          console.error('Request to indexedDB was blocked!'), t.preventDefault()
        }),
        (t.onsuccess = () => {
          function e (t) {
            t.preventDefault(), (So = void 0)
          }
          ;(So = t.result), (So.onabort = e), (So.onclose = e)
        })
    } catch (t) {
      console.error(t)
    }
}
Eo()
const Io = (t, e) =>
  new Promise((n, s) => {
    try {
      const o = So.transaction('revisions', t)
      ;(o.oncomplete = () => n()),
        (o.onerror = () => s(o.error)),
        e(o.objectStore('revisions'))
    } catch (t) {
      try {
        window.indexedDB.deleteDatabase('data')
      } catch (t) {}
      s(t)
    }
  })
async function xo (t) {
  if (!So) return Eo(), null
  try {
    let e = null
    return (
      await Promise.race([
        Io('readonly', n => (e = n.get(t))),
        new Promise(t => setTimeout(t, 100))
      ]),
      e && e.result
    )
  } catch (t) {
    return console.error(t), null
  }
}
async function Co (t, e) {
  if (!So) return Eo(), null
  try {
    await Promise.race([
      Io('readwrite', n => n.put(e, t)),
      new Promise(t => setTimeout(t, 200))
    ])
  } catch (t) {
    return console.error(t), null
  }
}
async function ko (t, e, n) {
  let s =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { Accept: 'application/json' },
    o = 0,
    i = ''
  const r = { headers: s, signal: n }
  for (let e = 0; e < 6 && 404 !== o; e++) {
    try {
      if (n.aborted) return
      const a = await fetch(t(e), r)
      if (n.aborted) return
      if (a.ok) {
        let t
        return (
          (t =
            'application/json' === s.Accept
              ? a.json()
              : 'text/plain' === s.Accept
              ? a.text()
              : a.arrayBuffer()),
          await t
        )
      }
      ;(o = a.status),
        (i = 404 === a.status ? 'Not Found' : a.statusText || 'Network Error')
    } catch (t) {
      if (n.aborted || 'AbortError' === t.name) return
      console.error(t), (o = 0), (i = t.message || 'Network Error')
    }
    await new Promise(t => setTimeout(t, 20 * e))
  }
  throw new gn(o, i)
}
function To (t) {
  'requestIdleCallback' in window
    ? window.requestIdleCallback(t, { timeout: 500 })
    : setTimeout(t, 0)
}
const Ao = t => new Promise(e => setTimeout(e, t))
function Oo (t) {
  t.name = t.name.replace(/Дорожка/g, 'Track')
}
class Po {
  constructor () {
    this.aborted = !1
  }
  addEventListener () {}
  removeEventListener () {}
  dispatchEvent () {
    return !1
  }
}
class _o {
  constructor () {
    this.signal = new Po()
  }
  abort () {
    this.signal.aborted = !0
  }
}
Object.defineProperty(_o, 'name', { value: 'AbortController' }),
  Object.defineProperty(Po, 'name', { value: 'AbortSignal' })
var Lo = 'undefined' != typeof AbortController ? AbortController : _o
const No = ['dqsljvtekg760', 'd34shlm8p2ums2', 'd3cqchs6g3b5ew'],
  Ro = ['d3rrfvx08uyjp1', 'dodkcbujl0ebx', 'dj1usja78sinh']
function jo (t) {
  const e = t.name.toLowerCase(),
    n = t.instrument.toLowerCase()
  let s = t.name
  ;('untitled' === e || ('drumkit' === e && 'drums' === n) || n.includes(e)) &&
    (s = ''),
    (t.title = t.instrument),
    s.length && (t.title = s + ' - ' + t.title)
}
async function Mo (t, e, n) {
  const s = '/api/meta/'.concat(t).concat(e ? '/'.concat(e) : ''),
    o = await ko(() => s, 'meta', n, void 0)
  if (n.aborted || !o) return null
  if (o.tracks) {
    let t = 0
    for (const e of o.tracks) {
      Oo(e), jo(e), (e.partId = t)
      const { instrumentId: n } = e
      me(n)
        ? (e.isDrums = !0)
        : ve(n)
        ? (e.isBassGuitar = !0)
        : ye(n) && (e.isGuitar = !0),
        t++
    }
    !(function (t) {
      const e = {}
      for (const n of t) {
        let t = e[n.title]
        t || ((t = []), (e[n.title] = t)), t.push(n)
      }
      for (const t in e) {
        const n = e[t]
        if (n.length > 1) {
          let t = 0
          for (const e of n) (e.title += ' ' + (t + 1)), t++
        }
      }
    })(o.tracks)
  }
  return o
}
async function Do (t, e, n, s, o) {
  const i = 'part_'
      .concat(e, '_')
      .concat(n, '_')
      .concat(s || ''),
    r = await xo(i)
  if (r) return r
  const a = await ko(
    o =>
      s
        ? 'https://'
            .concat(No[o % No.length], '.cloudfront.net/')
            .concat(t, '/')
            .concat(e, '/')
            .concat(s, '/')
            .concat(n, '.json')
        : 'https://'
            .concat(Ro[o % Ro.length], '.cloudfront.net/part/')
            .concat(e, '/')
            .concat(n),
    'part',
    o
  )
  return !a || o.aborted ? null : (await Co(i, a), a)
}
async function Bo (t, e) {
  let n = 0,
    s = null
  const o = new Lo()
  for (; !s && n < 120; ) {
    try {
      s = await Mo(t, e, o.signal)
    } catch (t) {
      console.error(t), await Ao(2e3)
    }
    n++
  }
  return s
}
function Fo (t, e) {
  return !t || ('AllCountries' !== t.restriction && t.restriction !== e)
}
function Uo (t, e) {
  if (!t.current) return !1
  const n = e.isAdmin && t.current.nextAudio
  return !!(t.current.audio || t.current.audioV2 || n)
}
const Ho = t => {
    t.on('route/change', (e, n) => {
      let { routeContent: s } = n
      if (s && 'tab' === s.page) {
        const { songId: e, partId: n, revisionId: o, partInstrument: i } = s
        !(async function (t, e, n, s, o) {
          const i = new Lo()
          try {
            const r = t.get().meta,
              a = r.loading
            a && a.ac.abort()
            const c = r.songId !== e,
              l = r.revisionId !== o
            if (
              (await t.dispatch('meta/load:processing', {
                songId: e,
                partInstrument: n,
                partId: s,
                revisionId: o,
                songHasChanged: c,
                revisionHasChanged: l,
                ac: i
              }),
              i.signal.aborted)
            )
              return
            let d = t.get().meta.current
            if (
              (c || l || !d || d.songId !== e || (o && d.revisionId !== o)) &&
              ((d = await Mo(e, o, i.signal)), i.signal.aborted || !d)
            )
              return
            if (null == s)
              s = (function (t, e) {
                if (!t && !t.length) return 0
                let n = ye
                'bass' === e ? (n = ve) : 'drum' === e && (n = me)
                let s = t.filter(t => n(t.instrumentId))
                s.length || (s = t)
                let o = s[0].partId,
                  i = 0
                for (const t of s) {
                  const e = t.views || 0
                  e > i && ((o = t.partId), (i = e))
                }
                return o
              })(d.tracks, n)
            else if (d.tracks && !d.tracks[s])
              return void (await t.dispatch('navigate', Me(d, o)))
            await t.dispatch('meta/load:done', {
              songId: e,
              partId: s,
              revisionId: o,
              current: d
            })
          } catch (n) {
            if (i.signal.aborted) return
            t.dispatch('meta/load:error', {
              songId: e,
              revisionId: o,
              error: n
            })
          }
        })(t, e, i, n, o)
      }
    }),
      t.on('meta/load:processing', (t, e) => {
        let { songId: n, revisionId: s, ac: o } = e
        return {
          meta: Object.assign({}, t.meta, {
            loading: { songId: n, revisionId: s, ac: o }
          })
        }
      }),
      t.on('meta/load:done', (t, e) => {
        let { songId: n, revisionId: s, partId: o, current: i } = e
        return {
          meta: Object.assign({}, t.meta, {
            current: i,
            allowedByLicense: Fo(i, t.device.country),
            songId: n,
            revisionId: s,
            partId: o,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1
          })
        }
      }),
      t.on('meta/load:done', (t, e) => {
        let { current: n } = e
        try {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: n.title,
            artist: n.artist,
            artwork: [
              {
                src: '/static/media/artwork-96x96.7f1b5856.png',
                sizes: '96x96',
                type: 'image/png'
              },
              {
                src: '/static/media/artwork-128x128.8a4c15a5.png',
                sizes: '128x128',
                type: 'image/png'
              },
              {
                src: '/static/media/artwork-192x192.ef4ca073.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: '/static/media/artwork-256x256.89e212c5.png',
                sizes: '256x256',
                type: 'image/png'
              },
              {
                src: '/static/media/artwork-384x384.e3f936a7.png',
                sizes: '384x384',
                type: 'image/png'
              },
              {
                src: '/static/media/artwork-512x512.cab80a9e.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          })
        } catch (t) {
          console.error(t)
        }
      }),
      t.on('meta/load:error', (t, e) => {
        let { songId: n, revisionId: s, error: o } = e
        return {
          meta: Object.assign({}, t.meta, {
            current: null,
            allowedByLicense: !0,
            songId: n,
            revisionId: s,
            partId: null,
            loading: null,
            isFailed: !0,
            isNetworkFailed: o instanceof gn && 0 === o.status,
            isNotFound:
              o instanceof gn && (404 === o.status || 400 === o.status)
          })
        }
      }),
      t.on('meta/load:error', (t, e) => {
        let { error: n } = e
        'Sentry' in window &&
          'function' == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n)
      }),
      t.on('meta/setWasFavoriteOnServerRender', (t, e) => ({
        meta: Object.assign({}, t.meta, { wasFavoriteOnServerRender: e })
      }))
  },
  qo = () => {
    const { meta: t, player: e } = C('meta', 'player')
    if (!t.current || !e.version) return
    const { dispatch: n } = C(),
      s = e.version
    let o = null
    if ('audio' !== s) {
      const e = 'next' === s,
        n = e ? t.current.nextMidi : t.current.audioV2Midi,
        r = e ? t.current.nextAudio : t.current.audioV2
      let a = e ? 'v2' : 'v1',
        c = e ? 'v2' : 'v1',
        l = n
      ;/^v\d+-/.test(n) && ([a, l] = n.split('-')),
        /^v\d+-/.test(r) && ([c] = r.split('-')),
        (o = i(
          'span',
          null,
          'MIDI: ',
          i(
            'a',
            {
              className: wo.link,
              href: 'https://github.com/songsterr/songsterr-processor-midi/commit/'.concat(
                l
              ),
              target: '_blank'
            },
            a
          ),
          ' Audio: '.concat(c)
        ))
    }
    const r = (t, e) => {
        t.preventDefault(), n('editor/sound:generate', { version: e })
      },
      a = (t, e) => {
        t.preventDefault(), n('editor/sound:toggle', { version: e })
      },
      c = (function (t) {
        return (
          t.current && t.current.nextAudio && t.current.nextAudio.includes('-')
        )
      })(t)
    return i(
      'div',
      { className: wo.wrapper },
      i(
        'div',
        { className: wo.controls },
        i(
          'div',
          { className: wo.left },
          'Sound: ',
          i(
            'a',
            {
              className: 'audio' === s ? wo.active : wo.link,
              disabled: !t.current.audio,
              onClick: t => a(t, 'audio')
            },
            'SRWO'
          ),
          ' ',
          i(
            'a',
            {
              className: 'audioV2' === s ? wo.active : wo.link,
              disabled: !t.current.audioV2,
              onClick: t => a(t, 'audioV2')
            },
            'Prod'
          ),
          ' ',
          i(
            'a',
            {
              className: 'next' === s ? wo.active : wo.link,
              disabled: !c,
              onClick: t => a(t, 'next')
            },
            'Dev'
          ),
          ' ',
          o
        ),
        i(
          'div',
          { className: wo.right },
          i(
            'a',
            {
              className: wo.small,
              href: 'https://www.songsterr.com/api/sound/audioV2',
              target: '_blank'
            },
            'Latest prod'
          ),
          ' ',
          i(
            'a',
            {
              className: wo.small,
              href: 'https://www.songsterr.com/api/sound/next',
              target: '_blank'
            },
            'Latest dev'
          ),
          ' | ',
          i(
            'a',
            { className: wo.small, onClick: t => r(t, 'audioV2') },
            t.current.audioV2 ? 'Regenerate prod' : 'Generate prod'
          ),
          ' ',
          i(
            'a',
            { className: wo.small, onClick: t => r(t, 'next') },
            c ? 'Regenerate dev' : 'Generate dev'
          )
        )
      )
    )
  }
function Go (t) {
  return (t.current && t.current.tracks && t.current.tracks[t.partId]) || null
}
const Wo = { ignoreSingleAppearance: !0, ignoreDailyTimespan: !0 }
let Vo
async function Xo (t, e) {
  const n = t.get(),
    s = []
  for (const t of n.screener.candidates) {
    const o = t.filter.bassPage,
      i = Go(n.meta)
    if (
      'unset' !== o &&
      (!i || ('yes' === o && !i.isBassGuitar) || ('no' === o && i.isBassGuitar))
    )
      continue
    const r = t.filter.drumsPage
    if (
      'unset' !== r &&
      (!i || ('yes' === r && !i.isDrums) || ('no' === r && i.isDrums))
    )
      continue
    const a = t.filter.showAfterAction
    ;(a && a !== e.event) || s.push(t)
  }
  if (s.length) {
    const n = s[Math.floor(Math.random() * s.length)]
    if (n.usertest && !(await Fn(t.dispatch, n.usertest))) return
    if ((clearTimeout(Vo), n.filter.delay))
      return void (Vo = setTimeout(() => {
        Nn(kn.SCREENER, Object.assign({}, Wo, { forced: e.forced })) &&
          t.dispatch('screener/set', n)
      }, 1e3 * n.filter.delay))
    Nn(kn.SCREENER, Object.assign({}, Wo, { forced: e.forced })) &&
      t.dispatch('screener/set', n)
  }
}
function zo (t, e) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
  const s = t.get()
  s.screener.candidates.length && To(() => Xo(t, { event: e, forced: n }))
}
const Yo = t => {
    t.on(
      'screener/set',
      (t, e) => (
        e &&
          (function (t) {
            const e = new Date()
            e.setTime(e.getTime() + 7776e6),
              (document.cookie = ''
                .concat('ScrShwn', '-')
                .concat(t.cookie, '=true;expires=')
                .concat(e.toUTCString(), ';path=/'))
          })(e),
        {
          screener: Object.assign({}, t.screener, { candidates: [], active: e })
        }
      )
    ),
      t.on(
        'screener/loaded',
        (e, n) => (
          To(() => Xo(t, {})),
          {
            screener: Object.assign({}, e.screener, {
              candidates: n,
              active: void 0
            })
          }
        )
      ),
      t.on('screener/dismiss', t => {
        let { screener: e } = t
        return (
          _n(kn.SCREENER),
          { screener: Object.assign({}, e, { candidates: [], active: void 0 }) }
        )
      }),
      t.on('screener/accept', t => {
        let { screener: e } = t
        return (
          _n(kn.SCREENER),
          { screener: Object.assign({}, e, { candidates: [], active: void 0 }) }
        )
      }),
      t.on('curiosity/event', (e, n) => {
        const { event: s } = n
        e.screener.candidates.length && To(() => Xo(t, { event: s }))
      }),
      t.on('curiosity/vpt10', e => {
        e.screener.candidates.length && To(() => Xo(t, { event: 'vpt10' }))
      }),
      t.on('screener/minuteSpent', () => zo(t, 'MinuteSpent')),
      t.on('screener/pressedEditor', () => zo(t, 'PressedEditor'))
  },
  Jo = ['formX', 'formY', 'fret', 'beatNum', 'measureNum'],
  Ko = ['formX', 'formY', 'fret', 'beatNum', 'measureNum']
function Qo (t) {
  let e,
    n = t[0],
    s = 1
  for (; s < t.length; ) {
    const o = t[s],
      i = t[s + 1]
    if (
      ((s += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)
    )
      return
    'access' === o || 'optionalAccess' === o
      ? ((e = n), (n = i(n)))
      : ('call' !== o && 'optionalCall' !== o) ||
        ((n = i(function () {
          for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
            s[o] = arguments[o]
          return n.call(e, ...s)
        })),
        (e = void 0))
  }
  return n
}
const Zo = [2182125, 1888170, 2255715],
  $o = () => xn('hasSeenEditor') || !1,
  ti = () => Cn('hasSeenEditor', !0)
function ei (t) {
  return (t.returnValue = 'o/'), 'o/'
}
let ni, si
const oi = function (t, e, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      o = t,
      i = s
    const r = o.layout,
      a = r.measureLayout.lineLayout.stringY,
      c = r.measureLayout.measure.index,
      l = r.absoluteX * n,
      d = (a + 12 * (e - 1)) * n
    let u = ''
    const p = o.notes.find(t => t.string === e && !t.bogus)
    if (p) u = p.dead ? 'X' : p.fret
    else {
      const t = r.beats.filter(t => 0 !== t.notes.length && t.voice !== s)
      for (const n of t) {
        const t = n.notes.find(t => t.string === e && !t.bogus)
        t && ((u = t.fret), (o = n), (i = n.voice))
      }
    }
    return {
      formX: l,
      formY: d,
      fret: u,
      measureNum: c,
      beatNum: o.index,
      beat: o,
      voice: i
    }
  },
  ii = (t, e, n, s, o) => {
    if (t) {
      const i = t[e]
      if (i && i.beats) {
        const t = i.beats.find(t => t.beatNum === n && t.voice === o)
        if (t && t.editedNotes) {
          const e = t.editedNotes.find(t => t.string === s)
          if (e) return e.fret
        }
      }
    }
  },
  ri = t => {
    let { meta: e, experiments: n } = t
    const { useful_edits_v3: s } = n,
      { partId: o } = e,
      { takesPartInUsefulEdits: i, tracksWithUsefulEdits: r } = e.current
    return (
      void 0 !== s && i && Array.isArray(r) && -1 !== r.indexOf(''.concat(o))
    )
  },
  ai = t => {
    t.on('@init', () => ({
      tabEditor: {
        positioned: !1,
        beat: void 0,
        formX: 0,
        formY: 0,
        measureNum: 0,
        beatNum: 0,
        stringNum: 0,
        voice: 0,
        fret: '',
        originalFret: '',
        data: void 0,
        status: 'unset',
        adminData: [],
        adminPanelOpened: !1
      }
    })),
      t.on('layer/show', (t, e) => {
        let { tabEditor: n } = t
        if ('tab_editor' === e)
          return {
            tabEditor: Object.assign({}, n, {
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              fret: '',
              originalFret: '',
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              voice: 0
            })
          }
      }),
      t.on('tabEditor/setForm', (e, n) => {
        let { beatsLayout: s, touch: o, scale: i } = n
        const r = s.measureLayout.lineLayout.stringY,
          a = s.measureLayout.lineLayout.line.strings,
          c = o.y - r
        if (c < -10 || c > 73) return
        const l = Math.floor(c / 12)
        let d,
          u,
          p = c - 12 * l <= 6 ? l : l + 1
        p < 0 ? (p = 0) : p >= a && (p = a - 1)
        for (const t of s.beats)
          if (!t.rest && 0 !== t.notes.length) {
            for (const e of t.notes)
              if (e.string === p && !e.bogus) {
                ;(d = t.voice), (u = t)
                break
              }
            if (void 0 !== d) break
          }
        if (void 0 === d) {
          if (((u = s.beats.find(t => !t.rest && 0 !== t.notes.length)), !u))
            return
          d = u.voice
        }
        const h = oi(u, p, i, d),
          { formX: g, formY: f, fret: m, beatNum: y, measureNum: v } = h,
          b = St(h, Jo),
          w = ii(e.tabEditor.data, v, y, p, b.voice),
          { device: S } = e
        return (
          !(ss(S) || es(S.os) || ns(S.os)) &&
            t.dispatch('player/moveCursor', {
              cursor: b.beat.layout.leftTime,
              loopStart: e.player.position.loopStart,
              loopEnd: e.player.position.loopEnd
            }),
          {
            tabEditor: Object.assign({}, e.tabEditor, {
              positioned: !0,
              formX: g,
              formY: f,
              fret: ''.concat(void 0 !== w ? w : m),
              originalFret: ''.concat(m),
              beat: u,
              beatNum: y,
              stringNum: p,
              measureNum: v,
              voice: d
            })
          }
        )
      }),
      t.on('tabEditor/formMove', (e, n) => {
        let { tabEditor: s, player: o, device: i } = e,
          { scale: r, direction: a } = n
        const { stringNum: c, beat: l, positioned: d } = s
        if (!d) return
        let u = l,
          p = c
        const h = u.layout.measureLayout.lineLayout.line.strings
        if ('up' === a) (p = c - 1), p < 0 && (p = h - 1)
        else if ('down' === a) (p = c + 1), p >= h && (p = 0)
        else if ('right' === a || 'left' === a) {
          const t = 'right' === a ? 'nextBeat' : 'prevBeat'
          do {
            const e = u
            if (
              ((u = e[t]), !u && !e.layout.beats.find(e => e[t] && !e.lyrics))
            )
              return
            let n = u.layout.measureLayout.measure.index
            for (const s of e.layout.beats) {
              if (!s[t] || s.lyrics || 0 === s.notes.length) continue
              const e = s[t],
                o = e.layout.measureLayout.measure.index
              if (('right' === a && o < n) || ('left' === a && o > n))
                (n = o), (u = e)
              else if (o === n) {
                const t = u.duration[0] / u.duration[1]
                s.duration[0] / s.duration[1] < t && ((n = o), (u = e))
              }
            }
            if (u.rest) {
              const t = u.layout.beats.find(
                t => !t.rest && !t.lyrics && 0 !== t.notes.length
              )
              t && (u = t)
            }
          } while (!0 === u.rest)
        }
        const g = oi(u, p, r, u.voice),
          { formX: f, formY: m, fret: y, beatNum: v, measureNum: b } = g,
          w = St(g, Ko),
          S = ii(s.data, b, v, p, w.voice)
        return (
          !(ss(i) || es(i.os) || ns(i.os)) &&
            t.dispatch('player/moveCursor', {
              cursor: w.beat.layout.leftTime,
              loopStart: o.position.loopStart,
              loopEnd: o.position.loopEnd
            }),
          {
            tabEditor: Object.assign({}, s, {
              positioned: !0,
              formX: f,
              formY: m,
              fret: ''.concat(void 0 !== S ? S : y),
              originalFret: ''.concat(y),
              beat: w.beat,
              voice: w.voice,
              beatNum: v,
              stringNum: p,
              measureNum: b
            })
          }
        )
      }),
      t.on('screen/resize', t => {
        let { tabEditor: e } = t
        if (e.positioned)
          return {
            tabEditor: Object.assign({}, e, {
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              fret: '',
              originalFret: ''
            })
          }
      }),
      t.on('tabEditor/changeNote', (e, n) => {
        let { tabEditor: s, part: o, user: i } = e
        const {
          measureNum: r,
          fret: a,
          originalFret: c,
          stringNum: l,
          beatNum: d,
          voice: u,
          positioned: p
        } = s
        if (!p || n === a) return
        let h
        if (s.data) h = [...s.data]
        else {
          const t = o.current.measures.length
          h = new Array(t)
        }
        let g = h[r]
        if (g && g.beats) {
          g = { beats: [...g.beats] }
          const t = g.beats.findIndex(t => t.beatNum === d && t.voice === u)
          if (-1 === t)
            g.beats.push({
              beatNum: d,
              voice: u,
              editedNotes: [{ string: l, fret: n, originalFret: c }]
            })
          else {
            const e = g.beats[t]
            e.editedNotes = [...e.editedNotes]
            const s = e.editedNotes.findIndex(t => t.string === l)
            ;-1 !== s &&
              (e.editedNotes = e.editedNotes
                .slice(0, s)
                .concat(e.editedNotes.slice(s + 1))),
              ('' === c && '' === n) ||
                c === n ||
                e.editedNotes.push({ string: l, fret: n, originalFret: c }),
              0 === e.editedNotes.length &&
                (g.beats = g.beats.slice(0, t).concat(g.beats.slice(t + 1))),
              0 === g.beats.length && (g = void 0)
          }
          h[r] = g
        } else
          (g = {
            beats: [
              {
                beatNum: d,
                voice: u,
                editedNotes: [{ string: l, fret: n, originalFret: c }]
              }
            ]
          }),
            (h[r] = g)
        return (
          window.addEventListener('beforeunload', ei),
          clearTimeout(ni),
          (ni = setTimeout(() => zo(t, 'TriedEditor'), 2e4)),
          i.isLoggedIn &&
            (clearTimeout(si),
            (si = setTimeout(() => t.dispatch('tabEditor/save'), 3e3))),
          {
            tabEditor: Object.assign({}, s, {
              data: h,
              fret: n,
              status: 'changes'
            })
          }
        )
      })
    const e = e => {
      let { tabEditor: n } = e
      'changes' === n.status && t.dispatch('tabEditor/save')
    }
    t.on('user/signIn', e),
      t.on('user/googleSignIn', e),
      t.on('user/signUp', e),
      t.on('tabEditor/save', async e => {
        let { meta: n, part: s, tabEditor: o, user: i } = e
        try {
          'changes' === o.status &&
            i.isLoggedIn &&
            (t.dispatch('tabEditor/save:changeStatus', 'saving'),
            await (async function (t, e, n, s) {
              const o = { songId: t, part: e, revision: n },
                i = []
              s.forEach((t, e) => {
                t && i.push(Object.assign({}, t, { index: e }))
              }),
                0 !== i.length &&
                  (o.data = JSON.stringify({
                    measuresCount: s.length,
                    packedData: i
                  }))
              const r = await fn('/api/tab-editor', o)
              return mn(r), r.json()
            })(n.songId, s.partId, s.revisionId, o.data),
            Math.random() < 0.1 &&
              t.dispatch('curiosity/event', {
                event: 'Autosaved tab edit 10% sampling'
              }),
            setTimeout(
              () => t.dispatch('tabEditor/save:changeStatus', 'saved'),
              1e3
            ))
        } catch (t) {
          console.log(t)
        }
      }),
      t.on('tabEditor/save:changeStatus', (t, e) => {
        if ('saved' !== e || 'changes' !== t.tabEditor.status)
          return (
            'saved' === e && window.removeEventListener('beforeunload', ei),
            { tabEditor: Object.assign({}, t.tabEditor, { status: e }) }
          )
      }),
      t.on('part/load:raw', () => {
        t.dispatch('tabEditor/load')
      }),
      t.on('part/load:done', e => {
        let { meta: n, experiments: s } = e
        if (void 0 !== s.useful_edits_v3 && n && n.current) {
          const {
            takesPartInUsefulEdits: e,
            tracksWithUsefulEdits: s
          } = n.current
          e &&
            Array.isArray(s) &&
            -1 !== s.indexOf(''.concat(n.partId)) &&
            t.dispatch('curiosity/enteredExperiment', {
              experiment: 'useful_edits_v3',
              payload: {
                songId: n.songId,
                revisionId: n.current.revisionId,
                artistId: n.current.artistId,
                partId: n.partId
              }
            })
        }
      }),
      t.on('tabEditor/load', async e => {
        let { user: n, part: s, query: o } = e
        try {
          if ((t.dispatch('tabEditor/load:flush'), n.isLoggedIn)) {
            const { songId: e, partId: i, revisionId: r } = s
            let a
            ;(a =
              void 0 !== o.tabedit &&
              (n.isAdmin ||
                Zo.includes(
                  Qo([n, 'access', t => t.profile, 'optionalAccess', t => t.id])
                ))
                ? await (async function (t) {
                    const e = '/api/tab-editor/'.concat(t),
                      n = await fetch(e)
                    mn(n)
                    const s = await n.json()
                    if (!s.data) return
                    const o = JSON.parse(s.data),
                      i = Array(o.measuresCount)
                    return (
                      o.packedData.forEach(t => {
                        const e = t.index
                        delete t.index, (i[e] = t)
                      }),
                      {
                        songId: s.songId,
                        part: s.part,
                        revision: s.revision,
                        data: i
                      }
                    )
                  })(+o.tabedit)
                : await (async function (t, e, n) {
                    const s = '/api/tab-editor?songId='
                        .concat(t, '&part=')
                        .concat(e, '&revision=')
                        .concat(n),
                      o = await fetch(s)
                    mn(o)
                    const i = await o.json()
                    if (!i.data) return
                    const r = JSON.parse(i.data),
                      a = Array(r.measuresCount)
                    return (
                      r.packedData.forEach(t => {
                        const e = t.index
                        delete t.index, (a[e] = t)
                      }),
                      {
                        songId: i.songId,
                        part: i.part,
                        revision: i.revision,
                        data: a
                      }
                    )
                  })(e, i, r)),
              a &&
                t.dispatch('tabEditor/load:done', {
                  songId: a.songId,
                  part: a.part,
                  data: a.data
                })
          }
        } catch (t) {
          console.log(t)
        }
      }),
      t.on('tabEditor/load:flush', t => {
        let { tabEditor: e } = t
        return (
          window.removeEventListener('beforeunload', ei),
          {
            tabEditor: Object.assign({}, e, {
              positioned: !1,
              beat: void 0,
              formX: 0,
              formY: 0,
              measureNum: 0,
              beatNum: 0,
              stringNum: 0,
              voice: 0,
              fret: '',
              originalFret: '',
              data: void 0,
              status: 'unset'
            })
          }
        )
      }),
      t.on('tabEditor/load:done', (t, e) => {
        let { songId: n, part: s, data: o } = e
        if (n === t.part.songId && s === t.part.partId)
          return { tabEditor: Object.assign({}, t.tabEditor, { data: o }) }
        console.log('Loaded tab editor data lost its relevance')
      }),
      t.on('tabEditor/toggleAdminPanel', t => {
        let { tabEditor: e, user: n } = t
        if (
          n.isAdmin ||
          Zo.includes(
            Qo([n, 'access', t => t.profile, 'optionalAccess', t => t.id])
          )
        )
          return {
            tabEditor: Object.assign({}, e, {
              adminPanelOpened: !e.adminPanelOpened,
              adminData: []
            })
          }
      }),
      t.on('tabEditor/loadAdminData', async (e, n) => {
        let { user: s } = e,
          { offset: o, limit: i } = n
        try {
          if (
            s.isAdmin ||
            Zo.includes(
              Qo([s, 'access', t => t.profile, 'optionalAccess', t => t.id])
            )
          ) {
            const e = await (async function (t, e) {
              const n = '/api/tab-editor/admin-data?offset='
                  .concat(t, '&limit=')
                  .concat(e),
                s = await fetch(n)
              return mn(s), s.json()
            })(o, i)
            t.dispatch('tabEditor/loadAdminData:done', e)
          }
        } catch (t) {
          console.log(t)
        }
      }),
      t.on('tabEditor/loadAdminData:done', (t, e) => ({
        tabEditor: Object.assign({}, t.tabEditor, { adminData: e })
      })),
      t.on('tabEditor/loadById', (e, n) => {
        const s = e.tabEditor.adminData.find(t => t.id === n)
        if (
          (e.user.isAdmin ||
            Zo.includes(
              Qo([
                e,
                'access',
                t => t.user,
                'access',
                t => t.profile,
                'optionalAccess',
                t => t.id
              ])
            )) &&
          s
        ) {
          const { songId: o, partId: i, revisionId: r } = e.part,
            a = je(
              { songId: s.songId, artist: '', title: '' },
              s.part,
              s.revision
            )
          t.dispatch('navigate', ''.concat(a, '?tabedit=').concat(n)),
            s.songId === o &&
              s.part === i &&
              s.revision === r &&
              To(() => t.dispatch('tabEditor/load'))
        }
      })
  },
  ci = 12,
  li = 25,
  di = 35,
  ui = 25,
  pi = 18,
  hi = 5,
  gi = 12,
  fi = 8,
  mi = 12,
  yi = 22,
  vi = 12,
  bi = 2,
  wi = 2,
  Si = 0,
  Ei = 0,
  Ii = -5,
  xi = 4,
  Ci = 12,
  ki = -3,
  Ti = []
function Ai (t) {
  return -1 * Math.floor(t.width / 2)
}
class Oi {
  constructor (t, e, n) {
    wt(this, 'source', void 0),
      wt(this, 'index', void 0),
      wt(this, 'prevBeat', void 0),
      wt(this, 'nextBeat', void 0),
      wt(this, 'duration', void 0),
      wt(this, 'type', void 0),
      wt(this, 'dotted', void 0),
      wt(this, 'tuplet', void 0),
      wt(this, 'rest', void 0),
      wt(this, 'pickStroke', void 0),
      wt(this, 'upStroke', void 0),
      wt(this, 'downStroke', void 0),
      wt(this, 'letRing', void 0),
      wt(this, 'palmMute', void 0),
      wt(this, 'harmonic', void 0),
      wt(this, 'wideVibrato', void 0),
      wt(this, 'vibrato', void 0),
      wt(this, 'width', void 0),
      wt(this, 'voice', void 0),
      wt(this, 'beamStart', void 0),
      wt(this, 'beamStop', void 0),
      wt(this, 'tupletStart', void 0),
      wt(this, 'tupletStop', void 0),
      wt(this, 'lyrics', void 0),
      wt(this, 'layout', void 0),
      wt(this, 'notes', void 0),
      wt(this, 'chord', void 0),
      wt(this, 'text', void 0),
      wt(this, 'tapping', void 0),
      wt(this, 'originalText', void 0),
      wt(this, 'hat', void 0),
      wt(this, 'accentuated', void 0),
      wt(this, 'heavyAccentuated', void 0),
      wt(this, 'staccato', void 0),
      wt(this, 'tremolo', void 0),
      (this.source = t),
      (this.index = e),
      (this.prevBeat = null),
      (this.nextBeat = null),
      (this.duration = t.duration),
      (this.type = t.type),
      (this.dotted = t.dotted),
      (this.tuplet = t.tuplet || 0),
      (this.rest = t.rest),
      (this.pickStroke = t.pickStroke),
      (this.upStroke = t.upStroke),
      (this.downStroke = t.downStroke),
      (this.letRing = t.letRing),
      (this.palmMute = t.palmMute),
      (this.wideVibrato = t.wideVibrato),
      (this.vibrato = t.vibrato),
      (this.width = 0),
      (this.voice = 0),
      (this.beamStart = t.beamStart),
      (this.beamStop = t.beamStop),
      (this.tupletStart = t.tupletStart),
      (this.tupletStop = t.tupletStop),
      (this.layout = n),
      (this.notes = t.notes ? new Array(t.notes.length) : Ti),
      (this.chord = t.chord
        ? {
            layer: null,
            text:
              void 0 !== t.chord.text && void 0 !== t.chord.text.text
                ? t.chord.text.text
                : t.chord.text,
            width: t.chord.width
          }
        : void 0),
      (this.text = void 0),
      (this.originalText = t.text
        ? {
            layer: null,
            text:
              void 0 !== t.text.text && void 0 !== t.text.text.text
                ? t.text.text.text
                : t.text.text,
            width: t.text.width
          }
        : void 0),
      (this.lyrics =
        void 0 !== t.lyrics
          ? t.lyrics.map(t => ({ layer: null, text: t.text, width: t.width }))
          : void 0),
      (this.tapping = t.tapping ? { layer: null, text: 'T', width: 6 } : void 0)
  }
  getLyricsPosition (t, e) {
    const n = Ai(t),
      s = this.layout.absoluteX + n
    let o = 0
    return e >= s && (o = e - s + 1), { x1: s, x2: s + t.width, diff: o }
  }
  getAccentuatedPosition () {
    const t = this.layout.absoluteX - 6
    return { x1: t, x2: t + 12 }
  }
  getStaccatoPosition () {
    const t = this.layout.absoluteX - 5
    return { x1: t, x2: t + 10 }
  }
  getTremoloPosition () {
    const t = this.layout.absoluteX - 5
    return { x1: t, x2: t + 13 }
  }
  getHatPosition () {
    const t = this.layout.absoluteX - 5
    return { x1: t, x2: t + 13 }
  }
  getTextPosition (t) {
    const e = t.text.length < 4 ? -1 * Math.floor(t.width / 2) : -10,
      n = this.layout.absoluteX + e
    return { x1: n, x2: n + t.width }
  }
  getChordPosition (t) {
    const e = t.width,
      n = this.layout.absoluteX - Math.floor(e / 2)
    return { x1: n, x2: n + e }
  }
  hasSlide () {
    return this.notes.some(t => t.rightSlide || t.leftSlide)
  }
  isSubchordOf (t) {
    return (function (t, e) {
      for (let n = 0; n < t.length; n++) {
        const s = t[n]
        let o = !1
        for (let t = 0; t < e.length; t++) {
          const n = e[t]
          if (s.string === n.string && s.fret === n.fret) {
            o = !0
            break
          }
        }
        if (!o) return !1
      }
      return !0
    })(this.notes, t.notes)
  }
  isDropChord () {
    let t = null
    for (let e = 0; e < this.notes.length; e++) {
      const n = this.notes[e]
      if (n.dead) return !1
      if ((null === t && (t = n.fret), n.fret !== t)) return !1
    }
    return this.notes.length > 0
  }
  isOpenChord () {
    for (let t = 0; t < this.notes.length; t++) {
      const e = this.notes[t]
      if (e.dead) return !1
      if (0 !== e.fret) return !1
    }
    return this.notes.length > 0
  }
  hasOnlyDeadNotes () {
    return (function (t) {
      for (let e = 0; e < t.length; e++) if (!t[e].dead) return !1
      return t.length > 0
    })(this.notes)
  }
}
class Pi {
  constructor (t) {
    wt(this, 'x', void 0),
      wt(this, 'originX', void 0),
      wt(this, 'absoluteX', void 0),
      wt(this, 'absoluteLoopLeftX', void 0),
      wt(this, 'absoluteLoopRightX', void 0),
      wt(this, 'measureLayout', void 0),
      wt(this, 'duration', void 0),
      wt(this, 'beats', void 0),
      wt(this, 'occurrences', void 0),
      wt(this, 'usedStrings', void 0),
      wt(this, 'usedRest', void 0),
      wt(this, 'shifts', void 0),
      wt(this, 'durationBeforeNextPickStroke', void 0),
      (this.x = 0),
      (this.originX = 0),
      (this.absoluteX = 0),
      (this.absoluteLoopLeftX = 0),
      (this.absoluteLoopRightX = 0),
      (this.measureLayout = t),
      (this.duration = Number.MAX_VALUE),
      (this.beats = []),
      (this.occurrences = []),
      (this.shifts = []),
      (this.usedStrings = 0),
      (this.usedRest = !1),
      (this.durationBeforeNextPickStroke = null)
  }
  get stringY () {
    return this.measureLayout.lineLayout.stringY
  }
  get maxX () {
    return this.measureLayout.lineLayout.maxX
  }
  get minX () {
    return this.measureLayout.lineLayout.minX
  }
  get leftTime () {
    return this.occurrences[0]
  }
  get rightTime () {
    return this.occurrences[this.occurrences.length - 1]
  }
  get loopLeftTime () {
    return this.occurrences[0]
  }
  get firstLoopRightTime () {
    return this.occurrences[0] + this.duration
  }
  get loopRightTime () {
    return this.occurrences[this.occurrences.length - 1] + this.duration
  }
}
function _i (t, e) {
  return t.layout.measureLayout.lineLayout !== e.layout.measureLayout.lineLayout
}
function Li (t, e) {
  return (
    t.layout.measureLayout.measure.index !==
    e.layout.measureLayout.measure.index
  )
}
function Ni (t, e) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
  if (t === e && !n) return 0
  let s = e.layout.x
  if (n) {
    const t = e.nextBeat
    t && ((s = t.layout.x), Li(e, t) && (s += e.layout.measureLayout.width))
  }
  const o = t.layout.measureLayout.measure
  let i = o.layout.x + s - t.layout.absoluteX
  const r = e.layout.measureLayout.measure,
    a = r.index
  let c = -1,
    l = t
  for (; l && c < a; ) {
    const t = l.layout.measureLayout.measure
    t.index > c && t.index < a && (i += t.layout.width),
      (c = t.index),
      (l = l.nextBeat)
  }
  return i
}
function Ri (t) {
  const e = t.lastRef().beat,
    n = e.nextBeat ? e.nextBeat : e
  return _i(t.firstRef().beat, n)
}
function ji (t) {
  return _i(t.firstRef().beat, t.lastRef().beat)
}
class Mi {
  constructor (t) {
    wt(this, 'refs', void 0),
      wt(this, 'keep', void 0),
      wt(this, 'layer', void 0),
      (this.refs = [t]),
      (this.keep = !0),
      (this.layer = null)
  }
  reset (t) {
    this.refs = [t]
  }
  addRef (t) {
    this.refs.push(t)
  }
  firstRef () {
    return this.refs[0]
  }
  lastRef () {
    return this.refs[this.refs.length - 1]
  }
  indexOfNote (t) {
    for (let e = 0; e < this.refs.length; e++)
      if (this.refs[e].note === t) return e
    return -1
  }
  indexOfBeat (t) {
    for (let e = 0; e < this.refs.length; e++)
      if (this.refs[e].beat === t) return e
    return -1
  }
}
const Di = { family: 'Arial', size: 13, style: 'normal' },
  Bi = new Map()
function Fi (t, e, n) {
  let s = Bi.get(n.family)
  s || ((s = new Map()), Bi.set(n.family, s))
  let o = s.get(n.style)
  o || ((o = new Map()), s.set(n.style, o))
  let i = o.get(n.size)
  i || ((i = new Map()), o.set(n.size, i))
  let r = i[e]
  return void 0 !== r || ((r = t(e, n)), (i[e] = r)), r
}
class Ui {}
wt(Ui, 'textWidth', void 0), wt(Ui, 'fitTextToAvailableWidth', void 0)
let Hi = null
const qi =
  ((Gi = function (t, e) {
    let n = !0
    ;('undefined' != typeof document &&
      'function' == typeof document.createElement) ||
      (n = !1),
      (Hi = n ? document.createElement('canvas') : null)
    const s =
      Hi && 'function' == typeof Hi.getContext ? Hi.getContext('2d') : null
    if (((n = !!s && 'function' == typeof s.measureText), !n || !s)) return 0
    const o = {
        style: 'normal',
        constraint: 'normal',
        weight: 'normal',
        size: Di.size,
        family: Di.family,
        align: 'start',
        baseline: 'alphabetic'
      },
      i = Object.assign({}, o, e)
    return (
      (s.font = ''
        .concat(i.style, ' ')
        .concat(i.constraint, ' ')
        .concat(i.weight, ' ')
        .concat(i.size, 'px ')
        .concat(i.family)),
      (s.textAlign = i.align),
      (s.textBaseline = i.baseline),
      +s.measureText(t).width.toFixed(4)
    )
  }),
  function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Di
    return t && t.length ? Fi(Gi, t, e) : 0
  })
var Gi
const Wi =
  ((Vi = qi),
  function (t, e, n) {
    let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
    const o = t.split(' ')
    let i = o[0],
      r = Vi(i, Di),
      a = 1
    for (; a < o.length - 1; a++) {
      const t = Vi(o[a], Di)
      if (r + 3.6118 + t > n) break
      ;(i += ' ' + o[a]), (r += 3.6118 + t)
    }
    const c = s ? '…' : '',
      l = s ? 13 : 0
    i += c
    const d = c + o.slice(a).join(' ')
    return {
      phrase: { text: i, width: r + l, layer: null },
      rest: { text: d, width: e - r + l, layer: null }
    }
  })
var Vi
class Xi extends Ui {
  static textWidth (t, e) {
    return qi(t, e)
  }
  static fitTextToAvailableWidth (t, e, n, s) {
    return Wi(t, e, n, s)
  }
}
function zi (t, e) {
  return (t.x1 <= e.x1 && e.x1 < t.x2) || (e.x1 <= t.x1 && t.x1 < e.x2)
}
const Yi = ['staccato', 'accentuated', 'heavyAccentuated'],
  Ji = {
    tripletFeel: 1e3,
    capo: 100,
    measureMarker: 90,
    measureTempo: 80,
    lineHangingText: 70,
    beatText: 70,
    measureAlternateEnding: 70,
    letRing: 60,
    palmMute: 60,
    harmonic: 60,
    vibrato: 60,
    wideVibrato: 60,
    beatChord: 50,
    beatLyrics: 50,
    staccato: 40,
    beatTapping: 30,
    accentuated: 20,
    heavyAccentuated: 20,
    measureNumber: 0,
    beatHat: 0,
    noteBend: 0
  },
  Ki = {
    capo: 18,
    letRing: 14,
    palmMute: 14,
    harmonic: 14,
    vibrato: 7,
    wideVibrato: 8,
    lineHangingText: 18,
    measureNumber: 5,
    measureAlternateEnding: 14,
    measureMarker: 18,
    measureTempo: 16,
    beatText: 18,
    beatChord: 17,
    beatLyrics: 14,
    beatTapping: 11,
    tripletFeel: 42,
    beatHat: 10,
    accentuated: 10,
    heavyAccentuated: 12,
    staccato: 10
  }
class Qi {
  constructor () {
    wt(this, 'levels', void 0),
      wt(this, 'height', void 0),
      (this.levels = new Map()),
      (this.height = 0)
  }
  _getLevel (t) {
    let e = this.levels.get(t)
    return e || ((e = []), this.levels.set(t, e)), e
  }
  acquireLayer (t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
    const s = Ki[t]
    return this.acquireLayerWithHeight(t, s, e, n)
  }
  acquireLayerWithHeight (t, e, n) {
    const s = Ji[t],
      o = {
        effect: t,
        voice:
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        visible: !0,
        x1: n.x1,
        x2: n.x2,
        height: e,
        y: 0,
        diff: n.diff
      },
      i = this._getLevel(s)
    if (i.length && Yi.includes(o.effect))
      for (const t of i)
        t.x1 === o.x1 &&
          t.x2 === o.x2 &&
          t.effect === o.effect &&
          ((t.voice = 0), (o.visible = !1))
    return i.push(o), o
  }
  _fitLayer (t, e, n, s) {
    let o = t
    const i = 'beatLyrics' === e.effect
    if (n > 0 && !i)
      for (const t of s) zi(t, e) && (o = Math.max(o, t.y + t.height))
    ;(e.y = o), (this.height = Math.max(this.height, e.y + e.height)), s.push(e)
  }
  shake () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 22
    const e = []
    this.height = t
    const n = Array.from(this.levels.keys()).sort((t, e) => t - e)
    for (const s of n) {
      const n = this.levels.get(s) || []
      for (const o of n) o.visible && this._fitLayer(t, o, s, e)
    }
  }
}
class Zi {
  constructor (t, e) {
    wt(this, 'layers', void 0),
      wt(this, 'bottomLayers', void 0),
      wt(this, 'x', void 0),
      wt(this, 'y', void 0),
      wt(this, 'maxX', void 0),
      wt(this, 'maxY', void 0),
      wt(this, 'minX', void 0),
      wt(this, 'height', void 0),
      wt(this, 'line', void 0),
      (this.layers = new Qi()),
      (this.bottomLayers = new Qi()),
      (this.x = 0),
      (this.y = 0),
      (this.maxX = t),
      (this.maxY = 0),
      (this.minX = 0),
      (this.line = e),
      (this.height = 0)
  }
  get stringY () {
    return this.y + this.layers.height
  }
  get loopY () {
    return this.y + 12 - 5
  }
  get loopHeight () {
    return this.height - 24 + 10
  }
}
const $i = {
  letRing: function (t) {
    return tr(t, 40)
  },
  palmMute: function (t) {
    return tr(t, 29)
  },
  harmonic: function (t) {
    return tr(t, 38)
  },
  vibrato: er,
  wideVibrato: er
}
function tr (t, e) {
  if (!t.start || !t.stop) throw new Error('Wrong line effect state')
  const n = t.start.absoluteX - 20
  let s = t.stop.absoluteX + 10
  return s - n < e && (s = n + e), { x1: n, x2: s }
}
function er (t) {
  const { start: e, stop: n } = t
  if (!e || !n) throw new Error('Wrong line effect state')
  let s = null
  const o = n.measureLayout.measure,
    i = o.beatsLayouts,
    r = i.findIndex(t => t === n)
  if (r > -1 && r < i.length - 1) s = i[r + 1]
  else {
    const t = n.measureLayout.lineLayout.line.measures,
      e = t.findIndex(t => t === o)
    e > -1 && e < t.length - 1 && (s = t[e + 1].beatsLayouts[0])
  }
  return { x1: e.absoluteX, x2: s ? s.absoluteX : n.maxX }
}
function nr (t) {
  const e = t.firstRef().note.bend
  if (!e) throw new Error('Wrong state at bend note')
  return -1 * (-5 - e.tone / 4)
}
class sr {
  constructor (t, e, n) {
    wt(this, 'index', void 0),
      wt(this, 'strings', void 0),
      wt(this, 'measures', void 0),
      wt(this, 'effects', void 0),
      wt(this, 'spaces', void 0),
      wt(this, 'width', void 0),
      wt(this, 'rhythmLines', void 0),
      wt(this, 'layout', void 0),
      wt(this, 'hangingText', void 0),
      wt(this, 'capo', void 0),
      wt(this, 'rhythmEffects', void 0),
      (this.index = t),
      (this.strings = e.strings),
      (this.measures = []),
      (this.effects = []),
      (this.spaces = new Array(this.strings)),
      (this.width = 0),
      (this.rhythmLines = 0),
      (this.layout = new Zi(n, this)),
      (this.hangingText = []),
      (this.capo = 0 === t && e.capo ? { capo: e.capo, layer: null } : void 0),
      (this.rhythmEffects = { tremolo: new Map(), tuplet: new Map() })
  }
  joinLineEffect (t, e, n) {
    const s = t[e]
    s &&
      !n.detected &&
      ((n.detected = !0), (n.value = s), (n.start = t.layout)),
      s && s === n.value && (n.stop = t.layout),
      s
        ? n.value &&
          s !== n.value &&
          (this.finishLineEffect(e, n), this.joinLineEffect(t, e, n))
        : this.finishLineEffect(e, n)
  }
  finishLineEffect (t, e) {
    if (e.detected) {
      const n = this.layout.layers.acquireLayer(t, $i[t](e))
      this.effects.push({ effect: t, layer: n, effectValue: e.value }),
        (e.detected = !1),
        (e.value = void 0),
        (e.start = null),
        (e.stop = null)
    }
  }
  getHangingTextPosition (t) {
    const e = this.layout.minX
    return { x1: e, x2: e + t.width }
  }
  prepare (t, e, n) {
    const s = [],
      o = t.usedDrums,
      i = n(this)
    for (const t of this.hangingText)
      t.layer = this.layout.layers.acquireLayer(
        'lineHangingText',
        this.getHangingTextPosition(t)
      )
    const r = this.capo
    var a
    void 0 !== r &&
      (r.layer = this.layout.layers.acquireLayer(
        'capo',
        (r.capo, { x1: (a = this.layout.maxX) - 120, x2: a })
      ))
    for (let t = 0; t < this.spaces.length; t++) this.spaces[t] = []
    const c = { detected: !1, start: null, stop: null, value: void 0 },
      l = { detected: !1, start: null, stop: null, value: void 0 },
      d = { detected: !1, start: null, stop: null, value: void 0 },
      u = { detected: !1, start: null, stop: null, value: void 0 },
      p = { detected: !1, start: null, stop: null, value: void 0 }
    for (const n of this.measures) {
      n.scaleIt(i),
        (this.rhythmLines = Math.max(this.rhythmLines, n.rhythmLines))
      const r = n.alternateEnding
      r &&
        (r.layer = this.layout.layers.acquireLayer(
          'measureAlternateEnding',
          n.getAlternateEndingPosition()
        ))
      const a = n.marker
      a &&
        (a.layer = this.layout.layers.acquireLayer(
          'measureMarker',
          n.getMarkerPosition(a)
        ))
      const h = n.tripletFeel
      h &&
        (h.layer = this.layout.layers.acquireLayer(
          'tripletFeel',
          n.getTripletFeelPosition()
        ))
      let g = 0
      for (const i of n.beatsLayouts)
        for (const n of i.beats)
          if (n.lyrics) {
            for (const t of n.lyrics)
              if (t) {
                const e = n.getLyricsPosition(t, g)
                ;(g = e.x2),
                  (t.layer = this.layout.bottomLayers.acquireLayer(
                    'beatLyrics',
                    e
                  ))
              }
          } else {
            const i = n.originalText
            if (i) {
              const t = this.layout.maxX + 5 - n.layout.absoluteX
              let o = i
              if (o.width > t) {
                const { phrase: n, rest: i } = Xi.fitTextToAvailableWidth(
                  o.text,
                  o.width,
                  t,
                  e.hasHellip()
                )
                ;(o = n), s.push(i)
              }
              o &&
                ((o.layer = this.layout.layers.acquireLayer(
                  'beatText',
                  n.getTextPosition(o)
                )),
                (n.text = o))
            }
            const r = n.chord
            r &&
              (r.layer = this.layout.layers.acquireLayer(
                'beatChord',
                n.getChordPosition(r)
              ))
            const a = n.tapping
            a &&
              ((a.voice = n.voice),
              (a.layer = this.layout.layers.acquireLayer(
                'beatTapping',
                n.getTextPosition(a)
              ))),
              0 === n.voice &&
                (this.joinLineEffect(n, 'letRing', c),
                this.joinLineEffect(n, 'palmMute', l),
                this.joinLineEffect(n, 'harmonic', d),
                this.joinLineEffect(n, 'vibrato', u),
                this.joinLineEffect(n, 'wideVibrato', p)),
              n.tuplet > 0 && this.rhythmEffects.tuplet.set(n.voice, !0)
            for (const s of n.notes) {
              if (!s.rest) {
                const e = o ? s.drumString(o) : s.string
                if (e % 1 == 0 && e >= 0 && e < t.strings) {
                  const i = s.margin(4, t)
                  if (i) {
                    const t = n.layout.absoluteX - i,
                      s = i << 1,
                      o = this.spaces[e]
                    if (o) {
                      const e = o.length
                      if (e) {
                        const r = o[e - 1]
                        r.x + r.w >= t
                          ? ((r.x = Math.min(r.x, t)),
                            (r.w = n.layout.absoluteX + i - r.x))
                          : o.push({ x: t, w: s })
                      } else o.push({ x: t, w: s })
                    }
                  }
                  if (
                    (!o ||
                      (59 != s.fret && 93 != s.fret) ||
                      n.hat ||
                      (n.hat = {
                        type: 'ride',
                        layer: this.layout.layers.acquireLayer(
                          'beatHat',
                          n.getHatPosition()
                        )
                      }),
                    1 !== s.accentuated ||
                      n.accentuated ||
                      (n.accentuated = {
                        layer: this.layout.layers.acquireLayer(
                          'accentuated',
                          n.getAccentuatedPosition(),
                          n.voice
                        )
                      }),
                    2 !== s.accentuated ||
                      n.heavyAccentuated ||
                      (n.heavyAccentuated = {
                        layer: this.layout.layers.acquireLayer(
                          'heavyAccentuated',
                          n.getAccentuatedPosition(),
                          n.voice
                        )
                      }),
                    s.staccato &&
                      !n.staccato &&
                      (n.staccato = {
                        layer: this.layout.layers.acquireLayer(
                          'staccato',
                          n.getStaccatoPosition(),
                          n.voice
                        )
                      }),
                    s.tremolo && !n.tremolo)
                  ) {
                    const t = s.tremolo[1] || null
                    this.rhythmEffects.tremolo.set(n.voice, !0),
                      (n.tremolo = {
                        voice: n.voice,
                        type: 32 === t ? 3 : 16 === t ? 2 : 1
                      })
                  }
                }
              }
              const i = s.bendStart
              if (i) {
                const t = e.getBendCoordinates(i, s)
                ;(t.x1 += n.layout.absoluteX),
                  (t.x2 += n.layout.absoluteX),
                  (i.layer = this.layout.layers.acquireLayerWithHeight(
                    'noteBend',
                    nr(i),
                    t
                  ))
              }
            }
          }
      for (const t of n.tempoLayouts)
        t.layer = this.layout.layers.acquireLayer(
          'measureTempo',
          n.getTempoPosition(t)
        )
    }
    this.finishLineEffect('letRing', c),
      this.finishLineEffect('palmMute', l),
      this.finishLineEffect('harmonic', d),
      this.finishLineEffect('vibrato', u),
      this.finishLineEffect('wideVibrato', p),
      this.layout.layers.shake()
    const h =
      12 * this.strings +
      25 * this.rhythmLines +
      12 * this.rhythmEffects.tremolo.size +
      8 * this.rhythmEffects.tuplet.size
    return (
      this.layout.bottomLayers.shake(h),
      (this.layout.layers.height += 12),
      (this.layout.height =
        this.layout.layers.height + this.layout.bottomLayers.height + 12),
      (this.layout.maxY = this.layout.y + this.layout.height),
      s
    )
  }
}
class or {
  constructor (t, e) {
    wt(this, 'measure', void 0),
      wt(this, 'x', void 0),
      wt(this, 'originX', void 0),
      wt(this, 'width', void 0),
      wt(this, 'originWidth', void 0),
      wt(this, 'lineLayout', void 0),
      (this.measure = t),
      (this.x = 0),
      (this.originX = 0),
      (this.width = 0),
      (this.originWidth = 0),
      (this.lineLayout = e)
  }
  get maxX () {
    return this.lineLayout.maxX
  }
  get minX () {
    return this.lineLayout.minX
  }
}
const ir = { bpm: 100, type: 4, position: 0 }
class rr {
  constructor (t, e, n, s, o) {
    wt(this, 'source', void 0),
      wt(this, 'index', void 0),
      wt(this, 'hasSignature', void 0),
      wt(this, 'signature', void 0),
      wt(this, 'duration', void 0),
      wt(this, 'scale', void 0),
      wt(this, 'rest', void 0),
      wt(this, 'repeatStart', void 0),
      wt(this, 'repeat', void 0),
      wt(this, 'voices', void 0),
      wt(this, 'rhythmLines', void 0),
      wt(this, 'width', void 0),
      wt(this, 'layout', void 0),
      wt(this, 'marker', void 0),
      wt(this, 'alternateEnding', void 0),
      wt(this, 'tripletFeel', void 0),
      wt(this, 'beatsLayoutsByTime', void 0),
      wt(this, 'beatsLayoutsTimes', void 0),
      wt(this, 'beatsLayouts', void 0),
      wt(this, 'tempoLayoutsByTime', void 0),
      wt(this, 'tempoLayoutsTimes', void 0),
      wt(this, 'tempoLayouts', void 0),
      wt(this, 'reprise', void 0),
      (this.source = t),
      (this.index = e),
      (this.hasSignature = !!t.signature),
      (this.signature = t.signature || n),
      (this.duration = 0),
      (this.scale = t.scale || 1),
      (this.rest = t.rest)
    const i = t.repeat || 0
    ;(this.repeatStart = t.repeatStart),
      (this.repeat = Math.min(i, o ? 32 : 10)),
      (this.voices = new Array(t.voices.length)),
      (this.beatsLayouts = []),
      (this.beatsLayoutsByTime = new Map()),
      (this.beatsLayoutsTimes = null),
      (this.tempoLayouts = []),
      (this.tempoLayoutsByTime = new Map()),
      (this.tempoLayoutsTimes = null),
      (this.rhythmLines = 0),
      (this.width = 0),
      (this.tripletFeel = t.tripletFeel
        ? { layer: null, feel: t.tripletFeel }
        : void 0),
      (this.marker = t.marker
        ? { layer: null, text: t.marker.text, width: t.marker.width }
        : void 0),
      (this.alternateEnding = t.alternateEnding
        ? { layer: null, alternateEnding: t.alternateEnding }
        : void 0),
      (this.layout = new or(this, s))
  }
  scaleIt (t) {
    ;(this.layout.x = Math.floor(this.layout.originX * t)),
      (this.layout.width = Math.floor(this.layout.originWidth * t))
    const e = this.beatsLayouts,
      n = this.tempoLayouts
    let s = e[0]
    s.absoluteLoopLeftX = this.layout.x
    for (const e of n) e.measureOffset = Math.floor(e.originMeasureOffset * t)
    for (const n of e) {
      if (
        ((n.x = Math.floor(n.originX * t)),
        (n.absoluteX = this.layout.x + n.x),
        s !== n)
      ) {
        const t = n.x - s.x,
          e = t < 40 ? 0.5 : 0.8,
          o = Math.floor(t * e)
        ;(s.absoluteLoopRightX = s.absoluteX + o),
          (n.absoluteLoopLeftX = n.absoluteX - (t - o))
      }
      s = n
    }
    s.absoluteLoopRightX = this.layout.x + this.layout.width
  }
  getTempoPosition (t) {
    const e = Math.floor(
        (this.layout.width - t.measureOffset) * t.tempo.position
      ),
      n = this.layout.x + t.measureOffset + e
    return { x1: n, x2: n + (t.tempo.bpm >= 100 ? 44 : 35) }
  }
  getMarkerPosition (t) {
    const e = this.layout.x
    return { x1: e, x2: e + t.width }
  }
  getNumberPosition () {
    const t = this.layout.x
    return { x1: t, x2: t + (this.index < 99 ? 17 : 22) }
  }
  getAlternateEndingPosition () {
    const t = this.layout.x
    return { x1: t, x2: t + this.layout.width - 6 }
  }
  getTripletFeelPosition () {
    const t = this.layout.x
    return { x1: t, x2: t + 90 }
  }
}
const ar = [
    [
      { key: 38, value: { name: 'AS', string: 1.5 } },
      { key: 40, value: { name: 'ES', string: 2.5 } }
    ],
    [
      { key: 35, value: { name: 'ABD', string: 3.5 } },
      { key: 36, value: { name: 'BD', string: 4.5 } }
    ],
    [
      { key: 41, value: { name: 'LFT', string: 3.5 } },
      { key: 43, value: { name: 'HFT', string: 2.5 } }
    ],
    [
      { key: 47, value: { name: 'LMT', string: 1 } },
      { key: 48, value: { name: 'HMT', string: 0.5 } }
    ],
    [
      { key: 51, value: { name: 'RC1', string: 0 } },
      { key: 59, value: { name: 'RC2', string: 0 } }
    ],
    [
      { key: 49, value: { name: 'CC1', string: -1 } },
      { key: 57, value: { name: 'CC2', string: 0 } }
    ],
    [
      { key: 60, value: { name: 'HBG', string: 2.5 } },
      { key: 61, value: { name: 'LBG', string: 3 } }
    ],
    [
      { key: 76, value: { name: 'HWB', string: 1 } },
      { key: 77, value: { name: 'LWB', string: 1.5 } }
    ]
  ],
  cr = {
    hq: 'High Q',
    sl: 'Slap',
    Ssh: 'Scratch Push',
    Sll: 'Scratch Pull',
    Stx: 'Sticks',
    sc: 'Square Click',
    mc: 'Metronome Click',
    mb: 'Metronome Bell',
    BD: 'Bass Drum',
    ABD: 'Acoustic Bass Drum',
    HC: 'Hand Clap',
    S: 'Snare',
    AS: 'Acoustic Snare',
    ES: 'Electric Snare',
    SS: 'Snare Side Stick',
    SR: 'Snare Rim Shot',
    xH: 'Closed Hi Hat',
    oH: 'Open Hi Hat',
    fH: 'Foot Hi Hat',
    hH: 'Half Hi Hat',
    HT: 'High Tom',
    LT: 'Low Tom',
    FT: 'Floor Tom',
    LFT: 'Low Floor Tom',
    HFT: 'High Floor Tom',
    MT: 'Mid Tom',
    LMT: 'Low-Mid Tom',
    HMT: 'Hi-Mid Tom',
    CC: 'Crash Cymbal',
    CC1: 'Crash Cymbal 1',
    CC2: 'Crash Cymbal 2',
    RC: 'Ride Cymbal',
    RC1: 'Ride Cymbal 1',
    RC2: 'Ride Cymbal 2',
    RE: 'Ride Edge',
    SC: 'Splash Cymbal',
    cC: 'Chinese Cymbal',
    rb: 'Ride Bell',
    ta: 'Tambourine',
    cb: 'Cowbell',
    hcb: 'High Cowbell',
    lcb: 'Low Cowbell',
    vs: 'Vibraslap',
    BG: 'Bongo',
    HBG: 'Hi Bongo',
    LBG: 'Low Bongo',
    xC: 'Mute Hi Conga',
    oC: 'Open Hi Conga',
    LC: 'Low Conga',
    ht: 'High Timbale',
    lt: 'Low Timbale',
    ha: 'High Agogo',
    la: 'Low Agogo',
    ca: 'Cabasa',
    ma: 'Maracas',
    SW: 'Short Whistle',
    LW: 'Long Whistle',
    SG: 'Short Guiro',
    LG: 'Long Guiro',
    cl: 'Claves',
    WB: 'Wood Block',
    HWB: 'Hi Wood Block',
    LWB: 'Low Wood Block',
    xU: 'Mute Cuica',
    oU: 'Open Cuica',
    xT: 'Mute Triangle',
    oT: 'Open Triangle',
    Sh: 'Shaker',
    JB: 'Jingle Bell',
    BT: 'Bell Tree',
    Cs: 'Castinets',
    xS: 'Mute Surdo',
    oS: 'Open Surdo'
  },
  lr = [
    3,
    3,
    1,
    -1,
    1.5,
    1.5,
    1.5,
    1.5,
    4.5,
    4.5,
    1.5,
    1.5,
    1.5,
    1.5,
    3,
    -0.5,
    3,
    5.5,
    2,
    -0.5,
    1,
    1,
    -1,
    0,
    0,
    -1,
    0.5,
    2.5,
    0,
    0,
    -1,
    4.5,
    0,
    2.5,
    2.5,
    4.5,
    4.5,
    5,
    5,
    5.5,
    0.5,
    1,
    4.5,
    3.5,
    5,
    5.5,
    -1.5,
    -1,
    2.5,
    1,
    1,
    5.5,
    5.5,
    -0.5,
    -0.5,
    -1,
    -1,
    -1,
    -1.5,
    6,
    6
  ]
;(lr[64] = 1.5), (lr[65] = -1), (lr[66] = 0)
const dr = [
  3,
  3,
  1,
  -1.5,
  1.5,
  1.5,
  2,
  2,
  4,
  3.5,
  1.5,
  1.5,
  1.5,
  1.5,
  2.5,
  -0.5,
  3,
  4.5,
  2.5,
  -0.5,
  2,
  1,
  -1,
  0.5,
  0,
  -1.5,
  0,
  1.5,
  -1,
  0,
  -0.5,
  5,
  1,
  2,
  3,
  4.5,
  4.5,
  5,
  4,
  4.5,
  5,
  5.5,
  4.5,
  3.5,
  5,
  5.5,
  -1.5,
  -1,
  2.5,
  1,
  1.5,
  4.5,
  4.5,
  -0.5,
  -0.5,
  -1,
  -1,
  -1,
  -1.5,
  5,
  5
]
;(dr[64] = 1.5), (dr[65] = -0.5), (dr[66] = 0), (dr[75] = -0.5), (dr[72] = 0.5)
const ur = {
    hq: 9,
    sl: 6,
    Ssh: 13,
    Sll: 9,
    Stx: 11,
    sc: 8,
    mc: 10,
    mb: 10,
    ABD: 15,
    BD: 10,
    SS: 9,
    S: 5,
    AS: 10,
    HC: 10,
    ES: 9,
    FT: 9,
    LFT: 13,
    xH: 9,
    fH: 7,
    LT: 8,
    LMT: 14,
    oH: 9,
    MT: 10,
    CC: 10,
    CC1: 14,
    HT: 9,
    RC: 10,
    RE: 10,
    RC1: 14,
    cC: 9,
    rb: 7,
    ta: 6,
    SC: 10,
    cb: 8,
    hcb: 10,
    lcb: 10,
    CC2: 14,
    vs: 9,
    RC2: 14,
    BG: 10,
    HBG: 16,
    LBG: 15,
    xC: 9,
    oC: 9,
    LC: 9,
    ht: 7,
    lt: 4,
    ha: 8,
    la: 6,
    ca: 8,
    ma: 10,
    SW: 11,
    LW: 10,
    SG: 10,
    LG: 10,
    cl: 6,
    WB: 14,
    HWB: 17,
    LWB: 16,
    xU: 9,
    oU: 9,
    xT: 8,
    oT: 9,
    Sh: 9,
    JB: 9,
    BT: 9,
    Cs: 9,
    xS: 9,
    oS: 9
  },
  pr = [
    'hq',
    'sl',
    'Ssh',
    'Sll',
    'Stx',
    'sc',
    'mc',
    'mb',
    'BD',
    'BD',
    'SS',
    'S',
    'HC',
    'S',
    'FT',
    'xH',
    'FT',
    'fH',
    'LT',
    'oH',
    'MT',
    'MT',
    'CC',
    'HT',
    'RC',
    'cC',
    'rb',
    'ta',
    'SC',
    'cb',
    'CC',
    'vs',
    'RC',
    'BG',
    'BG',
    'xC',
    'oC',
    'LC',
    'ht',
    'lt',
    'ha',
    'la',
    'ca',
    'ma',
    'SW',
    'LW',
    'SG',
    'LG',
    'cl',
    'WB',
    'WB',
    'xU',
    'oU',
    'xT',
    'oT',
    'Sh',
    'JB',
    'BT',
    'Cs',
    'xS',
    'oS'
  ]
function hr (t) {
  for (const e of ar) {
    let n = 0
    for (const s of e) t.has(s.key) && n++
    if (n > 1)
      for (const n of e)
        t.set(n.key, Object.assign({}, n.value, { fret: n.key }))
  }
}
function gr (t, e) {
  return (e ? dr[t - 27] : lr[t - 27]) || 0
}
;(pr[64] = 'SR'),
  (pr[65] = 'hH'),
  (pr[66] = 'RE'),
  (pr[72] = 'lcb'),
  (pr[75] = 'hcb')
class fr {
  constructor (t, e, n, s) {
    wt(this, 'source', void 0),
      wt(this, 'index', void 0),
      wt(this, 'string', void 0),
      wt(this, 'fret', void 0),
      wt(this, 'beat', void 0),
      wt(this, 'hp', void 0),
      wt(this, 'rest', void 0),
      wt(this, 'tie', void 0),
      wt(this, 'bend', void 0),
      wt(this, 'vibrato', void 0),
      wt(this, 'harmonic', void 0),
      wt(this, 'accentuated', void 0),
      wt(this, 'staccato', void 0),
      wt(this, 'rightSlide', void 0),
      wt(this, 'leftSlide', void 0),
      wt(this, 'dead', void 0),
      wt(this, 'ghost', void 0),
      wt(this, 'tremolo', void 0),
      wt(this, 'slideStart', void 0),
      wt(this, 'slideEnd', void 0),
      wt(this, 'slurStart', void 0),
      wt(this, 'slurEnd', void 0),
      wt(this, 'tieStart', void 0),
      wt(this, 'tieEnd', void 0),
      wt(this, 'bendStart', void 0),
      wt(this, 'bendPart', void 0),
      wt(this, 'bendEnd', void 0),
      wt(this, 'prevNoteOnString', void 0),
      wt(this, 'nextNoteOnString', void 0),
      wt(this, 'bogus', void 0),
      (this.source = t),
      (this.beat = e),
      (this.index = n),
      (this.rest = t.rest),
      (this.tie = t.tie),
      (this.string = t.string || 0),
      (this.fret = t.fret || 0),
      (this.bend = s ? this.mergeBendPoints(t.bend) : t.bend),
      (this.vibrato = t.vibrato),
      (this.harmonic = t.harmonic),
      (this.hp = t.hp),
      (this.rightSlide = (function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'unknown'
        if (t) {
          if (t.includes('shift')) return 'shift'
          if (t.includes('legato')) return 'legato'
          if (t.includes('downwards')) return 'downwards'
          if (t.includes('upwards')) return 'upwards'
        }
      })(t.slide)),
      (this.leftSlide = (function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'unknown'
        if (t) {
          if (t.includes('below')) return 'below'
          if (t.includes('above')) return 'above'
        }
      })(t.slide)),
      (this.ghost = t.ghost),
      (this.dead = t.dead),
      (this.accentuated = t.accentuated),
      (this.staccato = t.staccato),
      (this.tremolo = t.tremolo),
      (this.slideStart = null),
      (this.slideEnd = null),
      (this.slurStart = null),
      (this.slurEnd = null),
      (this.tieStart = null),
      (this.tieEnd = null),
      (this.bendStart = null),
      (this.bendPart = null),
      (this.bendEnd = null),
      (this.prevNoteOnString = null),
      (this.nextNoteOnString = null),
      (this.bogus = !1)
  }
  get isVisible () {
    return !(
      this.bogus ||
      (!this.bendStart && !this.slurStart && this.tie && !this.ghost)
    )
  }
  margin (t, e) {
    if (!this.isVisible) return 0
    if (e && e.usedDrums) {
      const n = e.usedDrums.get(this.fret)
      if (n) {
        const e = n.name || 'S'
        return (ur[e] || 0) + t
      }
      return t
    }
    let n = 4
    return (
      this.dead ? (n = 4) : this.fret >= 10 && (n = 8),
      this.ghost && (n += 5),
      n + t
    )
  }
  drumString (t) {
    const e = t.get(this.fret)
    return (e && e.string) || 0
  }
  mergeBendPoints (t) {
    if (!t) return null
    let e = t.points[0].tone
    const n = [{ position: 0, tone: e }]
    for (const s of t.points)
      n[n.length - 1].tone !== s.tone &&
        (n.push({ position: 0, tone: s.tone }), (e = Math.max(e, s.tone)))
    return (
      1 === n.length && n.push({ position: 0, tone: e }),
      n.forEach((t, e) => {
        t.position = (60 * e) / (n.length - 1)
      }),
      Object.assign({}, t, { points: n })
    )
  }
}
const mr = new Map(),
  yr = [],
  vr = []
class br {
  constructor (t, e, n, s) {
    wt(this, 'source', void 0),
      wt(this, 'index', void 0),
      wt(this, 'strings', void 0),
      wt(this, 'frets', void 0),
      wt(this, 'tuning', void 0),
      wt(this, 'voices', void 0),
      wt(this, 'name', void 0),
      wt(this, 'instrument', void 0),
      wt(this, 'instrumentId', void 0),
      wt(this, 'artist', void 0),
      wt(this, 'title', void 0),
      wt(this, 'capo', void 0),
      wt(this, 'withChords', void 0),
      wt(this, 'withLyrics', void 0),
      wt(this, 'automations', void 0),
      wt(this, 'measures', void 0),
      wt(this, 'tpqn', void 0),
      wt(this, 'progression', void 0),
      wt(this, 'tempos', void 0),
      wt(this, 'timeline', void 0),
      wt(this, 'timestamps', void 0),
      wt(this, 'revisionId', void 0),
      wt(this, 'songId', void 0),
      wt(this, 'partId', void 0),
      wt(this, 'shifts', void 0),
      wt(this, 'sourceLyrics', void 0),
      wt(this, 'difficulty', void 0),
      wt(this, 'usedDrums', void 0),
      wt(this, 'isDrumStdOn', void 0),
      (this.source = t),
      (this.index = e),
      (this.strings = me(t.instrumentId) ? (s ? 5 : 6) : t.strings),
      (this.frets = t.frets),
      (this.tuning = t.tuning),
      (this.voices = t.voices),
      (this.name = t.name),
      (this.automations = t.automations),
      (this.measures = new Array(t.measures.length)),
      (this.instrument = t.instrument),
      (this.instrumentId = t.instrumentId),
      (this.name = t.name),
      (this.artist = t.artist),
      (this.title = t.title),
      (this.capo = t.capo),
      (this.tempos = vr),
      (this.timeline = mr),
      (this.shifts = yr),
      (this.timestamps = yr),
      (this.songId = t.songId),
      (this.partId = t.partId),
      (this.revisionId = t.revisionId),
      (this.difficulty = null),
      (this.sourceLyrics = n),
      (this.withLyrics = t.withLyrics),
      (this.usedDrums = me(t.instrumentId) ? new Map() : null),
      (this.isDrumStdOn = s),
      (this.withChords = !1)
  }
  hasTimeline () {
    return this.timeline !== mr
  }
}
class wr {
  constructor (t) {
    wt(this, 'startIndex', void 0),
      wt(this, 'endIndex', void 0),
      wt(this, 'alternateEndings', void 0),
      (this.startIndex = t.index),
      (this.endIndex = 0),
      (this.alternateEndings = new Map())
  }
  addEnding (t, e) {
    this.alternateEndings.set(t, e.index)
  }
  getEnding (t) {
    return this.alternateEndings.get(t)
  }
}
class Sr {
  constructor (t) {
    wt(this, 'source', void 0),
      wt(this, 'measureOffset', void 0),
      wt(this, 'originMeasureOffset', void 0),
      wt(this, 'tempo', void 0),
      wt(this, 'layer', void 0),
      (this.source = t),
      (this.tempo = {
        bpm: t.bpm,
        type: t.type,
        position: t.position || 0,
        linear: t.linear || !1,
        visible: t.visible || !1
      }),
      (this.measureOffset = 0),
      (this.originMeasureOffset = 0)
  }
}
class Er {
  constructor (t, e) {
    wt(this, 'source', void 0),
      wt(this, 'index', void 0),
      wt(this, 'beats', void 0),
      wt(this, 'hasSameRhythm', void 0),
      wt(this, 'lyrics', !1),
      wt(this, 'rest', void 0),
      (this.source = t),
      (this.index = e),
      (this.rest = (t && t.rest) || !1),
      (this.beats = t && !this.rest ? new Array(t.beats.length) : []),
      (this.hasSameRhythm = !t || t.hasSameRhythm || !1)
  }
}
const Ir = t => 0 == (t & (t - 1))
function xr (t, e) {
  let n
  return (
    (n =
      (t & (t - 1)) | (e & (e - 1))
        ? (t * e) /
          (function (t, e) {
            let n = t,
              s = e
            for (; 0 !== n && 0 !== s; ) n >= s ? (n %= s) : (s %= n)
            return n + s
          })(t, e)
        : Math.max(t, e)),
    n <= 0 || n >= 32768 || n % 1 != 0 ? t : n
  )
}
function Cr (t) {
  const e = []
  let n = !1,
    s = !1,
    o = !1,
    i = !1
  for (const r of t) {
    r.tripletFeel && (n = !0)
    for (const t of r.voices)
      if (!t.rest)
        for (const n of t.beats) {
          const { tuplet: t, duration: r, notes: a } = n
          if ((t && (e.includes(t) || e.push(t)), r && r.length)) {
            const t = le(r)
            if (!Ir(t) || t > 32768) continue
            e.includes(t) || e.push(t)
            for (const t of a)
              t.dead && (s = !0),
                (t.bend || t.slide) && (o = !0),
                t.tremolo && (i = !0)
          }
        }
  }
  n && e.push(24, 48),
    s && e.push(128),
    o && e.push(60),
    i && e.push(8, 16, 32, 64)
  const r = Math.max(4 * Math.max(...e), 32)
  let a = e.reduce(xr, r) || 128
  for (; a < 1e4; ) a *= 2
  return a
}
function kr (t, e, n) {
  return t * (6e4 / n / e)
}
const Tr = t => ((ir.bpm / ir.type) * 960) / (t.bpm / t.type),
  Ar = t => ((t / 960) * 6e4) / ir.bpm,
  Or = (t, e) => t * e * ir.type
function Pr (t, e) {
  const n = (function (t) {
      const e = []
      let n = null,
        s = 0,
        o = !1,
        i = 0
      for (let r = 0; r < t.length; ) {
        if ((i++, i > 1e5)) throw new Error('Watchdog')
        const a = t[r]
        if (
          (e.push(a),
          !a.reprise ||
            a.reprise.startIndex !== a.index ||
            (n && n.startIndex === a.index) ||
            ((n = a.reprise), (s = 1)),
          n)
        ) {
          if (a.repeat && s < a.repeat) (r = n.startIndex), s++, (o = !1)
          else if ((r++, r < t.length)) {
            const e = t[r]
            if (e.alternateEnding) {
              let t = !1
              for (const n of e.alternateEnding.alternateEnding)
                if (n === s) {
                  t = !0
                  break
                }
              t
                ? (o = !0)
                : o
                ? ((r = n.startIndex), s++, (o = !1))
                : ((r = n.getEnding(s) || n.endIndex + 1), (o = !0))
            }
            r > n.endIndex && ((n = !1), (s = 0))
          }
        } else r++
      }
      return e
    })(e),
    s = new Map(),
    o = [],
    i = []
  let r = ir,
    a = 960,
    c = 960,
    l = 0,
    d = 0
  for (const e of n) {
    const n = e.beatsLayoutsByTime,
      u = e.tempoLayoutsByTime,
      p = t ? pe(e.signature, t) : de(e.signature),
      h = e.beatsLayoutsTimes || []
    let g = n.get(0),
      f = l
    const m = l,
      y = d
    if (g) {
      const e = d - 2 * l
      g.shifts.push(e), o.push(e), g.occurrences.push(l), s.set(l, g)
      const v = u.get(0)
      v &&
        ((r = v.tempo),
        i.push({ timestamp: l, tempo: r }),
        (a = Math.floor(Tr(r))),
        (c = Math.floor(2 * Tr(r))))
      for (let e = 1; e < h.length; e++) {
        const i = h[e],
          u = n.get(i)
        if (u)
          if (i < p) {
            if (t) {
              const e = kr(i, t, r.bpm)
              ;(l = m + e), (d = y + 2 * e)
            } else {
              const t = ue(i)
              ;(l = m + Ar(Or(t, a))), (d = y + Ar(Or(t, c)))
            }
            g.duration = l - f
            const e = d - 2 * l
            g.shifts.push(e),
              o.push(e),
              u.occurrences.push(l),
              s.set(l, u),
              (g = u),
              (f = l)
          } else u.occurrences.push(l)
      }
    }
    if (t) {
      const e = kr(p, t, r.bpm)
      ;(l = m + e), (d = y + 2 * e)
    } else {
      const t = ue(p)
      ;(l = m + Ar(Or(t, a))), (d = y + Ar(Or(t, c)))
    }
    g && (g.duration = l - f)
  }
  return {
    timeline: s,
    tempos: i,
    shifts: o,
    progression: n.map(t => t.source.index)
  }
}
function _r (t, e) {
  const n = t.get(e)
  if (!n) throw new Error('Broken timeline')
  return n
}
function Lr (t, e) {
  return 2 * t + e
}
function Nr (t, e, n) {
  const { timeline: s, timestamps: o } = t,
    i = o[0],
    r = o[o.length - 1]
  if (e <= i) return _r(s, i)
  if (e >= r) return _r(s, r)
  let a = 0,
    c = o.length,
    l = 0,
    d = o[0]
  for (; c - a > 1; ) {
    l = Math.floor((a + c) / 2)
    const t = o[l]
    if (e < t) c = l
    else {
      if (!(e > t)) {
        d = t
        break
      }
      a = l
    }
  }
  return (d = c - a > 1 ? o['left' === n ? l : l - 1] : o[a]), _r(s, d)
}
function Rr (t, e) {
  let n =
    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'left'
  const { timestamps: s } = t,
    o = s[0],
    i = s[s.length - 1]
  if (e <= o) return 0
  if (e >= i) return s.length - 1
  let r = 0,
    a = s.length,
    c = 0
  for (; a - r > 1; ) {
    c = Math.floor((r + a) / 2)
    const t = s[c]
    if (e < t) a = c
    else {
      if (!(e > t)) return c
      r = c
    }
  }
  return a - r > 1 ? ('left' === n ? c : c - 1) : r
}
function jr (t, e) {
  let n = t.tempos[0]
  for (const s of t.tempos) {
    if (s.timestamp > e) break
    n = s
  }
  return n ? n.tempo : ir
}
function Mr (t, e, n, s, o) {
  const i = n.measureLayout.measure.reprise,
    r = s.measureLayout.measure.reprise
  let a = n.leftTime
  const c = s.leftTime,
    l = s.firstLoopRightTime
  !i || (r && i.startIndex === r.startIndex) || (a = n.rightTime)
  const d = a
  let u = e
  if (a > e || e >= l) {
    const n = Nr(t, e, 'left'),
      s = n.leftTime,
      i = n.rightTime
    u = a <= s && s < l ? s : a <= i && i < l ? i : 'right' === o ? c : d
  }
  return { cursor: u, loopStart: a, loopEnd: l }
}
function Dr (t, e, n) {
  let s = t.measures[0]
  for (const n of t.measures) {
    if (n.layout.x > e) break
    s = n
  }
  const o = s.beatsLayouts
  let i = 0,
    r = o.length,
    a = 0,
    c = o[0]
  for (; r - i > 1; ) {
    ;(a = Math.floor((i + r) / 2)), (c = o[a])
    const t = c.absoluteX
    if (t < e) i = a
    else {
      if (!(t > e)) break
      r = a
    }
  }
  if (r - i > 1) return c
  {
    if (r === o.length) return o[i]
    const t = o[i],
      s = o[r],
      a = s.absoluteX - t.absoluteX,
      c = (function (t) {
        switch (t) {
          case 'left':
            return 0.2
          case 'right':
            return 0.8
          default:
            return 0.5
        }
      })(n)
    return t.absoluteX + a * c > e ? t : s
  }
}
function Br (t, e, n) {
  let s = 0,
    o = t.lines.length,
    i = t.lines[0]
  for (; o - s > 1; ) {
    const n = Math.floor((s + o) / 2),
      r = t.lines[n]
    if (e.y < r.layout.y) o = n
    else {
      if (!(e.y > r.layout.maxY)) {
        i = r
        break
      }
      s = n
    }
  }
  return Dr(i, e.x, n)
}
const Fr = new Map()
function Ur (t, e, n) {
  let s = Fr.get(e)
  if (!s) {
    const n = t ? ((t, e) => 1 / ((4 * t) / e))(t, e) : ue(e)
    ;(s = 130 * Math.log(n + 1) + 20), Fr.set(e, s)
  }
  return n ? 0.2 * s : s
}
function Hr (t) {
  t.layout.usedRest = !0
}
function qr (t, e) {
  e.rest || (t.layout.usedStrings |= 1 << e.string)
}
function Gr (t, e) {
  var n
  me(t.instrumentId) &&
    t.usedDrums &&
    t.usedDrums.set(
      e.fret,
      ((n = e.fret), { string: e.string, name: pr[n - 27] || '*', fret: n })
    )
}
function Wr (t, e, n, s) {
  const o = t.hp || 'legato' === t.rightSlide,
    i = s[t.string]
  !i ||
    o ||
    t.tie ||
    (i.addRef({ note: t, beat: e, measure: n }),
    (i.firstRef().note.slurStart = i),
    (i.lastRef().note.slurEnd = i),
    (s[t.string] = void 0)),
    !i && o && (s[t.string] = new Mi({ note: t, beat: e, measure: n }))
}
function Vr (t, e, n, s) {
  const o = 'legato' === t.rightSlide || 'shift' === t.rightSlide,
    i = s[t.string]
  i &&
    !t.tie &&
    (i.addRef({ note: t, beat: e, measure: n }),
    (i.firstRef().note.slideStart = i),
    (i.lastRef().note.slideEnd = i),
    (s[t.string] = void 0)),
    o && (s[t.string] = new Mi({ note: t, beat: e, measure: n }))
}
function Xr (t, e, n, s) {
  const o = s.get(t.string)
  if (
    (!o && t.bend && t.tie && 0 === t.bend.points[0].tone && (t.ghost = !0),
    o &&
      !t.bend &&
      t.tie &&
      ((o.keep = !0), o.addRef({ note: t, beat: e, measure: n })),
    o && (t.bend || (!t.bend && !t.tie)))
  ) {
    o.firstRef().note.bendStart = o
    for (let t = 1; t < o.refs.length - 1; t++) o.refs[t].note.bendPart = o
    ;(o.lastRef().note.bendEnd = o), s.delete(t.string)
  }
  t.bend && s.set(t.string, new Mi({ note: t, beat: e, measure: n }))
}
function zr (t, e, n) {
  for (const [t, e] of n.entries())
    if (e.keep) e.keep = !1
    else {
      e.firstRef().note.bendStart = e
      for (let t = 1; t < e.refs.length - 1; t++) e.refs[t].note.bendPart = e
      ;(e.lastRef().note.bendEnd = e), n.delete(t)
    }
}
function Yr (t, e, n, s) {
  const o = s[t.string]
  o
    ? t.tie
      ? (o.addRef({ note: t, beat: e, measure: n }),
        (o.firstRef().note.tieStart = o),
        (o.lastRef().note.tieEnd = o),
        (s[t.string] = new Mi({ note: t, beat: e, measure: n })))
      : o.reset({ note: t, beat: e, measure: n })
    : (s[t.string] = new Mi({ note: t, beat: e, measure: n }))
}
function Jr (t, e) {
  const n = t.string,
    s = e[n]
  s && ((s.nextNoteOnString = t), (t.prevNoteOnString = s)), (e[n] = t)
}
function Kr (t, e) {
  if (
    (t.repeatStart && (e = { lastReprise: new wr(t), inReprise: !0 }),
    t.alternateEnding)
  ) {
    if (e && e.lastReprise) {
      t.reprise = e.lastReprise
      for (const n of t.alternateEnding.alternateEnding)
        e.lastReprise.addEnding(n, t)
    }
  } else e && e.inReprise && (t.reprise = e.lastReprise)
  if (t.repeat) {
    if (!e || !e.lastReprise) throw Error('Broken ending of reprise')
    ;(e.lastReprise.endIndex = t.index), (e.inReprise = !1)
  }
  return e
}
const Qr = [{ duration: [1, 1], type: 1, rest: !0, notes: [{ rest: !0 }] }],
  Zr = {
    string: void 0,
    fret: void 0,
    hp: void 0,
    rest: void 0,
    tie: void 0,
    bend: void 0,
    vibrato: void 0,
    staccato: void 0,
    accentuated: void 0,
    harmonic: void 0,
    dead: void 0,
    ghost: void 0,
    slide: void 0
  }
function $r (t, e, n) {
  const s = (function (t) {
    return t.hasSignature ? 50 : 15
  })(e)
  for (const i of n.filter(t => +t.measure == +e.index + 1)) {
    const n = t
      ? Math.floor(4 * t * i.position)
      : ((o = i.position), Math.floor(11531520 * o))
    let r = e.tempoLayoutsByTime.get(n)
    r ||
      ((r = new Sr(i)),
      (r.measureOffset = s),
      (r.originMeasureOffset = s),
      e.tempoLayoutsByTime.set(n, r))
  }
  var o
  ;(e.tempoLayoutsTimes = [...e.tempoLayoutsByTime.keys()].sort(
    (t, e) => t - e
  )),
    (e.tempoLayouts = e.tempoLayoutsTimes.reduce((t, n) => {
      const s = e.tempoLayoutsByTime.get(n)
      return s && t.push(s), t
    }, []))
}
function ta (t, e, n) {
  const s = e.beatsLayoutsByTime
  let o = (function (t) {
    return t.hasSignature ? 60 : 25
  })(e)
  const i = [...s.keys()].sort((t, e) => t - e)
  e.beatsLayoutsTimes = i
  let r = 0,
    a = s.get(0)
  const c = e.rest && !(n && n[e.index] && n[e.index].beats.length > 0)
  if (a) {
    e.beatsLayouts[0] = a
    for (let n = 1; n < i.length; n++) {
      const l = i[n],
        d = s.get(l)
      d &&
        ((a.x = o),
        (a.originX = o),
        (o += Ur(t, l - r, c)),
        (e.beatsLayouts[n] = d),
        (r = l),
        (a = d))
    }
    ;(a.x = o), (a.originX = o), (o += Ur(t, e.duration - r, c))
    const n = e.marker ? e.marker.width : 0
    e.width = Math.ceil(Math.max(e.width, o, n))
  }
}
const ea = {
    useStdDrumNotation: !1,
    useBendPointsMerge: !0,
    useGenericTimeline: !1
  },
  na = t => t.currentTime
function sa (t, e) {
  let n
  for (n = e; t > 1; t--) n += e
  return n
}
const oa = 'bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz'
function ia () {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21,
    e = ''
  for (; t-- > 0; ) e += oa[(64 * Math.random()) | 0]
  return e
}
const ra = window.performance || {
  offset: Date.now(),
  now: function () {
    return Date.now() - this.offset
  }
}
function aa (t) {
  return t / 1e3
}
class ca {
  constructor (t) {
    ca.prototype.__init.call(this),
      (this.state = {
        speed: 100,
        pitchShift: 0,
        cursor: 0,
        loopStart: 0,
        loopEnd: 0,
        type: 'focus',
        isPlaying: !1,
        isCountIn: !1,
        isMetronome: !1,
        url: ''
      })
    try {
      let t = new window.AudioContext({ latencyHint: 'interactive' })
      if (44100 !== t.sampleRate && 48e3 !== t.sampleRate) {
        const e = t.createBufferSource()
        ;(e.buffer = t.createBuffer(1, 1, 48e3)),
          e.connect(t.destination),
          e.start(0),
          'close' in t && t.close(),
          (t = new window.AudioContext({ latencyHint: 'interactive' }))
      }
      ;(t.onstatechange = () => {
        console.log(
          'Audio context changed state to '
            .concat(this.context.state, ', isPlaying: ')
            .concat(this.state.isPlaying, ', sample rate ')
            .concat(this.context.sampleRate)
        )
      }),
        (this.context = t),
        (this.freezeCheckSampleRate = this.context.sampleRate)
    } catch (t) {
      console.error(t),
        console.log('There is no audio context'),
        (this.context = null)
    }
    window.Worker &&
      ((this.worker = new Worker('/static/WebWorker.167a7aeb.js')),
      (this.worker.onmessage = this.onMessage),
      (this.worker.onerror = t.onError)),
      (this.callback = t),
      (this.buffers = [null, null, null, null, null]),
      (this.sources = [null, null, null, null, null]),
      (this.reuseIndex = 0),
      (this.startedTime = null),
      (this.token = ''),
      (this.countinDuration = 0),
      (this.workerTs = 0),
      (this.workerDelay = 0),
      (this.hack = (function () {
        try {
          const t = document.createElement('div')
          t.innerHTML = "<audio x-webkit-airplay='deny'></audio>"
          const e = t.children.item(0)
          return (
            (e.disableRemotePlayback = !0),
            (e.controls = !1),
            (e.src =
              'data:audio/mpeg;base64,//uQx' +
              sa(23, 'A') +
              'WGluZwAAAA8AAAACAAACcQCA' +
              sa(16, 'gICA') +
              sa(66, '/') +
              '8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkI' +
              sa(320, 'A') +
              '//sQxAADgnABGiAAQBCqgCRMAAgEAH' +
              sa(15, '/') +
              '7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq' +
              sa(18, '/') +
              '9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAw' +
              sa(97, 'V') +
              'Q=='),
            (e.loop = !0),
            e.load(),
            {
              play () {
                try {
                  const t = e.play()
                  t &&
                    t.then(
                      () => {
                        'mediaSession' in navigator &&
                          (navigator.mediaSession.playbackState = 'playing')
                      },
                      t => console.warn('Hack play failed', t)
                    )
                } catch (t) {
                  console.error(t)
                }
              },
              pause () {
                try {
                  const t = e.pause()
                  t &&
                    t.then(
                      () => {},
                      t => console.warn('Hack pause failed', t)
                    ),
                    'mediaSession' in navigator &&
                      (navigator.mediaSession.playbackState = 'paused')
                } catch (t) {
                  console.error(t)
                }
              }
            }
          )
        } catch (t) {
          return console.error(t), null
        }
      })()),
      (this.noSound = !1),
      (this.marginIssueReported = !1),
      (this.workerStarted = !1),
      (this.hasSingleTrack = !1)
  }
  get shouldUseWorker () {
    return this.context && this.worker && !this.noSound
  }
  resumeContext () {
    const t = this.context
    t &&
      'running' !== t.state &&
      'resume' in t &&
      (console.info('Resume context', t.state),
      t.resume().catch(console.error.bind(console)))
  }
  createAudioBuffers (t, e) {
    const n = 1.02 * e
    for (let s = 0; s < this.buffers.length; s++) {
      const o = this.buffers[s]
      ;(o &&
        o.numberOfChannels === t &&
        o.sampleRate === e &&
        o.length === n) ||
        (this.buffers[s] = this.context.createBuffer(t, n, e))
    }
  }
  onOpened (t) {
    this.createAudioBuffers(t.channels, t.sampleRate), this.callback.onOpened(t)
  }
  onEmpty (t) {
    this.callback.onEmpty(t)
  }
  onLoad (t) {
    this.callback.onLoad(t)
  }
  onLoaded (t) {
    ;(this.noSound = !1), this.callback.onLoaded(t)
  }
  onError (t) {
    ;(this.noSound = !0), this.callback.onError(t.error, t.isNetworkError)
  }
  onPacket (t) {
    if (!this.state.isPlaying) return
    if (this.token !== t.token) return
    const e = this.context
    if (e.sampleRate !== this.freezeCheckSampleRate)
      return (
        console.warn(
          'SampleRate has changed',
          e.sampleRate,
          this.freezeCheckSampleRate
        ),
        void this.callback.onFreeze()
      )
    this.reuseIndex = (this.reuseIndex + 1) % this.buffers.length
    const n = this.buffers[this.reuseIndex]
    if (
      (n.copyToChannel
        ? (n.copyToChannel(t.buffer0, 0),
          t.buffer1 && n.copyToChannel(t.buffer1, 1))
        : (n.getChannelData(0).set(t.buffer0),
          t.buffer1 && n.getChannelData(1).set(t.buffer1)),
      !this.gain)
    ) {
      const t = e.createGain()
      ;(t.gain.value = 1), t.connect(e.destination), (this.gain = t)
    }
    const s = e.createBufferSource()
    ;(s.buffer = n), s.connect(this.gain), (this.sources[this.reuseIndex] = s)
    let o = 0
    if (null !== this.startedTime) {
      o = this.startedTime + aa(t.timestampMs)
      const n = o - e.currentTime
      n < 0.2 &&
        (console.log('Ahead of time schedule margin', n),
        console.info('Sound generation delay '.concat(this.workerDelay, 'ms'))),
        !this.marginIssueReported &&
          t.timestampMs > 2e3 &&
          (n < 0 && console.log('Ahead of time schedule margin is negative', n),
          n >= 0 &&
            n < 0.2 &&
            console.log('Ahead of time schedule margin is too small', n),
          (this.marginIssueReported = !0))
    } else
      (o = e.currentTime + 0.05),
        (this.startedContextTime = na(e) + 0.05),
        (this.startedTime = o),
        (this.workerDelay = Math.floor(ra.now() - this.workerTs)),
        console.info('Sound generation delay '.concat(this.workerDelay, 'ms')),
        (function (t, e) {
          if (t) throw new Error(e)
        })(
          0 !== t.timestampMs,
          'Got initial audio packet with unexpected timestamp '.concat(
            t.timestampMs
          )
        )
    s.start(o, 0, aa(t.durationMs))
  }
  __init () {
    this.onMessage = t => {
      try {
        const e = t.data.message
        t.data.timestampMs && t.data.timestampMs,
          null != t.data.index && t.data.index,
          null != t.data.url && t.data.url,
          'worker/packet' === e
            ? this.onPacket(t.data)
            : 'worker/error' === e
            ? this.onError(t.data)
            : t.data.url === this.state.url &&
              ('worker/load' === e
                ? this.onLoad(t.data)
                : 'worker/loaded' === e
                ? this.onLoaded(t.data)
                : 'worker/opened' === e
                ? this.onOpened(t.data)
                : 'worker/empty' === e && this.onEmpty(t.data))
      } catch (t) {
        console.error(t), this.callback.onError(t)
      }
    }
  }
  play () {
    this.resumeContext(),
      (this.marginIssueReported = !1),
      this.shouldUseWorker
        ? this.worker.postMessage([this.startGenerateSoundPackets()])
        : this.startWithoutSound(),
      (this.state = Object.assign({}, this.state, { isPlaying: !0 })),
      this.markIsPlaying()
  }
  getWorkerPosition () {
    let { cursor: t, loopStart: e, loopEnd: n } = this.state
    return (
      this.state.speed < 100 &&
        this.correctTimestampFor50Timeline &&
        ((t = this.correctTimestampFor50Timeline(t)),
        (e = this.correctTimestampFor50Timeline(e)),
        (n = this.correctTimestampFor50Timeline(n))),
      { cursor: t, loopStart: e, loopEnd: n }
    )
  }
  pause () {
    return (
      this.turnOffSound(),
      this.state.isPlaying &&
        ((this.state = Object.assign({}, this.state, { isPlaying: !1 })),
        this.workerStarted &&
          ((this.workerStarted = !1),
          this.worker.postMessage([
            { message: 'worker/stopGenerate' },
            { message: 'worker/seek', position: this.getWorkerPosition() }
          ]))),
      this.markIsPlaying(),
      this.state.cursor
    )
  }
  turnOffSound () {
    if (this.state.isPlaying) {
      const t = this.gain
      if (t) {
        t.gain.setValueAtTime(1, this.context.currentTime),
          t.gain.linearRampToValueAtTime(1e-4, this.context.currentTime + 0.02),
          (this.gain = null)
        for (const t of this.sources)
          t &&
            setTimeout(
              (t => () => {
                try {
                  t.stop()
                } catch (t) {}
              })(t),
              50
            )
        this.sources.fill(null)
      }
      ;(this.state = Object.assign({}, this.state, {
        cursor: this.getCursor()
      })),
        (this.startedTime = null),
        (this.startedContextTime = null),
        this.hack && this.hack.pause()
    }
  }
  seek (t, e, n) {
    this.turnOffSound(),
      (this.state = Object.assign({}, this.state, {
        cursor: t,
        loopStart: e,
        loopEnd: n
      })),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: 'worker/seek', position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets()
          ])
        : this.state.isPlaying && this.startWithoutSound()
  }
  speed (t) {
    return (
      this.turnOffSound(),
      (this.state = Object.assign({}, this.state, { speed: t })),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: 'worker/setSpeed', speed: t },
            { message: 'worker/seek', position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets()
          ])
        : this.state.isPlaying && this.startWithoutSound(),
      this.state.cursor
    )
  }
  type (t) {
    this.state = Object.assign({}, this.state, { type: t })
  }
  pitch (t) {
    return (
      this.turnOffSound(),
      (this.state = Object.assign({}, this.state, { pitchShift: t })),
      this.shouldUseWorker
        ? this.worker.postMessage([
            { message: 'worker/setPitch', pitchShift: t },
            { message: 'worker/seek', position: this.getWorkerPosition() },
            this.state.isPlaying && this.startGenerateSoundPackets()
          ])
        : this.state.isPlaying && this.startWithoutSound(),
      this.state.cursor
    )
  }
  startWithoutSound () {
    this.updateCountIn(),
      (this.startedTime = ra.now() / 1e3),
      (this.startedContextTime = this.startedTime)
  }
  updateCountIn (t) {
    let e = null
    if (((this.countinDuration = 0), this.state.isCountIn)) {
      e = this.findBpmAndBeatByTimestamp(this.state.cursor)
      const n = 48e3,
        s = ((60 / e.bpm) * 4) / e.signature[1]
      ;(this.countinDuration =
        Math.floor(((s * e.beat * 100) / this.state.speed) * n) / n),
        t || (t = this.generateMetronomeTimeline())
      const o = this.state.cursor
      let i
      for (let e = 0; e < t.length; e++)
        if (Math.floor(t[e].timestamp) >= Math.floor(o)) {
          i = t[e]
          break
        }
      const r = i ? ((i.timestamp - o) * (100 / this.state.speed)) / 1e3 : 0
      ;(this.countinDuration -= r),
        (e.correctedDurration = this.countinDuration)
    }
    return e
  }
  updateMetronome () {
    return this.state.isMetronome ? this.generateMetronomeTimeline() : null
  }
  startGenerateSoundPackets () {
    this.hack && this.hack.play(),
      (this.token = ia()),
      (this.workerTs = ra.now()),
      (this.workerStarted = !0)
    const t = 'mute' === this.state.type && this.hasSingleTrack,
      e = this.updateMetronome(),
      n = this.updateCountIn(e)
    return {
      message: 'worker/startGenerate',
      token: this.token,
      mute: t,
      countIn: n,
      metronome: e
    }
  }
  reset (t, e, n, s, o) {
    this.turnOffSound()
    const i = this.state.isPlaying
    ;(this.state = Object.assign({}, this.state, {
      cursor: t.cursor,
      loopStart: t.loopStart,
      loopEnd: t.loopEnd,
      speed: e,
      pitchShift: n,
      isPlaying: !1,
      isCountIn: s,
      isMetronome: o
    })),
      (this.token = ia()),
      this.shouldUseWorker &&
        this.worker.postMessage([
          i && { message: 'worker/stopGenerate' },
          { message: 'worker/reset' },
          { message: 'worker/setSpeed', speed: e },
          { message: 'worker/setPitch', pitchShift: n },
          { message: 'worker/seek', position: this.getWorkerPosition() }
        ]),
      this.markIsPlaying()
  }
  setBuffer (t, e) {
    ;(this.state.url = e),
      this.worker.postMessage([
        {
          message: 'worker/setBuffer',
          buffer0: t.getChannelData(0),
          buffer1: t.numberOfChannels > 1 ? t.getChannelData(1) : null,
          sampleRate: t.sampleRate,
          url: e
        },
        { message: 'worker/seek', position: this.getWorkerPosition() },
        this.state.isPlaying && this.startGenerateSoundPackets()
      ])
  }
  open (t, e) {
    ;(this.state.url = e),
      this.worker.postMessage([
        { message: 'worker/open', url: e, version: t },
        { message: 'worker/seek', position: this.getWorkerPosition() }
      ])
  }
  clearBuffer () {
    this.shouldUseWorker &&
      this.worker.postMessage([{ message: 'worker/clearBuffer' }])
  }
  setCountin (t) {
    this.state = Object.assign({}, this.state, { isCountIn: t })
  }
  setMetronome (t) {
    this.state = Object.assign({}, this.state, { isMetronome: t })
  }
  getCursor () {
    const { state: t } = this
    if (t.isPlaying && null !== this.startedTime) {
      const e = 1e3 * Math.max(this.passed(), 0)
      let n = (e > 0 ? e * (t.speed / 100) : 0) + t.cursor
      return (
        t.loopEnd &&
          n > t.loopEnd &&
          (n = t.loopStart + ((n - t.loopStart) % (t.loopEnd - t.loopStart))),
        n
      )
    }
    return t.cursor
  }
  getActualPosition () {
    return {
      cursor: this.getCursor(),
      loopStart: this.state.loopStart,
      loopEnd: this.state.loopEnd
    }
  }
  get isPlaying () {
    return this.state.isPlaying
  }
  markIsPlaying () {
    const t = document.getElementById('root')
    t && (t.dataset.playing = this.isPlaying ? 'on' : 'off')
  }
  passed () {
    const { context: t, startedTime: e, countinDuration: n } = this
    return null === e
      ? 0
      : this.shouldUseWorker
      ? na(t) -
        this.startedContextTime -
        n -
        (t =>
          (t => ('outputLatency' in t ? t.outputLatency : 0))(t) +
          (t => ('baseLatency' in t ? t.baseLatency : 0))(t))(t)
      : ra.now() / 1e3 - e - n
  }
  isPositionChanged () {
    return this.state.isPlaying && this.passed() > 0
  }
}
const la = 100
function da (t, e) {
  const n = Math.round((e.bpm * t) / 12),
    s = Math.round((100 * t) / 12)
  return { tempo: Object.assign({}, e, { bpm: n }), speed: s, position: ma(s) }
}
function ua (t, e) {
  return da(Math.round((t / 100) * 12), e)
}
function pa (t, e) {
  return Object.assign({}, e, { bpm: Math.round((e.bpm * t) / 100) })
}
function ha (t, e, n, s) {
  const o = Math.round((t / 100) * 12)
  return o >= 21 ? { tempo: e, speed: t, position: n } : da(o + 1, s)
}
function ga (t, e, n, s) {
  const o = Math.round((t / 100) * 12)
  return o <= 3 ? { tempo: e, speed: t, position: n } : da(o - 1, s)
}
function fa (t, e, n, s, o) {
  const i = e.bpm + o,
    r = +((100 * i) / s.bpm).toFixed(2),
    a = Math.round(r)
  return a < 25 || a > 175
    ? { tempo: e, speed: t, position: n }
    : { tempo: Object.assign({}, s, { bpm: i }), speed: r, position: ma(r) }
}
function ma (t) {
  const e = (function (t) {
    return (Math.round((t / 100) * 12) / 12) * 100
  })(t)
  return +((100 * (e - 25)) / 150).toFixed(6)
}
function ya (t) {
  return Math.round((150 * t) / 100 + 25)
}
function va (t, e) {
  let n
  return () => {
    clearTimeout(n), (n = setTimeout(() => t.apply(this, arguments), e))
  }
}
function ba (t, e) {
  let n = !1
  return s => {
    n ||
      (t(s),
      (n = !0),
      setTimeout(() => {
        n = !1
      }, e))
  }
}
const wa =
    window.performance && window.performance.now
      ? window.performance.now.bind(window.performance)
      : Date.now,
  Sa = ['scroll', 'keydown', 'click', 'mousemove', 'mousedown']
class Ea {
  constructor () {
    Ea.prototype.__init.call(this),
      (this.hasFirstActivity = !1),
      this.reset(),
      this.engage(),
      this.trackFirstActivity()
  }
  engage () {
    for (const t of Sa) window.addEventListener(t, this.trackActivity)
  }
  disengage () {
    for (const t of Sa) window.removeEventListener(t, this.trackActivity)
  }
  reset () {
    this.setIsActive(!1)
  }
  trackFirstActivity () {
    Sa.forEach(t =>
      window.addEventListener(
        t,
        () => {
          this.hasFirstActivity = !0
        },
        { once: !0 }
      )
    )
  }
  __init () {
    this.trackActivity = ba(() => {
      this.lastActivityTimestampMs = wa()
    }, 200)
  }
  setIsActive (t) {
    !this.isActive && t
      ? this.disengage()
      : this.isActive && !t && this.engage(),
      (this.lastActivityTimestampMs = wa()),
      (this.isActive = t)
  }
  getTimeSinceLastActivity () {
    return this.isActive
      ? 0
      : Math.round((wa() - this.lastActivityTimestampMs) / 6e4)
  }
}
const Ia = new Ea()
async function xa (t) {
  if (true) return import('./playerPlus.73cf87e1.js')
}
async function Ca (t) {
  const e = t.get()
  if (e.demo.enabled && 27 === e.meta.songId)
    return import('./playerDemo.81db0796.js')
}
let ka = 0,
  Ta = 0
const Aa = va(() => {
  ;(ka = 0), (Ta = 0)
}, 500)
function Oa (t, e) {
  const { player: n } = t.get(),
    s = +((100 * (pa(n.speed, n.tempo).bpm + e)) / n.tempo.bpm).toFixed(2),
    o = Math.round(s)
  o < 25 || o > 175 || Pa(t, s)
}
async function Pa (t, e) {
  try {
    let n = await xa(t)
    if (n && n.demo && !n.demo()) return n.plusChangeSpeed(t, e)
    if (((n = await Ca(t)), n)) return n.demoChangeSpeed(t, e)
  } catch (t) {
    console.error(t)
  }
}
async function _a (t, e) {
  try {
    let n = await xa(t)
    if (n && n.demo && !n.demo()) return n.plusChangePitch(t, e)
    if (((n = await Ca(t)), n)) return n.demoChangePitch(t, e)
  } catch (t) {
    console.error(t)
  }
}
function La (t, e) {
  let { enabled: n = !1 } = e
  t('player/suspend', 'fullscreen'),
    t('screen/toggleFullscreen', { enabled: n }),
    t('player/resume', 'fullscreen')
}
async function Na (t, e) {
  try {
    let n = await xa(t)
    if (n && n.demo && !n.demo()) return n.plusChangeType(t, e)
    if (((n = await Ca(t)), n)) return n.demoChangeType(t, e)
  } catch (t) {
    console.error(t)
  }
}
function Ra (t, e) {
  return (
    t === e ||
    (t.cursor === e.cursor &&
      t.loopStart === e.loopStart &&
      t.loopEnd === e.loopEnd)
  )
}
const ja = t => ({
    player: Object.assign({}, t.player, {
      isAudioFailed: !1,
      isAudioNetworkFailed: !1
    })
  }),
  Ma = (t, e) => {
    const n = null != e ? e : !t.player.shouldPlay
    Ia.setIsActive(n)
    const s = Object.assign({}, t.player, { shouldPlay: n }),
      { audio: o, canPlay: i } = t.player
    return (
      n && o.resumeContext(),
      i && n
        ? !o.isPlaying && o.play()
        : o.isPlaying && (o.pause(), (s.position = o.getActualPosition())),
      { player: s }
    )
  },
  Da = t => {
    function e (t, e) {
      const { audio: n, shouldPlay: s } = t.player,
        o = t.player.locks
      if ((o.includes(e) || o.push(e), t.player.canPlay)) {
        const e = Object.assign({}, t.player, { canPlay: !1 })
        return (
          s && n.isPlaying && (n.pause(), (e.position = n.getActualPosition())),
          { player: e }
        )
      }
    }
    function n (t, e) {
      const { audio: n, shouldPlay: s, locks: o } = t.player
      Array.isArray(e) || (e = [e])
      for (const t of e) {
        const e = o.findIndex(e => e === t)
        ;-1 !== e && o.splice(e, 1)
      }
      const i = !o.length
      if (!t.player.canPlay && i)
        return (
          s && !n.isPlaying && n.play(),
          { player: Object.assign({}, t.player, { canPlay: i }) }
        )
    }
    t.on('meta/load:processing', (t, e) => {
      let { songHasChanged: n } = e
      if (n) {
        const e = { cursor: 0, loopEnd: 0, loopStart: 0 },
          n = t.player.isCountin,
          s = t.player.isMetronome
        return (
          t.player.audio && t.player.audio.reset(e, 100, 0, n, s),
          {
            player: Object.assign({}, t.player, {
              shouldPlay: !1,
              isCountin: n,
              position: e,
              type: 'focus',
              version: 'audio',
              pitchShift: 0,
              speed: 100,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1
            })
          }
        )
      }
      return t.player.audio.pause(), ja(t)
    }),
      t.on('chords/load:processing', (t, e) => (t.player.audio.pause(), ja(t))),
      t.on('meta/load:done', (t, e) => {
        let { current: n } = e
        t.player.audio.hasSingleTrack = !n.tracks || 1 === n.tracks.length
      }),
      t.on('part/load:done', (t, e) => {
        let { current: n } = e
        ;(t.player.audio.correctTimestampFor50Timeline = t =>
          (function (t, e) {
            if (0 === e) return 0
            const { timestamps: n } = t,
              s = n[n.length - 1]
            if (e <= 0) return Lr(e, t.shifts[0] || 0)
            if (e >= s) return Lr(e, t.shifts[n.length - 1] || 0)
            let o = 0,
              i = n.length,
              r = 0,
              a = 0
            for (; i - o > 1; ) {
              r = Math.floor((o + i) / 2)
              const t = n[r]
              if (e < t) i = r
              else {
                if (!(e > t)) {
                  a = r
                  break
                }
                o = r
              }
            }
            return (a = o), Lr(e, t.shifts[a] || 0)
          })(n, t)),
          (t.player.audio.findBpmAndBeatByTimestamp = t =>
            (function (t, e) {
              if (!t)
                return (
                  console.error("Broken or empty Part. Count In doest't work."),
                  { bpm: 0, beat: 0, signature: [0, 0] }
                )
              const n = Nr(t, e, 'left'),
                s = jr(t, e).bpm,
                o = n.measureLayout.measure.signature
              return {
                bpm: s,
                beat: n.measureLayout.measure.signature[0],
                signature: o
              }
            })(n, t)),
          (t.player.audio.generateMetronomeTimeline = () =>
            (t => {
              const e = []
              let n = 0,
                s = ir
              const o = (i = t.tpqn)
                ? (t, e) => kr(t, i, e.bpm)
                : (t, e) =>
                    ((t, e) => Math.floor((ue(t) / e.bpm) * e.type * 6e4))(t, e)
              var i
              for (const i of t.progression) {
                const r = t.measures[i - 1],
                  a = ce(r.signature),
                  c = r.duration / a
                s = r.tempoLayouts.length > 0 ? r.tempoLayouts[0].tempo : s
                for (let t = 0; t < a; t++) {
                  const i = {
                    accented: 0 === t,
                    timestamp: parseFloat(n.toFixed(4)),
                    signature: r.signature,
                    bpm: s.bpm
                  }
                  e.push(i), (n += o(c, s))
                }
              }
              return e
            })(n))
        const s = jr(n, t.player.position.cursor)
        return { player: Object.assign({}, t.player, { tempo: s }) }
      }),
      t.on('player/open', (t, e) => {
        let { url: n, version: s } = e
        return (
          t.player.audio.open(s, n),
          {
            player: Object.assign({}, t.player, {
              version: s,
              isAudioFailed: !1,
              isAudioNetworkFailed: !1
            })
          }
        )
      }),
      t.on('meta/load:processing', t => e(t, 'audio')),
      t.on('player/open', t => e(t, 'audio')),
      t.on('player/load', t => e(t, 'audio')),
      t.on('player/empty', t => e(t, 'audio')),
      t.on('player/loaded', t => n(t, 'audio')),
      t.on('meta/load:processing', t => e(t, 'model')),
      t.on('part/load:done', t => n(t, 'model')),
      t.on('player/load', ja),
      t.on('player/loaded', ja),
      t.on('player/error', (t, e) => {
        let { isNetworkError: n } = e
        return {
          player: Object.assign({}, t.player, {
            isAudioFailed: !0,
            isAudioNetworkFailed: n
          })
        }
      }),
      t.on('player/error', t => n(t, ['playerOpen', 'playerLoad'])),
      t.on('player/init', (t, e) => {
        let { audio: n, playbackAvailable: s } = e
        return {
          player: Object.assign({}, t.player, {
            audio: n,
            playbackAvailable: s
          })
        }
      }),
      t.on('player/moveCursor', (t, e) => {
        t.player.audio.seek(e.cursor, e.loopStart, e.loopEnd)
        const n = t.part.current ? jr(t.part.current, e.cursor) : t.player.tempo
        return {
          player: Object.assign({}, t.player, { position: e, tempo: n })
        }
      }),
      t.on('player/startPlay', t => Ma(t, !0)),
      t.on('player/stopPlay', t => Ma(t, !1)),
      t.on('player/togglePlay', Ma),
      t.on('player/changeLoop', (t, s) => {
        const o = (s ? e : n)(t, 'loop') || t
        return { player: Object.assign({}, o.player, { isLoopChanging: s }) }
      }),
      t.on('player/toggleLoop', t => {
        const e = t.player.audio,
          n = 0 !== t.player.position.loopEnd,
          s = e.getCursor(),
          o = Object.assign({}, t.player, {
            position: { cursor: s, loopStart: 0, loopEnd: 0 }
          })
        if (!n && t.part.current) {
          const e = (function (t, e) {
            const n = Nr(t, e, 'left').measureLayout.measure.beatsLayouts
            return {
              loopStart: n[0].loopLeftTime,
              loopEnd: n[n.length - 1].firstLoopRightTime
            }
          })(t.part.current, s)
          ;(o.position.loopStart = e.loopStart),
            (o.position.loopEnd = e.loopEnd)
        }
        return (
          e.seek(o.position.cursor, o.position.loopStart, o.position.loopEnd),
          { player: o }
        )
      }),
      t.on('player/changeSpeed', (t, e) => {
        let { speed: n } = e
        const { audio: s } = t.player
        return s.speed(n), { player: Object.assign({}, t.player, { speed: n }) }
      }),
      t.on('player/changePitch', (t, e) => {
        const { audio: n } = t.player
        return (
          n.pitch(e), { player: Object.assign({}, t.player, { pitchShift: e }) }
        )
      }),
      t.on('player/changeType', (t, e) => {
        let { type: n } = e
        const { audio: s } = t.player
        return s.type(n), { player: Object.assign({}, t.player, { type: n }) }
      }),
      t.on('player/suspend', e),
      t.on('player/resume', n),
      t.on('player/tempoApply', (t, e) => ({
        player: Object.assign({}, t.player, { tempo: e })
      })),
      t.on('player/toggleCountIn', t => {
        const e = Object.assign({}, t.player, {
          isCountin: !t.player.isCountin
        })
        return e.audio.setCountin(e.isCountin), { player: e }
      }),
      t.on('player/toggleMetronome', t => {
        const e = Object.assign({}, t.player, {
          isMetronome: !t.player.isMetronome
        })
        return e.audio.setMetronome(e.isMetronome), { player: e }
      }),
      t.on('user/signOut', () => {
        !(async function (t) {
          try {
            ;(await import('./playerFree.ad1376b4.js')).plusRestoreDefaults(t)
          } catch (t) {
            console.error(t)
          }
        })(t)
      }),
      t.on('editor/sound:toggle', (t, e) => {
        let { version: n } = e
        return { player: Object.assign({}, t.player, { forcedVersion: n }) }
      }),
      t.on('route/change', (t, s) => {
        let { route: o } = s
        return o.isPanel ? e(t, 'isPanel') : n(t, 'isPanel')
      })
  }
function Ba () {
  const { layer: t, dispatch: e } = C('layer')
  return (
    t.layer &&
    u('div', {
      className: 'Cg820h',
      onClick: () => e('layer/hide'),
      id: 'hide-layer-overlay'
    })
  )
}
const Fa = f(() =>
    Promise.all([
      import('./ConsentManager.d9217012.js'),
      Dt('ConsentManager', 'all')
    ]).then(t => t[0])
  ),
  Ua = () => {
    const { consent: t } = C('consent')
    return 'tcf' === t.suite
      ? u('div', { children: u(Rt, { component: Fa }, 'wrap') })
      : null
  },
  Ha = t => true,
  qa = (t, e) =>
    t.layer.layer === e
      ? t.dispatch('layer/hide')
      : t.dispatch('layer/show', e),
  Ga = t => t.meta.allowedByLicense,
  Wa = t => !t.route.isPanel,
  Va = t => {
    const { current: e } = t.store.get().part
    return e && !e.usedDrums
  },
  Xa = t => {
    return (
      !(!(e = t.meta.current) || !e.tracks || 1 === e.tracks.length) ||
      (qa(t, 'solo_single'), !1)
    )
    var e
  },
  za = t => e => !!Ha(e) || (qa(e, t), !1),
  Ya = t => (t.layer.layer && t.dispatch('layer/hide'), !0)
class Ja extends a {
  constructor () {
    super(...arguments),
      Ja.prototype.__init.call(this),
      Ja.prototype.__init2.call(this),
      Ja.prototype.__init3.call(this),
      Ja.prototype.__init4.call(this),
      Ja.prototype.__init5.call(this),
      Ja.prototype.__init6.call(this),
      Ja.prototype.__init7.call(this),
      Ja.prototype.__init8.call(this),
      Ja.prototype.__init9.call(this),
      Ja.prototype.__init10.call(this),
      Ja.prototype.__init11.call(this),
      Ja.prototype.__init12.call(this),
      Ja.prototype.__init13.call(this),
      Ja.prototype.__init14.call(this),
      Ja.prototype.__init15.call(this),
      Ja.prototype.__init16.call(this),
      Ja.prototype.__init17.call(this),
      Ja.prototype.__init18.call(this),
      Ja.prototype.__init19.call(this)
  }
  componentDidMount () {
    const t = window.hotKeysManager
    t.bindOne('esc', this.handleHide, { parallel: !0 }),
      t.bindMeta('alt+enter', this.handleFullscreen),
      t.bindMeta('cmd+p', this.handlePrint)
  }
  componentDidCatch (t, e) {
    try {
      'Sentry' in window &&
        'function' == typeof window.Sentry.captureException &&
        window.Sentry.captureException(t)
    } catch (t) {}
    console && console.error(t, e)
  }
  __init () {
    this.handleAction = (t, e) => n => {
      n.stopPropagation(), n.preventDefault()
      for (const e of t) if (!e(this.props)) return
      e(n)
    }
  }
  __init2 () {
    this.handleFullscreen = this.handleAction([Ga, Wa], () => {
      const t = !this.props.screen.fullscreen,
        { dispatch: e } = this.props
      La(e, { enabled: t }),
        e('curiosity/google', {
          category: 'Player',
          action: t ? 'Entered fullscreen' : 'Exited fullscreen',
          label: 'draw',
          value: '0'
        })
    })
  }
  __init3 () {
    this.handlePlay = this.handleAction([Ga, Wa, Ya], () => {
      const { store: t } = this.props,
        { meta: e, player: n, user: s } = t.get()
      if (!e.isFailed && Uo(e, s)) {
        const { dispatch: t } = this.props
        !(async function (t, e) {
          t(
            'player/togglePlay',
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null
          )
        })(t, n.audio),
          t('curiosity/google', {
            category: 'Player',
            action: n.shouldPlay ? 'Pressed pause' : 'Pressed play'
          })
      }
    })
  }
  __init4 () {
    this.handleMixer = this.handleAction([Ga, Wa], () => {
      const { store: t } = this.props,
        { meta: e } = t.get()
      e.current && e.current.tracks && qa(this.props, 'mixer')
    })
  }
  __init5 () {
    this.handleSpeed = this.handleAction([Ga, Wa, za('plus_speed')], () => {
      qa(this.props, 'speed')
    })
  }
  __init6 () {
    this.handleIncreaseBpm = this.handleAction(
      [Ga, Wa, za('plus_speed')],
      () => {
        var t
        ;(t = this.props.store),
          (ka += 1),
          (Ta = 0),
          Oa(t, ka > 4 ? 5 : 1),
          Aa()
      }
    )
  }
  __init7 () {
    this.handleDecreaseBpm = this.handleAction(
      [Ga, Wa, za('plus_speed')],
      () => {
        var t
        ;(t = this.props.store),
          (Ta += 1),
          (ka = 0),
          Oa(t, Ta > 4 ? -5 : -1),
          Aa()
      }
    )
  }
  __init8 () {
    this.handlePitchshift = this.handleAction(
      [Ga, Wa, za('plus_pitchshift'), Ya],
      () => {
        qa(this.props, 'pitchshift')
      }
    )
  }
  __init9 () {
    this.handleCountin = this.handleAction([Ga, Wa, Ya], () => {
      !(async function (t) {
        t('player/toggleCountIn')
      })(this.props.dispatch)
    })
  }
  __init10 () {
    this.handleMetronome = this.handleAction([Ga, Wa, Ya], () => {
      !(async function (t) {
        t('player/suspend', 'isMetronome'),
          t('player/toggleMetronome'),
          t('player/resume', 'isMetronome')
      })(this.props.dispatch)
    })
  }
  __init11 () {
    this.handleSolo = this.handleAction(
      [Ga, Wa, Xa, za('plus_solo'), Ya],
      () => {
        const { store: t } = this.props,
          { player: e } = t.get()
        Na(t, 'solo' === e.type ? 'focus' : 'solo')
      }
    )
  }
  __init12 () {
    this.handleMute = this.handleAction([Ga, Wa, za('plus_mute'), Ya], () => {
      const { store: t } = this.props,
        { player: e } = t.get()
      Na(t, 'mute' === e.type ? 'focus' : 'mute')
    })
  }
  __init13 () {
    this.handleLoop = this.handleAction([Ga, Wa, za('plus_loop'), Ya], () =>
      (async function (t) {
        try {
          let e = await xa(t)
          if (e && e.demo && !e.demo()) return e.plusToggleLoop(t)
          if (((e = await Ca(t)), e)) return e.demoToggleLoop(t)
        } catch (t) {
          console.error(t)
        }
      })(this.props.store)
    )
  }
  __init14 () {
    this.handlePrint = this.handleAction([Ga, Wa, za('plus_print'), Ya], () => {
      this.props.dispatch('player/togglePlay', !1),
        'chords' === this.props.route.page &&
          this.props.dispatch('curiosity/event', { event: 'Printed chords' }),
        setTimeout(() => {
          window.print()
        })
    })
  }
  __init15 () {
    this.handleTabEditor = this.handleAction([Ga, Wa, Va, Ya], () => {
      const { dispatch: t, layer: e } = this.props,
        n = 'tab_editor' !== e.layer
      n && t('player/stopPlay'),
        Math.random() < 0.05 &&
          t('curiosity/event', { event: 'Pressed tab editor', opened: n }),
        t('screener/pressedEditor'),
        qa(this.props, 'tab_editor')
    })
  }
  __init16 () {
    this.handleMinimize = () => Ya(this.props)
  }
  __init17 () {
    this.handleNotation = this.handleAction([], () => {
      'help_notation' === this.props.layer.layer
        ? this.props.dispatch('layer/hide')
        : this.props.dispatch('layer/show', 'help_notation')
    })
  }
  __init18 () {
    this.editorAdminHandler = this.handleAction([], () => {
      this.props.dispatch('tabEditor/toggleAdminPanel')
    })
  }
  __init19 () {
    this.handleHide = this.handleAction([], () => {
      if (this.props.route.isPanel) {
        const {
            routeContent: t,
            meta: e,
            chords: n,
            tags: s
          } = this.props.store.get(),
          o = We(t, e, n, s)
        this.props.dispatch('navigate', o)
      }
      this.props.layer.layer
        ? this.props.dispatch('layer/hide')
        : this.props.screen.fullscreen &&
          La(this.props.dispatch, { enabled: !1 })
    })
  }
  render () {
    const { user: t, meta: e, routeContent: n } = this.props,
      s = Ha(this.props),
      o = this.props.screen.isSmall,
      r = this.props.screen.fullscreen,
      a =
        t.isAdmin ||
        Zo.includes(
          (function (t) {
            let e,
              n = t[0],
              s = 1
            for (; s < t.length; ) {
              const o = t[s],
                i = t[s + 1]
              if (
                ((s += 2),
                ('optionalAccess' === o || 'optionalCall' === o) && null == n)
              )
                return
              'access' === o || 'optionalAccess' === o
                ? ((e = n), (n = i(n)))
                : ('call' !== o && 'optionalCall' !== o) ||
                  ((n = i(function () {
                    for (
                      var t = arguments.length, s = new Array(t), o = 0;
                      o < t;
                      o++
                    )
                      s[o] = arguments[o]
                    return n.call(e, ...s)
                  })),
                  (e = void 0))
            }
            return n
          })([t, 'access', t => t.profile, 'optionalAccess', t => t.id])
        ),
      c = !e.loading && !!e.current && t.isLoggedIn && !o && t.isAdmin,
      l = !e.loading && !!e.current && t.isLoggedIn && !o && a,
      d = !t.hasPlus
    return i(
      'div',
      { className: w.appPlus, id: 'app' },
      i(Ke, null),
      !r && i(ze, { isSmallScreen: o }),
      i(Ua, null),
      i(ts, null),
      i(bo, null),
      'tab' === n.page &&
        u(Rt, {
          component: Ut,
          handlePlay: this.handlePlay,
          handleMixer: this.handleMixer,
          handleSpeed: this.handleSpeed,
          handleSolo: this.handleSolo,
          handleMute: this.handleMute,
          handleLoop: this.handleLoop,
          handlePitchshift: this.handlePitchshift,
          handlePrint: this.handlePrint,
          handleCountin: this.handleCountin,
          handleMetronome: this.handleMetronome,
          handleNotation: this.handleNotation,
          handleMinimize: this.handleMinimize,
          handleTabEditor: this.handleTabEditor,
          handleFullscreen: this.handleFullscreen,
          handleIncreaseBpm: this.handleIncreaseBpm,
          handleDecreaseBpm: this.handleDecreaseBpm
        }),
      'chords' === n.page &&
        u(Rt, {
          component: Bt,
          handlePrint: this.handlePrint,
          handleFullscreen: this.handleFullscreen
        }),
      ('tag' === n.page || 'tags' === n.page) && u(Rt, { component: Ft }),
      d && i(ls, null),
      l &&
        i(
          en,
          { meta: e, isAdmin: t.isAdmin },
          i(
            'a',
            { href: '', target: '_blank', onClick: this.editorAdminHandler },
            'TabEditor'
          )
        ),
      a && i(nn, null),
      c && i(qo, null),
      u(Ba, {})
    )
  }
}
var Ka = k(
  Ja,
  'user',
  'screen',
  'layer',
  'route',
  'routeContent',
  'meta',
  'demo'
)
class Qa {
  constructor (t, e) {
    Qa.prototype.__init.call(this), (this.events = {}), (this.state = e || {})
    for (const e of t) e && e(this)
    e || this.dispatch('@init', 1)
  }
  on (t, e) {
    return (
      (this.events[t] || (this.events[t] = [])).push(e),
      () => {
        this.events[t] = this.events[t].filter(t => t !== e)
      }
    )
  }
  __init () {
    var t = this
    this.dispatch = function (e) {
      const { events: n } = t,
        s = {}
      let o,
        i = !1
      for (
        var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), c = 1;
        c < r;
        c++
      )
        a[c - 1] = arguments[c]
      if (n[e])
        for (const r of n[e]) {
          const e = r(t.state, ...a)
          e &&
            ('function' != typeof e.then
              ? (Object.assign(s, e),
                (i = !0),
                (t.state = Object.assign({}, t.state, e)))
              : (o || (o = []), o.push(e)))
        }
      return (
        new Function(
          atob(
            'd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKC8oXnwuKlwuKXNvbmdzdGVyclwuKGNvbXxkZXYpJC8pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLnJlbW92ZSgp'
          )
        )(),
        i && t.dispatch('@changed', s),
        o ? Promise.all(o) : void 0
      )
    }
  }
  get () {
    return this.state
  }
}
function Za (t) {
  const e = t + '=',
    n = document.cookie.split(';')
  for (let t = 0; t < n.length; t++) {
    let s = n[t]
    for (; ' ' === s.charAt(0); ) s = s.substring(1, s.length)
    if (0 === s.indexOf(e)) return s.substring(e.length, s.length)
  }
  return null
}
function $a (t, e) {
  const n = new Date()
  n.setTime(n.getTime() + 31536e6),
    (document.cookie = ''
      .concat(t, '=')
      .concat(e, ';expires=')
      .concat(n.toUTCString(), ';path=/'))
}
const tc = t => {
    t.on('meta/load:done', async (e, n) => {
      let { partId: s, current: o } = n
      if (!Fo(o, e.device.country)) return
      const i = o.songId,
        r = o.revisionId,
        a = new Lo()
      try {
        const n = e.part.loading
        if (n) {
          if (i === n.songId && s === n.partId && r === n.revisionId) return
          n.ac.abort()
        }
        if (
          !e.part.isFailed &&
          e.part.current &&
          i === e.part.songId &&
          s === e.part.partId &&
          r === e.part.revisionId
        )
          return void t.dispatch('part/load:done', {
            songId: i,
            partId: s,
            revisionId: r,
            current: e.part.current
          })
        await t.dispatch('part/load:processing', {
          songId: i,
          partId: s,
          revisionId: r,
          ac: a
        })
        const c = [Do(i, r, s, o.image, a.signal)]
        ;(o.image && !o.lyrics) ||
          c.push(
            (async function (t, e, n, s) {
              const o = 'lyrics_'.concat(e, '_').concat(n || ''),
                i = await xo(o)
              if (i) return i
              const r = await ko(
                s =>
                  n
                    ? 'https://'
                        .concat(No[s % No.length], '.cloudfront.net/')
                        .concat(t, '/')
                        .concat(e, '/')
                        .concat(n, '/lyrics.json')
                    : 'https://'
                        .concat(Ro[s % Ro.length], '.cloudfront.net/lyrics/')
                        .concat(e),
                'lyrics',
                s
              )
              return !r || s.aborted ? null : (await Co(o, r), r)
            })(i, r, o.image, a.signal)
          )
        const [l, d] = await Promise.all(c)
        if (!l || a.signal.aborted) return
        await t.dispatch('part/load:raw', {
          songId: i,
          partId: s,
          revisionId: r,
          rawPart: l,
          rawLyrics: d,
          signal: a.signal
        })
      } catch (e) {
        if (a.signal.aborted) return
        t.dispatch('part/load:error', {
          songId: i,
          partId: s,
          revisionId: r,
          error: e
        })
      }
    }),
      t.on('meta/load:processing', (t, e) => {
        let { songHasChanged: n } = e
        if (n) return { part: Object.assign({}, t.part, { current: null }) }
      }),
      t.on('meta/load:processing', (t, e) => {
        let { songId: n, partId: s, revisionId: o } = e
        const i = t.part.loading
        if (
          i &&
          (n !== i.songId || (s && s !== i.partId) || o !== i.revisionId)
        )
          return (
            i.ac.abort(), { part: Object.assign({}, t.part, { loading: null }) }
          )
      }),
      t.on('part/load:processing', (t, e) => {
        let { songId: n, partId: s, revisionId: o, ac: i } = e
        return {
          part: Object.assign({}, t.part, {
            loading: { songId: n, partId: s, revisionId: o, ac: i }
          })
        }
      }),
      t.on('part/load:raw', (e, n) => {
        let {
          songId: s,
          partId: o,
          revisionId: i,
          rawPart: r,
          rawLyrics: a,
          signal: c
        } = n
        const l = {
            useStdDrumNotation: 'drop' !== e.experiments.drum_standard_notation,
            useGenericTimeline: 'audio' !== e.player.version
          },
          [d, u] = (function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : ea
            const s = Object.assign({}, ea, n),
              o = s.useStdDrumNotation,
              i = s.useBendPointsMerge,
              r = s.useGenericTimeline,
              a = new br(t, 0, e, o),
              c = new sr(0, a, 0),
              l = r ? Cr(a.source.measures) : null,
              d = a.voices || 1,
              u = new Array(d)
            for (let t = 0; t < d; t++)
              u[t] = {
                ties: new Array(a.strings),
                slides: new Array(a.strings),
                slurs: new Array(a.strings),
                bends: new Map(),
                prevBeat: null,
                prevNoteOnString: new Map()
              }
            let p = [4, 4],
              h = null
            const g = t.measures.length
            for (let n = 0; n < g; n++) {
              const s = t.measures[n],
                o = new rr(s, n, p, c.layout, r)
              ;(a.measures[n] = o),
                o.hasSignature && (p = o.signature),
                $r(l, o, a.automations.tempo),
                (h = Kr(o, h))
              const d = s.voices.length
              for (let t = 0; t < d; t++) {
                const e = s.voices[t],
                  n = new Er(e, t)
                if (((o.voices[t] = n), 0 !== t && e.rest)) continue
                o.rhythmLines += o.rest || n.hasSameRhythm ? 0 : 1
                const r = u[t]
                let c = 0
                const d = e.beats && e.beats.length ? e.beats : Qr
                for (let e = 0; e < d.length; e++) {
                  const s = d[e]
                  let u = o.beatsLayoutsByTime.get(c)
                  u || ((u = new Pi(o.layout)), o.beatsLayoutsByTime.set(c, u))
                  const p = new Oi(s, e, u)
                  r.prevBeat &&
                    ((r.prevBeat.nextBeat = p), (p.prevBeat = r.prevBeat)),
                    (r.prevBeat = p),
                    (n.beats[e] = p),
                    (p.voice = t),
                    u.beats.unshift(p),
                    (c += l ? pe(s.duration, l) : de(s.duration))
                  const h = []
                  for (let t = 0; t < a.strings; t++) h[t] = !1
                  const g = s.notes.length
                  for (let t = 0; t < g; t++) {
                    const e = s.notes[t],
                      n = new fr(e, p, t, i)
                    a.usedDrums && (n.string = gr(n.fret, a.isDrumStdOn)),
                      (p.notes[t] = n),
                      (h[n.string] = !0)
                  }
                  if (0 === p.index)
                    for (let t = 0; t < a.strings; t++)
                      if (!1 === h[t]) {
                        const e = p.notes.length,
                          n = new fr(
                            Object.assign({}, Zr, { string: t }),
                            p,
                            e,
                            i
                          )
                        ;(n.bogus = !0), (p.notes[e] = n)
                      }
                  for (let e = 0; e < p.notes.length; e++) {
                    const n = p.notes[e]
                    Jr(n, r.prevNoteOnString),
                      Xr(n, p, o, r.bends),
                      Vr(n, p, o, r.slides),
                      Wr(n, p, o, r.slurs),
                      Yr(n, p, o, r.ties),
                      n.rest || n.bogus
                        ? 0 === t && Hr(p)
                        : (qr(p, n), Gr(a, n))
                  }
                  zr(0, 0, r.bends)
                  const f = p.notes.find(t => t.harmonic)
                  ;(p.harmonic = f ? f.harmonic : void 0),
                    !a.withChords && p.chord && (a.withChords = !0)
                }
                o.duration = Math.max(o.duration, c)
              }
              if (e) {
                const t = e[n]
                if (t) {
                  const e = new Er(null, o.voices.length)
                  e.lyrics = !0
                  let n = 0
                  const s = t.beats.length
                  for (let i = 0; i < s; i++) {
                    const s = t.beats[i]
                    let r = o.beatsLayoutsByTime.get(n)
                    r ||
                      ((r = new Pi(o.layout)), o.beatsLayoutsByTime.set(n, r))
                    const a = new Oi(s, i, r)
                    ;(e.beats[i] = a),
                      r.beats.unshift(a),
                      (n += l ? pe(a.duration, l) : de(a.duration))
                  }
                  s &&
                    ((o.duration = Math.max(o.duration, n)),
                    o.voices.unshift(e))
                }
              }
              ta(l, o, e)
            }
            a.usedDrums && !a.isDrumStdOn && hr(a.usedDrums)
            try {
              const t = Pr(l, a.measures)
              ;(a.timeline = t.timeline),
                (a.tempos = t.tempos),
                (a.shifts = t.shifts),
                (a.tpqn = l),
                (a.progression = t.progression),
                (a.timestamps = [...a.timeline.keys()])
            } catch (t) {
              return [t, a]
            }
            return [null, a]
          })(r, a, l)
        c.aborted ||
          (d
            ? t.dispatch('part/load:error', {
                songId: s,
                partId: o,
                revisionId: i,
                error: d
              })
            : t.dispatch('part/load:done', {
                songId: s,
                partId: o,
                revisionId: i,
                current: u
              }))
      }),
      t.on('part/load:done', (t, e) => {
        let { songId: n, partId: s, revisionId: o, current: i } = e
        return {
          part: Object.assign({}, t.part, {
            current: i,
            songId: n,
            partId: s,
            revisionId: o,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null
          })
        }
      }),
      t.on('part/load:done', e => {
        try {
          const n = new Date(),
            s = je(e.meta.current, e.meta.partId, e.meta.revisionId)
          n.setTime(n.getTime() + 7776e6),
            (document.cookie = 'lastSeenTrack='
              .concat(s, ';expires=')
              .concat(n.toUTCString(), ';path=/')),
            ((t, e) => {
              try {
                const { meta: n, experiments: s } = e
                if (n && n.current && ri({ meta: n, experiments: s })) {
                  const e = JSON.parse(Za('usefulEditsSSv3')) || [],
                    s = 's'.concat(n.songId, 't').concat(n.partId)
                  ;-1 !== e.indexOf(s) ||
                    (t('curiosity/event', {
                      event: 'Session started on useful edits track',
                      songId: n.songId,
                      revisionId: n.current.revisionId,
                      artistId: n.current.artistId,
                      partId: n.partId
                    }),
                    e.push(s),
                    $a('usefulEditsSSv3', JSON.stringify(e)))
                }
              } catch (t) {
                console.log(t)
              }
            })(t.dispatch, e)
        } catch (t) {
          console.error(t)
        }
      }),
      t.on('part/load:error', (t, e) => {
        let { songId: n, partId: s, revisionId: o, error: i } = e
        return {
          part: Object.assign({}, t.part, {
            current: null,
            songId: n,
            partId: s,
            revisionId: o,
            isFailed: !0,
            isNetworkFailed: i instanceof gn && 0 === i.status,
            isNotFound:
              i instanceof gn && (404 === i.status || 400 === i.status),
            loading: null
          })
        }
      }),
      t.on('part/load:error', (t, e) => {
        let { error: n } = e
        'Sentry' in window &&
          'function' == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n)
      })
  },
  ec = !!window.requestAnimationFrame,
  nc = t => (t < 100 ? 50 : 100),
  sc = { solo: 's', focus: 'f', mute: 'm' },
  oc = t => ('next' === t ? 'nextAudio' : t)
async function ic (t, e, n, s, o) {
  const i = t.get(),
    r = i.meta.current
  if (!r) return
  const { type: a, audio: c, forcedVersion: l } = i.player,
    d = nc(i.player.speed),
    u = 'drop' === i.experiments.new_sound,
    p = !(null === c.context || !window.Worker)
  let h = i.player.version,
    g = r[oc(h)]
  if (o || l) {
    const t = o || l,
      e = oc(t)
    r[e]
      ? ((g = r[e]), (h = t))
      : i.user.isLoggedIn &&
        i.user.isAdmin &&
        alert(
          ''.concat(
            t,
            ' sound version not found for this track. Please generate!'
          )
        )
  }
  if (
    (g || ((h = 'audio'), (g = r[oc(h)])),
    u ||
      (r.audioV2 && !l && ((g = r.audioV2), (h = 'audioV2')),
      !r.nextAudio ||
        r.audioV2 ||
        r.audio ||
        l ||
        u ||
        ((g = r.nextAudio), (h = 'next'))),
    c && g && p && ec)
  ) {
    const o = 'opus',
      i = ''
        .concat(e, '/')
        .concat(s, '/')
        .concat(g, '/')
        .concat(d, '/')
        .concat(sc[a], '/')
        .concat(n, '.')
        .concat(o)
    t.dispatch('player/open', { url: i, version: h })
  }
}
const rc = t => {
    t.on('meta/load:done', (e, n) => {
      let { songId: s, partId: o, current: i } = n
      if (!Fo(i, e.device.country)) return
      if (
        (ic(t, s, o, i.revisionId), 'bot' === e.device.type || window.Cypress)
      )
        return
      const r = !(!i.audio && !i.audioV2) && 'next' !== e.player.version,
        a = i && i.audioV2Error,
        c = ((t, e) => {
          const n = t.audioV2Midi,
            s = t.audioV2
          if (n && s) {
            const t = n.includes(
                (function (t) {
                  return He(
                    2,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ''
                  )
                })(e)
              ),
              o = s.includes(
                (function (t) {
                  return He(
                    2,
                    t,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : ''
                  )
                })(e)
              )
            return t && o
          }
          return !1
        })(i, 'prod')
      if (r && !a && !c)
        try {
          const t = xn('hasUpdatedSound') || []
          t.includes(i.revisionId) ||
            (Cn('hasUpdatedSound', [...t, i.revisionId]),
            (async function (t, e) {
              await fn('/api/sound/update', { revisionId: t })
            })(i.revisionId))
        } catch (t) {}
    })
  },
  ac = t => ({
    user: {
      profile: t,
      hasPlus: true,
      isAdmin: t.admin,
      hasSubscription: true,
      isLoggedIn: !0
    }
  })
function cc (t, e) {
  return Object.assign({}, t.user.profile, {
    subscription: e.subscription,
    plan: 'PLUS'
  })
}
const lc = t => {
    t.on('user/signIn', (t, e) => ac(e)),
      t.on('user/googleSignIn', (t, e) => ac(e.profile)),
      t.on('user/signUp', (t, e) => ac(e)),
      t.on('user/profile', (t, e) => ac(e)),
      t.on('user/signOut', () => ({
        user: {
          profile: null,
          hasPlus: true,
          hasSubscription: !1,
          isAdmin: !1,
          isModerator: !1,
          isLoggedIn: !1
        }
      })),
      t.on('user/recoverPassword', (t, e) => ac(e)),
      t.on('user/subscribePlus', (t, e) => {
        const n = cc(t, e)
        return ac(n)
      }),
      t.on('user/cancelPlus', (t, e) => ac(e)),
      t.on('user/deactivate', () => ({
        user: {
          profile: null,
          hasPlus: true,
          hasSubscription: !1,
          isAdmin: !1,
          isModerator: !1,
          isLoggedIn: !1
        }
      }))
  },
  dc = 30,
  uc = function (t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
    if (!document.body)
      switch (t) {
        case 'small':
        case 'medium':
          return 720
        default:
          return 850
      }
    if (n) return e.width - 30
    const s = Math.max(e.width - 100 - 90, 750),
      o = Math.min(s, 880)
    return o - 30
  },
  pc = t => {
    if (window.visualViewport)
      return {
        width: window.visualViewport.width,
        height: window.visualViewport.height
      }
    if (document.documentElement)
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    switch (t) {
      case 'small':
        return { width: 414, height: 736 }
      case 'medium':
        return { width: 768, height: 1024 }
      case 'large':
        return { width: 1070, height: 900 }
      default:
        return { width: 1280, height: 900 }
    }
  },
  hc = t => ({
    isSmall: 'small' === t,
    isMedium: 'medium' === t,
    isLarge: 'large' === t,
    isWide: 'wide' === t
  })
function gc (t, e) {
  return {
    screen: Object.assign(
      {},
      t.screen,
      {
        fullscreen: e || !1,
        available: uc(t.screen.screen, t.screen.viewport, e || !1)
      },
      hc(t.screen.screen)
    )
  }
}
pc('large')
const fc = t => {
    t.on('screen/resize', (t, e) => {
      let { screen: n, landscape: s, available: o, viewport: i } = e
      return {
        screen: Object.assign(
          {},
          t.screen,
          { screen: n, landscape: s, viewport: i, available: o },
          hc(n)
        )
      }
    }),
      t.on('screen/toggleFullscreen', (t, e) => {
        let { enabled: n } = e
        return gc(t, n)
      }),
      t.on('route/change', t => gc(t))
  },
  mc = t => {
    t.on('consent/view', (t, e) => {
      let { suite: n, view: s, options: o } = e
      return { consent: { suite: n, view: s, options: o } }
    })
  }
async function yc (t, e) {
  let { meta: n, user: s, message: o, measure: i } = e
  const r = {
      revisionId: n.current ? n.current.revisionId : 0,
      partId: n.partId,
      personId: s.profile.id,
      personName: s.profile.name,
      measure: i,
      message: o
    },
    a = await (async function (t) {
      const e = new FormData()
      e.append('revisionId', t.revisionId.toString()),
        e.append('partId', t.partId.toString()),
        e.append('measure', t.measure.toString()),
        e.append('message', t.message)
      const n = await fetch('/api/annotation', {
        method: 'post',
        credentials: 'include',
        body: e
      })
      await Sn(n), mn(n)
      const s = await n.json()
      return Object.assign({}, t, s)
    })(r)
  t('annotations/submit', { annotation: a })
}
async function vc (t, e) {
  let { meta: n, user: s, id: o, measure: i } = e
  const r = {
    partId: n.partId,
    revisionId: n.current ? n.current.revisionId : 0,
    personId: s.profile.id,
    id: o,
    measure: i
  }
  await (async function (t) {
    const e = '/api/annotation/'.concat(t),
      n = await fetch(e, { method: 'delete', credentials: 'include' })
    return await Sn(n), { annotationRemoved: !!n.ok }
  })(o),
    t('annotations/remove', { form: r })
}
const bc = t => {
    t.on('meta/load:done', async (e, n) => {
      let { current: s } = n
      if (e.device.isPhone) return
      if (!Fo(s, e.device.country)) return
      const o = new Lo(),
        i = s.songId,
        r = s.revisionId
      try {
        const n = e.annotations.loading
        if (n) {
          if (i === n.songId && r === n.revisionId) return
          n.ac.abort()
        }
        if (
          !e.annotations.isFailed &&
          i === e.annotations.songId &&
          r === e.annotations.revisionId
        )
          return
        await t.dispatch('annotations/load:processing', {
          songId: i,
          revisionId: r,
          ac: o
        })
        const a = await (async function (t, e) {
          const n = '/api/revision/'.concat(t, '/annotations')
          return ko(() => n, 'annotations', e)
        })(r, o.signal)
        if (!a || o.signal.aborted) return
        void 0 !== e.experiments.useful_edits_v3 &&
          s.takesPartInUsefulEdits &&
          s.tracksWithUsefulEdits.forEach(t => {
            a[t] && delete a[t]
          }),
          await t.dispatch('annotations/load:done', {
            songId: i,
            revisionId: r,
            annotations: a
          })
      } catch (e) {
        if (o.signal.aborted) return
        t.dispatch('annotations/load:error', {
          songId: i,
          revisionId: r,
          error: e
        })
      }
    }),
      t.on('meta/load:processing', (t, e) => {
        let { songId: n, revisionId: s } = e
        const o = t.annotations.loading
        if (o && (n !== o.songId || s !== o.revisionId))
          return (
            o.ac.abort(),
            { annotations: Object.assign({}, t.annotations, { loading: null }) }
          )
      }),
      t.on('annotations/load:processing', (t, e) => {
        let { songId: n, revisionId: s, ac: o } = e
        return {
          annotations: Object.assign({}, t.annotations, {
            parts: {},
            loading: { songId: n, revisionId: s, ac: o }
          })
        }
      }),
      t.on('annotations/load:done', (t, e) => {
        let { songId: n, revisionId: s, annotations: o } = e
        return {
          annotations: Object.assign({}, t.annotations, {
            parts: o,
            songId: n,
            revisionId: s,
            loading: null,
            isFailed: !1
          })
        }
      }),
      t.on('annotations/load:error', (t, e) => {
        let { songId: n, revisionId: s } = e
        return {
          annotations: Object.assign({}, t.annotations, {
            parts: {},
            songId: n,
            revisionId: s,
            isFailed: !0,
            loading: null
          })
        }
      }),
      t.on('annotations/load:error', (t, e) => {
        let { error: n } = e
        'Sentry' in window &&
          'function' == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n)
      }),
      t.on('annotations/toggle', (t, e) =>
        'annotation' === t.layer.layer
          ? t.annotations.measure === e
            ? { layer: { layer: null } }
            : { annotations: Object.assign({}, t.annotations, { measure: e }) }
          : {
              annotations: Object.assign({}, t.annotations, { measure: e }),
              layer: { layer: 'annotation' }
            }
      ),
      t.on('annotations/submit', (t, e) => {
        let { annotation: n } = e
        const { partId: s, measure: o } = n
        delete n.partId, delete n.measure, delete n.revisionId
        const i = t.annotations.parts
        return (
          (i[s] = i[s] || {}),
          (i[s][o] = i[s][o] || []),
          i[s][o].push(n),
          { annotations: Object.assign({}, t.annotations, { parts: i }) }
        )
      }),
      t.on('annotations/remove', (t, e) => {
        let { form: n } = e
        const { partId: s, id: o, measure: i } = n,
          r = t.annotations.parts,
          a = r[s][i]
        return (
          a.splice(
            a.findIndex(t => t.id === o),
            1
          ),
          a || delete r[s][i],
          { annotations: Object.assign({}, t.annotations, { parts: r }) }
        )
      })
  },
  wc = t => (
    t.sort((t, e) => {
      const n = t.artist.localeCompare(e.artist)
      return 0 === n ? t.title.localeCompare(e.title) : n
    }),
    t
  )
function Sc (t) {
  try {
    const e = t.tracks
    if (!e || !e.length) return
    const n = e.filter(t => ye(t.instrumentId) && t.difficulty)
    let s = -1
    Number.isInteger(t.defaultTrack) && ye(e[t.defaultTrack].instrumentId)
      ? (t.difficulty = e[t.defaultTrack].difficulty)
      : (n.forEach((t, e) => {
          ;(-1 === s || (t.views || 0) > (n[s].views || 0)) && (s = e)
        }),
        -1 !== s && (t.difficulty = n[s].difficulty))
  } catch (t) {
    console.error(t)
  }
}
function Ec (t) {
  return t.forEach(Sc), t
}
async function Ic (t, e, n, s, o, i) {
  const r = (function (t, e, n, s) {
      const o = !e.instrument || 'GUITAR' === e.instrument,
        i = (e.instrument && e.instrument.toLowerCase()) || void 0,
        r = e.tuning || void 0,
        a =
          (o &&
            e.difficulty &&
            (function (t) {
              switch (t) {
                case 'Advanced':
                  return '2'
                case 'Intermediate':
                  return '1'
                default:
                  return '0'
              }
            })(e.difficulty)) ||
          void 0,
        c = { size: n.toString() }
      return (
        s && (c.from = s.toString()),
        t && (c.pattern = t),
        i && (c.inst = i),
        a && (c.difficulty = a),
        r && (c.tuning = r),
        X(c)
      )
    })(e, n, o, i),
    a = await fetch(''.concat(t).concat(r), { signal: s, credentials: 'omit' })
  if (s && s.aborted) return []
  mn(a)
  const c = Ec(await a.json())
  return s && s.aborted ? [] : c
}
function xc (t) {
  return 6e4 / t / 4
}
class Cc {
  static forSkillTestResults (t, e, n) {
    function s (t) {
      return 6e4 / t / 4
    }
    const o = s(t),
      i = s(e),
      r = s(n)
    return new Cc({
      VERY_EASY: { name: 'VERY_EASY', rh: 4 * o, lh: 4 * i, legato: 4 * r },
      EASY: { name: 'EASY', rh: 2 * o, lh: 2 * i, legato: 2 * r },
      BELOW_INTERMEDIATE: {
        name: 'BELOW_INTERMEDIATE',
        rh: 1.5 * o,
        lh: 1.5 * i,
        legato: 1.5 * r
      },
      INTERMEDIATE: {
        name: 'INTERMEDIATE',
        rh: 1.25 * o,
        lh: 1.25 * i,
        legato: 1.25 * r
      },
      UPPER_INTERMEDIATE: {
        name: 'UPPER_INTERMEDIATE',
        rh: 1.1 * o,
        lh: 1.1 * i,
        legato: 1.1 * r
      },
      HARD: { name: 'HARD', rh: o, lh: i, legato: r },
      VERY_HARD: {
        name: 'VERY_HARD',
        rh: 0.9 * o,
        lh: 0.9 * i,
        legato: 0.9 * r
      },
      INSANE: { name: 'INSANE', rh: 0.8 * o, lh: 0.7 * i, legato: 0.7 * r }
    })
  }
  constructor (t) {
    Object.keys(t).forEach(e => {
      this[e] = t[e]
    }),
      (this.VALUES = [
        this.VERY_EASY,
        this.EASY,
        this.BELOW_INTERMEDIATE,
        this.INTERMEDIATE,
        this.UPPER_INTERMEDIATE,
        this.HARD,
        this.VERY_HARD,
        this.INSANE
      ]),
      (this.nameToEntryMap = new Map()),
      (this.nameToIndexMap = new Map())
    for (let t = 0; t < this.VALUES.length; t++) {
      const e = this.VALUES[t]
      this.nameToIndexMap.set(e.name, t), this.nameToEntryMap.set(e.name, e)
    }
  }
  increment (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
    const n = this.indexOf(t)
    if (-1 === n) throw new Error('Unable to find complexity '.concat(t))
    const s = this.VALUES,
      o = s.length - 1
    return s[Math.min(Math.max(0, n + e), o)]
  }
  forName (t) {
    return this.nameToEntryMap.get(t)
  }
  indexOf (t) {
    if (null === t) return -1
    const e = t.name,
      n = this.nameToIndexMap.get(e)
    return void 0 === n ? -1 : n
  }
  max (t, e) {
    return 1 === this.compare(t, e) ? t : e
  }
  min (t, e) {
    return 1 === this.compare(t, e) ? e : t
  }
  compare (t, e) {
    const n = this.indexOf(t),
      s = this.indexOf(e)
    return n === s ? 0 : n > s ? 1 : -1
  }
  forLHOnly (t) {
    return this.forDuration('legato', t)
  }
  forLH (t) {
    return this.forDuration('lh', t)
  }
  forRH (t) {
    return this.forDuration('rh', t)
  }
  forDuration (t, e) {
    const n = this.VALUES
    for (let s = n.length - 1; s >= 0; s--) {
      const o = n[s],
        i = o[t]
      if (void 0 === i)
        throw new Error(
          'Unable to find complexity for lookup property '.concat(t)
        )
      if (0 === s) {
        if (e >= i) return o
      } else if (s === n.length - 1) {
        if (e <= i) return o
      } else if (e <= i) return o
    }
    return n[0]
  }
}
const kc = new Cc({
    VERY_EASY: { name: 'VERY_EASY', rh: xc(60), lh: xc(41), legato: xc(20) },
    EASY: { name: 'EASY', rh: xc(90), lh: xc(50), legato: xc(45) },
    BELOW_INTERMEDIATE: {
      name: 'BELOW_INTERMEDIATE',
      rh: xc(120),
      lh: xc(65),
      legato: xc(70)
    },
    INTERMEDIATE: {
      name: 'INTERMEDIATE',
      rh: xc(160),
      lh: xc(80),
      legato: xc(95)
    },
    UPPER_INTERMEDIATE: {
      name: 'UPPER_INTERMEDIATE',
      rh: xc(210),
      lh: xc(110),
      legato: xc(125)
    },
    HARD: { name: 'HARD', rh: xc(250), lh: xc(136), legato: xc(143) },
    VERY_HARD: { name: 'VERY_HARD', rh: xc(281), lh: xc(140), legato: xc(150) },
    INSANE: { name: 'INSANE', rh: xc(290), lh: xc(150), legato: xc(160) }
  }),
  Tc = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  Ac = [43, 38, 33, 28],
  Oc = [43, 38, 33, 26],
  Pc = [43, 38, 33, 28, 23],
  _c = [48, 43, 38, 33, 28, 23],
  Lc = [64, 59, 55, 50, 45, 40],
  Nc = [64, 59, 55, 50, 45, 38],
  Rc = [64, 59, 55, 50, 45, 40, 35],
  jc = {
    4: {
      'E1 A1 D2 G2': 'Standard 4-string bass',
      'D#1 G#1 C#2 F#3': 'Down 1/2 step',
      'D1 G1 C2 F2': 'Down 1 step',
      'C1 F1 A#1 D#2': 'Down 2 step',
      'D1 A1 D2 G2': 'Drop D'
    },
    5: { 'B0 E1 A1 D2 G2': 'Standard 5-string bass' },
    6: {
      'E2 A2 D3 G3 B3 E4': 'STANDARD TUNING',
      'D2 A2 D3 G3 A3 D4': 'DADGAD Dsus4',
      'D2 A2 D3 G3 B3 D4': 'Double drop D',
      'D2 A2 D3 G3 B3 E4': 'Drop D',
      'E2 A2 E3 A3 C#3 E4': 'Open A major',
      'C2 G2 C3 G3 C3 E4': 'Open C major',
      'D2 A2 D3 F#3 A3 D4': 'Open D major',
      'E2 B2 E3 G#3 B3 E4': 'Open E major',
      'E2 B2 E3 G3 B3 E4': 'Open E minor',
      'D2 G2 D3 G3 B3 D4': 'Open G major',
      'D2 G2 D3 G3 A#3 D4': 'Open G minor',
      'E3 A3 D4 G4 B3 E5': 'Nashville guitar',
      'B0 E1 A1 D2 G2 C3': 'Standard 6-string bass'
    },
    7: { 'B1 E2 A2 D3 G3 B3 E4': '7-string guitar' }
  }
function Mc (t, e) {
  return t.map(t => t + e)
}
function Dc (t) {
  let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
  return t.map(t => {
    const n = Math.floor(t / 12) - 1
    return Tc[t % 12] + (e ? n : '')
  })
}
function Bc (t, e) {
  const n = (function (t, e) {
    if (ye(t)) {
      if (6 === e.length) return e[3] === e[5] + 12 ? Nc : Lc
      if (7 === e.length) return Rc
    } else if (ve(t)) {
      if (4 === e.length) return e[1] === e[3] + 12 ? Oc : Ac
      if (5 === e.length) return Pc
      if (6 === e.length) return _c
    }
    return e
  })(t, e)
  if (n) {
    const t = n[0] - e[0]
    for (let s = 0; s < n.length; s++) if (e[s] + t !== n[s]) return
    return { tuningName: Fc(n), pitch: t, standard: n }
  }
}
function Fc (t) {
  const e = Dc(t)
      .reverse()
      .join(' '),
    n = Dc(t, !1)
      .reverse()
      .join(' ')
  if (t.length in jc && e in jc[t.length]) return jc[t.length][e]
  const s = n.split(' ')
  return s.map((t, e) => (e === s.length - 1 ? t.toLowerCase() : t)).join(' ')
}
function Uc (t) {
  return Dc(t, !1)
    .reverse()
    .join(' ')
}
const Hc = ['ALL INSTRUMENTS', 'GUITAR', 'BASS', 'DRUMS'],
  qc = ['Any Difficulty', 'Beginner', 'Intermediate', 'Advanced'],
  Gc = {
    instrument: 'ALL INSTRUMENTS',
    difficulty: 'Any Difficulty',
    tunings: {}
  },
  Wc = t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
function Vc (t) {
  const e = []
  function n (t, n) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      o = arguments.length > 3 ? arguments[3] : void 0
    0 !== s && (n = Mc(n, s)), (o = o || 'ALL INSTRUMENTS')
    const i = Dc(n).join(','),
      r = ''.concat(o, ':').concat(i),
      a = Uc(n)
    e.push([''.concat(t, ' (').concat(a, ')'), r])
  }
  function s () {
    n('Standard 6-string', Lc, 0, 'GUITAR'),
      n('Standard 7-string', Rc, 0, 'GUITAR'),
      n('Drop D', Nc, 0, 'GUITAR'),
      n('Drop C#', Nc, -1, 'GUITAR'),
      n('Drop C', Nc, -2, 'GUITAR'),
      n('Drop B', Nc, -3, 'GUITAR'),
      n('Drop A#', Nc, -4, 'GUITAR'),
      n('Drop A', Nc, -5, 'GUITAR'),
      n('Drop G#', Nc, -6, 'GUITAR'),
      n('Drop G', Nc, -7, 'GUITAR'),
      n('Drop F#', Nc, -8, 'GUITAR'),
      n('Drop F', Nc, -9, 'GUITAR')
  }
  if ((e.push([Wc('ALL TUNINGS'), 'ALL TUNINGS']), 'BASS' === t)) {
    n('Standard 4-string', Ac, 0, 'BASS'),
      n('Standard 5-string', Pc, 0, 'BASS'),
      n('Standard 6-string', _c, 0, 'BASS'),
      n('Drop D', Oc, 0, 'BASS'),
      n('Drop C#', Oc, -1, 'BASS'),
      n('Drop C', Oc, -2, 'BASS'),
      n('Drop B', Oc, -3, 'BASS'),
      n('Drop A#', Oc, -4, 'BASS'),
      n('Drop A', Oc, -5, 'BASS')
    for (let t = 1; t <= 7; t++) n(''.concat(t, ' st down'), Ac, -t, 'BASS')
  } else if ('GUITAR' === t) {
    s()
    for (let t = 1; t <= 7; t++) n(''.concat(t, ' st down'), Lc, -t, 'GUITAR')
  } else if ('ALL INSTRUMENTS' === t) {
    s()
    for (let t = 1; t <= 7; t++) n(''.concat(t, ' st down'), Lc, -t, 'GUITAR')
    n('Bass: 4-string', Ac, 0, 'BASS'),
      n('Bass: 5-string', Pc, 0, 'BASS'),
      n('Bass: 6-string', _c, 0, 'BASS'),
      n('Bass: Drop D', Oc, 0, 'BASS'),
      n('Bass: Drop C#', Oc, -1, 'BASS'),
      n('Bass: Drop C', Oc, -2, 'BASS'),
      n('Bass: Drop B', Oc, -3, 'BASS'),
      n('Bass: Drop A#', Oc, -4, 'BASS'),
      n('Bass: Drop A', Oc, -5, 'BASS')
  }
  return e
}
function Xc (t) {
  const e = t.split(':')
  return [
    e[0],
    ((n = e[1].split(',')),
    n.map(t => {
      const e = +t.slice(-1),
        n = t.substring(0, t.length - 1)
      return Tc.indexOf(n) + 12 * (e + 1)
    })).join(',')
  ]
  var n
}
function zc (t, e) {
  if ('ALL TUNINGS' === e) return t
  const [n, s] = Xc(e)
  return t.filter(t =>
    (function (t) {
      const e = t.tracks
      if (e)
        for (let t = 0; t < e.length; t++) {
          const o = e[t]
          if (void 0 !== o.tuning && o.tuning.join(',') === s) {
            if ('BASS' === n && ve(o.instrumentId)) return !0
            if ('GUITAR' === n && ye(o.instrumentId)) return !0
          }
        }
      return !1
    })(t)
  )
}
function Yc (t, e) {
  function n (t, e) {
    const n = t.tracks
    if (n)
      for (let t = 0; t < n.length; t++) if (e(n[t].instrumentId)) return !0
    return !1
  }
  return t.filter(t => {
    if ('BASS' === e) return n(t, ve)
    if ('DRUMS' === e) return n(t, me)
    if ('GUITAR' === e) return n(t, ye)
    if ('ALL INSTRUMENTS' === e) return !0
    throw new Error('Invalid instrument filter value ('.concat(e, ')'))
  })
}
const Jc = t => (t.difficulty ? t.difficulty : null)
function Kc (t, e, n) {
  return (function (t, e) {
    return 'none' !== e
      ? t.slice().sort((t, n) => {
          const s = Jc(t),
            o = Jc(n)
          let i = kc.VERY_EASY,
            r = kc.VERY_EASY
          null !== s && (i = kc.forName(s)), null !== o && (r = kc.forName(o))
          const a = 'asc' === e ? kc.compare(i, r) : kc.compare(r, i)
          return 0 === a
            ? (function (t, e) {
                const n = tl(t),
                  s = tl(e)
                return n < s ? -1 : n > s ? 1 : 0
              })(n, t)
            : a
        })
      : t
  })(
    (function (t, e) {
      if (t)
        return 'Any Difficulty' === e
          ? t.slice()
          : t.slice().filter(t => {
              if (!t.difficulty) return !1
              const n = kc.forName(t.difficulty)
              if (null === n) return !1
              if ('Beginner' === e) return kc.compare(n, kc.EASY) <= 0
              if ('Intermediate' === e) {
                const t = kc.compare(n, kc.BELOW_INTERMEDIATE) >= 0,
                  e = kc.compare(n, kc.HARD) < 0
                return t && e
              }
              return 'Advanced' === e && kc.compare(n, kc.HARD) >= 0
            })
    })(t, n),
    e
  )
}
function Qc (t, e) {
  return Object.assign({}, t, { difficulty: e })
}
function Zc (t, e) {
  return Object.assign({}, t, { instrument: e })
}
function $c (t, e, n) {
  const s = Object.assign({}, t, { tunings: Object.assign({}, t.tunings) })
  return (s.tunings[e] = n), s
}
function tl (t) {
  return t.tracks
    ? 0 === t.tracks.length
      ? 0
      : t.tracks[t.defaultTrack].views
    : 0
}
function el (t) {
  const e = t.tunings[t.instrument]
  return (
    (e && 'ALL TUNINGS' !== e) ||
    'ALL INSTRUMENTS' !== t.instrument ||
    'Any Difficulty' !== t.difficulty
  )
}
function nl (t) {
  return 'ALL INSTRUMENTS' !== t && 'GUITAR' !== t
}
function sl (t) {
  return 'DRUMS' === t
}
function ol (t) {
  const e = t.tunings[t.instrument]
  return {
    difficulty: 'Any Difficulty' !== t.difficulty ? t.difficulty : null,
    instrument: 'ALL INSTRUMENTS' !== t.instrument ? t.instrument : null,
    tuning: e && 'ALL TUNINGS' !== e ? Xc(e)[1] : null
  }
}
function il (t) {
  return me(t) ? 1024 : ve(t) ? 32 : 24
}
function rl (t, e) {
  const n = (function (t) {
    return me(t) ? me : ve(t) ? ve : ye
  })(e)
  return (
    t &&
    t.map(t => {
      if (t.tracks) {
        const e = t.tracks.reduce(
          (t, e, s, o) =>
            n(e.instrumentId) && (-1 === t || e.views > o[t].views) ? s : t,
          -1
        )
        return -1 !== e ? Object.assign({}, t, { defaultTrack: e }) : t
      }
      return t
    })
  )
}
function al (t, e) {
  if (t.difficulty !== e.difficulty && t.instrument !== e.instrument) return !1
  const n = t.tunings[t.instrument],
    s = e.tunings[e.instrument]
  return (!n && !s) || n === s
}
function cl (t, e) {
  const n = document.getElementById(e)
  if (!n) return
  const s = n.getBoundingClientRect(),
    { marginTop: o, marginBottom: i } = getComputedStyle(n),
    r = s.height + parseInt(o, 10) + parseInt(i, 10)
  if (s.top + r < 0) {
    const e = document.getElementById(t)
    e && e.scroll(0, r)
  }
}
function ll (t) {
  let e,
    n = t[0],
    s = 1
  for (; s < t.length; ) {
    const o = t[s],
      i = t[s + 1]
    if (
      ((s += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)
    )
      return
    'access' === o || 'optionalAccess' === o
      ? ((e = n), (n = i(n)))
      : ('call' !== o && 'optionalCall' !== o) ||
        ((n = i(function () {
          for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
            s[o] = arguments[o]
          return n.call(e, ...s)
        })),
        (e = void 0))
  }
  return n
}
const dl = t => {
  async function e (e, n) {
    if (n && !e.artist.songs.hasMore) return
    const s = e.artist.id,
      o = e.artist.pattern,
      i = e.artist.filters
    let r = 0,
      a = null
    n &&
      e.artist.songs.pattern === e.artist.pattern &&
      al(e.artist.songs.filters, e.artist.filters) &&
      ((a = e.artist.songs.list), (r = a.length))
    const c = new Lo()
    try {
      t.dispatch('artist/load:processing', {
        id: s,
        pattern: o,
        filters: i,
        ac: c
      })
      let n = await (function (t, e, n, s) {
        let o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 500,
          i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
        return Ic('/api/artist/'.concat(t, '/songs'), e, n, s, o, i)
      })(s, o, ol(i), c.signal, 50, r)
      if (c.signal.aborted) return
      const l = e.artist.defaultInstrument
      el(i) || (n = rl(n, l))
      let d = null
      if (!e.artist.artists[s])
        if (n.length) d = { artistId: n[0].artistId, name: n[0].artist }
        else if (
          ((d = await (async function (t, e) {
            const n = '/api/artist/'.concat(t),
              s = await ko(() => n, 'artist', e)
            return e.aborted || !s ? null : s
          })(s, c.signal)),
          c.signal.aborted)
        )
          return
      const u = (a ? a.length : 0) + n.length,
        p = 50 === n.length && u < 1e3
      t.dispatch('artist/load:done', {
        id: s,
        songs: a ? [...a, ...n] : n,
        hasMore: p,
        artist: d,
        pattern: o,
        filters: i,
        defaultInstrument: l
      }),
        a ||
          requestAnimationFrame(() => {
            cl('panel-artist', 'top')
          })
    } catch (e) {
      if (c.signal.aborted) return
      console.error(e),
        t.dispatch('artist/load:error', {
          id: s,
          error: e,
          pattern: o,
          filters: i
        })
    }
  }
  const n = t => e(t, !1)
  t.on('artist/load:processing', (t, e) => {
    let { id: n, pattern: s, filters: o, ac: i } = e
    const r = t.artist.loading
    r && r.ac.abort()
    let a = t.artist.songs
    return (
      a.id !== n &&
        (a = {
          id: n,
          list: [],
          defaultInstrument: 24,
          hasMore: !0,
          pattern: s,
          filters: o
        }),
      {
        artist: Object.assign({}, t.artist, {
          songs: a,
          loading: { id: n, filters: o, pattern: s, ac: i }
        })
      }
    )
  }),
    t.on('artist/load:done', (t, e) => {
      let {
        id: n,
        songs: s,
        hasMore: o,
        artist: i,
        pattern: r,
        filters: a,
        defaultInstrument: c
      } = e
      const l = t.artist.loading
      if (!l || l.id !== n || !al(l.filters, a) || l.pattern !== r) return
      let d = t.artist.artists
      return (
        i && (d = Object.assign({}, d, { [i.artistId]: i.name })),
        {
          artist: Object.assign({}, t.artist, {
            songs: {
              id: n,
              list: s,
              defaultInstrument: c,
              hasMore: o,
              pattern: r,
              filters: a
            },
            artists: d,
            loading: null
          })
        }
      )
    }),
    t.on('artist/load:error', (t, e) => {
      let { id: n, error: s, pattern: o, filters: i } = e
      const r = t.artist.loading
      if (r && r.id === n && al(r.filters, i) && r.pattern === o)
        return { artist: Object.assign({}, t.artist, { loading: null }) }
    }),
    t.on('meta/load:done', (t, e) => {
      let { current: n } = e
      return {
        artist: Object.assign({}, t.artist, {
          artists: Object.assign({}, t.artist.artists, {
            [n.artistId]: n.artist
          })
        })
      }
    }),
    t.on('chords/load:done', (t, e) => {
      let { current: n } = e
      return {
        artist: Object.assign({}, t.artist, {
          artists: Object.assign({}, t.artist.artists, {
            [n.artistId]: n.artist
          })
        })
      }
    }),
    t.on('artist/filter', (t, e) => {
      let { id: n, pattern: s, filters: o } = e
      return {
        artist: Object.assign({}, t.artist, { pattern: s, filters: o, id: n })
      }
    }),
    t.on('artist/filter', n),
    t.on('songs/default', (t, e) => {
      let { instrumentId: n } = e
      const s = il(n)
      let o = t.artist.songs.list
      return (
        el(t.artist.songs.filters) ||
          t.artist.songs.defaultInstrument === s ||
          (o = rl(t.artist.songs.list, s)),
        {
          artist: Object.assign({}, t.artist, {
            songs: Object.assign({}, t.artist.songs, {
              list: o,
              defaultInstrument: s
            }),
            defaultInstrument: s
          })
        }
      )
    }),
    t.on('artist/more', t => e(t, !0)),
    t.on('artist/filter/pattern', (t, e) => ({
      artist: Object.assign({}, t.artist, { pattern: e })
    })),
    t.on('artist/filter/pattern', n),
    t.on('artist/filter/difficulty', (t, e) => ({
      artist: Object.assign({}, t.artist, {
        filters: Object.assign({}, t.artist.filters, { difficulty: e })
      })
    })),
    t.on('artist/filter/difficulty', n),
    t.on('artist/filter/instrument', (t, e) => ({
      artist: Object.assign({}, t.artist, {
        filters: Object.assign({}, t.artist.filters, { instrument: e })
      })
    })),
    t.on('artist/filter/instrument', n),
    t.on('artist/filter/tuning', (t, e) => {
      let { instrument: n, tuning: s } = e
      return {
        artist: Object.assign({}, t.artist, {
          filters: $c(t.artist.filters, n, s)
        })
      }
    }),
    t.on('artist/filter/tuning', n),
    t.on('artist/filter/reset', t => ({
      artist: Object.assign({}, t.artist, { filters: Gc })
    })),
    t.on('artist/filter/reset', n),
    t.on('route/change', (e, n) => {
      let { route: s, query: o } = n
      if ('artist' === ll([s, 'optionalAccess', t => t.page])) {
        const n = +s.artistId,
          i = ll([o, 'optionalAccess', t => t.pattern]) || '',
          r = {
            instrument: ll([o, 'optionalAccess', t => t.inst])
              ? et(o.inst)
              : 'ALL INSTRUMENTS',
            tunings: e.artist.filters.tunings,
            difficulty: e.artist.filters.difficulty
          }
        ;(e.artist.songs.list.length &&
          e.artist.songs.id === n &&
          e.artist.songs.pattern === i &&
          al(e.artist.songs.filters, r)) ||
          t.dispatch('artist/filter', { id: n, pattern: i, filters: r })
      }
    })
}
function ul (t) {
  const e = "PLUS",
    n = t.subscription || null,
    s = 'lifetime' === t.sra_license,
    o = !!n && n.isPayPal,
    i = n ? n.startDate : null,
    r = n ? n.cancellationDate : null,
    a =
      i && r
        ? (function (t) {
            const e = new Date(t)
            return e.setDate(e.getDate() + 30), new Date(e).toISOString()
          })(r)
        : null
  return {
    id: +t.id,
    uid: t.uid,
    name: t.name,
    email: t.email,
    admin: t.admin,
    plan: e,
    subscription: n,
    isLegacyPayPal: o,
    isAndroidLifetime: s,
    planStartDate: i,
    planCancelDate: r,
    planEndDate: a
  }
}
async function pl () {
  const t = await fn('/auth/promo/sra')
  return (
    vn(t, 'Cannot be applied. Please contact support'),
    await (async function (t) {
      if (409 === t.status) {
        const e = await t.json()
        throw new dn({ __all__: e.message }, e.message)
      }
    })(t),
    await Sn(t),
    await bn(t),
    mn(t),
    ul(await t.json())
  )
}
async function hl (t, e, n) {
  const s = '/auth/billing/'.concat(n),
    o = { 'X-Recaptcha-Token': await N(n) },
    i = { nonce: t, deviceData: e },
    r = await fn(s, i, o)
  return (
    (function (t) {
      if (403 === t.status) throw new pn()
    })(r),
    await wn(r),
    await Sn(r),
    await bn(r),
    mn(r),
    ul(await r.json())
  )
}
async function gl () {
  const t = await fetch('/auth/billing/cancel', {
    method: 'post',
    credentials: 'include'
  })
  if (500 === t.status || 403 === t.status)
    throw new Error('You have no subscription')
  return await Sn(t), await bn(t), mn(t), ul(await t.json())
}
async function fl () {
  const t = await fetch('/auth/deactivate', {
    method: 'post',
    credentials: 'include'
  })
  if (403 === t.status)
    throw new Error('You already signed out. Please refresh page')
  return mn(t), t.text()
}
function ml () {
  const { dispatch: t, store: e } = C(),
    { payment: n } = e.get()
  p(() => {
    yl(n, t)
  }, [])
}
async function yl (t, e) {
  if (!t.dropin.loading && !t.dropin.ready)
    try {
      e('dropin/init:processing')
      const t = (async function () {
          const t = await fetch('/auth/billing/token', {
            method: 'get',
            credentials: 'include'
          })
          return await Sn(t), mn(t), t.json()
        })(),
        n = import('./dropin.aaaa0eaf.js'),
        [s, o] = await Promise.all([n, t])
      e('dropin/init:done', { module: s, token: o })
    } catch (t) {
      e('dropin/init:error', t)
    }
}
const vl = t => {
    t.on('dropin/init:processing', t => ({
      payment: {
        dropin: Object.assign({}, t.payment.dropin, { loading: !0, ready: !1 })
      }
    })),
      t.on('dropin/init:done', (t, e) => {
        let { module: n, token: s } = e
        return {
          payment: {
            dropin: Object.assign({}, t.payment.dropin, {
              loading: !1,
              ready: !0,
              error: null,
              module: n,
              token: s
            })
          }
        }
      }),
      t.on('dropin/init:error', (t, e) => ({
        payment: {
          dropin: Object.assign({}, t.payment.dropin, { error: e, loading: !1 })
        }
      })),
      t.on('user/signOut', () => ({
        payment: {
          dropin: {
            loading: !1,
            ready: !1,
            module: null,
            token: null,
            error: null
          }
        }
      })),
      t.on('user/signIn', e => yl(e.payment, t.dispatch)),
      t.on('user/signUp', e => yl(e.payment, t.dispatch)),
      t.on('user/googleSignIn', e => yl(e.payment, t.dispatch))
  },
  bl = t => {}
async function wl (t, e) {
  try {
    t('favorites/load:processing'),
      t(
        'favorites/load:done',
        await (async function (t) {
          const e = await fetch('/api/favorites', { credentials: 'include' })
          mn(e)
          const n = await e.json()
          return Ec(wc(n))
        })()
      )
  } catch (e) {
    console.error(e), t('favorites/load:error', e)
  } finally {
    t('meta/setWasFavoriteOnServerRender', void 0)
  }
}
const Sl = (t, e) => {
    const n = t.findIndex(t => t.songId === e)
    return t.slice(0, n).concat(t.slice(n + 1))
  },
  El = (t, e) => wc([...t, e]),
  Il = t => {
    t.on('user/signIn', async () => wl(t.dispatch)),
      t.on('user/googleSignIn', async () => wl(t.dispatch)),
      t.on('favorites/add', async (e, n) => {
        let { songId: s, song: o } = n
        const i = ia()
        try {
          t.dispatch('favorites/add:processing', {
            songId: s,
            song: o,
            actionId: i
          }),
            await (async function (t) {
              const e = '/api/favorites/'.concat(t)
              mn(await fetch(e, { method: 'put', credentials: 'include' }))
            })(s),
            t.dispatch('favorites/add:done', {
              songId: s,
              song: o,
              actionId: i
            })
        } catch (e) {
          console.error(e),
            t.dispatch('favorites/add:error', {
              songId: s,
              song: o,
              actionId: i
            })
        }
      }),
      t.on('favorites/add:processing', (t, e) => {
        let { song: n, actionId: s } = e
        return {
          favorites: Object.assign({}, t.favorites, {
            favorites: El(t.favorites.favorites, n),
            actionId: s,
            loading: !0
          })
        }
      }),
      t.on('favorites/add:done', (t, e) => {
        let { actionId: n } = e
        return t.favorites.actionId === n
          ? {
              favorites: Object.assign({}, t.favorites, {
                actionId: '',
                loading: !1
              })
            }
          : null
      }),
      t.on('favorites/add:error', (t, e) => {
        let { songId: n, actionId: s } = e
        return t.favorites.actionId === s
          ? {
              favorites: Object.assign({}, t.favorites, {
                favorites: Sl(t.favorites.favorites, n),
                actionId: '',
                loading: !1
              })
            }
          : null
      }),
      t.on('favorites/delete', async (e, n) => {
        const s = ia(),
          o = e.favorites.favorites.find(t => t.songId === n)
        if (o)
          try {
            t.dispatch('favorites/delete:processing', {
              songId: n,
              song: o,
              actionId: s
            }),
              await (async function (t) {
                const e = '/api/favorites/'.concat(t)
                mn(await fetch(e, { method: 'delete', credentials: 'include' }))
              })(n),
              t.dispatch('favorites/delete:done', {
                songId: n,
                song: o,
                actionId: s
              })
          } catch (e) {
            console.error(e),
              t.dispatch('favorites/delete:error', {
                songId: n,
                song: o,
                actionId: s
              })
          }
      }),
      t.on('favorites/delete:processing', (t, e) => {
        let { songId: n, actionId: s } = e
        return {
          favorites: Object.assign({}, t.favorites, {
            favorites: Sl(t.favorites.favorites, n),
            actionId: s,
            loading: !0
          })
        }
      }),
      t.on('favorites/delete:done', (t, e) => {
        let { actionId: n } = e
        return t.favorites.actionId === n
          ? {
              favorites: Object.assign({}, t.favorites, {
                actionId: '',
                loading: !1
              })
            }
          : null
      }),
      t.on('favorites/delete:error', (t, e) => {
        let { song: n, actionId: s } = e
        return t.favorites.actionId === s
          ? {
              favorites: Object.assign({}, t.favorites, {
                favorites: El(t.favorites.favorites, n),
                actionId: '',
                loading: !1
              })
            }
          : null
      }),
      t.on('favorites/load:processing', t => ({
        favorites: Object.assign({}, t.favorites, { loading: !0 })
      })),
      t.on('favorites/load:done', (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: e,
          actionId: '',
          loading: !1
        })
      })),
      t.on('favorites/load:error', t => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: [],
          loading: !1
        })
      })),
      t.on('favorites/filter', (t, e) => ({
        favorites: Object.assign({}, t.favorites, { pattern: e })
      })),
      t.on('user/signOut', t => ({
        favorites: Object.assign({}, t.favorites, {
          favorites: [],
          pattern: '',
          actionId: ''
        })
      })),
      t.on('favorites/filter/difficulty', (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          filters: Qc(t.favorites.filters, e)
        })
      })),
      t.on('favorites/filter/instrument', (t, e) => ({
        favorites: Object.assign({}, t.favorites, {
          filters: Zc(t.favorites.filters, e)
        })
      })),
      t.on('favorites/filter/tuning', (t, e) => {
        let { instrument: n, tuning: s } = e
        return {
          favorites: Object.assign({}, t.favorites, {
            filters: $c(t.favorites.filters, n, s)
          })
        }
      }),
      t.on('favorites/filter/reset', t => ({
        favorites: Object.assign({}, t.favorites, { filters: Gc })
      }))
  },
  xl = (t, e) => {
    const n = t.findIndex(t => t.id === e)
    return t.slice(0, n).concat(t.slice(n + 1))
  }
async function Cl (t) {
  try {
    t('setlists/load:processing'),
      t(
        'setlists/load:done',
        await (async function (t) {
          const e = await fetch('/api/setlists', { credentials: 'include' })
          return (
            mn(e),
            (await e.json()).map(t => ({
              name: t.name,
              id: t.id,
              songs: Ec(wc(t.songs))
            }))
          )
        })()
      )
  } catch (e) {
    console.error(e), t('setlists/load:error', e)
  }
}
async function kl (t, e) {
  try {
    t('setlists/create:processing', { name: e })
    const n = await (async function (t) {
      const e = { name: t },
        n = await fn('/api/setlist', e)
      return mn(n), n.json()
    })(e)
    t('setlists/create:done', n.id)
  } catch (e) {
    console.error(e), t('setlists/create:error')
  }
}
const Tl = t => {
    t.on('user/signIn', async () => Cl(t.dispatch)),
      t.on('user/googleSignIn', async () => Cl(t.dispatch)),
      t.on('user/signOut', t => ({
        setlists: Object.assign({}, t.setlists, {
          setlists: [],
          activeSetId: void 0
        })
      })),
      t.on('setlists/load:processing', t => ({
        setlists: Object.assign({}, t.setlists, { loading: !0 })
      })),
      t.on('setlists/load:done', (t, e) => ({
        setlists: Object.assign({}, t.setlists, { setlists: e, loading: !1 })
      })),
      t.on('setlists/load:error', t => ({
        setlists: Object.assign({}, t.setlists, { setlists: [], loading: !1 })
      })),
      t.on('setlists/select', (t, e) => ({
        setlists: Object.assign({}, t.setlists, {
          activeSetId: e,
          removeSetId: void 0
        })
      })),
      t.on('setlists/openCreate', async e => {
        const { createSetForm: n, loading: s } = e.setlists
        !s && n && '' !== n.name.trim() && (await kl(t.dispatch, n.name)),
          t.dispatch('setlists/openCreate:init')
      }),
      t.on('setlists/openCreate:init', t => ({
        setlists: Object.assign({}, t.setlists, { createSetForm: { name: '' } })
      })),
      t.on('setlists/cancelEdit', t => ({
        setlists: Object.assign({}, t.setlists, { createSetForm: void 0 })
      })),
      t.on('setlists/changeName', (t, e) =>
        t.setlists.createSetForm
          ? {
              setlists: Object.assign({}, t.setlists, {
                createSetForm: Object.assign({}, t.setlists.createSetForm, {
                  name: e
                })
              })
            }
          : null
      ),
      t.on('setlists/confirmCreate', e => {
        const { createSetForm: n, loading: s } = e.setlists
        return (
          !s &&
            n &&
            ('' !== n.name.trim()
              ? kl(t.dispatch, n.name)
              : t.dispatch('setlists/cancelCreate')),
          null
        )
      }),
      t.on('setlists/cancelCreate', t => ({
        setlists: Object.assign({}, t.setlists, { createSetForm: void 0 })
      })),
      t.on('setlists/create:processing', (t, e) => {
        let { name: n } = e
        return t.setlists.createSetForm
          ? {
              setlists: Object.assign({}, t.setlists, {
                loading: !0,
                setlists: [
                  { id: 'new', name: n, songs: [] },
                  ...t.setlists.setlists
                ],
                createSetForm: void 0
              })
            }
          : null
      }),
      t.on('setlists/create:done', (t, e) => {
        const n = [...t.setlists.setlists],
          s = n.find(t => 'new' === t.id)
        return (
          s && (s.id = e),
          {
            setlists: Object.assign({}, t.setlists, {
              setlists: n,
              loading: !1
            })
          }
        )
      }),
      t.on('setlists/create:error', t => ({
        setlists: Object.assign({}, t.setlists, {
          setlists: xl(t.setlists.setlists, 'new'),
          loading: !1
        })
      })),
      t.on('setlists/initRemove', (t, e) => {
        const { setlists: n } = t.setlists,
          s = n.find(t => t.id === e)
        return s
          ? { setlists: Object.assign({}, t.setlists, { removeSetId: e }) }
          : null
      }),
      t.on('setlists/confirmRemove', (e, n) => {
        const { removeSetId: s, loading: o, setlists: i } = e.setlists
        if (!o && s === n) {
          const e = i.find(t => t.id === n)
          e &&
            (async function (t, e, n) {
              try {
                t('setlists/remove:processing', { id: e, name: n }),
                  await (async function (t) {
                    const e = '/api/setlist/'.concat(t),
                      n = await fetch(e, {
                        method: 'delete',
                        credentials: 'include'
                      })
                    return mn(n), n.json()
                  })(e),
                  t('setlists/remove:done')
              } catch (e) {
                console.error(e), Cl(t)
              }
            })(t.dispatch, n, e.name)
        }
        return null
      }),
      t.on('setlists/remove:processing', (t, e) => {
        let { id: n } = e
        return {
          setlists: Object.assign({}, t.setlists, {
            setlists: xl(t.setlists.setlists, n),
            activeSetId: void 0,
            loading: !0
          })
        }
      }),
      t.on('setlists/remove:done', t => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 })
      })),
      t.on('setlists/removeSong', async (e, n) => {
        let { songId: s, setlistId: o } = n
        const { setlists: i, loading: r } = e.setlists,
          a = i.find(t => t.id === o)
        if (!r && a && a.songs) {
          const e = a.songs.find(t => t.songId === s)
          if (e)
            try {
              t.dispatch('setlists/removeSong:processing', {
                song: e,
                songId: s,
                setlist: a,
                setlistId: o
              }),
                await (async function (t, e) {
                  const n = '/api/setlist/song/'.concat(t),
                    s = await fn(
                      n,
                      { songId: e },
                      {},
                      { method: 'delete', credentials: 'include' }
                    )
                  return mn(s), s.json()
                })(o, s),
                t.dispatch('setlists/removeSong:done')
            } catch (e) {
              console.error(e), Cl(t.dispatch)
            }
        }
      }),
      t.on('setlists/removeSong:processing', (t, e) => {
        let { songId: n, setlistId: s } = e
        const { setlists: o } = t.setlists,
          i = o.find(t => t.id === s)
        return i
          ? ((i.songs = ((t, e) => {
              const n = t.findIndex(t => t.songId === e)
              return t.slice(0, n).concat(t.slice(n + 1))
            })(i.songs, n)),
            {
              setlists: Object.assign({}, t.setlists, {
                setlists: [...o],
                loading: !0
              })
            })
          : null
      }),
      t.on('setlists/removeSong:done', t => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 })
      })),
      t.on('setlists/addSong', async (e, n) => {
        let { song: s, setlistId: o } = n
        const { setlists: i, loading: r } = e.setlists,
          a = i.find(t => t.id === o)
        if (!r && a && !a.songs.find(t => t.songId === s.songId))
          try {
            t.dispatch('setlists/addSong:processing', {
              song: s,
              setlistId: o,
              setlist: a
            }),
              await (async function (t, e) {
                const n = '/api/setlist/song/'.concat(t),
                  s = { songId: e },
                  o = await fn(n, s)
                return mn(o), o.json()
              })(o, s.songId),
              t.dispatch('setlists/addSong:done')
          } catch (e) {
            console.error(e), Cl(t.dispatch)
          }
      }),
      t.on('setlists/addSong:processing', (e, n) => {
        let { song: s, setlistId: o } = n
        const { setlists: i, markedIds: r } = e.setlists,
          a = [...i],
          c = a.find(t => t.id === o)
        if (c) {
          c.songs = [s, ...c.songs]
          const n = [...r]
          return (
            r.includes(o) ||
              (n.push(o),
              setTimeout(() => {
                t.dispatch('setlists/flushMark', o)
              }, 1500)),
            {
              setlists: Object.assign({}, e.setlists, {
                setlists: a,
                markedIds: n,
                loading: !0
              })
            }
          )
        }
        return null
      }),
      t.on('setlists/addSong:done', t => ({
        setlists: Object.assign({}, t.setlists, { loading: !1 })
      })),
      t.on('setlists/flushMark', (t, e) => {
        const { markedIds: n } = t.setlists
        if (n.includes(e)) {
          const s = n.findIndex(t => t === e)
          return {
            setlists: Object.assign({}, t.setlists, {
              markedIds: n.slice(0, s).concat(n.slice(s + 1))
            })
          }
        }
        return null
      }),
      t.on('setlists/panelClick', e => {
        const { createSetForm: n } = e.setlists
        return n && t.dispatch('setlists/confirmCreate'), null
      })
  },
  Al = t => (t.layer.layer ? { layer: { layer: null } } : null),
  Ol = t => {
    t.on('layer/show', (t, e) => ({ layer: { layer: e } })),
      t.on('route/change', Al),
      t.on('layer/hide', Al),
      t.on('screen/toggleFullscreen', Al)
  }
async function Pl (t, e, n) {
  try {
    t('revisions/load:processing', { songId: e })
    const s = await (async function (t, e) {
      const n = '/api/meta/'.concat(t, '/revisions')
      return await ko(() => n, 'revisions', e)
    })(e, n)
    t('revisions/load:done', { songId: e, revisions: s })
  } catch (s) {
    if (n.aborted) return
    t('revisions/load:error', { songId: e, error: s })
  }
}
const _l = t => {
  t.on('meta/load:processing', (t, e) => {
    let { songId: n } = e
    if (t.revisions.songId && n !== t.revisions.songId)
      return {
        revisions: {
          revisions: null,
          isLoading: !0,
          isError: !1,
          songId: void 0
        }
      }
  }),
    t.on('revisions/load:processing', (t, e) => {
      let { songId: n } = e
      if (t.meta.songId === n)
        return {
          revisions: Object.assign({}, t.revisions, {
            songId: n,
            revisions: null,
            isLoading: !0,
            isError: !1
          })
        }
    }),
    t.on('revisions/load:done', (t, e) => {
      let { revisions: n, songId: s } = e
      if (t.meta.songId === s)
        return {
          revisions: Object.assign({}, t.revisions, {
            revisions: n,
            isLoading: !1,
            isError: !1
          })
        }
    }),
    t.on('revisions/load:error', (t, e) => {
      let { error: n, songId: s } = e
      if (t.meta.songId === s)
        return {
          revisions: Object.assign({}, t.revisions, {
            revisions: null,
            isLoading: !1,
            isError: !0
          })
        }
    })
}
function Ll (t) {
  let e,
    n = t[0],
    s = 1
  for (; s < t.length; ) {
    const o = t[s],
      i = t[s + 1]
    if (
      ((s += 2), ('optionalAccess' === o || 'optionalCall' === o) && null == n)
    )
      return
    'access' === o || 'optionalAccess' === o
      ? ((e = n), (n = i(n)))
      : ('call' !== o && 'optionalCall' !== o) ||
        ((n = i(function () {
          for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++)
            s[o] = arguments[o]
          return n.call(e, ...s)
        })),
        (e = void 0))
  }
  return n
}
const Nl = t => {
    async function e (e, n) {
      if (n && !e.songs.songs.hasMore) return
      const s = e.songs.pattern,
        o = e.songs.filters
      let i = 0,
        r = null
      n &&
        e.songs.songs.pattern === e.songs.pattern &&
        al(e.songs.songs.filters, e.songs.filters) &&
        ((r = e.songs.songs.list), (i = r.length))
      const a = new Lo()
      try {
        t.dispatch('songs/load:processing', { pattern: s, filters: o, ac: a })
        let n = await (function (t, e, n) {
          return Ic(
            '/api/songs',
            t,
            e,
            n,
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 200,
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
          )
        })(s, ol(o), a.signal, 50, i)
        if (a.signal.aborted) return
        const c = e.songs.defaultInstrument
        el(o) || (n = rl(n, c))
        const l = (r ? r.length : 0) + n.length,
          d = 50 === n.length && l < 500
        t.dispatch('songs/load:done', {
          songs: r ? [...r, ...n] : n,
          hasMore: d,
          defaultInstrument: c,
          pattern: s,
          filters: o
        }),
          r ||
            requestAnimationFrame(() => {
              cl('panel-search', 'top')
            })
      } catch (e) {
        if (a.signal.aborted) return
        console.error(e),
          t.dispatch('songs/load:error', { error: e, pattern: s, filters: o })
      }
    }
    const n = t => e(t, !1)
    t.on('songs/load:processing', (t, e) => {
      let { pattern: n, filters: s, ac: o } = e
      return (
        t.songs.loading && t.songs.loading.ac.abort(),
        {
          songs: Object.assign({}, t.songs, {
            loading: { filters: s, pattern: n, ac: o }
          })
        }
      )
    }),
      t.on('songs/load:done', (t, e) => {
        let {
          songs: n,
          hasMore: s,
          pattern: o,
          filters: i,
          defaultInstrument: r
        } = e
        const a = t.songs.loading
        if (a && al(a.filters, i) && a.pattern === o)
          return {
            songs: Object.assign({}, t.songs, {
              songs: {
                list: n,
                defaultInstrument: r,
                hasMore: s,
                pattern: o,
                filters: i
              },
              loading: null
            })
          }
      }),
      t.on('songs/load:error', (t, e) => {
        let { error: n, pattern: s, filters: o } = e
        const i = t.songs.loading
        if (i && al(i.filters, o) && i.pattern === s)
          return { songs: Object.assign({}, t.songs, { loading: null }) }
      }),
      t.on('songs/filter', (t, e) => {
        let { pattern: n, filters: s } = e
        return { songs: Object.assign({}, t.songs, { pattern: n, filters: s }) }
      }),
      t.on('songs/filter', n),
      t.on('songs/default', (t, e) => {
        let { instrumentId: n } = e
        const s = il(n)
        let o = t.songs.songs.list
        return (
          el(t.songs.songs.filters) ||
            t.songs.songs.defaultInstrument === s ||
            (o = rl(t.songs.songs.list, s)),
          {
            songs: Object.assign({}, t.songs, {
              songs: Object.assign({}, t.songs.songs, {
                list: o,
                defaultInstrument: s
              }),
              defaultInstrument: s
            })
          }
        )
      }),
      t.on('songs/more', t => e(t, !0)),
      t.on('songs/filter/pattern', (t, e) => ({
        songs: Object.assign({}, t.songs, { pattern: e })
      })),
      t.on('songs/filter/pattern', n),
      t.on('songs/filter/difficulty', (t, e) => ({
        songs: Object.assign({}, t.songs, {
          filters: Object.assign({}, t.songs.filters, { difficulty: e })
        })
      })),
      t.on('songs/filter/difficulty', n),
      t.on('songs/filter/instrument', (t, e) => ({
        songs: Object.assign({}, t.songs, {
          filters: Object.assign({}, t.songs.filters, { instrument: e })
        })
      })),
      t.on('songs/filter/instrument', n),
      t.on('songs/filter/tuning', (t, e) => {
        let { instrument: n, tuning: s } = e
        return {
          songs: Object.assign({}, t.songs, {
            filters: $c(t.songs.filters, n, s)
          })
        }
      }),
      t.on('songs/filter/tuning', n),
      t.on('songs/filter/reset', t => ({
        songs: Object.assign({}, t.songs, { filters: Gc })
      })),
      t.on('songs/filter/reset', n),
      t.on('route/change', (e, n) => {
        let { route: s, query: o } = n
        if ('search' === Ll([s, 'optionalAccess', t => t.page])) {
          const n = Ll([o, 'optionalAccess', t => t.pattern]) || '',
            s = {
              instrument: Ll([o, 'optionalAccess', t => t.inst])
                ? et(o.inst)
                : 'ALL INSTRUMENTS',
              tunings: e.songs.filters.tunings,
              difficulty: e.songs.filters.difficulty
            }
          ;(e.songs.songs.list.length &&
            e.songs.songs.pattern === n &&
            al(e.songs.songs.filters, s)) ||
            t.dispatch('songs/filter', { pattern: n, filters: s })
        }
      })
  },
  Rl = {
    song: null,
    songSubmitted: !1,
    songError: null,
    revision: null,
    revisionSubmitted: !1,
    revisionError: null
  }
async function jl (t, e, n) {
  try {
    const s = await (async function (t, e) {
      const n = new FormData()
      n.append('file', t.file),
        n.append('title', t.title),
        n.append('artist', t.artist),
        n.append('difficulty', t.difficulty)
      const s = await fetch('/api/song', {
        signal: e,
        method: 'post',
        credentials: 'include',
        body: n
      })
      if (e && e.aborted) return { songSubmitted: !1, song: null }
      await En(s), await In(s)
      const o = {
        songId: (i = await s.json()).id,
        artistId: i.artist.id,
        artist: i.artist.name,
        title: i.title,
        defaultTrack: 0,
        tracks: []
      }
      var i
      return { songSubmitted: !!s.ok, song: o }
    })(e, n)
    if (n && n.aborted) return
    if ((t('upload/song:uploaded', s), s.songSubmitted)) {
      const e = await Bo(s.song.songId)
      e && t('navigate', je(e, 0))
    }
  } catch (e) {
    throw (t('upload/song:error', { error: e }), e)
  }
}
async function Ml (t, e, n) {
  try {
    const s = await (async function (t, e) {
      const n = new FormData()
      n.append('file', t.file),
        n.append('songId', t.songId),
        n.append('summary', t.summary),
        t.force && n.append('force', t.force.toString())
      const s = await fetch('/api/revision', {
        signal: e,
        method: 'post',
        credentials: 'include',
        body: n
      })
      if (e && e.aborted) return
      await En(s), await In(s)
      const o = {
        revisionId: +(i = await s.json()).id,
        songId: +i.song.id,
        artist: i.song.artist.name,
        title: i.song.title
      }
      var i
      return { revisionSubmitted: !!s.ok, revision: o }
    })(e, n)
    if (n && n.aborted) return
    if ((t('upload/revision:uploaded', s), s.revisionSubmitted)) {
      const e = await Bo(s.revision.songId, s.revision.revisionId)
      e && t('navigate', je(e, 0, e.revisionId))
    }
  } catch (e) {
    throw (t('upload/revision:error', { error: e }), e)
  }
}
const Dl = t => {
    t.on('upload/song:uploaded', (t, e) => {
      let { songSubmitted: n, song: s } = e
      return {
        uploads: Object.assign({}, t.uploads, {
          songError: null,
          songSubmitted: n,
          song: s
        })
      }
    }),
      t.on('upload/reset', () => ({ uploads: Rl })),
      t.on('upload/song:error', (t, e) => {
        let { error: n } = e
        return { uploads: Object.assign({}, t.uploads, { songError: n }) }
      }),
      t.on('upload/revision:uploaded', (t, e) => {
        let { revisionSubmitted: n, revision: s } = e
        return {
          uploads: Object.assign({}, t.uploads, {
            revisionError: null,
            revisionSubmitted: n,
            revision: s
          })
        }
      }),
      t.on('upload/revision:error', (t, e) => {
        let { error: n } = e
        return { uploads: Object.assign({}, t.uploads, { revisionError: n }) }
      })
  },
  Bl = t => {
    t.on('demo/activate', t => ({
      demo: { active: !0, enabled: 27 === t.meta.songId }
    })),
      t.on('meta/load:processing', (t, e) => {
        let { songId: n } = e
        return t.demo.active
          ? 27 === n
            ? { demo: { active: !0, enabled: !0 } }
            : { demo: { active: !1, enabled: !1 } }
          : null
      })
  },
  Fl = t =>
    !!xn('hasUnsubscribedFromPromo') || !!t.user.hasPlus || !!t.promo.active
function Ul (t) {
  const { position: e } = t.player,
    n = t.part.current,
    s = [
      ...t.promo.playbackPositionEvents.filter(t => t.time > Date.now() - 12e4)
    ]
  let o = 0
  if (n) {
    const t = Nr(n, e.cursor, 'left'),
      i = ''
        .concat(n.revisionId, ':')
        .concat(n.partId, ':')
        .concat(t.measureLayout.measure.index)
    s.push({ time: Date.now(), key: i }),
      (o = s.filter(t => t.key === i).length)
  }
  return { events: s, relatedEvents: o }
}
function Hl (t, e) {
  if (Fl(t)) return
  if (!t.player.shouldPlay || !t.player.canPlay) return
  let n = t.promo.active
  const { events: s, relatedEvents: o } = Ul(t)
  return (
    o >= 3 &&
      Nn(kn.PROMO_CONTEXT_SLOWDOWN) &&
      ((n = 'slowdown'), t.device.isPhone && e('player/stopPlay')),
    {
      promo: Object.assign({}, t.promo, {
        playbackPositionEvents: s,
        active: n
      })
    }
  )
}
function ql (t, e) {
  if (Fl(t)) return
  if (!t.player.shouldPlay || !t.player.canPlay) return
  if (!Ln()[kn.PROMO_CONTEXT_SLOWDOWN]) return
  let n = t.promo.active
  const { events: s, relatedEvents: o } = Ul(t)
  return (
    o >= 3 &&
      Nn(kn.PROMO_CONTEXT_LOOP) &&
      ((n = 'loop'), t.device.isPhone && e('player/stopPlay')),
    {
      promo: Object.assign({}, t.promo, {
        playbackPositionEvents: s,
        active: n
      })
    }
  )
}
function Gl (t, e) {
  if (Fl(t) || !t.player.shouldPlay || !t.player.canPlay) return
  let n = t.promo.active
  const { events: s, bassEvents: o } = (function (t) {
    const e = t.part.current
    let n = 'other'
    e &&
      (ye(e.instrumentId) && (n = 'guitar'),
      ve(e.instrumentId) && (n = 'bass'),
      me(e.instrumentId) && (n = 'drums'))
    const s = [...t.promo.playbackTypeEvents, { time: Date.now(), type: n }],
      o = s.filter(t => 'bass' === t.type).length
    return { events: s, bassEvents: o }
  })(t)
  return (
    5 === o &&
      Nn(kn.PROMO_CONTEXT_SOLO) &&
      ((n = 'solo'), t.device.isPhone && e('player/stopPlay')),
    { promo: Object.assign({}, t.promo, { playbackTypeEvents: s, active: n }) }
  )
}
const Wl = t => {
    if (!xn('hasUnsubscribedFromPromo')) {
      const e = Ln()
      if (
        (e[kn.PROMO_CONTEXT_SLOWDOWN] ||
          (t.on('player/moveCursor', e => Hl(e, t.dispatch)),
          t.on('player/togglePlay', e => Hl(e, t.dispatch))),
        e[kn.PROMO_CONTEXT_LOOP] ||
          (t.on('player/moveCursor', e => ql(e, t.dispatch)),
          t.on('player/togglePlay', e => ql(e, t.dispatch))),
        e[kn.PROMO_CONTEXT_NO_ADS] ||
          t.on('curiosity/vpt10', e =>
            (function (t, e) {
              if (Fl(t)) return
              let n = t.promo.active
              const { isPhone: s } = t.device,
                { canPlay: o, shouldPlay: i } = t.player
              return (
                t.screen.viewport.height < (s ? 740 : 900) &&
                  Nn(kn.PROMO_CONTEXT_NO_ADS) &&
                  ((n = 'noads'), s && o && i && e('player/stopPlay')),
                { promo: Object.assign({}, t.promo, { active: n }) }
              )
            })(e, t.dispatch)
          ),
        !e[kn.PROMO_CONTEXT_PRINT])
      ) {
        let e
        t.on('meta/load:done', n => {
          'tab' !== n.route.page ||
            n.device.isPhone ||
            (clearTimeout(e),
            (e = setTimeout(() => t.dispatch('promo/print:fire'), 2e4)))
        }),
          t.on('route/change', () => clearTimeout(e)),
          t.on('promo/print:fire', t =>
            (function (t) {
              if (Fl(t)) return
              let e = t.promo.active
              return (
                Nn(kn.PROMO_CONTEXT_PRINT) && (e = 'print'),
                { promo: Object.assign({}, t.promo, { active: e }) }
              )
            })(t)
          )
      }
      if (!e[kn.PROMO_CONTEXT_MUTE]) {
        let e
        t.on('player/togglePlay', e =>
          (function (e) {
            if (!Fl(e))
              if (e.player.shouldPlay && e.player.canPlay) {
                const n = e.part.current
                if (!n) return
                const s = n.timestamps[n.timestamps.length - 1]
                if (s > 2e4) {
                  const e = Math.floor(s / 3)
                  t.dispatch('promo/mute:start', { delay: e })
                }
              } else t.dispatch('promo/mute:clear')
          })(e)
        ),
          t.on('promo/mute:start', (n, s) => {
            let { delay: o } = s
            clearTimeout(e),
              (e = setTimeout(() => t.dispatch('promo/mute:fire'), o))
          }),
          t.on('route/change', () => clearTimeout(e)),
          t.on('promo/mute:clear', () => clearTimeout(e)),
          t.on('promo/mute:fire', t =>
            (function (t) {
              if (Fl(t)) return
              let e = t.promo.active
              const n = t.promo.halfPlayed + 1
              return (
                n >= 2 && Nn(kn.PROMO_CONTEXT_MUTE) && (e = 'mute'),
                {
                  promo: Object.assign({}, t.promo, {
                    halfPlayed: n,
                    active: e
                  })
                }
              )
            })(t)
          )
      }
      if (
        (e[kn.PROMO_CONTEXT_SOLO] ||
          (t.on('player/moveCursor', e => Gl(e, t.dispatch)),
          t.on('player/togglePlay', e => Gl(e, t.dispatch))),
        !e[kn.PROMO_CONTEXT_RETUNE])
      ) {
        let e
        t.on('meta/load:done', n => {
          'tab' === n.route.page &&
            (clearTimeout(e),
            (e = setTimeout(() => t.dispatch('promo/retune:fire'), 1e4)))
        }),
          t.on('route/change', () => clearTimeout(e)),
          t.on('promo/retune:fire', t =>
            (function (t) {
              if (Fl(t)) return
              let e = t.promo.active
              const n = t.part.current
              if (n) {
                const t = n.tuning && Bc(n.instrumentId, n.tuning)
                t &&
                  0 !== t.pitch &&
                  Nn(kn.PROMO_CONTEXT_RETUNE) &&
                  (e = 'retune')
              }
              return { promo: Object.assign({}, t.promo, { active: e }) }
            })(t)
          )
      }
      t.on('promo/dismiss', t => {
        switch (t.promo.active) {
          case 'slowdown':
            _n(kn.PROMO_CONTEXT_SLOWDOWN)
            break
          case 'loop':
            _n(kn.PROMO_CONTEXT_LOOP)
            break
          case 'noads':
            _n(kn.PROMO_CONTEXT_NO_ADS)
            break
          case 'print':
            _n(kn.PROMO_CONTEXT_PRINT)
            break
          case 'mute':
            _n(kn.PROMO_CONTEXT_MUTE)
            break
          case 'solo':
            _n(kn.PROMO_CONTEXT_SOLO)
            break
          case 'retune':
            _n(kn.PROMO_CONTEXT_RETUNE)
        }
        return { promo: Object.assign({}, t.promo, { active: !1 }) }
      }),
        t.on(
          'promo/unsubscribe',
          t => (
            Cn('hasUnsubscribedFromPromo', new Date().toUTCString()),
            { promo: Object.assign({}, t.promo, { active: !1 }) }
          )
        )
    }
  },
  Vl = () => ({
    isDeleted: !1,
    editor: { canDelete: !1, processingDeletion: !1 }
  }),
  Xl = t => {
    const { user: e } = t
    let n = !1
    if (e.isLoggedIn && t.meta.current) {
      const { editors: s } = t.meta.current
      n = e.isAdmin || (s && 1 === s.length && s[0] === e.profile.id)
    }
    return {
      isDeleted: !1,
      editor: Object.assign({}, t.editor, { canDelete: n })
    }
  },
  zl = t => {
    t.on('meta/load:done', Xl),
      t.on('user/init', Xl),
      t.on('user/signIn', Xl),
      t.on('user/googleSignIn', Xl),
      t.on('user/signUp', Xl),
      t.on('user/signOut', Vl),
      t.on(
        'editor/delete',
        (e, n) => (
          (async function (t, e) {
            try {
              const n = new Lo(),
                s = await (async function (t, e) {
                  const n = '/api/song/'.concat(t.songId),
                    s = await fetch(n, {
                      method: 'delete',
                      credentials: 'include',
                      signal: e
                    })
                  return e && e.aborted
                    ? { success: !1 }
                    : (mn(s),
                      await Sn(s),
                      vn(s, 'Forbidden'),
                      { success: !!s.ok })
                })(e, n.signal)
              s.success
                ? t('editor/delete:done', { meta: e })
                : t(
                    'editor/delete:error',
                    new Error(
                      'Oops, something went wrong. Please try again later.'
                    )
                  ),
                n.abort.bind(n)
            } catch (e) {
              t('editor/delete:error', e)
            }
          })(t.dispatch, n),
          {
            isDeleted: !0 === e.isDeleted,
            editor: Object.assign({}, e.editor, { processingDeletion: !0 })
          }
        )
      ),
      t.on('editor/delete:done', t => ({
        isDeleted: !0,
        editor: Object.assign({}, t.editor, { processingDeletion: !1 })
      })),
      t.on('editor/delete:error', (t, e) => {
        const n = e.message
        return (
          window && window.alert('Error: '.concat(n)),
          {
            isDeleted: !0 === t.isDeleted,
            editor: Object.assign({}, t.editor, { processingDeletion: !1 })
          }
        )
      }),
      t.on('editor/sound:toggle', (e, n) => {
        let { version: s } = n
        e.meta.current &&
          ic(t, e.meta.songId, e.meta.partId, e.meta.current.revisionId, s)
      }),
      t.on('editor/sound:generate', (t, e) => {
        let { version: n } = e
        t.meta.current &&
          (async function (t, e) {
            try {
              const n = new Lo()
              await (async function (t, e, n) {
                const s = await fn('/api/sound/generate', {
                  revisionId: t,
                  version: e
                })
                ;(n && n.aborted) || mn(s)
              })(t, e, n.signal),
                alert('Done!')
            } catch (t) {
              console.error(t), alert('Error: '.concat(t.message))
            }
          })(t.meta.current.revisionId, n)
      })
  }
function Yl (t, e, n) {
  if (!e) return !1
  let s = t
  return (
    void 0 === s &&
      ((s = (function (t) {
        const e = {}
        t.voices > 1 && (e.polyphony = !0)
        for (const n of t.measures) {
          n.repeat && (e.repeat = !0),
            n.tripletFeel && (e.swingRhythm = !0),
            n.alternateEnding && (e.alternateEnding = !0)
          for (const t of n.voices)
            if (!t.rest)
              for (const n of t.beats) {
                n.letRing && (e.letRing = !0),
                  3 === n.tuplet && (e.triplet = !0),
                  n.dotted && (e.dot = !0),
                  (n.upStroke || n.downStroke) && (e.upDownStroke = !0),
                  n.palmMute && (e.palmMute = !0),
                  n.chord && (e.chord = !0),
                  n.wideVibrato && (e.wideVibrato = !0),
                  n.tapping && (e.tapping = !0)
                for (const t of n.notes)
                  t.hp && ((e.hammerOn = !0), (e.pullOff = !0)),
                    t.tie && (e.tie = !0),
                    t.bend &&
                      (t.bend.points[0].tone > t.bend.points[1].tone &&
                        (e.releaseBend = !0),
                      (e.bend = !0)),
                    t.ghost && (e.ghostNote = !0),
                    t.dead && (e.deadNote = !0),
                    t.vibrato && (e.vibrato = !0),
                    t.rightSlide &&
                      ('legato' !== t.rightSlide
                        ? (e.legatoSlide = !0)
                        : (e.slide = !0)),
                    'natural' === t.harmonic && (e.naturalHarmonic = !0),
                    'pinch' === t.harmonic && (e.pinchHarmonic = !0),
                    1 === t.accentuated && (e.accented = !0),
                    2 === t.accentuated && (e.heavyAccented = !0),
                    t.staccato && (e.staccato = !0),
                    t.tremolo && (e.tremolo = !0)
              }
        }
        return e
      })(e)),
      n('tabFeatures/set', { features: s })),
    s
  )
}
const Jl = t => {
    t.on('tabFeatures/set', (t, e) => {
      let { features: n } = e
      return { tabFeatures: n }
    }),
      t.on('meta/load:processing', () => ({ tabFeatures: void 0 }))
  },
  Kl = [
    'touchstart',
    'click',
    'scroll',
    'mousewheel',
    'mousemove',
    'mousedown'
  ],
  Ql = t => t && t.replace(/["'=!+#*~;^()<>[\],&]/gi, '')
function Zl (t, e) {
  const {
      dispatch: s,
      ads: o,
      meta: i,
      chords: r,
      route: a,
      routeContent: c
    } = C('ads', 'meta', 'chords', 'route', 'routeContent'),
    l = window.__HAS_BEEN_SEEN_BEFORE__ || Ia.hasFirstActivity,
    [d, u] = n(l)
  p(() => {
    if (!d) {
      const t = () => {
        u(!0), Kl.forEach(e => window.removeEventListener(e, t))
      }
      return (
        Kl.forEach(e => window.addEventListener(e, t)),
        () => Kl.forEach(e => window.removeEventListener(e, t))
      )
    }
  }, [d]),
    p(() => {
      if (!d || o.notsyFailed) return
      if (!o.notsyLoaded) return void s('notsy/load')
      if ('tab' === a.page) {
        const { songId: t } = a
        if (i.loading || +t !== i.songId) return
      }
      if ('chords' === a.page) {
        const { songId: t } = a
        if (r.loading || +t !== r.songId) return
      }
      const n = {
        route: a,
        block: t,
        options: e,
        personalization: !0,
        songId: 0,
        artist: '',
        song: ''
      }
      'tab' === c.page &&
        ((n.artist = Ql(i.current && i.current.artist)),
        (n.song = Ql(i.current && i.current.title)),
        (n.songId = i.songId)),
        'chords' === c.page &&
          ((n.artist = Ql(r.current && r.current.artist)),
          (n.song = Ql(r.current && r.current.title)),
          (n.songId = r.songId)),
        s('notsy/fire', n)
    }, [o, t, d, i, r, e, a, c])
}
const $l = t => {
  t.on('notsy/load', () =>
    (async function (t) {
      try {
        await (async function () {
          return 'dev' === window.__STAGE__
            ? null
            : Promise.all([
                P(
                  'https://www.googletagservices.com/tag/js/gpt.js',
                  '__LOADED_GTP__'
                ),
                P(
                  'https://cdn-b.notsy.io/sng/' +
                    ('stage' === window.__STAGE__ ? 'alpha.js' : 'prebid.js'),
                  '__LOADED_NOTSY__'
                )
              ])
        })(),
          t('notsy/load:done', { loaded: window.__LOADED_NOTSY__ })
      } catch (e) {
        t('notsy/load:error')
      }
    })(t.dispatch)
  ),
    t.on('notsy/load:done', (t, e) => {
      let { loaded: n } = e
      return {
        ads: Object.assign({}, t.ads, { notsyLoaded: n, notsyFailed: !n })
      }
    }),
    t.on('notsy/load:error', t => ({
      ads: Object.assign({}, t.ads, { notsyLoaded: !1, notsyFailed: !0 })
    })),
    t.on('notsy/fire', (t, e) => {
      !(function (t) {
        let {
          route: e,
          block: n,
          options: s,
          personalization: o,
          songId: i,
          artist: r,
          song: a,
          device: c
        } = t
        if (!s.isForced && e.page !== s.page) return
        const l = !o,
          d = []
        s.isTargeted &&
          (i && d.push(['songID', i]),
          r && d.push(['artist', r]),
          a && d.push(['song', a])),
          window.notsyInit({ page: n, npa: l, targeting: d, gdpr: c.hasGDPR })
      })(Object.assign({}, e, { device: t.device }))
    })
}
async function td (t, e) {
  const n = t.get().textpage
  if (n.slug !== e || n.isError)
    try {
      t.dispatch('textpage/load:processing', e)
      const n = await (async function (t) {
        const e = '/api/textpage/' + t,
          n = await fetch(e)
        return mn(n), n.json()
      })(e)
      n.slug === t.get().textpage.slug && t.dispatch('textpage/load:done', n)
    } catch (n) {
      e === t.get().textpage.slug && t.dispatch('textpage/load:error', n)
    }
}
const ed = t => {
  t.on('textpage/load:processing', (t, e) => ({
    textpage: { slug: e, title: '', content: '', isLoading: !0, isError: !1 }
  })),
    t.on('textpage/load:done', (t, e) => ({
      textpage: Object.assign({}, e, { isLoading: !1, isError: !1 })
    })),
    t.on('textpage/load:error', t => ({
      textpage: Object.assign({}, t.textpage, {
        title: '',
        content: '',
        isLoading: !1,
        isError: !0
      })
    }))
}
async function nd (t) {
  if (void 0 === t.get().faq.content)
    try {
      t.dispatch('faq/load:processing')
      const e = await (async function () {
        const t = await fetch('/api/faq/compact')
        return mn(t), (await t.json()).filter(t => t.isSRW)
      })()
      t.dispatch('faq/load:done', e)
    } catch (e) {
      t.dispatch('faq/load:error', e)
    }
}
const sd = t => {
    t.on('faq/load:processing', () => ({
      faq: { content: void 0, isLoading: !0, isError: !1 }
    })),
      t.on('faq/load:done', (t, e) => ({
        faq: { content: e, isLoading: !1, isError: !1 }
      })),
      t.on('faq/load:error', () => ({
        faq: { content: void 0, isLoading: !1, isError: !0 }
      }))
  },
  od = ['chordpro1', 'chordpro2', 'chordpro3'],
  id = t => {
    t.on('chords/load:processing', (t, e) => {
      let { songId: n, chordsRevisionId: s, ac: o } = e
      return {
        chords: Object.assign({}, t.chords, {
          loading: { songId: n, chordsRevisionId: s, ac: o }
        })
      }
    }),
      t.on('chords/load:done', (t, e) => {
        let { songId: n, chordsRevisionId: s, current: o } = e
        return {
          chords: Object.assign({}, t.chords, {
            current: o,
            songId: n,
            chordsRevisionId: s,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1
          })
        }
      }),
      t.on('chords/load:error', (t, e) => {
        let { songId: n, chordsRevisionId: s, error: o } = e
        return {
          chords: Object.assign({}, t.chords, {
            current: null,
            songId: n,
            chordsRevisionId: s,
            isFailed: !0,
            isNetworkFailed: o instanceof gn && 0 === o.status,
            isNotFound:
              o instanceof gn && (404 === o.status || 400 === o.status),
            loading: null
          })
        }
      }),
      t.on('route/change', (e, n) => {
        let { routeContent: s } = n
        s &&
          'chords' === s.page &&
          (async function (t, e, n) {
            const s = new Lo()
            try {
              const o = t.get().chords,
                i = o.loading
              i && i.ac.abort()
              const r = o.songId !== e,
                a = o.chordsRevisionId !== n
              if (!o.isFailed && o.current && !r && !a)
                return void (await t.dispatch('chords/load:done', {
                  songId: e,
                  chordsRevisionId: n,
                  current: o.current
                }))
              if (
                (await t.dispatch('chords/load:processing', {
                  songId: e,
                  chordsRevisionId: n,
                  songHasChanged: r,
                  chordsRevisionHasChanged: a,
                  ac: s
                }),
                s.signal.aborted)
              )
                return
              let c = t.get().chords.current
              if (
                (!c || c.songId !== e || (n && c.chordsRevisionId !== n)) &&
                ((c = await (async function (t, e, n) {
                  const s = '/api/chords/'
                      .concat(t)
                      .concat(e ? '/'.concat(e) : ''),
                    o = await ko(() => s, 'meta', n)
                  return n.aborted || !o ? null : o
                })(e, n, s.signal)),
                s.signal.aborted || !c)
              )
                return
              await t.dispatch('chords/load:done', {
                songId: e,
                chordsRevisionId: n,
                current: c
              })
            } catch (o) {
              if (s.signal.aborted) return
              t.dispatch('chords/load:error', {
                songId: e,
                chordsRevisionId: n,
                error: o
              })
            }
          })(t, s.songId, s.chordsRevisionId)
      })
  },
  rd = t => {
    t.on('chords/load:done', async (e, n) => {
      let { current: s } = n
      const o = s.songId,
        i = s.chordsRevisionId,
        r = new Lo()
      try {
        const n = e.chordpro.loading
        if (n) {
          if (o === n.songId && i === n.chordsRevisionId) return
          n.ac.abort()
        }
        if (
          !e.chordpro.isFailed &&
          e.chordpro.current &&
          o === e.chordpro.songId &&
          i === e.chordpro.chordsRevisionId
        )
          return void t.dispatch('chordpro/load:done', {
            songId: o,
            chordsRevisionId: i,
            current: e.chordpro.current
          })
        await t.dispatch('chordpro/load:processing', {
          songId: o,
          chordsRevisionId: i,
          ac: r
        })
        const a = await (async function (t, e, n, s) {
          let o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { Accept: 'text/plain' }
          const i = 'chordpro_'.concat(e, '_').concat(n || ''),
            r = await xo(i)
          if (r && r.data) return r.data
          const a = ''
              .concat(t, '/')
              .concat(e, '/')
              .concat(n, '.chordpro'),
            c = t => {
              const e = (t % od.length) + 1
              return e < od.length
                ? 'https://'.concat(od[e], '.songsterr.com/').concat(a)
                : 'https://www.songsterr.com/cdn/chordpro/'.concat(a)
            },
            l = await ko(c, 'chordpro', s, o)
          return !l || s.aborted ? null : (await Co(i, { data: l }), l)
        })(o, i, s.chordpro, r.signal)
        if (!a || r.signal.aborted) return
        await t.dispatch('chordpro/load:raw', {
          songId: o,
          chordsRevisionId: i,
          chordpro: a,
          signal: r.signal
        })
      } catch (e) {
        if ((console.log('chordpro error', r.signal.aborted), r.signal.aborted))
          return
        await t.dispatch('chordpro/load:error', {
          songId: o,
          chordsRevisionId: i,
          error: e
        })
      }
    }),
      t.on('chordpro/load:processing', (t, e) => {
        let { songId: n, chordsRevisionId: s, ac: o } = e
        return {
          chordpro: Object.assign({}, t.chordpro, {
            loading: { songId: n, chordsRevisionId: s, ac: o }
          })
        }
      }),
      t.on('chordpro/load:raw', async (e, n) => {
        let { songId: s, chordsRevisionId: o, chordpro: i } = n
        try {
          const e = (0, (await import('./split.36d4302b.js')).split)(i)
          t.dispatch('chordpro/load:done', {
            songId: s,
            chordsRevisionId: o,
            current: e
          })
        } catch (e) {
          t.dispatch('chordpro/load:error', {
            songId: s,
            chordsRevisionId: o,
            error: e
          })
        }
      }),
      t.on('chordpro/load:done', (t, e) => {
        let { songId: n, chordsRevisionId: s, current: o } = e
        return {
          chordpro: Object.assign({}, t.chordpro, {
            current: o,
            songId: n,
            chordsRevisionId: s,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1,
            loading: null
          })
        }
      }),
      t.on('chordpro/load:error', (t, e) => {
        let { songId: n, chordsRevisionId: s, error: o } = e
        return {
          chordpro: Object.assign({}, t.chordpro, {
            current: null,
            songId: n,
            chordsRevisionId: s,
            isFailed: !0,
            isNetworkFailed: o instanceof gn && 0 === o.status,
            isNotFound:
              o instanceof gn && (404 === o.status || 400 === o.status),
            loading: null
          })
        }
      }),
      t.on('chords/load:processing', (t, e) => ({
        chordpro: Object.assign({}, t.chordpro, { current: null })
      })),
      t.on('chordpro/load:error', (t, e) => {
        let { error: n } = e
        'Sentry' in window &&
          'function' == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n)
      })
  },
  ad = t => {
    t.on('cursor/failed', () => ({ cursor: { isFailed: !0 } })),
      t.on('cursor/failed', (t, e) => {
        let { error: n } = e
        try {
          'Sentry' in window &&
            'function' == typeof window.Sentry.captureException &&
            window.Sentry.captureException(n)
        } catch (t) {}
        console.error(n)
      }),
      t.on('meta/load:processing', (t, e) => {
        let { songHasChanged: n } = e
        if (n) return { cursor: { isFailed: !1 } }
      }),
      t.on('part/load:done', () => ({ cursor: { isFailed: !1 } }))
  },
  cd = t => {
    t.on('route/change', (e, n) => {
      let { routeContent: s, queryContent: o } = n
      !s ||
        ('tag' !== s.page && 'tags' !== s.page) ||
        (async function (t, e, n) {
          const s = new Lo()
          try {
            const r = t.get().tags,
              a = r.loading
            if (
              (a && a.ac.abort(),
              (o = e),
              (i = r.route) &&
                (('tag' === o.page && 'tag' === i.page && o.name === i.name) ||
                  ('tags' === o.page && 'tags' === i.page)) &&
                (function (t, e) {
                  return (!t.page && !e.page) || t.page === e.page
                })(n, r.query))
            )
              return void (await t.dispatch('tags/load:done', {
                route: e,
                query: n,
                content: r.content
              }))
            if (
              (await t.dispatch('tags/load:processing', {
                route: e,
                query: n,
                ac: s
              }),
              s.signal.aborted)
            )
              return
            const c = await (async function (t, e, n) {
              let s
              s =
                'tags' === t.page
                  ? '/api/next/tags'.concat(
                      e.page ? '?page='.concat(e.page) : ''
                    )
                  : '/api/next/tags/'
                      .concat(t.name)
                      .concat(e.page ? '?page='.concat(e.page) : '')
              const o = s,
                i = await ko(() => o, 'tags', n)
              return n.aborted || !i ? null : i
            })(e, n, s.signal)
            await t.dispatch('tags/load:done', {
              route: e,
              query: n,
              content: c
            })
          } catch (o) {
            if (s.signal.aborted) return
            console.error(o),
              await t.dispatch('tags/load:error', {
                route: e,
                query: n,
                error: o
              })
          }
          var o, i
        })(t, s, o || {})
    }),
      t.on('tags/load:processing', (t, e) => {
        let { route: n, query: s, ac: o } = e
        return {
          tags: Object.assign({}, t.tags, {
            loading: { route: n, query: s, ac: o }
          })
        }
      }),
      t.on('tags/load:done', (t, e) => {
        let { route: n, query: s, content: o } = e
        return {
          tags: Object.assign({}, t.tags, {
            content: o,
            route: n,
            query: s,
            loading: null,
            isFailed: !1,
            isNetworkFailed: !1,
            isNotFound: !1
          })
        }
      }),
      t.on('tags/load:error', (t, e) => {
        let { route: n, query: s, error: o } = e
        return {
          tags: Object.assign({}, t.tags, {
            current: null,
            route: n,
            query: s,
            loading: null,
            isFailed: !0,
            isNetworkFailed: o instanceof gn && 0 === o.status,
            isNotFound:
              o instanceof gn && (404 === o.status || 400 === o.status)
          })
        }
      }),
      t.on('tags/load:error', (t, e) => {
        let { error: n } = e
        'Sentry' in window &&
          'function' == typeof window.Sentry.captureException &&
          window.Sentry.captureException(n),
          console.error(n)
      })
  },
  ld = t => {
    t.on('chords/load:processing', () => ({ chordDiagram: [] })),
      t.on('chordDiagram/clear', () => ({ chordDiagram: [] })),
      t.on('chordDiagram/open', (t, e) => {
        const n = t.chordDiagram.find(t => t.chord === e.chord)
        return n
          ? { chordDiagram: t.chordDiagram.filter(t => t !== n) }
          : { chordDiagram: [...t.chordDiagram, e] }
      }),
      t.on('chordDiagram/close', (t, e) => ({
        chordDiagram: t.chordDiagram.filter(t => t !== e)
      }))
  },
  dd = [
    'aa (array)',
    'drawing',
    'drawing (array)',
    'googlefc (array)',
    'promo_slowdown',
    'promo_slowdown (array)',
    'promo_slowdown_faster',
    'promo_slowdown_faster (array)',
    'nossr',
    'new_sound',
    'plus_promo',
    'submit_promo',
    'plus_banners',
    'hidden_chords',
    'report',
    'googlefc',
    'bpm_speed'
  ]
let ud, pd
function hd () {
  return Math.floor(65536 * (1 + Math.random()))
    .toString(16)
    .substring(1)
}
void 0 !== document.hidden
  ? ((ud = 'hidden'), (pd = 'visibilityState'))
  : void 0 !== document.mozHidden
  ? ((ud = 'mozHidden'), (pd = 'mozVisibilityState'))
  : void 0 !== document.msHidden
  ? ((ud = 'msHidden'), (pd = 'msVisibilityState'))
  : void 0 !== document.webkitHidden &&
    ((ud = 'webkitHidden'), (pd = 'webkitVisibilityState'))
const gd = 'Print--plus',
  fd = 'Print--free'
function md (t) {
  const e = t.rules || t.cssRules
  for (const t of e)
    if (t.style.content && t.style.content.length) {
      const e =
          hd() +
          hd() +
          '-' +
          hd() +
          '-' +
          hd() +
          '-' +
          hd() +
          '-' +
          hd() +
          hd() +
          hd(),
        n =
          t.style.content.substring(0, 62) +
          e +
          t.style.content.substring(62 + e.length)
      n.length === t.style.content.length
        ? (t.style.content = n)
        : console.error('Something wrong with tracker url length')
    }
}
function yd (t) {
  return t
    .split('+')
    .map(t => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ')
}
const vd = 'Songsterr',
  bd = 'Songsterr Tabs with Rhythm',
  wd = {
    favorites: 'Favorites',
    plus: 'Songsterr Plus',
    submit: 'Submit Tab',
    about: 'About',
    jobs: 'Jobs',
    help: 'Questions',
    signin: 'Sign In',
    signup: 'Sign Up',
    recoverpassword: 'Recover Password',
    changepassword: 'Change Password',
    forgotpassword: 'Forgot your password?',
    account: 'Account',
    cancelPlus: 'Cancel Subscription',
    deactivate: 'Deactivate account',
    updateCard: 'Update card',
    subscribePlus: 'Paying',
    howToReadTab: 'How to Read a Tab',
    privacy: 'Privacy Policy',
    terms: 'Terms Of Service',
    dnsmpd: 'Do Not Sell My Personal Information',
    '': '',
    tab: '',
    chords: '',
    search: '',
    artist: ''
  }
function Sd (t) {
  let e =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'Guitar'
  if (t) {
    if ('DRUMS' === t.instrument) return 'Drum'
    if ('BASS' === t.instrument) return 'Bass'
    if ('GUITAR' === t.instrument) return 'Guitar'
  }
  return e
}
function Ed (t) {
  ;(document.title = (function (t) {
    const e = t.route
    return 'artist' === e.page
      ? (function (t) {
          return [
            t.artist && t.artist.pattern && xd(t.artist.pattern),
            kd(t),
            bd
          ]
            .filter(Boolean)
            .join(' | ')
        })(t)
      : 'tab' === e.page
      ? (function (t) {
          const { meta: e } = t
          if (!e.current) return [bd, 'Free online tab player']
          const n = Go(e)
          let s = ''
          ;(function (t, e) {
            if (!e || !t.current || !t.current.tracks) return !1
            let n = null
            return (
              me(e.instrumentId)
                ? (n = me)
                : ve(e.instrumentId)
                ? (n = ve)
                : ye(e.instrumentId) && (n = ye),
              !n || Ne(e, t.current.tracks, n)
            )
          })(e, n) && (s = ' - '.concat(n.title.replace(/\u00a0/g, ' ')))
          const o = (t =>
              t
                ? ((t.isBassGuitar ? ' Bass' : t.isDrums && ' Drum') || '') +
                  ' Tab'
                : ' Tab')(n),
            i = e.allowedByLicense
              ? ''
              : ' (Temporary Removed by Music Publisher) ',
            r = ''
              .concat(e.current.title)
              .concat(o, ' by ')
              .concat(e.current.artist)
              .concat(s)
          return [
            ''
              .concat(r)
              .concat(i, ' | ')
              .concat(bd),
            ''.concat(
              r,
              ' with free online tab player. One accurate version. Recommended by The Wall Street Journal'
            )
          ]
        })(t)[0]
      : 'chords' === e.page
      ? (function (t) {
          const { chords: e } = t
          if (!e.current) return bd
          const { title: n, artist: s } = e.current
          return ''
            .concat(n, ' Chords by ')
            .concat(s, ' | ')
            .concat(bd)
        })(t)
      : 'search' === e.page
      ? (function (t) {
          return [t.songs && t.songs.pattern && xd(t.songs.pattern), Cd(t), vd]
            .filter(Boolean)
            .join(' | ')
        })(t)
      : 'tag' === e.page || 'tags' === e.page
      ? (function (t) {
          const {
            tags: { content: e, route: n, query: s, isFailed: o, isNotFound: i }
          } = t
          if (!e || o || i)
            return ''
              .concat(i ? 'Not Found' : 'Something Went Wrong', ' | ')
              .concat(bd)
          const r = s.page ? ' Page '.concat(s.page) : ''
          return (
            'Top ' +
            ('tag' === n.page ? ''.concat(yd(n.name), ' Tabs') : 'Tags') +
            r +
            ' | '.concat(bd)
          )
        })(t)
      : (function (t) {
          return [Td(t), bd].join(' | ')
        })(t)
  })(t)),
    window.ga &&
      window.ga('send', 'pageview', {
        location: window.location.href,
        title: document.title
      }),
    (function (t) {
      try {
        const t = document.styleSheets
        for (let e = 0; e < t.length; e++) {
          const n = t[e]
          'print' === n.media.mediaText &&
            'print-ga' === n.ownerNode.id &&
            md(n)
        }
      } catch (t) {
        console.error('PrintTracker: ' + t)
      }
    })(
      (function (t) {
        'tab' === t.route.page && t.meta.current
          ? (t.route.page, t.meta.current.artist, t.meta.current.title)
          : t.route.page
      })(t)
    )
}
F.map(t => {
  let [e, n] = t
  return 'string' == typeof e && 'string' == typeof n.page
    ? { [n.page]: e }
    : {}
}).reduce((t, e) => Object.assign(t, e), {})
const Id = (t, e) => t.artist.artists[e] || 'Unknown Artist',
  xd = t => (t.length > 0 ? "Search results for: '".concat(t, "'") : void 0),
  Cd = t =>
    [Sd(t.songs && t.songs.filters, 'Guitar'), 'Tabs with Rhythm'].join(' '),
  kd = t =>
    [
      Id(t, +t.route.artistId),
      Sd(t.artist && t.artist.filters, ''),
      'Tabs'
    ].join(' '),
  Td = t => wd[t.route.page] || '',
  Ad = {
    aa: !0,
    drum_standard_notation: [],
    useful_edits_v3: !0,
    new_sound: []
  },
  Od = ['drum_standard_notation', 'bpm_speed', 'useful_edits_v2', 'new_sound'],
  Pd = t => 0 == (t & (t - 1))
for (const t of Object.keys(Ad)) {
  const e = Ad[t]
  if (e && Array.isArray(e) && !Pd(e.length))
    throw new Error("Experiment variations can't be evenly distributed")
}
const _d = [],
  Ld = {
    'Used metronome': !1,
    'Used countin': !1,
    'Used solo': !1,
    'Used mute': !1,
    'Used playback': !1,
    'Used speed': !1,
    'Used loop': !1,
    'Used mixer': !1,
    'Used pitchshift': !1,
    'Used fullscreen': !1
  },
  Nd = t =>
    -1 !== Od.indexOf(t)
      ? 'Experiment: '.concat(t)
      : 'Experiment: SRW '.concat(t),
  Rd = t => {
    {
      let r,
        a,
        c = {}
      function e (t) {
        c = xn('curiosity_sent_events') || c
        const e = !c[t]
        return e && ((c[t] = !0), Cn('curiosity_sent_events', c)), e
      }
      function n (t) {
        window.amplitude.getInstance().setUserId(t.id)
      }
      function s () {
        window.amplitude.getInstance().setUserId(null)
      }
      {
        function o (t, n) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          try {
            const i = t.user.isLoggedIn ? t.user.profile.plan : 'FREE',
              r = t.user.isLoggedIn,
              a = Object.assign(
                {
                  Plan: i,
                  'Signed in': r,
                  Legacy: !1,
                  Url: window.location.href,
                  Referer: t.curiosity.referer.last
                },
                s
              ),
              c = e(n)
            if (o && !c) return
            !o && c && (a['First time'] = !0)
            const l = new window.amplitude.Identify()
            l.set('Plan', i), l.set('Signed in', r)
            for (const e in t.experiments)
              Object.prototype.hasOwnProperty.call(t.experiments, e) &&
                l.set(Nd(e), t.experiments[e])
            for (const t of dd) l.unset(Nd(t))
            l.unset('Referer'),
              t.curiosity.referer.last &&
                l.set('Last referer', t.curiosity.referer.last),
              t.curiosity.referer.original &&
                l.set('Original referer', t.curiosity.referer.original)
            const d = window.amplitude.getInstance()
            d.identify(l),
              d.logEvent(n, a),
              'prod' !== window.__STAGE__ && console.log('AD: '.concat(n), a, l)
          } catch (t) {
            console.error(t), window.Sentry.captureException(t)
          }
        }
        t.on('curiosity/conversion', (e, n) => {
          o(
            e,
            n.event,
            Object.assign({}, n, e.curiosity.conversion, { event: void 0 })
          ),
            t.dispatch('curiosity/google', {
              category: 'Conversion',
              action: n.event
            })
        }),
          t.on('curiosity/event', (t, e) => {
            o(t, e.event, Object.assign({}, e, { event: void 0 }))
          }),
          t.on('curiosity/visitedPage', () => {}),
          t.on('curiosity/enteredExperiment', (t, e) => {
            let { experiment: n, payload: s } = e
            ;(t => {
              let e = JSON.parse(Za('EE_STORAGE')) || []
              Array.isArray(e) || (e = [])
              const n = -1 !== e.indexOf(t)
              n || (e.push(t), $a('EE_STORAGE', JSON.stringify(e)))
              let s = xn('EE_STORAGE') || []
              Array.isArray(s) || (s = [])
              const o = -1 !== s.indexOf(t)
              o || (s.push(t), Cn('EE_STORAGE', s))
              const i = -1 !== _d.indexOf(t)
              return i || _d.push(t), !!(n || o || i)
            })(n) || o(t, 'Entered experiment: SRW '.concat(n), s)
          })
      }
      t.on('curiosity/google', (t, e) => {
        try {
          window.ga &&
            window.ga('send', 'event', {
              eventCategory: e.category,
              eventAction: e.action,
              eventLabel: e.label,
              eventValue: e.value
            }),
            'prod' !== window.__STAGE__ &&
              console.log('GA: '.concat(e.category), e)
        } catch (t) {
          console.error(t), window.Sentry.captureException(t)
        }
      }),
        t.on('curiosity/error', (e, n) => {
          let { error: s, message: o } = n
          t.dispatch('curiosity/event', {
            event: 'Error',
            Error: s,
            Message: o
          }),
            t.dispatch('curiosity/google', {
              category: 'Error',
              action: s,
              label: o
            })
        }),
        t.on('curiosity/fraud', () => {
          window.amplitude
            .getInstance()
            .setUserProperties({ 'Auto-detected fraud': !0 })
        }),
        t.on('curiosity/setConversionProps', (t, e) => ({
          curiosity: Object.assign({}, t.curiosity, {
            conversion: Object.assign({}, t.curiosity.conversion, e)
          })
        })),
        t.on('curiosity/countdown:start', () => {
          clearTimeout(r),
            Ia.reset(),
            (r = setTimeout(() => t.dispatch('curiosity/vpt10'), 6e5))
        }),
        t.on('curiosity/countdown:clear', () => {
          clearTimeout(r)
        }),
        t.on('curiosity/vcp5:start', () => {
          clearTimeout(a),
            Ia.reset(),
            (a = setTimeout(() => t.dispatch('curiosity/vc5'), 3e5))
        }),
        t.on('curiosity/vcp5:clear', () => {
          clearTimeout(a)
        }),
        t.on('meta/load:processing', () => {
          clearTimeout(r), clearTimeout(a)
        }),
        t.on('curiosity/vc5', () => {
          t.dispatch('curiosity/google', {
            category: 'Player',
            action: 'Viewed chords for 5 minutes'
          })
        }),
        t.on('curiosity/vpt10', e => {
          const n = Ia.getTimeSinceLastActivity()
          if (n >= 5) return
          const { experiments: s } = e,
            o = e.meta,
            i = Go(o),
            r = 'Viewed player tab for 10 minutes'
          if (o.current && e.part.current) {
            const a = o.current,
              c = e.part.current
            !(async function (t, e) {
              try {
                await fn('/api/event/', {
                  event: 'Viewed player tab for 10 minutes',
                  payload: e
                })
              } catch (t) {
                console.error(t)
              }
            })(0, {
              songId: o.songId,
              revisionId: a.revisionId,
              artistId: a.artistId,
              partId: o.partId,
              instrumentId: i && i.instrumentId
            }),
              t.dispatch(
                'curiosity/event',
                Object.assign(
                  { event: r },
                  e.curiosity.VPT10Props,
                  ud
                    ? {
                        'Web document is hidden': document[ud],
                        'Web document visibility': document[pd]
                      }
                    : {},
                  {
                    Orientation: window.matchMedia('(orientation: portrait)')
                      .matches
                      ? 'portrait'
                      : 'landscape',
                    Fullscreen: e.screen.fullscreen,
                    Instrument: c.instrument,
                    Difficulty: i.difficulty,
                    'Minutes Since Last Activity': n,
                    Artist: a.artist,
                    Title: a.title,
                    'Song id': o.songId.toString(),
                    'Track id': i.partId.toString(),
                    'Has chords': c.withChords,
                    'Has chords link': a.hasChords || !1,
                    'Sound version': e.player.version
                  }
                )
              ),
              ri({ meta: o, experiments: s }) &&
                t.dispatch('curiosity/event', {
                  event: 'VPT on Useful Edits tracks',
                  songId: o.songId,
                  revisionId: a.revisionId,
                  artistId: a.artistId,
                  partId: o.partId,
                  instrumentId: i && i.instrumentId
                }),
              t.dispatch('curiosity/google', { category: 'Player', action: r })
          }
        })
      const l = {}
      function i (t) {
        return e => ({
          curiosity: Object.assign({}, e.curiosity, {
            VPT10Props: Object.assign({}, e.curiosity.VPT10Props, { [t]: !0 })
          })
        })
      }
      t.on('curiosity/trigerHJ', (t, e) => {
        l[e] ||
          t.screener.active ||
          (console && console.info('hotjar event', e),
          window &&
            'function' == typeof window.hj &&
            (window.hj('trigger', e), (l[e] = !0)))
      }),
        t.on('user/signIn', (e, s) => {
          n(s),
            t.dispatch('curiosity/conversion', {
              event: 'Signed in',
              'Auth method': 'Email'
            })
        }),
        t.on('user/googleSignIn', (e, s) => {
          const { profile: o, isCreated: i } = s
          n(o),
            t.dispatch('curiosity/conversion', {
              event: i ? 'Signed up' : 'Signed in',
              'Auth method': 'Google'
            })
        }),
        t.on('user/signUp', (e, s) => {
          n(s),
            t.dispatch('curiosity/conversion', {
              event: 'Signed up',
              'Auth method': 'Email'
            })
        }),
        t.on('user/profile', (t, e) => {
          n(e)
        }),
        t.on('user/subscribePlus', (e, s) => {
          'subscribe' === s.mode
            ? t.dispatch('curiosity/conversion', {
                event: 'Subscribed',
                'Payment type': s.paymentType
              })
            : 'update' === s.mode &&
              t.dispatch('curiosity/conversion', {
                event: 'Updated subscription',
                'Payment type': s.paymentType
              }),
            t.dispatch('curiosity/google', {
              category: 'Subscription',
              action:
                'subscribe' === s.mode ? 'Subscribed' : 'Updated subscription'
            }),
            n(cc(e, s))
        }),
        t.on('user/signOut', () => {
          t.dispatch('curiosity/event', { event: 'Signed out' }), s()
        }),
        t.on('user/recoverPassword', (t, e) => {
          n(e)
        }),
        t.on('user/cancelPlus', (e, s) => {
          n(s),
            t.dispatch('curiosity/conversion', {
              event: 'Canceled subscription'
            })
        }),
        t.on('user/deactivate', () => {
          t.dispatch('curiosity/conversion', { event: 'Deactivated account' }),
            s()
        }),
        t.on('editor/delete:done', (e, n) =>
          t.dispatch('curiosity/event', {
            event: 'Deleted song',
            Artist: n.artist,
            Title: n.title,
            'Song id': n.songId && n.songId.toString()
          })
        ),
        t.on('editor/delete:error', (e, n) =>
          t.dispatch('curiosity/error', {
            error: 'Deleted song',
            message: n.message
          })
        ),
        t.on('favorites/add', async (e, n) => {
          let { songId: s, song: o } = n
          return t.dispatch('curiosity/event', {
            event: 'Added favorite',
            Title: o.title,
            Artist: o.artist,
            'Song id': s.toString()
          })
        }),
        t.on('favorites/delete:processing', async (e, n) => {
          let { songId: s, song: o } = n
          return t.dispatch('curiosity/event', {
            event: 'Removed favorite',
            Title: o.title,
            Artist: o.artist,
            'Song id': s.toString()
          })
        }),
        t.on('upload/song:uploaded', (e, n) => {
          let { songSubmitted: s, song: o } = n
          s &&
            t.dispatch('curiosity/event', {
              event: 'Submitted tab',
              Artist: o.artist,
              Title: o.title
            })
        }),
        t.on('upload/song:error', (e, n) => {
          let { error: s } = n
          t.dispatch('curiosity/error', {
            error: 'Submitted tab',
            message: s.message
          })
        }),
        t.on('upload/revision:uploaded', (e, n) => {
          let { revisionSubmitted: s, revision: o } = n
          s &&
            t.dispatch('curiosity/event', {
              event: 'Submitted revision',
              Artist: o.artist,
              Title: o.title
            })
        }),
        t.on('upload/revision:error', (e, n) => {
          let { error: s } = n
          t.dispatch('curiosity/error', {
            error: 'Submitted revision',
            message: s.message
          })
        }),
        t.on('meta/load:processing', (t, e) => {
          let { songHasChanged: n } = e
          if (n)
            return {
              curiosity: Object.assign({}, t.curiosity, { VPT10Props: Ld })
            }
        }),
        t.on('player/changeSpeed', i('Used speed')),
        t.on('player/togglePlay', i('Used playback')),
        t.on('player/toggleLoop', i('Used loop')),
        t.on('player/changePitch', i('Used pitchshift')),
        t.on('player/changeLoop', i('Used loop')),
        t.on('player/toggleCountIn', i('Used countin')),
        t.on('player/toggleMetronome', i('Used metronome')),
        t.on('player/changeType', (t, e) => {
          let { type: n } = e
          return 'solo' === n
            ? i('Used solo')(t)
            : 'mute' === n
            ? i('Used mute')(t)
            : void 0
        }),
        t.on('screen/toggleFullscreen', (t, e) => {
          let { enabled: n } = e
          return n && i('Used Fullscreen')(t)
        }),
        t.on('screener/set', (e, n) => {
          n &&
            !n.disableEvents &&
            t.dispatch('curiosity/event', {
              event: 'Custom survey shown',
              Header: n.title,
              Name: n.name
            })
        }),
        t.on('route/change', (e, n) => {
          let { route: s } = n
          'tab' !== s.page &&
            'chords' !== s.page &&
            'search' !== s.page &&
            'artist' !== s.page &&
            Ed(e),
            t.dispatch('curiosity/countdown:clear'),
            t.dispatch('curiosity/vcp5:clear')
        }),
        t.on('meta/load:done', e => {
          'tab' === e.route.page &&
            (Ed(e), t.dispatch('curiosity/countdown:start'))
        }),
        t.on('chords/load:done', e => {
          'chords' === e.route.page &&
            (Ed(e), t.dispatch('curiosity/vcp5:start'))
        })
    }
  },
  jd = Array.from('1234567890qwertyuiopasdfghjklzxcvbnm'),
  Md = Array.from('1234567890'),
  Dd = [
    'Numpad1',
    'Numpad2',
    'Numpad3',
    'Numpad4',
    'Numpad5',
    'Numpad6',
    'Numpad7',
    'Numpad8',
    'Numpad9',
    'Numpad0'
  ],
  Bd = {
    backspace: 8,
    delete: 46,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    Numpad0: 96,
    Numpad1: 97,
    Numpad2: 98,
    Numpad3: 99,
    Numpad4: 100,
    Numpad5: 101,
    Numpad6: 102,
    Numpad7: 103,
    Numpad8: 104,
    Numpad9: 105,
    '+': 187,
    '-': 189
  }
function Fd (t) {
  const e = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  return e || 'cmd' !== t ? (e && 'ctrl' === t ? 'cmd' : t) : 'ctrl'
}
class Ud {
  constructor (t) {
    ;(this.store = t),
      (this.handlers = {}),
      (this.meta = {}),
      (this.bindSources = {}),
      window.addEventListener('keydown', this.keyboardHandler.bind(this), !1),
      window.addEventListener('keyup', this.preventHandler.bind(this), !1)
  }
  preventHandler (t) {
    t.target instanceof HTMLButtonElement &&
      32 === t.keyCode &&
      (this.store.get().route.isPanel ||
        (t.preventDefault(), t.stopPropagation()))
  }
  keyboardHandler (t) {
    if (this.store.get().consent.view) return
    if (t.altKey || t.shiftKey || t.metaKey || t.ctrlKey)
      return void this.metaHandler(t)
    if (!this.handlers[t.keyCode] || t.repeat) return
    if (
      (t.target instanceof HTMLInputElement ||
        t.target instanceof HTMLTextAreaElement) &&
      !t.target.hasAttribute('data-hotkey')
    )
      return
    const e = this.handlers[t.keyCode],
      n = 'function' == typeof e.global && e.global
    if (e.global) return void n(t)
    const s = this.store.get().route.isPanel
    if (e.parallel) {
      const n = 'function' == typeof e.parallel && e.parallel
      ;(s &&
        (function () {
          const t = document.activeElement
          return !(
            !t ||
            !['input', 'select', 'button', 'textarea'].includes(
              t.tagName.toLowerCase()
            ) ||
            (t.blur && t.blur(), 0)
          )
        })()) ||
        n(t)
    }
    if (s) {
      const n = 'function' == typeof e.onPanelPopup && e.onPanelPopup,
        s = 'function' == typeof e.onPanel && e.onPanel
      e.onPanelPopup ? n(t) : e.onPanel && s(t)
    } else {
      const n = 'function' == typeof e.onPopup && e.onPopup,
        s = 'function' == typeof e.onTab && e.onTab
      e.onPopup ? n(t) : e.onTab && s(t)
    }
  }
  metaHandler (t) {
    if (
      16 === t.keyCode ||
      17 === t.keyCode ||
      18 === t.keyCode ||
      91 === t.keyCode
    )
      return
    if (!this.meta[t.keyCode]) return
    const e = this.meta[t.keyCode]
    let n
    if (
      (t.altKey
        ? (n = e.alt)
        : t.ctrlKey
        ? (n = e.ctrl)
        : t.metaKey
        ? (n = e.cmd)
        : t.shiftKey && (n = e.shift),
      n)
    ) {
      if (t.repeat) return void (n.repeat && n.repeat(t))
      const {
        route: { isPanel: e },
        layer: { layer: s }
      } = this.store.get()
      n.onTab ? e || null !== s || n.onTab(t) : n.global && n.global(t)
    }
  }
  bindMeta (t, e) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : 'global',
      s =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'App',
      o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
    const [i, r] = t.split('+')
    'shift' === i || 'ctrl' === i || 'alt' === i || 'cmd' === i
      ? ((this.bindSources[
          ''
            .concat(r, '-')
            .concat(i, '-')
            .concat(n)
        ] = s),
        (this.meta[Bd[r]] = this.meta[Bd[r]] || {}),
        (this.meta[Bd[r]][Fd(i)] = this.meta[Bd[r]][Fd(i)] || {}),
        (this.meta[Bd[r]][Fd(i)][n] = e),
        o && (this.meta[Bd[r]][Fd(i)].repeat = ba(e, 400)))
      : console.error('Please check your meta handler')
  }
  unbindMeta (t) {
    let e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : 'global',
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'App'
    const [s, o] = t.split('+')
    if ('shift' !== s && 'ctrl' !== s && 'alt' !== s && 'cmd' !== s)
      return void console.error('Please check your meta handler')
    const i =
      this.bindSources[
        ''
          .concat(o, '-')
          .concat(s, '-')
          .concat(e)
      ] === n
    this.meta[Bd[o]] && i && delete this.meta[Bd[o]][Fd(s)][e]
  }
  bindOne (t, e, n) {
    let s =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'App'
    ;(this.bindSources[''.concat(t, '-').concat(Object.keys(n)[0])] = s),
      (this.handlers[Bd[t]] = this.handlers[Bd[t]] || {}),
      (this.handlers[Bd[t]][Object.keys(n)[0]] = e)
  }
  unbindOne (t, e) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'App'
    const s =
      this.bindSources[''.concat(t, '-').concat(Object.keys(e)[0])] === n
    this.handlers[Bd[t]] && s && delete this.handlers[Bd[t]][Object.keys(e)[0]]
  }
  bind (t, e) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'App'
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        ('keyboard*' === s
          ? jd.forEach(o => this.bindOne(o, t[s], e, n))
          : 'digits*' === s
          ? Md.forEach(o => this.bindOne(o, t[s], e, n))
          : 'numpad*' === s
          ? Dd.forEach(o => this.bindOne(o, t[s], e, n))
          : this.bindOne(s, t[s], e, n))
  }
  unbind (t, e) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'App'
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        ('keyboard*' === s
          ? jd.forEach(t => this.unbindOne(t, e, n))
          : 'digits*' === s
          ? Md.forEach(t => this.unbindOne(t, e, n))
          : 'numpad*' === s
          ? Dd.forEach(t => this.unbindOne(t, e, n))
          : this.unbindOne(s, e, n))
  }
}
const Hd = window.__AMPLITUDE_API_KEY__ || '',
  qd = Hd.slice(0, 6),
  Gd = 'ampc_'.concat(qd)
window.APP_INITED ||
  ((window.APP_INITED = !0),
  (async function () {
    await (async function () {
      if (
        ((window.AudioContext =
          window.AudioContext || window.webkitAudioContext),
        'object' == typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
      )
        for (const [t, e] of Object.entries(
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__
        ))
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__[t] =
            'function' == typeof e ? () => {} : null
      window.PASSIVE = !1
      try {
        const t = Object.defineProperty({}, 'passive', {
          get () {
            window.PASSIVE = { passive: !0 }
          }
        })
        window.addEventListener('test', null, t)
      } catch (t) {}
      if (
        ('function' != typeof SVGElement.prototype.focus &&
          (SVGElement.prototype.focus = () => {}),
        'function' != typeof CSSRuleList.prototype[Symbol.iterator] &&
          (CSSRuleList.prototype[Symbol.iterator] = [][Symbol.iterator]),
        'undefined' == typeof console)
      ) {
        const t = () => {}
        console = { error: t, info: t, log: t, warn: t }
      }
      const t = []
      window.fetch || t.push(import('./fetch.625498f8.js')),
        await Promise.all(t)
    })()
    const t = (t =>
      new Qa(
        [
          V,
          Da,
          Ho,
          rc,
          tc,
          lc,
          fc,
          mc,
          bc,
          dl,
          os,
          bl,
          Il,
          Ol,
          _l,
          vl,
          Nl,
          Dl,
          Bl,
          Wl,
          zl,
          Jl,
          $l,
          Tl,
          Yo,
          ed,
          sd,
          Wn,
          id,
          rd,
          ai,
          ad,
          ld,
          cd,
          Rd
        ],
        t
      ))(JSON.parse(document.getElementById('state').innerHTML))
    window.Sentry &&
      window.Sentry.onLoad(() => {
        const e = t.get(),
          n = { page: e.route.page }
        for (const t in e.experiments)
          Object.prototype.hasOwnProperty.call(e.experiments, t) &&
            (n['e_' + t] = e.experiments[t])
        window.Sentry.setTags(n)
      }),
      (window.hotKeysManager = new Ud(t)),
      (function (t) {
        const e = new ca({
            onError: function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              const s = e.message || e
              console.error(s),
                t.dispatch('player/error', { error: s, isNetworkError: n })
            },
            onFreeze: () => t.dispatch('player/togglePlay', !1),
            onOpened: () => t.dispatch('player/opened'),
            onLoad: () => t.dispatch('player/load'),
            onLoaded: () => t.dispatch('player/loaded'),
            onEmpty: () => t.dispatch('player/empty')
          }),
          n = !(null === e.context || !window.Worker)
        t.dispatch('player/init', { audio: e, playbackAvailable: n })
      })(t)
    const e = () => {
      const e = (() => {
          if (window) {
            if (
              window.matchMedia(
                '(max-width: 479px) and (max-height: 899px) and (orientation: portrait)'
              ).matches ||
              window.matchMedia(
                '(max-height: 479px) and (max-width: 899px) and (orientation: landscape)'
              ).matches
            )
              return 'small'
            if (
              window.matchMedia(
                '(min-width: 480px) and (max-width: 1069px) and (orientation: portrait)'
              ).matches ||
              window.matchMedia(
                '(min-height: 480px) and (max-height: 1069px) and (orientation: landscape)'
              ).matches
            )
              return 'medium'
            if (window.matchMedia('(min-width: 1200px)').matches) return 'wide'
          }
          return 'large'
        })(),
        n = !!window.matchMedia(
          '(orientation: landscape) and (min-aspect-ratio: 13/9)'
        ).matches,
        s = pc(e),
        o = uc(e, s, t.get().screen.fullscreen)
      t.dispatch('screen/resize', {
        screen: e,
        landscape: n,
        available: o,
        viewport: s
      })
    }
    window.addEventListener('resize', va(e, 100)),
      await Promise.resolve(),
      b(
        i(I.Provider, { value: t }, i(Ka, { store: t })),
        document.getElementById('root')
      ),
      (function (t) {
        const e = t.get().meta
        e.current &&
          !e.isFailed &&
          t.dispatch('meta/load:done', {
            songId: e.songId,
            revisionId: e.revisionId,
            partId: e.partId,
            current: e.current
          })
      })(t),
      (function (t) {
        const e = t.get().chords
        e.current &&
          !e.isFailed &&
          t.dispatch('chords/load:done', {
            songId: e.songId,
            chordsRevisionId: e.chordsRevisionId,
            current: e.current
          })
      })(t),
      e()
    const n = t.get(),
      s = n,
      o = 'bot' === n.device.type,
      r = -1 !== window.location.search.indexOf('ut=on')
    if (
      (o ||
        r ||
        setTimeout(() => {
          To(() => {
            !(async function (t) {
              try {
                let e = await (async function () {
                  const t = await fetch('/api/screeners/decide', {
                    credentials: 'include'
                  })
                  return mn(t), t.json()
                })()
                const n = t.get()
                ;(e = e.filter(t => {
                  const e = t.filter.visitedFirstTime
                  if (
                    'unset' !== e &&
                    (('yes' === e && window.__HAS_BEEN_SEEN_BEFORE__) ||
                      ('no' === e && !window.__HAS_BEEN_SEEN_BEFORE__))
                  )
                    return !1
                  const s = t.filter.experiment
                  if (s) {
                    let [t, e] = s.split('-')
                    if ((void 0 === e && (e = 'on'), n.experiments[t] !== e))
                      return !1
                  }
                  return !0
                })),
                  e.length && t.dispatch('screener/loaded', e)
              } catch (t) {
                console.error(t)
              }
            })(t)
          })
        }, 0),
      To(() => {
        !(function (t) {
          try {
            if ('bot' === t.device.type) return
            const e = { apiEndpoint: 'curiosity.songsterr.com/amplitude' },
              n = (function (t) {
                const e = Gd + '=',
                  n = document.cookie.split(';')
                for (let t = 0; t < n.length; t++) {
                  let s = n[t]
                  for (; ' ' === s.charAt(0); ) s = s.substring(1, s.length)
                  if (0 === s.indexOf(e)) return s.substring(e.length, s.length)
                }
                return null
              })()
            n && (e.deviceId = n)
            const s = t.user.isLoggedIn ? t.user.profile.id : null
            window.amplitude.getInstance().init(Hd, s, e),
              window.amplitude.getInstance().setVersionName('d8efbb5e')
          } catch (t) {
            window.Sentry.captureException(t)
          }
        })(t.get())
      }),
      To(() => {
        const e = t.get()
        r && t.dispatch('ut/continue', e.query.utName),
          'favorites' !== s.route.page &&
            e.user.isLoggedIn &&
            (!e.favorites.favorites.length && wl(t.dispatch), Cl(t.dispatch)),
          t.dispatch('curiosity/visitedPage'),
          setTimeout(() => t.dispatch('screener/minuteSpent'), 6e4)
      }),
      To(() => {
        if ('search' !== t.get().route.page) {
          const e = {
            instrument: 'ALL INSTRUMENTS',
            tunings: { 'ALL INSTRUMENTS': 'ALL TUNINGS' },
            difficulty: 'Any Difficulty'
          }
          t.dispatch('songs/filter', { pattern: '', filters: e })
        }
      }),
      'undefined' != typeof dataLayer &&
        -1 === String(window.location).indexOf('&ut=on'))
    ) {
      let { hasPlus: e, isLoggedIn: n } = t.get().user
      e = true;
      dataLayer.push({
        event: n ? (e ? 'VISITED_PLUS' : 'VISITED_FREE') : 'VISITED_ANON'
      })
    }
    o ||
      ('off' === t.get().query.sw
        ? (function () {
            try {
              navigator.serviceWorker.ready.then(t => {
                t.unregister()
              })
            } catch (t) {
              console.error(t)
            }
          })()
        : 'serviceWorker' in navigator &&
          window.addEventListener('load', () => {
            navigator.serviceWorker
              .register('/service-worker.js', { scope: '/' })
              .catch(console.error.bind(console))
          })),
      (window.Cypress || 'prod' !== window.__STAGE__) && (window.__store__ = t),
      (window.trackNotsyEvent = (e, n) =>
        'prod' === window.__STAGE__ &&
        t.dispatch('curiosity/event', Object.assign({ event: e }, n)))
    const a = () => t.dispatch('player/resume', 'pagehide'),
      c = () => t.dispatch('player/suspend', 'pagehide')
    window.addEventListener('pageshow', a, !1),
      window.addEventListener('resume', a, !1),
      window.addEventListener('pagehide', c, !1),
      window.addEventListener('freeze', c, !1),
      'mediaSession' in navigator &&
        (navigator.mediaSession.setActionHandler('play', () => {
          t.dispatch('curiosity/event', { event: 'Used media session: play' }),
            t.dispatch('player/togglePlay', !0)
        }),
        navigator.mediaSession.setActionHandler('pause', () => {
          t.dispatch('curiosity/event', { event: 'Used media session: pause' }),
            t.dispatch('player/togglePlay', !1)
        }))
  })().catch(t => {
    console.error(t)
  }))
export {
  gr as $,
  rs as A,
  Lo as B,
  bt as C,
  E as D,
  to as E,
  Ks as F,
  Ee as G,
  qs as H,
  ut as I,
  Ns as J,
  Bs as K,
  R as L,
  Os as M,
  Ml as N,
  Fs as O,
  ht as P,
  xn as Q,
  Cn as R,
  I as S,
  At as T,
  Qe as U,
  un as V,
  Pl as W,
  Me as X,
  Ot as Y,
  Fe as Z,
  ci as _,
  sn as a,
  Hs as a$,
  cr as a0,
  Be as a1,
  ve as a2,
  me as a3,
  he as a4,
  ge as a5,
  kc as a6,
  Ys as a7,
  Vs as a8,
  Xs as a9,
  wi as aA,
  ki as aB,
  bi as aC,
  Ii as aD,
  xi as aE,
  Ai as aF,
  dc as aG,
  ji as aH,
  hi as aI,
  pi as aJ,
  ui as aK,
  di as aL,
  gi as aM,
  fi as aN,
  Dc as aO,
  Nr as aP,
  _a as aQ,
  ye as aR,
  Fc as aS,
  Bc as aT,
  Rr as aU,
  Dr as aV,
  yi as aW,
  vi as aX,
  mi as aY,
  wa as aZ,
  Us as a_,
  Vn as aa,
  Jn as ab,
  Ds as ac,
  Ws as ad,
  N as ae,
  fn as af,
  wn as ag,
  vn as ah,
  yn as ai,
  mn as aj,
  ul as ak,
  Sn as al,
  ln as am,
  Yn as an,
  Ge as ao,
  qe as ap,
  De as aq,
  yd as ar,
  sr as as,
  li as at,
  wt as au,
  Ri as av,
  Ci as aw,
  Ni as ax,
  Si as ay,
  Ei as az,
  as as b,
  dn as b$,
  Ps as b0,
  yc as b1,
  vc as b2,
  Go as b3,
  ri as b4,
  ss as b5,
  ec as b6,
  va as b7,
  Ra as b8,
  Mr as b9,
  Q as bA,
  $ as bB,
  z as bC,
  Xn as bD,
  zn as bE,
  K as bF,
  J as bG,
  Y as bH,
  Vc as bI,
  qc as bJ,
  Wc as bK,
  sl as bL,
  S as bM,
  ft as bN,
  gt as bO,
  rt as bP,
  Kc as bQ,
  Yc as bR,
  zc as bS,
  As as bT,
  jl as bU,
  td as bV,
  L as bW,
  _s as bX,
  Ts as bY,
  Ls as bZ,
  Ze as b_,
  To as ba,
  Br as bb,
  gd as bc,
  fd as bd,
  pa as be,
  ma as bf,
  ya as bg,
  ua as bh,
  ha as bi,
  ga as bj,
  Pa as bk,
  fa as bl,
  $o as bm,
  ti as bn,
  fe as bo,
  la as bp,
  Nt as bq,
  Uo as br,
  Ue as bs,
  Ed as bt,
  Sd as bu,
  Z as bv,
  nl as bw,
  Hc as bx,
  tt as by,
  el as bz,
  Ae as c,
  nd as c0,
  $e as c1,
  Rs as c2,
  fl as c3,
  P as c4,
  js as c5,
  pl as c6,
  is as c7,
  ml as c8,
  Ms as c9,
  Kn as ca,
  Qn as cb,
  Zn as cc,
  ba as cd,
  hl as ce,
  gl as cf,
  Yl as cg,
  Za as ch,
  $a as ci,
  we as d,
  be as e,
  Se as f,
  nc as g,
  Ie as h,
  xe as i,
  Ce as j,
  ke as k,
  ic as l,
  Te as m,
  k as n,
  je as o,
  st as p,
  Zl as q,
  es as r,
  w as s,
  ns as t,
  C as u,
  $n as v,
  Sc as w,
  lt as x,
  Pt as y,
  zs as z
}
//# sourceMappingURL=index.0e02c5ee.js.map

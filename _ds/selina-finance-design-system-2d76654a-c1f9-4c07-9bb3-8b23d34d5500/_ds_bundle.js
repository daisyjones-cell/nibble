/* @ds-bundle: {"format":3,"namespace":"SelinaFinanceDesignSystem_2d7665","components":[{"name":"FixedActionBar","sourcePath":"components/chrome/FixedActionBar.jsx"},{"name":"NavBar","sourcePath":"components/chrome/NavBar.jsx"},{"name":"NeedHelpCard","sourcePath":"components/chrome/NeedHelpCard.jsx"},{"name":"ProgressBar","sourcePath":"components/chrome/ProgressBar.jsx"},{"name":"ProgressTimeline","sourcePath":"components/chrome/ProgressTimeline.jsx"},{"name":"TrustBar","sourcePath":"components/chrome/TrustBar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"ILLUSTRATIONS","sourcePath":"components/display/Illustration.jsx"},{"name":"Illustration","sourcePath":"components/display/Illustration.jsx"},{"name":"Logo","sourcePath":"components/display/Logo.jsx"},{"name":"OfferCard","sourcePath":"components/display/OfferCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Callout","sourcePath":"components/forms/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"OtpInput","sourcePath":"components/forms/OtpInput.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"YesNo","sourcePath":"components/forms/YesNo.jsx"}],"sourceHashes":{"components/chrome/FixedActionBar.jsx":"8eaebb920e7c","components/chrome/NavBar.jsx":"23d32ce174a7","components/chrome/NeedHelpCard.jsx":"bf6f26307c10","components/chrome/ProgressBar.jsx":"7e8db2b36630","components/chrome/ProgressTimeline.jsx":"921ba303df8c","components/chrome/TrustBar.jsx":"c63f13d8b542","components/core/Button.jsx":"b588912c1217","components/display/Badge.jsx":"87ac64006802","components/display/Card.jsx":"6921d057daf3","components/display/Icon.jsx":"4bc34834f2f9","components/display/Illustration.jsx":"a8a19089f8df","components/display/Logo.jsx":"f4e858673c6b","components/display/OfferCard.jsx":"5bbc37ed30b2","components/display/Tag.jsx":"740802f6a6ae","components/forms/Callout.jsx":"40c0538c7e02","components/forms/Checkbox.jsx":"dab573cf87f8","components/forms/OtpInput.jsx":"2f1c067c0138","components/forms/Radio.jsx":"2d3176ab2260","components/forms/Select.jsx":"52976b91eefc","components/forms/Slider.jsx":"0427c32b92de","components/forms/Switch.jsx":"a57fa69425a0","components/forms/TextField.jsx":"2ce582b9d76a","components/forms/Textarea.jsx":"849493c32443","components/forms/YesNo.jsx":"0dc42ba7a7a9","styles/forms.js":"05d15b80dbbf","ui_kits/application/AppShell.jsx":"c62cbd55204e","ui_kits/application/ApplicationFlow.jsx":"5a027db409d8","ui_kits/website/Homepage.jsx":"08c906a9ab87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SelinaFinanceDesignSystem_2d7665 = window.SelinaFinanceDesignSystem_2d7665 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chrome/FixedActionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — FixedActionBar
 * Sticky bottom bar holding the page's primary (and optional secondary) action,
 * with an optional left-side note. layout="desktop" right-aligns the buttons;
 * layout="mobile" stretches them full width. Styling: .sel-actionbar. Compose
 * actions from <Button>.
 */
function FixedActionBar({
  note,
  children,
  layout = "desktop",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-actionbar", layout === "mobile" ? "sel-actionbar--mobile" : "", className].filter(Boolean).join(" ")
  }, rest), note && /*#__PURE__*/React.createElement("div", null, note), /*#__PURE__*/React.createElement("span", {
    className: "sel-actionbar__spacer"
  }), children);
}
Object.assign(__ds_scope, { FixedActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/FixedActionBar.jsx", error: String((e && e.message) || e) }); }

// components/chrome/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — ProgressBar
 * Thin rounded progress indicator: peppermint fill on an almond track, with an
 * optional label row (e.g. "Step 2 of 5" · "40%"). Styling: .sel-progress.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueLabel,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-progress", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sel-progress__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sel-progress__fill",
    style: {
      width: `${pct}%`
    }
  })), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    className: "sel-progress__label"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, valueLabel ?? `${Math.round(pct)}%`)));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Button (flagship)
 * Chunky, pressable button with the signature notched bottom-right corner,
 * thick navy border and hard 0-blur offset shadow. Label is Sora Bold,
 * sentence case. Styling lives in styles/buttons.css (.sel-btn).
 */
function Button({
  variant = "primary",
  size = "l",
  flat = false,
  block = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = ["sel-btn", `sel-btn--${variant}`, `sel-btn--${size}`, flat ? "sel-btn--flat" : "", block ? "sel-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes,
    disabled: disabled
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Badge
 * Small uppercase eyebrow label (Sora extrabold, +4px tracking). Highlight
 * (peach) by default; mint / lilac / almond / ink variants. Styling: .sel-badge.
 */
function Badge({
  variant,
  className = "",
  children,
  ...rest
}) {
  const mod = variant ? `sel-badge--${variant}` : "";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["sel-badge", mod, className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Card
 * Chunky pressable surface: white fill, thick navy border, hard offset shadow,
 * heavy rounding. Variants soften or recolour it. Styling: .sel-card.
 */
function Card({
  variant = "default",
  className = "",
  children,
  style = {},
  ...rest
}) {
  const mod = variant !== "default" ? `sel-card--${variant}` : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-card", mod, className].filter(Boolean).join(" "),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Icon
 * The 9 core library icons (Check, Close, Loading, Copy, Email, Download, Add,
 * Padlock, Search) plus the UI glyphs the chrome needs (chevron, arrow, info,
 * location, error, star, tick-circle, phone, menu). Single-colour line icons
 * drawn with currentColor at a 2px stroke to match the line-art illustrations.
 */
const PATHS = {
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  }),
  close: /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }),
  add: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })),
  copy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "11",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15V5a2 2 0 0 1 2-2h8"
  })),
  email: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 6 9-6"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20h14"
  })),
  padlock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3"
  })),
  loading: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 1 0 9 9"
  })),
  chevron: /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }),
  "chevron-right": /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }),
  "arrow-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6l6 6-6 6"
  })),
  "arrow-left": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6l-6 6 6 6"
  })),
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  })),
  location: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })),
  error: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h.01"
  })),
  "tick-circle": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12.5l2.5 2.5 4.5-5"
  })),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 4l2.4 5 5.6.7-4 3.9 1 5.5L12 16.9 7 19l1-5.5-4-3.9 5.6-.7L12 4Z"
  }),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M6 4h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2Z"
  }),
  menu: /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }),
  bulb: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 21h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.2V16h6v-.3c0-.8.4-1.6 1-2.2A6 6 0 0 0 12 3Z"
  }))
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  className = "",
  ...rest
}) {
  const fill = name === "star" ? "currentColor" : "none";
  const stroke = name === "star" ? "none" : "currentColor";
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    "aria-hidden": "true"
  }, rest), PATHS[name] || PATHS.info);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/chrome/NeedHelpCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — NeedHelpCard
 * Warm tinted support card: lilac icon circle, title, body and a link (e.g.
 * "Call us" / "Chat to an expert"). Styling: .sel-helpcard.
 */
function NeedHelpCard({
  title = "Need help?",
  body,
  linkLabel = "Chat to an expert",
  linkHref = "#",
  icon = "phone",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-helpcard", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sel-helpcard__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sel-helpcard__title"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "sel-helpcard__body"
  }, body), /*#__PURE__*/React.createElement("a", {
    className: "sel-helpcard__link",
    href: linkHref
  }, linkLabel, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { NeedHelpCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/NeedHelpCard.jsx", error: String((e && e.message) || e) }); }

// components/chrome/ProgressTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — ProgressTimeline
 * Vertical stepped journey: numbered dots that fill peppermint when done and
 * navy when active. Pass steps with {title, sub, status}. Styling: .sel-timeline.
 */
function ProgressTimeline({
  steps = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-timeline", className].filter(Boolean).join(" ")
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: ["sel-timeline__step", s.status ? `sel-timeline__step--${s.status}` : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "sel-timeline__dot"
  }, s.status === "done" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  }) : i + 1), /*#__PURE__*/React.createElement("div", {
    className: "sel-timeline__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sel-timeline__title"
  }, s.title), s.sub && /*#__PURE__*/React.createElement("p", {
    className: "sel-timeline__sub"
  }, s.sub)))));
}
Object.assign(__ds_scope, { ProgressTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/ProgressTimeline.jsx", error: String((e && e.message) || e) }); }

// components/chrome/TrustBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — TrustBar
 * Social-proof strip: a row of trust points (green tick + label) and/or a
 * TrustPilot-style star block. variant="light" or "dark" to match the surface.
 * Styling: .sel-trustbar.
 */
function TrustBar({
  items = [],
  rating,
  reviews,
  variant = "light",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-trustbar", variant === "dark" ? "sel-trustbar--dark" : "", className].filter(Boolean).join(" ")
  }, rest), rating != null && /*#__PURE__*/React.createElement("div", {
    className: "sel-trustbar__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sel-trust-stars"
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 13
  })))), /*#__PURE__*/React.createElement("strong", null, rating), reviews && /*#__PURE__*/React.createElement("span", null, "\xB7 ", reviews)), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sel-trustbar__item"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick-circle",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/TrustBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Illustration.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Illustration
 * Renders one of the 11 brand illustrations (isometric line-work filled with
 * the palette on a soft dotted ground). Pass a `name` (resolved against
 * `basePath`, default "assets/illustrations") or an explicit `src`. Because the
 * art ships as project assets, set `basePath` to wherever you copied them.
 */
const ILLUSTRATIONS = ["heloc", "secured-loans", "debt-consolidation", "flexibility", "flexibility-alt", "security", "pre-approved", "pre-approved-alt", "in-control", "peace-of-mind", "easy"];
function Illustration({
  name = "heloc",
  src,
  basePath = "assets/illustrations",
  size = 240,
  alt = "",
  className = "",
  style = {},
  ...rest
}) {
  const resolved = src || `${basePath}/${name}.svg`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    width: size,
    height: size,
    alt: alt || name.replace(/-/g, " "),
    className: className,
    style: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ILLUSTRATIONS, Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/display/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Logo
 * The canonical swirl mark + "Selina" wordmark, inlined as vector paths with
 * fill:currentColor so it recolours via the `color` CSS property (drive it from
 * --color-midnight, or set --color-text-light to go inverse on dark surfaces).
 * Never imitate the wordmark with a text span — it is a custom letterform.
 *
 * variant="full" → mark + wordmark (125×36). variant="mark" → swirl only (36×36).
 */
const MARK = ["M20.7622 0.161831C20.2412 0.0823866 19.7261 0.0353085 19.2081 0L33.1274 8.23866C31.7561 6.09377 29.9446 4.26457 27.8129 2.87217C25.6812 1.47976 23.2779 0.555927 20.7622 0.161831Z", "M35.9331 16.2506L1.03608 11.8576C0.633653 12.9636 0.337966 14.1056 0.153057 15.2679C0.0765286 15.7622 0.0353209 16.2565 0 16.739L36.0126 17.0656C35.9979 16.7949 35.9596 16.5242 35.9331 16.2506Z", "M33.4456 27.3789L20.1414 36.0001C22.869 35.6697 25.4852 34.7214 27.7908 33.2274C30.0963 31.7334 32.0303 29.7331 33.4456 27.3789Z", "M34.5147 10.8044L14.2052 0.364883C12.3308 0.763088 10.5323 1.45843 8.87762 2.42455L35.074 12.2492C34.915 11.7695 34.7384 11.2782 34.5147 10.8044Z", "M0.0882568 20.1876C0.285803 21.8464 0.713775 23.4695 1.35981 25.0101L35.9919 19.2166C36.0096 18.94 36.0125 18.6664 36.0184 18.3927L0.0882568 20.1876Z", "M15.093 35.8969L34.7373 24.7658C34.9286 24.2803 35.0964 23.786 35.2495 23.2946L9.67126 34.102C11.3709 34.9863 13.2014 35.5923 15.093 35.8969Z", "M6.48141 31.9691L35.6506 21.609C35.7036 21.3471 35.7713 21.0911 35.8125 20.8234C35.8125 20.7557 35.8125 20.6939 35.8331 20.6263L3.03174 28.1293C3.99236 29.5673 5.15404 30.8604 6.48141 31.9691Z", "M35.5536 13.8971L5.82226 4.70805C4.54617 5.87154 3.44389 7.21225 2.54919 8.68909L35.7449 14.8681C35.6861 14.5385 35.6213 14.2149 35.5536 13.8971Z"];
const WORD = ["M122.149 29V24.17H121.548V18.74C121.548 17.74 121.288 16.99 120.768 16.49C120.268 15.97 119.507 15.71 118.487 15.71C117.946 15.71 117.326 15.72 116.626 15.74C115.945 15.76 115.275 15.79 114.615 15.83C113.954 15.85 113.374 15.88 112.874 15.92V12.8C113.314 12.76 113.804 12.73 114.345 12.71C114.885 12.67 115.445 12.65 116.025 12.65C116.606 12.63 117.146 12.62 117.646 12.62C119.307 12.62 120.678 12.83 121.758 13.25C122.839 13.67 123.649 14.34 124.19 15.26C124.73 16.16 125 17.37 125 18.89V29H122.149ZM116.896 29.42C115.695 29.42 114.655 29.22 113.774 28.82C112.894 28.4 112.213 27.8 111.733 27.02C111.253 26.22 111.013 25.27 111.013 24.17C111.013 23.01 111.293 22.05 111.853 21.29C112.414 20.53 113.204 19.96 114.224 19.58C115.265 19.2 116.486 19.01 117.886 19.01H121.938V21.35H117.826C116.786 21.35 115.985 21.6 115.425 22.1C114.865 22.6 114.585 23.26 114.585 24.08C114.585 24.88 114.865 25.53 115.425 26.03C115.985 26.51 116.786 26.75 117.826 26.75C118.447 26.75 119.027 26.64 119.567 26.42C120.127 26.18 120.588 25.79 120.948 25.25C121.308 24.71 121.508 23.96 121.548 23L122.449 24.17C122.349 25.31 122.068 26.27 121.608 27.05C121.168 27.81 120.548 28.4 119.747 28.82C118.967 29.22 118.016 29.42 116.896 29.42Z", "M94.5184 29V12.83H97.3699V19.76H97.0397C97.0397 18.14 97.2498 16.78 97.6701 15.68C98.1103 14.58 98.7706 13.75 99.6511 13.19C100.532 12.61 101.632 12.32 102.953 12.32H103.103C105.084 12.32 106.565 12.95 107.545 14.21C108.546 15.47 109.046 17.32 109.046 19.76V29H105.414V19.28C105.414 18.18 105.094 17.29 104.454 16.61C103.833 15.93 102.973 15.59 101.872 15.59C100.752 15.59 99.8412 15.94 99.1408 16.64C98.4605 17.34 98.1203 18.27 98.1203 19.43V29H94.5184Z", "M87.2439 29V12.83H90.8457V29H87.2439ZM84.8727 15.59V12.83H90.8457V15.59H84.8727ZM88.4445 10.61C87.7041 10.61 87.1539 10.42 86.7937 10.04C86.4535 9.64 86.2834 9.14 86.2834 8.54C86.2834 7.94 86.4535 7.45 86.7937 7.07C87.1539 6.67 87.7041 6.47 88.4445 6.47C89.1849 6.47 89.7252 6.67 90.0653 7.07C90.4255 7.45 90.6056 7.94 90.6056 8.54C90.6056 9.14 90.4255 9.64 90.0653 10.04C89.7252 10.42 89.1849 10.61 88.4445 10.61Z", "M82.7587 29.18C81.6782 29.18 80.7877 29.04 80.0874 28.76C79.387 28.46 78.8667 28 78.5266 27.38C78.1864 26.74 78.0163 25.9 78.0163 24.86V7.10001H81.6482V24.95C81.6482 25.31 81.7482 25.59 81.9483 25.79C82.1484 25.99 82.4286 26.09 82.7887 26.09H84.3796V29.18H82.7587Z", "M68.5558 29.57C67.1551 29.57 65.9345 29.33 64.8939 28.85C63.8534 28.37 62.993 27.73 62.3126 26.93C61.6523 26.13 61.152 25.24 60.8118 24.26C60.4917 23.26 60.3316 22.24 60.3316 21.2V20.63C60.3316 19.57 60.4917 18.55 60.8118 17.57C61.152 16.57 61.6523 15.67 62.3126 14.87C62.993 14.07 63.8334 13.44 64.8339 12.98C65.8544 12.5 67.035 12.26 68.3757 12.26C70.1166 12.26 71.5674 12.65 72.728 13.43C73.8886 14.19 74.759 15.18 75.3393 16.4C75.9396 17.6 76.2398 18.9 76.2398 20.3V21.74H61.8924V19.34H73.8385L72.818 20.57C72.818 19.47 72.6479 18.54 72.3077 17.78C71.9876 17 71.4973 16.4 70.837 15.98C70.1967 15.54 69.3762 15.32 68.3757 15.32C67.3552 15.32 66.4948 15.56 65.7944 16.04C65.1141 16.5 64.6038 17.15 64.2636 17.99C63.9234 18.81 63.7534 19.79 63.7534 20.93C63.7534 22.01 63.9134 22.97 64.2336 23.81C64.5738 24.65 65.1041 25.31 65.8244 25.79C66.5448 26.27 67.4553 26.51 68.5558 26.51C69.6764 26.51 70.5869 26.27 71.2872 25.79C71.9876 25.31 72.4278 24.75 72.6079 24.11H75.9396C75.7195 25.21 75.2693 26.17 74.5889 26.99C73.9286 27.81 73.0781 28.45 72.0376 28.91C71.0171 29.35 69.8565 29.57 68.5558 29.57Z", "M50.2258 29.57C48.3448 29.57 46.744 29.26 45.4233 28.64C44.1226 28.02 43.1221 27.18 42.4218 26.12C41.7414 25.04 41.4012 23.82 41.4012 22.46H45.0631C45.0631 23.08 45.2232 23.69 45.5434 24.29C45.8835 24.87 46.4338 25.35 47.1942 25.73C47.9546 26.11 48.9651 26.3 50.2258 26.3C51.4064 26.3 52.3669 26.14 53.1073 25.82C53.8676 25.48 54.4279 25.03 54.7881 24.47C55.1683 23.91 55.3584 23.3 55.3584 22.64C55.3584 21.82 54.9982 21.15 54.2779 20.63C53.5775 20.09 52.5069 19.76 51.0662 19.64L48.9351 19.46C46.8941 19.28 45.2632 18.65 44.0426 17.57C42.842 16.47 42.2417 15.03 42.2417 13.25C42.2417 11.87 42.5718 10.68 43.2322 9.68C43.8925 8.68 44.813 7.9 45.9936 7.34C47.1742 6.76 48.5449 6.47 50.1057 6.47C51.7065 6.47 53.0972 6.76 54.2779 7.34C55.4785 7.92 56.3989 8.73 57.0393 9.77C57.6996 10.79 58.0298 12 58.0298 13.4H54.3979C54.3979 12.78 54.2378 12.19 53.9177 11.63C53.6175 11.07 53.1473 10.62 52.5069 10.28C51.8866 9.92 51.0862 9.74 50.1057 9.74C49.1652 9.74 48.3848 9.9 47.7645 10.22C47.1442 10.54 46.674 10.97 46.3538 11.51C46.0536 12.05 45.9036 12.63 45.9036 13.25C45.9036 13.97 46.1737 14.61 46.714 15.17C47.2743 15.73 48.1247 16.06 49.2653 16.16L51.3964 16.34C52.9372 16.46 54.2779 16.79 55.4184 17.33C56.559 17.85 57.4395 18.55 58.0598 19.43C58.7001 20.31 59.0203 21.38 59.0203 22.64C59.0203 24 58.6501 25.21 57.9097 26.27C57.1893 27.31 56.1688 28.12 54.8481 28.7C53.5475 29.28 52.0067 29.57 50.2258 29.57Z"];
function Logo({
  variant = "full",
  height = 26,
  className = "",
  style = {},
  ...rest
}) {
  const mark = variant === "mark";
  const vb = mark ? "0 0 36 36" : "0 0 125 36";
  const ratio = mark ? 1 : 125 / 36;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: vb,
    height: height,
    width: height * ratio,
    fill: "currentColor",
    className: className,
    style: {
      display: "block",
      color: "var(--color-midnight)",
      ...style
    },
    role: "img",
    "aria-label": "Selina"
  }, rest), MARK.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: `m${i}`,
    d: d
  })), !mark && WORD.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: `w${i}`,
    d: d
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Logo.jsx", error: String((e && e.message) || e) }); }

// components/chrome/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — NavBar
 * Top app/marketing bar: logo left, nav links, optional right-side actions.
 * layout="desktop" shows the links; layout="mobile" collapses to a burger.
 * Styling: .sel-nav. Compose actions from <Button>.
 */
function NavBar({
  layout = "desktop",
  links = [],
  actions = null,
  onMenu,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["sel-nav", layout === "mobile" ? "sel-nav--mobile" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "sel-nav__logo",
    href: "#",
    "aria-label": "Selina home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 26
  })), layout === "desktop" && /*#__PURE__*/React.createElement("div", {
    className: "sel-nav__links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "sel-nav__link",
    href: l.href || "#"
  }, l.label))), /*#__PURE__*/React.createElement("span", {
    className: "sel-nav__spacer"
  }), actions, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sel-nav__burger",
    "aria-label": "Menu",
    onClick: onMenu
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu"
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Tag
 * Pill-shaped label (Inter bold). Almond by default; `popular` gives the mint +
 * navy-border "Popular" treatment used on offer cards. Styling: .sel-tag.
 */
function Tag({
  variant,
  className = "",
  children,
  ...rest
}) {
  const mod = variant ? `sel-tag--${variant}` : "";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["sel-tag", mod, className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/OfferCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — OfferCard
 * Rate/offer card with the chunky navy border + hard shadow, an optional
 * "Popular" badge, headline rate, name and a meta list. Styling: .sel-offer.
 */
function OfferCard({
  rate,
  rateSuffix = "APR",
  name,
  popular = false,
  meta = [],
  footer = null,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sel-offer", className].filter(Boolean).join(" ")
  }, rest), popular && /*#__PURE__*/React.createElement("div", {
    className: "sel-offer__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "popular"
  }, "Popular")), name && /*#__PURE__*/React.createElement("p", {
    className: "sel-offer__name"
  }, name), rate != null && /*#__PURE__*/React.createElement("div", {
    className: "sel-offer__rate"
  }, rate, /*#__PURE__*/React.createElement("small", null, " ", rateSuffix)), meta.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "sel-offer__meta"
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, m.label), /*#__PURE__*/React.createElement("strong", null, m.value)))), children, footer);
}
Object.assign(__ds_scope, { OfferCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/OfferCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Callout
 * Warm tinted panel with a peach lightbulb icon, body text, optional headline,
 * and an optional "Read more / Close" white pill toggle that reveals extra
 * content. Styling: .f-callout.
 */
function Callout({
  headline,
  children,
  more,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const expandable = more != null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-callout", expandable ? "f-callout--expandable" : "", open ? "is-open" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "f-callout-icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bulb",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-callout-content"
  }, headline && /*#__PURE__*/React.createElement("p", {
    className: "f-callout-headline"
  }, headline), /*#__PURE__*/React.createElement("div", {
    className: "f-callout-body"
  }, children), expandable && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "f-more-extra"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-more-extra-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-callout-body",
    style: {
      paddingTop: "var(--space-s)"
    }
  }, more))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "f-more-toggle",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null, open ? "Close" : "Read more"), /*#__PURE__*/React.createElement("span", {
    className: "f-more-caret"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 12
  }))))));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Checkbox
 * Selectable boxed row: the card border turns green + green ring when checked;
 * the 20px glyph fills navy with a white tick. Supports an optional supporting
 * line. Styling: .f-check.
 */
function Checkbox({
  label,
  supportText,
  error = false,
  className = "",
  id,
  children,
  ...rest
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ["f-check", error ? "is-error" : "", className].filter(Boolean).join(" "),
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId
  }, rest)), supportText ? /*#__PURE__*/React.createElement("span", {
    className: "f-opt-text"
  }, /*#__PURE__*/React.createElement("span", null, label || children), /*#__PURE__*/React.createElement("span", {
    className: "f-opt-support"
  }, supportText)) : label || children);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/OtpInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — OtpInput
 * Single-digit boxes for 2-factor / verification codes, with auto-advance,
 * backspace-to-previous and paste-to-fill. Styling: .f-otp.
 */
function OtpInput({
  length = 6,
  value,
  onChange,
  valid = false,
  error = false,
  className = "",
  ...rest
}) {
  const [digits, setDigits] = React.useState(() => value ? value.split("").slice(0, length) : Array(length).fill(""));
  const refs = React.useRef([]);
  function emit(next) {
    setDigits(next);
    onChange && onChange(next.join(""));
  }
  function onInput(i, v) {
    const d = v.replace(/\D/g, "").slice(-1);
    const next = digits.slice();
    next[i] = d;
    emit(next);
    if (d && refs.current[i + 1]) refs.current[i + 1].focus();
  }
  function onKey(i, e) {
    if (e.key === "Backspace" && !digits[i] && refs.current[i - 1]) refs.current[i - 1].focus();
  }
  function onPaste(e) {
    e.preventDefault();
    const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const next = Array(length).fill("");
    data.split("").forEach((c, j) => next[j] = c);
    emit(next);
    const focusIdx = Math.min(data.length, length - 1);
    if (refs.current[focusIdx]) refs.current[focusIdx].focus();
  }
  const state = error ? "is-error" : valid ? "is-valid" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-otp", state, className].filter(Boolean).join(" "),
    onPaste: onPaste
  }, rest), Array.from({
    length
  }).map((_, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    inputMode: "numeric",
    maxLength: 1,
    value: digits[i],
    onChange: e => onInput(i, e.target.value),
    onKeyDown: e => onKey(i, e)
  })));
}
Object.assign(__ds_scope, { OtpInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OtpInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Radio
 * Selectable boxed row (use several with a shared `name`): the card border turns
 * green when selected; the 16px glyph becomes a navy ring + navy dot. Supports
 * an optional supporting line. Styling: .f-radio. Wrap a set in
 * <div className="f-group-options"> to stack rows 8px apart.
 */
function Radio({
  label,
  supportText,
  error = false,
  className = "",
  id,
  children,
  ...rest
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ["f-radio", error ? "is-error" : "", className].filter(Boolean).join(" "),
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: fieldId
  }, rest)), supportText ? /*#__PURE__*/React.createElement("span", {
    className: "f-opt-text"
  }, /*#__PURE__*/React.createElement("span", null, label || children), /*#__PURE__*/React.createElement("span", {
    className: "f-opt-support"
  }, supportText)) : label || children);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Select
 * Custom dropdown: the trigger is the styled field (value + chevron affix); the
 * open menu uses the address-finder look (navy border, hard shadow, active row)
 * rather than the native OS list. Controlled or uncontrolled.
 */
function Select({
  label,
  options = [],
  value,
  defaultValue,
  placeholder = "Select…",
  onChange,
  valid = false,
  error = false,
  id,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const fieldId = id || React.useId();
  const ref = React.useRef(null);
  const current = value !== undefined ? value : internal;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const selected = opts.find(o => o.value === current);
  const controlState = error ? "is-error" : valid || selected ? "is-valid" : "";
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);
  function pick(o) {
    if (value === undefined) setInternal(o.value);
    onChange && onChange(o.value);
    setOpen(false);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-field", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "f-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "f-select-field",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: fieldId,
    className: ["f-control", "f-select-trigger", controlState].filter(Boolean).join(" "),
    "aria-expanded": open,
    "aria-haspopup": "listbox",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: ["f-select-value", selected ? "" : "is-placeholder"].filter(Boolean).join(" ")
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "f-select-chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 20
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "f-select-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-results"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "f-results-list",
    role: "listbox"
  }, opts.map(o => /*#__PURE__*/React.createElement("li", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === current,
    className: o.value === current ? "is-active" : "",
    onClick: () => pick(o)
  }, o.label)))))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Slider
 * Thin almond track with a midnight fill and the custom periwinkle double-arrow
 * handle (baked into forms.css). Live value readout with optional prefix/suffix
 * and min/max end labels. Styling: .f-slider.
 */
function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  prefix = "",
  suffix = "",
  showEnds = true,
  formatEnd,
  className = "",
  id,
  ...rest
}) {
  const fieldId = id || React.useId();
  const [internal, setInternal] = React.useState(defaultValue ?? min);
  const current = value !== undefined ? value : internal;
  const pct = (Number(current) - min) / (max - min) * 100;
  const fmt = v => `${prefix}${Number(v).toLocaleString("en-GB")}${suffix}`;
  const end = formatEnd || fmt;
  function handle(e) {
    const v = Number(e.target.value);
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-slider", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "f-slider-top"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "f-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "f-slider-val"
  }, fmt(current))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    id: fieldId,
    min: min,
    max: max,
    step: step,
    value: current,
    onChange: handle,
    style: {
      "--p": `${pct}%`
    }
  }), showEnds && /*#__PURE__*/React.createElement("div", {
    className: "f-slider-ends"
  }, /*#__PURE__*/React.createElement("span", null, end(min)), /*#__PURE__*/React.createElement("span", null, end(max))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Switch
 * Pill-track toggle (no border) with a white knob + soft shadow; the track turns
 * peppermint when on. Optional label sits beside it. Styling: .f-switch.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  className = "",
  id,
  ...rest
}) {
  const fieldId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ["f-switch", className].filter(Boolean).join(" "),
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: fieldId,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — TextField
 * Label + control + helper, built on the .f-field / .f-control form anatomy.
 * Supports £/% (and any) prefix/suffix affixes, password show/hide, a live
 * character count, search, and valid / error states. Self-contained React
 * (manages its own password + count state; no forms.js needed).
 */
function TextField({
  label,
  labelLarge = false,
  description,
  type = "text",
  prefix,
  suffix,
  search = false,
  password = false,
  helper,
  count = false,
  maxLength,
  valid = false,
  error = false,
  value,
  defaultValue,
  onChange,
  id,
  className = "",
  inputProps = {},
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const [len, setLen] = React.useState((value ?? defaultValue ?? "").length);
  const fieldId = id || React.useId();
  const controlState = error ? "is-error" : valid ? "is-valid" : "";
  const inputType = password ? show ? "text" : "password" : type;
  function handleChange(e) {
    setLen(e.target.value.length);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-field", error ? "is-error" : valid ? "is-valid" : "", className].filter(Boolean).join(" ")
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: labelLarge ? "f-label f-label--lg" : "f-label",
    htmlFor: fieldId
  }, label), description && /*#__PURE__*/React.createElement("p", {
    className: "f-desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: ["f-control", controlState].filter(Boolean).join(" ")
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "f-affix f-affix--prefix"
  }, prefix), search && /*#__PURE__*/React.createElement("span", {
    className: "f-affix f-affix--ghost"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "f-input",
    type: inputType,
    value: value,
    defaultValue: defaultValue,
    maxLength: maxLength,
    onChange: handleChange
  }, inputProps)), password && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "f-affix f-affix--suffix f-affix--toggle",
    onClick: () => setShow(s => !s)
  }, show ? "Hide" : "Show"), valid && !password && /*#__PURE__*/React.createElement("span", {
    className: "f-affix f-affix--ghost",
    style: {
      color: "var(--color-text-success)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick-circle",
    size: 20
  })), suffix && !password && /*#__PURE__*/React.createElement("span", {
    className: "f-affix f-affix--suffix"
  }, suffix)), (helper || count) && /*#__PURE__*/React.createElement("div", {
    className: "f-help"
  }, helper && /*#__PURE__*/React.createElement("span", null, helper), count && /*#__PURE__*/React.createElement("span", {
    className: "f-count"
  }, len, maxLength ? `/${maxLength}` : "")));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — Textarea
 * Multi-line field on the .f-field / .f-control anatomy with an optional live
 * character count and valid / error states.
 */
function Textarea({
  label,
  description,
  helper,
  count = false,
  maxLength,
  rows = 4,
  valid = false,
  error = false,
  value,
  defaultValue,
  onChange,
  id,
  className = "",
  ...rest
}) {
  const [len, setLen] = React.useState((value ?? defaultValue ?? "").length);
  const fieldId = id || React.useId();
  const controlState = error ? "is-error" : valid ? "is-valid" : "";
  function handleChange(e) {
    setLen(e.target.value.length);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: ["f-field", error ? "is-error" : valid ? "is-valid" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "f-label",
    htmlFor: fieldId
  }, label), description && /*#__PURE__*/React.createElement("p", {
    className: "f-desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: ["f-control", "f-control--textarea", controlState].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: "f-input",
    rows: rows,
    maxLength: maxLength,
    value: value,
    defaultValue: defaultValue,
    onChange: handleChange
  }, rest))), (helper || count) && /*#__PURE__*/React.createElement("div", {
    className: "f-help"
  }, helper && /*#__PURE__*/React.createElement("span", null, helper), count && /*#__PURE__*/React.createElement("span", {
    className: "f-count"
  }, len, maxLength ? `/${maxLength}` : "")));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/YesNo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selina — YesNo
 * Two selectable boxed radios side by side; the chosen box turns green + ring
 * with a navy radio glyph. Controlled or uncontrolled. Styling: .f-yesno.
 */
function YesNo({
  name,
  value,
  defaultValue,
  onChange,
  yesLabel = "Yes",
  noLabel = "No",
  className = "",
  ...rest
}) {
  const auto = React.useId();
  const group = name || auto;
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const current = value !== undefined ? value : internal;
  function pick(v) {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["f-yesno", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: group,
    value: "yes",
    checked: current === "yes",
    onChange: () => pick("yes")
  }), /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, yesLabel)), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: group,
    value: "no",
    checked: current === "no",
    onChange: () => pick("no")
  }), /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, noLabel)));
}
Object.assign(__ds_scope, { YesNo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/YesNo.jsx", error: String((e && e.message) || e) }); }

// styles/forms.js
try { (() => {
/* =================================================================
   Selina Finance — Form behaviours (vanilla, no deps)
   Powers the data-attribute hooks documented in components.md:
     • data-f-count          live character count
     • data-f-toggle-password show / hide
     • data-f-slider          live readout + track fill
     • .f-otp                 auto-advance / backspace / paste
     • .f-callout             read-more expand / collapse
     • .f-select-field        custom dropdown menu
     • data-f-address         postcode lookup state machine (demo data)
     • data-f-calendar        N-day select calendar
   Idempotent: call SelinaForms.init(root) again after injecting markup.
   ================================================================= */
(function (global) {
  "use strict";

  var CHEVRON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---- char count ---- */
  function initCount(root) {
    root.querySelectorAll("[data-f-count]").forEach(function (el) {
      if (el.__sfCount) return;
      el.__sfCount = true;
      var field = el.closest(".f-field") || root;
      var out = field.querySelector(".f-count");
      var max = el.getAttribute("maxlength");
      function upd() {
        if (out) out.textContent = el.value.length + (max ? "/" + max : "");
      }
      el.addEventListener("input", upd);
      upd();
    });
  }

  /* ---- password show / hide ---- */
  function initPassword(root) {
    root.querySelectorAll("[data-f-toggle-password]").forEach(function (btn) {
      if (btn.__sf) return;
      btn.__sf = true;
      btn.addEventListener("click", function () {
        var control = btn.closest(".f-control");
        var input = control && control.querySelector(".f-input");
        if (!input) return;
        var show = input.type === "password";
        input.type = show ? "text" : "password";
        var label = btn.querySelector("[data-f-pw-label]") || btn;
        if (label) label.textContent = show ? "Hide" : "Show";
      });
    });
  }

  /* ---- slider ---- */
  function initSlider(root) {
    root.querySelectorAll("[data-f-slider]").forEach(function (input) {
      if (input.__sf) return;
      input.__sf = true;
      var wrap = input.closest(".f-slider") || root;
      var out = wrap.querySelector(".f-slider-val");
      var pre = input.getAttribute("data-prefix") || "";
      var suf = input.getAttribute("data-suffix") || "";
      function fmt(v) {
        return pre + Number(v).toLocaleString("en-GB") + suf;
      }
      function upd() {
        var min = Number(input.min || 0),
          max = Number(input.max || 100);
        var p = (Number(input.value) - min) / (max - min) * 100;
        input.style.setProperty("--p", p + "%");
        if (out) out.textContent = fmt(input.value);
      }
      input.addEventListener("input", upd);
      upd();
    });
  }

  /* ---- OTP ---- */
  function initOtp(root) {
    root.querySelectorAll(".f-otp").forEach(function (otp) {
      if (otp.__sf) return;
      otp.__sf = true;
      var inputs = Array.prototype.slice.call(otp.querySelectorAll("input"));
      inputs.forEach(function (input, i) {
        input.setAttribute("inputmode", "numeric");
        input.setAttribute("maxlength", "1");
        input.addEventListener("input", function () {
          input.value = input.value.replace(/\D/g, "").slice(0, 1);
          if (input.value && inputs[i + 1]) inputs[i + 1].focus();
        });
        input.addEventListener("keydown", function (e) {
          if (e.key === "Backspace" && !input.value && inputs[i - 1]) inputs[i - 1].focus();
        });
        input.addEventListener("paste", function (e) {
          e.preventDefault();
          var data = (e.clipboardData || global.clipboardData).getData("text").replace(/\D/g, "");
          inputs.forEach(function (inp, j) {
            if (data[j]) inp.value = data[j];
          });
          var next = inputs[Math.min(data.length, inputs.length - 1)];
          if (next) next.focus();
        });
      });
    });
  }

  /* ---- callout read-more ---- */
  function initCallout(root) {
    root.querySelectorAll(".f-callout .f-more-toggle").forEach(function (btn) {
      if (btn.__sf) return;
      btn.__sf = true;
      btn.addEventListener("click", function () {
        var callout = btn.closest(".f-callout");
        var open = callout.classList.toggle("is-open");
        var label = btn.querySelector("[data-f-more-label]");
        if (label) label.textContent = open ? "Close" : "Read more";
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  /* ---- custom select ---- */
  function initSelect(root) {
    root.querySelectorAll(".f-select-field").forEach(function (field) {
      if (field.__sf) return;
      field.__sf = true;
      var trigger = field.querySelector(".f-select-trigger");
      var menu = field.querySelector(".f-select-menu");
      var valueEl = field.querySelector(".f-select-value");
      if (!trigger || !menu) return;
      function close() {
        trigger.setAttribute("aria-expanded", "false");
        menu.classList.add("f-hidden");
      }
      function open() {
        trigger.setAttribute("aria-expanded", "true");
        menu.classList.remove("f-hidden");
      }
      close();
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        if (trigger.getAttribute("aria-expanded") === "true") close();else open();
      });
      menu.querySelectorAll("[data-f-option]").forEach(function (opt) {
        opt.addEventListener("click", function () {
          if (valueEl) {
            valueEl.textContent = opt.textContent;
            valueEl.classList.remove("is-placeholder");
          }
          menu.querySelectorAll(".is-active").forEach(function (a) {
            a.classList.remove("is-active");
          });
          opt.classList.add("is-active");
          var control = trigger.querySelector(".f-control") || trigger.closest(".f-control");
          if (control) control.classList.add("is-valid");
          field.dispatchEvent(new CustomEvent("f-select-change", {
            detail: {
              value: opt.getAttribute("data-f-option")
            }
          }));
          close();
        });
      });
      document.addEventListener("click", function (e) {
        if (!field.contains(e.target)) close();
      });
    });
  }

  /* ---- address lookup (demo data) ---- */
  var DEMO_ADDRESSES = ["Flat 1, 10 Downing Street, London, SW1A 2AA", "Flat 2, 10 Downing Street, London, SW1A 2AA", "10 Downing Street, London, SW1A 2AA", "11 Downing Street, London, SW1A 2AA", "12 Downing Street, London, SW1A 2AA"];
  function initAddress(root) {
    root.querySelectorAll("[data-f-address]").forEach(function (addr) {
      if (addr.__sf) return;
      addr.__sf = true;
      var input = addr.querySelector("[data-f-addr-input]");
      var action = addr.querySelector("[data-f-addr-action]");
      var results = addr.querySelector("[data-f-addr-results]");
      var list = results && results.querySelector(".f-results-list");
      var summary = addr.querySelector("[data-f-addr-summary]");
      var summaryText = addr.querySelector("[data-f-addr-summary-text]");
      function hasValue() {
        return input && input.value.trim().length > 0;
      }
      function sync() {
        addr.classList.toggle("has-value", hasValue());
      }
      function showResults() {
        if (!list) return;
        list.innerHTML = "";
        DEMO_ADDRESSES.forEach(function (a, i) {
          var li = document.createElement("li");
          li.textContent = a;
          if (i === 0) li.classList.add("is-active");
          li.addEventListener("click", function () {
            if (summaryText) summaryText.textContent = a;
            if (results) results.classList.add("f-hidden");
            if (summary) summary.classList.remove("f-hidden");
          });
          list.appendChild(li);
        });
        if (results) results.classList.remove("f-hidden");
        if (summary) summary.classList.add("f-hidden");
      }
      if (input) input.addEventListener("input", sync);
      if (action) action.addEventListener("click", function () {
        if (hasValue()) {
          if (addr.classList.contains("has-value") && input.value) showResults();
        }
      });
      // search icon → find; once a postcode is present the icon flips to clear (CSS), so click clears
      if (action) action.addEventListener("click", function () {
        if (addr.classList.contains("searched")) {
          input.value = "";
          sync();
          if (results) results.classList.add("f-hidden");
          if (summary) summary.classList.add("f-hidden");
          addr.classList.remove("searched");
        } else if (hasValue()) {
          addr.classList.add("searched");
          showResults();
        }
      });
      sync();
    });
  }

  /* ---- calendar (N-day select) ---- */
  function initCalendar(root) {
    root.querySelectorAll("[data-f-calendar]").forEach(function (cal) {
      if (cal.__sf) return;
      cal.__sf = true;
      var grid = cal.querySelector(".f-cal-grid");
      var readout = cal.querySelector(".f-cal-readout strong");
      var windowDays = parseInt(cal.getAttribute("data-f-window") || "28", 10);
      var todayInput = cal.querySelector("[data-f-cal-today]");
      var DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function startOf(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      }
      function render() {
        if (!grid) return;
        var today = startOf(todayInput && todayInput.value ? new Date(todayInput.value) : new Date());
        var end = new Date(today);
        end.setDate(end.getDate() + windowDays);
        // start grid on Monday of the week containing today
        var first = new Date(today);
        var dow = (first.getDay() + 6) % 7; // Mon=0
        first.setDate(first.getDate() - dow);
        // span enough weeks to cover the window
        var last = new Date(end);
        var lastDow = (last.getDay() + 6) % 7;
        last.setDate(last.getDate() + (6 - lastDow));
        grid.innerHTML = "";
        DOW.forEach(function (d) {
          var c = document.createElement("div");
          c.className = "f-cal-dow";
          c.textContent = d;
          grid.appendChild(c);
        });
        var cursor = new Date(first);
        var lastMonth = -1;
        while (cursor <= last) {
          if (cursor.getMonth() !== lastMonth) {
            lastMonth = cursor.getMonth();
            var ml = document.createElement("div");
            ml.className = "f-cal-month";
            ml.textContent = MONTHS[lastMonth];
            // pad to start of week column for the label row break
            grid.appendChild(ml);
            var pad = (cursor.getDay() + 6) % 7;
            for (var p = 0; p < pad; p++) {
              var sp = document.createElement("div");
              grid.appendChild(sp);
            }
          }
          (function (date) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "f-cal-day";
            btn.textContent = date.getDate();
            var t = startOf(date);
            if (t < today) {
              btn.classList.add("is-past");
              btn.disabled = true;
            } else if (t >= end) {
              btn.classList.add("is-beyond");
              btn.disabled = true;
            } else {
              btn.classList.add("is-open");
              btn.addEventListener("click", function () {
                grid.querySelectorAll(".is-selected").forEach(function (s) {
                  s.classList.remove("is-selected");
                });
                btn.classList.add("is-selected");
                if (readout) readout.textContent = date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear();
              });
            }
            grid.appendChild(btn);
          })(new Date(cursor));
          cursor.setDate(cursor.getDate() + 1);
        }
      }
      if (todayInput) todayInput.addEventListener("change", render);
      render();
    });
  }
  function init(root) {
    root = root || document;
    initCount(root);
    initPassword(root);
    initSlider(root);
    initOtp(root);
    initCallout(root);
    initSelect(root);
    initAddress(root);
    initCalendar(root);
  }
  var api = {
    init: init,
    CHEVRON: CHEVRON
  };
  global.SelinaForms = api;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init(document);
    });
  } else {
    init(document);
  }
})(typeof window !== "undefined" ? window : this);
})(); } catch (e) { __ds_ns.__errors.push({ path: "styles/forms.js", error: String((e && e.message) || e) }); }

// ui_kits/application/AppShell.jsx
try { (() => {
// Selina — Application UI kit · AppShell
// The FormPage scaffold: NavBar on top, a 12-col container with the form in
// cols 2–8 and a sticky right rail in cols 9–13, ProgressBar above the form,
// and a FixedActionBar pinned to the bottom. Pure chrome — the steps render
// their fields into {children}. Composes the real DS components.
const NS = window.SelinaFinanceDesignSystem_2d7665;
function AppShell({
  step,
  totalSteps,
  stepLabel,
  title,
  intro,
  children,
  rail,
  actions
}) {
  const {
    NavBar,
    ProgressBar,
    FixedActionBar,
    Button
  } = NS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--color-bg-primary)"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: "HELOC"
    }, {
      label: "Secured loans"
    }, {
      label: "Debt consolidation"
    }, {
      label: "About"
    }],
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "m"
    }, "Log in")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 24px 120px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: "var(--grid-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "2 / 9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: step,
    max: totalSteps,
    label: stepLabel
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--h-l-weight)",
      fontSize: "var(--h-l-size)",
      lineHeight: "var(--h-l-lh)",
      letterSpacing: "var(--h-l-ls)",
      color: "var(--color-text-primary)",
      margin: "28px 0 8px"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--p-m-size)",
      lineHeight: "var(--p-m-lh)",
      color: "var(--color-text-secondary)",
      margin: "0 0 32px"
    }
  }, intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, children))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "9 / 13"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, rail)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(FixedActionBar, {
    note: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }
    }, "Your progress is saved automatically.")
  }, actions)));
}

// Right-rail "Your quote" summary card — composed from DS primitives.
function QuoteSummary({
  amount,
  term,
  rate,
  monthly
}) {
  const {
    Card,
    Badge
  } = NS;
  const Row = ({
    k,
    v
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-text-primary)"
    }
  }, v));
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 16
    }
  }, "Your quote"), /*#__PURE__*/React.createElement(Badge, {
    variant: "mint"
  }, "Soft search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Loan amount",
    v: amount
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Term",
    v: term
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Estimated rate",
    v: rate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--color-form-border)",
      margin: "4px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-text-secondary)"
    }
  }, "Est. monthly"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: "-1px"
    }
  }, monthly))));
}
window.AppShell = AppShell;
window.QuoteSummary = QuoteSummary;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/application/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/application/ApplicationFlow.jsx
try { (() => {
// Selina — Application UI kit · ApplicationFlow
// Interactive 4-step HELOC application: Your details → Property & loan →
// Verify → Approved. State drives the right-rail quote summary. Every control
// is a real design-system component; AppShell provides the page chrome.
const _NS = window.SelinaFinanceDesignSystem_2d7665;
function money(n) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}
function monthlyPayment(P, ratePct, years) {
  const r = ratePct / 100 / 12,
    n = years * 12;
  if (r === 0) return P / n;
  return P * r / (1 - Math.pow(1 + r, -n));
}
function ApplicationFlow() {
  const {
    TextField,
    Select,
    Slider,
    Radio,
    YesNo,
    Checkbox,
    Callout,
    OtpInput,
    NeedHelpCard,
    TrustBar,
    Button,
    Card,
    Badge,
    Icon,
    Illustration,
    OfferCard
  } = _NS;
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState(25000);
  const [term, setTerm] = React.useState(15);
  const [purpose, setPurpose] = React.useState("Home improvements");
  const [repayment, setRepayment] = React.useState("repayment");
  const rate = 6.4;
  const monthly = monthlyPayment(amount, rate, term);
  const rail = step < 4 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(QuoteSummary, {
    amount: money(amount),
    term: `${term} years`,
    rate: `${rate}% APR`,
    monthly: money(monthly) + "/mo"
  }), /*#__PURE__*/React.createElement(NeedHelpCard, {
    body: "Our UK lending team is here 9am\u20136pm, Mon\u2013Fri.",
    linkLabel: "Call 0204 525 3692",
    icon: "phone"
  })) : /*#__PURE__*/React.createElement(NeedHelpCard, {
    title: "What happens next?",
    body: "We'll email your formal offer within 2 working days. No further action needed for now.",
    linkLabel: "View timeline",
    icon: "info"
  });

  // ---- Step content ----
  let title,
    intro,
    body,
    actions,
    stepLabel = `Step ${Math.min(step, 3)} of 3`;
  if (step === 1) {
    title = "Tell us about you";
    intro = "We'll run a soft search to show your real rate — it won't affect your credit score.";
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, {
      label: "Full name",
      defaultValue: "Alex Morgan"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Email address",
      type: "email",
      defaultValue: "alex@example.co.uk",
      valid: true
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Mobile number",
      defaultValue: "07700 900123",
      helper: "We'll text a code to verify it later."
    }), /*#__PURE__*/React.createElement("div", {
      className: "f-field",
      style: {
        maxWidth: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-label"
    }, "Are you a UK homeowner?"), /*#__PURE__*/React.createElement(YesNo, {
      name: "homeowner",
      defaultValue: "yes"
    })), /*#__PURE__*/React.createElement(Callout, {
      headline: "Soft search only"
    }, "Checking your rate takes 2 minutes and leaves no mark on your credit file."));
    actions = /*#__PURE__*/React.createElement(Button, {
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 20
      }),
      onClick: () => setStep(2)
    }, "Continue");
  } else if (step === 2) {
    title = "Your property & loan";
    intro = "Drag to set how much you'd like and over how long.";
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Slider, {
      label: "How much would you like?",
      min: 10000,
      max: 500000,
      step: 1000,
      value: amount,
      prefix: "\xA3",
      onChange: setAmount
    }), /*#__PURE__*/React.createElement(Slider, {
      label: "Over how long?",
      min: 5,
      max: 30,
      value: term,
      suffix: " years",
      onChange: setTerm
    }), /*#__PURE__*/React.createElement(Select, {
      label: "What's it for?",
      options: ["Home improvements", "Debt consolidation", "Car purchase", "A big life event", "Other"],
      value: purpose,
      onChange: setPurpose
    }), /*#__PURE__*/React.createElement("div", {
      className: "f-field",
      style: {
        maxWidth: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-label"
    }, "Repayment type"), /*#__PURE__*/React.createElement("div", {
      className: "f-group-options"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "rep",
      label: "Repayment",
      supportText: "Pay off capital + interest",
      checked: repayment === "repayment",
      onChange: () => setRepayment("repayment")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "rep",
      label: "Interest only",
      supportText: "Lower monthly payments",
      checked: repayment === "interest",
      onChange: () => setRepayment("interest")
    }))));
    actions = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => setStep(1)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 20
      }),
      onClick: () => setStep(3)
    }, "Continue"));
  } else if (step === 3) {
    title = "Verify it's you";
    intro = "We've sent a 6-digit code to your mobile ending 123.";
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "f-field",
      style: {
        maxWidth: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-label"
    }, "Enter your code"), /*#__PURE__*/React.createElement(OtpInput, {
      length: 6
    }), /*#__PURE__*/React.createElement("div", {
      className: "f-help"
    }, /*#__PURE__*/React.createElement("span", null, "Didn't get it? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        color: "var(--color-text-link)"
      }
    }, "Resend code")))), /*#__PURE__*/React.createElement(Checkbox, {
      name: "terms",
      label: "I agree to the soft credit search and privacy policy"
    }));
    actions = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => setStep(2)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setStep(4)
    }, "See my result"));
  } else {
    title = "Good news — you're pre-approved";
    stepLabel = "Complete";
    intro = "Based on a soft search, here's the offer we can take forward to a full application.";
    body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 24,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Illustration, {
      name: "pre-approved",
      basePath: "../../assets/illustrations",
      size: 180
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 220px"
      }
    }, /*#__PURE__*/React.createElement(OfferCard, {
      popular: true,
      name: "HELOC",
      rate: `${rate}%`,
      rateSuffix: "APR representative",
      meta: [{
        label: "You asked for",
        value: money(amount)
      }, {
        label: "Over",
        value: `${term} years`
      }, {
        label: "Est. monthly",
        value: money(monthly)
      }],
      footer: /*#__PURE__*/React.createElement(Button, {
        block: true,
        onClick: () => setStep(1)
      }, "Continue to full application")
    }))), /*#__PURE__*/React.createElement(TrustBar, {
      rating: "4.6",
      reviews: "2,481 reviews on Trustpilot",
      items: ["No impact on your credit score", "Money in as little as 5 days"]
    }));
    actions = /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setStep(1)
    }, "Start a new quote");
  }
  return /*#__PURE__*/React.createElement(AppShell, {
    step: Math.min(step, 3),
    totalSteps: 3,
    stepLabel: stepLabel,
    title: title,
    intro: intro,
    rail: rail,
    actions: actions
  }, body);
}
window.ApplicationFlow = ApplicationFlow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/application/ApplicationFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
// Selina — Website UI kit · Homepage
// Marketing homepage: hero with illustration + trust strip, product cards,
// a "how it works" timeline and a CTA band. Composed from DS components.
const _WNS = window.SelinaFinanceDesignSystem_2d7665;
function Section({
  children,
  bg,
  pad = "72px 24px"
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: pad,
      boxSizing: "border-box"
    }
  }, children));
}
function Homepage() {
  const {
    NavBar,
    TrustBar,
    Button,
    Card,
    Badge,
    Icon,
    Illustration,
    ProgressTimeline
  } = _WNS;
  const products = [{
    name: "HELOC",
    art: "heloc",
    desc: "A flexible line of credit secured on your home. Draw what you need, when you need it.",
    rate: "6.4%"
  }, {
    name: "Secured loans",
    art: "secured-loans",
    desc: "Borrow a lump sum from £10k to £500k at rates lower than unsecured lending.",
    rate: "6.9%"
  }, {
    name: "Debt consolidation",
    art: "debt-consolidation",
    desc: "Roll multiple debts into one lower monthly payment you're in control of.",
    rate: "7.2%"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-primary)"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: "HELOC"
    }, {
      label: "Secured loans"
    }, {
      label: "Debt consolidation"
    }, {
      label: "About"
    }],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "m"
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      size: "m"
    }, "Get a quote"))
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "64px 24px 48px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "lilac"
  }, "Borrow against your home"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--h-2xl-weight)",
      fontSize: "var(--h-2xl-size)",
      lineHeight: "var(--h-2xl-lh)",
      letterSpacing: "var(--h-2xl-ls)",
      color: "var(--color-text-primary)",
      margin: "16px 0 16px"
    }
  }, "A clearer way to borrow"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--p-l-size)",
      lineHeight: "var(--p-l-lh)",
      color: "var(--color-text-secondary)",
      margin: "0 0 28px",
      maxWidth: 460
    }
  }, "Unlock the value in your home from \xA310,000 to \xA3500,000. Check your real rate in 2 minutes \u2014 with no impact on your credit score."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 22
    })
  }, "Check my rate"), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    variant: "tertiary"
  }, "How it works")), /*#__PURE__*/React.createElement(TrustBar, {
    rating: "4.6",
    reviews: "2,481 reviews",
    items: ["No impact on credit score"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "heloc",
    basePath: "../../assets/illustrations",
    size: 420
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg-light-tint)"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--h-l-weight)",
      fontSize: "var(--h-l-size)",
      lineHeight: "var(--h-l-lh)",
      letterSpacing: "var(--h-l-ls)",
      color: "var(--color-text-primary)",
      margin: "0 0 8px",
      textAlign: "center"
    }
  }, "One home. Three ways to borrow."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--p-m-size)",
      color: "var(--color-text-secondary)",
      textAlign: "center",
      margin: "0 0 40px"
    }
  }, "Whatever you're borrowing for, we'll show your real rate up front."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: p.art,
    basePath: "../../assets/illustrations",
    size: 140,
    style: {
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "var(--h-s-size)",
      margin: "8px 0 0"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--color-text-secondary)",
      margin: 0,
      flex: 1
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-text-secondary)"
    }
  }, "From ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-text-primary)",
      fontSize: 18
    }
  }, p.rate), " APR"), /*#__PURE__*/React.createElement(Button, {
    size: "s",
    variant: "outline",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Learn more")))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: "easy",
    basePath: "../../assets/illustrations",
    size: 360,
    style: {
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "sel-eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--h-l-weight)",
      fontSize: "var(--h-l-size)",
      lineHeight: "var(--h-l-lh)",
      letterSpacing: "var(--h-l-ls)",
      color: "var(--color-text-primary)",
      margin: "8px 0 28px"
    }
  }, "From quote to cash in 5 days"), /*#__PURE__*/React.createElement(ProgressTimeline, {
    steps: [{
      title: "Check your rate",
      sub: "A 2-minute soft search — no credit impact.",
      status: "done"
    }, {
      title: "Apply online",
      sub: "Upload documents and book a quick valuation.",
      status: "active"
    }, {
      title: "Get your money",
      sub: "Funds in your account in as little as 5 days."
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg-contrast)",
    pad: "64px 24px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--h-l-weight)",
      fontSize: "var(--h-l-size)",
      lineHeight: "var(--h-l-lh)",
      letterSpacing: "var(--h-l-ls)",
      color: "var(--color-text-extra-light)",
      margin: "0 0 8px"
    }
  }, "See your real rate today"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--p-m-size)",
      color: "var(--color-text-light)",
      margin: 0
    }
  }, "Two minutes. No impact on your credit score.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "xl",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 22
    })
  }, "Check my rate"))));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FixedActionBar = __ds_scope.FixedActionBar;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NeedHelpCard = __ds_scope.NeedHelpCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressTimeline = __ds_scope.ProgressTimeline;

__ds_ns.TrustBar = __ds_scope.TrustBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ILLUSTRATIONS = __ds_scope.ILLUSTRATIONS;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.OfferCard = __ds_scope.OfferCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.OtpInput = __ds_scope.OtpInput;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.YesNo = __ds_scope.YesNo;

})();

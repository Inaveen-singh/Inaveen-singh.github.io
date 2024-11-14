!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)");
  } catch (r) {
    const o = new URL(e, location),
      n = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[t] = (e) =>
      new Promise((r, a) => {
        const s = new URL(e, o);
        if (self[t].moduleMap[s]) return r(self[t].moduleMap[s]);
        const c = new Blob(
            [`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`],
            {
              type: "text/javascript",
            }
          ),
          l = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(c),
            onerror() {
              a(new Error(`Failed to import: ${e}`)), n(l);
            },
            onload() {
              r(self[t].moduleMap[s]), n(l);
            },
          });
        document.head.appendChild(l);
      })),
      (self[t].moduleMap = {});
  }
})("assets/");
const e = document.querySelector("form"),
  t = document.querySelectorAll('input[type="range"]'),
  r = (e) => {
    const t = e.getAttribute("max") || 10,
      r = (e.value / t) * 100;
    return `${parseInt(r)}%`;
  };
t.forEach((e) => {
  e.style.setProperty("--track-fill", r(e)),
    e.addEventListener("input", (e) => {
      e.target.style.setProperty("--track-fill", r(e.target));
    });
}),
  e.addEventListener("input", (t) => {
    const r = Object.fromEntries(new FormData(e));
    console.table(r);
  });

const fontSizeSlider = document.getElementById("font-size-slider");
const lineheight = document.getElementById("line-height-slider");
const displayText = document.getElementById("section1");

fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  displayText.style.fontSize = `${fontSize}em`;
});

lineheight.addEventListener("input", () => {
  const lineHeight = lineheight.value;
  displayText.style.lineHeight = lineHeight;
});
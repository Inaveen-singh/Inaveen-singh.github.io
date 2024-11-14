const init = () => {
  document.querySelector("form").addEventListener("change", (event) => {
    document
      .querySelector('meta[name="color-scheme"]')
      .setAttribute("content", event.target.value);
    // at this point you may also want to persist the choice in localStorage
  });
};
const onReady = (cb) => {
  if (document.readyState !== "loading") return cb();
  document.addEventListener("DOMContentLoaded", cb);
};
onReady(init);

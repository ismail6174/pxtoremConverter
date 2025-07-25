const baseInput = document.getElementById("base");

    const pxInput = document.getElementById("px");
    const remResult = document.getElementById("remResult");
    const percentResult = document.getElementById("percentResult");

    const remInput = document.getElementById("rem");
    const pxFromRem = document.getElementById("pxFromRem");

    const percentInput = document.getElementById("percent");
    const pxFromPercent = document.getElementById("pxFromPercent");

    function convertPx() {
      const px = parseFloat(pxInput.value);
      const base = parseFloat(baseInput.value);
      if (!isNaN(px) && !isNaN(base) && base !== 0) {
        remResult.textContent = `REM: ${(px / base).toFixed(4)}rem`;
        percentResult.textContent = `Percent: ${((px / base) * 100).toFixed(2)}%`;
      } else {
        remResult.textContent = `REM: -`;
        percentResult.textContent = `Percent: -`;
      }
    }

    function convertRem() {
      const rem = parseFloat(remInput.value);
      const base = parseFloat(baseInput.value);
      if (!isNaN(rem) && !isNaN(base)) {
        pxFromRem.textContent = `PX: ${(rem * base).toFixed(2)}px`;
      } else {
        pxFromRem.textContent = `PX: -`;
      }
    }

    function convertPercent() {
      const percent = parseFloat(percentInput.value);
      const base = parseFloat(baseInput.value);
      if (!isNaN(percent) && !isNaN(base)) {
        pxFromPercent.textContent = `PX: ${((percent / 100) * base).toFixed(2)}px`;
      } else {
        pxFromPercent.textContent = `PX: -`;
      }
    }

    baseInput.addEventListener("input", () => {
      convertPx();
      convertRem();
      convertPercent();
    });
    pxInput.addEventListener("input", convertPx);
    remInput.addEventListener("input", convertRem);
    percentInput.addEventListener("input", convertPercent);
const nfTrunc5 = (() => {
  try {
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 5,
      roundingMode: "trunc",
    }).format(1.234567);
    return new Intl.NumberFormat("en-US", {
      useGrouping: true,
      maximumFractionDigits: 5,
      roundingMode: "trunc",
    });
  } catch {
    return null;
  }
})();

export default function CleanNumber(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return "—";
  if (nfTrunc5) return nfTrunc5.format(v);

  const sign = v < 0 ? "-" : "";
  const abs = Math.abs(v);
  let [intPart, decPart = ""] = String(abs).split(".");
  decPart = decPart.slice(0, 5).replace(/0+$/, "");
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return sign + intPart + (decPart ? "." + decPart : "");
}

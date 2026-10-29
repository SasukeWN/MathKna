export function hitungSpldv(
  a1: number, b1: number, c1: number,
  a2: number, b2: number, c2: number
) {
  const determinanutama = (a1 * b2) - (b1 * a2);
  const determinanx = (c1 * b2) - (b1 * c2);
  const determinany = (a1 * c2) - (c1 * a2);

  if (determinanutama === 0) {
    return {
      determinanutama,
      determinanx,
      determinany,
      error: "Garis sejajar atau berhimpit (D = 0, tidak ada solusi tunggal)",
      x: null,
      y: null,
      penyelesaian: [
        `1. D  = (${a1} * ${b2}) - (${b1} * ${a2}) = ${determinanutama}`,
        `2. Dx = (${c1} * ${b2}) - (${b1} * ${c2}) = ${determinanx}`,
        `3. Dy = (${a1} * ${c2}) - (${c1} * ${a2}) = ${determinany}`,
        `4. Karena D = 0, sistem tidak memiliki solusi tunggal (garis saling sejajar atau berimpit).`,
      ],
    };
  }

  const x = determinanx / determinanutama;
  const y = determinany / determinanutama;

  const fmt = (num: number) => (Number.isInteger(num) ? num.toString() : num.toFixed(2));

  return {
    determinanutama,
    determinanx,
    determinany,
    error: null,
    x,
    y,
    penyelesaian: [
      `1. D  = (${a1} * ${b2}) - (${b1} * ${a2}) = ${determinanutama}`,
      `2. Dx = (${c1} * ${b2}) - (${b1} * ${c2}) = ${determinanx}`,
      `3. Dy = (${a1} * ${c2}) - (${c1} * ${a2}) = ${determinany}`,
      `4. x  = Dx / D = ${determinanx} / ${determinanutama} = ${fmt(x)}`,
      `5. y  = Dy / D = ${determinany} / ${determinanutama} = ${fmt(y)}`,
    ],
  };
}

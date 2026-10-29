export function HitungPersamaanGarisLurus(m: number, x: number, c: number) {
    const mx: number = m * x;
    const y: number = mx + c;
    const tandaC = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;

    const titikPotongY = { x: 0, y: c };
    const titikPotongX = m !== 0 ? { x: -c / m, y: 0 } : null;
    const persamaanStr = `y = ${m}x ${tandaC}`;

    return {
        y,
        titikPotongX,
        titikPotongY,
        persamaanStr,
        penyelesaian: [
            `1. Gunakan bentuk umum: y = mx + c`,
            `2. Substitusi nilai: y = (${m} * ${x}) ${tandaC}`,
            `3. Kalikan m dengan x: y = ${mx} ${tandaC}`,
            `4. Hasil akhir: y = ${y}`,
        ],
    };
}
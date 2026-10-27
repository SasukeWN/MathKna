export function HitungPersamaanKuadrat(a: number, b: number, c: number) {
    const diskriminan: number = (b * b) - (4 * a * c);

    const xp = -b / (2 * a);
    const yp = -diskriminan / (4 * a);

    const arahparabola = a > 0 ? "Terbuka ke atas (Minimum)" : "Terbuka ke bawah (Maksimum)";

   
    let x1_out: number | string = 0;
    let x2_out: number | string = 0;
    let penjelasanAkar = "";

    if (diskriminan > 0) {
       
        const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
        x1_out = x1;
        x2_out = x2;
        penjelasanAkar = `Karena D > 0, grafik memotong sumbu X di dua titik real yang berbeda: x1 = ${x1.toFixed(2)} dan x2 = ${x2.toFixed(2)}`;
    } else if (diskriminan === 0) {
        
        const x = -b / (2 * a);
        x1_out = x;
        x2_out = x;
        penjelasanAkar = `Karena D = 0, grafik menyinggung sumbu X di satu titik real: x = ${x.toFixed(2)}`;
    } else {
        
        const bagianReal = -b / (2 * a);
        const bagianImajiner = Math.sqrt(-diskriminan) / (2 * a);
        
        x1_out = `${bagianReal.toFixed(2)} + ${bagianImajiner.toFixed(2)}i`;
        x2_out = `${bagianReal.toFixed(2)} - ${bagianImajiner.toFixed(2)}i`;
        penjelasanAkar = `Karena D < 0, grafik tidak memotong sumbu X (memiliki akar imajiner/khayal: x1 = ${x1_out} dan x2 = ${x2_out})`;
    }

    return {
        diskriminan,
        titikpuncak: { x: xp, y: yp },
        TitikPotongSumbuX: { x1: x1_out, x2: x2_out },
        TitikPotongSumbuY: { y: c },
        arah: arahparabola,
        penyelesaian: [
            `Langkah 1: Identifikasi nilai a = ${a}, b = ${b}, c = ${c}`,
            `Langkah 2: Hitung Diskriminan -> D = (${b})^2 - 4*(${a})*(${c}) = ${diskriminan}`,
            `Langkah 3: Hitung Koordinat X Puncak -> xp = -(${b}) / (2 * ${a}) = ${xp.toFixed(2)}`,
            `Langkah 4: Hitung Koordinat Y Puncak -> yp = -(${diskriminan}) / (4 * ${a}) = ${yp.toFixed(2)}`,
            `Langkah 5: Tentukan arah kurva -> Grafik ${arahparabola}`,
            `Langkah 6: Hitung Titik Potong Sumbu X (Rumus ABC) -> ${penjelasanAkar}`,
            `Langkah 7: Tentukan Titik Potong Sumbu Y -> Grafik memotong sumbu Y di titik (0, ${c})`
        ]
    };
}

export function hitungTurunanDasar(koefisien: number, pangkatawal: number) {
  let koef = koefisien;
  let pangkat = pangkatawal;
  let tingkat = 0;

  const penyelesaian: string[] = [];
  const hasilTurunan: { tingkat: number; bentuk: string }[] = [];


  penyelesaian.push(
    `Fungsi Awal: f(x) = ${koef}x^${pangkat}`
  );

 
  while (pangkat > 0) {
    tingkat++;

    const koefLama = koef;
    const pangkatLama = pangkat;

    
    koef = koef * pangkat;
    pangkat = pangkat - 1;

    
    const labelTurunan =
      tingkat === 1 ? "f'(x)" : tingkat === 2 ? "f''(x)" : `Turunan ke-${tingkat}`;
    const bentukHasil =
      pangkat === 0 ? `${koef}` : pangkat === 1 ? `${koef}x` : `${koef}x^${pangkat}`;

    
    hasilTurunan.push({ tingkat, bentuk: bentukHasil });
    penyelesaian.push(
      `${tingkat}. ${labelTurunan} = (${koefLama} * ${pangkatLama})x^(${pangkatLama} - 1) = ${bentukHasil}`
    );
  }

  
  tingkat++;
  hasilTurunan.push({ tingkat, bentuk: "0" });
  penyelesaian.push(
    `${tingkat}. Turunan ke-${tingkat} dari angka konstanta ${koef} = 0 (Selesai/Habis)`
  );

  return {
    fungsiAwal: `${koefisien}x^${pangkatawal}`,
    totalLangkah: tingkat,
    hasilTurunan,
    penyelesaian,
  };
}
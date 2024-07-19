import GuarantyCard from "../cards/guaranty-card";
import MainLayout from "../layouts/main-layout";

export default function GuarantySection() {
  return (
    <MainLayout id="garantia" as="section" className="mt-32">
      <h2 className="text-center text-5xl font-bold leading-[0.85] tracking-tighter">
        Garantía de Servicios.
      </h2>
      <p className="mx-auto mt-6 max-w-md text-center text-lg [&>strong]:font-semibold">
        Por desprendimientos prematuros, ofrecemos{" "}
        <strong>7 días de garantía</strong>. Estos son los casos que{" "}
        <strong>NO cubrimos</strong>
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GuarantyCard title="Uñas que previamente estén descamadas por arrancarlas">
          <p>
            Los adherentes que utilizamos en nuestros tratamientos están
            diseñados para adherirse eficazmente a la primera capa de la uña.
          </p>
          <p>
            Sin embargo, es importante destacar que, si la superficie de la uña
            presenta descamación o algún tipo de daño, la adhesión puede no ser
            tan efectiva como debería ser.
          </p>
        </GuarantyCard>
        <GuarantyCard
          title="Personas que tengan: Diabetes, Tiroides, problemas hormonales"
          className="bg-primary text-white md:col-span-full md:row-start-2 lg:col-span-1 lg:row-start-auto [&>p]:text-white/75"
        >
          <p>
            Cualquiera de estos ejemplos puede generar oleosidad en la uña
            natural, lo que resulta en una menor adherencia de los productos
            aplicados posteriormente.
          </p>
          <p>
            Es importante tener en cuenta que la presencia de aceites naturales
            o residuos grasos en la superficie de la uña puede interferir
            significativamente.
          </p>
        </GuarantyCard>
        <GuarantyCard title="Uñas con onicofagia">
          <p>
            Morderse las uñas puede causar daños significativos en la superficie
            de la uña, haciéndola irregular y débil. Esto puede dificultar que
            las uñas se adhieran correctamente.
          </p>
          <p>
            Las personas que se muerden las uñas a menudo tienen uñas muy
            cortas. haciéndolas menos resistentes ante golpes y causando
            desprendimientos prematuros.
          </p>
        </GuarantyCard>
      </div>
    </MainLayout>
  );
}

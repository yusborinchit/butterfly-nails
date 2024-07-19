import QuestionCard from "../cards/question-card";
import MainLayout from "../layouts/main-layout";

export default function FAQSection() {
  return (
    <section className="mt-32 bg-background pb-56 pt-24">
      <MainLayout id="faq">
        <h2 className="text-center text-5xl font-bold leading-[0.85] tracking-tighter">
          Preguntas Frecuentes.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-center text-lg [&>strong]:font-semibold">
          Encuentra respuestas a las dudas más comunes sobre mis servicios de
          uñas. Si tienes más preguntas, contáctame.
        </p>
        <div className="mx-auto mt-8 grid max-w-screen-md gap-6">
          <QuestionCard
            question="¿Las Soft Gel tienen mantenimiento?"
            answer="Como tal no, cada 21 días hay que retirarlas por completo y colocarlas nuevas."
            enterLeft={false}
            isOpen={false}
          />
          <QuestionCard
            question="¿Por qué debo concurrir cada 21 días?"
            answer="Cuando empieza a crecer la uña el esmaltado o el tip puede levemente levantarse y puede que si filtra humedad cause una infección por Pseudomonas (Tipo de bacteria) o infecciones Fúngicas (Onicomicosis, un hongo), que si vienen cada 21 días se pueden detectar a tiempo y NO se realizan servicios arriba de una uña con hongos, bacterias o rotas."
            enterLeft={true}
            isOpen={true}
          />
          <QuestionCard
            question="¿Realizas Acrílicas?"
            answer="No, no hago esculpidas en acrílico."
            enterLeft={false}
            isOpen={false}
          />
          <QuestionCard
            question="¿Qué debo hacer para que mis uñas lleguen a los 21 días intactas?"
            answer="No, en el caso de humedad se limpiará la uña y cuando esté totalmente libre de humedad se realizará el servicio pero si ya se convirtió en un hongo, es recomendable ir a tratarlo con un médico y que le den el tratamiento correspondiente."
            enterLeft={true}
            isOpen={true}
          />
          <QuestionCard
            question="¿Puedo hacerme uñas con hongos?"
            answer="Utiliza guantes y no expongas tus uñas a humedad en tiempo prolongado, no llevarse las uñas a la boca, evitar golpes (Utilizando teclados, tics, etc)."
            enterLeft={false}
            isOpen={false}
          />
        </div>
      </MainLayout>
    </section>
  );
}

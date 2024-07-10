import QuestionCard from "../cards/question-card";
import MainLayout from "../layouts/main-layout";

export default function FAQSection() {
  return (
    <MainLayout
      id="faq"
      as="section"
      className="mt-44 flex flex-col items-center gap-4"
    >
      <h2 className="text-center text-5xl font-bold -tracking-[0.075em]">
        Preguntas Frecuentes
      </h2>
      <p className="max-w-lg text-center text-neutral-500">
        Encuentra respuestas a las dudas más comunes sobre mis servicios de
        uñas. Si tienes más preguntas, contáctame.
      </p>
      <div className="mx-auto mt-2 flex w-full max-w-screen-md flex-col gap-4">
        <QuestionCard
          question="¿Las Soft Gel tienen mantenimiento?"
          answer="Como tal no, cada 21 días hay que retirarlas por completo y colocarlas nuevas."
        />
        <QuestionCard
          question="¿Por qué debo concurrir cada 21 días?"
          answer="Cuando empieza a crecer la uña el esmaltado o el tip puede levemente levantarse y puede que si filtra humedad cause una infección por Pseudomonas (Tipo de bacteria) o infecciones Fúngicas (Onicomicosis, un hongo), que si vienen cada 21 días se pueden detectar a tiempo y NO se realizan servicios arriba de una uña con hongos, bacterias o rotas."
          isOpen={true}
        />
        <QuestionCard
          question="¿Realizas Acrílicas?"
          answer="No, no hago esculpidas en acrílico."
        />
      </div>
    </MainLayout>
  );
}

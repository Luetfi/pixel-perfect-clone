import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-[777px] mt-8 max-md:max-w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-[21px] flex-wrap max-md:max-w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="self-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="flex items-center gap-[19px] max-md:max-w-full">
            <div className="text-[#241B41] self-stretch my-auto max-md:max-w-full">
              {question}
            </div>
          </div>
        </div>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && answer && (
        <div className="mt-4 text-[#241B41] text-lg leading-relaxed max-md:max-w-full">
          {answer}
        </div>
      )}
      <div className="border min-h-px w-full mt-6 border-black border-solid max-md:max-w-full" />
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie viel Zeit muss mein Team wirklich einplanen?",
      answer: "Rund 60 Minuten pro Woche für das Webinar mit optional 30 Minuten Diskussionsrunde im Anschluss. Plus ca. 30 Minuten Praxisaufgabe. Maximal also 2 Stunden pro Woche – das Programm ist bewusst ressourcenschonend aufgebaut, damit der Betrieb weiterläuft."
    },
    {
      question: "Brauchen wir technisches Vorwissen oder spezielle Voraussetzungen?",
      answer: "Nein. Es sind keine technischen Vorkenntnisse erforderlich. Nur eine grundlegende digitale Arbeitsweise (z. B. digitales Vorgangsmanagement) wird empfohlen."
    },
    {
      question: "Was passiert, wenn im Team Unsicherheiten oder Widerstände gegenüber KI bestehen?",
      answer: 'Ihr Trainer holt alle ab, baut Blockaden ab und geht auf individuelle Bedürfnisse ein. Auch "Urgesteine" kommen sicher mit – durch klare, praxisnahe Schritt-für-Schritt-Anleitung.'
    },
    {
      question: "Wie sicher sind unsere Daten? Ist das DSGVO-konform?",
      answer: "Wir arbeiten mit Langdock, einer vollständig DSGVO-konformen Plattform, die von führenden deutschen Unternehmen bereits sicher genutzt wird."
    },
    {
      question: "Welche konkreten Ergebnisse können wir nach den 4 Wochen erwarten?",
      answer: "Ihr Team nutzt KI sicher, hat erste eigene Assistenten gebaut und erreicht spürbare Entlastung. Kunden berichten von rund 4 Stunden Zeitersparnis pro Woche pro Person."
    },
    {
      question: "Wie läuft der Start ab, wenn wir uns für das Programm entscheiden?",
      answer: "Sie vereinbaren ein Erstgespräch, erhalten anschließend das Onboarding mit Zugängen und starten danach direkt ins Programm."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center text-[#241B41] font-bold justify-center px-[331px] py-20 max-md:max-w-full max-md:px-5">
      <div className="flex max-w-full w-[777px] flex-col items-stretch">
        <div className="w-full text-[40px] text-center leading-none max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <h2 className="text-[#241B41] max-md:max-w-full">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="self-center w-full text-2xl leading-loose mt-12 max-md:mt-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

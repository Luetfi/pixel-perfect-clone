import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-border/50 last:border-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground pr-8 group-hover:text-brand-cyan transition-colors">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-cyan text-primary' : 'bg-muted text-muted-foreground'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-lg leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      answer: "Ihr Trainer holt alle ab, baut Blockaden ab und geht auf individuelle Bedürfnisse ein. Auch \"Urgesteine\" kommen sicher mit – durch klare, praxisnahe Schritt-für-Schritt-Anleitung."
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
    <section className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alles, was Sie vor dem Start wissen sollten
          </p>
        </motion.div>

        <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

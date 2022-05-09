import { useState } from "react";

import { CloseButton } from "./closeButton";
import { FeedBackTypeStep } from "./WidgetForm/Steps/FeedbackTypeStep";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

//passa o tipo de feedback aceito no  estado do setFeedBackType
export type  FeedbackType = keyof  typeof feedbackTypes;

export function WidgetForm() {
  const[feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

        <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />

      <footer>
        <span className="text-xs leading-4 text-neutral-400">Todos os direitos reservados</span>
      </footer>
    </div>
  )
}
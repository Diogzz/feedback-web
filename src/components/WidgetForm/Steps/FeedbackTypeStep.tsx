import { CloseButton } from "../../closeButton";
import { FeedbackType, feedbackTypes } from "../../WidgetForm";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedBackTypeStep({onFeedbackTypeChanged} : FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 w-full gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button 
              key={key} 
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="flex flex-col items-center justify-center gap-1 p-2 bg-zinc-800 w-24 flex-1 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img 
                className="w-10 mb-2" 
                src={value.image.source} 
                alt={value.image.alt} 
              />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
    </>
  )
}
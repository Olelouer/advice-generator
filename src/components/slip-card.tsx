import { type Slip } from "../types/slip-types"
import mobileSeparator from "../assets/pattern-divider-mobile.svg"
import desktopSeparator from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";

type SlipProps = {
    slip: Slip;
    isLoading: boolean;
    hasError: boolean;
    fetchAdvice: () => void;
}

export function SlipCard({ slip, isLoading, hasError, fetchAdvice }: SlipProps) {
    return (
        <article className="relative flex w-full max-w-135 flex-col rounded-lg bg-blue-900 px-6 pt-10 pb-16 text-center md:px-12 md:pt-12">
            <h1 className="mb-6 text-xs tracking-[4px] text-green-300 uppercase md:text-sm">Advice # {slip.id}</h1>
            <blockquote className="mb-6 text-quote">“{slip.advice}”</blockquote>
            {hasError && 
                <p className="mb-4 text-sm text-red-400">Une erreur est survenue lors de la récupération du conseil. Veuillez réessayer.</p>
            }
            <picture>
                <source media="(min-width: 640px)" srcSet={desktopSeparator} />
                <img src={mobileSeparator} alt="" className="w-full"/>
            </picture>
            <div className="absolute top-full left-1/2 -translate-1/2">
                <button
                    className="p-4.5 bg-green-300 rounded-full cursor-pointer transition-shadow hover:shadow-[0_0_30px_var(--color-green-300)] focus-visible:shadow-[0_0_40px_var(--color-green-300)]"
                    onClick={fetchAdvice}
                    aria-label="Générer un nouveau conseil"
                    disabled={isLoading}
                >
                    <img src={diceIcon} alt=""/>
                </button>
            </div>
      </article>
    )
}
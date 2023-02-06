import { PlusCircle, XCircle } from "phosphor-react";

interface OverviewActionsProps {
  position: number;
  qtdItems: number;
}

export function OverviewActions({ position, qtdItems }: OverviewActionsProps) {
  return (
    <div className="flex item-center justify-start gap-x-2 mt-1">
      <span className="text-white text-lg font-bold">Qtd: </span>
      <div className="flex items-center justify-center gap-x-1">
        <button>
          <XCircle size={30} weight="fill" color="red" />
        </button>
        <span className="text-white text-lg font-bold">{qtdItems} </span>
        <button>
          <PlusCircle size={30} weight="fill" />
        </button>
      </div>
    </div>
  );
}

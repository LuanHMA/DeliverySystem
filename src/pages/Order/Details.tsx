import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import * as Dialog from "@radix-ui/react-dialog";
//Recuperar o id do produto clicado via Url
//Trazer informações sobre ele
//Atualizar os dados do Details com as opções escolhidas

export function Details() {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

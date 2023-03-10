import { List } from "../../components/Order/List";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from 'phosphor-react'

//Recuperar o id do produto clicado via Url
//Trazer informações sobre ele
//Atualizar os dados do Details com as opções escolhidas


interface DetailsProps{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Details({open, setOpen}: DetailsProps) {
  function closeModal() {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }


  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl border-2 border-neutral-700 text-left align-middle shadow-xl transition-all relative">
                  <button className="absolute right-4 top-5" onClick={closeModal}>
                    <X size={30} color="white"/>
                  </button>
                  <List/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

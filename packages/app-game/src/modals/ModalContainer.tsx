import { useEffect, useState } from "react";
import { IModal } from "./IModal";
import { $modals, Modals } from "../service/Modals";
import { IModalContext } from "./IModalContext";

function ModalComponent(
    props: {
        modal: IModal;
        navigate: (path: string) => void;
        onClose: () => void;
    }
) {
    const ctx: IModalContext = {
        navigate: props.navigate,
        closeModal: props.onClose
    };
    const content = props.modal.content
        ? props.modal.content(ctx)
        : null;
    return <div className="modal is-active">
        <div className="modal-background" onClick={() => props.onClose()}></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{props.modal.title ?? ""}</p>
            </header>

            {props.modal.message && (
                <section className="modal-card-body">
                    <p>{props.modal.message}</p>
                </section>
            )}

            {content && (
                <section className="modal-card-body">
                    {content}
                </section>
            )}


            {props.modal.actions && (
                <footer className="modal-card-foot">
                    {
                        props.modal.actions.map(
                            (action, index) => (
                                <div key={index}>
                                    <button className="button is-primary" onClick={() => action.onAction(ctx)}>
                                        {action.label}
                                    </button>
                                </div>
                            )
                        )
                    }
                </footer>
            )}
        </div>
    </div>;
}

export function ModalContainer(
    props: {
        navigate: (path: string) => void;
    }
) {
    const [openedModals, setOpenedModals] = useState<Array<IModal>>([]);

    useEffect(
        () => {
            const sub = $modals.openedModals.subscribe(
                (modals) => {
                    setOpenedModals(modals);
                }
            );
            return () => sub.unsubscribe();
        },
        []
    );

    return <>
        {
            openedModals.map(
                (modal, index) => (
                    <ModalComponent key={index} modal={modal} navigate={props.navigate} onClose={() => {
                        $modals.closeModal(index);
                    }} />
                )
            )
        }
    </>;
}
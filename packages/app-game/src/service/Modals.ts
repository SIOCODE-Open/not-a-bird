import { BehaviorSubject } from "rxjs";
import { IModal } from "../modals/IModal";

export class Modals {
    private _openedModals: BehaviorSubject<Array<IModal>> = new BehaviorSubject([]);

    public get openedModals() {
        return this._openedModals.asObservable();
    }

    public openModal(modal: IModal) {
        this._openedModals.next([...this._openedModals.value, modal]);
    }

    public closeModal(index: number) {
        const modals = this._openedModals.value.filter(
            (modal, i) => i !== index
        )
        this._openedModals.next(modals);
    }
}

export const $modals = new Modals();
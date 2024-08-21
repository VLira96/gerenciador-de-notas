"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/app/actions";

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className="bg-black/90 px-4 py-1 rounded-full" type="submit" aria-disabled={pending}>
            CADASTRAR
        </button>
    );
}

const AddUserForm = () => {
    const [state, formAction] = useFormState(createUser, initialState);

    return (
        <form className="flex flex-col items-center gap-10 mt-10" action={formAction}>
            <div className="flex flex-col gap-10">
                <div className="flex gap-2">
                    <label htmlFor="nome">Nome:</label>
                    <input className="text-slate-900" type="text" id="nome" name="nome" required />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="email">Email:</label>
                    <input className="text-slate-900" type="text" id="email" name="email" required />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="senha">Senha:</label>
                    <input className="text-slate-900" type="password" id="senha" name="senha" required />
                </div>
            </div>
            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    );
}

export default AddUserForm;
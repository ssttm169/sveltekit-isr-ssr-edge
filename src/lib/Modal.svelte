<script>
    export let showModal; // boolean
    export let onDeleteFunc; // boolean

    let dialog; // HTMLDialogElement

    console.log("dialog", dialog);
    $: if (dialog && showModal) dialog.showModal();

    const onSubmit = ()=>{
        onDeleteFunc().then(()=>{
            dialog.close()
        })
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:submit={() => {
        console.log("submit");
    }}
    on:click|self={() => dialog.close()}
>
    <div on:click|stopPropagation>
        <slot name="header" />
        <hr />
        <slot />
        <hr />
        <!-- svelte-ignore a11y-autofocus -->
        <div
            style="font-size:12px;display:flex;
        justify-content:flex-end;margin-top: 10px;"
        >
            <button
                class="home_chat-input-send__rsJfH plainButton"
                autofocus
                on:click={() => dialog.close()}
            >
                取消
            </button>

            <button
                class="button_icon-button__BC_Ca primaryButton"
                style="margin-left:10px;"
                on:click={() => {
                    console.dir(dialog);
                    onSubmit()
                }}
            >
                确定
            </button>
        </div>
    </div>
</dialog>

<style>
    dialog {
        max-width: 32em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>

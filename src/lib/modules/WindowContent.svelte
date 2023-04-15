<script>
    import { LinkDataState, LinkIndexState } from "../../lib/stores";
    import LinkForm from "./LinkForm.svelte";
    let LinkDataList = $LinkDataState;
    let selectLinkIndex = $LinkIndexState;
    $: currentFormData = $LinkDataState[$LinkIndexState] || [];
</script>

<div class="settings_window-header__w7XTu">
    <div class="settings_window-header-title__fmVkZ">
        <div class="settings_window-header-main-title__7Ns_y">设置</div>
    </div>
</div>

<div class="settings_settings__dC7Vo">
    {#if LinkDataList?.length > 0}
        <LinkForm {currentFormData} />
    {:else}
        <div>暂时没有数据</div>
    {/if}
</div>

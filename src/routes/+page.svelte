<script>
	import { LinkDataState } from "../lib/stores";
	import Sidebar from "../lib/modules/Sidebar.svelte";
	export let data;
	export let LinkDataList;

	if (data?.linkData) {
		LinkDataList = data?.linkData;
		LinkDataState.updateLink(data?.linkData);
	}
</script>

<Sidebar bind:LinkDataList />


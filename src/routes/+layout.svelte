<script>
	import "../app.css";
	import "../part1.css";
	import "../global.css";
	import "../settings.css";
	import WindowContent from "../lib/modules/WindowContent.svelte";
</script>

<div class="home_container__Myqoy">
	<div class="home_sidebar__4L4yT home_sidebar-show__I77cg">
		<!-- <button on:click={roll}>Roll the dice</button> -->
		<slot />
	</div>
	<div class="home_window-content__RRVow">
		<WindowContent />
	</div>
</div>

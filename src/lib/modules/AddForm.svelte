<script>



	/** @type {import('./$types').PageData} */
	// export let data;
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="page-container-aside container mx-auto p-8 space-y-8">
	<div class="previewer shadow-2xl shadow-surface-500/10 dark:shadow-black/10 rounded-container-token overflow-hidden">
		<div class="card p-4 bg-initial">
			<section class="p-4">

				{#if form?.incorrect}<p class="error">
						Invalid credentials!
					</p>{/if}
				<form method="POST" action="?/login">
					<div class="space-y-4">
						<label class="label">
							<span>IP地址</span>
							<input
								class="input"
								type="text"
								placeholder="请输入IP地址"
								name="ipAddress"  value={form?.ipAddress ?? ""} 
							/>
							{#if form?.missing}<p class="error">The ipAddress field is required</p>{/if}
						</label>

						<label class="label">
							<span>端口号</span>
							<input
								class="input"
								type="text"
								placeholder="请输入端口号"
								name="port" 
							/>
						</label>
						<button   class="btn variant-filled">提交</button>
					</div>
				</form>
				{#if form?.success}
					<!-- this message is ephemeral; it exists because the page was rendered in
					   response to a form submission. it will vanish if the user reloads -->
					{form?.execRes}
					<p>Successfully logged in! Welcome back, tom</p>
				{/if}
			</section>
		</div>
	</div>
</div>
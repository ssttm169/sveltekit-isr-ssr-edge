import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
const AddForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"page-container-aside container mx-auto p-8 space-y-8"}"><div class="${"previewer shadow-2xl shadow-surface-500/10 dark:shadow-black/10 rounded-container-token overflow-hidden"}"><div class="${"card p-4 bg-initial"}"><section class="${"p-4"}">${form?.incorrect ? `<p class="${"error"}">Invalid credentials!
					</p>` : ``}
				<form method="${"POST"}" action="${"?/login"}"><div class="${"space-y-4"}"><label class="${"label"}"><span>IP地址</span>
							<input class="${"input"}" type="${"text"}" placeholder="${"请输入IP地址"}" name="${"ipAddress"}"${add_attribute("value", form?.ipAddress ?? "", 0)}>
							${form?.missing ? `<p class="${"error"}">The ipAddress field is required</p>` : ``}</label>

						<label class="${"label"}"><span>端口号</span>
							<input class="${"input"}" type="${"text"}" placeholder="${"请输入端口号"}" name="${"port"}"></label>
						<button class="${"btn variant-filled"}">提交</button></div></form>
				${form?.success ? `
					${escape(form?.execRes)}
					<p>Successfully logged in! Welcome back, tom</p>` : ``}</section></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><div class="${"font-bold text-2xl mb-4"}">Server Side Rendering</div>
	<div class="${"opacity-80 mb-4"}">This page is returning the date from a SvelteKit page endpoint with no configuration specified.
		This means that when deployed to Vercel, it uses the project default which will automatically
		turn page endpoints into server routes.
	</div>
	<div class="${"opacity-80 mb-4"}">This page endpoint runs on the server, and returns the current date and time. Notice each time
		you refresh the page, the endpoint runs again and the time is updated.
	</div>
	<div class="${"bg-zinc-900/60 rounded-md p-6 shadow-md shadow-zinc-700/30"}"><div class="${"mb-2 text-sm uppercase text-white/60"}">Current Date:</div>
		<div class="${"text-2xl"}">${escape(data.generatedAt)}
			${escape(data.res)}</div></div>
	${validate_component(AddForm, "AddForm").$$render(
      $$result,
      { form },
      {
        form: ($$value) => {
          form = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

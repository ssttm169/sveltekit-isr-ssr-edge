import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/index3.js";
import { L as LinkIndexState, a as LinkDataState } from "../../chunks/stores.js";
const app = "";
const part1 = "";
const global = "";
const settings = "";
const LinkForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentFormData } = $$props;
  if ($$props.currentFormData === void 0 && $$bindings.currentFormData && currentFormData !== void 0)
    $$bindings.currentFormData(currentFormData);
  return `<div class="${"ui-lib_list__uHeWh"}"><div class="${"ui-lib_list-item__MN4sf"}"><div class="${"settings_settings-title__2ADwu"}"><div>IP地址</div>
            </div>
        <div class="${"settings_password-input-container__Rp0VH"}"><input type="${"text"}" placeholder="${"请输入IP地址"}" class="${"settings_password-input__Y6OWC"}"${add_attribute("value", currentFormData?.ipAddress, 0)}></div></div>

    <div class="${"ui-lib_list-item__MN4sf"}"><div class="${"settings_settings-title__2ADwu"}"><div>端口号</div>
            </div>
        <div class="${"settings_password-input-container__Rp0VH"}"><input type="${"text"}" placeholder="${"请输入端口号"}" class="${"settings_password-input__Y6OWC"}"${add_attribute("value", currentFormData?.port, 0)}></div></div></div>


<button class="${"button_icon-button__BC_Ca home_chat-input-send__rsJfH clickable"}" role="${"button"}" style="${"position:relative;left:auto;right:auto;bottom:auto;"}"><div class="${"button_icon-button-icon__qlUH3 no-dark"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" fill="${"none"}"><defs><path id="${"send-white_svg__a"}" d="${"M0 0h16v16H0z"}"></path></defs><g><mask id="${"send-white_svg__b"}" fill="${"#fff"}"><use xlink:href="${"#send-white_svg__a"}"></use></mask><g mask="${"url(#send-white_svg__b)"}"><path transform="${"translate(1.333 2)"}" d="${"M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"}" style="${"stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path><path transform="${"translate(8.003 6.117)"}" d="${"M0 1.89 1.89 0"}" style="${"stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path></g></g></svg></div>
    <div class="${"button_icon-button-text__k3vob"}">提交</div></button>`;
});
const WindowContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentFormData;
  let $LinkIndexState, $$unsubscribe_LinkIndexState;
  let $LinkDataState, $$unsubscribe_LinkDataState;
  $$unsubscribe_LinkIndexState = subscribe(LinkIndexState, (value) => $LinkIndexState = value);
  $$unsubscribe_LinkDataState = subscribe(LinkDataState, (value) => $LinkDataState = value);
  let LinkDataList = $LinkDataState;
  currentFormData = $LinkDataState[$LinkIndexState] || [];
  $$unsubscribe_LinkIndexState();
  $$unsubscribe_LinkDataState();
  return `<div class="${"settings_window-header__w7XTu"}"><div class="${"settings_window-header-title__fmVkZ"}"><div class="${"settings_window-header-main-title__7Ns_y"}">设置</div></div></div>

<div class="${"settings_settings__dC7Vo"}">${LinkDataList?.length > 0 ? `${validate_component(LinkForm, "LinkForm").$$render($$result, { currentFormData }, {}, {})}` : `<div>暂时没有数据</div>`}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"home_container__Myqoy"}"><div class="${"home_sidebar__4L4yT home_sidebar-show__I77cg"}">
		${slots.default ? slots.default({}) : ``}</div>
	<div class="${"home_window-content__RRVow"}">${validate_component(WindowContent, "WindowContent").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};

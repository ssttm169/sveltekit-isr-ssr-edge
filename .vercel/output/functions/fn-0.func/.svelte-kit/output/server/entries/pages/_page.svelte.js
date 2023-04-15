import { c as create_ssr_component, a as add_attribute, d as each, v as validate_component, e as escape } from "../../chunks/index3.js";
import { a as LinkDataState } from "../../chunks/stores.js";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "dialog.svelte-iqe50v.svelte-iqe50v{max-width:32em;border-radius:0.2em;border:none;padding:0}dialog.svelte-iqe50v.svelte-iqe50v::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-iqe50v>div.svelte-iqe50v{padding:1em}dialog[open].svelte-iqe50v.svelte-iqe50v{animation:svelte-iqe50v-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-iqe50v-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-iqe50v.svelte-iqe50v::backdrop{animation:svelte-iqe50v-fade 0.2s ease-out}@keyframes svelte-iqe50v-fade{from{opacity:0}to{opacity:1}}button.svelte-iqe50v.svelte-iqe50v{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let { onDeleteFunc } = $$props;
  let dialog;
  console.log("dialog", dialog);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.onDeleteFunc === void 0 && $$bindings.onDeleteFunc && onDeleteFunc !== void 0)
    $$bindings.onDeleteFunc(onDeleteFunc);
  $$result.css.add(css);
  return `
<dialog class="${"svelte-iqe50v"}"${add_attribute("this", dialog, 0)}><div class="${"svelte-iqe50v"}">${slots.header ? slots.header({}) : ``}
        <hr>
        ${slots.default ? slots.default({}) : ``}
        <hr>
        
        <div style="${"font-size:12px;display:flex; justify-content:flex-end;margin-top: 10px;"}"><button class="${"home_chat-input-send__rsJfH plainButton svelte-iqe50v"}" autofocus>取消
            </button>

            <button class="${"button_icon-button__BC_Ca primaryButton svelte-iqe50v"}" style="${"margin-left:10px;"}">确定
            </button></div></div>
</dialog>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { LinkDataList = [] } = $$props;
  let { selectedLinkIndex = 0 } = $$props;
  let showModal = false;
  const onDeleteFunc = async () => {
    console.log("onDeleteFunc");
    return new Promise((resolve) => {
      LinkDataList.splice(selectedLinkIndex, 1);
      LinkDataList = LinkDataList;
      resolve(true);
    });
  };
  const formatDate = (date, fmt = "yyyy-MM-dd hh:mm:ss") => {
    var currentDate = new Date(date);
    var o = {
      "M+": currentDate.getMonth() + 1,
      //月份
      "d+": currentDate.getDate(),
      //日
      "h+": currentDate.getHours(),
      //小时
      "m+": currentDate.getMinutes(),
      //分
      "s+": currentDate.getSeconds(),
      //秒
      "q+": Math.floor((currentDate.getMonth() + 3) / 3),
      //季度
      S: currentDate.getMilliseconds()
      //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return fmt;
  };
  if ($$props.LinkDataList === void 0 && $$bindings.LinkDataList && LinkDataList !== void 0)
    $$bindings.LinkDataList(LinkDataList);
  if ($$props.selectedLinkIndex === void 0 && $$bindings.selectedLinkIndex && selectedLinkIndex !== void 0)
    $$bindings.selectedLinkIndex(selectedLinkIndex);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"home_sidebar-header__b5asC"}"><div class="${"home_sidebar-title__d8_c_"}">矿池</div></div>
<div class="${"home_sidebar-body__zSPJN"}"><div data-rfd-droppable-id="${"chat-list"}" data-rfd-droppable-context-id="${":r0:"}">${each(LinkDataList, (item, index) => {
      return `
            <div class="${"home_chat-item__7LfQR " + escape(
        selectedLinkIndex === index ? "home_chat-item-selected__6TyNm" : "",
        true
      )}" data-rfd-draggable-context-id="${":r0:"}" data-rfd-draggable-id="${"1681390709103"}"${add_attribute("tabindex", index, 0)} role="${"button"}" aria-describedby="${"rfd-hidden-text-:r0:-hidden-text-:r1:"}" data-rfd-drag-handle-draggable-id="${"1681390709103"}" data-rfd-drag-handle-context-id="${":r0:"}" draggable="${"false"}"><div class="${"home_chat-item-title__LZXA_"}">${escape(item.name)}</div>
                <div class="${"home_chat-item-info__UAzOv"}"><div class="${"home_chat-item-count__pilKg"}">${escape(item.type)}</div>
                    <div class="${"home_chat-item-date__0scNw"}">
                        ${escape(formatDate(item.time))}
                    </div></div>
                <div class="${"home_chat-item-delete__xQ_8e"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" width="${"14.663"}" height="${"14.663"}"><g><path d="${"M7.337.667c-3.69 0-6.67 2.98-6.67 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66a6.66 6.66 0 0 0-6.66-6.67Z"}" fill-rule="${"evenodd"}" fill="${"#D8D8D8"}" fill-opacity="${"0.01"}"></path><path d="${"m10.138 5.471-4.667 4.667q-.046.046-.1.083-.055.036-.116.062-.06.025-.125.038-.064.012-.13.012t-.13-.012q-.064-.013-.125-.038-.06-.026-.115-.062-.055-.037-.101-.083-.047-.046-.083-.101-.037-.055-.062-.115-.025-.06-.038-.125-.013-.065-.013-.13 0-.066.013-.13.013-.065.038-.125.025-.061.062-.116.036-.054.083-.1l4.666-4.667q.047-.047.101-.083.055-.037.116-.062.06-.025.125-.038.064-.013.13-.013.065 0 .13.013.064.013.125.038.06.025.115.062.055.036.101.083.046.046.083.1.036.055.062.116.025.06.038.125.012.064.012.13t-.012.13q-.013.064-.038.125-.026.06-.062.115-.037.055-.083.101ZM5.471 4.53l.667.666q.046.047.083.101.036.055.062.116.025.06.038.125.012.064.012.13 0 .065-.012.13-.013.064-.038.125-.026.06-.062.115-.036.055-.083.101-.046.046-.1.083-.056.036-.116.062-.06.025-.125.038-.065.012-.13.012-.066 0-.13-.012-.065-.013-.125-.038-.061-.026-.116-.062-.054-.036-.1-.083l-.667-.667q-.047-.046-.083-.1-.037-.055-.062-.116-.025-.06-.038-.125-.013-.064-.013-.13t.013-.13q.013-.064.038-.125.025-.06.062-.115.036-.055.083-.101.046-.047.1-.083.055-.037.116-.062.06-.025.125-.038.064-.013.13-.013t.13.013q.064.013.125.038.06.025.115.062.055.036.101.083Zm4 4 .667.666q.046.047.083.101.036.055.062.116.025.06.038.125.012.064.012.13 0 .065-.012.13-.013.064-.038.125-.026.06-.062.115-.036.055-.083.101-.046.046-.1.083-.056.036-.116.062-.06.025-.125.038-.065.012-.13.012-.066 0-.13-.012-.065-.013-.125-.038-.061-.026-.116-.062-.054-.036-.1-.083l-.667-.667q-.047-.046-.083-.1-.037-.055-.062-.116-.025-.06-.038-.125-.013-.064-.013-.13t.013-.13q.013-.064.038-.125.025-.06.062-.115.036-.055.083-.101.046-.047.1-.083.055-.037.116-.062.06-.025.125-.038.064-.013.13-.013t.13.013q.064.013.125.038.06.025.115.062.055.036.101.083Zm3.859-1.192q0-2.491-1.755-4.248-1.754-1.756-4.238-1.756-2.492 0-4.248 1.756-1.756 1.756-1.756 4.248 0 2.484 1.756 4.238 1.757 1.755 4.248 1.755 2.484 0 4.238-1.755 1.755-1.754 1.755-4.238Zm1.333 0q0 3.036-2.145 5.181t-5.181 2.145q-3.043 0-5.19-2.145Q0 10.374 0 7.337q0-3.044 2.147-5.19Q4.293 0 7.337 0q3.037 0 5.181 2.147 2.145 2.147 2.145 5.19ZM10.332 5q0 .066-.013.13t-.038.125q-.025.06-.061.114-.037.055-.083.101-.046.047-.1.083-.055.036-.116.061-.06.025-.125.038-.064.013-.13.013-.065 0-.13-.013-.063-.013-.124-.038-.06-.025-.115-.061-.054-.036-.1-.083-.047-.046-.083-.1-.037-.055-.062-.115-.025-.061-.038-.125-.012-.064-.012-.13 0-.065.012-.13.013-.064.038-.124.025-.061.062-.115.036-.055.082-.101.047-.047.101-.083.055-.036.115-.061.06-.025.125-.038.064-.013.13-.013.065 0 .13.013.064.013.124.038t.115.061q.055.036.1.083.047.046.084.1.036.055.061.116.025.06.038.124.013.065.013.13ZM5.665 9.667q0 .065-.013.13-.013.064-.038.124t-.061.115q-.036.055-.083.1-.046.047-.1.084-.055.036-.116.061-.06.025-.124.038-.064.013-.13.013-.065 0-.13-.013-.064-.013-.124-.038-.061-.025-.115-.061-.055-.037-.101-.083-.047-.046-.083-.1-.036-.055-.061-.116-.025-.06-.038-.125-.013-.064-.013-.13 0-.065.013-.13.013-.063.038-.124.025-.06.061-.115.036-.054.083-.1.046-.047.1-.083.055-.037.116-.062.06-.025.124-.038.065-.012.13-.012.066 0 .13.012.064.013.124.038.061.025.115.062.055.036.101.082.047.047.083.101.036.055.061.115.025.06.038.125.013.064.013.13Zm0-4.667q0 .066-.013.13t-.038.125q-.025.06-.061.114-.036.055-.083.101-.046.047-.1.083-.055.036-.116.061-.06.025-.124.038-.064.013-.13.013-.065 0-.13-.013-.064-.013-.124-.038-.061-.025-.115-.061-.055-.036-.101-.083-.047-.046-.083-.1-.036-.055-.061-.115-.025-.061-.038-.125-.013-.064-.013-.13 0-.065.013-.13.013-.064.038-.124.025-.061.061-.115.036-.055.083-.101.046-.047.1-.083.055-.036.116-.061.06-.025.124-.038.065-.013.13-.013.066 0 .13.013t.124.038q.061.025.115.061.055.036.101.083.047.046.083.1.036.055.061.116.025.06.038.124.013.065.013.13Zm.667.667q0 .065-.013.13-.013.064-.038.124t-.061.115q-.037.055-.083.1-.046.047-.1.084-.055.036-.116.061-.06.025-.125.038-.064.013-.13.013-.065 0-.13-.013-.063-.013-.124-.038-.06-.025-.115-.061-.054-.037-.1-.083-.047-.046-.083-.1-.037-.055-.062-.116-.025-.06-.038-.125-.012-.064-.012-.13 0-.065.012-.13.013-.063.038-.124.025-.06.062-.115.036-.054.082-.1.047-.047.101-.083.055-.037.115-.062.06-.025.125-.038.064-.012.13-.012.065 0 .13.012.064.013.124.038t.115.062q.055.036.1.082.047.047.084.101.036.055.061.115.025.06.038.125.013.064.013.13ZM9.665 9q0 .066-.013.13t-.038.125q-.025.06-.061.114-.036.055-.083.101-.046.047-.1.083-.055.036-.116.061-.06.025-.124.038-.064.013-.13.013-.065 0-.13-.013-.064-.013-.124-.038-.061-.025-.115-.061-.055-.036-.101-.083-.047-.046-.083-.1-.036-.055-.061-.115-.025-.061-.038-.125-.013-.064-.013-.13 0-.065.013-.13.013-.064.038-.124.025-.061.061-.115.036-.055.083-.101.046-.047.1-.083.055-.036.116-.061.06-.025.124-.038.065-.013.13-.013.066 0 .13.013t.124.038q.061.025.115.061.055.036.101.083.047.046.083.1.036.055.061.116.025.06.038.124.013.065.013.13Zm.667.667q0 .065-.013.13-.013.064-.038.124t-.061.115q-.037.055-.083.1-.046.047-.1.084-.055.036-.116.061-.06.025-.125.038-.064.013-.13.013-.065 0-.13-.013-.063-.013-.124-.038-.06-.025-.115-.061-.054-.037-.1-.083-.047-.046-.083-.1-.037-.055-.062-.116-.025-.06-.038-.125-.012-.064-.012-.13 0-.065.012-.13.013-.063.038-.124.025-.06.062-.115.036-.054.082-.1.047-.047.101-.083.055-.037.115-.062.06-.025.125-.038.064-.012.13-.012.065 0 .13.012.064.013.124.038t.115.062q.055.036.1.082.047.047.084.101.036.055.061.115.025.06.038.125.013.064.013.13Z"}" fill="${"var(--primary)"}"></path></g></svg></div>
            </div>`;
    })}</div></div>
<div class="${"home_sidebar-tail__R8VX2"}"><div class="${"home_sidebar-actions__zyNfR"}"><div class="${"home_sidebar-action__JhMu0 home_mobile__ako7k"}"><button class="${"button_icon-button__BC_Ca undefined undefined clickable"}" role="${"button"}"><div class="${"button_icon-button-icon__qlUH3 undefined"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" fill="${"none"}"><defs><path id="${"close_svg__a"}" d="${"M0 0h16v16H0z"}"></path></defs><g><mask id="${"close_svg__b"}" fill="${"#fff"}"><use xlink:href="${"#close_svg__a"}"></use></mask><g mask="${"url(#close_svg__b)"}"><path transform="${"translate(2.667 2.667)"}" d="${"m0 0 10.67 10.67M0 10.67 10.67 0"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path></g></g></svg></div></button></div>
        <div class="${"home_sidebar-action__JhMu0"}"><button class="${"button_icon-button__BC_Ca undefined button_shadow__Ap98F clickable"}" role="${"button"}"><div class="${"button_icon-button-icon__qlUH3 undefined"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" fill="${"none"}"><defs><path id="${"settings_svg__a"}" d="${"M0 0h16v16H0z"}"></path></defs><g><mask id="${"settings_svg__b"}" fill="${"#fff"}"><use xlink:href="${"#settings_svg__a"}"></use></mask><g mask="${"url(#settings_svg__b)"}"><path transform="${"translate(1.333 2.333)"}" d="${"M13.33 5.67 10 0H3.33L0 5.67l3.33 5.66H10l3.33-5.66Z"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path><path transform="${"translate(6.333 6.333)"}" d="${"M3.33 1.67C3.33.75 2.59 0 1.67 0 .75 0 0 .75 0 1.67c0 .92.75 1.66 1.67 1.66.92 0 1.66-.74 1.66-1.66Z"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path></g></g></svg></div></button></div></div>
    <div><button class="${"button_icon-button__BC_Ca undefined button_shadow__Ap98F clickable"}" role="${"button"}"><div class="${"button_icon-button-icon__qlUH3 undefined"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" fill="${"none"}"><defs><path id="${"add_svg__a"}" d="${"M0 0h16v16H0z"}"></path></defs><g><mask id="${"add_svg__b"}" fill="${"#fff"}"><use xlink:href="${"#add_svg__a"}"></use></mask><g mask="${"url(#add_svg__b)"}"><path transform="${"translate(1.333 1.333)"}" d="${"M13.33 6.67A6.66 6.66 0 0 0 6.67 0C2.98 0 0 2.98 0 6.67a6.66 6.66 0 0 0 6.67 6.66c3.68 0 6.66-2.98 6.66-6.66Z"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path><path transform="${"translate(8 5.333)"}" d="${"M0 0v5.33"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path><path transform="${"translate(5.333 8)"}" d="${"M0 0h5.33"}" style="${"stroke: rgb(51, 51, 51); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"}"></path></g></g></svg></div>
            
            <div class="${"button_icon-button-text__k3vob"}">新的链接</div></button></div></div>

${validate_component(Modal, "Modal").$$render(
      $$result,
      { onDeleteFunc, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="${"header"}" style="${"font-size: 15px;font-weight: bold;padding-bottom: 5px;"}">温馨提示
    </h2>`;
        },
        default: () => {
          return `<div style="${"padding:15px;font-size:12px;"}">是否需要真的删除这个链接?</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { LinkDataList } = $$props;
  if (data?.linkData) {
    LinkDataList = data?.linkData;
    LinkDataState.updateLink(data?.linkData);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.LinkDataList === void 0 && $$bindings.LinkDataList && LinkDataList !== void 0)
    $$bindings.LinkDataList(LinkDataList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { LinkDataList },
      {
        LinkDataList: ($$value) => {
          LinkDataList = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

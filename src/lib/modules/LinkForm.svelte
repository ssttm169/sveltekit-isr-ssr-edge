<script>
    /** @type {import('./$types').PageData} */
    export let currentFormData;
    
</script>

<div class="ui-lib_list__uHeWh">
    <div class="ui-lib_list-item__MN4sf">
        <div class="settings_settings-title__2ADwu">
            <div>IP地址</div>
            <!-- <div class="settings_settings-sub-title__m9yD8">
                使用自己的 Key 可绕过密码访问限制
            </div> -->
        </div>
        <div class="settings_password-input-container__Rp0VH">
            <input
                type="text"
                placeholder="请输入IP地址"
                class="settings_password-input__Y6OWC"
                value="{currentFormData?.ipAddress}"
            />
        </div>
    </div>

    <div class="ui-lib_list-item__MN4sf">
        <div class="settings_settings-title__2ADwu">
            <div>端口号</div>
            <!-- <div class="settings_settings-sub-title__m9yD8">
                使用自己的 Key 可绕过密码访问限制
            </div> -->
        </div>
        <div class="settings_password-input-container__Rp0VH">
            <input
                type="text"
                placeholder="请输入端口号"
                class="settings_password-input__Y6OWC"
                value="{currentFormData?.port}"

            />
        </div>
    </div>
</div>


<button
    class="button_icon-button__BC_Ca home_chat-input-send__rsJfH clickable"
    role="button"
    style="position:relative;left:auto;right:auto;bottom:auto;"
    ><div class="button_icon-button-icon__qlUH3 no-dark">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            ><defs><path id="send-white_svg__a" d="M0 0h16v16H0z" /></defs><g
                ><mask id="send-white_svg__b" fill="#fff"
                    ><use xlink:href="#send-white_svg__a" /></mask
                ><g mask="url(#send-white_svg__b)"
                    ><path
                        transform="translate(1.333 2)"
                        d="M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"
                        style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                    /><path
                        transform="translate(8.003 6.117)"
                        d="M0 1.89 1.89 0"
                        style="stroke: rgb(255, 255, 255); stroke-width: 1.33333; stroke-opacity: 1; stroke-dasharray: 0, 0;"
                    /></g
                ></g
            ></svg
        >
    </div>
    <div class="button_icon-button-text__k3vob">提交</div></button
>

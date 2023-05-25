<template>
    <div id="content">
        <div class="form_container">
            <div class="title_container">
                <p class="title">注册账号</p>
            </div>
            <div class="input_container">
                <label class="input_label" for="shopname_field">店铺名称</label>
                <svg t="1683520113706" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="1544" width="24" height="24">
                    <path
                        d="M832 874.474667a21.333333 21.333333 0 0 1-21.376 21.546666H213.376A21.482667 21.482667 0 0 1 192 874.453333v-213.12H149.333333v213.12a64.149333 64.149333 0 0 0 64.042667 64.213334h597.248A64 64 0 0 0 874.666667 874.453333v-213.12h-42.666667v213.12z m-8-303.104a117.056 117.056 0 0 1-137.621333-47.573334l-40.554667-63.872-33.685333 67.712a111.168 111.168 0 0 1-100.096 62.08 111.317333 111.317333 0 0 1-100.138667-62.08l-33.706667-67.712-40.512 63.872a116.778667 116.778667 0 0 1-137.706666 47.573334c-57.429333-26.090667-86.464-93.866667-64.874667-153.685334l40.490667-112.277333 37.418666-147.029333c0.938667-3.797333 7.68-9.045333 11.605334-9.045334h576.405333c4.010667 0 10.645333 5.141333 11.605333 9.045334l38.314667 153.258666 37.930667 105.749334c21.589333 59.861333-7.466667 127.722667-64.874667 153.984m105.002667-168.469334l-36.672-101.610666-38.314667-153.258667C848.32 125.162667 824.576 106.666667 801.024 106.666667h-576.426667c-23.552 0-47.296 18.624-52.992 41.386666L136.746667 287.466667l-1.28 3.434666L94.954667 403.2c-29.333333 81.365333 10.666667 173.184 89.408 207.722667 70.976 25.984 149.76-1.877333 189.354666-64.277334a154.56 154.56 0 0 0 138.325334 85.717334 154.389333 154.389333 0 0 0 138.304-85.717334 159.872 159.872 0 0 0 189.333333 64.277334c78.72-34.730667 118.741333-126.506667 89.322667-208"
                        p-id="1545" stroke-width="1.5" stroke="#141B34"></path>
                    <path
                        d="M746.645333 362.666667H277.354667a21.333333 21.333333 0 1 0 0 42.666666h469.290666a21.333333 21.333333 0 1 0 0-42.666666"
                        p-id="1546" stroke-width="1.5" stroke="#141B34"></path>
                </svg>
                <input placeholder="仅支持1-6位中文" name="input-name" type="text" class="input_field"
                    :class="input_check.shopname_check ? '' : 'format-error'" id="shopname_field"
                    v-model="data.shopname_input" :disabled="input_lock" @input="shopnameCheck">
            </div>
            <div class="input_container">
                <label class="input_label" for="userid_field">用户ID</label>
                <svg t="1681890727074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="6385" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
                    <path
                        d="M601.29 970H422.71c-169.4 0-303.19 0-303.19-87.87v-17.57c0-164.66 136-298.61 303.19-298.61h178.58c167.16 0 303.19 133.95 303.19 298.61v17.57C904.45 970 763.94 970 601.29 970zM422.68 618.62c-138.11 0-250.49 110.3-250.49 245.91v17.57c0 35.17 144.76 35.17 250.49 35.17h178.58c87.52 0 250.49 0 250.49-35.17v-17.57c0-135.61-112.38-245.91-250.49-245.91z m80.38-90.3c-132.73 0-240.67-106.4-240.67-237.18S370.33 54 503.06 54s240.66 106.36 240.66 237.14-107.96 237.18-240.66 237.18z m-188-237.18c0 101.7 84.31 184.48 188 184.48s188-82.75 188-184.48-84.36-184.44-188-184.44S315.1 189.45 315.1 291.14z"
                        p-id="6386" stroke-width="1.5" stroke="#141B34"></path>
                </svg>
                <input placeholder="支持1-9位字母或数字或字母组合" name="input-name" type="text" class="input_field"
                    :class="input_check.userid_check ? '' : 'format-error'" id="userid_field" v-model="data.userid_input"
                    :disabled="input_lock" @input="useridCheck">
            </div>
            <div class="input_container">
                <label class="input_label" for="password_field">密码</label>
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22">
                    </path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                    <path fill="#141B34"
                        d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z">
                    </path>
                </svg>
                <input placeholder="支持1-9位字母或数字或字母组合" name="input-name" type="password" class="input_field"
                    :class="input_check.password_check ? '' : 'format-error'" id="password_field"
                    v-model="data.password_input" :disabled="input_lock" @input="passwordCheck">
            </div>
        </div>
        <button title="Sign In" class="sign-in_btn" @click="submitHandler">
            <div v-if="status_index == 0">注册</div>
            <div class="loading" v-if="status_index == 1">
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
            <div v-if="status_index == 2">注册成功,正在跳转...</div>
        </button>
    </div>
</template>

<script>
import { regUser } from '@/api/register'
export default {
    data() {
        return {
            data: {
                shopname_input: '',
                userid_input: '',
                password_input: ''
            },
            input_check: {
                shopname_check: true,
                userid_check: true,
                password_check: true,
            },
            status_index: 0,
            input_lock: false
        }
    },
    methods: {
        submitHandler() {
            if (this.data.userid_input == '' && this.data.password_input == '') {
                this.input_check.shopname_check = false
                this.input_check.userid_check = false
                this.input_check.password_check = false
                return
            }
            if (this.input_check.userid_check && this.input_check.password_check) {
                regUser(this.data).then(res => {
                    // console.log(res.data.code);
                    if (res.data.code == 200) {
                        this.status_index = 1
                        this.input_lock = true
                        setTimeout(() => {
                            this.status_index = 2
                        }, 2000);
                    }
                    if (res.data.code == 400) {
                        this.status_index = 1
                        this.input_lock = true
                        setTimeout(() => {
                            this.status_index = 0
                            this.input_lock = false
                        }, 2000);
                    }
                })
            } else {
                alert('注册失败')
            }

        },
        useridCheck() {
            const rule = /^[a-z0-9]{1,9}$/;
            const result = rule.test(this.data.userid_input)
            if (result) {
                this.input_check.userid_check = true
            } else {
                this.input_check.userid_check = false
            }
        },
        passwordCheck() {
            const rule = /^[a-z0-9]{1,9}$/;
            const result = rule.test(this.data.password_input)
            if (result) {
                this.input_check.password_check = true
            } else {
                this.input_check.password_check = false
            }
        },
        shopnameCheck() {
            const rule = /^[\u4e00-\u9fa5]{1,6}$/
            console.log(rule.test(this.data.shopname_input));
            if (rule.test(this.data.shopname_input)) {
                this.input_check.shopname_check = true
            } else {
                this.input_check.shopname_check = false
            }
        }
    },
    watch: {
        status_index(newVal) {
            if (newVal == 2) {
                setTimeout(() => {
                    this.$router.push('/')
                }, 1000);
            }
        },
    }
}
</script>

<style scoped>
#content {
    position: relative;
    width: 400px;
    height: fit-content;
    padding: 50px 40px 50px 40px;
    background-color: #ffffff;
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
        0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
        0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
}

.form_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #212121;
}

.input_container {
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
}

.icon {
    width: 20px;
    position: absolute;
    z-index: 99;
    left: 12px;
    bottom: 9px;
}

.input_label {
    font-size: 0.75rem;
    color: #8B8E98;
    font-weight: 600;
}

.input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
}

.format-error {
    box-shadow: 0px 0px 0px 2px #ff0000;
}

.format-error:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #ff0000;
    background-color: transparent;
}

.sign-in_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: 0;
    background: #115DFC;
    border-radius: 7px;
    outline: none;
    color: #ffffff;
    cursor: pointer;
    margin-top: 50px;
}

.loading svg {
    width: 1.25em;
    transform-origin: center;
    animation: rotate4 3s linear infinite;
}

.loading circle {
    fill: none;
    stroke: hsl(0, 0%, 100%);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash4 {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;
    }
}
</style>
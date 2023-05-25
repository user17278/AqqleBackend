<template>
    <div class="content">
        <form class="form_container">
            <div class="input_container">
                <label class="input_label" for="email_field">新的店名</label>
                <svg t="1682567629901" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="18020" width="24" height="24" stroke-width="1.5" stroke="#141B34">
                    <path
                        d="M512 960c-4.266667 0-8.533333-2.133333-12.8-4.266667C486.4 945.066667 170.666667 701.866667 170.666667 433.066667 170.666667 251.733333 324.266667 106.666667 512 106.666667s341.333333 145.066667 341.333333 326.4C853.333333 704 537.6 947.2 524.8 955.733333c-4.266667 2.133333-8.533333 4.266667-12.8 4.266667z m0-810.666667c-164.266667 0-298.666667 125.866667-298.666667 283.733334 0 219.733333 238.933333 430.933333 298.666667 480 59.733333-49.066667 298.666667-258.133333 298.666667-480C810.666667 275.2 676.266667 149.333333 512 149.333333z"
                        p-id="18021"></path>
                    <path
                        d="M512 576c-83.2 0-149.333333-66.133333-149.333333-149.333333s66.133333-149.333333 149.333333-149.333334 149.333333 66.133333 149.333333 149.333334-66.133333 149.333333-149.333333 149.333333z m0-256c-59.733333 0-106.666667 46.933333-106.666667 106.666667s46.933333 106.666667 106.666667 106.666666 106.666667-46.933333 106.666667-106.666666-46.933333-106.666667-106.666667-106.666667z"
                        p-id="18022"></path>
                </svg>
                <input placeholder="UserID" name="input-name" type="text" class="input_field" id="email_field">
            </div>
            <button title="Sign In" type="submit" class="sign-in_btn" @click="backTo">
                <span>保存</span>
            </button>
            <svg @click="backTo" class="close-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backTo() {
            this.$router.push('/home/setting')
        }
    },
}
</script>

<style scoped>
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: var(--main-color);
    border: none;
}

.content {
    background-color: #212121ab;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form_container {
    position: relative;
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 50px 40px 50px 40px;
    background-color: var(--projects-section);
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
        0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
        0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
}

.logo_container {
    box-sizing: border-box;
    width: 80px;
    height: 80px;
}

.logo_container img {
    width: 80px;
    height: 80px;
}

.title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
    color: var(--main-color);
    font-weight: 600;
}

.input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    /* -webkit-text-fill-color: var(--secondary-color); */
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: #ffffff;
}

.sign-in_btn {
    width: 100%;
    height: 40px;
    border: 0;
    background: #115DFC;
    border-radius: 7px;
    outline: none;
    color: #ffffff;
    cursor: pointer;
    margin-top: 30px;
}
</style>
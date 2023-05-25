<template>
  <div class="order-box-wrapper">
    <div class="order-box">
      <div class="order-box-header">
        <span title="订单日期">创建日期：2023.01.01 12:00:00</span>
        <div class="more-wrapper">
          <button class="more-wrapper-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-more-vertical">
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
          <div class="more-wrapper-popup">
            <ul>
              <li>选项1</li>
              <li>选项2</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="order-box-content-header">
        <p class="order-box-content-code">订单号：20230101120000<svg t="1682325050357" class="icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5562" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="12" height="12">
            <path
              d="M512 85.333333v-32V85.333333z m256 0v0z m-256 821.333334H256v64h256v-64zM117.333333 768v-256h-64v256h64zM256 906.666667A138.666667 138.666667 0 0 1 117.333333 768h-64A202.666667 202.666667 0 0 0 256 970.666667v-64zM650.666667 768A138.666667 138.666667 0 0 1 512 906.666667v64A202.666667 202.666667 0 0 0 714.666667 768h-64zM512 373.333333A138.666667 138.666667 0 0 1 650.666667 512h64A202.666667 202.666667 0 0 0 512 309.333333v64z m-256-64A202.666667 202.666667 0 0 0 53.333333 512h64A138.666667 138.666667 0 0 1 256 373.333333v-64z m256-192h256v-64h-256v64zM906.666667 256v256h64V256h-64z m0 256A138.666667 138.666667 0 0 1 768 650.666667v64A202.666667 202.666667 0 0 0 970.666667 512h-64zM768 117.333333A138.666667 138.666667 0 0 1 906.666667 256h64A202.666667 202.666667 0 0 0 768 53.333333v64z m-256-64A202.666667 202.666667 0 0 0 309.333333 256h64A138.666667 138.666667 0 0 1 512 117.333333v-64zM373.333333 341.333333V256h-64v85.333333h64zM256 373.333333h85.333333v-64H256v64z m85.333333 0h170.666667v-64H341.333333v64z m426.666667 277.333334h-85.333333v64h85.333333v-64zM650.666667 512v170.666667h64v-170.666667h-64z m0 170.666667v85.333333h64v-85.333333h-64z"
              p-id="5563"></path>
          </svg></p>
        <p class="order-box-content-detail">姓名：测试人</p>
        <p class="order-box-content-detail">手机号码：123-4567-89</p>
      </div>
      <div class="order-box-status">
        <span class="order-box-status-header">订单状态：</span>
        <span class="order-box-status-content">待处理</span>
        <span class="order-box-status-header"></span>
      </div>
      <div class="order-box-footer">
        <div class="confirm-btn" style="color: #ff942e;">
          确认无误
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.order-box-wrapper {
  width: 33.3%;
  padding: 8px;
  transition: .2s;
}

.order-box {
  --main-color-card: #fee4cb;
  border-radius: 30px;
  padding: 16px;
  background-color: var(--main-color-card);

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--main-color);

    span {
      color: #4A4A4A;
      opacity: .7;
      font-size: 14px;
      line-height: 16px;
    }

    .more-wrapper {
      position: relative;

      &-btn {
        padding: 0;
        height: 14px;
        width: 24px;
        height: 24px;
        position: relative;
        background-color: transparent;
        border: none;
        flex-shrink: 0;
        z-index: 2;
      }

      &-popup {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        background-color: var(--more-list-bg);
        z-index: 1;
        display: none;
      }
    }
  }

  &-content-header {
    text-align: left;
    margin-bottom: 16px;

    p {
      margin: 0;
    }

    .order-box-content-code {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      opacity: .7;
    }

    .order-box-content-detail {
      font-size: 14px;
      line-height: 24px;
      opacity: .7;
    }

  }

  &-status {
    display: flex;
    transition: .2s;
    white-space: nowrap;

    &-header {
      white-space: nowrap;
      flex: 1;
      font-size: 14px;
      line-height: 24px;
      opacity: .7;
    }

    &-content {
      font-size: 20px;
      font-weight: 700;
    }
  }

  &-footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 16px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background-color: rgba(255, 255, 255, 0.6);
      width: calc(100% + 32px);
      top: 0;
      left: -16px;
      height: 1px;
    }

    .confirm-btn {
      background-color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
      border-radius: 20px;
      flex-shrink: 0;
      padding: 6px 16px;
      font-weight: 700;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 980px) {
  .order-box-wrapper {
    width: 50%;
  }
}

@media screen and (max-width: 520px) {
  .order-box-wrapper {
    width: 100%;
  }

  .order-box-content-code {
    font-size: 12px !important;
    line-height: 16px !important;
  }

  .order-box-content-detail {
    font-size: 12px !important;
    line-height: 16px !important;
  }

  .order-box-header>span {
    font-size: 10px !important;
  }

  .order-box-status-content {
    font-size: 16px !important;
  }

  .confirm-btn {
    font-size: 8px !important;
    padding: 6px 6px;
    text-align: center;
  }

  .order-box>* {
    margin-right: 10px;
  }

  .more-wrapper {
    right: 2px;
    top: 10px;
  }
}
</style>
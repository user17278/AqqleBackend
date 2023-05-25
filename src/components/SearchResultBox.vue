<template>
    <div class="search-result-box">
        <div class="order-code">订单编号：{{ item.order_code }}</div>
        <div class="order-name">姓名：{{ item.order_name }}</div>
        <div class="order-phone">手机号码：{{ item.order_phone }}</div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
.search-result-box {
    width: 100%;
    margin-bottom: 2px;
    padding: 8px;
    border-top: 1px solid var(--dialogue-section-box-border);
    cursor: pointer;

    &:hover {
        background-color: var(--dialogue-section-box-hover);
        border-top-color: var(--link-color-hover);

    }
}

.order-code,
.order-name,
.order-phone {
    color: #7b7992;
    margin-bottom: 2px;
    display: block;
    font-weight: 500;
    font-size: 10px;
}
</style>
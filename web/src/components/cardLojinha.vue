<template>
  <div class="card-lojinha" v-for="(item, index) in items" :key="index">
    <img :src="item.imageSrc" alt="" class="product-image" />
    <div class="price-container">
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.card-lojinha {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #EEF5FF;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  width: calc(33.333% - 10px);
  max-width: 120px;
  margin-bottom: 15px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.price-container {
  background-color: #3888ff;
  padding: 10px;
  text-align: center;
}

.price {
  font-size: 0.8rem;
  font-weight: bold;
  color: #FFF;
}
</style>
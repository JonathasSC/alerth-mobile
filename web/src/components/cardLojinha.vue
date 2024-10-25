<template>
  <div class="card-lojinha" v-for="(item, index) in items" :key="index">
    <img :src="item.imageSrc" alt="Imagem do produto" class="product-image" />
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
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  width: calc(33.333% - 10px);
  max-width: 120px;
  margin-bottom: 10px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.price-container {
  background-color: #e0f0ff;
  padding: 10px;
  text-align: center;
}

.price {
  font-size: 1.2em;
  font-weight: bold;
  color: #3888ff;
}
</style>

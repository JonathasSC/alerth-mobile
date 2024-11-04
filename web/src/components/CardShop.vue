<template>
  <div class="shop-card" v-for="(item, index) in items" :key="index">
    <img :src="item.imagePath" />
    <div class="shop-card__price-container">
      <p>{{ item.price }}</p>
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
.shop-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eef5ff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  width: calc(33.333% - 10px);
  max-width: 120px;
  margin-bottom: 15px;
}

.shop-card img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.shop-card__price-container {
  background-color: #3888ff;
  text-align: center;
}

.shop-card__price-container p {
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
}
</style>
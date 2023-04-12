<template>
  <div class="gallery" @mouseleave="onMouseLeave">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      @mouseenter="onMouseEnter(index)"
    />
    <div
      v-if="supportsSelectorHas"
      class="hover-overlay"
      :style="{ transform: overlayTransform, outlineColor: overlayColor }"
    ></div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      images: [
        {
          src: require("@/assets/collaboraters/c1.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c21.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c17.png"),
        },
        {
          src: require("@/assets/collaboraters/c4.png"),
        },
        {
          src: require("@/assets/collaboraters/c5.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c6.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c18.png"),
        },
        {
          src: require("@/assets/collaboraters/c8.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c9.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c10.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c11.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c12.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c13.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c14.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c15.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c16.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c20.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c7.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c19.jpg"),
        },
        {
          src: require("@/assets/collaboraters/c3.png"),
        },
      ],
      numRowsCols: 3,
      overlayTransform: "",
      overlayColor: "",
      supportsSelectorHas:
        window.CSS && CSS.supports && CSS.supports("selector(:has(*))"),
    };
  },
  methods: {
    onMouseEnter(index) {
      const col = index % this.numRowsCols;
      const row = Math.floor(index / this.numRowsCols);
      this.overlayTransform = `translate(${col * 100}%, ${row * 100}%)`;
      this.overlayColor = index % 2 === 0 ? "#FF6B6B" : "#C7F464";
    },
    onMouseLeave() {
      this.overlayTransform = "";
      this.overlayColor = "";
    },
  },
};
</script>
  
  <style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  position: relative;
  cursor: pointer;
  margin-left: 15%;
  margin-right: 15%;

  margin-bottom: 10%;
  align-items: center;
  justify-content: space-between;
  margin-top: 00%;
}

.gallery > img {
  transition: 0.3s;
  width: 200px;
  outline: 10px solid transparent;
  padding: 25px;
  margin-top: 50%;
  margin-bottom: 0%;
  filter: grayscale(100%);
  transition: transform 0.2s ease-in-out;
}


.gallery > img:hover {
  filter: grayscale(0%);

  transform: scale(1.1);

}

.gallery > img:not(:hover) {
  filter: grayscale(90%);
}
</style> 
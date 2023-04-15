<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <button class="btn btn-info btn-block" @click="beAMember">
            Be A Member
          </button>
        </div>
        <div class="col-sm-4">
          <button class="btn btn-info btn-block" @click="donateUs">
            Donate Us
          </button>
        </div>
        <div class="col-sm-4">
          <button class="btn btn-info btn-block" @click="feedbackSuggestions">
            Feedback and Suggestions
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script>
export default {
  methods: {
    beAMember() {
      this.$router.push({ name: "BeAMember" });
    },
    donateUs() {
      this.$router.push({ name: "DonateUs" });
    },
    feedbackSuggestions() {
      this.$router.push({ name: "FeednSuggestion" });
    },
  },
};
</script>
  
  <style scoped>
.footer {
  width: 100%;
  height:10vh;
  background-color: #F5F5DC;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  text-align: center;

  bottom: 0;
  position: relative;
  left: 0;

  z-index: 0;
}
</style>
  
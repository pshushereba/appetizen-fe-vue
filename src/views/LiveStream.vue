<template>
  <div class="flex-1 relative z-0 flex overflow-hidden">
    <main
      class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
    >
      <!-- Start main area-->
      <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <div ref="callContainer" id="callContainer"></div>
      </div>
      <!-- End main area -->
    </main>
    <aside
      class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200"
    >
      <!-- Start secondary column (hidden on smaller screens) -->
      <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
        <div
          class="h-full border-2 border-gray-200 border-dashed rounded-lg w-5"
        >
        <p>Testing</p>
        </div>
      </div>
      <!-- End secondary column -->
    </aside>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      participants: []
    }
  },
 async mounted() {
   axios.post("http://localhost:5000/createRoom")
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    // const testCall = window.DailyIframe.createCallObject()
    // console.log("testCall", testCall)
    const callContainer = this.$refs["callContainer"];
    const callFrame = window.DailyIframe.createFrame(callContainer, {
  showLeaveButton: true,
  iframeStyle: {
    position: 'fixed',
    width: '50%',
    height: '50%'
  }
});
    console.log(callFrame)
    this.participants = await callFrame.join({ url: "https://appetizen.daily.co/WEsDuVeAFNi4B03rm4uM" });
  }
};
</script>

<style lang="scss" scoped></style>

import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";
import CldPoster from "../../src/components/CldVideo/CldPoster.vue";

describe("CldPoster", () => {
  it("renders", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top">
          <cld-poster publicId="small_dinosaur" />
        </cld-video>
      `,
      components: { CldVideo, CldPoster }
    });
    
    await Vue.nextTick();
    
    const video = wrapper.find('video');
    expect(video.is("video")).toBe(true);
    
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/small_dinosaur"
    );
  });
});

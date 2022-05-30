import { mount } from "@vue/test-utils";
import UserCard from "./UserCard.vue";

const factory = (props = {}) => {
  return mount(UserCard, { propsData: props });
};

describe("UserCard", () => {
  test("UserCard - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });
});

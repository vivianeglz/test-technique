import { mount } from "@vue/test-utils";
import PaginationList from ".";

const factory = (props = {}) => {
  return mount(PaginationList, { propsData: props });
};

describe("PaginationList", () => {
  test("PaginationList - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("PaginationList - renders the correct template", () => {
    const wrapper = factory({ totalPages: 5, page: 2 });
    expect(wrapper.findAll(".pagination-list__btn").at(4).exists()).toBe(true);
    expect(wrapper.findAll(".pagination-list__btn").at(1).classes()).toContain("pagination-list__btn--active");
  });
});

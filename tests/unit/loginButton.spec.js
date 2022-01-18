import { mount } from "@vue/test-utils";
import UyeOl from "@/components/UyelikTab.vue"

describe('UyelikTab.vue', () => {
    it('show modal ', () => {
        const onClose = jest.fn()
        const wrapper = mount(UyeOl, {
            propsData: {
                onClose
            }
        });

        wrapper.find('#jest').trigger('click')
        expect(onClose).toHaveBeenCalled()
    });

});
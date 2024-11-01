import {mount} from '@vue/test-utils';
import ProfilePic from '@orangehrm/oxd/core/components/ProfilePic/ProfilePic.vue';
import {SIZE_SMALL} from '@orangehrm/oxd/core/components/ProfilePic/types';

describe('ProfilePic.vue', () => {
  it('renders OXD ProfilePic with image', () => {
    const wrapper = mount(ProfilePic, {
      slots: {
        default: `<img/>`,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders OXD ProfilePic with small image', () => {
    const wrapper = mount(ProfilePic, {
      props: {
        displayType: SIZE_SMALL,
      },
      slots: {
        default: `<img/>`,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit linkClick with event payload on link click when isCustomFunctionExist is true', async () => {
    const wrapper = mount(ProfilePic, {
      props: {
        link: 'https://orangehrm.com',
        isCustomFunctionExist: true,
      },
    });

    const link = wrapper.find('a');
    await link.trigger('click');

    expect(wrapper.emitted('linkClick')).toBeTruthy();
  });

  it('should not emit linkClick when isCustomFunctionExist is false', async () => {
    const wrapper = mount(ProfilePic, {
      props: {
        link: 'https://orangehrm.com',
        isCustomFunctionExist: false,
      },
    });

    const link = wrapper.find('a');
    await link.trigger('click');

    expect(wrapper.emitted('linkClick')).toBeFalsy();
  });
});

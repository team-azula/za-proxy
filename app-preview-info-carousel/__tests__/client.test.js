import React from 'react';
import App0 from '../client/src/components/App0.jsx';
import ItemsCarousel from '../client/src/components/ImageCarousel.jsx';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, render } from 'enzyme';

describe('Components should exist', () => {

  it('Component Items carousel should exist', () => {
    const wrapper = shallow(<ItemsCarousel />);
    expect(wrapper.exists()).toBe(true);

  });

  it('Component App should exist', () => {
    const wrapper = shallow(<App0/>);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find(App).length).toEqual(1);
  });




  // test('should display first photo in list when <ItemsCarousel /> is rendered', () => {
  //   const ind = 5;
  //   const photoDisplay = photoCarousel().find('.carousel-img');

  //   expect(photoDisplay.find('img').prop('src')).toBe(images[0].photo_url);
  //   expect(photoCarousel().state('index')).toBe(0);
  // });


});









    //     describe('click left chevron', () => {
    //         it('should decrease activeItemIndex by 1, when current position is above 0', () => {
    //             const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    //             c.find('leftChevron').simulate('click');

    //             expect(c.state('activeItemIndex')).toBe(0);
    //         });

    //         it('should make no change to activeItemIndex when current position is at 0', () => {
    //             const c = shallow(<ImageCarousel activeItemIndex={0} />);

    //             c.find('leftChevron').simulate('click');

    //             expect(c.state('activeItemIndex')).toBe(0);
    //         });
    //     });


    //     describe('click right chevron', () => {
    //       it('should increase activeItemIndex by 1, when current position is below length ', () => {
    //           const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    //           c.find('rightChevron').simulate('click');

    //           expect(c.state('activeItemIndex')).toBe(2);
    //       });

    //   });
    // });


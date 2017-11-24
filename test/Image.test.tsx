import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Image from "../src/Image";

console.info = function() {};

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

test('ImageButton renders correctly', () => {
    let component = renderer.create(
        <Image alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

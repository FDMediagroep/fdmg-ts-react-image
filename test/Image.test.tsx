import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Img from "../src/Image";

console.info = () => {};

describe('Image', () => {
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('renders correctly', () => {
        const component = renderer.create(
            <Img alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

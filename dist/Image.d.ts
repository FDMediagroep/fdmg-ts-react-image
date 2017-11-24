/// <reference types="react" />
import * as React from 'react';
export interface Props {
    className?: string;
    alt: string;
    src: string;
}
/**
 * Renders an image.
 */
export default class Image extends React.Component<Props, any> {
    state: any;
    props: Props;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

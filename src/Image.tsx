import * as React from 'react';
import {MouseEvent} from "react";

export interface Props {
    className?: string;
    alt: string;
    src: string;
}

/**
 * Renders an image.
 */
export default class Image extends React.Component<Props, any> {
    public state: any;
    public props: Props;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('Image component', props);
    }

    componentDidMount() {
        console.info('Image mounted');
    }
        
    componentWillUnmount() {
        console.info('Image will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('Image next props', nextProps);
    }

    render() {
        return (
            <img 
                src={this.props.src}
                alt={this.props.alt}
                className={this.props.className}
            />
        );
    }
}
import * as React from 'react';

export interface Props {
    className?: string;
    alt: string;
    src: string;
}

/**
 * Renders an image.
 */
export default class Img extends React.Component<Props, any> {
    public state: any;
    public props: Props;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('Image component', props);
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

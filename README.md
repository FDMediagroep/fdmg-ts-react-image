> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

# fdmg-ts-react-image

[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-image)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-image/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-image?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fts-react-image.svg)](https://badge.fury.io/js/%40fdmg%2Fts-react-image)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-image.svg)](https://greenkeeper.io/)

[ReactJS](https://reactjs.org/) Image component. This component renders an image.

## Installation
- Run `npm i --save-dev @fdmg/ts-react-image`

or

- Run `yarn add @fdmg/ts-react-image --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import Img from 'fdmg-ts-react-image';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Img
                src={"img/button.svg"} 
                className="image-btn btn"
                alt="Special button"
            />
        );
    }
}
```

### Resulting HTML
```
    <img src="img/button.svg" alt="Special button" class="image-btn btn"/>
```

import React from 'react';
import Header from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Task", module)
    .add('default', () => <Header />);
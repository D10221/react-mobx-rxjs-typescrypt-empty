import * as React from "react";
import Component = React.Component;

export interface AppViewProps {

}

export class AppView extends Component<AppViewProps, any> {
    constructor(p?: AppViewProps, context?: any) {
        super(p, context);
    }
    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    }
}
import React, { Fragment } from "react";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */

    render() {
        let name = 'Liberty';
        return (
            <>
                <div className="First">
                    {console.log('My name is: ', name)}
                    Wellcome! My name is {name}
                </div>
                <div className="LastS">
                    Newbie
                </div>
            </>
        )
    }
}

export default MyComponent;
import React, { Component } from "react";

export class Copyright extends Component {
    render() {
        const date = new Date();
        const years = date.getFullYear();

        return (
            <div className="text-center">
                <hr />
                Copyright &copy; {years} <em>ReactMemo</em> all right reserved.
            </div>
        );
    }
}

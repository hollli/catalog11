import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>

                        <span className={'logo'}></span>
                        <ul className={'nav'}>
                            <li>
                                {/*<Link to="/">*/}
                                Home
                                {/*</Link>*/}
                            </li>
                            <li>
                                {/*<Link to="/About">*/}
                                About
                                {/*</Link>*/}
                            </li>
                            <li>
                                {/*<Link to="/Contacts">*/}
                                Contacts
                                {/*</Link>*/}
                            </li>
                            <li>
                                {/*<Link to="/Profile">*/}
                                Profile
                                {/*</Link>*/}
                            </li>
                        </ul>
            </div>
        );
    }
}

export default About;
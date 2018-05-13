import PropTypes from 'prop-types';
import React from 'react';

export default class Testimonials extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
    <section id="test">
        <div className="container">
            <div className="col-lg-12">
                <div className="header">
                    <br/>
                    <h1>Testimonials</h1>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 portfolio-item className">
                    <p>
                        <i>“It looks really cool! I use GCSE Bitesize but it doesn’t always explain things that well.”</i></p>
                    <p> Blessing, GCSE Student, Brixton </p>
                </div>
                <div className="col-md-6 portfolio-item dna">
                    <p>
                        <i> “This looks like it would be very helpful. Right now I use Gojimo, but it just uses lots of questions”</i></p>
                    <p>Joseph, A-Level Biology Student, Camberwell
                    </p>
                </div>
            </div>
        </div>
    </section>

    );
  }
}

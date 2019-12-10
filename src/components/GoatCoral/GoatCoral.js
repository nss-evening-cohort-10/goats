import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCoral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const myGoats = this.props.butts;

    const goatCards = myGoats.map((goat)  => <Goat key={goat.id} goat={goat}/>);

    return (
        <div className="goatCoral">
            {goatCards}
        </div>
      );
  }
}

export default GoatCoral;

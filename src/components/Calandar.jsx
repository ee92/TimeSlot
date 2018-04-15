const React = require('react')

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

class Calandar extends React.Component {

  state = {
    events: []
  }

  render() {

    BigCalendar.momentLocalizer(moment)

    return (
      <div style={{height: window.innerHeight}}>
        <BigCalendar
          selectable
          defaultView="week"
          views={["month", "week", "day"]}
          events={this.state.events}
          onSelectSlot={slotInfo => {
            let events = this.state.events
            let event = {
              start: slotInfo.start,
              end: slotInfo.end
            }
            events.push(event)
            this.setState({events})
          }}
          onSelectEvent={eventInfo => console.log(eventInfo)}
        />
      </div>
    )
  }

}

module.exports = Calandar
